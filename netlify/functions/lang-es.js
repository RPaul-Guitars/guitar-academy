/* R Paul's Guitar Academy — Español
 *
 * Batch 1: navigation, module headings, buttons, purchase copy, the level check and
 * the module introductions — the chrome a user meets on every screen.
 *
 * Keys not yet present fall back to English automatically, so this file is safe to ship
 * as it stands and can be extended batch by batch.
 *
 * Musical conventions used here:
 *   - Note names follow solfège (Do, Re, Mi…), which the app switches to automatically
 *     for Spanish. Chord symbols (G, Am, D7) stay in letter form, as they are written
 *     that way in Spanish-language method books too.
 *   - "traste" = fret, "cejilla" = barre/capo, "rasgueo" = strum, "púa" = pick.
 */
window.LANG_es = {

  /* ---- module panel descriptions (batch 2) ---- */
  "Every real guitarist's development follows the same spine: your fretting hand learns shapes before it learns theory, your ear develops in parallel with your hands rather than after, and rhythm is trained explicitly rather than assumed. This plan sequences five disciplines — <b>ear training, rhythm, chord progressions, fretboard fluency, and soloing/improvisation</b> — so each month's work makes the next month easier, the same arc used in conservatory method books and by working session players.":
    "El desarrollo de todo guitarrista sigue la misma columna vertebral: la mano que pisa aprende formas antes que teoría, el oído se desarrolla en paralelo con las manos y no después, y el ritmo se entrena de forma explícita en lugar de darse por supuesto. Este plan ordena cinco disciplinas — <b>entrenamiento auditivo, ritmo, progresiones de acordes, dominio del diapasón e improvisación</b> — de modo que el trabajo de cada mes facilite el siguiente, el mismo recorrido que usan los métodos de conservatorio y los músicos de sesión profesionales.",

  "Full 22-fret neck. A dot lands somewhere on the board — name the note before you move on. <b>Easy</b> stays in frets 0–5 with a 4-choice keypad; <b>Moderate</b> is the full 12-note keypad and requires mastering frets 0–12 before unlocking 13–22; <b>Difficult</b> opens the whole neck immediately. Every position you identify correctly stays lit up on the board across sessions, in every difficulty.":
    "Mástil completo de 22 trastes. Aparece un punto en algún lugar del diapasón: nombra la nota antes de seguir. <b>Fácil</b> se queda en los trastes 0–5 con un teclado de 4 opciones; <b>Intermedio</b> usa el teclado completo de 12 notas y exige dominar los trastes 0–12 antes de desbloquear del 13 al 22; <b>Difícil</b> abre todo el mástil desde el principio. Cada posición que aciertas se queda encendida en el diapasón entre sesiones, en todas las dificultades.",

  "Pick a root, a chord quality, and a shape category — it finds every place on the neck that shape actually works, computed from the actual notes rather than a fixed diagram library. Open chords only show up where a real open-position shape exists; barre, power, and triad shapes are movable, so you'll often see several positions up and down the neck.":
    "Elige una fundamental, un tipo de acorde y una categoría de forma: la aplicación encuentra todos los lugares del mástil donde esa forma funciona de verdad, calculados a partir de las notas reales y no de una biblioteca fija de diagramas. Los acordes abiertos solo aparecen donde existe una forma real en posición abierta; las formas con cejilla, de quinta y de tríada son móviles, así que a menudo verás varias posiciones a lo largo del mástil.",

  "Shows whichever progression you last picked, as a movable barre shape. While it's looping, this updates live to show each chord as it's actually played, staying in a nearby position on the neck rather than jumping around. The fret-advance buttons above slide the whole progression — every chord and this shape — up or down by one fret.":
    "Muestra la última progresión que hayas elegido, como forma móvil con cejilla. Mientras suena en bucle, se actualiza en tiempo real para mostrar cada acorde tal como se toca, manteniéndose en una posición cercana del mástil en lugar de dar saltos. Los botones de avance de traste de arriba desplazan toda la progresión — cada acorde y esta forma — un traste hacia arriba o hacia abajo.",

  "A reference library of every scale and mode in the app, with its interval formula, degree names, and all 5 neck positions mapped out together so you can see how they connect. Switch Position to zoom into a single box, or keep All Positions to see the whole neck at once. Tap any note on the board to hear it.":
    "Una biblioteca de referencia con todas las escalas y modos de la aplicación, con su fórmula de intervalos, los nombres de los grados y las 5 posiciones del mástil trazadas juntas para que veas cómo se conectan. Cambia Posición para acercarte a una sola caja, o deja Todas las posiciones para ver el mástil entero de una vez. Pulsa cualquier nota del diapasón para escucharla.",

  "Pick a key and scale to see every usable note across the neck. Minor pentatonic is where almost every rock/blues solo lives — start there. Use Position to zoom into one playable stretch of neck instead of the whole thing at once.":
    "Elige una tonalidad y una escala para ver todas las notas utilizables a lo largo del mástil. La pentatónica menor es donde vive casi todo solo de rock y blues: empieza por ahí. Usa Posición para centrarte en un tramo tocable del mástil en lugar de verlo entero.",

  "Sync your strumming hand to a pattern most rock/pop/blues rhythm parts are built from. Runs off the metronome above — start it, then follow the highlighted arrow. Tap any square to hear that stroke.":
    "Sincroniza tu mano de rasgueo con un patrón sobre el que se construyen la mayoría de las bases de rock, pop y blues. Funciona con el metrónomo de arriba: ponlo en marcha y sigue la flecha resaltada. Pulsa cualquier casilla para oír ese golpe.",

  "The app plays a short 4-note lick built from your chosen scale above. Repeat it back by clicking the same frets in the same order — this trains ear, fretboard knowledge, and scale shapes together.":
    "La aplicación toca una frase corta de 4 notas construida a partir de la escala que hayas elegido arriba. Repítela pulsando los mismos trastes en el mismo orden: esto entrena a la vez el oído, el conocimiento del diapasón y las formas de las escalas.",

  "A mystery progression plays once, in the key selected above, at a realistic tempo. Pick which one it was before looking at the chords — this is what \"hearing the changes\" actually trains.":
    "Suena una progresión misteriosa una sola vez, en la tonalidad seleccionada arriba y a un tempo realista. Adivina cuál era antes de mirar los acordes: esto es lo que entrena de verdad el “oír los cambios”.",

  "Every interval and triad quality below, each with a familiar song to anchor it and a play button to hear it directly against a fixed root — build these associations before you drill.":
    "Abajo tienes todos los intervalos y tipos de tríada, cada uno con una canción conocida que sirve de anclaje y un botón para oírlo directamente contra una fundamental fija: crea estas asociaciones antes de ponerte a repetir ejercicios.",

  "Played in order, the five shapes cover the whole neck and then repeat at the 12th fret. Each shape shares notes with its neighbours — that overlap is what makes the system work.":
    "Tocadas en orden, las cinco formas cubren todo el mástil y luego se repiten en el traste 12. Cada forma comparte notas con sus vecinas: ese solapamiento es lo que hace que el sistema funcione.",

  "A simple root-bass + click loop in your chosen key so you can solo over real time, not silence. This is the single best way to build phrasing and timing together.":
    "Un bucle sencillo de bajo fundamental y clic en la tonalidad que elijas, para que improvises sobre tiempo real y no sobre el silencio. Es la mejor forma que existe de desarrollar el fraseo y la precisión rítmica a la vez.",

  "Trains real pitch relationships used every time you play by ear: intervals for melody and bends, triad qualities for reading a band's harmony in seconds.":
    "Entrena las relaciones de altura reales que usas cada vez que tocas de oído: intervalos para la melodía y los bends, y tipos de tríada para leer la armonía de un grupo en segundos.",

  "Start the metronome above, then tap the pad (or press spacebar) right on each beat. This trains your internal clock instead of just following a light.":
    "Pon en marcha el metrónomo de arriba y marca el pulso en el panel (o pulsa la barra espaciadora) justo en cada tiempo. Esto entrena tu reloj interno en lugar de limitarte a seguir una luz.",

  "Tap notes to hear them before you answer — useful for anchoring what \"up a 3rd\" or \"minor\" actually sounds like.":
    "Pulsa las notas para oírlas antes de responder: ayuda a fijar cómo suenan de verdad “una tercera arriba” o “menor”.",

  "Aim for every note ringing cleanly. Fret just behind the fret wire, press with the fingertips, and keep the thumb behind the neck.":
    "Busca que todas las notas suenen limpias. Pisa justo detrás de la barra del traste, aprieta con la yema de los dedos y mantén el pulgar detrás del mástil.",


  /* ---- interval anchors (batch 3) ----
     Song titles stay in English: they are known by those names in Spanish-speaking
     countries too, and translating them would break the recognition the exercise relies on. */
  "\"Twinkle Twinkle Little Star\" / Star Wars main theme — first two notes.":
    "\"Twinkle Twinkle Little Star\" / tema principal de Star Wars: las dos primeras notas.",
  "\"Happy Birthday\" — first two notes (\"Hap-py\").":
    "\"Happy Birthday\": las dos primeras notas (\"Hap-py\").",
  "\"Here Comes the Bride\" / \"Amazing Grace\" — first two notes.":
    "\"Here Comes the Bride\" / \"Amazing Grace\": las dos primeras notas.",
  "\"Jaws\" theme (da-dum) — tense, half-step creep.":
    "Tema de \"Tiburón\" (da-dum): tenso, avanzando de semitono en semitono.",
  "\"My Bonnie Lies Over the Ocean\" — \"My Bon-\" leap.":
    "\"My Bonnie Lies Over the Ocean\": el salto de \"My Bon-\".",
  "\"Smoke on the Water\" — opening riff's first two notes.":
    "\"Smoke on the Water\": las dos primeras notas del riff inicial.",
  "\"Somewhere Over the Rainbow\" — \"Some-where\" leap.":
    "\"Somewhere Over the Rainbow\": el salto de \"Some-where\".",
  "\"Star Trek\" theme (original TV) — the opening leap.":
    "Tema de \"Star Trek\" (serie original): el salto inicial.",
  "\"Take On Me\" chorus — the big leap up on \"take\".":
    "Estribillo de \"Take On Me\": el gran salto hacia arriba en \"take\".",
  "\"The Simpsons\" theme — opening two notes; the classic \"unstable\" interval.":
    "Tema de \"Los Simpson\": las dos primeras notas; el clásico intervalo \"inestable\".",
  "\"When the Saints Go Marching In\" — first two notes.":
    "\"When the Saints Go Marching In\": las dos primeras notas.",

  /* ---- glossary definitions as they appear inline ---- */
  "A set of notes played in order, step by step, up or down.":
    "Un conjunto de notas tocadas en orden, paso a paso, hacia arriba o hacia abajo.",
  "A series of chords played one after another — the backbone of a song.":
    "Una serie de acordes tocados uno tras otro: la columna vertebral de una canción.",
  "A basic three-note chord: the root, the 3rd and the 5th.":
    "Un acorde básico de tres notas: la fundamental, la tercera y la quinta.",
  "A bright, happy-sounding chord or scale.":
    "Un acorde o escala de sonido brillante y alegre.",
  "A darker, sadder-sounding chord or scale.":
    "Un acorde o escala de sonido más oscuro y triste.",
  "A dreamy, unresolved chord built from two large steps.":
    "Un acorde etéreo y sin resolver formado por dos pasos grandes.",
  "A tense, unsettled chord built from equal small steps.":
    "Un acorde tenso e inestable formado por pasos pequeños iguales.",
  "A two-note chord using just the root and the 5th. Neither major nor minor.":
    "Un acorde de dos notas con solo la fundamental y la quinta. Ni mayor ni menor.",
  "A five-note scale. The easiest door into soloing — the notes sound good almost anywhere.":
    "Una escala de cinco notas. La puerta más fácil al solo: sus notas suenan bien casi en cualquier sitio.",
  "A scale started from a different note of the major scale, giving it a new mood.":
    "Una escala empezada desde otra nota de la escala mayor, lo que le da un carácter nuevo.",
  "A string played without pressing any fret.":
    "Una cuerda que suena sin pisar ningún traste.",
  "A clamp on the neck that raises the pitch of every string at once.":
    "Una pinza sobre el mástil que sube la altura de todas las cuerdas a la vez.",
  "A steady click that keeps time so you don’t speed up or slow down.":
    "Un clic constante que marca el tiempo para que no aceleres ni frenes.",
  "Beats per minute — how fast the music goes. 60 bpm is one beat a second.":
    "Pulsaciones por minuto: lo rápido que va la música. 60 bpm es un pulso por segundo.",
  "A small group of beats, usually four. Music is divided into bars.":
    "Un pequeño grupo de pulsos, normalmente cuatro. La música se divide en compases.",
  "Accents landing between the beats, which gives the music a push.":
    "Acentos que caen entre los pulsos y dan empuje a la música.",
  "A lopsided, swinging feel: long–short, long–short.":
    "Un aire desigual y balanceado: largo–corto, largo–corto.",
  "A short musical phrase — a musical catchphrase.":
    "Una idea musical corta, como una muletilla musical.",
  "A small, repeated wobble in pitch that makes a held note sing.":
    "Una pequeña oscilación repetida de la altura que hace cantar una nota larga.",
  "A note that belongs to the chord being played. Landing on one always sounds right.":
    "Una nota que pertenece al acorde que suena. Caer en una siempre suena bien.",
  "A note’s position in its scale: 1 is the first note, 3 the third, and so on.":
    "La posición de una nota en su escala: 1 es la primera, 3 la tercera, y así sucesivamente.",

  /* ---- month 1 content and sheet captions ---- */
  "Basic strum pattern: down-down-up-up-down-up at a slow, steady tempo.":
    "Patrón de rasgueo básico: abajo-abajo-arriba-arriba-abajo-arriba a un tempo lento y constante.",
  "Basic pattern: down-down-up-up-down-up. Count out loud while you play.":
    "Patrón básico: abajo-abajo-arriba-arriba-abajo-arriba. Cuenta en voz alta mientras tocas.",
  "All five are C major, in order up the neck.":
    "Las cinco son Do mayor, en orden ascendente por el mástil.",
  "A minor pentatonic across all five positions.":
    "La pentatónica menor de La en las cinco posiciones.",
  "A major pentatonic shares every note with F♯ minor pentatonic.":
    "La pentatónica mayor de La comparte todas sus notas con la pentatónica menor de Fa♯.",
  "A blues scale over a 12-bar blues in A.":
    "La escala de blues de La sobre un blues de 12 compases en La.",
  "Aim at the 3rd and the 7th — they define the chord.":
    "Apunta a la tercera y la séptima: son las que definen el acorde.",
  "Blues scale (pentatonic + the \"blue note\").":
    "Escala de blues (pentatónica + la \"blue note\").",
  "Alternating-bass strumming pattern (Travis-picking lite).":
    "Patrón de rasgueo con bajo alterno (Travis picking simplificado).",
  "Alternate picking drills with the metronome, ramping 5 bpm at a time.":
    "Ejercicios de púa alterna con el metrónomo, subiendo de 5 en 5 bpm.",


  /* ---- panel headings, stats and captions (batch 4) ---- */
  "Backing Loop for Improvisation": "Base para improvisar",
  "Backing progression": "Progresión de acompañamiento",
  "Call & Response Lick Trainer": "Entrenador de frases pregunta-respuesta",
  "Chord Shape Finder": "Buscador de posiciones de acorde",
  "Chord Shape Preview": "Vista previa de la posición",
  "Chord progressions": "Progresiones de acordes",
  "Chord Progressions": "Progresiones de acordes",
  "Chord changes": "Cambios de acorde",
  "Chord quality (triads)": "Tipo de acorde (tríadas)",
  "Choose specific notes": "Elegir notas concretas",
  "All natural + sharp notes": "Todas las notas naturales y sostenidas",
  "Barre Chords": "Acordes con cejilla",
  "CAGED Introduction": "Introducción al sistema CAGED",
  "Advanced Techniques": "Técnicas avanzadas",
  "Classic rock": "Rock clásico",

  /* stat labels — {1} is the live value */
  "Accuracy: {1}": "Precisión: {1}",
  "Attempts: {1}": "Intentos: {1}",
  "Best streak: {1}": "Mejor racha: {1}",
  "Avg offset: {1}": "Desfase medio: {1}",
  "Avg. streak length this month: {1}": "Duración media de la racha este mes: {1}",

  /* ear training and lick trainer */
  "Call-and-response: play a 2-bar lick, repeat it back from memory.":
    "Pregunta y respuesta: suena una frase de 2 compases y la repites de memoria.",
  "Click a chord to hear it. Master these shapes cold before month 4's barre chords.":
    "Pulsa un acorde para escucharlo. Domina estas formas a la perfección antes de los acordes con cejilla del mes 4.",

  /* printable sheet captions */
  "A blues scale": "Escala de blues de La",
  "A blues scale — minor pentatonic plus the ♭5 “blue note”":
    "Escala de blues de La: pentatónica menor más la “blue note” ♭5",
  "A blues scale, 5th position": "Escala de blues de La, 5ª posición",
  "A major pentatonic": "Pentatónica mayor de La",
  "A minor pentatonic, 5th position": "Pentatónica menor de La, 5ª posición",
  "A natural minor across the full neck": "La menor natural a lo largo de todo el mástil",
  "A string note map": "Mapa de notas de la cuerda La",
  "B♭ major (1st fret)": "Si♭ mayor (traste 1)",
  "B♭ minor (1st fret)": "Si♭ menor (traste 1)",
  "C major (3rd fret)": "Do mayor (traste 3)",
  "C minor (3rd fret)": "Do menor (traste 3)",
  "Bending targets — bend up to the circled pitch":
    "Objetivos de bend: estira la cuerda hasta la altura marcada con un círculo",
  "Blank neck — fill these in from memory": "Mástil en blanco: complétalo de memoria",
  "Blank neck — map the chord tones yourself": "Mástil en blanco: sitúa tú las notas del acorde",
  "Both outer strings share the same note names. Learn them once and you know both.":
    "Las dos cuerdas exteriores comparten los mismos nombres de nota. Apréndelos una vez y sabrás las dos.",
  "Chords taken from the parallel minor key.": "Acordes tomados de la tonalidad menor paralela.",
  "Compare honestly against your Month 1 recording.":
    "Compárate con honestidad con tu grabación del mes 1.",
  "Compare: D natural minor (the 6th is flat)": "Compara: Re menor natural (la sexta es bemol)",
  "Chromatic 1-2-3-4": "Cromático 1-2-3-4",
  "Chord-tone soloing: target the 3rd and 7th of each chord in a progression.":
    "Solo sobre notas del acorde: apunta a la tercera y la séptima de cada acorde de la progresión.",

  /* accessible descriptions for the fretboard diagrams */
  "Barre chord (E-shape, root on low E)": "Acorde con cejilla (forma de Mi, fundamental en la sexta cuerda)",
  "Barre chord (A-shape, root on A string)": "Acorde con cejilla (forma de La, fundamental en la quinta cuerda)",
  "Barre chord (C-shape, root on A string)": "Acorde con cejilla (forma de Do, fundamental en la quinta cuerda)",
  "Barre chord (D-shape, root on D string)": "Acorde con cejilla (forma de Re, fundamental en la cuarta cuerda)",
  "Barre chord (G-shape, root on low E)": "Acorde con cejilla (forma de Sol, fundamental en la sexta cuerda)",


  /* ---- month headings (batch 5) ----
     The whole heading is one key because the phase tag sits inside it, so the month
     title and tag are translated together here rather than separately. Bounded at 12. */
  "Month 1: Foundation Setup <span class=\"tag\">Foundation</span> <span class=\"tag tag-free\">Free</span>":
    "Mes 1: Puesta en marcha <span class=\"tag\">Fundamentos</span> <span class=\"tag tag-free\">Gratis</span>",
  "Month 2: Rhythm &amp; Changes <span class=\"tag\">Foundation</span>":
    "Mes 2: Ritmo y cambios <span class=\"tag\">Fundamentos</span>",
  "Month 3: First Progressions <span class=\"tag\">Foundation</span>":
    "Mes 3: Primeras progresiones <span class=\"tag\">Fundamentos</span>",
  "Month 4: Barre Chords <span class=\"tag\">Building</span>":
    "Mes 4: Acordes con cejilla <span class=\"tag\">Construcción</span>",
  "Month 5: CAGED Introduction <span class=\"tag\">Building</span>":
    "Mes 5: Introducción al CAGED <span class=\"tag\">Construcción</span>",
  "Month 10: Advanced Techniques <span class=\"tag\">Mastery</span>":
    "Mes 10: Técnicas avanzadas <span class=\"tag\">Dominio</span>",
  "Month 11: Style Immersion <span class=\"tag\">Mastery</span>":
    "Mes 11: Inmersión en estilos <span class=\"tag\">Dominio</span>",
  "Month 12: Integration &amp; Performance <span class=\"tag\">Mastery</span>":
    "Mes 12: Integración y actuación <span class=\"tag\">Dominio</span>",

  /* ---- month titles used on their own ---- */
  "Improvisation Basics": "Fundamentos de la improvisación",

  /* ---- scale and mode names ---- */
  "Major (Ionian)": "Mayor (jónico)",
  "Major pentatonic": "Pentatónica mayor",
  "Minor pentatonic": "Pentatónica menor",
  "Harmonic minor": "Menor armónica",
  "Major with a flattened 7th — the dominant sound.":
    "Mayor con la séptima rebajada: el sonido dominante.",
  "Minor with a raised 6th — minor, but brighter.":
    "Menor con la sexta elevada: menor, pero más luminosa.",

  /* ---- panel and control labels ---- */
  "Guess The Progression (by ear)": "Adivina la progresión (de oído)",
  "Interval & Chord Reference Guide": "Guía de referencia de intervalos y acordes",
  "Interval recognition": "Reconocimiento de intervalos",
  "Metronome subdivision": "Subdivisión del metrónomo",
  "Full practice session": "Sesión de práctica completa",
  "Log the session": "Registrar la sesión",
  "Hardest section": "Parte más difícil",
  "Go to Ear Training": "Ir a Entrenamiento auditivo",
  "Go to Chord Progressions": "Ir a Progresiones",
  "Go to Fretboard": "Ir a Diapasón",
  "Go to Soloing & Improv": "Ir a Solos e improvisación",
  "Microphone off — play the note on your guitar instead of tapping the keypad.":
    "Micrófono desactivado: toca la nota en tu guitarra en lugar de pulsar el teclado.",

  /* ---- curriculum exercises ---- */
  "Learn open chords: E, A, D, G, C, Em, Am, Dm — clean, buzz-free.":
    "Aprende los acordes abiertos: E, A, D, G, C, Em, Am, Dm, limpios y sin cuerdas que trasteen.",
  "Learn the 12-bar blues form and play it with a shuffle strum.":
    "Aprende la forma del blues de 12 compases y tócala con rasgueo de shuffle.",
  "Learn the 5 CAGED chord shapes and how they overlap on the neck.":
    "Aprende las 5 formas de acorde CAGED y cómo se solapan en el mástil.",
  "Learn 3 full songs from intro to end, in different styles.":
    "Aprende 3 canciones completas, de principio a fin, de estilos distintos.",
  "Learn one borrowed-chord progression (e.g. i–VI–III–VII, or a secondary dominant).":
    "Aprende una progresión con acordes prestados (por ejemplo i–VI–III–VII, o una dominante secundaria).",
  "Introduce syncopated strumming (the \"and\" of beat 2 missed on purpose).":
    "Introduce el rasgueo sincopado (el \"y\" del segundo tiempo se salta a propósito).",
  "Introduce tapping and basic sweep-picking shapes.":
    "Introduce el tapping y las formas básicas de sweep picking.",
  "Legato technique: hammer-ons and pull-offs for smoother phrasing.":
    "Técnica de ligado: martillados y tirones para un fraseo más suave.",
  "Full-neck scale fluency: play any scale starting on any string.":
    "Soltura en todo el mástil: toca cualquier escala empezando en cualquier cuerda.",
  "Chord-tone soloing: target the 3rd and 7th of each chord in a progression.":
    "Solo sobre notas del acorde: apunta a la tercera y la séptima de cada acorde de la progresión.",
  "Improvise over all four backing loop types from the Soloing tool.":
    "Improvisa sobre los cuatro tipos de base del módulo de Solos.",
  "Minor pentatonic \"Box 1\" shape, memorized in at least 3 keys.":
    "La forma \"Caja 1\" de la pentatónica menor, memorizada en al menos 3 tonalidades.",
  "Minor pentatonic across all 5 neck positions.":
    "La pentatónica menor en las 5 posiciones del mástil.",
  "Major pentatonic — and where it overlaps with minor pentatonic.":
    "La pentatónica mayor, y dónde se solapa con la pentatónica menor.",

  /* ---- sheet captions ---- */
  "I–IV–V in Three Keys": "I–IV–V en tres tonalidades",
  "In every key the pattern is the same: I, then the chord four steps up, then five steps up.":
    "En toda tonalidad el patrón es el mismo: I, luego el acorde cuatro grados más arriba y después cinco grados más arriba.",
  "Keep the strumming hand moving through the gap. The miss is in the contact, not the motion.":
    "Mantén la mano de rasgueo en movimiento durante el hueco. Lo que se salta es el contacto, no el gesto.",
  "Legato drill — hammer-ons and pull-offs": "Ejercicio de ligado: martillados y tirones",
  "G major (3rd fret)": "Sol mayor (traste 3)",
  "G minor (3rd fret)": "Sol menor (traste 3)",
  "G minor pentatonic, 3rd position": "Pentatónica menor de Sol, 3ª posición",
  "Guitar notation: six lines for six strings, with fret numbers on them.":
    "Notación para guitarra: seis líneas para seis cuerdas, con los números de traste encima.",
  "Learning to recognise notes, intervals and chords just by listening.":
    "Aprender a reconocer notas, intervalos y acordes solo de oído.",
  "Making up music on the spot.": "Inventar música sobre la marcha.",


  /* ---- batch 6: remaining month headings, panel labels, curriculum ---- */
  "Month 6: Pentatonic Power <span class=\"tag\">Building</span>":
    "Mes 6: Poder pentatónico <span class=\"tag\">Construcción</span>",
  "Month 7: Improvisation Basics <span class=\"tag\">Soloing</span>":
    "Mes 7: Fundamentos de la improvisación <span class=\"tag\">Solos</span>",
  "Month 8: Modes &amp; Color <span class=\"tag\">Soloing</span>":
    "Mes 8: Modos y color <span class=\"tag\">Solos</span>",
  "Month 9: Speed &amp; Precision <span class=\"tag\">Mastery</span>":
    "Mes 9: Velocidad y precisión <span class=\"tag\">Dominio</span>",
  "Pentatonic Power": "Poder pentatónico",
  "Integration & Performance": "Integración y actuación",

  /* panels and controls */
  "Open Chord Library": "Biblioteca de acordes abiertos",
  "Proven Progressions": "Progresiones de eficacia probada",
  "Natural minor (Aeolian)": "Menor natural (eólico)",
  "Natural notes only": "Solo notas naturales",
  "One note name only": "Solo un nombre de nota",
  "Notes per measure": "Notas por compás",
  "Play mystery progression": "Reproducir progresión misteriosa",
  "Play this shape": "Tocar esta posición",
  "Power chord (root + 5th)": "Acorde de quinta (fundamental + quinta)",
  "G minor pentatonic": "Pentatónica menor de Sol",
  "One position found for this combination.": "Se ha encontrado una posición para esta combinación.",
  "Press \"Play a lick\" to begin.": "Pulsa \"Reproducir una frase\" para empezar.",
  "Press play, then choose the interval you heard.":
    "Pulsa reproducir y después elige el intervalo que has oído.",
  "Press Start quiz to begin.": "Pulsa Empezar ejercicio para comenzar.",
  "Full 22-fret neck, scrollable — use this to check your answers or just study the layout.":
    "Mástil completo de 22 trastes, desplazable: úsalo para comprobar tus respuestas o simplemente para estudiar la disposición.",

  /* level-check progress labels */
  "Question 1 of 5": "Pregunta 1 de 5",
  "Question 2 of 5": "Pregunta 2 de 5",
  "Question 3 of 5": "Pregunta 3 de 5",
  "Question 4 of 5": "Pregunta 4 de 5",
  "Question 5 of 5": "Pregunta 5 de 5",

  /* glossary definitions shown inline */
  "Moving each note to the nearest note of the next chord so changes sound smooth.":
    "Mover cada nota a la más cercana del acorde siguiente para que los cambios suenen suaves.",
  "Moving music to a different key, so it sounds higher or lower.":
    "Pasar la música a otra tonalidad, para que suene más aguda o más grave.",
  "Pushing a string sideways to raise its pitch.":
    "Empujar la cuerda hacia un lado para subir su altura.",
  "Metronome: A steady click that keeps time so you don’t speed up or slow down.":
    "Metrónomo: un clic constante que marca el tiempo para que no aceleres ni frenes.",
  "Minor: A darker, sadder-sounding chord or scale.":
    "Menor: un acorde o escala de sonido más oscuro y triste.",

  /* curriculum exercises */
  "Practice changing between all Month 1 chords with zero pause, metronome at 60-80 bpm.":
    "Practica los cambios entre todos los acordes del mes 1 sin ninguna pausa, con el metrónomo a 60-80 bpm.",
  "Play I–IV–V in three different keys (G, C, A).":
    "Toca I–IV–V en tres tonalidades distintas (G, C, A).",
  "Play I–V–vi–IV using barre shapes instead of open chords.":
    "Toca I–V–vi–IV con formas de cejilla en lugar de acordes abiertos.",
  "Play and internalize the ii–V–I progression.":
    "Toca e interioriza la progresión ii–V–I.",
  "Play in odd time signatures (5/4, 7/8) using the metronome.":
    "Toca en compases irregulares (5/4, 7/8) con el metrónomo.",
  "Practice a polyrhythmic feel (3-against-4 clapping, then on guitar).":
    "Practica una sensación polirrítmica (3 contra 4 con palmas y después en la guitarra).",
  "Full fretboard note drill: every string, every fret up to 12.":
    "Ejercicio completo de notas del diapasón: todas las cuerdas, todos los trastes hasta el 12.",

  /* printable sheet captions */
  "Natural Notes — A and D strings": "Notas naturales: cuerdas La y Re",
  "Natural notes — low E and high e, frets 0–5":
    "Notas naturales: Mi grave y Mi agudo, trastes 0–5",
  "Note-naming sprint — fill in every natural note":
    "Carrera de nombres: completa todas las notas naturales",
  "One minute per pair. Count every clean change; write your best score.":
    "Un minuto por pareja. Cuenta cada cambio limpio y anota tu mejor marca.",
  "One note separates them. Play both over a Dm vamp and listen for the lift.":
    "Solo las separa una nota. Toca las dos sobre un vamp de Dm y escucha cómo se ilumina.",
  "One phrase per style. Work in short loops, slowed down.":
    "Una frase por estilo. Trabaja en bucles cortos y a velocidad reducida.",
  "Major Pentatonic &amp; the Blues Scale": "Pentatónica mayor y escala de blues",
  "Polyrhythm &amp; Note Naming": "Polirritmia y nombres de las notas",
  "Next year's goal": "Objetivo para el año que viene",
  "Performance-ready date": "Fecha en que estará lista para tocar",
  "Phrase location": "Ubicación de la frase",


  /* ---- batch 7: panels, aria-labels, curriculum, glossary ---- */
  "R Paul's <span class=\"hl\">Guitar Academy</span>": "R Paul's <span class=\"hl\">Guitar Academy</span>",
  "Reference Fretboard": "Diapasón de referencia",
  "Reference Keyboard": "Teclado de referencia",
  "Scale Explorer": "Explorador de escalas",
  "Scale Patterns": "Patrones de escalas",
  "Strumming Pattern Trainer": "Entrenador de patrones de rasgueo",
  "Rhythm & Changes": "Ritmo y cambios",
  "Speed & Precision": "Velocidad y precisión",
  "Style Immersion": "Inmersión en estilos",
  "Soloing & Improv": "Solos e improvisación",
  "Rhythm / metronome": "Ritmo / metrónomo",
  "Rhythm & timing": "Ritmo y precisión rítmica",
  "Soloing / improvisation": "Solos / improvisación",
  "Scale root note": "Fundamental de la escala",
  "Root note to highlight": "Fundamental que destacar",
  "Sixteenth notes": "Semicorcheas",
  "Skip the level check": "Omitir la evaluación de nivel",
  "Show the notes being played on the keyboard": "Mostrar en el teclado las notas que suenan",
  "Same note twice — no gap at all.": "La misma nota dos veces: sin ninguna distancia.",

  /* purchase copy with an HTML entity dash */
  "Keep Months 2&ndash;12 permanently, with no renewal date. Best if you expect to revisit the material.":
    "Conserva los meses 2&ndash;12 de forma permanente, sin fecha de renovación. Ideal si piensas repasar el material.",
  "Renew for another year, or switch to unlimited so it never lapses again. Your progress is all still saved.":
    "Renueva por otro año, o cambia a acceso ilimitado para que no vuelva a caducar. Todo tu progreso sigue guardado.",

  /* accessible descriptions for generated diagrams */
  "Guitar fretboard diagram, 12 frets, strings ordered low E at top":
    "Diagrama del diapasón, 12 trastes, cuerdas con el Mi grave arriba",
  "Reference fretboard showing note positions, 22 frets, strings ordered low E at top":
    "Diapasón de referencia con las posiciones de las notas, 22 trastes, cuerdas con el Mi grave arriba",
  "Scale explorer fretboard, 12 frets, strings ordered low E at top":
    "Diapasón del explorador de escalas, 12 trastes, cuerdas con el Mi grave arriba",
  "Scale patterns fretboard showing neck positions, 18 frets, strings ordered low E at top":
    "Diapasón de patrones de escalas con las posiciones del mástil, 18 trastes, cuerdas con el Mi grave arriba",

  /* glossary definitions shown inline */
  "Smoothly joined notes, sounded with the fretting hand rather than the pick.":
    "Notas unidas con suavidad, producidas con la mano izquierda en vez de con la púa.",
  "Sounding a lower note by plucking the string with the fretting finger as it lifts.":
    "Hacer sonar una nota más grave pulsando la cuerda con el dedo al levantarlo.",
  "Sounding a note by tapping a finger onto the string, without picking.":
    "Hacer sonar una nota golpeando la cuerda con el dedo, sin púa.",
  "Strict down-up-down-up picking, which is what allows real speed.":
    "Púa estricta abajo-arriba-abajo-arriba, que es lo que permite la velocidad real.",
  "Strumming from the thick strings towards the thin ones.":
    "Rasguear desde las cuerdas gruesas hacia las finas.",
  "Strumming back from the thin strings towards the thick ones.":
    "Rasguear de vuelta desde las cuerdas finas hacia las gruesas.",
  "Strum: Dragging the pick or fingers across several strings at once.":
    "Rasgueo: pasar la púa o los dedos por varias cuerdas a la vez.",

  /* curriculum exercises */
  "Record yourself and self-critique against your Month 1 recording.":
    "Grábate y compárate con sentido crítico con tu grabación del mes 1.",
  "Set your next-year goals: genre depth, technique, or theory.":
    "Fija tus objetivos para el año que viene: profundizar en un estilo, técnica o teoría.",
  "Solo over a 12-bar blues backing loop using the blues scale.":
    "Improvisa sobre una base de blues de 12 compases usando la escala de blues.",
  "String bending and vibrato control — pitch accuracy first, speed later.":
    "Control de bends y vibrato: primero la afinación, después la velocidad.",

  /* printable sheet captions */
  "Raise the tempo only when a take is completely clean.":
    "Sube el tempo solo cuando una toma salga completamente limpia.",
  "Root on the low E string. Slide the shape to change key.":
    "Fundamental en la sexta cuerda. Desliza la forma para cambiar de tonalidad.",
  "Root on the A string.": "Fundamental en la quinta cuerda.",
  "Root notes on the low E string": "Fundamentales en la cuerda Mi grave",
  "Root notes on the A string": "Fundamentales en la cuerda La",
  "Same four chords as I-V-vi-IV, different starting point — different feel.":
    "Los mismos cuatro acordes que I-V-vi-IV, pero empezando en otro punto: otra sensación.",
  "Shuffle strum — long, short, long, short": "Rasgueo de shuffle: largo, corto, largo, corto",
  "Syncopated strum — the “and” of beat 2 is deliberately missed":
    "Rasgueo sincopado: el “y” del segundo tiempo se salta a propósito",
  "Strum Pattern &amp; First Notes": "Patrón de rasgueo y primeras notas",
  "Scale run, 2 octaves": "Escala corrida, 2 octavas",
  "Single-string 16ths": "Semicorcheas en una sola cuerda",
  "String crossing": "Cambio de cuerda",


  /* ---- batch 8: progression descriptions, glossary, worksheets ---- */
  "The bedrock of rock, blues, and country.": "La base del rock, el blues y el country.",
  "The most-used pop progression of the last 60 years.":
    "La progresión pop más usada de los últimos 60 años.",
  "The classic 1950s progression — doo-wop, early rock 'n' roll.":
    "La progresión clásica de los años 50: doo-wop y primer rock and roll.",
  "The backbone of jazz, and common in pop and blues.":
    "La columna vertebral del jazz, y habitual en el pop y el blues.",
  "The jazz cadence. Learn this and jazz-influenced rock opens up.":
    "La cadencia del jazz. Apréndela y se te abre el rock de influencia jazzística.",
  "The most-played form in popular music. Shuffle feel.":
    "La forma más tocada de la música popular. Con aire de shuffle.",
  "The same progression, three different keys.":
    "La misma progresión, en tres tonalidades distintas.",
  "The workhorse of rock and blues soloing — five notes, no half-steps to trip over, works over almost any":
    "El caballo de batalla del solo de rock y blues: cinco notas, sin semitonos con los que tropezar, funciona sobre casi cualquier",

  /* glossary definitions shown inline */
  "The “home” note of a key or scale.": "La nota “de casa” de una tonalidad o escala.",
  "The chord built on the 5th note of the key. It pulls strongly back home.":
    "El acorde construido sobre la quinta nota de la tonalidad. Tira con fuerza de vuelta a casa.",
  "The distance between two notes.": "La distancia entre dos notas.",
  "The flat front of the neck where you press the strings down.":
    "La cara plana del mástil donde se pisan las cuerdas.",
  "The metal strips along the neck. “3rd fret” means press the string just behind the third strip.":
    "Las barras metálicas del mástil. “Tercer traste” significa pisar la cuerda justo detrás de la tercera barra.",
  "The minor pentatonic plus one extra gritty note, the “blue note”.":
    "La pentatónica menor más una nota extra con garra, la “blue note”.",
  "The note a chord is named after. G is the root of a G chord.":
    "La nota que da nombre al acorde. Sol es la fundamental del acorde de Sol.",
  "The notes of a chord played one at a time instead of together.":
    "Las notas de un acorde tocadas una a una en lugar de juntas.",
  "The slotted strip at the top of the neck where the strings leave the headstock.":
    "La pieza ranurada del extremo del mástil por donde salen las cuerdas hacia la pala.",
  "The smallest step on a guitar: one fret.": "El paso más pequeño en la guitarra: un traste.",
  "The steady pulse you would tap your foot to.": "El latido constante que marcarías con el pie.",
  "The two numbers (like 4/4) saying how many beats are in each bar.":
    "Los dos números (como 4/4) que indican cuántos pulsos hay en cada compás.",
  "Three or more notes played together, usually strummed as one sound.":
    "Tres o más notas tocadas a la vez, normalmente rasgueadas como un solo sonido.",
  "Two different rhythms running at the same time.": "Dos ritmos distintos sonando a la vez.",

  /* onboarding and labels */
  "This is a full 12-month method, not a set of loose tools. Here's how the pieces fit:":
    "Esto es un método completo de 12 meses, no un conjunto de herramientas sueltas. Así encajan las piezas:",
  "Tap note names above to show them on the fretboard.":
    "Pulsa los nombres de nota de arriba para mostrarlos en el diapasón.",
  "Tap notes to hear them before you answer — useful for anchoring what \"up a 3rd\" or \"":
    "Pulsa las notas para oírlas antes de responder: ayuda a fijar cómo suenan “una tercera arriba” o “",
  "Time signature": "Compás",
  "Title / artist": "Título / artista",
  "Total logged sessions: {1}": "Sesiones registradas en total: {1}",
  "Triad (3 adjacent strings)": "Tríada (3 cuerdas contiguas)",
  "Triad qualities": "Tipos de tríada",
  "Three notes per string": "Tres notas por cuerda",
  "What makes it work": "Por qué funciona",
  "Which module you practiced": "Qué módulo has practicado",
  "Which note is highlighted?": "¿Qué nota está marcada?",
  "Theme from \"Love Story\" — first two notes; aching, wistful.":
    "Tema de \"Love Story\": las dos primeras notas; dolorido y nostálgico.",

  /* purchase copy with entity dash */
  "The full program for twelve months &mdash; long enough to finish it at the intended pace.":
    "El programa completo durante doce meses &mdash; tiempo de sobra para terminarlo al ritmo previsto.",

  /* curriculum exercises */
  "Transcribe (by ear) a short phrase each from a blues, classic rock, metal, and alt-rock solo.":
    "Transcribe de oído una frase corta de un solo de blues, otra de rock clásico, otra de metal y otra de rock alternativo.",
  "Try soloing over a jazzier ii-V-I loop using chord tones, not just scales.":
    "Prueba a improvisar sobre un bucle ii-V-I más jazzístico usando notas del acorde, no solo escalas.",
  "Two freeform improvisation sessions with no backing track at all.":
    "Dos sesiones de improvisación libre, sin ninguna base de acompañamiento.",
  "Understand capo transposition using CAGED logic.":
    "Comprende la transposición con capo usando la lógica CAGED.",

  /* printable sheet captions */
  "The eight shapes for Month 1. × = do not play, ○ = open string.":
    "Las ocho formas del mes 1. × = no tocar, ○ = cuerda al aire.",
  "The blue note is a passing tone. Land on it briefly and move on.":
    "La blue note es una nota de paso. Pósate en ella un instante y sigue.",
  "The three chords": "Los tres acordes",
  "The three chords in C": "Los tres acordes en Do",
  "Three against four — clap it before you play it.":
    "Tres contra cuatro: dalo con palmas antes de tocarlo.",
  "Three songs, three styles, intro to end.":
    "Tres canciones, tres estilos, de principio a fin.",
  "Year Review &amp; Next Goals": "Repaso del año y próximos objetivos",


  /* ---- batch 9: onboarding steps, legends, rhythm labels ---- */
  "<b>This Month</b> below is your assignment. It lists what to practice and links straight to the modules you need — tap any of those amber chips to jump there.":
    "<b>Este mes</b>, más abajo, es tu tarea. Indica qué practicar y enlaza directamente con los módulos que necesitas: pulsa cualquiera de esas etiquetas ámbar para ir allí.",
  "<b>Practice the five disciplines</b> — ear training, rhythm, chord progressions, fretboard fluency, and soloing. The daily split on this page suggests 45–60 minutes.":
    "<b>Practica las cinco disciplinas</b>: entrenamiento auditivo, ritmo, progresiones de acordes, dominio del diapasón e improvisación. El reparto diario de esta página propone 45–60 minutos.",
  "<b>Log the session</b> in Practice Log when you finish. That drives your streak and the progress marker on the fretboard above.":
    "<b>Registra la sesión</b> en el Registro de práctica al terminar. Eso alimenta tu racha y el indicador de progreso del diapasón de arriba.",
  "<b>Mark the month complete</b> when the material feels solid, and the next month unlocks. There's no rush — repeat a month if you need to.":
    "<b>Marca el mes como completado</b> cuando el material te salga con soltura, y se desbloqueará el siguiente. No hay prisa: repite un mes si lo necesitas.",

  /* scale-pattern legend swatches */
  "<span class=\"sw\" style=\"background:#8fae6e;\"></span>Position 1":
    "<span class=\"sw\" style=\"background:#8fae6e;\"></span>Posición 1",
  "<span class=\"sw\" style=\"background:#6f93b0;\"></span>Position 2":
    "<span class=\"sw\" style=\"background:#6f93b0;\"></span>Posición 2",
  "<span class=\"sw\" style=\"background:#b17ce6;\"></span>Position 3":
    "<span class=\"sw\" style=\"background:#b17ce6;\"></span>Posición 3",
  "<span class=\"sw\" style=\"background:#dd5b5b;\"></span>Position 4":
    "<span class=\"sw\" style=\"background:#dd5b5b;\"></span>Posición 4",
  "<span class=\"sw\" style=\"background:#c98a3f;\"></span>Position 5":
    "<span class=\"sw\" style=\"background:#c98a3f;\"></span>Posición 5",
  "<span class=\"sw\" style=\"background:#a8631f;\"></span>Root":
    "<span class=\"sw\" style=\"background:#a8631f;\"></span>Fundamental",
  "<span class=\"sw\" style=\"background:var(--amber);\"></span>Root note (lettered)":
    "<span class=\"sw\" style=\"background:var(--amber);\"></span>Nota fundamental (con letra)",
  "<span class=\"sw\" style=\"background:var(--cream-dim);\"></span>Scale tone (numbered by scale degree)":
    "<span class=\"sw\" style=\"background:var(--cream-dim);\"></span>Nota de la escala (numerada por grado)",

  /* touch hints */
  "👆 Tap any dot to hear that note by itself.":
    "👆 Pulsa cualquier punto para oír esa nota por separado.",
  "🔊 Tap anywhere once to enable sound (mobile browsers require this).":
    "🔊 Pulsa una vez en cualquier sitio para activar el sonido (los navegadores móviles lo exigen).",

  /* rhythm and time signatures */
  "12-bar blues (I–IV–V)": "Blues de 12 compases (I–IV–V)",
  "12-bar blues (I7 – IV7 – I7 – V7 – IV7 – I7 – V7)":
    "Blues de 12 compases (I7 – IV7 – I7 – V7 – IV7 – I7 – V7)",
  "12 bar blues": "blues de 12 compases",
  "12 bar blues in A": "blues de 12 compases en La",
  "16th-note strumming — all four subdivisions":
    "Rasgueo de semicorcheas: las cuatro subdivisiones",
  "16th-note strumming patterns at moderate tempo.":
    "Patrones de rasgueo en semicorcheas a tempo moderado.",
  "3 against 4 — top row is three, bottom row is four":
    "3 contra 4: la fila de arriba es tres, la de abajo cuatro",
  "5/4 — five beats to the bar": "5/4: cinco pulsos por compás",
  "7/8 — grouped 3 + 2 + 2": "7/8: agrupado en 3 + 2 + 2",
  "7/8 is easier felt as three uneven pulses than as seven even ones.":
    "El 7/8 se siente mejor como tres pulsos desiguales que como siete iguales.",
  "6/8 (feel as 2)": "6/8 (sentido en 2)",

  /* diagram descriptions on printable sheets */
  "A blues scale position 1": "Escala de blues de La, posición 1",
  "A minor pentatonic box 1": "Pentatónica menor de La, caja 1",
  "A minor pentatonic full neck": "Pentatónica menor de La, mástil completo",
  "A minor pentatonic with degrees": "Pentatónica menor de La con los grados",
  "A natural minor full neck": "La menor natural, mástil completo",
  "A — first chord of \"I – IV – V\", fret 5": "La: primer acorde de \"I – IV – V\", traste 5",


  /* ---- batch 10: quiz range lines, ear-training curriculum, module labels ---- */
  "Easy — working one string at a time, fret 1–5, low E to high e. {done}/{total} positions identified so far.":
    "Fácil: una cuerda cada vez, trastes 1–5, de Mi grave a Mi agudo. Llevas {done}/{total} posiciones identificadas.",
  "Moderate — vertical sweep at fret {fret}, string by string from low E to high e. {done}/{total} positions identified so far.":
    "Intermedio: barrido vertical en el traste {fret}, cuerda a cuerda de Mi grave a Mi agudo. Llevas {done}/{total} posiciones identificadas.",
  "Difficult — anywhere on the neck, fully random. {done}/{total} positions identified so far.":
    "Difícil: cualquier punto del mástil, totalmente al azar. Llevas {done}/{total} posiciones identificadas.",

  /* module names used as labels */
  "Ear training": "Entrenamiento auditivo",
  "Ear Training": "Entrenamiento auditivo",
  "Fretboard fluency": "Dominio del diapasón",
  "Fretboard knowledge": "Conocimiento del diapasón",
  "Fretboard Note Trainer": "Entrenador de notas del diapasón",
  "Improvisation": "Improvisación",
  "First Progressions": "Primeras progresiones",
  "Foundation Setup": "Puesta en marcha",
  "Modes & Color": "Modos y color",
  "Go to Rhythm": "Ir a Ritmo",
  "Dominant 7th": "Séptima de dominante",
  "Melodic minor": "Menor melódica",
  "Eighth notes": "Corcheas",
  "Eighth-note triplets": "Tresillos de corchea",

  /* ear-training curriculum items */
  "Ear training: unison vs. octave, then major 2nd vs. major 3rd (Level 1).":
    "Entrenamiento auditivo: unísono frente a octava, y después segunda mayor frente a tercera mayor (nivel 1).",
  "Ear training: perfect 4th and perfect 5th recognition.":
    "Entrenamiento auditivo: reconocer la cuarta justa y la quinta justa.",
  "Ear training: major vs. minor triads by sound alone.":
    "Entrenamiento auditivo: distinguir tríadas mayores de menores solo de oído.",
  "Ear training: 6ths and 7ths (Level 2).":
    "Entrenamiento auditivo: sextas y séptimas (nivel 2).",
  "Ear training: add diminished and augmented triads to your set (Level 2).":
    "Entrenamiento auditivo: añade las tríadas disminuidas y aumentadas a tu repertorio (nivel 2).",
  "Ear training: full interval set, Level 3.":
    "Entrenamiento auditivo: todos los intervalos, nivel 3.",
  "Ear training: identify a full 3-4 chord progression by ear.":
    "Entrenamiento auditivo: identifica de oído una progresión completa de 3 o 4 acordes.",
  "Ear training: identify scale degree of a played note against a root (functional ear training).":
    "Entrenamiento auditivo: identifica el grado de una nota tocada frente a una fundamental (oído funcional).",
  "Ear training: Learning to recognise notes, intervals and chords just by listening.":
    "Entrenamiento auditivo: aprender a reconocer notas, intervalos y acordes solo de oído.",

  /* fretboard curriculum items */
  "Fretboard: memorize natural notes on the low E and high e strings, frets 0-5.":
    "Diapasón: memoriza las notas naturales de las cuerdas Mi grave y Mi agudo, trastes 0-5.",
  "Fretboard: natural notes on A and D strings, frets 0-5.":
    "Diapasón: notas naturales en las cuerdas La y Re, trastes 0-5.",
  "Fretboard: The flat front of the neck where you press the strings down.":
    "Diapasón: la cara plana del mástil donde se pisan las cuerdas.",
  "Fretboard sight-reading: name notes faster than your quiz best time.":
    "Lectura a primera vista en el diapasón: nombra las notas más rápido que tu mejor marca.",

  /* curriculum and sheet text */
  "Dorian and Mixolydian modes — where they live over familiar chords.":
    "Modos dórico y mixolidio: dónde encajan sobre acordes conocidos.",
  "E-shape and A-shape barre chords, movable up and down the neck.":
    "Acordes con cejilla de forma Mi y forma La, desplazables por todo el mástil.",
  "Every blues, rockabilly and early rock solo sits on this form.":
    "Todo solo de blues, rockabilly y primer rock se apoya en esta forma.",
  "Everything saves automatically in this browser. Export a backup from the Practice Log page to keep it safe or move it to another device.":
    "Todo se guarda automáticamente en este navegador. Exporta una copia de seguridad desde la página de Registro para conservarlo o pasarlo a otro dispositivo.",
  "Dm7 is the ii, G7 the V, Cmaj7 the I. The pull from G7 back to C is the strongest movement in tonal music.":
    "Dm7 es el ii, G7 el V y Cmaj7 el I. La atracción de G7 de vuelta a Do es el movimiento más fuerte de la música tonal.",
  "Filled dots are root notes.": "Los puntos rellenos son las fundamentales.",
  "Find the root on the low E string, lay the barre there, and the shape gives you that chord.":
    "Localiza la fundamental en la cuerda Mi grave, pon ahí la cejilla y la forma te da ese acorde.",
  "Five positions, each starting where the last leaves off. Learn the joins, not just the boxes.":
    "Cinco posiciones, cada una empieza donde acaba la anterior. Aprende las uniones, no solo las cajas.",
  "Frets 0–5. Say each note aloud as you play it.":
    "Trastes 0–5. Di cada nota en voz alta mientras la tocas.",
  "Full-tone bends: 7th fret G string up to A. Semitone bends: 8th fret B string up to G. Check each bend against the fretted note first.":
    "Bends de tono entero: traste 7 de la cuerda Sol hasta La. Bends de semitono: traste 8 de la cuerda Si hasta Sol. Comprueba cada bend contra la nota pisada antes de nada.",
  "E minor pentatonic": "Pentatónica menor de Mi",
  "E minor pentatonic, open position": "Pentatónica menor de Mi, posición abierta",
  "F major (1st fret)": "Fa mayor (traste 1)",
  "F minor (1st fret)": "Fa menor (traste 1)",
  "G mixolydian": "Sol mixolidio",


  /* ---- batch 11: final UI strings ---- */
  "{sheets} — choose “Save as PDF” in the print dialog to keep a copy.":
    "{sheets} — elige “Guardar como PDF” en el cuadro de impresión para conservar una copia.",
  "Based on your answers we suggest <b>New to guitar</b>, but pick whichever you prefer. You can change this any time on the Dashboard.":
    "Según tus respuestas te sugerimos <b>Nuevo en la guitarra</b>, pero elige el que prefieras. Puedes cambiarlo cuando quieras desde el Panel.",
  "Based on your answers we suggest <b>Some experience</b>, but pick whichever you prefer. You can change this any time on the Dashboard.":
    "Según tus respuestas te sugerimos <b>Algo de experiencia</b>, pero elige el que prefieras. Puedes cambiarlo cuando quieras desde el Panel.",
  "Based on your answers we suggest <b>Experienced</b>, but pick whichever you prefer. You can change this any time on the Dashboard.":
    "Según tus respuestas te sugerimos <b>Con experiencia</b>, pero elige el que prefieras. Puedes cambiarlo cuando quieras desde el Panel.",

  /* strum patterns */
  "D D U U D U (workhorse pop/rock pattern)": "A A R R A R (el patrón clásico de pop/rock)",
  "D U D U D U D U (straight eighths)": "A R A R A R A R (corcheas regulares)",
  "D · D U D U (driving eighths)": "A · A R A R (corcheas con empuje)",
  "D · U D U · (syncopated, leaves space)": "A · R A R · (sincopado, deja espacio)",
  "Strum pattern": "Patrón de rasgueo",
  "Quarter notes": "Negras",
  "Open position": "Posición abierta",
  "Scale degrees": "Grados de la escala",
  "New question": "Nueva pregunta",
  "Tap The Beat": "Marca el pulso",
  "Song / artist": "Canción / artista",
  "Correct: {1}": "Aciertos: {1}",
  "Current daily streak: {1}": "Racha diaria actual: {1}",
  "Am → F-shape": "Am → forma de Fa",
  "Bm7 – E7 – Amaj7": "Bm7 – E7 – Amaj7",
  "D natural minor": "Re menor natural",
  "Compare: G major (the 7th is natural)": "Compara: Sol mayor (la séptima es natural)",

  /* panel descriptions */
  "Pick a key and mode, then click a progression to loop it at a practice tempo — strum along and focus on clean, silent changes.":
    "Elige una tonalidad y un modo, después pulsa una progresión para repetirla a tempo de estudio: rasguea con ella y céntrate en hacer cambios limpios y silenciosos.",
  "Tracks your ear-training activity for {1} — a rolling tally that resets naturally each month, plus how consistently you're showing up day to day.":
    "Registra tu actividad de entrenamiento auditivo de {1}: un recuento continuo que se reinicia cada mes, además de la constancia con la que practicas día a día.",
  "Month 1 is free and stays free. The remaining eleven months cover barre chords, CAGED, pentatonics, modes, improvisation and performance.":
    "El mes 1 es gratis y seguirá siéndolo. Los once meses restantes cubren acordes con cejilla, CAGED, pentatónicas, modos, improvisación y actuación.",
  "The workhorse of rock and blues soloing — five notes, no half-steps to trip over, works over almost any minor-key progression.":
    "El caballo de batalla del solo de rock y blues: cinco notas, sin semitonos con los que tropezar, y funciona sobre casi cualquier progresión en tonalidad menor.",

  /* printable sheet notes */
  "Count aloud before you play. The accent falls on 1.":
    "Cuenta en voz alta antes de tocar. El acento cae en el 1.",
  "Three notes per string, ascending with hammer-ons and descending with pull-offs. Only the first note of each string is picked.":
    "Tres notas por cuerda, subiendo con martillados y bajando con tirones. Solo se pulsa con la púa la primera nota de cada cuerda.",
  "Specific goals beat ambitious ones. “Play a full blues solo in three keys without stopping” is workable; “get better at soloing” is not.":
    "Los objetivos concretos valen más que los ambiciosos. “Tocar un solo de blues completo en tres tonalidades sin parar” es alcanzable; “mejorar improvisando” no lo es.",
  "Chord shape fretboard diagram, 12 frets, strings ordered low E at top":
    "Diagrama de posición de acorde, 12 trastes, cuerdas con el Mi grave arriba",

  /* glossary definitions still appearing inline */
  "Five chord shapes (C, A, G, E, D) that link together to cover the whole neck.":
    "Cinco formas de acorde (C, A, G, E, D) que se enlazan para cubrir todo el mástil.",
  "CAGED: Five chord shapes (C, A, G, E, D) that link together to cover the whole neck.":
    "CAGED: cinco formas de acorde (C, A, G, E, D) que se enlazan para cubrir todo el mástil.",
  "Chords: Three or more notes played together, usually strummed as one sound.":
    "Acordes: tres o más notas tocadas a la vez, normalmente rasgueadas como un solo sonido.",
  "Flattening one finger across every string to act like a movable nut.":
    "Aplanar un dedo sobre todas las cuerdas para que haga de cejuela móvil.",
  "From one note to the next note of the same name — twelve frets higher.":
    "De una nota a la siguiente con el mismo nombre: doce trastes más arriba.",
  "Dragging the pick or fingers across several strings at once.":
    "Pasar la púa o los dedos por varias cuerdas a la vez.",


  /* ---- correctivos de entidades ----
     Estos textos llevan &mdash;/&ndash; en el código fuente, pero al ser nodos de texto
     simples la clave que se busca en tiempo de ejecución es el carácter decodificado. */
  "The full program for twelve months — long enough to finish it at the intended pace.":
    "El programa completo durante doce meses: tiempo de sobra para terminarlo al ritmo previsto.",
  "Keep Months 2–12 permanently, with no renewal date. Best if you expect to revisit the material.":
    "Conserva los meses 2–12 de forma permanente, sin fecha de renovación. Ideal si piensas repasar el material.",

  /* ---- navigation ---- */
  "<span class=\"led\"></span>Dashboard": "<span class=\"led\"></span>Panel",
  "<span class=\"led\"></span>Curriculum": "<span class=\"led\"></span>Programa",
  "<span class=\"led\"></span>Ear Training": "<span class=\"led\"></span>Entrenamiento auditivo",
  "<span class=\"led\"></span>Rhythm": "<span class=\"led\"></span>Ritmo",
  "<span class=\"led\"></span>Chord Progressions": "<span class=\"led\"></span>Progresiones",
  "<span class=\"led\"></span>Chord Shapes": "<span class=\"led\"></span>Posiciones",
  "<span class=\"led\"></span>Fretboard": "<span class=\"led\"></span>Diapasón",
  "<span class=\"led\"></span>Soloing &amp; Improv": "<span class=\"led\"></span>Solos e improvisación",
  "<span class=\"led\"></span>Scale Patterns": "<span class=\"led\"></span>Patrones de escalas",
  "<span class=\"led\"></span>Practice Log": "<span class=\"led\"></span>Registro",
  "Modules": "Módulos",
  "Language": "Idioma",
  "← Back": "← Volver",

  /* ---- landing screen ---- */
  "Guitar Method & Practice Studio": "Método de guitarra y estudio de práctica",
  "R Paul's Guitar Academy": "R Paul's Guitar Academy",
  "From Novice to the Stage in One Year — ear training, rhythm, chords, fretboard fluency, and improvisation, all in one place.":
    "De principiante al escenario en un año: entrenamiento auditivo, ritmo, acordes, dominio del diapasón e improvisación, todo en un mismo lugar.",
  "Enter the Academy →": "Entrar a la Academia →",
  "🔊 Tapping Enter also unlocks sound for the app": "🔊 Al pulsar Entrar también se activa el sonido de la aplicación",
  "From Novice to the Stage in One Year": "De principiante al escenario en un año",
  "CURRENT STREAK{1}": "RACHA ACTUAL{1}",

  /* ---- dashboard ---- */
  "Start Here": "Empieza aquí",
  "Got it, hide this": "Entendido, ocultar",
  "This Month": "Este mes",
  "Why This Order": "Por qué este orden",
  "Daily Split (45–60 min)": "Reparto diario (45–60 min)",
  "◀ Previous month": "◀ Mes anterior",
  "Mark month complete, advance ▶": "Marcar mes completado y avanzar ▶",
  "Teaching level: <b>New to guitar</b>": "Nivel de enseñanza: <b>Nuevo en la guitarra</b>",
  "Teaching level: <b>Some experience</b>": "Nivel de enseñanza: <b>Algo de experiencia</b>",
  "Teaching level: <b>Experienced</b>": "Nivel de enseñanza: <b>Con experiencia</b>",
  "Explain music words": "Explicar términos musicales",
  "Retake check": "Repetir evaluación",
  "10 min — Ear training reps": "10 min — Ejercicios de entrenamiento auditivo",
  "10 min — Metronome / rhythm drill": "10 min — Metrónomo / ejercicio de ritmo",
  "15 min — This month's chord or scale material": "15 min — Material de acordes o escalas de este mes",
  "15 min — Fretboard fluency or improvisation": "15 min — Dominio del diapasón o improvisación",
  "5 min — Log the session": "5 min — Registrar la sesión",

  /* ---- curriculum ---- */
  "The 12-Month Arc": "El recorrido de 12 meses",
  "Click a month to open it. Mark months done as you finish them — your progress marker on the fretboard above updates automatically.":
    "Pulsa un mes para abrirlo. Marca los meses como completados a medida que los termines: el indicador de progreso del diapasón de arriba se actualiza solo.",
  "Mark done": "Marcar completado",
  "Done": "Completado",
  "Foundation": "Fundamentos",
  "Building": "Construcción",
  "Soloing": "Solos",
  "Mastery": "Dominio",
  "Free": "Gratis",
  "Locked": "Bloqueado",
  "See options": "Ver opciones",
  "Part of the full program — Months 2–12.": "Forma parte del programa completo: meses 2 a 12.",

  /* ---- purchase and access ---- */
  "Unlock Months 2–12": "Desbloquear los meses 2 a 12",
  "Your access has expired": "Tu acceso ha caducado",
  "Month {n} is part of the full program": "El mes {n} forma parte del programa completo",
  "1 year of access": "1 año de acceso",
  "Unlimited access": "Acceso ilimitado",
  "Best value": "Mejor valor",
  "The full program for twelve months — long enough to finish it at the intended pace.":
    "El programa completo durante doce meses: tiempo de sobra para terminarlo al ritmo previsto.",
  "Keep Months 2–12 permanently, with no renewal date. Best if you expect to revisit the material.":
    "Conserva los meses 2 a 12 de forma permanente, sin fecha de renovación. Ideal si piensas repasar el material.",
  "Choose 1 year of access": "Elegir 1 año de acceso",
  "Choose Unlimited access": "Elegir acceso ilimitado",
  "I have a code": "Tengo un código",
  "Redemption code": "Código de canje",
  "Enter your code": "Introduce tu código",
  "Redeem": "Canjear",
  "Checking…": "Comprobando…",
  "Enter a code first.": "Introduce primero un código.",
  "That code is not valid.": "Ese código no es válido.",
  "That code has expired.": "Ese código ha caducado.",
  "That code has already been fully claimed.": "Ese código ya se ha agotado.",
  "You have already redeemed that code.": "Ya has canjeado ese código.",
  "You already have full access — no code needed.": "Ya tienes acceso completo: no hace falta ningún código.",
  "Too many attempts. Please wait ten minutes and try again.":
    "Demasiados intentos. Espera diez minutos y vuelve a intentarlo.",
  "Unlocked. Enjoy the full program.": "Desbloqueado. Disfruta del programa completo.",
  "Could not reach the server. Check your connection and try again.":
    "No se ha podido conectar con el servidor. Comprueba tu conexión e inténtalo de nuevo.",
  "Renew 1 year": "Renovar 1 año",
  "Switch to unlimited": "Cambiar a ilimitado",
  "Unlimited access — Months 2–12 are yours permanently.":
    "Acceso ilimitado: los meses 2 a 12 son tuyos de forma permanente.",
  "Access runs until {date} ({n} day left).": "Acceso válido hasta el {date} (queda {n} día).",
  "Access runs until {date} ({n} days left).": {
    one: "Acceso válido hasta el {date} (queda {n} día).",
    other: "Acceso válido hasta el {date} (quedan {n} días)."
  },
  "<b>Your access ends in {n} day</b> ({date}). Renew to keep Months 2–12.":
    "<b>Tu acceso termina en {n} día</b> ({date}). Renueva para conservar los meses 2 a 12.",
  "<b>Your access ends in {n} days</b> ({date}). Renew to keep Months 2–12.": {
    one: "<b>Tu acceso termina en {n} día</b> ({date}). Renueva para conservar los meses 2 a 12.",
    other: "<b>Tu acceso termina en {n} días</b> ({date}). Renueva para conservar los meses 2 a 12."
  },

  /* ---- level check ---- */
  "Where would you like to start?": "¿Por dónde quieres empezar?",
  "Have you played guitar before?": "¿Has tocado la guitarra antes?",
  "Can you read a chord diagram?": "¿Sabes leer un diagrama de acordes?",
  "Do you know what a chord is?": "¿Sabes qué es un acorde?",
  "Tap the 3rd fret of the low E string.": "Pulsa el tercer traste de la sexta cuerda (Mi grave).",
  "The low E is the thickest string — the bottom row here.":
    "El Mi grave es la cuerda más gruesa: la fila de abajo.",
  "Which chord is this?": "¿Qué acorde es este?",
  "I'm not sure": "No estoy seguro",
  "Skip": "Omitir",
  "Never": "Nunca",
  "A little": "Un poco",
  "Yes, regularly": "Sí, con regularidad",
  "No": "No",
  "Roughly": "Más o menos",
  "Yes": "Sí",
  "Not really": "La verdad que no",
  "Yes, and inversions": "Sí, e inversiones",
  "New to guitar": "Nuevo en la guitarra",
  "Some experience": "Algo de experiencia",
  "Experienced": "Con experiencia",
  "Recommended": "Recomendado",
  "We'll explain music words when you tap them, introduce each module, and start quizzes on Easy.":
    "Explicaremos los términos musicales al pulsarlos, presentaremos cada módulo y empezaremos los ejercicios en nivel Fácil.",
  "Standard instructions, with music words explained when you tap them.":
    "Instrucciones estándar, con los términos musicales explicados al pulsarlos.",
  "Full detail, and explanations switched off. You can turn them back on any time.":
    "Todo el detalle, con las explicaciones desactivadas. Puedes volver a activarlas cuando quieras.",

  /* ---- module introductions ---- */
  "What is this module for?": "¿Para qué sirve este módulo?",
  "Got it": "Entendido",
  "The full one-year plan. Each month lists a few things to practise. Open your current month, work through it over a few weeks, then mark it done. You can revisit earlier months any time.":
    "El plan completo de un año. Cada mes propone unas pocas cosas que practicar. Abre tu mes actual, trabájalo durante algunas semanas y márcalo como completado. Puedes volver a los meses anteriores cuando quieras.",
  "Ear training teaches you to recognise what you hear. Press play, listen, then pick an answer. A few minutes daily beats one long session.":
    "El entrenamiento auditivo te enseña a reconocer lo que oyes. Pulsa reproducir, escucha y elige una respuesta. Unos minutos al día valen más que una sesión larga.",
  "Rhythm is about keeping a steady beat. The metronome clicks in time; try to strum exactly with it. Tap along on the pad to test how steady you really are.":
    "El ritmo consiste en mantener un pulso estable. El metrónomo marca el tiempo; intenta rasguear justo con él. Marca el pulso en el panel para comprobar lo estable que eres en realidad.",
  "A chord is several notes played together, and a progression is a series of chords — the backbone of most songs. Tap any progression to hear it loop.":
    "Un acorde son varias notas tocadas a la vez, y una progresión es una serie de acordes: la columna vertebral de la mayoría de las canciones. Pulsa cualquier progresión para escucharla en bucle.",
  "The same chord can be played in several places on the neck. Pick a chord to see exactly where to put your fingers.":
    "El mismo acorde se puede tocar en varios sitios del mástil. Elige un acorde para ver exactamente dónde colocar los dedos.",
  "This is where you learn the name of every note on the neck. Start on Easy: a position lights up and you name it. Positions you get right stay lit.":
    "Aquí aprendes el nombre de cada nota del mástil. Empieza en Fácil: se ilumina una posición y tú la nombras. Las posiciones que aciertas se quedan encendidas.",
  "Soloing means making up your own lines. Pick a scale and every highlighted note will fit the backing loop. There are no wrong answers here.":
    "Improvisar significa inventar tus propias frases. Elige una escala y todas las notas marcadas encajarán con la base. Aquí no hay respuestas incorrectas.",
  "A scale is a set of notes played in order. This shows every scale in the app and all five neck positions, so you can see how they join up.":
    "Una escala es un conjunto de notas tocadas en orden. Aquí aparecen todas las escalas de la aplicación y las cinco posiciones del mástil, para que veas cómo se enlazan.",
  "Record each practice session here. It keeps your streak going and feeds the progress marker at the top of the page.":
    "Registra aquí cada sesión de práctica. Así mantienes tu racha y alimentas el indicador de progreso de la parte superior.",

  /* ---- practice log and backup ---- */
  "Log a Session": "Registrar una sesión",
  "Save session": "Guardar sesión",
  "Recent Sessions": "Sesiones recientes",
  "Last 28 Days": "Últimos 28 días",
  "No sessions logged yet.": "Aún no hay sesiones registradas.",
  "Show all": "Mostrar todas",
  "Show recent only": "Mostrar solo las recientes",
  "Backup & Restore": "Copia de seguridad y restauración",
  "Export backup": "Exportar copia",
  "Import backup": "Importar copia",
  "Minutes practiced": "Minutos practicados",
  "Session notes": "Notas de la sesión",
  "What did you work on? Anything clicking or still sticky?":
    "¿En qué has trabajado? ¿Algo que ya te salga o que aún se te resista?",
  "Delete this session": "Eliminar esta sesión",
  "Your progress is saved in this browser only. Export a backup file before clearing browsing data, switching devices, or reinstalling — then import it to pick up where you left off.":
    "Tu progreso se guarda únicamente en este navegador. Exporta una copia de seguridad antes de borrar los datos de navegación, cambiar de dispositivo o reinstalar; luego impórtala para continuar donde lo dejaste.",
  "That file is not valid JSON, so nothing was changed.":
    "Ese archivo no es JSON válido, así que no se ha cambiado nada.",
  "That does not look like a Guitar Academy backup, so nothing was changed.":
    "Eso no parece una copia de seguridad de Guitar Academy, así que no se ha cambiado nada.",
  "Import cancelled — nothing was changed.": "Importación cancelada: no se ha cambiado nada.",

  /* ---- common controls ---- */
  "Play scale": "Reproducir escala",
  "Play a lick": "Reproducir una frase",
  "Stop loop": "Detener bucle",
  "Start loop": "Iniciar bucle",
  "Position": "Posición",
  "All Positions": "Todas las posiciones",
  "Formula: {1}": "Fórmula: {1}",
  "Degrees: {1}": "Grados: {1}",
  "Easy": "Fácil",
  "Moderate": "Intermedio",
  "Difficult": "Difícil",
  "60-second challenge": "Desafío de 60 segundos",
  "Reset progress": "Restablecer progreso",
  "Reset stats": "Restablecer estadísticas",
  "Flip string order (low E on top)": "Invertir el orden de las cuerdas (Mi grave arriba)",

  "🎤 Use Microphone": "🎤 Usar micrófono",
  "Print practice sheets ({n})": "Imprimir fichas de práctica ({n})",

  /* ---- printable sheets ---- */
  "Open Chords": "Acordes abiertos",
  "Strum Pattern & First Notes": "Patrón de rasgueo y primeras notas",
  "Chord Change Drill": "Ejercicio de cambios de acorde",
  "12-Bar Blues in A": "Blues de 12 compases en La",
  "Barre Chords — E Shape": "Acordes con cejilla — forma de Mi",
  "Barre Chords — A Shape": "Acordes con cejilla — forma de La",
  "The Five CAGED Shapes": "Las cinco formas CAGED",
  "Minor Pentatonic — Box 1": "Pentatónica menor — posición 1",
  "Minor Pentatonic — Full Neck": "Pentatónica menor — mástil completo",
  "Major Pentatonic & the Blues Scale": "Pentatónica mayor y escala de blues",
  "Blues Soloing Toolkit": "Herramientas para solos de blues",
  "The ii–V–I Progression": "La progresión ii–V–I",
  "Dorian Mode": "Modo dórico",
  "Mixolydian Mode": "Modo mixolidio",
  "Alternate Picking Log": "Registro de púa alterna",
  "Chord-Tone Targets": "Notas objetivo del acorde",
  "Odd Time Signatures": "Compases irregulares",
  "Borrowed Chords": "Acordes prestados",
  "Transcription Worksheet": "Ficha de transcripción",
  "Polyrhythm & Note Naming": "Polirritmia y nombres de las notas",
  "Song Learning Plan": "Plan de aprendizaje de canciones",
  "Year Review & Next Goals": "Repaso del año y próximos objetivos",
  "© 2026 R Paul's Guitar Academy. All rights reserved. Licensed for personal practice use only — copying, redistribution or resale is prohibited.":
    "© 2026 R Paul's Guitar Academy. Todos los derechos reservados. Licencia exclusiva para uso personal de práctica: queda prohibida la copia, la redistribución o la reventa."
};

/* ---------------------------------------------------------------------------
 * Spanish glossary.
 *
 * The glossary matches literal words, so it needs this language's own vocabulary —
 * the English list would never match Spanish sentences. Terms are separated by | and
 * include the inflected forms that actually appear in the text (singular/plural).
 * ------------------------------------------------------------------------- */
window.LANG_es_GLOSSARY = [
  {terms:'traste|trastes',               def:'Las barras metálicas del mástil. “Tercer traste” significa pisar la cuerda justo detrás de la tercera barra.'},
  {terms:'diapasón',                     def:'La cara plana del mástil donde se pisan las cuerdas.'},
  {terms:'cejuela',                      def:'La pieza ranurada del extremo del mástil por donde salen las cuerdas hacia la pala.'},
  {terms:'cuerda al aire|cuerdas al aire',def:'Una cuerda que suena sin pisar ningún traste.'},
  {terms:'acorde|acordes',               def:'Tres o más notas tocadas a la vez, normalmente rasgueadas como un solo sonido.'},
  {terms:'tríada|tríadas',               def:'Un acorde básico de tres notas: la fundamental, la tercera y la quinta.'},
  {terms:'fundamental',                  def:'La nota que da nombre al acorde. Sol es la fundamental del acorde de Sol.'},
  {terms:'cejilla',                      def:'Aplanar un dedo sobre todas las cuerdas para que haga de cejuela móvil.'},
  {terms:'CAGED',                        def:'Cinco formas de acorde (C, A, G, E, D) que se enlazan para cubrir todo el mástil.'},
  {terms:'acorde de quinta|acordes de quinta|power chord|power chords',
                                         def:'Un acorde de dos notas con solo la fundamental y la quinta. Ni mayor ni menor.'},
  {terms:'progresión|progresiones',      def:'Una serie de acordes tocados uno tras otro: la columna vertebral de una canción.'},
  {terms:'rasgueo|rasguear|rasgueos',    def:'Pasar la púa o los dedos por varias cuerdas a la vez.'},
  {terms:'escala|escalas',               def:'Un conjunto de notas tocadas en orden, paso a paso, hacia arriba o hacia abajo.'},
  {terms:'pentatónica',                  def:'Una escala de cinco notas. La puerta más fácil al solo: sus notas suenan bien casi en cualquier sitio.'},
  {terms:'escala de blues',              def:'La pentatónica menor más una nota extra con garra, la “blue note”.'},
  {terms:'modo|modos',                   def:'Una escala empezada desde otra nota de la escala mayor, lo que le da un carácter nuevo.'},
  {terms:'intervalo|intervalos',         def:'La distancia entre dos notas.'},
  {terms:'semitono|semitonos',           def:'El paso más pequeño en la guitarra: un traste.'},
  {terms:'octava|octavas',               def:'De una nota a la siguiente con el mismo nombre: doce trastes más arriba.'},
  {terms:'mayor',                        def:'Un acorde o escala de sonido brillante y alegre.'},
  {terms:'menor',                        def:'Un acorde o escala de sonido más oscuro y triste.'},
  {terms:'grado|grados',                 def:'La posición de una nota en su escala: 1 es la primera, 3 la tercera, y así sucesivamente.'},
  {terms:'tónica',                       def:'La nota “de casa” de una tonalidad o escala.'},
  {terms:'dominante',                    def:'El acorde construido sobre la quinta nota de la tonalidad. Tira con fuerza de vuelta a casa.'},
  {terms:'disminuido|disminuida',        def:'Un acorde tenso e inestable formado por pasos pequeños iguales.'},
  {terms:'aumentado|aumentada',          def:'Un acorde etéreo y sin resolver formado por dos pasos grandes.'},
  {terms:'metrónomo',                    def:'Un clic constante que marca el tiempo para que no aceleres ni frenes.'},
  {terms:'bpm',                          def:'Pulsaciones por minuto: lo rápido que va la música. 60 bpm es un pulso por segundo.'},
  {terms:'pulso|pulsos',                 def:'El latido constante que marcarías con el pie.'},
  {terms:'compás|compases',              def:'Un pequeño grupo de pulsos, normalmente cuatro. La música se divide en compases.'},
  {terms:'síncopa|sincopado|sincopada',  def:'Acentos que caen entre los pulsos y dan empuje a la música.'},
  {terms:'shuffle',                      def:'Un aire desigual y balanceado: largo–corto, largo–corto.'},
  {terms:'polirritmia',                  def:'Dos ritmos distintos sonando a la vez.'},
  {terms:'arpegio|arpegios',             def:'Las notas de un acorde tocadas una a una en lugar de juntas.'},
  {terms:'improvisar|improvisación',     def:'Inventar música sobre la marcha.'},
  {terms:'frase|frases',                 def:'Una idea musical corta, como una muletilla musical.'},
  {terms:'bend|bends|estirar la cuerda', def:'Empujar la cuerda hacia un lado para subir su altura.'},
  {terms:'vibrato',                      def:'Una pequeña oscilación repetida de la altura que hace cantar una nota larga.'},
  {terms:'ligado|ligados',               def:'Notas unidas con suavidad, producidas con la mano izquierda en vez de con la púa.'},
  {terms:'martillado|martillados',       def:'Hacer sonar una nota golpeando la cuerda con el dedo, sin púa.'},
  {terms:'tirón|tirones',                def:'Hacer sonar una nota más grave pulsando la cuerda con el dedo al levantarlo.'},
  {terms:'púa alterna',                  def:'Púa estricta abajo-arriba-abajo-arriba, que es lo que permite la velocidad real.'},
  {terms:'capo|cejilla móvil',           def:'Una pinza sobre el mástil que sube la altura de todas las cuerdas a la vez.'},
  {terms:'transportar|transposición',    def:'Pasar la música a otra tonalidad, para que suene más aguda o más grave.'},
  {terms:'conducción de voces',          def:'Mover cada nota a la más cercana del acorde siguiente para que los cambios suenen suaves.'},
  {terms:'nota del acorde|notas del acorde', def:'Una nota que pertenece al acorde que suena. Caer en una siempre suena bien.'},
  {terms:'entrenamiento auditivo',       def:'Aprender a reconocer notas, intervalos y acordes solo de oído.'},
  {terms:'tablatura',                    def:'Notación para guitarra: seis líneas para seis cuerdas, con los números de traste encima.'},
];
