#!/usr/bin/env node
/*
  R Paul's Guitar Academy — reference entitlement server
  =====================================================
  A minimal, dependency-free implementation of the two endpoints the app expects. It is a
  REFERENCE, not production code: entitlements are held in memory and "authentication" is a
  demo token. Swap the marked sections for your real auth and database.

    GET  /entitlement  -> {status:'free'|'full', expiresAt:<ISO|null>}
    GET  /curriculum   -> {months:{...}}   402 if the caller is not entitled
    POST /redeem       -> {ok:true, entitlement} | {ok:false, reason, message}

  Run:
      node entitlement-server.js
      node entitlement-server.js --grant          # start with the demo user entitled
      node entitlement-server.js --grant --days 30

  Then in guitar_academy.html set:
      LICENSING.apiBase = 'http://localhost:8787'
*/

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 8787;
const args = process.argv.slice(2);
const GRANT = args.includes('--grant');
const DAYS = (() => {
  const i = args.indexOf('--days');
  return i >= 0 ? parseInt(args[i + 1], 10) : null;
})();

// ---- Load the paid curriculum -------------------------------------------------
const CURRICULUM_FILE = path.join(__dirname, 'curriculum-locked.json');
let PAID;
try {
  PAID = JSON.parse(fs.readFileSync(CURRICULUM_FILE, 'utf8'));
} catch (e) {
  console.error(`Could not read ${CURRICULUM_FILE}: ${e.message}`);
  process.exit(1);
}

// ---- REPLACE THIS: your user store --------------------------------------------
// Keyed by user id. In production this is a database table written by your payment
// webhook (Stripe/Paddle/Lemon Squeezy) when a purchase completes.
const entitlements = new Map();
if (GRANT) {
  entitlements.set('demo-user', {
    status: 'full',
    expiresAt: DAYS ? new Date(Date.now() + DAYS * 86400000).toISOString() : null,
  });
}

// ---- REPLACE THIS: your authentication ----------------------------------------
// Real version: verify a session cookie or JWT and return the user id, or null.
function authenticate(req) {
  const auth = req.headers['authorization'] || '';
  if (auth.startsWith('Bearer ')) return auth.slice(7).trim() || null;
  const cookie = req.headers.cookie || '';
  const m = cookie.match(/(?:^|;\s*)uid=([^;]+)/);
  if (m) return decodeURIComponent(m[1]);
  return 'demo-user';       // demo fallback so the flow is testable without a login
}

/* The two products. 'annual' extends from whichever is later — now, or the end of an
   unexpired term — so renewing early never costs the customer the days they already
   paid for. 'lifetime' clears the expiry entirely and can never be downgraded by a
   later annual purchase. */
const PLAN_DAYS = { annual: 365 };

function grantPlan(userId, plan) {
  const existing = entitlements.get(userId);
  if (plan === 'lifetime') {
    return { status: 'full', plan: 'lifetime', expiresAt: null };
  }
  // Someone who already owns lifetime should not be knocked back to a dated term.
  if (existing && existing.status === 'full' && !existing.expiresAt) {
    return existing;
  }
  const unexpired = existing && existing.expiresAt &&
                    new Date(existing.expiresAt).getTime() > Date.now();
  const base = unexpired ? new Date(existing.expiresAt).getTime() : Date.now();
  return {
    status: 'full',
    plan: 'annual',
    expiresAt: new Date(base + (PLAN_DAYS[plan] || 365) * 86400000).toISOString(),
  };
}

function entitlementFor(userId) {
  const e = entitlements.get(userId);
  if (!e) return { status: 'free', plan: null, expiresAt: null };
  if (e.expiresAt && new Date(e.expiresAt).getTime() <= Date.now()) {
    // Expired: report it as such so the client can show a renew prompt rather than
    // silently dropping the user back to free.
    return { status: 'full', expiresAt: e.expiresAt };
  }
  return e;
}
function isActive(e) {
  return e.status === 'full' && (!e.expiresAt || new Date(e.expiresAt).getTime() > Date.now());
}

// ---- REPLACE THIS: your redemption-code table ---------------------------------
/* Codes that grant access directly (beta testers, students, reviewers, gifts, promos).
   This is NOT the same thing as a checkout discount — a percentage-off coupon belongs in
   Stripe/Paddle, not here. These codes bypass payment entirely, so they are validated
   server-side only. Never ship a code list to the browser.

   Fields:
     durationDays   null = perpetual, or a number of days from redemption
     maxRedemptions null = unlimited, or a total cap across all users
     expiresAt      null, or an ISO date after which the code stops working
     active         set false to kill a code immediately without deleting history

   Never use a real code as placeholder or example text in the UI — that hands a free
   unlock to anyone who opens the app. */
const codeStore = new Map([
  ['LAUNCH2026',   {plan: 'lifetime', durationDays: null, maxRedemptions: 100,  expiresAt: null, active: true,  note: 'launch promo, unlimited access'}],
  ['BETA-TESTER',  {plan: 'annual',   durationDays: 365,  maxRedemptions: 50,   expiresAt: null, active: true,  note: '1 year for testers'}],
  ['TEACHER-30',   {plan: 'annual',   durationDays: 30,   maxRedemptions: null, expiresAt: null, active: true,  note: '30-day classroom trial'}],
  ['EXPIRED-DEMO', {durationDays: 30,   maxRedemptions: null, expiresAt: '2020-01-01T00:00:00Z', active: true, note: 'demo of an expired code'}],
  ['USEDUP-DEMO',  {durationDays: 30,   maxRedemptions: 0,    expiresAt: null, active: true,  note: 'demo of an exhausted code'}],
  ['OFF-DEMO',     {durationDays: 30,   maxRedemptions: null, expiresAt: null, active: false, note: 'demo of a disabled code'}],
]);

// Redemption ledger: which user redeemed which code, and how many times each code has
// been used. In production these are database rows, not Maps.
const redemptions = [];                 // {code, userId, at}
const redemptionCounts = new Map();     // code -> count

/* Users type codes with stray spaces, mixed case, and sometimes the dashes from a
   printed card. Normalise before lookup so those all match, and so a code is stored
   in exactly one canonical form. */
function normaliseCode(raw) {
  // Strip spaces, underscores AND dashes so "BETA-TESTER", "beta tester", "BETA_TESTER"
  // and "betatester" all resolve to the same code. Consequence: two codes that differ
  // only by a separator would collide, so don't create such a pair.
  return String(raw || '').trim().toUpperCase().replace(/[\s_-]+/g, '');
}
function lookupCode(raw) {
  const n = normaliseCode(raw);
  if (!n) return null;
  for (const [key, val] of codeStore) {
    if (normaliseCode(key) === n) return { key, ...val };
  }
  return null;
}

/* Brute-force protection. Codes are short and guessable; without throttling an attacker
   can simply enumerate them. Keyed per user so one account cannot grind the space. */
const attempts = new Map();             // userId -> {count, first}
const MAX_ATTEMPTS = 6;
const ATTEMPT_WINDOW_MS = 10 * 60 * 1000;

function tooManyAttempts(userId) {
  const a = attempts.get(userId);
  if (!a) return false;
  if (Date.now() - a.first > ATTEMPT_WINDOW_MS) { attempts.delete(userId); return false; }
  return a.count >= MAX_ATTEMPTS;
}
function recordFailure(userId) {
  const a = attempts.get(userId);
  if (!a || Date.now() - a.first > ATTEMPT_WINDOW_MS) attempts.set(userId, { count: 1, first: Date.now() });
  else a.count++;
}

/* Returns {ok:true, entitlement} or {ok:false, reason, message}. Messages are written to
   be shown to the user as-is. */
function redeemCode(userId, rawCode) {
  if (tooManyAttempts(userId)) {
    return { ok: false, reason: 'rate_limited',
             message: 'Too many attempts. Please wait ten minutes and try again.' };
  }
  const entry = lookupCode(rawCode);
  if (!entry || !entry.active) {
    recordFailure(userId);
    return { ok: false, reason: 'invalid', message: 'That code is not valid.' };
  }
  if (entry.expiresAt && new Date(entry.expiresAt).getTime() <= Date.now()) {
    recordFailure(userId);
    return { ok: false, reason: 'expired', message: 'That code has expired.' };
  }
  const used = redemptionCounts.get(entry.key) || 0;
  if (entry.maxRedemptions !== null && used >= entry.maxRedemptions) {
    recordFailure(userId);
    return { ok: false, reason: 'exhausted', message: 'That code has already been fully claimed.' };
  }
  if (redemptions.some(r => r.userId === userId && r.code === entry.key)) {
    return { ok: false, reason: 'already_redeemed',
             message: 'You have already redeemed that code.' };
  }

  const existing = entitlementFor(userId);
  // If the user already has perpetual access there is nothing to add; say so rather than
  // silently burning the code.
  if (existing.status === 'full' && !existing.expiresAt) {
    return { ok: false, reason: 'already_full',
             message: 'You already have full access — no code needed.' };
  }

  // Time-limited codes extend from whichever is later: now, or an unexpired current term.
  let expiresAt = null;
  if (entry.durationDays !== null) {
    const base = (existing.status === 'full' && existing.expiresAt &&
                  new Date(existing.expiresAt).getTime() > Date.now())
      ? new Date(existing.expiresAt).getTime()
      : Date.now();
    expiresAt = new Date(base + entry.durationDays * 86400000).toISOString();
  }

  entitlements.set(userId, {
    status: 'full',
    plan: entry.plan || (expiresAt ? 'annual' : 'lifetime'),
    expiresAt,
  });
  redemptionCounts.set(entry.key, used + 1);
  redemptions.push({ code: entry.key, userId, at: new Date().toISOString() });
  attempts.delete(userId);
  console.log(`[redeem]      ${userId} redeemed ${entry.key} -> ${expiresAt || 'perpetual'}`);
  return { ok: true, entitlement: entitlements.get(userId), code: entry.key };
}

// Allowed browser origins. Replace with your real front-end origin(s) in production.
// NOTE: a wildcard '*' is NOT usable here. When the client sends credentials (cookies),
// browsers reject a wildcard Access-Control-Allow-Origin outright, so the exact origin
// must be echoed back.
const ALLOWED_ORIGINS = process.env.ALLOWED_ORIGINS
  ? process.env.ALLOWED_ORIGINS.split(',').map(o => o.trim())
  : null;   // null = echo whatever origin asked (development convenience only)

function corsHeaders(req) {
  const origin = req.headers.origin;
  const h = {
    'Vary': 'Origin',
    'Access-Control-Allow-Headers': 'Authorization, Accept, Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Credentials': 'true',
  };
  if (!origin) return h;
  if (!ALLOWED_ORIGINS || ALLOWED_ORIGINS.includes(origin)) {
    h['Access-Control-Allow-Origin'] = origin;
  }
  return h;
}

function send(res, code, body, req, extraHeaders = {}) {
  const payload = JSON.stringify(body);
  res.writeHead(code, Object.assign({
    'Content-Type': 'application/json',
    'Cache-Control': 'no-store',
  }, corsHeaders(req || {headers:{}}), extraHeaders));
  res.end(payload);
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://localhost:${PORT}`);

  if (req.method === 'OPTIONS') return send(res, 204, {}, req);

  const userId = authenticate(req);
  if (!userId) return send(res, 401, { error: 'not signed in' }, req);

  if (url.pathname === '/entitlement') {
    const e = entitlementFor(userId);
    console.log(`[entitlement] ${userId} -> ${e.status}${e.expiresAt ? ' until ' + e.expiresAt : ''}`);
    return send(res, 200, e, req);
  }

  if (url.pathname === '/redeem' && req.method === 'POST') {
    let body = '';
    let tooBig = false;
    req.on('data', chunk => {
      body += chunk;
      if (body.length > 2048) { tooBig = true; req.destroy(); }   // don't buffer junk
    });
    req.on('end', () => {
      if (tooBig) return send(res, 413, { ok: false, message: 'Request too large.' }, req);
      let parsed;
      try { parsed = JSON.parse(body || '{}'); }
      catch (e) { return send(res, 400, { ok: false, message: 'Malformed request.' }, req); }
      const result = redeemCode(userId, parsed.code);
      if (!result.ok) {
        const code = result.reason === 'rate_limited' ? 429 : 400;
        return send(res, code, result, req);
      }
      return send(res, 200, result, req);
    });
    return;
  }

  if (url.pathname === '/curriculum') {
    const e = entitlementFor(userId);
    if (!isActive(e)) {
      console.log(`[curriculum]  ${userId} -> 402 (not entitled)`);
      return send(res, 402, { error: 'payment required' }, req);
    }
    console.log(`[curriculum]  ${userId} -> 200 (${Object.keys(PAID.months).length} months)`);
    return send(res, 200, { months: PAID.months }, req);
  }

  // Demo helpers so you can exercise the flow without wiring payments yet.
  if (url.pathname === '/dev/grant') {
    // ?plan=annual|lifetime  (or ?days=N for an arbitrary term)
    const plan = url.searchParams.get('plan');
    const days = parseInt(url.searchParams.get('days'), 10);
    if (plan === 'lifetime') {
      entitlements.set(userId, { status: 'full', plan: 'lifetime', expiresAt: null });
    } else if (plan === 'annual') {
      entitlements.set(userId, grantPlan(userId, 'annual'));
    } else {
      entitlements.set(userId, {
        status: 'full',
        plan: Number.isInteger(days) ? 'annual' : 'lifetime',
        expiresAt: Number.isInteger(days) ? new Date(Date.now() + days * 86400000).toISOString() : null,
      });
    }
    return send(res, 200, entitlementFor(userId), req);
  }
  if (url.pathname === '/dev/revoke') {
    entitlements.delete(userId);
    return send(res, 200, { status: 'free', expiresAt: null }, req);
  }
  if (url.pathname === '/dev/expire') {
    entitlements.set(userId, { status: 'full', expiresAt: new Date(Date.now() - 1000).toISOString() });
    return send(res, 200, entitlementFor(userId), req);
  }

  send(res, 404, { error: 'not found' }, req);
});

server.listen(PORT, () => {
  console.log(`Entitlement server on http://localhost:${PORT}`);
  console.log(`  paid months loaded: ${Object.keys(PAID.months).length}`);
  console.log(`  demo user entitled: ${GRANT ? 'yes' : 'no'}`);
  console.log(`  dev helpers: /dev/grant?days=30  /dev/revoke  /dev/expire`);
});
