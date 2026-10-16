export interface FinalBossQuestionItem {
  id: number;
  title: string;
  points: number;
  question: string;
  expectedKeyPoints: string[];
  fullMasterAnswer: string;
  deepAnalysis: string;
  judgeRubric: {
    factualAccuracy: number;
    psychologicalDepth: number;
    episodesConnection: number;
  };
}

export const FINAL_BOSS_5: FinalBossQuestionItem[] = [
  {
    id: 1,
    title: "1-Final Boss: 'Taqdir zanjiri — Avtomobil va uch qurbonlik'",
    points: 100,
    question: "Oq 'Volga' (GAZ-24) avtomobili asarda shunchaki qimmatbaho buyum emas, balki butun boshli fojialar katalizatori bo‘lib xizmat qiladi. Ushbu avtomobil Karimovlar oilasidagi qaysi UCHTA asosiy fojiaga qanday qilib to‘g‘ridan-to‘g‘ri yoki bilvosita sababchi bo‘ldi? Sabab → Voqea → Oqibat zanjirini to‘liq ochib bering.",
    expectedKeyPoints: [
      "1. Saidjon Karimovning boylik kibri: O‘g‘liga mashina olib berib, uni erka va qonunga bo‘ysunmas qilib tarbiyalagani.",
      "2. Saidjonning o‘z jazosini yengillatish uchun mashinani pora/tovon qilib berib yuborishi, bu orqali Zufarning ruhiyatiga tuzatib bo‘lmas zarba berishi.",
      "3. Zufarning mashinani o‘g‘irlab qochib, avtohalokatda fojiali halok bo‘lishi va otasining qamoqda bu xabarni eshitib ruhiy sinishi."
    ],
    fullMasterAnswer: "Birinchidan, 'Volga' Zufarga berilganda oilada kibr va boshqalardan ustunlik kayfiyatini avjiga chiqardi. Ikkinchidan, ota qamoq xavfi tug‘ilganda o‘g‘lining his-tuyg‘ularini hisobga olmay, o‘z jonini asrash uchun mashinani begonalarga berib yubordi — bu ota va o‘g‘il o‘rtasidagi soxta mehrni fosh qildi. Uchinchidan, alamzada Zufar mashinani o‘g‘irlab qochib o‘lim topdi. Ushbu o‘lim Saidjon Karimovning qamoqdagi so‘nggi umidlarini parchalab tashladi. Shunday qilib, mashina oilaning kibri, xiyonati va jismoniy halokatining temir zanjiriga aylandi.",
    deepAnalysis: "Hudoyberdi To‘xtaboyev moddiy buyumlarning inson qalbini qanday qilib yeb bitirishi va soxta obro‘ timsollarining qanday qilib qonli fojiaga aylanishini ushbu 'Volga' orqali ochib bergan.",
    judgeRubric: {
      factualAccuracy: 35,
      psychologicalDepth: 35,
      episodesConnection: 30
    }
  },
  {
    id: 2,
    title: "2-Final Boss: 'Ikki qutb — Akbar va Yoqutxonning ruhiy to‘qnashuvi'",
    points: 100,
    question: "Asarda nogiron Akbar va uning onasi Yoqutxon Karimova ruhiyat va axloq jihatidan mutlaqo qarama-qarshi ikki qutbni tashkil etadi. Akbarning tanasi nogiron, ammo qalbi pok; Yoqutxonning esa tanasi sog‘lom, ammo qalbi 'nogiron' edi. Asardagi qaysi aniq epizodlarda bu ikki xarakterning ichki fojiasi va yakuniy o‘limlari bir-biriga muqobil (kontrast) qilib qo‘yilgan?",
    expectedKeyPoints: [
      "Akbarning ota-onasining harom puliga chet elda davolanishdan va dori olishdan bosh tortishi, Yoqutxonning esa aksincha qanoatsiz tillafurushligi.",
      "Ataullo Isayevich darsga kelganida onaning muallimga kibr bilan qarashi va Akbarning ustoziga chuqur ehtirom ko‘rsatishi.",
      "O‘limlar kontrasti: Akbar o‘z vijdoni oldidagi or-nomus uchun o‘zini olovda poklash yo‘lini tanladi; Yoqutxon esa qamoqxona karavotida ham boyliklari va tortib olingan tillalari dardida yurak xurujidan vafot etdi."
    ],
    fullMasterAnswer: "Muallif Akbar va Yoqutxon obrazlari orqali insonning asl qiymati uning jismoniy holatida emas, balki qalbining tozaligida ekanligini ko‘rsatadi. Akbar nogironlar aravachasida o‘tirib ham halol luqma talab qildi, otasining pulini harom deb bildi. Yoqutxon esa to‘kin-sochinlikda yashab ham to‘ymadi, tillaga sig‘indi. Ularning intihosi ham shu qarama-qarshilikni ko‘rsatadi: Akbar jamiyat oldidagi sharmandalikni ko‘tara olmay or-nomus qurboni bo‘ldi; Yoqutxon esa yo‘qotilgan oltinlar qayg‘usida qamoqda yuragi yorilib jon berdi.",
    deepAnalysis: "Bu asarning axloqiy markazi bo‘lib, moddiy boylikka sig‘inish inson ruhiyatini qay darajada tubanlashtirishi, vijdonga sodiqlik esa jismoniy zaiflik ustidan qanday ruhiy g‘alaba qozonishini isbotlaydi.",
    judgeRubric: {
      factualAccuracy: 35,
      psychologicalDepth: 35,
      episodesConnection: 30
    }
  },
  {
    id: 3,
    title: "3-Final Boss: 'Alternativ tahlil — Agar Saidjon Karimov fosh bo‘lmaganida...'",
    points: 100,
    question: "Gipoteza: 'Agar Saidjon Karimov o‘sha kuni qo‘lga olinmaganida va uning jinoiy ishlari fosh bo‘lmay yana 10 yil davom etganida, Karimovlar oilasining taqdiri qanday kechar edi?' Asardagi qahramonlarning xarakter mantiqiga va psixologiyasiga tayangan holda muqobil kelajakni tahlil qiling.",
    expectedKeyPoints: [
      "Zufarning yanada bezori va jinoyatchi kimsaga aylanishi, chunki jazolanmaslik hissi uni boshqa og‘ir jinoyatlarga undar edi.",
      "Zafarning otasi singari kibrli, xalq dardidan yiroq, jamiyatga zarar keltiruvchi ikkinchi avlod poraxo‘riga aylanishi.",
      "Akbarning ichki ruhiy azoblari chuqurlashib, oilaning harom girdobida yashashga chiday olmay baribir fojiali yakun topishi.",
      "Oila ichki tomondan ma’naviy chirib, farzandlar o‘rtasidagi mehr butunlay o‘lib, moddiy boylik talashuvchi yirtqichlarga aylanishi."
    ],
    fullMasterAnswer: "Asar mantiqiga ko‘ra, jazolanmaslik oilani asrab qolmas, balki ularning ma’naviy halokatini yuz baravar chuqurlashtirgan bo‘lardi. Zufar o‘zining jazolanmasligiga ishonib, ehtimol birovning qonini to‘kkan bo‘lardi; Zafar otasining harom pullarini sarflab, kibrli va hissiz kimsaga aylanar edi; Akbar esa baribir bu munofiqlik botqog‘ida yashay olmasdi. Qonuniy jazo moddiy xonavayronlik olib kelgan bo‘lsa-da, u Zafarni uyg‘otdi va unga o‘z hayotini halollik poydevoriga qurish imkonini berdi.",
    deepAnalysis: "Hudoyberdi To‘xtaboyevning falsafasi shundaki: harom boylik o‘z ichidan chirishga mahkum. Tashqi fosh bo‘lish shunchaki muqarrar fojiani tezlashtirdi xolos.",
    judgeRubric: {
      factualAccuracy: 30,
      psychologicalDepth: 40,
      episodesConnection: 30
    }
  },
  {
    id: 4,
    title: "4-Final Boss: 'Qarindoshlik va jamiyat sinovi — Soxta mehr anatomiyasi'",
    points: 100,
    question: "Asarda Karimovlar xonadoni boy-badavlat bo‘lgan paytda ularning atrofiga yig‘ilgan qarindoshlar, do‘stlar va hamkasblar xulq-atvori bilan fojia ro‘y bergandan keyingi munosabatlarni qiyoslang. Yozuvchi bu orqali o‘sha davr jamiyatidagi qanday illatlarni va soxta munosabatlar mexanizmini ochib bergan?",
    expectedKeyPoints: [
      "Boylik paytidagi xushomadgo‘ylik: sovg‘a-salomlar, bolalarni erkalash, to‘rlarga o‘tqazish, doimiy takliflar.",
      "Kulfat tushgandagi xiyonat: eshiklarni qulflash, bolalarga non bermaslik, 'bizni ham sudga tortishadi' deb qo‘rqish bahonasida yetimlarni ko‘chaga haydash.",
      "Lutfixon xizmatkor va qarindoshlarning o‘xshash munosabati — manfaat yo‘qolgan joyda qadriyat ham yo‘qolishi.",
      "Muallifning xulosasi: boylik do‘st orttirmaydi, u faqat xushomadgo‘y manfaatparastlarni to‘playdi; chin do‘st esa kulfatda bilinadi."
    ],
    fullMasterAnswer: "Muallif qarindoshlar timsolida insoniy munosabatlarning mol-dunyoga bog‘lanib qolganini shafqatsizlarcha fosh etadi. Saidjon bosh omborchi ekanida uning ostonasidan odam arimasdi, qarindoshlar bolalarning ko‘nglini olishga urinardi. Ammo sud va musodara boshlanishi bilan bu 'mehr' bir kunda muzlab qoldi. Tog‘alar va amakilar o‘z amallaridan qo‘rqib, eshiklarini qulflab oldi. Hattoki murg‘ak Nigora va Zafarga bir kosa issiq ovqat ravo ko‘rilmadi. Bu holat jamiyatda insoniylikdan ko‘ra mol-dunyo ustun bo‘lib qolgan davr illatini yaqqol ko‘rsatadi.",
    deepAnalysis: "Bu epizodlar asardagi eng og‘ir ruhiy zarbalar bo‘lib, bolalarga tashqi dunyoning naqadar shafqatsiz ekanligini anglatdi.",
    judgeRubric: {
      factualAccuracy: 35,
      psychologicalDepth: 35,
      episodesConnection: 30
    }
  },
  {
    id: 5,
    title: "5-Final Boss: 'Mungli ko‘zlar fenomenining g‘oyaviy va badiiy yechimi'",
    points: 100,
    question: "Asar boshidan oxirigacha 'ko‘zlar' detalining evolyutsiyasini kuzating: Zafarning ilk sahifalardagi kibrli ko‘zlaridan tortib, Akbarning mungli ko‘zlari, Nigoraning intizor ko‘zlari va nihoyat yakunda Zafarda mujassamlashgan 'Mungli ko‘zlar'gacha. Yozuvchi bu obraz orqali qanday umuminsoniy g‘oyani ifodalagan va nega asar fojia bilan tugasa ham unda umid nuri saqlanib qoladi?",
    expectedKeyPoints: [
      "Ko‘zlar evolyutsiyasi: Kibr va beparvolik (boshida) → Hayrat va qo‘rquv (musodarada) → Sonsiz mung va yetimlik (fojialardan so‘ng) → Donolik va halollik ahdi (oxirida).",
      "Akbar va Nigoraning mungli ko‘zlari Zafarga meros bo‘lib o‘tishi: u endi faqat o‘zi uchun emas, nobud bo‘lgan jigarlari nomidan ham yashashi shartligi.",
      "Umid nuri: Garchi uchta farzand nobud bo‘lib, ota qamalgan bo‘lsa-da, Zafar ruhiy jihatdan poklanib, xatolardan xulosa chiqardi va halol mehnat yo‘lini tanladi.",
      "Yozuvchining asosiy xulosasi: Harom boylik inson naslini quritishi mumkin, ammo tavba va haqiqiy ma’naviyat xalqning kelajagini asrab qoladi."
    ],
    fullMasterAnswer: "Asarning badiiy kuchi 'ko‘zlar' metaforasida mujassamlashgan. Boshida Zafarning ko‘zlarida boylik kibri, erkalik va manmanlik porlardi. Biroq fojialar boshlangach, uning nigohi o‘zgardi. Akbarning or-nomus o‘tida yongan ko‘zlari, Nigoraning onasini kutib so‘ngan mungli nigohi Zafarning qalbida jamlandi. Asar yakunida Zafarning ko‘zlaridagi 'mung' shunchaki qayg‘u emas, balki boshdan kechirilgan azoblar evaziga erishilgan ulkan hayotiy donolik, or-nomus va halol yashashga bo‘lgan qasamyoddir. Zafar o‘z jigarlarining qurbonligi evaziga hushyor tortdi. Aynan mana shu ruhiy uyg‘onish fojia ichidagi umid nuri hisoblanadi.",
    deepAnalysis: "Ushbu savol roman g‘oyasining cho‘qqisi bo‘lib, kitobxonni o‘z hayotiga, farzand tarbiyasiga va luqmasining halolligiga teran nazar tashlashga majbur qiladi.",
    judgeRubric: {
      factualAccuracy: 35,
      psychologicalDepth: 35,
      episodesConnection: 30
    }
  }
];
