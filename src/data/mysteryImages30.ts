export interface MysteryImageItem {
  id: number;
  title: string;
  prompt: string;
  judgeAnswer: string;
  episode: string;
  keyClues: string[];
  difficulty: number;
  mood: string;
}

export const MYSTERY_IMAGES_30: MysteryImageItem[] = [
  {
    id: 1,
    title: "1-Sirli Rasm: Deraza yonidagi ojiz nigoh",
    prompt: "Cinematic 35mm film still, emotional 1980s Uzbek domestic interior. A pale paralyzed teenage boy sitting in a vintage wooden wheelchair by a large rain-streaked window. On his lap rests an open worn clothbound classic book. Warm afternoon light hits his sorrowful contemplative face, contrasting with the dark walnut bookshelves behind him. Detailed textures of hand-knitted woolen blanket on his legs, melancholy atmosphere. Strictly no text, no letters, no logos.",
    judgeAnswer: "Nogiron Akbarning deraza oldida kitob mutolaa qilib, o‘zining ojizligi va dunyoning nohaqliklari haqida mungli o‘yga cho‘mishi.",
    episode: "Akbarning ruhiy pokligi va kitoblarga sadoqati epizodi.",
    keyClues: [
      "Nogironlar aravachasidagi o‘spirin",
      "Tizadagi to‘qilgan eski jun adyol",
      "Ochiq qalin kitob",
      "Derazaga tushayotgan yomg‘ir tomchilari va g‘amgin nigoh"
    ],
    difficulty: 2,
    mood: "Og‘ir, lirik, mungli"
  },
  {
    id: 2,
    title: "2-Sirli Rasm: Xufyona xazina",
    prompt: "Atmospheric 1980s Soviet-era Central Asian bedroom interior, nighttime. A middle-aged glamorous woman with elaborate traditional Uzbek hairstyle secretly opening a carved wooden chest hidden inside a closet. Glowing golden light illuminates heaps of solid gold bangles, antique gold coins, and diamond rings slipping through her greedy, anxious fingers. Extreme tension on her face as she glances toward the doorway. Hyper-realistic cinematic lighting, high grain film texture, absolutely no text, no characters, no watermark.",
    judgeAnswer: "Yoqutxon Karimovaning kechasi yashirin sandiqni ochib, noqonuniy chayqovchilik orqali yig‘ilgan tillalar va zargarlik buyumlarini zavq va qo‘rquv bilan sanashi.",
    episode: "Yoqutxonning tillafurushligi va boylikka hirs qo‘yishi sahnalari.",
    keyClues: [
      "Yashirin o‘ymakor yog‘och sandiq",
      "Kaftlarda yarqiragan qator oltin bilaguzuklar va tilla tangalar",
      "Eshikka xavotir bilan qaragan ayolning ochko‘z nigohi",
      "1980-yillar an’anaviy o‘zbek xona bezaklari"
    ],
    difficulty: 3,
    mood: "Sirli, vahimali, tamagirlik nafsi"
  },
  {
    id: 3,
    title: "3-Sirli Rasm: Shaharni lol qoldirgan oq tulpari",
    prompt: "Cinematic vintage shot of an affluent traditional Uzbek courtyard (hovli) in late afternoon sun. Parked on clean brick pavement is a gleaming brand-new white vintage Soviet sedan GAZ-24 Volga. Standing beside the driver's door is an excited, arrogant adolescent boy wearing a stylish imported leather jacket, touching the polished chrome mirror with pride and longing. High contrast, dramatic shadows, realistic 1980s aesthetic. Absolutely no text, no license plate characters, no typography.",
    judgeAnswer: "Saidjon Karimovning erka o‘g‘li Zufarga atab olib bergan, oilaning kibr timsoliga aylangan oq 'Volga' (GAZ-24) mashinasi.",
    episode: "Zufarga mashina sovg‘a qilinishi va oilaning moddiy dabdabasi epizodi.",
    keyClues: [
      "Yangi oppoq GAZ-24 'Volga' rusumli avtomobil",
      "Xrom oynani ushlab turgan mag‘rur yosh o‘smir",
      "Hashamatli o‘zbek hovlisi va baland devorlar",
      "Import charm kurtka va erkalik alomatlari"
    ],
    difficulty: 2,
    mood: "Dabdabali, soxta viqor"
  },
  {
    id: 4,
    title: "4-Sirli Rasm: Omborxonadagi qorong‘i savdo",
    prompt: "Realistic cinematic period scene inside a vast, dim industrial warehouse stacked high with rolls of vibrant silk fabric, imported woolens, and wooden crates of scarce commodities. A stocky middle-aged man in a formal Soviet director suit is discreetly exchanging a thick envelope with an undercover black-market dealer under dim incandescent hanging bulbs. Dust motes floating in air, suspicious gazes, cold shadows, 1980s Uzbek SSR atmosphere. No readable text, no typography, no labels.",
    judgeAnswer: "Baza mudiri Saidjon Karimovning omborda defitsit (taqchil) mato va mollarni chayqovchilarga xufyona pora va naqd pul evaziga berishi.",
    episode: "Saidjon Karimovning jinoyat sxemasi va davlat mulkini talon-toroj qilishi.",
    keyClues: [
      "Katta ombordagi qimmatbaho shoyi va gazlama toylari",
      "Kostyumli amaldor va xufyona dallol o‘rtasidagi sirli qalin konvert",
      "Xira osma lampalar ostidagi shubhali nigohlar",
      "Sanoat qutilari va taqchil mollar uyumi"
    ],
    difficulty: 3,
    mood: "Jinoiy, tarang, qorong‘i"
  },
  {
    id: 5,
    title: "5-Sirli Rasm: To‘satdan bostirib kelgan qismat",
    prompt: "Dramatic historical film still, early morning courtyard of an affluent suburban villa. Several grim uniformed militia officers and plainclothes detectives arresting a stunned middle-aged Uzbek man in pajamas, locking steel handcuffs on his wrists. In the background near the veranda doorway, three terrified children and a weeping mother watch in horror through morning mist. Raw realistic emotions, cinematic blue morning tones. Strictly no text, no lettering, no badges with words.",
    judgeAnswer: "Militsiya va tergovchilar ertalab Saidjon Karimovning hovlisiga bostirib kirib, uni poraxo‘rlikda ayblab qo‘liga kishan solishi.",
    episode: "Karimovlar xonadonida kutilmagan tintuv va otaning hibsga olinishi epizodi.",
    keyClues: [
      "Hovlida qo‘liga po‘lat kishan solinayotgan uy egasi",
      "Sovet davri militsiya xodimlari va tergovchilar",
      "Ayvonda dahshatdan qotib qolgan yosh bolalar",
      "Ertalabki sovuq tuman va to‘satdan kelgan falokat muhiti"
    ],
    difficulty: 3,
    mood: "Fojiali, shok, qo‘rquv"
  },
  {
    id: 6,
    title: "6-Sirli Rasm: Uydan yulib olingan boyliklar",
    prompt: "Cinematic shot of a spacious living room stripped of warmth. Serious judicial bailiffs in uniform rolling up heavy ornate Bukhara and Persian wool carpets, carrying crystal chandeliers, and cataloging velvet upholstered furniture. A stunned boy in school uniform stands in the doorway watching his familiar luxurious world being dismantled into cardboard tags and clipboard logs. Dust on bare wooden floorboards, harsh daytime window light. No text, no symbols.",
    judgeAnswer: "Sud ijrochilari tomonidan Saidjon Karimov xonadonidagi barcha mol-mulk va qimmatbaho buyumlarning musodara (xatlov) qilinishi.",
    episode: "Uyni musodara qilish va bolalarning sarson bo‘lib qolishi epizodi.",
    keyClues: [
      "O‘rab olib chiqilayotgan qimmatbaho naqshinkor gilamlar",
      "Xatlovchilar tomonidan bo‘shatilayotgan hashamatli xona",
      "Eshikda qotib qolgan maktab kiyimidagi bola (Zafar)",
      "Yalang‘och pol va shafqatsiz rasmiy jarayon"
    ],
    difficulty: 3,
    mood: "Bo‘shliq, xonavayronlik, xo‘rlik"
  },
  {
    id: 7,
    title: "7-Sirli Rasm: Qizil mum va yopiq eshiklar",
    prompt: "Close cinematic view of an ornate carved Uzbek wooden doorway in a corridor, now crossed by a thick rough sealing tape stamped with a prominent red sealing wax stamp (plomba). Down the chilly hallway sits a small girl and two boys huddling on a worn single mat with a solitary tea kettle and one woolen blanket. Heavy atmospheric dust, dramatic chiaroscuro lighting, emotional depth. No words, no readable letters on wax.",
    judgeAnswer: "Karimovlar uyidagi xonalarning sud ijrochilari tomonidan davlat muhri bilan muhrlanishi va bolalarning dahlizda qunishib qolishi.",
    episode: "Musodara tugagach, eshiklarga plomba bosilib, bolalarning boshpanasiz qolishi.",
    keyClues: [
      "Eshikka tortilgan qizil mum muhr (plomba) va xatlov tasmasi",
      "Dahliz burchagidagi bitta ko‘rpachada qunishgan begunoh bolalar",
      "Bo‘m-bo‘sh sovuq yo‘lak",
      "Bitta choynak va yupun kiyimlar"
    ],
    difficulty: 4,
    mood: "Sovuq, yetimlik, alam"
  },
  {
    id: 8,
    title: "8-Sirli Rasm: So‘nggi isyon va olovli fido",
    prompt: "Visually striking, haunting cinematic scene, nighttime in a dark stone outhouse or shed. In the shadows sits an empty overturned wheelchair. A small metal canister of fuel lies on its side on the dirt floor, leaking wet dark fuel. Flickering ominous orange and golden fire reflections illuminate smoke filling the high ceiling, an unbearable tragedy of sacrifice. Emotional, dramatic masterwork cinematography. Strictly no graphic gore, no readable text, no letters.",
    judgeAnswer: "Nogiron Akbarning sharmandalik va or-nomus yukiga dosh berolmay, o‘z ustiga moy quyib o‘zini o‘tda yoqib yuborishi.",
    episode: "Akbarning fojiali o‘limi va oilaning eng dahshatli yo‘qotishi.",
    keyClues: [
      "To‘ntarilgan bo‘sh nogironlar aravachasi",
      "Yerga ag‘darilgan va to‘kilgan metall moy (kerosin) bidoni",
      "Xonani qoplagan tutun va aks etayotgan qizil alanga sharpasi",
      "Zulmatdagi olovli fojia izlari"
    ],
    difficulty: 4,
    mood: "Dahshatli, poklanish fojiasi, larzaga soluvchi"
  },
  {
    id: 9,
    title: "9-Sirli Rasm: Tungi trassadagi temir qabr",
    prompt: "Cinematic night scene on a winding mountain highway in central Asia, 1980s. A crumpled white vintage Soviet sedan GAZ-24 Volga overturned at the foot of a rocky ravine edge. Shattered tempered glass sparkles like diamonds across the asphalt in headlight beams of a distant passing truck. Smoke rising from the twisted radiator, solitary eerie quietness. Cinematic anamorphic lens flare, raw realistic tragedy. No text, no license plate characters.",
    judgeAnswer: "Zufarning otasidan tortib olingan oq 'Volga'ni o‘g‘irlab qochib, tungi xavfli trassada dahshatli avtohalokatda halok bo‘lishi.",
    episode: "Zufarning avtohalokati va o‘limi epizodi.",
    keyClues: [
      "Pachoqlangan va ag‘darilgan oq GAZ-24 'Volga'",
      "Tungi kimsasiz tog‘/shosse yo‘li va toshlar",
      "Asfaltdagi maydalangan shisha siniqlari va ko‘tarilayotgan tutun",
      "Buzilgan radiator va tumanli tun"
    ],
    difficulty: 3,
    mood: "O‘lim, kutilmagan intifo, sovuq tun"
  },
  {
    id: 10,
    title: "10-Sirli Rasm: Hibsxonadagi so‘nggi talvasa",
    prompt: "Haunting cinematic interior of a bleak 1980s Soviet prison medical ward or detention cell. Dim bare bulb casting greenish shadows on flaking whitewashed walls. An exhausted middle-aged woman lying motionless on an iron cot, one hand clutching tightly at her chest over her patterned Uzbek dress, eyes fixed blankly on the ceiling. Dropped on the concrete floor is a small broken glass medicinal vial. Somber, sterile, tragic. No text, no labels, no watermark.",
    judgeAnswer: "Yoqutxon Karimovaning tergov hibsxonasida ruhiy zarba va yurak xuruji oqibatida kutilmaganda vafot etishi.",
    episode: "Yoqutxonning qamoqdagi o‘limi va oilaning onasiz qolishi epizodi.",
    keyClues: [
      "Hibsxonadagi temir karavot va ko‘chgan devorlar",
      "Ko‘kragini (yuragini) changallab yotgan o‘zbek ayoli",
      "Yerga tushib singan dori shishasi",
      "Xira sovuq elektr chirog‘i ostidagi o‘lim sukunati"
    ],
    difficulty: 4,
    mood: "Yurak yetishmovchiligi, pushaymonsiz o‘lim"
  },
  {
    id: 11,
    title: "11-Sirli Rasm: Doska oldidagi xo‘rlik",
    prompt: "Authentic 1980s Central Asian middle-school classroom scene. At the blackboard stands a 14-year-old Uzbek boy with bowed head, gripping his frayed textbook, wearing a plain faded uniform. In the background, classmates at wooden double desks are whispering, snickering, and pointing judgmental fingers at him. Chalk dust in the air, afternoon classroom sun, palpable social ostracization. Absolutely no words or text on the blackboard.",
    judgeAnswer: "Zafarning maktabda otasining kirdikorlari fosh bo‘lgach, sinfdoshlari oldida 'o‘g‘rining bolasi' deb chetlatilishi va xo‘rlanishi.",
    episode: "Zafarning maktabdagi ruhiy azoblari va yolg‘izlanishi.",
    keyClues: [
      "Doska yonida boshini egib turgan o‘smir (Zafar)",
      "Partalarda masxara qilib qo‘l ko‘rsatayotgan sinfdoshlar",
      "1980-yillar sovet maktabi muhiti va yozuvsiz toza qora doska",
      "Yirtiq/eskirgan darslik va chuqur kamsitilish ifodasi"
    ],
    difficulty: 2,
    mood: "Xo‘rlik, ijtimoiy nafrat, ruhiy jarohat"
  },
  {
    id: 12,
    title: "12-Sirli Rasm: Ustozning halol sabog‘i",
    prompt: "Quiet, dignified interior scene. An elderly gentle Uzbek teacher with spectacles and traditional tubeteika sitting beside a young bedridden student. The teacher points kindly to a passage in an old book, his face radiant with wisdom and compassion. On the small bedside stool sits an untouched porcelain teapot with expensive delicacies, completely ignored by the teacher. Melancholic yet uplifting golden light. Strictly no text, no book titles, no lettering.",
    judgeAnswer: "Muallim Ataullo Isayevichning nogiron Akbarga halollik va kitobxonlik sabog‘ini berishi hamda oilaning harom dasturxoniga qo‘l tekkizmasligi.",
    episode: "Ataullo Isayevich va Akbarning ma’naviy suhbatlari epizodi.",
    keyClues: [
      "Ko‘zoynakli nuroniy muallim va to‘shakdagi yosh bemor",
      "Ochiq kitobdagi satrni ko‘rsatib turgan mehribon qo‘l",
      "Qo‘l urilmagan qimmatbaho choynak va dasturxon",
      "Yumshoq, ma’naviy iliq nur"
    ],
    difficulty: 3,
    mood: "Halollik, ma’naviyat, ustoz sadoqati"
  },
  {
    id: 13,
    title: "13-Sirli Rasm: Ko‘zlari munchoq qo‘g‘irchoq",
    prompt: "Heartbreaking close cinematic still of a fragile 8-year-old Uzbek girl sitting on a bare wooden floor in an empty cold room. Clutched tightly in her tiny trembling hands is a handmade rag doll dressed in scraps of bright traditional atlas silk, with shiny black glass beads for eyes. Big tear rolling down the little girl's pale cheek, eyes filled with haunting innocence and grief. Cinematic lighting, soft focus background. No text.",
    judgeAnswer: "Nigoraning bo‘m-bo‘sh sovuq xonada qo‘g‘irchog‘ini quchoqlab, onasi va otasini sog‘inib mungli ko‘z yosh to‘kishi.",
    episode: "Nigoraning yolg‘izligi, qo‘g‘irchog‘i bilan ovunishi va xastalanishi epizodi.",
    keyClues: [
      "Atlas parchasidan libos kiygizilgan latta qo‘g‘irchoq",
      "Munchoq ko‘zli o‘yinchoqni bag‘riga bosgan murg‘ak qizcha",
      "Bo‘sh sovuq xona va yalang‘och pol",
      "Kichik yuzdagi katta mungli yosh tomchisi"
    ],
    difficulty: 2,
    mood: "Beg‘uborlik, mung, fojia"
  },
  {
    id: 14,
    title: "14-Sirli Rasm: Qulflangan mehr",
    prompt: "Rainy dusk on a traditional Uzbek village street. A soaked 13-year-old boy in a worn jacket standing outside a massive locked iron gate of a prosperous relative's compound. The heavy padlock on the chain is locked. Through the ornate gate bars, warm cozy lights shine from the windows inside the house, but no one answers his knocking. Muddy road, relentless cold rain, profound isolation. No text, no symbols.",
    judgeAnswer: "Yetim qolgan Zafarning qarindoshlar (tog‘a, xola yoki amaki) darvozasiga boshpana so‘rab borishi va ularning eshikni qulflab yuz o‘girishi.",
    episode: "Qarindoshlarning xiyonati va yetimlardan qochishi epizodi.",
    keyClues: [
      "Yomg‘irda shalabbo bo‘lgan o‘smir darvoza oldida",
      "Zanjir bilan osilgan ulkan og‘ir qulf",
      "Ichkaridagi iliq chiroqlar va ochilmayotgan eshik",
      "Loy ko‘chadagi sovuq yakkalanish"
    ],
    difficulty: 3,
    mood: "Mehrsizlik, shafqatsizlik, xiyonat"
  },
  {
    id: 15,
    title: "15-Sirli Rasm: Hukm va panjara ortidagi viqorsizlik",
    prompt: "Somber Soviet court of law scene, 1980s. Behind a heavy wooden and steel prisoner dock cage sits a broken middle-aged man with sunken grey eyes and bowed head, wearing an unbuttoned rumpled suit. The crowded courtroom gallery is filled with indignant workers and spectators. In the front spectator bench, a solitary teenage son stares at his disgraced father with tear-filled, horrified eyes. High emotional tension, cinematic composition. No legible text on seals.",
    judgeAnswer: "Sud zalida Saidjon Karimovning 11 yilga qamoq jazosiga hukm qilinishi va zalda o‘tirgan o‘g‘lining otasiga so‘nggi boqishi.",
    episode: "Saidjon Karimov ustidan sud jarayoni va hukm o‘qilishi epizodi.",
    keyClues: [
      "Panjara ortida boshi egik, siniqqan sobiq amaldor ota",
      "G‘azabga to‘la gavjum sud zali",
      "Oldingi qatorda ko‘z yosh to‘kayotgan o‘spirin o‘g‘il (Zafar)",
      "1980-yillar sud muhiti"
    ],
    difficulty: 3,
    mood: "Qonuniy jazo, sharmandalik, sinish"
  },
  {
    id: 16,
    title: "16-Sirli Rasm: Tungi qochish",
    prompt: "Moody nocturnal cinematic still. A rustic house maid in traditional apron and headscarf hurriedly walking out through a side garden wicket gate into the dark street. In her hands she clutches a knotted fabric bundle (tugun) containing her personal belongings, casting a fearful backward glance at the darkened, silent manor behind her. Full moon casting long blue shadows, autumn wind blowing dead leaves. No text.",
    judgeAnswer: "Uy xizmatkori Lutfixonning oila xonavayron bo‘lgach, o‘z tugunchagini tugib, yetim bolalarni tashlab uydan yashirincha qochib ketishi.",
    episode: "Lutfixonning Karimovlar xonadonini tark etishi epizodi.",
    keyClues: [
      "Ro‘moli va peshbandi bilan xizmatkor ayol",
      "Qo‘lida tugilgan mato tugun (tugunchak)",
      "Qorong‘i hovli va qochayotgan shoshilinch nigoh",
      "Kuzgi sovuq barglar va oydin tun"
    ],
    difficulty: 4,
    mood: "Qochish, omonat sadoqat, bevafo dunyo"
  },
  {
    id: 17,
    title: "17-Sirli Rasm: Devor ostidagi maxfiy kovak",
    prompt: "Intense forensic detail shot. A uniformed investigator with a flashlight kneeling in a luxurious bedroom, carefully lifting a displaced wooden floorboard beside a baseboard. Inside the secret hollow cavity under the floor beams, bundles of high-denomination Soviet banknotes and glittering antique gold chervonets coins are exposed to the flashlight beam. Dust flying, gloves on hands, dramatic low-angle shot. Strictly no text, no numbers on currency.",
    judgeAnswer: "Tergovchilarning xonadondagi pol tagidan yoki devor kovagidan Saidjon va Yoqutxon yashirgan tilla tangalar va pul boyliklarini topishi.",
    episode: "Yashiringan boyliklarning fosh bo‘lishi va tintuv epizodi.",
    keyClues: [
      "Ko‘chirilgan pol taxtasi va fonus nuri",
      "Maxfiy kovakdagi tilla tangalar va pul bog‘lamlari",
      "Tergovchining qo‘lqopli qo‘llari",
      "Kutilmagan fosh etilish tarangligi"
    ],
    difficulty: 3,
    mood: "Fosh bo‘lish, yashirin boylik, jinoyat izlari"
  },
  {
    id: 18,
    title: "18-Sirli Rasm: To‘yxonadagi zargarona kibr",
    prompt: "Vibrant opulent 1980s Uzbek wedding celebration scene. An arrogant woman seated at a banquet table bedecked with crystal bowls and roasted meats, wearing a dazzling gold-threaded dress. Her wrists are stacked with numerous heavy gold bangles, fingers adorned with giant rings. She turns her head with disdain and superior mockery towards humble modest women sitting at the adjacent table. High key cinematic lighting, rich textures. No text, no words.",
    judgeAnswer: "Yoqutxon Karimovaning to‘ylarda boshdan-oyoq tillaga burkanib, boyligini ko‘z-ko‘z qilib boshqa ayollarga kibr bilan qarashi.",
    episode: "Yoqutxonning to‘ylardagi dabdabasi va kibrli tabiati tasviri.",
    keyClues: [
      "Qo‘llari tirsakkacha og‘ir tilla bilaguzuklarga to‘la ayol",
      "Zarchopon va qimmatbaho libos",
      "Dabdabali to‘y dasturxoni va billur idishlar",
      "Kamtarin ayollarga qaratilgan takabburona nigoh"
    ],
    difficulty: 3,
    mood: "Kibr, tamagirlik, soxta hashamat"
  },
  {
    id: 19,
    title: "19-Sirli Rasm: Taqdirni sotish sahnasi",
    prompt: "Cinematic medium shot in a smoky, panelled backroom office. An anxious desperate father (Saidjon) pushes a heavy silver car key with an embossed emblem across a polished mahogany desk toward a shrewd, cold-eyed official or broker in a grey suit. The father's hands tremble with humiliation, eyes begging for mercy. Tension, cigarette smoke hanging in warm lamplight. Strictly no text, no logos on the key.",
    judgeAnswer: "Saidjon Karimovning qamoqdan qutulish yoki jazoni yengillatish maqsadida Zufarga atalgan yangi 'Volga'ning kalitini boshqa odamga pora tariqasida topshirishi.",
    episode: "Mashinaning Saidjon tomonidan sotib yuborilishi/pora qilib berilishi.",
    keyClues: [
      "Stol ustida uzatilayotgan yaltiroq avtomobil kaliti",
      "Iltijo va qaltiroq bilan termulgan otaning yuzi",
      "Sovuqqon amaldor/dallolning hisobsiz nigohi",
      "Xira kabinet va chekilgan papiros tutuni"
    ],
    difficulty: 4,
    mood: "Xo‘rlik, qaltis qadam, xiyonat"
  },
  {
    id: 20,
    title: "20-Sirli Rasm: Tungi o‘g‘irlik va intiqom",
    prompt: "Thrilling film noir still, dark suburban driveway under moonlight. A frantic adolescent boy dressed in a dark jacket hot-wiring the ignition of a white vintage GAZ-24 Volga. Sparks briefly illuminate his tear-streaked, enraged young face as his hands frantically connect wires beneath the dashboard. Eyes darting fearfully towards the dark villa windows. Cinematic dynamic shadows, intense suspense. No text, no labels.",
    judgeAnswer: "Zufarning o‘ziga atalgan 'Volga' mashinasini yangi egasining uyidan kechasi yashirincha o‘g‘irlab qochish jarayoni.",
    episode: "Zufarning mashinani olib qochishi va fojia sari yo‘l olishi epizodi.",
    keyClues: [
      "Oq GAZ-24 mashinasi rul ostida simlarni ulayotgan o‘spirin",
      "Ko‘zlarida g‘azab va yosh porlagan yosh yuz (Zufar)",
      "Oy nuri ostidagi begona hovli va qorong‘i derazalar",
      "Uchqun va tarang tungi shoshilish"
    ],
    difficulty: 3,
    mood: "Jazava, qasos, fojeaga qadam"
  },
  {
    id: 21,
    title: "21-Sirli Rasm: Shisha to‘siq ortidagi pushaymon",
    prompt: "Deeply emotional cinematic prison visiting room scene, 1980s. A thick scratched glass partition divides a grey-haired, gaunt convict father in prison garb from his teenage son on the outside. Both hold heavy black telephone receivers to their ears, their free hands pressed against opposite sides of the cold glass. The father is weeping uncontrollably with agonizing regret, the boy's face frozen in grief. Realistic lighting, high contrast. No text, no letters.",
    judgeAnswer: "Saidjon Karimovning qamoqxonada o‘g‘li Zafar bilan uchrashuvi va oilaning fojialari oldida kech bo‘lgan cheksiz pushaymonligi.",
    episode: "Qamoqxonadagi uchrashuv va otaning so‘nggi ko‘z yoshlari epizodi.",
    keyClues: [
      "Shisha to‘siq va qora telefon go‘shaklari",
      "Sochlari oqargan, mahbus kiyimidagi ota",
      "Shishaga qo‘yilgan ikki titroq kaft",
      "O‘g‘ilning ko‘zlaridagi to‘xtovsiz mung"
    ],
    difficulty: 3,
    mood: "Pushaymonlik, kechikkan haqiqat, qayg‘u"
  },
  {
    id: 22,
    title: "22-Sirli Rasm: Muallimning mehribon kafti",
    prompt: "Touching cinematic medium shot outside an old school building. A gentle, dignified middle-aged Uzbek teacher placing a warm comforting hand on the trembling shoulder of a weeping teenage student whose head is slumped in despair. The teacher’s eyes show profound empathy and moral solidarity. Autumn leaves falling gently around them in soft golden afternoon light. Cinematic shallow depth of field. Strictly no text, no school signs.",
    judgeAnswer: "Halol o‘qituvchining maktabda hamma yuz o‘girgan paytda Zafarga insoniy dalda berishi va uni himoya qilishi.",
    episode: "Ustozning Zafarni yupatishi va unga insoniylik ko‘rsatishi epizodi.",
    keyClues: [
      "O‘smirning yelkasiga qo‘yilgan mehribon ustoz qo‘li",
      "Boshini egib ko‘z yosh to‘kayotgan o‘quvchi",
      "To‘kilayotgan kuz yaproqlari",
      "Maktab devori yonidagi iliq insoniylik lahzasi"
    ],
    difficulty: 2,
    mood: "Mehr, taskin, ma’naviy ko‘mak"
  },
  {
    id: 23,
    title: "23-Sirli Rasm: Bo‘sh xonadagi sharpalar",
    prompt: "Haunting wide-angle cinematic shot of a stripped, empty grand parlor. Sunbeams cut through dusty air, highlighting lighter rectangular patches on the walls where large expensive Persian rugs once hung. On the barren floor in the center of the vast desolate room sits a lone teenage boy hugging his knees, staring blankly at the emptiness. High emotional resonance, cinematic scale. No text, no posters.",
    judgeAnswer: "Musodaradan keyin butunlay bo‘shab qolgan uyda Zafarning yakka o‘zi o‘tirib, o‘tgan dabdabali kunlar va oila fojeasi haqida o‘yga tolishi.",
    episode: "Hamma ketgach, xarobaga aylangan uyda Zafarning yolg‘iz qolishi.",
    keyClues: [
      "Devorda gilamlar yechib olinganidan qolgan ochiq rangli to‘rtburchak izlar",
      "Bo‘sh ulkan xona o‘rtasida tizzasini quchoqlab o‘tirgan bola",
      "Chang bosgan havoga tushgan quyosh nurlari",
      "Butkul huvillab qolgan hashamatli qasr"
    ],
    difficulty: 3,
    mood: "Bo‘shliq, yo‘qotish, ruhiy sukunat"
  },
  {
    id: 24,
    title: "24-Sirli Rasm: G‘aribona tuproq tepasida",
    prompt: "Poignant cinematic landscape at sunset in an old Uzbek cemetery. A fresh, simple earthen mound without an expensive marble headstone, only a modest wooden marker. Kneeling by the grave is a solitary 14-year-old boy in a dusty jacket, running the dry earth between his fingers, tears falling into the dirt. Distant clay walls of the cemetery, dramatic dusky purple sky. No text, no engraved letters on marker.",
    judgeAnswer: "Zafarning bevaqt nobud bo‘lgan jigarining (Akbar, Zufar yoki Nigora) yangi qabri tepasida yolg‘iz qolib yig‘lashi.",
    episode: "Jigarlarning dafn etilishi va Zafarning cheksiz motami.",
    keyClues: [
      "Oddiy, xokisor yangi tuproq qabr",
      "Qabr boshida tiz cho‘kib tuproq tutgan o‘spirin",
      "Quyosh botayotgan g‘amgin osmon",
      "Eski qabriston va cheksiz motam"
    ],
    difficulty: 3,
    mood: "Motam, fojiaviy yakun, yolg‘izlik"
  },
  {
    id: 25,
    title: "25-Sirli Rasm: Halol nonning ta’mi",
    prompt: "Warm, poignant cinematic street market scene. An elderly Uzbek grandmother in a traditional quilted chapan and white headscarf standing behind a humble wooden table of fresh round tandir flatbreads (lepyoshka). With a gentle, maternal smile she extends a warm, steaming golden bread to a hungry, gaunt boy whose eyes light up with tears of gratitude. Dust motes, morning sun, genuine human warmth. No text, no market price tags.",
    judgeAnswer: "Hamma boy qarindoshlar yuz o‘girganida, bozordagi oddiy, mehnatkash nonvoy onaxonning och qolgan Zafarga issiq non uzatishi.",
    episode: "Oddiy halol insonlarning Zafarga ko‘rsatgan saxovati va daldasi.",
    keyClues: [
      "Tandir noni uzatayotgan nuroniy onaxon",
      "Issiq nondan ko‘tarilayotgan yengil bug‘",
      "Och va xo‘rlangan o‘smirning minnatdor ko‘zlari",
      "Bozor chetidagi oddiy o‘zbek muhiti"
    ],
    difficulty: 2,
    mood: "Mehr, halol luqma, insoniylik"
  },
  {
    id: 26,
    title: "26-Sirli Rasm: Xazon bosgan bo‘sh aravacha",
    prompt: "Poetic, symbolic cinematic outdoor still in a desolate autumn garden courtyard. Under an old barren walnut tree stands an abandoned, antique metal wheelchair, its leather seat covered in fallen golden and brown dried leaves. Gentle autumn wind rustles the foliage around it, soft overcast melancholic lighting. Stillness, quiet sorrow, profound emptiness. Strictly no text, no symbols.",
    judgeAnswer: "Akbarning vafotidan so‘ng hovlida qarovsiz qolgan, ustiga sarg‘aygan xazonlar to‘kilgan bo‘sh nogironlar aravachasi.",
    episode: "Akbarning o‘limidan keyingi hovli manzarasi va ramziy motam.",
    keyClues: [
      "Hovlida bo‘sh qolgan nogironlar aravachasi",
      "O‘rindiq ustiga to‘kilgan sarg‘aygan kuz xazonlari",
      "Yalang‘och yong‘oq daraxti",
      "Sukunat va o‘tib ketgan inson xotirasi"
    ],
    difficulty: 3,
    mood: "Ramziy, elegiya, fojiaviy xotira"
  },
  {
    id: 27,
    title: "27-Sirli Rasm: Kasalxona karavotidagi intizorlik",
    prompt: "Deeply emotional vintage 1980s pediatric hospital ward still. A frail little girl with feverish flushed cheeks lying under a coarse white blanket. Her big dark sorrowful eyes look longingly at the open doorway, waiting for parents who will never come. On the nightstand beside her sits a solitary glass of water and a small fabric doll. Soft cold daylight through tall hospital window. Strictly no text, no charts with writing.",
    judgeAnswer: "Nigoraning kasalxonada og‘ir dard bilan yotib, ota-onasining yo‘liga intizor bo‘lib ko‘z tikishi va so‘nggi nafaslari.",
    episode: "Nigoraning kasalxonada vafot etishi epizodi.",
    keyClues: [
      "Kasalxona karavotidagi nozik murg‘ak qizcha",
      "Ochiq eshikka intizor boqib turgan mung to‘la katta ko‘zlar",
      "Tumbichkadagi latta qo‘g‘irchoq va bir stakan suv",
      "Sovuq shifoxona muhiti"
    ],
    difficulty: 3,
    mood: "Intizorlik, o‘lim yoqasi, yurakni ezuvchi"
  },
  {
    id: 28,
    title: "28-Sirli Rasm: Hashamatli qasrning kibrli oqshomi",
    prompt: "Lavish evening party scene in an opulent 1980s villa courtyard illuminated by strung festive incandescent lights. Tables overflowing with roasted meats, crystal decanters of spirits, imported treats, and bowls of black caviar. Arrogant, well-fed officials in suits laughing boisterously, toasting their host. In the shadows behind the pillar, a quiet thoughtful boy watches the extravagance with unexpressed dread. Cinematic period drama. No text, no bottle labels.",
    judgeAnswer: "Oila hali qulamasidan oldin Saidjon Karimov uyida o‘tkazilgan dabdabali bazm va harom pullar ustiga qurilgan soxta do‘stlik.",
    episode: "Oila boy bo‘lgan paytdagi dabdabali mehmondorchiliklar tasviri.",
    keyClues: [
      "Noz-ne’matlar, qora ikra va billur qadahlar to‘kilgan ziyofat dasturxoni",
      "Qah-qah urib kulayotgan amaldor mehmonlar",
      "Ustun ortidan xavotir bilan qarab turgan yosh bola",
      "Kechki dabdabali chiroqlar"
    ],
    difficulty: 3,
    mood: "Hoy-havas, kibr, fojia oldidan to‘kinlik"
  },
  {
    id: 29,
    title: "29-Sirli Rasm: Otaga yozilgan javobsiz maktub",
    prompt: "Atmospheric intimate still of a wooden study table at night lit by a single desk lamp. A teenager's hand holding an ink pen over a rough sheet of paper with smeared wet tear drops on the paper surface. Beside the paper lies an old family photograph showing four smiling children with their parents in happier times. Moody shadows, heavy emotional silence. Absolutely no legible letters or readable text on the paper.",
    judgeAnswer: "Yolg‘iz qolgan Zafarning qamoqdagi otasiga pushaymon va dard to‘la maktub yozishi hamda o‘tgan baxtli kunlar suratiga qarab yig‘lashi.",
    episode: "Zafarning xatlar yozishi va o‘tmish bilan yuzlashishi.",
    keyClues: [
      "Stol chirog‘i ostidagi yosh tomgan qog‘oz",
      "Siyohli qalam ushlagan titroq qo‘l",
      "Stol chetidagi baxtli davrlar aks etgan eski oilaviy fotosurat",
      "Tungi yolg‘izlik"
    ],
    difficulty: 3,
    mood: "Iztirob, kechmish xotirasi, yolg‘izlik"
  },
  {
    id: 30,
    title: "30-Sirli Rasm: Mungli ko‘zlar — Asar yakuni",
    prompt: "An unforgettable, evocative cinematic extreme close-up of a 15-year-old Uzbek boy's face (Zafar). His eyes are deep, luminous, and carrying a bottomless weight of sorrow, mature resilience, and profound moral awakening beyond his tender years. Rain or tear tracks faintly visible on his sun-tanned cheek, windswept dark hair. Background is an out-of-focus vast Uzbek horizon under dawn light, symbolizing rebirth through suffering. Cinematic 70mm masterpiece portrait. No text, no logos.",
    judgeAnswer: "Asarning bosh ramzi va yakuni — butun oilasidan ayrilib, hayotning achchiq sabog‘ini olgan Zafarning ko‘zlaridagi abadiy 'MUNGLI KO‘ZLAR'.",
    episode: "Asarning falsafiy xulosasi va kulminatsion yakuniy ramzi.",
    keyClues: [
      "O‘smirning ko‘zlaridagi cheksiz chuqur g‘am va ulg‘aygan nigoh",
      "Yuzdagi ko‘z yosh va shamol izi",
      "Orqa fondagi tonggi ufq nuri",
      "Halollik va ruhiy poklanish bilan qilingan so‘nggi qarash"
    ],
    difficulty: 1,
    mood: "Katarsis, mung, falsafiy xulosa, mangu ibrat"
  }
];
