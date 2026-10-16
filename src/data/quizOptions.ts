import { QUESTIONS_50 } from './questions50';

export interface QuizOptionItem {
  questionId: number;
  options: string[];
  correctIndex: number; // 0, 1, 2, or 3
}

// Pre-crafted options for the interactive competition mode
export const QUIZ_OPTIONS: Record<number, { options: string[]; correctIndex: number }> = {
  1: {
    options: [
      "Oila uchun eng katta faxr sanalgan yangi oq 'Volga' (GAZ-24) avtomashinasidan",
      "Shahardagi uch xonali hashamatli yangi xonadondan",
      "Yoqutxonning sandiqdagi barcha tilla tangalari va brilliantlaridan",
      "Qishloqdagi bog‘-hovli va katta chorva mollaridan"
    ],
    correctIndex: 0
  },
  2: {
    options: [
      "Otasiga har kuni janjal qilib, uydan ketib qolish bilan qo‘rqitgan",
      "Otasining harom pullariga chet elda davolanish va qimmat dori olishdan qat’iy bosh tortgan",
      "Uyga kelgan barcha qimmatbaho buyumlarni ko‘chaga uloqtirib yuborgan",
      "Otasining ustidan to‘g‘ridan-to‘g‘ri militsiyaga ariza yozgan"
    ],
    correctIndex: 1
  },
  3: {
    options: [
      "Qarindoshlarning uni qaramog‘iga olishdan bosh tortishi",
      "Ota-onasining jinoyatlari el oldida fosh bo‘lib, el nafrati va or-nomus yukiga dosh bera olmasligi",
      "Uyning barcha mebellari va aravachasining musodara qilib olib ketilishi",
      "Ustozi Ataullo Isayevichning darsga kelmay qo‘ygani"
    ],
    correctIndex: 1
  },
  4: {
    options: [
      "Sud zalida sudyaning 15 yillik hukmini eshitgach, hushidan ketib",
      "Vaqtinchalik hibsxonada qattiq ruhiy zarba va yurak xuruji (infarkt) tufayli",
      "O‘z uyining yerto‘lasida yashirinib yotgan paytda zaharlanish oqibatida",
      "Kasalxonada og‘ir jarrohlik amaliyotidan so‘ng"
    ],
    correctIndex: 1
  },
  5: {
    options: [
      "Mashinani yangi egasining uyidan o‘g‘irlab qochadi va trassada avtohalokatda halok bo‘ladi",
      "Mashinani bozorga olib borib arzon narxga sotib yuboradi",
      "Mashinani daryoga cho‘ktirib, o‘zi boshqa viloyatga qochib ketadi",
      "Mashina egasi bilan urishib, militsiya tomonidan qo‘lga olinadi"
    ],
    correctIndex: 0
  },
  6: {
    options: [
      "Ataullo Isayevich",
      "Rahmonberdi domla",
      "Sobirjon Muallim",
      "Inomjon Hakimov"
    ],
    correctIndex: 0
  },
  7: {
    options: [
      "Zulfiyaxon",
      "Lutfixon",
      "Sanobar xola",
      "Qumrixon"
    ],
    correctIndex: 1
  },
  8: {
    options: [
      "Tuman maorif bo‘limi mudiri sifatida maktab pullarini o‘zlashtirgan",
      "Katta oziq-ovqat va sanoat mollari bazasi bosh omborchisi bo‘lib, taqchil mollarni chayqovchilarga pullagan",
      "Avtobaza boshlig‘i bo‘lib, yoqilg‘i va ehtiyot qismlarni yashirgan",
      "Shahar qurilish tresti boshlig‘i bo‘lib, qurilish materiallarini noqonuniy sotgan"
    ],
    correctIndex: 1
  },
  9: {
    options: [
      "Qimmatbaho chet el gilamlarini xorijdan noqonuniy olib kirish",
      "Noqonuniy tillafurushlik, tilla tangalar va taqinchoqlar chayqovchiligi",
      "Davlat magazinidan qimmatbaho kiyim-kechaklarni olib qochish",
      "Katta foizga qarz tarqatish (sudxo‘rlik)"
    ],
    correctIndex: 1
  },
  10: {
    options: [
      "5 yil",
      "8 yil",
      "11 yil",
      "15 yil"
    ],
    correctIndex: 2
  },
  11: {
    options: [
      "Faqat uydagi qimmatbaho seyf va avtomobil kalitlarini",
      "Barcha qimmatbaho gilamlar, chet el mebellari, idishlar va qimmatbaho buyumlarni",
      "Faqat Saidjon Karimovning ish kiyimlarini va hujjatlarini",
      "Uydagi hovli darvozasi va oshxona anjomlarini"
    ],
    correctIndex: 1
  },
  12: {
    options: [
      "Qo‘g‘irchoqlariga ipak va atlas parchalardan libos tikish bilan",
      "Musiqa asboblarini chalish va rasm chizish bilan",
      "Akasi bilan shaxmat o‘ynash va kitob o‘qish bilan",
      "Hovlidagi qushlarga don berish va tomorqa parvarishi bilan"
    ],
    correctIndex: 0
  },
  13: {
    options: [
      "Bolalarni o‘z qaramog‘iga olib, ularga mehr ko‘rsatishadi",
      "Yetimlardan butunlay yuz o‘girib, eshiklarini qulflab, ularni ko‘chada qoldirishadi",
      "Saidjonning qamoqdan chiqishi uchun pul to‘plashadi",
      "Bolalarni qishloqdagi maktab-internatga joylashtirib kelishadi"
    ],
    correctIndex: 1
  },
  14: {
    options: [
      "Kamtarin, hamma bilan teng munosabatda bo‘lgan",
      "Kibrli, o‘zini hammadan ustun qo‘yuvchi, pul va kiyimlarni ko‘z-ko‘z qiluvchi",
      "Darslarni eng a’lo baholarga o‘qib, darsdan keyin kutubxonada o‘tiruvchi",
      "O‘qituvchilarga sovg‘a berishdan uyalib, odamovilik qiluvchi"
    ],
    correctIndex: 1
  },
  15: {
    options: [
      "Ilgari unga xushomad qilib orqasidan yurgan soxta o‘rtoqlarining masxarasi va yuz o‘girishi",
      "Maktab qorovulining uni ichkariga kiritmasligi",
      "Boshqa maktab o‘quvchilarining uni kaltaklashi",
      "Sinf rahbarining uni sinfdan haydab yuborishi"
    ],
    correctIndex: 0
  },
  16: {
    options: [
      "Akbarning ustozi Ataullo Isayevich va Akbarning ma’naviy vasiyatlari",
      "Katta amakisining bergan daldalari",
      "Tergovchi militsiya xodimining unga bergan maslahatlari",
      "Mahalla oqsoqolining xonadonga yordami"
    ],
    correctIndex: 0
  },
  17: {
    options: [
      "Saidjon Karimovning qamoqdagi iqrori orqali",
      "Sherik chayqovchilarning sotishi va devor/pol osti kovaklarining tekshirilishi orqali",
      "Xizmatkor Lutfixonning militsiyaga yashirincha xat yozishi orqali",
      "Bozordagi tasodifiy xaridorni qo‘lga olish orqali"
    ],
    correctIndex: 1
  },
  18: {
    options: [
      "Qattiq ruhiy zarba va xastalikdan, onasini chaqirgancha bevaqt ko‘z yumadi",
      "Boshqa viloyatdagi bolalar uyiga qochib ketadi",
      "Kasalxonada tuzalib, xolasining uyiga yashashga ketadi",
      "Zafar bilan birga katta shaharga ish izlab ketadi"
    ],
    correctIndex: 0
  },
  19: {
    options: [
      "Nega mashinani ertaroq sotib yubormaganidan",
      "Farzandlariga halol non yedirmay, o‘tkinchi boylik deb oilani xazon qilganidan",
      "Tergov paytida sheriklarini sotib qo‘yganidan",
      "Uydagi tillalarni ishonchsiz joyga berib qo‘yganidan"
    ],
    correctIndex: 1
  },
  20: {
    options: [
      "Qo‘shnilar bilan doimiy urishish odatini",
      "To‘ylarda kimo‘zarga kiyinish, takabburlik va cheksiz ochko‘zlik illatini",
      "Farzandlariga dars qildirib qo‘ymaydigan beparvolikni",
      "Eridan pul so‘rashdan uyalmaslik illatini"
    ],
    correctIndex: 1
  }
};

// Fallback helper to provide 4 realistic options for any of the 50 questions
export function getQuizOptionsForQuestion(questionId: number, correctAnswer: string): { options: string[]; correctIndex: number } {
  if (QUIZ_OPTIONS[questionId]) {
    return QUIZ_OPTIONS[questionId];
  }

  // Curated realistic distractors
  const genericDistractors = [
    "Uydagi barcha mol-mulk qarindoshlar o‘rtasida o‘zaro teng taqsimlab olinadi",
    "Tergov idoralarining taklifi bilan ish boshqa instansiyaga ko‘chirilib qisqartiriladi",
    "Hech qanday moddiy yoki ruhiy zarba bo‘lmasdan, voqea ijobiy yechim topadi",
    "Voqea butunlay tasodifiy kechib, qahramonlar bu jarayonda ishtirok etmaydi",
    "Oila boshlig‘ining tanish-bilishlari aralashuvi bilan jazoni yengillatishga erishiladi",
    "Barcha ayb faqat kichik ombor ishchilariga yuklatilib, Saidjon ozodlikda qoladi"
  ];

  const distractors = genericDistractors.slice(0, 3);
  const options = [correctAnswer, ...distractors];
  // Stable pseudo-random shuffle based on questionId
  const correctIndex = (questionId * 3) % 4;
  // Swap
  const temp = options[0];
  options[0] = options[correctIndex];
  options[correctIndex] = temp;

  return { options, correctIndex };
}
