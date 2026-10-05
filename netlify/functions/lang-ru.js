/* R Paul's Guitar Academy — Русский
 *
 * Охватывает навигацию, заголовки модулей, покупку, тест уровня, вступления к
 * модулям и описания панелей.
 *
 * Отсутствующие ключи автоматически откатываются на английский, поэтому файл
 * можно публиковать и дополнять партиями.
 *
 * Музыкальные соглашения:
 *   - Названия нот оставлены в буквенной записи (C, D, E…), как принято в
 *     гитарной практике. Слоговые названия (До, Ре, Ми) можно включить в
 *     настройках приложения.
 *   - Множественное число: русский требует ЧЕТЫРЕ формы (one/few/many/other),
 *     в отличие от двух в западноевропейских языках. См. объекты ниже.
 *   - «лад» означает и fret, и музыкальный лад. Во избежание путаницы в
 *     глоссарии «лад/лады» — это fret, а для mode используется «модус».
 */
window.LANG_ru = {
  /* ---- навигация ---- */
  "<span class=\"led\"></span>Dashboard": "<span class=\"led\"></span>Обзор",
  "<span class=\"led\"></span>Curriculum": "<span class=\"led\"></span>Программа",
  "<span class=\"led\"></span>Ear Training": "<span class=\"led\"></span>Развитие слуха",
  "<span class=\"led\"></span>Rhythm": "<span class=\"led\"></span>Ритм",
  "<span class=\"led\"></span>Chord Progressions": "<span class=\"led\"></span>Последовательности",
  "<span class=\"led\"></span>Chord Shapes": "<span class=\"led\"></span>Аппликатуры",
  "<span class=\"led\"></span>Fretboard": "<span class=\"led\"></span>Гриф",
  "<span class=\"led\"></span>Soloing &amp; Improv": "<span class=\"led\"></span>Соло и импровизация",
  "<span class=\"led\"></span>Scale Patterns": "<span class=\"led\"></span>Схемы гамм",
  "<span class=\"led\"></span>Practice Log": "<span class=\"led\"></span>Дневник",
  "Modules": "Модули",
  "Language": "Язык",
  "← Back": "← Назад",

  /* ---- стартовый экран ---- */
  "Guitar Method & Practice Studio": "Гитарная школа и студия занятий",
  "From Novice to the Stage in One Year — ear training, rhythm, chords, fretboard fluency, and improvisation, all in one place.":
    "От новичка до сцены за год — развитие слуха, ритм, аккорды, свободное владение грифом и импровизация в одном месте.",
  "Enter the Academy →": "Войти в Академию →",
  "🔊 Tapping Enter also unlocks sound for the app": "🔊 Нажатие кнопки входа также включает звук приложения",
  "From Novice to the Stage in One Year": "От новичка до сцены за год",
  "CURRENT STREAK{1}": "ТЕКУЩАЯ СЕРИЯ{1}",

  /* ---- обзор ---- */
  "Start Here": "Начните отсюда",
  "Got it, hide this": "Понятно, скрыть",
  "This Month": "Текущий месяц",
  "Why This Order": "Почему такой порядок",
  "Daily Split (45–60 min)": "Распределение на день (45–60 мин)",
  "◀ Previous month": "◀ Предыдущий месяц",
  "Mark month complete, advance ▶": "Завершить месяц и перейти дальше ▶",
  "Teaching level: <b>New to guitar</b>": "Уровень подачи: <b>Совсем новичок</b>",
  "Teaching level: <b>Some experience</b>": "Уровень подачи: <b>Есть некоторый опыт</b>",
  "Teaching level: <b>Experienced</b>": "Уровень подачи: <b>Опытный</b>",
  "Explain music words": "Объяснять музыкальные термины",
  "Retake check": "Пройти тест заново",
  "10 min — Ear training reps": "10 мин — упражнения на слух",
  "10 min — Metronome / rhythm drill": "10 мин — метроном / работа над ритмом",
  "15 min — This month's chord or scale material": "15 мин — аккорды или гаммы текущего месяца",
  "15 min — Fretboard fluency or improvisation": "15 мин — владение грифом или импровизация",
  "5 min — Log the session": "5 мин — записать занятие",

  /* ---- программа ---- */
  "The 12-Month Arc": "Путь длиной в 12 месяцев",
  "Click a month to open it. Mark months done as you finish them — your progress marker on the fretboard above updates automatically.":
    "Нажмите на месяц, чтобы открыть его. Отмечайте месяцы по мере завершения — отметка прогресса на грифе выше обновляется сама.",
  "Mark done": "Отметить",
  "Foundation": "Основы",
  "Building": "Развитие",
  "Soloing": "Соло",
  "Mastery": "Мастерство",
  "Free": "Бесплатно",
  "Locked": "Закрыто",
  "See options": "Посмотреть варианты",
  "Part of the full program — Months 2–12.": "Часть полной программы — месяцы со 2 по 12.",

  /* ---- покупка и доступ ---- */
  "Unlock Months 2–12": "Открыть месяцы со 2 по 12",
  "Unlock Months 2&ndash;12": "Открыть месяцы 2&ndash;12",
  "Your access has expired": "Срок доступа истёк",
  "Month {n} is part of the full program": "Месяц {n} входит в полную программу",
  "1 year of access": "Доступ на 1 год",
  "Unlimited access": "Безлимитный доступ",
  "Best value": "Выгоднее всего",
  "The full program for twelve months — long enough to finish it at the intended pace.":
    "Полная программа на двенадцать месяцев — достаточно, чтобы пройти её в задуманном темпе.",
  "Keep Months 2–12 permanently, with no renewal date. Best if you expect to revisit the material.":
    "Месяцы 2–12 остаются у вас навсегда, без срока продления. Подойдёт, если вы планируете возвращаться к материалу.",
  "Choose 1 year of access": "Выбрать доступ на 1 год",
  "Choose Unlimited access": "Выбрать безлимитный доступ",
  "I have a code": "У меня есть код",
  "Redemption code": "Код активации",
  "Enter your code": "Введите код",
  "Redeem": "Активировать",
  "Checking…": "Проверяем…",
  "Enter a code first.": "Сначала введите код.",
  "That code is not valid.": "Этот код недействителен.",
  "That code has expired.": "Срок действия кода истёк.",
  "That code has already been fully claimed.": "Этот код уже полностью использован.",
  "You have already redeemed that code.": "Вы уже активировали этот код.",
  "You already have full access — no code needed.": "У вас уже есть полный доступ — код не нужен.",
  "Too many attempts. Please wait ten minutes and try again.":
    "Слишком много попыток. Подождите десять минут и попробуйте снова.",
  "Unlocked. Enjoy the full program.": "Доступ открыт. Приятных занятий по полной программе.",
  "Could not reach the server. Check your connection and try again.":
    "Не удалось связаться с сервером. Проверьте соединение и попробуйте снова.",
  "Renew 1 year": "Продлить на 1 год",
  "Switch to unlimited": "Перейти на безлимит",
  "Unlimited access — Months 2–12 are yours permanently.":
    "Безлимитный доступ — месяцы со 2 по 12 остаются у вас навсегда.",

  /* Русский требует четырёх форм: 1 день / 2–4 дня / 5–20 дней / дробные — дня. */
  "Access runs until {date} ({n} day left).": "Доступ действует до {date} (остался {n} день).",
  "Access runs until {date} ({n} days left).": {
    one:   "Доступ действует до {date} (остался {n} день).",
    few:   "Доступ действует до {date} (осталось {n} дня).",
    many:  "Доступ действует до {date} (осталось {n} дней).",
    other: "Доступ действует до {date} (осталось {n} дня)."
  },
  "<b>Your access ends in {n} day</b> ({date}). Renew to keep Months 2&ndash;12.":
    "<b>Доступ закончится через {n} день</b> ({date}). Продлите, чтобы сохранить месяцы 2&ndash;12.",
  "<b>Your access ends in {n} days</b> ({date}). Renew to keep Months 2&ndash;12.": {
    one:   "<b>Доступ закончится через {n} день</b> ({date}). Продлите, чтобы сохранить месяцы 2&ndash;12.",
    few:   "<b>Доступ закончится через {n} дня</b> ({date}). Продлите, чтобы сохранить месяцы 2&ndash;12.",
    many:  "<b>Доступ закончится через {n} дней</b> ({date}). Продлите, чтобы сохранить месяцы 2&ndash;12.",
    other: "<b>Доступ закончится через {n} дня</b> ({date}). Продлите, чтобы сохранить месяцы 2&ndash;12."
  },
  "Renew for another year, or switch to unlimited so it never lapses again. Your progress is all still saved.":
    "Продлите ещё на год или перейдите на безлимит, чтобы доступ больше не заканчивался. Весь ваш прогресс сохранён.",
  "Month 1 is free and stays free. The remaining eleven months cover barre chords, CAGED, pentatonics, modes, improvisation and performance.":
    "Месяц 1 бесплатный и останется таким. Остальные одиннадцать месяцев охватывают барре, систему CAGED, пентатонику, модусы, импровизацию и выступление.",

  /* ---- тест уровня ---- */
  "Where would you like to start?": "С чего хотите начать?",
  "Have you played guitar before?": "Вы раньше играли на гитаре?",
  "Can you read a chord diagram?": "Вы умеете читать схему аккорда?",
  "Do you know what a chord is?": "Вы знаете, что такое аккорд?",
  "Tap the 3rd fret of the low E string.": "Нажмите 3-й лад на нижней струне E.",
  "The low E is the thickest string — the bottom row here.":
    "Нижняя E — самая толстая струна, здесь это нижний ряд.",
  "Which chord is this?": "Какой это аккорд?",
  "I'm not sure": "Не уверен",
  "Skip": "Пропустить",
  "Never": "Никогда",
  "A little": "Немного",
  "Yes, regularly": "Да, регулярно",
  "No": "Нет",
  "Roughly": "Примерно",
  "Yes": "Да",
  "Not really": "Не особо",
  "Yes, and inversions": "Да, и обращения тоже",
  "New to guitar": "Совсем новичок",
  "Some experience": "Есть некоторый опыт",
  "Experienced": "Опытный",
  "Recommended": "Рекомендуем",
  "We'll explain music words when you tap them, introduce each module, and start quizzes on Easy.":
    "Мы будем объяснять музыкальные термины по нажатию, представим каждый модуль и начнём упражнения с лёгкого уровня.",
  "Standard instructions, with music words explained when you tap them.":
    "Обычные пояснения, музыкальные термины объясняются по нажатию.",
  "Full detail, and explanations switched off. You can turn them back on any time.":
    "Все подробности, пояснения отключены. Их можно включить обратно в любой момент.",
  "Based on your answers we suggest <b>New to guitar</b>, but pick whichever you prefer. You can change this any time on the Dashboard.":
    "По вашим ответам мы предлагаем <b>Совсем новичок</b>, но выберите то, что вам ближе. Это можно изменить в любой момент в разделе «Обзор».",
  "Based on your answers we suggest <b>Some experience</b>, but pick whichever you prefer. You can change this any time on the Dashboard.":
    "По вашим ответам мы предлагаем <b>Есть некоторый опыт</b>, но выберите то, что вам ближе. Это можно изменить в любой момент в разделе «Обзор».",
  "Based on your answers we suggest <b>Experienced</b>, but pick whichever you prefer. You can change this any time on the Dashboard.":
    "По вашим ответам мы предлагаем <b>Опытный</b>, но выберите то, что вам ближе. Это можно изменить в любой момент в разделе «Обзор».",

  /* ---- вступления к модулям ---- */
  "What is this module for?": "Для чего нужен этот модуль?",
  "Got it": "Понятно",
  "The full one-year plan. Each month lists a few things to practise. Open your current month, work through it over a few weeks, then mark it done. You can revisit earlier months any time.":
    "Полный план на год. В каждом месяце перечислено несколько задач. Откройте текущий месяц, проработайте его за несколько недель и отметьте как завершённый. К прошлым месяцам можно вернуться в любое время.",
  "Ear training teaches you to recognise what you hear. Press play, listen, then pick an answer. A few minutes daily beats one long session.":
    "Развитие слуха учит распознавать то, что вы слышите. Нажмите воспроизведение, послушайте и выберите ответ. Несколько минут каждый день полезнее одного долгого занятия.",
  "Rhythm is about keeping a steady beat. The metronome clicks in time; try to strum exactly with it. Tap along on the pad to test how steady you really are.":
    "Ритм — это умение держать ровную пульсацию. Метроном щёлкает в такт; старайтесь играть точно вместе с ним. Отстукивайте по площадке, чтобы проверить, насколько ровно у вас получается.",
  "A chord is several notes played together, and a progression is a series of chords — the backbone of most songs. Tap any progression to hear it loop.":
    "Аккорд — это несколько нот, взятых одновременно, а последовательность — это цепочка аккордов, основа большинства песен. Нажмите на любую последовательность, чтобы услышать её в цикле.",
  "The same chord can be played in several places on the neck. Pick a chord to see exactly where to put your fingers.":
    "Один и тот же аккорд можно взять в нескольких местах грифа. Выберите аккорд, чтобы увидеть, куда именно ставить пальцы.",
  "This is where you learn the name of every note on the neck. Start on Easy: a position lights up and you name it. Positions you get right stay lit.":
    "Здесь вы выучите название каждой ноты на грифе. Начните с лёгкого уровня: позиция загорается, а вы называете ноту. Угаданные позиции остаются подсвеченными.",
  "Soloing means making up your own lines. Pick a scale and every highlighted note will fit the backing loop. There are no wrong answers here.":
    "Соло — это сочинение собственных фраз. Выберите гамму, и каждая подсвеченная нота подойдёт к аккомпанементу. Здесь не бывает неправильных ответов.",
  "A scale is a set of notes played in order. This shows every scale in the app and all five neck positions, so you can see how they join up.":
    "Гамма — это набор нот, сыгранных по порядку. Здесь показаны все гаммы приложения и все пять позиций на грифе, чтобы было видно, как они соединяются.",
  "Record each practice session here. It keeps your streak going and feeds the progress marker at the top of the page.":
    "Записывайте сюда каждое занятие. Так держится ваша серия и обновляется отметка прогресса вверху страницы.",

  /* ---- дневник и резервная копия ---- */
  "Log a Session": "Записать занятие",
  "Save session": "Сохранить занятие",
  "Recent Sessions": "Последние занятия",
  "Last 28 Days": "Последние 28 дней",
  "No sessions logged yet.": "Занятий пока не записано.",
  "Show all": "Показать все",
  "Show recent only": "Показать только последние",
  "Backup & Restore": "Резервная копия и восстановление",
  "Export backup": "Экспортировать копию",
  "Import backup": "Импортировать копию",
  "Minutes practiced": "Минут занятий",
  "Session notes": "Заметки о занятии",
  "What did you work on? Anything clicking or still sticky?":
    "Над чем работали? Что начало получаться, а что ещё буксует?",
  "Delete this session": "Удалить это занятие",
  "Total logged sessions: {1}": "Всего записано занятий: {1}",
  "Your progress is saved in this browser only. Export a backup file before clearing browsing data, switching devices, or reinstalling — then import it to pick up where you left off.":
    "Ваш прогресс хранится только в этом браузере. Экспортируйте резервную копию перед очисткой данных браузера, сменой устройства или переустановкой, а затем импортируйте её, чтобы продолжить с того же места.",
  "That file is not valid JSON, so nothing was changed.":
    "Это не корректный файл JSON, поэтому ничего не изменилось.",
  "That does not look like a Guitar Academy backup, so nothing was changed.":
    "Это не похоже на резервную копию Guitar Academy, поэтому ничего не изменилось.",
  "Import cancelled — nothing was changed.": "Импорт отменён — ничего не изменилось.",

  /* ---- общие элементы ---- */
  "Play scale": "Проиграть гамму",
  "Play a lick": "Проиграть фразу",
  "Stop loop": "Остановить цикл",
  "Start loop": "Запустить цикл",
  "Position": "Позиция",
  "All Positions": "Все позиции",
  "Formula: {1}": "Формула: {1}",
  "Degrees: {1}": "Ступени: {1}",
  "Easy": "Лёгкий",
  "Moderate": "Средний",
  "Difficult": "Сложный",
  "60-second challenge": "Испытание на 60 секунд",
  "Reset progress": "Сбросить прогресс",
  "Reset stats": "Сбросить статистику",
  "Flip string order (low E on top)": "Перевернуть порядок струн (нижняя E сверху)",
  "🎤 Use Microphone": "🎤 Использовать микрофон",
  "Print practice sheets ({n})": "Распечатать листы ({n})",
  "{sheets} — choose “Save as PDF” in the print dialog to keep a copy.":
    "{sheets} — выберите «Сохранить как PDF» в окне печати, чтобы оставить копию.",
  "New question": "Новый вопрос",
  "Which note is highlighted?": "Какая нота подсвечена?",
  "Show the notes being played on the keyboard": "Показывать звучащие ноты на клавиатуре",
  "Press \"Play a lick\" to begin.": "Нажмите «Проиграть фразу», чтобы начать.",
  "Press play, then choose the interval you heard.":
    "Нажмите воспроизведение и выберите услышанный интервал.",
  "One position found for this combination.": "Для этого сочетания найдена одна позиция.",
  "Guess The Progression (by ear)": "Угадайте последовательность (на слух)",
  "Tap note names above to show them on the fretboard.":
    "Нажимайте на названия нот выше, чтобы показать их на грифе.",
  "👆 Tap any dot to hear that note by itself.": "👆 Нажмите на любую точку, чтобы услышать эту ноту отдельно.",
  "🔊 Tap anywhere once to enable sound (mobile browsers require this).":
    "🔊 Коснитесь экрана один раз, чтобы включить звук (мобильные браузеры этого требуют).",

  /* ---- описания панелей ---- */
  "This is a full 12-month method, not a set of loose tools. Here's how the pieces fit:":
    "Это полноценная методика на 12 месяцев, а не набор разрозненных инструментов. Вот как всё складывается:",
  "<b>This Month</b> below is your assignment. It lists what to practice and links straight to the modules you need — tap any of those amber chips to jump there.":
    "<b>Текущий месяц</b> ниже — это ваше задание. Там перечислено, что отрабатывать, со ссылками прямо на нужные модули: нажмите на любую янтарную метку, чтобы перейти.",
  "<b>Practice the five disciplines</b> — ear training, rhythm, chord progressions, fretboard fluency, and soloing. The daily split on this page suggests 45–60 minutes.":
    "<b>Занимайтесь по пяти направлениям</b> — слух, ритм, последовательности аккордов, владение грифом и соло. Распределение на этой странице предполагает 45–60 минут.",
  "<b>Log the session</b> in Practice Log when you finish. That drives your streak and the progress marker on the fretboard above.":
    "<b>Записывайте занятие</b> в Дневник по окончании. Именно это поддерживает серию и отметку прогресса на грифе выше.",
  "<b>Mark the month complete</b> when the material feels solid, and the next month unlocks. There's no rush — repeat a month if you need to.":
    "<b>Отмечайте месяц завершённым</b>, когда материал уляжется, — тогда откроется следующий. Спешить некуда: при необходимости пройдите месяц заново.",
  "Everything saves automatically in this browser. Export a backup from the Practice Log page to keep it safe or move it to another device.":
    "Всё сохраняется автоматически в этом браузере. Экспортируйте копию со страницы Дневника, чтобы сохранить её или перенести на другое устройство.",

  "Every real guitarist's development follows the same spine: your fretting hand learns shapes before it learns theory, your ear develops in parallel with your hands rather than after, and rhythm is trained explicitly rather than assumed. This plan sequences five disciplines — <b>ear training, rhythm, chord progressions, fretboard fluency, and soloing/improvisation</b> — so each month's work makes the next month easier, the same arc used in conservatory method books and by working session players.":
    "Развитие любого настоящего гитариста идёт по одной и той же оси: прижимающая рука осваивает аппликатуры раньше теории, слух развивается параллельно с руками, а не после них, и ритм отрабатывается явно, а не подразумевается. Эта программа выстраивает пять направлений — <b>развитие слуха, ритм, последовательности аккордов, владение грифом и импровизацию</b> — так, что работа каждого месяца облегчает следующий: тот же путь, по которому идут консерваторские пособия и сессионные музыканты.",

  "Full 22-fret neck. A dot lands somewhere on the board — name the note before you move on. <b>Easy</b> stays in frets 0–5 with a 4-choice keypad; <b>Moderate</b> is the full 12-note keypad and requires mastering frets 0–12 before unlocking 13–22; <b>Difficult</b> opens the whole neck immediately. Every position you identify correctly stays lit up on the board across sessions, in every difficulty.":
    "Весь гриф из 22 ладов. Где-то появляется точка — назовите ноту, прежде чем идти дальше. <b>Лёгкий</b> остаётся в ладах 0–5 с четырьмя вариантами ответа; <b>Средний</b> даёт полную клавиатуру из 12 нот и требует освоить лады 0–12, прежде чем откроются 13–22; <b>Сложный</b> сразу открывает весь гриф. Каждая верно названная позиция остаётся подсвеченной между занятиями на любом уровне сложности.",

  "Pick a root, a chord quality, and a shape category — it finds every place on the neck that shape actually works, computed from the actual notes rather than a fixed diagram library. Open chords only show up where a real open-position shape exists; barre, power, and triad shapes are movable, so you'll often see several positions up and down the neck.":
    "Выберите основной тон, тип аккорда и категорию аппликатуры — приложение найдёт все места на грифе, где такая форма действительно работает, рассчитав их по реальным нотам, а не по готовой библиотеке схем. Открытые аккорды появляются только там, где существует настоящая открытая форма; барре, квинт-аккорды и трезвучия подвижны, поэтому обычно видно несколько позиций вдоль грифа.",

  "Shows whichever progression you last picked, as a movable barre shape. While it's looping, this updates live to show each chord as it's actually played, staying in a nearby position on the neck rather than jumping around. The fret-advance buttons above slide the whole progression — every chord and this shape — up or down by one fret.":
    "Показывает последнюю выбранную последовательность в виде подвижной формы барре. Во время цикла изображение обновляется вживую и показывает каждый аккорд так, как он звучит, оставаясь в близкой позиции грифа, а не прыгая по нему. Кнопки сдвига выше перемещают всю последовательность — каждый аккорд и эту форму — на один лад вверх или вниз.",

  "A reference library of every scale and mode in the app, with its interval formula, degree names, and all 5 neck positions mapped out together so you can see how they connect. Switch Position to zoom into a single box, or keep All Positions to see the whole neck at once. Tap any note on the board to hear it.":
    "Справочник всех гамм и модусов приложения с интервальной формулой, названиями ступеней и всеми пятью позициями грифа рядом, чтобы видеть, как они соединяются. Переключите Позицию, чтобы приблизить одну схему, или оставьте Все позиции, чтобы видеть весь гриф. Нажмите на любую ноту, чтобы услышать её.",

  "Pick a key and scale to see every usable note across the neck. Minor pentatonic is where almost every rock/blues solo lives — start there. Use Position to zoom into one playable stretch of neck instead of the whole thing at once.":
    "Выберите тональность и гамму, чтобы увидеть все пригодные ноты на грифе. Минорная пентатоника — дом почти всех рок- и блюзовых соло, начните с неё. С помощью Позиции сосредоточьтесь на одном удобном участке грифа вместо всего сразу.",

  "Sync your strumming hand to a pattern most rock/pop/blues rhythm parts are built from. Runs off the metronome above — start it, then follow the highlighted arrow. Tap any square to hear that stroke.":
    "Согласуйте правую руку с рисунком, на котором строится большинство рок-, поп- и блюзовых аккомпанементов. Он идёт от метронома выше: запустите его и следуйте за подсвеченной стрелкой. Нажмите на любой квадрат, чтобы услышать этот удар.",

  "The app plays a short 4-note lick built from your chosen scale above. Repeat it back by clicking the same frets in the same order — this trains ear, fretboard knowledge, and scale shapes together.":
    "Приложение играет короткую фразу из четырёх нот, построенную на выбранной выше гамме. Повторите её, нажимая те же лады в том же порядке: так одновременно тренируются слух, знание грифа и аппликатуры гамм.",

  "A mystery progression plays once, in the key selected above, at a realistic tempo. Pick which one it was before looking at the chords — this is what \"hearing the changes\" actually trains.":
    "Неизвестная последовательность звучит один раз, в выбранной выше тональности и в реальном темпе. Определите, какая это была, прежде чем смотреть на аккорды: именно это и тренирует «слышание гармонии».",

  "Every interval and triad quality below, each with a familiar song to anchor it and a play button to hear it directly against a fixed root — build these associations before you drill.":
    "Ниже — все интервалы и виды трезвучий, каждый со знакомой мелодией-подсказкой и кнопкой, чтобы услышать его прямо над фиксированным основным тоном. Выстройте эти ассоциации, прежде чем переходить к упражнениям.",

  "A simple root-bass + click loop in your chosen key so you can solo over real time, not silence. This is the single best way to build phrasing and timing together.":
    "Простой цикл из баса на основном тоне и щелчка в выбранной тональности, чтобы играть соло поверх реального времени, а не тишины. Это лучший способ одновременно развивать фразировку и чувство времени.",

  "Trains real pitch relationships used every time you play by ear: intervals for melody and bends, triad qualities for reading a band's harmony in seconds.":
    "Тренирует реальные звуковысотные отношения, нужные при игре на слух: интервалы для мелодии и подтяжек, виды трезвучий — чтобы за секунды понять гармонию группы.",

  "Start the metronome above, then tap the pad (or press spacebar) right on each beat. This trains your internal clock instead of just following a light.":
    "Запустите метроном выше и отстукивайте по площадке (или нажимайте пробел) точно на каждую долю. Так тренируются внутренние часы, а не просто слежение за огоньком.",

  "Tap notes to hear them before you answer — useful for anchoring what \"up a 3rd\" or \"minor\" actually sounds like.":
    "Нажимайте на ноты, чтобы услышать их перед ответом: помогает закрепить, как на самом деле звучит «на терцию выше» или «минор».",

  "Tracks your ear-training activity for {1} — a rolling tally that resets naturally each month, plus how consistently you're showing up day to day.":
    "Отслеживает ваши занятия слухом за {1} — скользящий подсчёт, который сам обнуляется каждый месяц, а также вашу регулярность изо дня в день.",

  "Pick a key and mode, then click a progression to loop it at a practice tempo — strum along and focus on clean, silent changes.":
    "Выберите тональность и модус, затем нажмите на последовательность, чтобы зациклить её в учебном темпе: играйте вместе и следите за чистыми, беззвучными сменами.",

  "Click a chord to hear it. Master these shapes cold before month 4's barre chords.":
    "Нажмите на аккорд, чтобы услышать его. Доведите эти формы до автоматизма до барре-аккордов четвёртого месяца.",

  "Full 22-fret neck, scrollable — use this to check your answers or just study the layout.":
    "Весь гриф из 22 ладов с прокруткой — пользуйтесь им, чтобы проверять ответы или просто изучать расположение нот.",

  "The workhorse of rock and blues soloing — five notes, no half-steps to trip over, works over almost any minor-key progression.":
    "Рабочая лошадка рок- и блюзового соло: пять нот, никаких полутонов, о которые можно споткнуться, и работает почти над любой минорной последовательностью.",

  "Learn open chords: E, A, D, G, C, Em, Am, Dm — clean, buzz-free.":
    "Выучите открытые аккорды: E, A, D, G, C, Em, Am, Dm — чисто, без дребезга.",
  "Fretboard: memorize natural notes on the low E and high e strings, frets 0-5.":
    "Гриф: запомните основные ноты на нижней и верхней струнах E, лады 0–5.",
  "A — first chord of \"I – IV – V\", fret 5": "A — первый аккорд «I – IV – V», 5-й лад",

  /* ---- печатные листы ---- */
  "Open Chords": "Открытые аккорды",
  "Strum Pattern &amp; First Notes": "Рисунок боя и первые ноты",
  "Chord Change Drill": "Упражнение на смену аккордов",
  "12-Bar Blues in A": "12-тактовый блюз в A",
  "Barre Chords — E Shape": "Барре — форма E",
  "Barre Chords — A Shape": "Барре — форма A",
  "The Five CAGED Shapes": "Пять форм системы CAGED",
  "Minor Pentatonic — Box 1": "Минорная пентатоника — позиция 1",
  "Minor Pentatonic — Full Neck": "Минорная пентатоника — весь гриф",
  "Major Pentatonic &amp; the Blues Scale": "Мажорная пентатоника и блюзовая гамма",
  "Blues Soloing Toolkit": "Набор приёмов для блюзового соло",
  "The ii–V–I Progression": "Оборот ii–V–I",
  "Dorian Mode": "Дорийский модус",
  "Mixolydian Mode": "Миксолидийский модус",
  "Alternate Picking Log": "Журнал переменного штриха",
  "Chord-Tone Targets": "Опорные аккордовые тоны",
  "Odd Time Signatures": "Нечётные размеры",
  "Borrowed Chords": "Заимствованные аккорды",
  "Transcription Worksheet": "Лист для снятия на слух",
  "Polyrhythm &amp; Note Naming": "Полиритмия и названия нот",
  "Song Learning Plan": "План разбора песен",
  "Year Review &amp; Next Goals": "Итоги года и следующие цели",
  "© 2026 R Paul's Guitar Academy. All rights reserved. Licensed for personal practice use only — copying, redistribution or resale is prohibited.":
    "© 2026 R Paul's Guitar Academy. Все права защищены. Лицензия только для личных занятий — копирование, распространение и перепродажа запрещены."
};

/* ---------------------------------------------------------------------------
 * Русский глоссарий.
 *
 * Глоссарий ищет буквальные совпадения, поэтому ему нужен словарь этого языка.
 * Термины разделены символом | и включают падежные формы, встречающиеся в текстах.
 * ------------------------------------------------------------------------- */
window.LANG_ru_GLOSSARY = [
  {terms:'лад|лады|ладов|ладу',          def:'Металлические порожки на грифе. «3-й лад» — значит прижать струну сразу за третьим порожком.'},
  {terms:'гриф|грифа|грифе',             def:'Плоская передняя сторона шейки, на которой прижимают струны.'},
  {terms:'открытая струна|открытые струны', def:'Струна, которая звучит без прижатия ладов.'},
  {terms:'аккорд|аккорда|аккорды|аккордов', def:'Три или больше нот, взятых одновременно, обычно как единое созвучие.'},
  {terms:'трезвучие|трезвучия',          def:'Простейший аккорд из трёх нот: основной тон, терция и квинта.'},
  {terms:'основной тон',                 def:'Нота, по которой назван аккорд. G — основной тон аккорда G.'},
  {terms:'барре',                        def:'Прижать одним пальцем все струны, чтобы он работал как подвижный порожек.'},
  {terms:'CAGED',                        def:'Пять аккордовых форм (C, A, G, E, D), которые соединяются и покрывают весь гриф.'},
  {terms:'квинт-аккорд|квинт-аккорды',   def:'Аккорд из двух нот — основного тона и квинты. Ни мажорный, ни минорный.'},
  {terms:'последовательность|последовательности', def:'Цепочка аккордов, идущих друг за другом, — основа песни.'},
  {terms:'бой',                          def:'Проведение медиатором или пальцами сразу по нескольким струнам.'},
  {terms:'гамма|гаммы|гамм',             def:'Набор нот, сыгранных по порядку, ступень за ступенью, вверх или вниз.'},
  {terms:'пентатоника|пентатоники',      def:'Гамма из пяти нот. Самый простой вход в соло: её ноты звучат уместно почти везде.'},
  {terms:'блюзовая гамма',               def:'Минорная пентатоника плюс одна дополнительная «грязная» нота — блюзовая.'},
  {terms:'модус|модусы',                 def:'Гамма, начатая с другой ступени мажорной гаммы, отчего меняется её окраска.'},
  {terms:'интервал|интервалы|интервалов', def:'Расстояние между двумя нотами.'},
  {terms:'полутон|полутона|полутонов',   def:'Наименьший шаг на гитаре — один лад.'},
  {terms:'октава|октавы',                def:'От одной ноты до следующей с тем же названием — на двенадцать ладов выше.'},
  {terms:'мажор|мажорный|мажорная',      def:'Светлый, радостно звучащий аккорд или гамма.'},
  {terms:'минор|минорный|минорная',      def:'Более тёмный, печально звучащий аккорд или гамма.'},
  {terms:'ступень|ступени|ступеней',     def:'Место ноты в гамме: 1 — первая, 3 — третья и так далее.'},
  {terms:'тоника',                       def:'«Домашняя» нота тональности или гаммы.'},
  {terms:'доминанта',                    def:'Аккорд на пятой ступени тональности. Сильно тянет обратно к тонике.'},
  {terms:'уменьшённый|уменьшённое',      def:'Напряжённый, неустойчивый аккорд из равных малых шагов.'},
  {terms:'увеличенный|увеличенное',      def:'Зыбкий, неразрешённый аккорд из двух больших шагов.'},
  {terms:'метроном|метронома',           def:'Ровный щелчок, удерживающий темп, чтобы вы не ускорялись и не замедлялись.'},
  {terms:'bpm',                          def:'Ударов в минуту — скорость музыки. 60 bpm — одна доля в секунду.'},
  {terms:'доля|доли|долю',               def:'Ровная пульсация, под которую вы бы отстукивали ногой.'},
  {terms:'такт|такта|такты|тактов',      def:'Небольшая группа долей, обычно четыре. Музыка делится на такты.'},
  {terms:'размер',                       def:'Две цифры (например, 4/4), показывающие, сколько долей в такте.'},
  {terms:'синкопа|синкопы|синкопированный', def:'Акценты между долями, придающие музыке толчок.'},
  {terms:'шаффл',                        def:'Неровное, покачивающееся ощущение: длинно–коротко, длинно–коротко.'},
  {terms:'полиритмия',                   def:'Два разных ритма, звучащих одновременно.'},
  {terms:'арпеджио',                     def:'Ноты аккорда, сыгранные по одной, а не вместе.'},
  {terms:'импровизация|импровизировать', def:'Сочинение музыки на ходу.'},
  {terms:'фраза|фразы',                  def:'Короткий музыкальный оборот — своего рода музыкальная поговорка.'},
  {terms:'бенд|бенды|подтяжка',          def:'Смещение струны вбок, чтобы поднять её высоту.'},
  {terms:'вибрато',                      def:'Небольшое повторяющееся колебание высоты, заставляющее долгую ноту петь.'},
  {terms:'легато',                       def:'Плавно соединённые ноты, извлечённые прижимающей рукой, а не медиатором.'},
  {terms:'хаммер-он',                    def:'Извлечение ноты ударом пальца по струне, без медиатора.'},
  {terms:'пулл-офф',                     def:'Извлечение более низкой ноты срывом прижимающего пальца со струны.'},
  {terms:'переменный штрих',             def:'Строгое чередование удара вниз и вверх — именно это даёт настоящую скорость.'},
  {terms:'каподастр',                    def:'Зажим на грифе, поднимающий высоту всех струн сразу.'},
  {terms:'транспонировать|транспозиция', def:'Перенести музыку в другую тональность, выше или ниже.'},
  {terms:'голосоведение',                def:'Вести каждый голос к ближайшей ноте следующего аккорда, чтобы смены звучали плавно.'},
  {terms:'аккордовый тон|аккордовые тоны', def:'Нота, входящая в звучащий аккорд. Попадание в неё всегда звучит верно.'},
  {terms:'развитие слуха',               def:'Умение узнавать ноты, интервалы и аккорды только на слух.'},
  {terms:'табулатура',                   def:'Гитарная нотация: шесть линий для шести струн с номерами ладов.'},
];
