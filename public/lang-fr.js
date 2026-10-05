/* R Paul's Guitar Academy — Français
 *
 * Batch 1: navigation, titres de modules, boutons, achat, test de niveau et
 * présentations des modules — tout ce que l'utilisateur voit à chaque écran.
 *
 * Les clés absentes retombent automatiquement sur l'anglais : ce fichier est donc
 * utilisable tel quel et peut être complété par lots.
 *
 * Conventions musicales retenues :
 *   - Les noms de notes suivent le solfège (Do, Ré, Mi…), ce que l'application
 *     active automatiquement pour le français.
 *   - Les chiffrages d'accords (G, Am, D7) restent en notation lettrée, comme dans
 *     les méthodes de guitare francophones.
 *   - « case » = fret (3e case), « touche » = fretboard, « barré » = barre chord,
 *     « médiator » = pick, « corde à vide » = open string.
 */
window.LANG_fr = {

  /* ---- lot 2 : descriptions des modules ---- */
  "Every real guitarist's development follows the same spine: your fretting hand learns shapes before it learns theory, your ear develops in parallel with your hands rather than after, and rhythm is trained explicitly rather than assumed. This plan sequences five disciplines — <b>ear training, rhythm, chord progressions, fretboard fluency, and soloing/improvisation</b> — so each month's work makes the next month easier, the same arc used in conservatory method books and by working session players.":
    "La progression de tout guitariste suit la même colonne vertébrale : la main gauche apprend les formes avant la théorie, l'oreille se développe en parallèle des mains et non après, et le rythme se travaille explicitement au lieu d'être supposé acquis. Ce plan enchaîne cinq disciplines — <b>travail de l'oreille, rythme, grilles d'accords, maîtrise du manche et improvisation</b> — de sorte que le travail de chaque mois facilite le suivant, le même parcours que celui des méthodes de conservatoire et des musiciens de studio.",

  "Full 22-fret neck. A dot lands somewhere on the board — name the note before you move on. <b>Easy</b> stays in frets 0–5 with a 4-choice keypad; <b>Moderate</b> is the full 12-note keypad and requires mastering frets 0–12 before unlocking 13–22; <b>Difficult</b> opens the whole neck immediately. Every position you identify correctly stays lit up on the board across sessions, in every difficulty.":
    "Manche complet de 22 cases. Un point apparaît quelque part sur le manche — nommez la note avant de continuer. <b>Facile</b> reste entre les cases 0 et 5 avec un clavier à 4 choix ; <b>Intermédiaire</b> propose le clavier complet de 12 notes et demande de maîtriser les cases 0 à 12 avant de débloquer 13 à 22 ; <b>Difficile</b> ouvre tout le manche d'emblée. Chaque position correctement identifiée reste allumée d'une séance à l'autre, quelle que soit la difficulté.",

  "Pick a root, a chord quality, and a shape category — it finds every place on the neck that shape actually works, computed from the actual notes rather than a fixed diagram library. Open chords only show up where a real open-position shape exists; barre, power, and triad shapes are movable, so you'll often see several positions up and down the neck.":
    "Choisissez une fondamentale, une nature d'accord et une catégorie de forme : l'application trouve tous les endroits du manche où cette forme fonctionne réellement, calculés à partir des notes et non d'une bibliothèque figée de diagrammes. Les accords ouverts n'apparaissent que là où une vraie position ouverte existe ; les barrés, power chords et triades sont mobiles, vous verrez donc souvent plusieurs positions le long du manche.",

  "Shows whichever progression you last picked, as a movable barre shape. While it's looping, this updates live to show each chord as it's actually played, staying in a nearby position on the neck rather than jumping around. The fret-advance buttons above slide the whole progression — every chord and this shape — up or down by one fret.":
    "Affiche la dernière grille choisie, sous forme de barré mobile. Pendant la boucle, l'affichage se met à jour en direct pour montrer chaque accord tel qu'il est joué, en restant dans une position voisine du manche plutôt qu'en sautant partout. Les boutons de décalage ci-dessus déplacent toute la grille — chaque accord et cette forme — d'une case vers le haut ou vers le bas.",

  "A reference library of every scale and mode in the app, with its interval formula, degree names, and all 5 neck positions mapped out together so you can see how they connect. Switch Position to zoom into a single box, or keep All Positions to see the whole neck at once. Tap any note on the board to hear it.":
    "Une bibliothèque de référence de toutes les gammes et modes de l'application, avec leur formule d'intervalles, le nom des degrés et les 5 positions du manche représentées ensemble pour voir comment elles s'enchaînent. Changez de Position pour zoomer sur une seule case, ou gardez Toutes les positions pour voir le manche entier. Touchez n'importe quelle note pour l'entendre.",

  "Pick a key and scale to see every usable note across the neck. Minor pentatonic is where almost every rock/blues solo lives — start there. Use Position to zoom into one playable stretch of neck instead of the whole thing at once.":
    "Choisissez une tonalité et une gamme pour voir toutes les notes utilisables sur le manche. La pentatonique mineure est le terrain de presque tous les solos rock et blues — commencez par là. Utilisez Position pour vous concentrer sur une portion jouable du manche plutôt que sur l'ensemble.",

  "Sync your strumming hand to a pattern most rock/pop/blues rhythm parts are built from. Runs off the metronome above — start it, then follow the highlighted arrow. Tap any square to hear that stroke.":
    "Synchronisez votre main droite sur une rythmique qui sert de base à la plupart des parties rock, pop et blues. Elle suit le métronome ci-dessus — lancez-le, puis suivez la flèche surlignée. Touchez une case pour entendre ce coup.",

  "The app plays a short 4-note lick built from your chosen scale above. Repeat it back by clicking the same frets in the same order — this trains ear, fretboard knowledge, and scale shapes together.":
    "L'application joue un court plan de 4 notes construit sur la gamme choisie ci-dessus. Répétez-le en cliquant sur les mêmes cases dans le même ordre : cela travaille à la fois l'oreille, la connaissance du manche et les formes de gammes.",

  "A mystery progression plays once, in the key selected above, at a realistic tempo. Pick which one it was before looking at the chords — this is what \"hearing the changes\" actually trains.":
    "Une grille mystère est jouée une seule fois, dans la tonalité choisie ci-dessus et à un tempo réaliste. Devinez laquelle c'était avant de regarder les accords : c'est précisément ce qui entraîne à « entendre la grille ».",

  "Every interval and triad quality below, each with a familiar song to anchor it and a play button to hear it directly against a fixed root — build these associations before you drill.":
    "Ci-dessous, tous les intervalles et natures de triades, chacun associé à un morceau connu pour servir de repère et à un bouton pour l'entendre directement sur une fondamentale fixe : créez ces associations avant de passer aux exercices.",

  "Played in order, the five shapes cover the whole neck and then repeat at the 12th fret. Each shape shares notes with its neighbours — that overlap is what makes the system work.":
    "Jouées dans l'ordre, les cinq formes couvrent tout le manche puis se répètent à la 12e case. Chaque forme partage des notes avec ses voisines : c'est ce recouvrement qui fait fonctionner le système.",

  "A simple root-bass + click loop in your chosen key so you can solo over real time, not silence. This is the single best way to build phrasing and timing together.":
    "Une boucle simple de basse fondamentale et de clic dans la tonalité de votre choix, pour improviser sur du temps réel et non sur du silence. C'est le meilleur moyen de travailler le phrasé et la mise en place ensemble.",

  "Trains real pitch relationships used every time you play by ear: intervals for melody and bends, triad qualities for reading a band's harmony in seconds.":
    "Travaille les rapports de hauteur réels que vous utilisez chaque fois que vous jouez d'oreille : les intervalles pour la mélodie et les bends, les natures de triades pour saisir l'harmonie d'un groupe en quelques secondes.",

  "Start the metronome above, then tap the pad (or press spacebar) right on each beat. This trains your internal clock instead of just following a light.":
    "Lancez le métronome ci-dessus, puis tapez sur le pad (ou appuyez sur la barre d'espace) exactement sur chaque temps. Cela travaille votre horloge interne au lieu de simplement suivre une lumière.",

  "Tap notes to hear them before you answer — useful for anchoring what \"up a 3rd\" or \"minor\" actually sounds like.":
    "Touchez les notes pour les entendre avant de répondre : utile pour ancrer ce que « une tierce au-dessus » ou « mineur » signifie vraiment à l'oreille.",

  "Pick a key and mode, then click a progression to loop it at a practice tempo — strum along and focus on clean, silent changes.":
    "Choisissez une tonalité et un mode, puis cliquez sur une grille pour la mettre en boucle à un tempo de travail : grattez avec elle en vous concentrant sur des changements nets et silencieux.",

  "Full 22-fret neck, scrollable — use this to check your answers or just study the layout.":
    "Manche complet de 22 cases, défilant : utilisez-le pour vérifier vos réponses ou simplement étudier la disposition.",

  "This is a full 12-month method, not a set of loose tools. Here's how the pieces fit:":
    "Il s'agit d'une méthode complète sur 12 mois, pas d'un assortiment d'outils isolés. Voici comment les pièces s'assemblent :",

  "Everything saves automatically in this browser. Export a backup from the Practice Log page to keep it safe or move it to another device.":
    "Tout est enregistré automatiquement dans ce navigateur. Exportez une sauvegarde depuis la page Journal pour la mettre à l'abri ou la transférer sur un autre appareil.",


  /* ---- lot 3 : repères d'intervalles et définitions du glossaire ----
     Les titres de morceaux restent en anglais : ils sont connus sous ces noms dans
     les pays francophones, et les traduire casserait la reconnaissance recherchée. */
  "\"Twinkle Twinkle Little Star\" / Star Wars main theme — first two notes.":
    "\"Twinkle Twinkle Little Star\" / thème principal de Star Wars : les deux premières notes.",
  "\"Happy Birthday\" — first two notes (\"Hap-py\").":
    "\"Happy Birthday\" : les deux premières notes (\"Hap-py\").",
  "\"Here Comes the Bride\" / \"Amazing Grace\" — first two notes.":
    "\"Here Comes the Bride\" / \"Amazing Grace\" : les deux premières notes.",
  "\"Jaws\" theme (da-dum) — tense, half-step creep.":
    "Thème des « Dents de la mer » (da-dum) : tendu, qui rampe par demi-tons.",
  "\"My Bonnie Lies Over the Ocean\" — \"My Bon-\" leap.":
    "\"My Bonnie Lies Over the Ocean\" : le saut sur \"My Bon-\".",
  "\"Smoke on the Water\" — opening riff's first two notes.":
    "\"Smoke on the Water\" : les deux premières notes du riff d'ouverture.",
  "\"Somewhere Over the Rainbow\" — \"Some-where\" leap.":
    "\"Somewhere Over the Rainbow\" : le saut sur \"Some-where\".",
  "\"Star Trek\" theme (original TV) — the opening leap.":
    "Thème de \"Star Trek\" (série originale) : le saut d'ouverture.",
  "\"Take On Me\" chorus — the big leap up on \"take\".":
    "Refrain de \"Take On Me\" : le grand saut vers le haut sur \"take\".",
  "\"The Simpsons\" theme — opening two notes; the classic \"unstable\" interval.":
    "Thème des \"Simpson\" : les deux premières notes ; l'intervalle « instable » par excellence.",
  "\"When the Saints Go Marching In\" — first two notes.":
    "\"When the Saints Go Marching In\" : les deux premières notes.",
  "Theme from \"Love Story\" — first two notes; aching, wistful.":
    "Thème de \"Love Story\" : les deux premières notes ; douloureux, nostalgique.",

  /* définitions du glossaire affichées dans les panneaux */
  "A set of notes played in order, step by step, up or down.":
    "Un ensemble de notes jouées dans l'ordre, degré par degré, vers le haut ou vers le bas.",
  "A series of chords played one after another — the backbone of a song.":
    "Une suite d'accords joués l'un après l'autre : la colonne vertébrale d'un morceau.",
  "A basic three-note chord: the root, the 3rd and the 5th.":
    "Un accord de base à trois notes : la fondamentale, la tierce et la quinte.",
  "A bright, happy-sounding chord or scale.":
    "Un accord ou une gamme à la sonorité claire et joyeuse.",
  "A darker, sadder-sounding chord or scale.":
    "Un accord ou une gamme à la sonorité plus sombre, plus triste.",
  "A dreamy, unresolved chord built from two large steps.":
    "Un accord suspendu et rêveur, formé de deux grands intervalles.",
  "A tense, unsettled chord built from equal small steps.":
    "Un accord tendu et instable, formé de petits intervalles égaux.",
  "A two-note chord using just the root and the 5th. Neither major nor minor.":
    "Un accord à deux notes, fondamentale et quinte seulement. Ni majeur ni mineur.",
  "A five-note scale. The easiest door into soloing — the notes sound good almost anywhere.":
    "Une gamme de cinq notes. La porte d'entrée la plus simple vers le solo : ses notes sonnent bien presque partout.",
  "A scale started from a different note of the major scale, giving it a new mood.":
    "Une gamme commencée sur une autre note de la gamme majeure, ce qui lui donne une couleur nouvelle.",
  "A string played without pressing any fret.":
    "Une corde jouée sans appuyer sur aucune case.",
  "A clamp on the neck that raises the pitch of every string at once.":
    "Une pince posée sur le manche qui monte la hauteur de toutes les cordes d'un coup.",
  "A steady click that keeps time so you don’t speed up or slow down.":
    "Un clic régulier qui tient le tempo pour vous éviter d'accélérer ou de ralentir.",
  "A small group of beats, usually four. Music is divided into bars.":
    "Un petit groupe de temps, le plus souvent quatre. La musique se divise en mesures.",
  "Accents landing between the beats, which gives the music a push.":
    "Des accents qui tombent entre les temps et donnent de l'élan à la musique.",
  "A lopsided, swinging feel: long–short, long–short.":
    "Un balancement inégal : long–court, long–court.",
  "A short musical phrase — a musical catchphrase.":
    "Une courte phrase musicale, une formule toute faite.",
  "A small, repeated wobble in pitch that makes a held note sing.":
    "Une légère oscillation répétée de la hauteur qui fait chanter une note tenue.",
  "A note that belongs to the chord being played. Landing on one always sounds right.":
    "Une note qui appartient à l'accord joué. Tomber dessus sonne toujours juste.",
  "A note’s position in its scale: 1 is the first note, 3 the third, and so on.":
    "La place d'une note dans sa gamme : 1 pour la première, 3 pour la troisième, et ainsi de suite.",
  "Beats per minute — how fast the music goes. 60 bpm is one beat a second.":
    "Battements par minute : la vitesse de la musique. 60 bpm, c'est un temps par seconde.",
  "Three or more notes played together, usually strummed as one sound.":
    "Trois notes ou plus jouées ensemble, généralement grattées comme un seul son.",
  "The distance between two notes.": "La distance entre deux notes.",
  "The smallest step on a guitar: one fret.": "Le plus petit écart sur une guitare : une case.",
  "The steady pulse you would tap your foot to.": "La pulsation régulière que vous battriez du pied.",
  "The “home” note of a key or scale.": "La note « de repos » d'une tonalité ou d'une gamme.",
  "The note a chord is named after. G is the root of a G chord.":
    "La note qui donne son nom à l'accord. Sol est la fondamentale de l'accord de Sol.",
  "The notes of a chord played one at a time instead of together.":
    "Les notes d'un accord jouées une à une au lieu d'être jouées ensemble.",
  "Two different rhythms running at the same time.":
    "Deux rythmes différents qui se superposent.",
  "Making up music on the spot.": "Inventer de la musique sur le moment.",

  /* fiches imprimables */
  "Aim for every note ringing cleanly. Fret just behind the fret wire, press with the fingertips, and keep the thumb behind the neck.":
    "Cherchez à faire sonner chaque note proprement. Appuyez juste derrière la barrette, avec la pulpe des doigts, et gardez le pouce derrière le manche.",
  "Basic pattern: down-down-up-up-down-up. Count out loud while you play.":
    "Rythmique de base : bas-bas-haut-haut-bas-haut. Comptez à voix haute en jouant.",
  "All five are C major, in order up the neck.":
    "Les cinq sont des Do majeur, dans l'ordre en montant le manche.",
  "A minor pentatonic across all five positions.":
    "La pentatonique mineure de La dans les cinq positions.",
  "A major pentatonic shares every note with F♯ minor pentatonic.":
    "La pentatonique majeure de La partage toutes ses notes avec la pentatonique mineure de Fa♯.",
  "A blues scale over a 12-bar blues in A.":
    "La gamme blues de La sur un blues de 12 mesures en La.",
  "Aim at the 3rd and the 7th — they define the chord.":
    "Visez la tierce et la septième : ce sont elles qui définissent l'accord.",


  /* ---- lot 4 : panneaux, statistiques, légendes de fiches ---- */
  "Backing Loop for Improvisation": "Boucle d'accompagnement pour improviser",
  "Backing progression": "Grille d'accompagnement",
  "Call & Response Lick Trainer": "Entraîneur question-réponse",
  "Call-and-response: play a 2-bar lick, repeat it back from memory.":
    "Question-réponse : un plan de 2 mesures est joué, vous le rejouez de mémoire.",
  "Chord Shape Finder": "Trouveur de positions d'accords",
  "Chord Shape Preview": "Aperçu de la position",
  "Chord Progressions": "Grilles d'accords",
  "Chord progressions": "Grilles d'accords",
  "Chord changes": "Changements d'accords",
  "Chord quality (triads)": "Nature de l'accord (triades)",
  "Choose specific notes": "Choisir des notes précises",
  "All natural + sharp notes": "Toutes les notes naturelles et dièses",
  "Barre Chords": "Accords barrés",
  "CAGED Introduction": "Introduction au CAGED",
  "Advanced Techniques": "Techniques avancées",
  "Open Chord Library": "Bibliothèque d'accords ouverts",
  "Proven Progressions": "Grilles éprouvées",
  "Reference Fretboard": "Manche de référence",
  "Scale Explorer": "Explorateur de gammes",
  "Scale Patterns": "Schémas de gammes",
  "Strumming Pattern Trainer": "Entraîneur de rythmiques",
  "Fretboard Note Trainer": "Entraîneur de notes du manche",
  "Guess The Progression (by ear)": "Devinez la grille (à l'oreille)",
  "Interval & Chord Reference Guide": "Guide de référence des intervalles et accords",
  "Tap The Beat": "Tapez le tempo",
  "Open position": "Position ouverte",
  "Notes per measure": "Notes par mesure",
  "Play mystery progression": "Jouer la grille mystère",
  "Play this shape": "Jouer cette position",
  "Power chord (root + 5th)": "Power chord (fondamentale + quinte)",
  "Triad (3 adjacent strings)": "Triade (3 cordes voisines)",
  "Triad qualities": "Natures de triades",
  "Interval recognition": "Reconnaissance des intervalles",
  "Metronome subdivision": "Subdivision du métronome",
  "Scale root note": "Fondamentale de la gamme",
  "Root note to highlight": "Fondamentale à mettre en évidence",
  "Time signature": "Chiffrage de mesure",
  "Strum pattern": "Rythmique",
  "Quarter notes": "Noires",
  "Eighth notes": "Croches",
  "Eighth-note triplets": "Triolets de croches",
  "Sixteenth notes": "Doubles croches",
  "Scale degrees": "Degrés de la gamme",
  "Song / artist": "Morceau / artiste",
  "Title / artist": "Titre / artiste",
  "Phrase location": "Emplacement de la phrase",
  "What makes it work": "Pourquoi ça fonctionne",
  "Hardest section": "Passage le plus difficile",
  "Performance-ready date": "Date de mise au point",
  "Next year's goal": "Objectif de l'année suivante",
  "Which module you practiced": "Quel module vous avez travaillé",

  /* statistiques — {1} est la valeur en direct */
  "Accuracy: {1}": "Précision : {1}",
  "Attempts: {1}": "Tentatives : {1}",
  "Best streak: {1}": "Meilleure série : {1}",
  "Correct: {1}": "Réussites : {1}",
  "Avg offset: {1}": "Décalage moyen : {1}",
  "Avg. streak length this month: {1}": "Durée moyenne des séries ce mois-ci : {1}",
  "Current daily streak: {1}": "Série quotidienne en cours : {1}",

  /* descriptions accessibles des diagrammes */
  "Barre chord (E-shape, root on low E)": "Accord barré (forme de Mi, fondamentale sur le Mi grave)",
  "Barre chord (A-shape, root on A string)": "Accord barré (forme de La, fondamentale sur le La)",
  "Barre chord (C-shape, root on A string)": "Accord barré (forme de Do, fondamentale sur le La)",
  "Barre chord (D-shape, root on D string)": "Accord barré (forme de Ré, fondamentale sur le Ré)",
  "Barre chord (G-shape, root on low E)": "Accord barré (forme de Sol, fondamentale sur le Mi grave)",
  "Chord shape fretboard diagram, 12 frets, strings ordered low E at top":
    "Diagramme de position d'accord, 12 cases, cordes avec le Mi grave en haut",

  /* légendes des fiches imprimables */
  "A blues scale": "Gamme blues de La",
  "A blues scale position 1": "Gamme blues de La, position 1",
  "A blues scale, 5th position": "Gamme blues de La, 5e position",
  "A major pentatonic": "Pentatonique majeure de La",
  "A minor pentatonic box 1": "Pentatonique mineure de La, position 1",
  "A minor pentatonic full neck": "Pentatonique mineure de La, manche entier",
  "A minor pentatonic with degrees": "Pentatonique mineure de La avec les degrés",
  "A minor pentatonic, 5th position": "Pentatonique mineure de La, 5e position",
  "A natural minor full neck": "La mineur naturel, manche entier",
  "A natural minor across the full neck": "La mineur naturel sur tout le manche",
  "A string note map": "Carte des notes de la corde de La",
  "B♭ major (1st fret)": "Si♭ majeur (1re case)",
  "B♭ minor (1st fret)": "Si♭ mineur (1re case)",
  "C major (3rd fret)": "Do majeur (3e case)",
  "C minor (3rd fret)": "Do mineur (3e case)",
  "F major (1st fret)": "Fa majeur (1re case)",
  "F minor (1st fret)": "Fa mineur (1re case)",
  "G major (3rd fret)": "Sol majeur (3e case)",
  "G minor (3rd fret)": "Sol mineur (3e case)",
  "Blank neck — fill these in from memory": "Manche vierge — complétez de mémoire",
  "Blank neck — map the chord tones yourself": "Manche vierge — placez vous-même les notes de l'accord",
  "Bending targets — bend up to the circled pitch":
    "Cibles de bend : tirez la corde jusqu'à la hauteur entourée",
  "Both outer strings share the same note names. Learn them once and you know both.":
    "Les deux cordes extrêmes portent les mêmes noms de notes. Apprenez-les une fois et vous connaissez les deux.",
  "Filled dots are root notes.": "Les points pleins sont les fondamentales.",
  "A — first chord of \"I – IV – V\", fret 5": "La : premier accord de \"I – IV – V\", 5e case",
  "Am → F-shape": "Am → forme de Fa",
  "Bm7 – E7 – Amaj7": "Bm7 – E7 – Amaj7",


  /* ---- lot 5 : onboarding, légendes, oreille, lignes de difficulté ---- */
  "<b>This Month</b> below is your assignment. It lists what to practice and links straight to the modules you need — tap any of those amber chips to jump there.":
    "<b>Ce mois-ci</b>, ci-dessous, c'est votre feuille de route. Elle indique quoi travailler et renvoie directement aux modules nécessaires : touchez une des étiquettes ambrées pour y aller.",
  "<b>Practice the five disciplines</b> — ear training, rhythm, chord progressions, fretboard fluency, and soloing. The daily split on this page suggests 45–60 minutes.":
    "<b>Travaillez les cinq disciplines</b> : oreille, rythme, grilles d'accords, maîtrise du manche et improvisation. La répartition quotidienne de cette page propose 45 à 60 minutes.",
  "<b>Log the session</b> in Practice Log when you finish. That drives your streak and the progress marker on the fretboard above.":
    "<b>Notez la séance</b> dans le Journal quand vous avez fini. C'est ce qui alimente votre série et le repère de progression sur le manche ci-dessus.",
  "<b>Mark the month complete</b> when the material feels solid, and the next month unlocks. There's no rush — repeat a month if you need to.":
    "<b>Validez le mois</b> quand le contenu vous paraît solide : le mois suivant se débloque. Rien ne presse — refaites un mois si besoin.",

  /* légende des schémas de gammes */
  "<span class=\"sw\" style=\"background:#8fae6e;\"></span>Position 1":
    "<span class=\"sw\" style=\"background:#8fae6e;\"></span>Position 1",
  "<span class=\"sw\" style=\"background:#6f93b0;\"></span>Position 2":
    "<span class=\"sw\" style=\"background:#6f93b0;\"></span>Position 2",
  "<span class=\"sw\" style=\"background:#b17ce6;\"></span>Position 3":
    "<span class=\"sw\" style=\"background:#b17ce6;\"></span>Position 3",
  "<span class=\"sw\" style=\"background:#dd5b5b;\"></span>Position 4":
    "<span class=\"sw\" style=\"background:#dd5b5b;\"></span>Position 4",
  "<span class=\"sw\" style=\"background:#c98a3f;\"></span>Position 5":
    "<span class=\"sw\" style=\"background:#c98a3f;\"></span>Position 5",
  "<span class=\"sw\" style=\"background:#a8631f;\"></span>Root":
    "<span class=\"sw\" style=\"background:#a8631f;\"></span>Fondamentale",
  "<span class=\"sw\" style=\"background:var(--amber);\"></span>Root note (lettered)":
    "<span class=\"sw\" style=\"background:var(--amber);\"></span>Fondamentale (nommée)",
  "<span class=\"sw\" style=\"background:var(--cream-dim);\"></span>Scale tone (numbered by scale degree)":
    "<span class=\"sw\" style=\"background:var(--cream-dim);\"></span>Note de la gamme (numérotée par degré)",

  /* lignes de difficulté du quiz */
  "Easy — working one string at a time, fret 1–5, low E to high e. {done}/{total} positions identified so far.":
    "Facile : une corde à la fois, cases 1 à 5, du Mi grave au Mi aigu. {done}/{total} positions identifiées jusqu'ici.",
  "Moderate — vertical sweep at fret {fret}, string by string from low E to high e. {done}/{total} positions identified so far.":
    "Intermédiaire : balayage vertical à la case {fret}, corde après corde du Mi grave au Mi aigu. {done}/{total} positions identifiées jusqu'ici.",
  "Difficult — anywhere on the neck, fully random. {done}/{total} positions identified so far.":
    "Difficile : n'importe où sur le manche, entièrement aléatoire. {done}/{total} positions identifiées jusqu'ici.",

  /* travail de l'oreille — programme */
  "Ear training": "Travail de l'oreille",
  "Ear Training": "Travail de l'oreille",
  "Ear training: unison vs. octave, then major 2nd vs. major 3rd (Level 1).":
    "Oreille : unisson contre octave, puis seconde majeure contre tierce majeure (niveau 1).",
  "Ear training: perfect 4th and perfect 5th recognition.":
    "Oreille : reconnaître la quarte juste et la quinte juste.",
  "Ear training: major vs. minor triads by sound alone.":
    "Oreille : distinguer les triades majeures des mineures à la seule écoute.",
  "Ear training: 6ths and 7ths (Level 2).": "Oreille : sixtes et septièmes (niveau 2).",
  "Ear training: add diminished and augmented triads to your set (Level 2).":
    "Oreille : ajoutez les triades diminuées et augmentées à votre répertoire (niveau 2).",
  "Ear training: full interval set, Level 3.": "Oreille : tous les intervalles, niveau 3.",
  "Ear training: identify a full 3-4 chord progression by ear.":
    "Oreille : identifiez à l'oreille une grille complète de 3 ou 4 accords.",
  "Ear training: identify scale degree of a played note against a root (functional ear training).":
    "Oreille : identifiez le degré d'une note jouée par rapport à une fondamentale (oreille fonctionnelle).",
  "Ear training: Learning to recognise notes, intervals and chords just by listening.":
    "Travail de l'oreille : apprendre à reconnaître notes, intervalles et accords rien qu'à l'écoute.",

  /* rythmiques */
  "D D U U D U (workhorse pop/rock pattern)": "B B H H B H (la rythmique pop/rock de base)",
  "D U D U D U D U (straight eighths)": "B H B H B H B H (croches régulières)",
  "D · D U D U (driving eighths)": "B · B H B H (croches qui poussent)",
  "D · U D U · (syncopated, leaves space)": "B · H B H · (syncopé, laisse de l'espace)",
  "Basic strum pattern: down-down-up-up-down-up at a slow, steady tempo.":
    "Rythmique de base : bas-bas-haut-haut-bas-haut, à un tempo lent et régulier.",
  "Alternating-bass strumming pattern (Travis-picking lite).":
    "Rythmique à basse alternée (Travis picking simplifié).",
  "Count aloud before you play. The accent falls on 1.":
    "Comptez à voix haute avant de jouer. L'accent tombe sur le 1.",

  /* contenus divers */
  "CAGED: Five chord shapes (C, A, G, E, D) that link together to cover the whole neck.":
    "CAGED : cinq formes d'accord (C, A, G, E, D) qui s'enchaînent pour couvrir tout le manche.",
  "Chords: Three or more notes played together, usually strummed as one sound.":
    "Accords : trois notes ou plus jouées ensemble, généralement grattées comme un seul son.",
  "Dragging the pick or fingers across several strings at once.":
    "Passer le médiator ou les doigts sur plusieurs cordes à la fois.",
  "Chords taken from the parallel minor key.": "Des accords empruntés à la tonalité mineure parallèle.",
  "Chord-tone soloing: target the 3rd and 7th of each chord in a progression.":
    "Solo sur les notes de l'accord : visez la tierce et la septième de chaque accord de la grille.",
  "Click a chord to hear it. Master these shapes cold before month 4's barre chords.":
    "Cliquez sur un accord pour l'entendre. Maîtrisez ces positions sur le bout des doigts avant les barrés du mois 4.",
  "Compare honestly against your Month 1 recording.":
    "Comparez honnêtement avec votre enregistrement du mois 1.",
  "Compare: D natural minor (the 6th is flat)": "Comparez : Ré mineur naturel (la sixte est bémol)",
  "Compare: G major (the 7th is natural)": "Comparez : Sol majeur (la septième est naturelle)",
  "Dm7 is the ii, G7 the V, Cmaj7 the I. The pull from G7 back to C is the strongest movement in tonal music.":
    "Dm7 est le ii, G7 le V et Cmaj7 le I. L'attraction de G7 vers Do est le mouvement le plus fort de la musique tonale.",
  "Dorian and Mixolydian modes — where they live over familiar chords.":
    "Modes dorien et mixolydien : où ils se placent sur des accords familiers.",
  "E-shape and A-shape barre chords, movable up and down the neck.":
    "Accords barrés forme de Mi et forme de La, déplaçables le long du manche.",
  "Every blues, rockabilly and early rock solo sits on this form.":
    "Tout solo de blues, de rockabilly et de rock des débuts repose sur cette forme.",
  "Alternate picking drills with the metronome, ramping 5 bpm at a time.":
    "Exercices d'aller-retour au métronome, en montant de 5 bpm à la fois.",
  "Blues scale (pentatonic + the \"blue note\").":
    "Gamme blues (pentatonique + la « blue note »).",
  "A blues scale — minor pentatonic plus the ♭5 “blue note”":
    "Gamme blues de La : pentatonique mineure plus la « blue note » ♭5",
  "Chromatic 1-2-3-4": "Chromatique 1-2-3-4",
  "Classic rock": "Rock classique",
  "Dominant 7th": "Septième de dominante",
  "D natural minor": "Ré mineur naturel",
  "E minor pentatonic": "Pentatonique mineure de Mi",
  "E minor pentatonic, open position": "Pentatonique mineure de Mi, position ouverte",


  /* ---- lot 6 : programme, navigation contextuelle, fiches ---- */
  "First Progressions": "Premières grilles",
  "Foundation Setup": "Mise en place",
  "Improvisation": "Improvisation",
  "Improvisation Basics": "Bases de l'improvisation",
  "Integration & Performance": "Intégration et jeu sur scène",
  "Fretboard fluency": "Maîtrise du manche",
  "Fretboard knowledge": "Connaissance du manche",
  "Full practice session": "Séance de travail complète",
  "Log the session": "Noter la séance",
  "Major (Ionian)": "Majeure (ionien)",
  "Major pentatonic": "Pentatonique majeure",
  "Minor pentatonic": "Pentatonique mineure",
  "Harmonic minor": "Mineure harmonique",
  "Melodic minor": "Mineure mélodique",
  "Natural minor (Aeolian)": "Mineure naturelle (éolien)",
  "Natural notes only": "Notes naturelles uniquement",
  "One note name only": "Un seul nom de note",
  "G minor pentatonic": "Pentatonique mineure de Sol",
  "G minor pentatonic, 3rd position": "Pentatonique mineure de Sol, 3e position",
  "G mixolydian": "Sol mixolydien",
  "I–IV–V in Three Keys": "I–IV–V dans trois tonalités",
  "Major Pentatonic & the Blues Scale": "Pentatonique majeure et gamme blues",
  "Legato drill — hammer-ons and pull-offs": "Exercice de legato : hammer-ons et pull-offs",

  /* navigation contextuelle */
  "Go to Ear Training": "Aller au Travail de l'oreille",
  "Go to Chord Progressions": "Aller aux Grilles d'accords",
  "Go to Fretboard": "Aller au Manche",
  "Go to Rhythm": "Aller au Rythme",
  "Go to Soloing & Improv": "Aller à Solo et impro",

  /* descriptions accessibles */
  "Guitar fretboard diagram, 12 frets, strings ordered low E at top":
    "Diagramme du manche, 12 cases, cordes avec le Mi grave en haut",
  "Reference fretboard showing note positions, 22 frets, strings ordered low E at top":
    "Manche de référence montrant la position des notes, 22 cases, cordes avec le Mi grave en haut",
  "Scale explorer fretboard, 12 frets, strings ordered low E at top":
    "Manche de l'explorateur de gammes, 12 cases, cordes avec le Mi grave en haut",
  "Scale patterns fretboard showing neck positions, 18 frets, strings ordered low E at top":
    "Manche des schémas de gammes montrant les positions, 18 cases, cordes avec le Mi grave en haut",

  /* programme — exercices */
  "Learn open chords: E, A, D, G, C, Em, Am, Dm — clean, buzz-free.":
    "Apprenez les accords ouverts : E, A, D, G, C, Em, Am, Dm, propres et sans frise.",
  "Learn the 12-bar blues form and play it with a shuffle strum.":
    "Apprenez la forme du blues de 12 mesures et jouez-la avec une rythmique shuffle.",
  "Learn the 5 CAGED chord shapes and how they overlap on the neck.":
    "Apprenez les 5 formes d'accord CAGED et la façon dont elles se recouvrent sur le manche.",
  "Learn 3 full songs from intro to end, in different styles.":
    "Apprenez 3 morceaux entiers, de l'intro à la fin, dans des styles différents.",
  "Learn one borrowed-chord progression (e.g. i–VI–III–VII, or a secondary dominant).":
    "Apprenez une grille à accords empruntés (par exemple i–VI–III–VII, ou une dominante secondaire).",
  "Introduce syncopated strumming (the \"and\" of beat 2 missed on purpose).":
    "Introduisez la rythmique syncopée (le « et » du 2e temps volontairement sauté).",
  "Introduce tapping and basic sweep-picking shapes.":
    "Introduisez le tapping et les formes de base du sweep picking.",
  "Legato technique: hammer-ons and pull-offs for smoother phrasing.":
    "Technique du legato : hammer-ons et pull-offs pour un phrasé plus fluide.",
  "Improvise over all four backing loop types from the Soloing tool.":
    "Improvisez sur les quatre types de boucle d'accompagnement du module Solo.",
  "Major pentatonic — and where it overlaps with minor pentatonic.":
    "La pentatonique majeure, et où elle recouvre la pentatonique mineure.",
  "Full-neck scale fluency: play any scale starting on any string.":
    "Aisance sur tout le manche : jouez n'importe quelle gamme en partant de n'importe quelle corde.",
  "Full fretboard note drill: every string, every fret up to 12.":
    "Exercice complet des notes du manche : chaque corde, chaque case jusqu'à la 12e.",
  "Fretboard sight-reading: name notes faster than your quiz best time.":
    "Lecture à vue sur le manche : nommez les notes plus vite que votre meilleur temps.",
  "Fretboard: memorize natural notes on the low E and high e strings, frets 0-5.":
    "Manche : mémorisez les notes naturelles des cordes de Mi grave et Mi aigu, cases 0 à 5.",
  "Fretboard: natural notes on A and D strings, frets 0-5.":
    "Manche : notes naturelles sur les cordes de La et de Ré, cases 0 à 5.",
  "Fretboard: The flat front of the neck where you press the strings down.":
    "Manche : la face plate sur laquelle on appuie les cordes.",

  /* glossaire affiché dans les panneaux */
  "Five chord shapes (C, A, G, E, D) that link together to cover the whole neck.":
    "Cinq formes d'accord (C, A, G, E, D) qui s'enchaînent pour couvrir tout le manche.",
  "Flattening one finger across every string to act like a movable nut.":
    "Aplatir un doigt sur toutes les cordes pour qu'il fasse office de sillet mobile.",
  "From one note to the next note of the same name — twelve frets higher.":
    "D'une note à la suivante portant le même nom : douze cases plus haut.",
  "Guitar notation: six lines for six strings, with fret numbers on them.":
    "La notation guitare : six lignes pour six cordes, avec les numéros de case dessus.",
  "Learning to recognise notes, intervals and chords just by listening.":
    "Apprendre à reconnaître notes, intervalles et accords rien qu'à l'écoute.",

  /* fiches imprimables */
  "Find the root on the low E string, lay the barre there, and the shape gives you that chord.":
    "Repérez la fondamentale sur la corde de Mi grave, posez-y le barré, et la forme vous donne cet accord.",
  "Five positions, each starting where the last leaves off. Learn the joins, not just the boxes.":
    "Cinq positions, chacune commençant là où la précédente s'arrête. Apprenez les jonctions, pas seulement les cases.",
  "Frets 0–5. Say each note aloud as you play it.":
    "Cases 0 à 5. Dites chaque note à voix haute en la jouant.",
  "In every key the pattern is the same: I, then the chord four steps up, then five steps up.":
    "Dans toutes les tonalités le schéma est le même : I, puis l'accord quatre degrés plus haut, puis cinq degrés plus haut.",
  "Keep the strumming hand moving through the gap. The miss is in the contact, not the motion.":
    "Gardez la main droite en mouvement pendant le silence. Ce qu'on saute, c'est le contact, pas le geste.",


  /* ---- lot 7 : correctifs d'entités + derniers paragraphes ----
     Ces textes contiennent &mdash;/&ndash; dans la source, mais comme ce sont de simples
     nœuds de texte, la clé utilisée à l'exécution est le caractère décodé. */
  "The full program for twelve months — long enough to finish it at the intended pace.":
    "Le programme complet pendant douze mois — largement de quoi le terminer au rythme prévu.",
  "Keep Months 2–12 permanently, with no renewal date. Best if you expect to revisit the material.":
    "Gardez les mois 2–12 définitivement, sans date de renouvellement. Idéal si vous comptez revenir sur le contenu.",
  "Press play, then choose the interval you heard.":
    "Lancez la lecture, puis choisissez l'intervalle entendu.",
  "Tracks your ear-training activity for {1} — a rolling tally that resets naturally each month, plus how consistently you're showing up day to day.":
    "Suit votre travail de l'oreille pour {1} — un relevé glissant qui se réinitialise chaque mois, ainsi que votre régularité au fil des jours.",
  "One position found for this combination.": "Une position trouvée pour cette combinaison.",
  "Tap note names above to show them on the fretboard.":
    "Touchez les noms de notes ci-dessus pour les afficher sur le manche.",
  "The workhorse of rock and blues soloing — five notes, no half-steps to trip over, works over almost any minor-key progression.":
    "Le cheval de bataille du solo rock et blues : cinq notes, aucun demi-ton pour vous faire trébucher, et ça fonctionne sur presque toutes les grilles en mineur.",
  "👆 Tap any dot to hear that note by itself.":
    "👆 Touchez un point pour entendre cette note seule.",
  "🔊 Tap anywhere once to enable sound (mobile browsers require this).":
    "🔊 Touchez l'écran une fois pour activer le son (les navigateurs mobiles l'exigent).",


  "Show the notes being played on the keyboard": "Afficher les notes jouées sur le clavier",
  "Press \"Play a lick\" to begin.": "Appuyez sur « Jouer un plan » pour commencer.",
  "Press Start quiz to begin.": "Appuyez sur Démarrer l'exercice pour commencer.",
  "Reference Keyboard": "Clavier de référence",
  "Skip the level check": "Passer le test de niveau",
  "Same note twice — no gap at all.": "Deux fois la même note — aucun écart.",


  /* ---- lot 8 : en-têtes de mois, programme, glossaire ----
     L'étiquette de phase est incluse dans l'en-tête, donc titre et étiquette sont
     traduits ensemble ici. Nombre borné à 12. */
  "Month 1: Foundation Setup <span class=\"tag\">Foundation</span> <span class=\"tag tag-free\">Free</span>":
    "Mois 1 : Mise en place <span class=\"tag\">Fondations</span> <span class=\"tag tag-free\">Gratuit</span>",
  "Month 2: Rhythm &amp; Changes <span class=\"tag\">Foundation</span>":
    "Mois 2 : Rythme et changements <span class=\"tag\">Fondations</span>",
  "Month 3: First Progressions <span class=\"tag\">Foundation</span>":
    "Mois 3 : Premières grilles <span class=\"tag\">Fondations</span>",
  "Month 4: Barre Chords <span class=\"tag\">Building</span>":
    "Mois 4 : Accords barrés <span class=\"tag\">Construction</span>",
  "Month 5: CAGED Introduction <span class=\"tag\">Building</span>":
    "Mois 5 : Introduction au CAGED <span class=\"tag\">Construction</span>",
  "Month 6: Pentatonic Power <span class=\"tag\">Building</span>":
    "Mois 6 : La force des pentatoniques <span class=\"tag\">Construction</span>",
  "Month 7: Improvisation Basics <span class=\"tag\">Soloing</span>":
    "Mois 7 : Bases de l'improvisation <span class=\"tag\">Solo</span>",
  "Month 8: Modes &amp; Color <span class=\"tag\">Soloing</span>":
    "Mois 8 : Modes et couleurs <span class=\"tag\">Solo</span>",
  "Month 9: Speed &amp; Precision <span class=\"tag\">Mastery</span>":
    "Mois 9 : Vitesse et précision <span class=\"tag\">Maîtrise</span>",
  "Month 10: Advanced Techniques <span class=\"tag\">Mastery</span>":
    "Mois 10 : Techniques avancées <span class=\"tag\">Maîtrise</span>",
  "Month 11: Style Immersion <span class=\"tag\">Mastery</span>":
    "Mois 11 : Immersion dans les styles <span class=\"tag\">Maîtrise</span>",
  "Month 12: Integration &amp; Performance <span class=\"tag\">Mastery</span>":
    "Mois 12 : Intégration et jeu sur scène <span class=\"tag\">Maîtrise</span>",
  "Pentatonic Power": "La force des pentatoniques",
  "Modes & Color": "Modes et couleurs",
  "Speed & Precision": "Vitesse et précision",
  "Style Immersion": "Immersion dans les styles",
  "Rhythm & Changes": "Rythme et changements",
  "Soloing & Improv": "Solo et impro",
  "Rhythm / metronome": "Rythme / métronome",
  "Rhythm & timing": "Rythme et mise en place",
  "Soloing / improvisation": "Solo / improvisation",

  /* test de niveau — progression */
  "Question 1 of 5": "Question 1 sur 5",
  "Question 2 of 5": "Question 2 sur 5",
  "Question 3 of 5": "Question 3 sur 5",
  "Question 4 of 5": "Question 4 sur 5",
  "Question 5 of 5": "Question 5 sur 5",

  /* programme — exercices */
  "Practice changing between all Month 1 chords with zero pause, metronome at 60-80 bpm.":
    "Travaillez les changements entre tous les accords du mois 1 sans aucune pause, métronome à 60-80 bpm.",
  "Play I–IV–V in three different keys (G, C, A).":
    "Jouez I–IV–V dans trois tonalités différentes (G, C, A).",
  "Play I–V–vi–IV using barre shapes instead of open chords.":
    "Jouez I–V–vi–IV avec des barrés au lieu d'accords ouverts.",
  "Play and internalize the ii–V–I progression.":
    "Jouez et intériorisez la grille ii–V–I.",
  "Play in odd time signatures (5/4, 7/8) using the metronome.":
    "Jouez en mesures asymétriques (5/4, 7/8) avec le métronome.",
  "Practice a polyrhythmic feel (3-against-4 clapping, then on guitar).":
    "Travaillez une sensation polyrythmique (3 contre 4 en frappant dans les mains, puis à la guitare).",
  "Minor pentatonic \"Box 1\" shape, memorized in at least 3 keys.":
    "La position « 1 » de la pentatonique mineure, mémorisée dans au moins 3 tonalités.",
  "Minor pentatonic across all 5 neck positions.":
    "La pentatonique mineure dans les 5 positions du manche.",

  /* glossaire et modes */
  "Major with a flattened 7th — the dominant sound.":
    "Majeure avec la septième abaissée : la couleur dominante.",
  "Minor with a raised 6th — minor, but brighter.":
    "Mineure avec la sixte haussée : mineure, mais plus lumineuse.",
  "Metronome: A steady click that keeps time so you don’t speed up or slow down.":
    "Métronome : un clic régulier qui tient le tempo pour vous éviter d'accélérer ou de ralentir.",
  "Minor: A darker, sadder-sounding chord or scale.":
    "Mineur : un accord ou une gamme à la sonorité plus sombre, plus triste.",
  "Moving each note to the nearest note of the next chord so changes sound smooth.":
    "Déplacer chaque note vers la plus proche de l'accord suivant pour que les changements soient fluides.",
  "Moving music to a different key, so it sounds higher or lower.":
    "Faire passer la musique dans une autre tonalité, plus haut ou plus bas.",
  "Pushing a string sideways to raise its pitch.":
    "Pousser la corde sur le côté pour en monter la hauteur.",
  "Microphone off — play the note on your guitar instead of tapping the keypad.":
    "Micro désactivé — jouez la note sur votre guitare au lieu d'utiliser le clavier.",

  /* fiches imprimables */
  "Natural Notes — A and D strings": "Notes naturelles — cordes de La et de Ré",
  "Natural notes — low E and high e, frets 0–5":
    "Notes naturelles — Mi grave et Mi aigu, cases 0 à 5",
  "Note-naming sprint — fill in every natural note":
    "Sprint de nommage : complétez toutes les notes naturelles",
  "One minute per pair. Count every clean change; write your best score.":
    "Une minute par paire. Comptez chaque changement propre et notez votre meilleur score.",
  "One note separates them. Play both over a Dm vamp and listen for the lift.":
    "Une seule note les sépare. Jouez les deux sur un vamp de Dm et écoutez la différence d'éclairage.",
  "One phrase per style. Work in short loops, slowed down.":
    "Une phrase par style. Travaillez en boucles courtes, au ralenti.",
  "Polyrhythm & Note Naming": "Polyrythmie et nom des notes",
  "Print practice sheets (2)": "Imprimer les fiches (2)",
  "I – V – vi – IV": "I – V – vi – IV",
  "I – vi – IV – V": "I – vi – IV – V",

  /* ---- navigation ---- */
  "<span class=\"led\"></span>Dashboard": "<span class=\"led\"></span>Tableau de bord",
  "<span class=\"led\"></span>Curriculum": "<span class=\"led\"></span>Programme",
  "<span class=\"led\"></span>Ear Training": "<span class=\"led\"></span>Travail de l'oreille",
  "<span class=\"led\"></span>Rhythm": "<span class=\"led\"></span>Rythme",
  "<span class=\"led\"></span>Chord Progressions": "<span class=\"led\"></span>Grilles d'accords",
  "<span class=\"led\"></span>Chord Shapes": "<span class=\"led\"></span>Positions d'accords",
  "<span class=\"led\"></span>Fretboard": "<span class=\"led\"></span>Manche",
  "<span class=\"led\"></span>Soloing &amp; Improv": "<span class=\"led\"></span>Solo et impro",
  "<span class=\"led\"></span>Scale Patterns": "<span class=\"led\"></span>Schémas de gammes",
  "<span class=\"led\"></span>Practice Log": "<span class=\"led\"></span>Journal",
  "Modules": "Modules",
  "Language": "Langue",
  "← Back": "← Retour",

  /* ---- écran d'accueil ---- */
  "Guitar Method & Practice Studio": "Méthode de guitare et studio de travail",
  "From Novice to the Stage in One Year — ear training, rhythm, chords, fretboard fluency, and improvisation, all in one place.":
    "Du débutant à la scène en un an : travail de l'oreille, rythme, accords, maîtrise du manche et improvisation, le tout au même endroit.",
  "Enter the Academy →": "Entrer dans l'Académie →",
  "🔊 Tapping Enter also unlocks sound for the app": "🔊 Appuyer sur Entrer active aussi le son de l'application",
  "From Novice to the Stage in One Year": "Du débutant à la scène en un an",
  "CURRENT STREAK{1}": "SÉRIE EN COURS{1}",

  /* ---- tableau de bord ---- */
  "Start Here": "Commencez ici",
  "Got it, hide this": "C'est compris, masquer",
  "This Month": "Ce mois-ci",
  "Why This Order": "Pourquoi cet ordre",
  "Daily Split (45–60 min)": "Répartition quotidienne (45–60 min)",
  "◀ Previous month": "◀ Mois précédent",
  "Mark month complete, advance ▶": "Valider le mois et passer au suivant ▶",
  "Teaching level: <b>New to guitar</b>": "Niveau d'enseignement : <b>Débutant complet</b>",
  "Teaching level: <b>Some experience</b>": "Niveau d'enseignement : <b>Un peu d'expérience</b>",
  "Teaching level: <b>Experienced</b>": "Niveau d'enseignement : <b>Expérimenté</b>",
  "Explain music words": "Expliquer les termes musicaux",
  "Retake check": "Refaire le test",
  "10 min — Ear training reps": "10 min — Exercices d'oreille",
  "10 min — Metronome / rhythm drill": "10 min — Métronome / travail rythmique",
  "15 min — This month's chord or scale material": "15 min — Accords ou gammes du mois",
  "15 min — Fretboard fluency or improvisation": "15 min — Maîtrise du manche ou improvisation",
  "5 min — Log the session": "5 min — Noter la séance",

  /* ---- programme ---- */
  "The 12-Month Arc": "Le parcours sur 12 mois",
  "Click a month to open it. Mark months done as you finish them — your progress marker on the fretboard above updates automatically.":
    "Cliquez sur un mois pour l'ouvrir. Validez les mois au fur et à mesure : le repère de progression sur le manche ci-dessus se met à jour tout seul.",
  "Mark done": "Valider",
  "Foundation": "Fondations",
  "Building": "Construction",
  "Soloing": "Solo",
  "Mastery": "Maîtrise",
  "Free": "Gratuit",
  "Locked": "Verrouillé",
  "See options": "Voir les formules",
  "Part of the full program — Months 2–12.": "Fait partie du programme complet — mois 2 à 12.",

  /* ---- achat et accès ---- */
  "Unlock Months 2–12": "Débloquer les mois 2 à 12",
  "Unlock Months 2&ndash;12": "Débloquer les mois 2&ndash;12",
  "Your access has expired": "Votre accès a expiré",
  "Month {n} is part of the full program": "Le mois {n} fait partie du programme complet",
  "1 year of access": "1 an d'accès",
  "Unlimited access": "Accès illimité",
  "Best value": "Meilleur rapport",
  "The full program for twelve months &mdash; long enough to finish it at the intended pace.":
    "Le programme complet pendant douze mois &mdash; largement de quoi le terminer au rythme prévu.",
  "Keep Months 2&ndash;12 permanently, with no renewal date. Best if you expect to revisit the material.":
    "Gardez les mois 2&ndash;12 définitivement, sans date de renouvellement. Idéal si vous comptez revenir sur le contenu.",
  "Choose 1 year of access": "Choisir 1 an d'accès",
  "Choose Unlimited access": "Choisir l'accès illimité",
  "I have a code": "J'ai un code",
  "Redemption code": "Code d'activation",
  "Enter your code": "Saisissez votre code",
  "Redeem": "Activer",
  "Checking…": "Vérification…",
  "Enter a code first.": "Saisissez d'abord un code.",
  "That code is not valid.": "Ce code n'est pas valide.",
  "That code has expired.": "Ce code a expiré.",
  "That code has already been fully claimed.": "Ce code a déjà été entièrement utilisé.",
  "You have already redeemed that code.": "Vous avez déjà utilisé ce code.",
  "You already have full access — no code needed.": "Vous avez déjà l'accès complet — aucun code nécessaire.",
  "Too many attempts. Please wait ten minutes and try again.":
    "Trop de tentatives. Patientez dix minutes puis réessayez.",
  "Unlocked. Enjoy the full program.": "Débloqué. Profitez du programme complet.",
  "Could not reach the server. Check your connection and try again.":
    "Impossible de joindre le serveur. Vérifiez votre connexion et réessayez.",
  "Renew 1 year": "Renouveler 1 an",
  "Switch to unlimited": "Passer à l'illimité",
  "Unlimited access — Months 2–12 are yours permanently.":
    "Accès illimité — les mois 2 à 12 sont à vous définitivement.",
  "Access runs until {date} ({n} day left).": "Accès valable jusqu'au {date} ({n} jour restant).",
  "Access runs until {date} ({n} days left).": {
    one: "Accès valable jusqu'au {date} ({n} jour restant).",
    other: "Accès valable jusqu'au {date} ({n} jours restants)."
  },
  "<b>Your access ends in {n} day</b> ({date}). Renew to keep Months 2&ndash;12.":
    "<b>Votre accès se termine dans {n} jour</b> ({date}). Renouvelez pour conserver les mois 2&ndash;12.",
  "<b>Your access ends in {n} days</b> ({date}). Renew to keep Months 2&ndash;12.": {
    one: "<b>Votre accès se termine dans {n} jour</b> ({date}). Renouvelez pour conserver les mois 2&ndash;12.",
    other: "<b>Votre accès se termine dans {n} jours</b> ({date}). Renouvelez pour conserver les mois 2&ndash;12."
  },
  "Renew for another year, or switch to unlimited so it never lapses again. Your progress is all still saved.":
    "Renouvelez pour un an, ou passez à l'illimité pour ne plus jamais perdre l'accès. Toute votre progression est conservée.",
  "Month 1 is free and stays free. The remaining eleven months cover barre chords, CAGED, pentatonics, modes, improvisation and performance.":
    "Le mois 1 est gratuit et le restera. Les onze mois suivants couvrent les barrés, le CAGED, les pentatoniques, les modes, l'improvisation et le jeu sur scène.",

  /* ---- test de niveau ---- */
  "Where would you like to start?": "Par où souhaitez-vous commencer ?",
  "Have you played guitar before?": "Avez-vous déjà joué de la guitare ?",
  "Can you read a chord diagram?": "Savez-vous lire un diagramme d'accord ?",
  "Do you know what a chord is?": "Savez-vous ce qu'est un accord ?",
  "Tap the 3rd fret of the low E string.": "Touchez la 3e case de la corde de Mi grave.",
  "The low E is the thickest string — the bottom row here.":
    "Le Mi grave est la corde la plus épaisse — la ligne du bas ici.",
  "Which chord is this?": "Quel est cet accord ?",
  "I'm not sure": "Je ne suis pas sûr",
  "Skip": "Passer",
  "Never": "Jamais",
  "A little": "Un peu",
  "Yes, regularly": "Oui, régulièrement",
  "No": "Non",
  "Roughly": "À peu près",
  "Yes": "Oui",
  "Not really": "Pas vraiment",
  "Yes, and inversions": "Oui, et les renversements",
  "New to guitar": "Débutant complet",
  "Some experience": "Un peu d'expérience",
  "Experienced": "Expérimenté",
  "Recommended": "Recommandé",
  "We'll explain music words when you tap them, introduce each module, and start quizzes on Easy.":
    "Nous expliquerons les termes musicaux quand vous les toucherez, présenterons chaque module et commencerons les exercices en niveau Facile.",
  "Standard instructions, with music words explained when you tap them.":
    "Consignes standard, avec les termes musicaux expliqués quand vous les touchez.",
  "Full detail, and explanations switched off. You can turn them back on any time.":
    "Tous les détails, explications désactivées. Vous pouvez les réactiver à tout moment.",
  "Based on your answers we suggest <b>New to guitar</b>, but pick whichever you prefer. You can change this any time on the Dashboard.":
    "D'après vos réponses nous suggérons <b>Débutant complet</b>, mais choisissez ce qui vous convient. Vous pourrez le changer à tout moment depuis le Tableau de bord.",
  "Based on your answers we suggest <b>Some experience</b>, but pick whichever you prefer. You can change this any time on the Dashboard.":
    "D'après vos réponses nous suggérons <b>Un peu d'expérience</b>, mais choisissez ce qui vous convient. Vous pourrez le changer à tout moment depuis le Tableau de bord.",
  "Based on your answers we suggest <b>Experienced</b>, but pick whichever you prefer. You can change this any time on the Dashboard.":
    "D'après vos réponses nous suggérons <b>Expérimenté</b>, mais choisissez ce qui vous convient. Vous pourrez le changer à tout moment depuis le Tableau de bord.",

  /* ---- présentations des modules ---- */
  "What is this module for?": "À quoi sert ce module ?",
  "Got it": "Compris",
  "The full one-year plan. Each month lists a few things to practise. Open your current month, work through it over a few weeks, then mark it done. You can revisit earlier months any time.":
    "Le plan complet sur un an. Chaque mois propose quelques points à travailler. Ouvrez votre mois en cours, travaillez-le sur quelques semaines, puis validez-le. Vous pouvez revenir aux mois précédents quand vous voulez.",
  "Ear training teaches you to recognise what you hear. Press play, listen, then pick an answer. A few minutes daily beats one long session.":
    "Le travail de l'oreille apprend à reconnaître ce que vous entendez. Lancez la lecture, écoutez, puis choisissez une réponse. Quelques minutes par jour valent mieux qu'une longue séance.",
  "Rhythm is about keeping a steady beat. The metronome clicks in time; try to strum exactly with it. Tap along on the pad to test how steady you really are.":
    "Le rythme consiste à tenir un tempo régulier. Le métronome marque le temps ; essayez de gratter exactement avec lui. Tapez sur le pad pour mesurer votre régularité réelle.",
  "A chord is several notes played together, and a progression is a series of chords — the backbone of most songs. Tap any progression to hear it loop.":
    "Un accord, ce sont plusieurs notes jouées ensemble, et une grille est une suite d'accords — la colonne vertébrale de la plupart des morceaux. Touchez une grille pour l'entendre en boucle.",
  "The same chord can be played in several places on the neck. Pick a chord to see exactly where to put your fingers.":
    "Un même accord peut se jouer à plusieurs endroits du manche. Choisissez un accord pour voir exactement où poser les doigts.",
  "This is where you learn the name of every note on the neck. Start on Easy: a position lights up and you name it. Positions you get right stay lit.":
    "C'est ici que vous apprenez le nom de chaque note du manche. Commencez en Facile : une position s'allume et vous la nommez. Les positions trouvées restent allumées.",
  "Soloing means making up your own lines. Pick a scale and every highlighted note will fit the backing loop. There are no wrong answers here.":
    "Improviser, c'est inventer vos propres phrases. Choisissez une gamme et toutes les notes surlignées iront avec la boucle d'accompagnement. Ici, il n'y a pas de mauvaise réponse.",
  "A scale is a set of notes played in order. This shows every scale in the app and all five neck positions, so you can see how they join up.":
    "Une gamme est une suite de notes jouées dans l'ordre. Vous trouverez ici toutes les gammes de l'application et les cinq positions du manche, pour voir comment elles s'enchaînent.",
  "Record each practice session here. It keeps your streak going and feeds the progress marker at the top of the page.":
    "Notez ici chaque séance de travail. Cela entretient votre série et alimente le repère de progression en haut de la page.",

  /* ---- journal et sauvegarde ---- */
  "Log a Session": "Noter une séance",
  "Save session": "Enregistrer la séance",
  "Recent Sessions": "Séances récentes",
  "Last 28 Days": "28 derniers jours",
  "No sessions logged yet.": "Aucune séance enregistrée pour l'instant.",
  "Show all": "Tout afficher",
  "Show recent only": "Afficher seulement les récentes",
  "Backup & Restore": "Sauvegarde et restauration",
  "Export backup": "Exporter une sauvegarde",
  "Import backup": "Importer une sauvegarde",
  "Minutes practiced": "Minutes travaillées",
  "Session notes": "Notes de séance",
  "What did you work on? Anything clicking or still sticky?":
    "Sur quoi avez-vous travaillé ? Qu'est-ce qui commence à venir, qu'est-ce qui résiste ?",
  "Delete this session": "Supprimer cette séance",
  "Total logged sessions: {1}": "Séances enregistrées au total : {1}",
  "Your progress is saved in this browser only. Export a backup file before clearing browsing data, switching devices, or reinstalling — then import it to pick up where you left off.":
    "Votre progression n'est enregistrée que dans ce navigateur. Exportez une sauvegarde avant d'effacer vos données de navigation, de changer d'appareil ou de réinstaller — puis importez-la pour reprendre où vous en étiez.",
  "That file is not valid JSON, so nothing was changed.":
    "Ce fichier n'est pas du JSON valide : rien n'a été modifié.",
  "That does not look like a Guitar Academy backup, so nothing was changed.":
    "Cela ne ressemble pas à une sauvegarde Guitar Academy : rien n'a été modifié.",
  "Import cancelled — nothing was changed.": "Importation annulée — rien n'a été modifié.",

  /* ---- commandes courantes ---- */
  "Play scale": "Jouer la gamme",
  "Play a lick": "Jouer un plan",
  "Stop loop": "Arrêter la boucle",
  "Start loop": "Lancer la boucle",
  "Position": "Position",
  "All Positions": "Toutes les positions",
  "Formula: {1}": "Formule : {1}",
  "Degrees: {1}": "Degrés : {1}",
  "Easy": "Facile",
  "Moderate": "Intermédiaire",
  "Difficult": "Difficile",
  "60-second challenge": "Défi de 60 secondes",
  "Reset progress": "Réinitialiser la progression",
  "Reset stats": "Réinitialiser les statistiques",
  "Flip string order (low E on top)": "Inverser l'ordre des cordes (Mi grave en haut)",
  "🎤 Use Microphone": "🎤 Utiliser le micro",
  "Print practice sheets ({n})": "Imprimer les fiches ({n})",
  "{sheets} — choose “Save as PDF” in the print dialog to keep a copy.":
    "{sheets} — choisissez « Enregistrer au format PDF » dans la fenêtre d'impression pour en garder une copie.",
  "New question": "Nouvelle question",
  "Which note is highlighted?": "Quelle note est surlignée ?",

  /* ---- fiches imprimables ---- */
  "Open Chords": "Accords ouverts",
  "Strum Pattern &amp; First Notes": "Rythmique et premières notes",
  "Chord Change Drill": "Exercice de changements d'accords",
  "12-Bar Blues in A": "Blues de 12 mesures en La",
  "Barre Chords — E Shape": "Accords barrés — forme de Mi",
  "Barre Chords — A Shape": "Accords barrés — forme de La",
  "The Five CAGED Shapes": "Les cinq formes CAGED",
  "Minor Pentatonic — Box 1": "Pentatonique mineure — position 1",
  "Minor Pentatonic — Full Neck": "Pentatonique mineure — manche entier",
  "Major Pentatonic &amp; the Blues Scale": "Pentatonique majeure et gamme blues",
  "Blues Soloing Toolkit": "Boîte à outils du solo blues",
  "The ii–V–I Progression": "La grille ii–V–I",
  "Dorian Mode": "Mode dorien",
  "Mixolydian Mode": "Mode mixolydien",
  "Alternate Picking Log": "Journal d'aller-retour",
  "Chord-Tone Targets": "Notes cibles de l'accord",
  "Odd Time Signatures": "Mesures asymétriques",
  "Borrowed Chords": "Accords empruntés",
  "Transcription Worksheet": "Fiche de relevé",
  "Polyrhythm &amp; Note Naming": "Polyrythmie et nom des notes",
  "Song Learning Plan": "Plan d'apprentissage des morceaux",
  "Year Review &amp; Next Goals": "Bilan de l'année et objectifs suivants",
  "© 2026 R Paul's Guitar Academy. All rights reserved. Licensed for personal practice use only — copying, redistribution or resale is prohibited.":
    "© 2026 R Paul's Guitar Academy. Tous droits réservés. Licence réservée à un usage personnel de travail — la copie, la redistribution ou la revente sont interdites."
};

/* ---------------------------------------------------------------------------
 * Glossaire français.
 *
 * Le glossaire repère des mots littéraux : il lui faut donc le vocabulaire propre
 * à cette langue. Les termes sont séparés par | et incluent les formes fléchies
 * qui apparaissent réellement dans les textes.
 * ------------------------------------------------------------------------- */
window.LANG_fr_GLOSSARY = [
  {terms:'case|cases',                   def:'Les espaces délimités par les frettes métalliques du manche. « 3e case » signifie appuyer juste derrière la troisième barrette.'},
  {terms:'touche',                       def:'La face plate du manche sur laquelle on appuie les cordes.'},
  {terms:'sillet',                       def:'La pièce rainurée en haut du manche, où les cordes rejoignent la tête.'},
  {terms:'corde à vide|cordes à vide',   def:'Une corde jouée sans appuyer sur aucune case.'},
  {terms:'accord|accords',               def:'Trois notes ou plus jouées ensemble, généralement grattées comme un seul son.'},
  {terms:'triade|triades',               def:'Un accord de base à trois notes : la fondamentale, la tierce et la quinte.'},
  {terms:'fondamentale',                 def:'La note qui donne son nom à l\'accord. Sol est la fondamentale de l\'accord de Sol.'},
  {terms:'barré|barrés',                 def:'Aplatir un doigt sur toutes les cordes pour qu\'il fasse office de sillet mobile.'},
  {terms:'CAGED',                        def:'Cinq formes d\'accord (C, A, G, E, D) qui s\'enchaînent pour couvrir tout le manche.'},
  {terms:'power chord|power chords',     def:'Un accord à deux notes, fondamentale et quinte seulement. Ni majeur ni mineur.'},
  {terms:'grille|grilles',               def:'Une suite d\'accords joués l\'un après l\'autre : la colonne vertébrale d\'un morceau.'},
  {terms:'rythmique|gratter',            def:'Passer le médiator ou les doigts sur plusieurs cordes à la fois.'},
  {terms:'gamme|gammes',                 def:'Un ensemble de notes jouées dans l\'ordre, degré par degré, vers le haut ou vers le bas.'},
  {terms:'pentatonique',                 def:'Une gamme de cinq notes. La porte d\'entrée la plus simple vers le solo : ses notes sonnent bien presque partout.'},
  {terms:'gamme blues',                  def:'La pentatonique mineure plus une note supplémentaire pleine de caractère, la « blue note ».'},
  {terms:'mode|modes',                   def:'Une gamme commencée sur une autre note de la gamme majeure, ce qui lui donne une couleur nouvelle.'},
  {terms:'intervalle|intervalles',       def:'La distance entre deux notes.'},
  {terms:'demi-ton|demi-tons',           def:'Le plus petit écart sur une guitare : une case.'},
  {terms:'octave|octaves',               def:'D\'une note à la suivante portant le même nom : douze cases plus haut.'},
  {terms:'majeur|majeure',               def:'Un accord ou une gamme à la sonorité claire et joyeuse.'},
  {terms:'mineur|mineure',               def:'Un accord ou une gamme à la sonorité plus sombre, plus triste.'},
  {terms:'degré|degrés',                 def:'La place d\'une note dans sa gamme : 1 pour la première, 3 pour la troisième, et ainsi de suite.'},
  {terms:'tonique',                      def:'La note « de repos » d\'une tonalité ou d\'une gamme.'},
  {terms:'dominante',                    def:'L\'accord construit sur le cinquième degré de la tonalité. Il attire fortement vers le retour à la tonique.'},
  {terms:'diminué|diminuée',             def:'Un accord tendu et instable, formé de petits intervalles égaux.'},
  {terms:'augmenté|augmentée',           def:'Un accord suspendu et rêveur, formé de deux grands intervalles.'},
  {terms:'métronome',                    def:'Un clic régulier qui tient le tempo pour vous éviter d\'accélérer ou de ralentir.'},
  {terms:'bpm',                          def:'Battements par minute : la vitesse de la musique. 60 bpm, c\'est un temps par seconde.'},
  {terms:'temps',                        def:'La pulsation régulière que vous battriez du pied.'},
  {terms:'mesure|mesures',               def:'Un petit groupe de temps, le plus souvent quatre. La musique se divise en mesures.'},
  {terms:'syncope|syncopé|syncopée',     def:'Des accents qui tombent entre les temps et donnent de l\'élan à la musique.'},
  {terms:'shuffle',                      def:'Un balancement inégal : long–court, long–court.'},
  {terms:'polyrythmie',                  def:'Deux rythmes différents qui se superposent.'},
  {terms:'arpège|arpèges',               def:'Les notes d\'un accord jouées une à une au lieu d\'être jouées ensemble.'},
  {terms:'improviser|improvisation',     def:'Inventer de la musique sur le moment.'},
  {terms:'plan|plans',                   def:'Une courte phrase musicale, une formule toute faite.'},
  {terms:'bend|bends|tiré',              def:'Pousser la corde sur le côté pour en monter la hauteur.'},
  {terms:'vibrato',                      def:'Une légère oscillation répétée de la hauteur qui fait chanter une note tenue.'},
  {terms:'legato|lié',                   def:'Des notes enchaînées en douceur, produites par la main gauche plutôt qu\'au médiator.'},
  {terms:'hammer-on|hammer-ons|martelé', def:'Faire sonner une note en frappant la corde du doigt, sans médiator.'},
  {terms:'pull-off|pull-offs',           def:'Faire sonner une note plus grave en pinçant la corde avec le doigt qui se lève.'},
  {terms:'aller-retour',                 def:'Coups de médiator strictement alternés bas-haut-bas-haut : c\'est ce qui permet la vraie vitesse.'},
  {terms:'capodastre',                   def:'Une pince posée sur le manche qui monte la hauteur de toutes les cordes d\'un coup.'},
  {terms:'transposer|transposition',     def:'Faire passer la musique dans une autre tonalité, plus haut ou plus bas.'},
  {terms:'conduite des voix',            def:'Déplacer chaque note vers la plus proche de l\'accord suivant pour que les changements soient fluides.'},
  {terms:'note de l\'accord|notes de l\'accord', def:'Une note qui appartient à l\'accord joué. Tomber dessus sonne toujours juste.'},
  {terms:'travail de l\'oreille',        def:'Apprendre à reconnaître notes, intervalles et accords rien qu\'à l\'écoute.'},
  {terms:'tablature',                    def:'La notation guitare : six lignes pour six cordes, avec les numéros de case dessus.'},
];
