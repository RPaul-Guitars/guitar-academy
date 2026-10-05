/* R Paul's Guitar Academy — Deutsch
 *
 * Lot 1: Navigation, Modulüberschriften, Schaltflächen, Kauf, Einstufungstest und
 * Modul-Einführungen — alles, was auf jedem Bildschirm sichtbar ist.
 *
 * Fehlende Schlüssel fallen automatisch auf Englisch zurück; diese Datei ist also
 * sofort einsetzbar und kann lotweise ergänzt werden.
 *
 * Musikalische Konventionen:
 *   - Notennamen folgen der deutschen Tradition: H statt B, B statt B♭. Die App
 *     stellt das für Deutsch automatisch um.
 *   - Akkordsymbole (G, Am, D7) bleiben in internationaler Schreibweise, wie in
 *     deutschsprachigen Gitarrenschulen üblich.
 *   - „Bund“ = fret, „Griffbrett“ = fretboard, „Barré“ = barre chord,
 *     „Leersaite“ = open string, „Gehörbildung“ = ear training.
 */
window.LANG_de = {

  /* ---- Lot 2: Panel-Beschreibungen und Onboarding ---- */
  "This is a full 12-month method, not a set of loose tools. Here's how the pieces fit:":
    "Das hier ist eine vollständige Methode über 12 Monate, kein loser Werkzeugkasten. So greifen die Teile ineinander:",
  "<b>This Month</b> below is your assignment. It lists what to practice and links straight to the modules you need — tap any of those amber chips to jump there.":
    "<b>Dieser Monat</b> weiter unten ist deine Aufgabe. Dort steht, was zu üben ist, mit direkten Verknüpfungen zu den nötigen Modulen — tippe einfach auf eines der bernsteinfarbenen Felder.",
  "<b>Practice the five disciplines</b> — ear training, rhythm, chord progressions, fretboard fluency, and soloing. The daily split on this page suggests 45–60 minutes.":
    "<b>Übe die fünf Disziplinen</b> — Gehörbildung, Rhythmus, Akkordfolgen, Griffbrettsicherheit und Solospiel. Die Tagesaufteilung auf dieser Seite schlägt 45 bis 60 Minuten vor.",
  "<b>Log the session</b> in Practice Log when you finish. That drives your streak and the progress marker on the fretboard above.":
    "<b>Trage die Einheit</b> nach dem Üben ins Übungstagebuch ein. Das treibt deine Serie an und speist die Fortschrittsmarkierung auf dem Griffbrett oben.",
  "<b>Mark the month complete</b> when the material feels solid, and the next month unlocks. There's no rush — repeat a month if you need to.":
    "<b>Hake den Monat ab</b>, wenn der Stoff sitzt — dann wird der nächste freigeschaltet. Es eilt nicht: Wiederhole einen Monat, wenn du ihn brauchst.",
  "Everything saves automatically in this browser. Export a backup from the Practice Log page to keep it safe or move it to another device.":
    "Alles wird automatisch in diesem Browser gespeichert. Exportiere im Übungstagebuch eine Sicherung, um sie aufzubewahren oder auf ein anderes Gerät zu übertragen.",

  "Every real guitarist's development follows the same spine: your fretting hand learns shapes before it learns theory, your ear develops in parallel with your hands rather than after, and rhythm is trained explicitly rather than assumed. This plan sequences five disciplines — <b>ear training, rhythm, chord progressions, fretboard fluency, and soloing/improvisation</b> — so each month's work makes the next month easier, the same arc used in conservatory method books and by working session players.":
    "Die Entwicklung jedes echten Gitarristen folgt demselben Grundgerüst: Die Greifhand lernt Formen, bevor sie Theorie lernt, das Gehör entwickelt sich parallel zu den Händen und nicht erst danach, und Rhythmus wird ausdrücklich trainiert statt vorausgesetzt. Dieser Plan ordnet fünf Disziplinen — <b>Gehörbildung, Rhythmus, Akkordfolgen, Griffbrettsicherheit und Solospiel/Improvisation</b> — so an, dass die Arbeit jedes Monats den folgenden erleichtert: derselbe Weg, den Konservatoriumsschulen und professionelle Studiomusiker gehen.",

  "Full 22-fret neck. A dot lands somewhere on the board — name the note before you move on. <b>Easy</b> stays in frets 0–5 with a 4-choice keypad; <b>Moderate</b> is the full 12-note keypad and requires mastering frets 0–12 before unlocking 13–22; <b>Difficult</b> opens the whole neck immediately. Every position you identify correctly stays lit up on the board across sessions, in every difficulty.":
    "Ganzer Hals mit 22 Bünden. Irgendwo erscheint ein Punkt — benenne den Ton, bevor du weitergehst. <b>Leicht</b> bleibt in den Bünden 0–5 mit vier Antwortmöglichkeiten; <b>Mittel</b> bietet alle zwölf Töne und verlangt die Bünde 0–12, bevor 13–22 freigeschaltet werden; <b>Schwer</b> öffnet sofort den ganzen Hals. Jede richtig erkannte Position bleibt über alle Einheiten hinweg beleuchtet, in jeder Schwierigkeitsstufe.",

  "Pick a root, a chord quality, and a shape category — it finds every place on the neck that shape actually works, computed from the actual notes rather than a fixed diagram library. Open chords only show up where a real open-position shape exists; barre, power, and triad shapes are movable, so you'll often see several positions up and down the neck.":
    "Wähle Grundton, Akkordtyp und Formkategorie — die App findet jede Stelle auf dem Hals, an der diese Form wirklich funktioniert, berechnet aus den tatsächlichen Tönen statt aus einer festen Diagrammsammlung. Offene Akkorde erscheinen nur dort, wo es eine echte offene Form gibt; Barré-, Power- und Dreiklangformen sind verschiebbar, daher siehst du oft mehrere Positionen über den ganzen Hals.",

  "Shows whichever progression you last picked, as a movable barre shape. While it's looping, this updates live to show each chord as it's actually played, staying in a nearby position on the neck rather than jumping around. The fret-advance buttons above slide the whole progression — every chord and this shape — up or down by one fret.":
    "Zeigt die zuletzt gewählte Akkordfolge als verschiebbare Barré-Form. Während der Schleife aktualisiert sich die Anzeige live und zeigt jeden Akkord so, wie er gerade gespielt wird — in einer nahe gelegenen Lage statt über den ganzen Hals springend. Die Bundtasten oben verschieben die gesamte Folge — jeden Akkord und diese Form — um einen Bund nach oben oder unten.",

  "A reference library of every scale and mode in the app, with its interval formula, degree names, and all 5 neck positions mapped out together so you can see how they connect. Switch Position to zoom into a single box, or keep All Positions to see the whole neck at once. Tap any note on the board to hear it.":
    "Eine Nachschlagesammlung aller Tonleitern und Modi der App, mit Intervallformel, Stufennamen und allen fünf Griffbrettpositionen nebeneinander, damit du siehst, wie sie zusammenhängen. Wechsle die Position, um auf ein einzelnes Muster zu zoomen, oder behalte Alle Positionen, um den ganzen Hals zu sehen. Tippe auf einen Ton, um ihn zu hören.",

  "Pick a key and scale to see every usable note across the neck. Minor pentatonic is where almost every rock/blues solo lives — start there. Use Position to zoom into one playable stretch of neck instead of the whole thing at once.":
    "Wähle Tonart und Tonleiter, um alle nutzbaren Töne über den ganzen Hals zu sehen. Die Moll-Pentatonik ist die Heimat fast jedes Rock- und Bluessolos — fang dort an. Mit Position zoomst du auf einen spielbaren Halsabschnitt statt auf den gesamten Hals.",

  "Sync your strumming hand to a pattern most rock/pop/blues rhythm parts are built from. Runs off the metronome above — start it, then follow the highlighted arrow. Tap any square to hear that stroke.":
    "Bringe deine Schlaghand mit einem Muster zusammen, auf dem die meisten Rock-, Pop- und Bluesbegleitungen aufbauen. Es läuft mit dem Metronom oben — starte es und folge dem hervorgehobenen Pfeil. Tippe auf ein Feld, um diesen Schlag zu hören.",

  "The app plays a short 4-note lick built from your chosen scale above. Repeat it back by clicking the same frets in the same order — this trains ear, fretboard knowledge, and scale shapes together.":
    "Die App spielt ein kurzes Lick aus vier Tönen, gebildet aus der oben gewählten Tonleiter. Spiele es nach, indem du dieselben Bünde in derselben Reihenfolge anklickst — das trainiert Gehör, Griffbrettkenntnis und Tonleiterformen zugleich.",

  "A mystery progression plays once, in the key selected above, at a realistic tempo. Pick which one it was before looking at the chords — this is what \"hearing the changes\" actually trains.":
    "Eine unbekannte Akkordfolge erklingt einmal, in der oben gewählten Tonart und in realistischem Tempo. Rate, welche es war, bevor du auf die Akkorde schaust — genau das trainiert das „Hören der Harmonien“.",

  "Every interval and triad quality below, each with a familiar song to anchor it and a play button to hear it directly against a fixed root — build these associations before you drill.":
    "Unten alle Intervalle und Dreiklangtypen, jeweils mit einem bekannten Lied als Merkhilfe und einer Schaltfläche, um sie direkt über einem festen Grundton zu hören — baue diese Verknüpfungen auf, bevor du mit dem Drill beginnst.",

  "A simple root-bass + click loop in your chosen key so you can solo over real time, not silence. This is the single best way to build phrasing and timing together.":
    "Eine einfache Schleife aus Grundton-Bass und Klick in deiner Wunschtonart, damit du über echte Zeit improvisierst und nicht über Stille. Das ist der beste Weg, Phrasierung und Timing gemeinsam aufzubauen.",

  "Trains real pitch relationships used every time you play by ear: intervals for melody and bends, triad qualities for reading a band's harmony in seconds.":
    "Trainiert die echten Tonhöhenbeziehungen, die du bei jedem Spiel nach Gehör brauchst: Intervalle für Melodie und Bendings, Dreiklangtypen, um die Harmonie einer Band in Sekunden zu erfassen.",

  "Start the metronome above, then tap the pad (or press spacebar) right on each beat. This trains your internal clock instead of just following a light.":
    "Starte oben das Metronom und tippe dann genau auf jeder Zählzeit auf das Feld (oder drücke die Leertaste). Das trainiert deine innere Uhr, statt nur einem Licht zu folgen.",

  "Tap notes to hear them before you answer — useful for anchoring what \"up a 3rd\" or \"minor\" actually sounds like.":
    "Tippe die Töne an, um sie vor dem Antworten zu hören — hilfreich, um zu verankern, wie „eine Terz höher“ oder „Moll“ wirklich klingt.",

  "Tracks your ear-training activity for {1} — a rolling tally that resets naturally each month, plus how consistently you're showing up day to day.":
    "Verfolgt deine Gehörbildung für {1} — eine fortlaufende Zählung, die sich jeden Monat von selbst zurücksetzt, dazu deine Regelmäßigkeit von Tag zu Tag.",

  "Pick a key and mode, then click a progression to loop it at a practice tempo — strum along and focus on clean, silent changes.":
    "Wähle Tonart und Modus und klicke dann auf eine Akkordfolge, um sie im Übetempo zu wiederholen — schlage mit und achte auf saubere, geräuschlose Wechsel.",

  "Click a chord to hear it. Master these shapes cold before month 4's barre chords.":
    "Klicke auf einen Akkord, um ihn zu hören. Beherrsche diese Griffe im Schlaf, bevor im Monat 4 die Barré-Akkorde kommen.",

  "Full 22-fret neck, scrollable — use this to check your answers or just study the layout.":
    "Ganzer Hals mit 22 Bünden, scrollbar — zum Überprüfen deiner Antworten oder einfach zum Studieren der Anordnung.",
  "Tap note names above to show them on the fretboard.":
    "Tippe oben auf die Tonnamen, um sie auf dem Griffbrett anzuzeigen.",
  "One position found for this combination.": "Eine Position für diese Kombination gefunden.",
  "Guess The Progression (by ear)": "Errate die Akkordfolge (nach Gehör)",
  "A — first chord of \"I – IV – V\", fret 5": "A — erster Akkord von „I – IV – V“, 5. Bund",
  "👆 Tap any dot to hear that note by itself.": "👆 Tippe auf einen Punkt, um diesen Ton einzeln zu hören.",
  "🔊 Tap anywhere once to enable sound (mobile browsers require this).":
    "🔊 Tippe einmal irgendwo hin, um den Ton zu aktivieren (mobile Browser verlangen das).",
  "The workhorse of rock and blues soloing — five notes, no half-steps to trip over, works over almost any minor-key progression.":
    "Das Arbeitspferd des Rock- und Bluessolos — fünf Töne, keine Halbtonschritte zum Stolpern, und passt über fast jede Moll-Akkordfolge.",
  "Learn open chords: E, A, D, G, C, Em, Am, Dm — clean, buzz-free.":
    "Lerne die offenen Akkorde: E, A, D, G, C, Em, Am, Dm — sauber und ohne Schnarren.",
  "Fretboard: memorize natural notes on the low E and high e strings, frets 0-5.":
    "Griffbrett: Präge dir die Stammtöne auf der tiefen und der hohen E-Saite ein, Bünde 0 bis 5.",

  /* ---- Navigation ---- */
  "<span class=\"led\"></span>Dashboard": "<span class=\"led\"></span>Übersicht",
  "<span class=\"led\"></span>Curriculum": "<span class=\"led\"></span>Lehrplan",
  "<span class=\"led\"></span>Ear Training": "<span class=\"led\"></span>Gehörbildung",
  "<span class=\"led\"></span>Rhythm": "<span class=\"led\"></span>Rhythmus",
  "<span class=\"led\"></span>Chord Progressions": "<span class=\"led\"></span>Akkordfolgen",
  "<span class=\"led\"></span>Chord Shapes": "<span class=\"led\"></span>Griffbilder",
  "<span class=\"led\"></span>Fretboard": "<span class=\"led\"></span>Griffbrett",
  "<span class=\"led\"></span>Soloing &amp; Improv": "<span class=\"led\"></span>Solo &amp; Improvisation",
  "<span class=\"led\"></span>Scale Patterns": "<span class=\"led\"></span>Tonleitermuster",
  "<span class=\"led\"></span>Practice Log": "<span class=\"led\"></span>Übungstagebuch",
  "Modules": "Module",
  "Language": "Sprache",
  "← Back": "← Zurück",

  /* ---- Startbildschirm ---- */
  "Guitar Method & Practice Studio": "Gitarrenschule und Übungsstudio",
  "From Novice to the Stage in One Year — ear training, rhythm, chords, fretboard fluency, and improvisation, all in one place.":
    "Vom Anfänger auf die Bühne in einem Jahr — Gehörbildung, Rhythmus, Akkorde, Sicherheit auf dem Griffbrett und Improvisation, alles an einem Ort.",
  "Enter the Academy →": "Zur Akademie →",
  "🔊 Tapping Enter also unlocks sound for the app": "🔊 Mit dem Tippen auf Zur Akademie wird auch der Ton aktiviert",
  "From Novice to the Stage in One Year": "Vom Anfänger auf die Bühne in einem Jahr",
  "CURRENT STREAK{1}": "AKTUELLE SERIE{1}",

  /* ---- Übersicht ---- */
  "Start Here": "Hier beginnen",
  "Got it, hide this": "Verstanden, ausblenden",
  "This Month": "Dieser Monat",
  "Why This Order": "Warum diese Reihenfolge",
  "Daily Split (45–60 min)": "Tagesaufteilung (45–60 Min.)",
  "◀ Previous month": "◀ Vorheriger Monat",
  "Mark month complete, advance ▶": "Monat abschließen und weiter ▶",
  "Teaching level: <b>New to guitar</b>": "Lernstufe: <b>Völlig neu an der Gitarre</b>",
  "Teaching level: <b>Some experience</b>": "Lernstufe: <b>Etwas Erfahrung</b>",
  "Teaching level: <b>Experienced</b>": "Lernstufe: <b>Erfahren</b>",
  "Explain music words": "Fachbegriffe erklären",
  "Retake check": "Test wiederholen",
  "10 min — Ear training reps": "10 Min. — Gehörbildungsübungen",
  "10 min — Metronome / rhythm drill": "10 Min. — Metronom / Rhythmusübung",
  "15 min — This month's chord or scale material": "15 Min. — Akkorde oder Tonleitern des Monats",
  "15 min — Fretboard fluency or improvisation": "15 Min. — Griffbrettsicherheit oder Improvisation",
  "5 min — Log the session": "5 Min. — Übungseinheit eintragen",

  /* ---- Lehrplan ---- */
  "The 12-Month Arc": "Der Weg über 12 Monate",
  "Click a month to open it. Mark months done as you finish them — your progress marker on the fretboard above updates automatically.":
    "Klicke auf einen Monat, um ihn zu öffnen. Hake Monate ab, sobald du sie abgeschlossen hast — die Fortschrittsmarkierung auf dem Griffbrett oben aktualisiert sich von selbst.",
  "Mark done": "Abhaken",
  "Foundation": "Grundlagen",
  "Building": "Aufbau",
  "Soloing": "Solo",
  "Mastery": "Meisterschaft",
  "Free": "Kostenlos",
  "Locked": "Gesperrt",
  "See options": "Optionen ansehen",
  "Part of the full program — Months 2–12.": "Teil des vollständigen Programms — Monate 2 bis 12.",

  /* ---- Kauf und Zugang ---- */
  "Unlock Months 2–12": "Monate 2 bis 12 freischalten",
  "Unlock Months 2&ndash;12": "Monate 2&ndash;12 freischalten",
  "Your access has expired": "Dein Zugang ist abgelaufen",
  "Month {n} is part of the full program": "Monat {n} gehört zum vollständigen Programm",
  "1 year of access": "1 Jahr Zugang",
  "Unlimited access": "Unbegrenzter Zugang",
  "Best value": "Bestes Angebot",
  "The full program for twelve months — long enough to finish it at the intended pace.":
    "Das vollständige Programm für zwölf Monate — reichlich Zeit, um es im vorgesehenen Tempo durchzuarbeiten.",
  "Keep Months 2–12 permanently, with no renewal date. Best if you expect to revisit the material.":
    "Behalte die Monate 2–12 dauerhaft, ohne Verlängerungsdatum. Ideal, wenn du den Stoff später noch einmal durchgehen willst.",
  "Choose 1 year of access": "1 Jahr Zugang wählen",
  "Choose Unlimited access": "Unbegrenzten Zugang wählen",
  "I have a code": "Ich habe einen Code",
  "Redemption code": "Einlösecode",
  "Enter your code": "Code eingeben",
  "Redeem": "Einlösen",
  "Checking…": "Wird geprüft…",
  "Enter a code first.": "Gib zuerst einen Code ein.",
  "That code is not valid.": "Dieser Code ist ungültig.",
  "That code has expired.": "Dieser Code ist abgelaufen.",
  "That code has already been fully claimed.": "Dieser Code wurde bereits vollständig eingelöst.",
  "You have already redeemed that code.": "Du hast diesen Code bereits eingelöst.",
  "You already have full access — no code needed.": "Du hast bereits vollen Zugang — kein Code nötig.",
  "Too many attempts. Please wait ten minutes and try again.":
    "Zu viele Versuche. Bitte warte zehn Minuten und versuche es erneut.",
  "Unlocked. Enjoy the full program.": "Freigeschaltet. Viel Freude mit dem vollständigen Programm.",
  "Could not reach the server. Check your connection and try again.":
    "Der Server ist nicht erreichbar. Prüfe deine Verbindung und versuche es erneut.",
  "Renew 1 year": "Um 1 Jahr verlängern",
  "Switch to unlimited": "Auf unbegrenzt wechseln",
  "Unlimited access — Months 2–12 are yours permanently.":
    "Unbegrenzter Zugang — die Monate 2 bis 12 gehören dauerhaft dir.",
  "Access runs until {date} ({n} day left).": "Zugang läuft bis {date} (noch {n} Tag).",
  "Access runs until {date} ({n} days left).": {
    one: "Zugang läuft bis {date} (noch {n} Tag).",
    other: "Zugang läuft bis {date} (noch {n} Tage)."
  },
  "<b>Your access ends in {n} day</b> ({date}). Renew to keep Months 2&ndash;12.":
    "<b>Dein Zugang endet in {n} Tag</b> ({date}). Verlängere, um die Monate 2&ndash;12 zu behalten.",
  "<b>Your access ends in {n} days</b> ({date}). Renew to keep Months 2&ndash;12.": {
    one: "<b>Dein Zugang endet in {n} Tag</b> ({date}). Verlängere, um die Monate 2&ndash;12 zu behalten.",
    other: "<b>Dein Zugang endet in {n} Tagen</b> ({date}). Verlängere, um die Monate 2&ndash;12 zu behalten."
  },
  "Renew for another year, or switch to unlimited so it never lapses again. Your progress is all still saved.":
    "Verlängere um ein weiteres Jahr oder wechsle auf unbegrenzt, damit der Zugang nie wieder abläuft. Dein gesamter Fortschritt bleibt erhalten.",
  "Month 1 is free and stays free. The remaining eleven months cover barre chords, CAGED, pentatonics, modes, improvisation and performance.":
    "Monat 1 ist kostenlos und bleibt es. Die übrigen elf Monate behandeln Barré-Akkorde, CAGED, Pentatonik, Modi, Improvisation und Auftritt.",

  /* ---- Einstufungstest ---- */
  "Where would you like to start?": "Wo möchtest du anfangen?",
  "Have you played guitar before?": "Hast du schon einmal Gitarre gespielt?",
  "Can you read a chord diagram?": "Kannst du ein Akkorddiagramm lesen?",
  "Do you know what a chord is?": "Weißt du, was ein Akkord ist?",
  "Tap the 3rd fret of the low E string.": "Tippe auf den 3. Bund der tiefen E-Saite.",
  "The low E is the thickest string — the bottom row here.":
    "Die tiefe E-Saite ist die dickste Saite — hier die unterste Reihe.",
  "Which chord is this?": "Welcher Akkord ist das?",
  "I'm not sure": "Ich bin mir nicht sicher",
  "Skip": "Überspringen",
  "Never": "Nie",
  "A little": "Ein wenig",
  "Yes, regularly": "Ja, regelmäßig",
  "No": "Nein",
  "Roughly": "Ungefähr",
  "Yes": "Ja",
  "Not really": "Nicht wirklich",
  "Yes, and inversions": "Ja, auch Umkehrungen",
  "New to guitar": "Völlig neu an der Gitarre",
  "Some experience": "Etwas Erfahrung",
  "Experienced": "Erfahren",
  "Recommended": "Empfohlen",
  "We'll explain music words when you tap them, introduce each module, and start quizzes on Easy.":
    "Wir erklären Fachbegriffe, wenn du sie antippst, stellen jedes Modul vor und beginnen Übungen auf der Stufe Leicht.",
  "Standard instructions, with music words explained when you tap them.":
    "Normale Anweisungen, Fachbegriffe werden beim Antippen erklärt.",
  "Full detail, and explanations switched off. You can turn them back on any time.":
    "Alle Details, Erklärungen ausgeschaltet. Du kannst sie jederzeit wieder einschalten.",
  "Based on your answers we suggest <b>New to guitar</b>, but pick whichever you prefer. You can change this any time on the Dashboard.":
    "Nach deinen Antworten empfehlen wir <b>Völlig neu an der Gitarre</b>, wähle aber, was dir lieber ist. Du kannst das jederzeit in der Übersicht ändern.",
  "Based on your answers we suggest <b>Some experience</b>, but pick whichever you prefer. You can change this any time on the Dashboard.":
    "Nach deinen Antworten empfehlen wir <b>Etwas Erfahrung</b>, wähle aber, was dir lieber ist. Du kannst das jederzeit in der Übersicht ändern.",
  "Based on your answers we suggest <b>Experienced</b>, but pick whichever you prefer. You can change this any time on the Dashboard.":
    "Nach deinen Antworten empfehlen wir <b>Erfahren</b>, wähle aber, was dir lieber ist. Du kannst das jederzeit in der Übersicht ändern.",

  /* ---- Modul-Einführungen ---- */
  "What is this module for?": "Wozu dient dieses Modul?",
  "Got it": "Verstanden",
  "The full one-year plan. Each month lists a few things to practise. Open your current month, work through it over a few weeks, then mark it done. You can revisit earlier months any time.":
    "Der vollständige Jahresplan. Jeder Monat nennt einige Übungsschwerpunkte. Öffne deinen aktuellen Monat, arbeite ihn über ein paar Wochen durch und hake ihn dann ab. Zu früheren Monaten kannst du jederzeit zurückkehren.",
  "Ear training teaches you to recognise what you hear. Press play, listen, then pick an answer. A few minutes daily beats one long session.":
    "Gehörbildung bringt dir bei zu erkennen, was du hörst. Starte die Wiedergabe, höre zu und wähle eine Antwort. Ein paar Minuten täglich bringen mehr als eine lange Einheit.",
  "Rhythm is about keeping a steady beat. The metronome clicks in time; try to strum exactly with it. Tap along on the pad to test how steady you really are.":
    "Beim Rhythmus geht es darum, ein gleichmäßiges Tempo zu halten. Das Metronom gibt den Takt vor; versuche, genau mit ihm zu schlagen. Tippe auf dem Feld mit, um zu prüfen, wie gleichmäßig du wirklich bist.",
  "A chord is several notes played together, and a progression is a series of chords — the backbone of most songs. Tap any progression to hear it loop.":
    "Ein Akkord besteht aus mehreren gleichzeitig gespielten Tönen, und eine Akkordfolge ist eine Reihe von Akkorden — das Rückgrat der meisten Songs. Tippe auf eine Folge, um sie in der Schleife zu hören.",
  "The same chord can be played in several places on the neck. Pick a chord to see exactly where to put your fingers.":
    "Denselben Akkord kann man an mehreren Stellen des Halses greifen. Wähle einen Akkord, um genau zu sehen, wohin die Finger gehören.",
  "This is where you learn the name of every note on the neck. Start on Easy: a position lights up and you name it. Positions you get right stay lit.":
    "Hier lernst du den Namen jedes Tons auf dem Hals. Beginne mit Leicht: Eine Position leuchtet auf und du benennst sie. Richtig erkannte Positionen bleiben beleuchtet.",
  "Soloing means making up your own lines. Pick a scale and every highlighted note will fit the backing loop. There are no wrong answers here.":
    "Solospiel heißt, eigene Linien zu erfinden. Wähle eine Tonleiter, und jeder hervorgehobene Ton passt zur Begleitschleife. Hier gibt es keine falschen Antworten.",
  "A scale is a set of notes played in order. This shows every scale in the app and all five neck positions, so you can see how they join up.":
    "Eine Tonleiter ist eine Folge von Tönen in fester Reihenfolge. Hier siehst du alle Tonleitern der App und alle fünf Griffbrettpositionen, damit erkennbar wird, wie sie ineinandergreifen.",
  "Record each practice session here. It keeps your streak going and feeds the progress marker at the top of the page.":
    "Trage hier jede Übungseinheit ein. Das hält deine Serie am Laufen und speist die Fortschrittsmarkierung oben auf der Seite.",

  /* ---- Übungstagebuch und Sicherung ---- */
  "Log a Session": "Übungseinheit eintragen",
  "Save session": "Einheit speichern",
  "Recent Sessions": "Letzte Einheiten",
  "Last 28 Days": "Letzte 28 Tage",
  "No sessions logged yet.": "Noch keine Einheiten eingetragen.",
  "Show all": "Alle anzeigen",
  "Show recent only": "Nur die letzten anzeigen",
  "Backup & Restore": "Sicherung und Wiederherstellung",
  "Export backup": "Sicherung exportieren",
  "Import backup": "Sicherung importieren",
  "Minutes practiced": "Geübte Minuten",
  "Session notes": "Notizen zur Einheit",
  "What did you work on? Anything clicking or still sticky?":
    "Woran hast du gearbeitet? Was sitzt allmählich, was hakt noch?",
  "Delete this session": "Diese Einheit löschen",
  "Total logged sessions: {1}": "Eingetragene Einheiten insgesamt: {1}",
  "Your progress is saved in this browser only. Export a backup file before clearing browsing data, switching devices, or reinstalling — then import it to pick up where you left off.":
    "Dein Fortschritt wird nur in diesem Browser gespeichert. Exportiere eine Sicherungsdatei, bevor du Browserdaten löschst, das Gerät wechselst oder neu installierst — importiere sie danach, um dort weiterzumachen, wo du aufgehört hast.",
  "That file is not valid JSON, so nothing was changed.":
    "Diese Datei ist kein gültiges JSON, es wurde nichts geändert.",
  "That does not look like a Guitar Academy backup, so nothing was changed.":
    "Das sieht nicht nach einer Guitar-Academy-Sicherung aus, es wurde nichts geändert.",
  "Import cancelled — nothing was changed.": "Import abgebrochen — es wurde nichts geändert.",

  /* ---- Allgemeine Bedienelemente ---- */
  "Play scale": "Tonleiter abspielen",
  "Play a lick": "Lick abspielen",
  "Stop loop": "Schleife stoppen",
  "Start loop": "Schleife starten",
  "Position": "Position",
  "All Positions": "Alle Positionen",
  "Formula: {1}": "Formel: {1}",
  "Degrees: {1}": "Stufen: {1}",
  "Easy": "Leicht",
  "Moderate": "Mittel",
  "Difficult": "Schwer",
  "60-second challenge": "60-Sekunden-Challenge",
  "Reset progress": "Fortschritt zurücksetzen",
  "Reset stats": "Statistik zurücksetzen",
  "Flip string order (low E on top)": "Saitenreihenfolge umkehren (tiefe E-Saite oben)",
  "🎤 Use Microphone": "🎤 Mikrofon verwenden",
  "Print practice sheets ({n})": "Übungsblätter drucken ({n})",
  "{sheets} — choose “Save as PDF” in the print dialog to keep a copy.":
    "{sheets} — wähle im Druckdialog „Als PDF speichern“, um eine Kopie zu behalten.",
  "New question": "Neue Frage",
  "Which note is highlighted?": "Welcher Ton ist hervorgehoben?",
  "Show the notes being played on the keyboard": "Die gespielten Töne auf der Klaviatur anzeigen",
  "Press \"Play a lick\" to begin.": "Drücke „Lick abspielen“, um zu beginnen.",
  "Press play, then choose the interval you heard.":
    "Starte die Wiedergabe und wähle dann das gehörte Intervall.",

  /* ---- Druckbare Übungsblätter ---- */
  "Open Chords": "Offene Akkorde",
  "Strum Pattern &amp; First Notes": "Schlagmuster und erste Töne",
  "Chord Change Drill": "Übung für Akkordwechsel",
  "12-Bar Blues in A": "12-Takt-Blues in A",
  "Barre Chords — E Shape": "Barré-Akkorde — E-Form",
  "Barre Chords — A Shape": "Barré-Akkorde — A-Form",
  "The Five CAGED Shapes": "Die fünf CAGED-Formen",
  "Minor Pentatonic — Box 1": "Moll-Pentatonik — Position 1",
  "Minor Pentatonic — Full Neck": "Moll-Pentatonik — ganzer Hals",
  "Major Pentatonic &amp; the Blues Scale": "Dur-Pentatonik und Bluestonleiter",
  "Blues Soloing Toolkit": "Werkzeugkasten für Bluessoli",
  "The ii–V–I Progression": "Die ii–V–I-Verbindung",
  "Dorian Mode": "Dorischer Modus",
  "Mixolydian Mode": "Mixolydischer Modus",
  "Alternate Picking Log": "Protokoll zum Wechselschlag",
  "Chord-Tone Targets": "Zieltöne des Akkords",
  "Odd Time Signatures": "Ungerade Taktarten",
  "Borrowed Chords": "Entlehnte Akkorde",
  "Transcription Worksheet": "Arbeitsblatt zum Heraushören",
  "Polyrhythm &amp; Note Naming": "Polyrhythmik und Tonbenennung",
  "Song Learning Plan": "Lernplan für Songs",
  "Year Review &amp; Next Goals": "Jahresrückblick und nächste Ziele",
  "© 2026 R Paul's Guitar Academy. All rights reserved. Licensed for personal practice use only — copying, redistribution or resale is prohibited.":
    "© 2026 R Paul's Guitar Academy. Alle Rechte vorbehalten. Lizenziert ausschließlich für den persönlichen Übungsgebrauch — Vervielfältigung, Weitergabe oder Weiterverkauf sind untersagt."
};

/* ---------------------------------------------------------------------------
 * Deutsches Glossar.
 *
 * Das Glossar sucht nach wörtlichen Treffern und braucht daher den Wortschatz
 * dieser Sprache. Begriffe durch | getrennt, inklusive der Beugungsformen, die
 * im Text tatsächlich vorkommen.
 * ------------------------------------------------------------------------- */
window.LANG_de_GLOSSARY = [
  {terms:'Bund|Bünde|Bünden',            def:'Die Metallstäbchen auf dem Hals. „3. Bund“ heißt: die Saite direkt hinter dem dritten Stäbchen greifen.'},
  {terms:'Griffbrett',                   def:'Die flache Vorderseite des Halses, auf der die Saiten niedergedrückt werden.'},
  {terms:'Sattel',                       def:'Die gekerbte Leiste am oberen Ende des Halses, an der die Saiten zur Kopfplatte laufen.'},
  {terms:'Leersaite|Leersaiten',         def:'Eine Saite, die gespielt wird, ohne einen Bund zu greifen.'},
  {terms:'Akkord|Akkorde|Akkorden',      def:'Drei oder mehr gleichzeitig gespielte Töne, meist als ein Klang angeschlagen.'},
  {terms:'Dreiklang|Dreiklänge',         def:'Ein einfacher Akkord aus drei Tönen: Grundton, Terz und Quinte.'},
  {terms:'Grundton',                     def:'Der Ton, nach dem ein Akkord benannt ist. G ist der Grundton des G-Akkords.'},
  {terms:'Barré|Barrégriff',             def:'Einen Finger flach über alle Saiten legen, sodass er wie ein beweglicher Sattel wirkt.'},
  {terms:'CAGED',                        def:'Fünf Akkordformen (C, A, G, E, D), die ineinandergreifen und den ganzen Hals abdecken.'},
  {terms:'Powerchord|Powerchords',       def:'Ein Akkord aus nur zwei Tönen, Grundton und Quinte. Weder Dur noch Moll.'},
  {terms:'Akkordfolge|Akkordfolgen',     def:'Eine Reihe nacheinander gespielter Akkorde — das Rückgrat eines Songs.'},
  {terms:'Schlagmuster|Anschlag',        def:'Das Streichen von Plektrum oder Fingern über mehrere Saiten gleichzeitig.'},
  {terms:'Tonleiter|Tonleitern',         def:'Eine Folge von Tönen, der Reihe nach gespielt, auf- oder abwärts.'},
  {terms:'Pentatonik',                   def:'Eine Tonleiter aus fünf Tönen. Der einfachste Einstieg ins Solospiel: Ihre Töne klingen fast überall gut.'},
  {terms:'Bluestonleiter',               def:'Die Moll-Pentatonik plus einen zusätzlichen rauen Ton, die „Blue Note“.'},
  {terms:'Modus|Modi|Kirchentonart',     def:'Eine Tonleiter, die auf einem anderen Ton der Durtonleiter beginnt und dadurch eine neue Farbe bekommt.'},
  {terms:'Intervall|Intervalle',         def:'Der Abstand zwischen zwei Tönen.'},
  {terms:'Halbton|Halbtöne',             def:'Der kleinste Schritt auf der Gitarre: ein Bund.'},
  {terms:'Oktave|Oktaven',               def:'Von einem Ton zum nächsten gleichnamigen — zwölf Bünde höher.'},
  {terms:'Dur',                          def:'Ein hell und fröhlich klingender Akkord oder eine solche Tonleiter.'},
  {terms:'Moll',                         def:'Ein dunkler und trauriger klingender Akkord oder eine solche Tonleiter.'},
  {terms:'Stufe|Stufen',                 def:'Die Position eines Tons in seiner Tonleiter: 1 ist der erste Ton, 3 der dritte und so fort.'},
  {terms:'Tonika',                       def:'Der „Heimatton“ einer Tonart oder Tonleiter.'},
  {terms:'Dominante',                    def:'Der Akkord auf der fünften Stufe der Tonart. Er zieht stark zur Tonika zurück.'},
  {terms:'vermindert|verminderte',       def:'Ein gespannter, unruhiger Akkord aus gleich großen kleinen Schritten.'},
  {terms:'übermäßig|übermäßige',         def:'Ein schwebender, unaufgelöster Akkord aus zwei großen Schritten.'},
  {terms:'Metronom',                     def:'Ein gleichmäßiges Klicken, das den Takt hält, damit du weder schneller noch langsamer wirst.'},
  {terms:'bpm',                          def:'Schläge pro Minute — wie schnell die Musik läuft. 60 bpm ist ein Schlag pro Sekunde.'},
  {terms:'Zählzeit|Zählzeiten',          def:'Der gleichmäßige Puls, zu dem du mit dem Fuß mitwippen würdest.'},
  {terms:'Takt|Takte|Takten',            def:'Eine kleine Gruppe von Zählzeiten, meist vier. Musik wird in Takte eingeteilt.'},
  {terms:'Taktart|Taktarten',            def:'Die zwei Zahlen (etwa 4/4), die angeben, wie viele Zählzeiten in einen Takt gehören.'},
  {terms:'Synkope|synkopiert',           def:'Betonungen, die zwischen die Zählzeiten fallen und der Musik Schub geben.'},
  {terms:'Shuffle',                      def:'Ein ungleichmäßiges, wiegendes Gefühl: lang–kurz, lang–kurz.'},
  {terms:'Polyrhythmik',                 def:'Zwei verschiedene Rhythmen, die gleichzeitig laufen.'},
  {terms:'Arpeggio|Arpeggien',           def:'Die Töne eines Akkords nacheinander statt gleichzeitig gespielt.'},
  {terms:'improvisieren|Improvisation',  def:'Musik im Moment erfinden.'},
  {terms:'Lick|Licks',                   def:'Eine kurze musikalische Wendung — eine Art musikalische Redewendung.'},
  {terms:'Bending|Bendings|ziehen',      def:'Die Saite seitlich drücken, um ihre Tonhöhe anzuheben.'},
  {terms:'Vibrato',                      def:'Ein kleines, wiederholtes Schwanken der Tonhöhe, das einen gehaltenen Ton singen lässt.'},
  {terms:'Legato',                       def:'Weich verbundene Töne, mit der Greifhand erzeugt statt mit dem Plektrum.'},
  {terms:'Hammer-on|Hammer-ons',         def:'Einen Ton erzeugen, indem man den Finger auf die Saite schlägt, ohne anzuzupfen.'},
  {terms:'Pull-off|Pull-offs',           def:'Einen tieferen Ton erzeugen, indem der greifende Finger die Saite beim Abheben anreißt.'},
  {terms:'Wechselschlag',                def:'Striktes Abwärts-Aufwärts-Wechseln des Plektrums — erst das ermöglicht echtes Tempo.'},
  {terms:'Kapodaster',                   def:'Eine Klemme am Hals, die alle Saiten gleichzeitig höher stimmt.'},
  {terms:'transponieren|Transposition',  def:'Musik in eine andere Tonart versetzen, sodass sie höher oder tiefer klingt.'},
  {terms:'Stimmführung',                 def:'Jeden Ton zum nächstgelegenen Ton des Folgeakkords führen, damit Wechsel weich klingen.'},
  {terms:'Akkordton|Akkordtöne',         def:'Ein Ton, der zum gerade klingenden Akkord gehört. Auf ihm zu landen klingt immer richtig.'},
  {terms:'Gehörbildung',                 def:'Lernen, Töne, Intervalle und Akkorde allein durch Hören zu erkennen.'},
  {terms:'Tabulatur',                    def:'Gitarrennotation: sechs Linien für sechs Saiten, mit Bundzahlen darauf.'},
];
