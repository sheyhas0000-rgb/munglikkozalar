export interface HardestQuestionItem {
  id: number;
  question: string;
  answer: string;
  evidence: string;
  difficulty: 5;
  secretDetail: string;
  category: string;
}

export const HARDEST_10: HardestQuestionItem[] = [
  {
    id: 1,
    question: "Ataullo Isayevich nogiron Akbarga dars berish uchun kelganida, Yoqutxon Karimova (ona) muallimga nisbatan qanday takabburona munosabatda bo‘lardi va muallim bunga qanday javob qaytarardi?",
    answer: "Yoqutxon muallimni kambag‘al, arzimas oylikka ishlaydigan odam deb mensimay, unga qimmatbaho choy va noz-ne’matlar bilan kibrini ko‘rsatmoqchi bo‘lardi; Ataullo Isayevich esa bu xonadonning harom dabdabasidan jirkanib, dasturxondagi luqmaga qo‘l tekkizmay, faqat Akbarga mehr bilan saboq berib chiqib ketardi.",
    evidence: "Asarda halol ziyoli muallim obrazi orqali Yoqutxonning boylik bilan o‘lchanadigan tuban dunyoqarashi o‘rtasidagi ziddiyat ochib berilgan.",
    difficulty: 5,
    secretDetail: "Muallimning dasturxondan bitta qand yoki luqma yemasdan, o‘zining halol mehnati bilan kelib-ketishi.",
    category: "Qahramonlar ruhiyati"
  },
  {
    id: 2,
    question: "Xizmatkor Lutfixon Karimovlar xonadonida ota-ona qo‘lga olinib, boyliklar musodara qilingan eng og‘ir damda qanday yo‘l tutadi?",
    answer: "U o‘ziga tegishli mayda narsalarni yig‘ishtirib, qochishga yoki uydan uzoqlashishga shoshiladi; yillar davomida birga yashagan bo‘lsa-da, yetim qolgan bolalarga g‘amxo‘rlik qilishdan ko‘ra o‘z jonini qutqarishni afzal ko‘radi.",
    evidence: "Yollanma xizmatchining ham omonat sadoqati va boylik yo‘qolgan joyda sadoqat ham yo‘qolishi aniq ko‘rsatilgan.",
    difficulty: 5,
    secretDetail: "Xizmatkorning boylik bor paytidagi muloyimligi birdaniga sovuqqon begonalikka aylanishi.",
    category: "Chetda qolgan qahramonlar"
  },
  {
    id: 3,
    question: "Musodara (xatlov) jarayonida ijrochilar xonadondagi barcha narsalarni olib ketishgach, qaysi xonalar va eshiklar qanday muhr (plomba) bilan yopiladi?",
    answer: "Katta qasrdek uydagi deyarli barcha xonalar qizil mum va davlat muhri bilan muhrlanib, bolalarga faqatgina eng chetdagi tor, bo‘m-bo‘sh bitta burchak/daxliz qoldiriladi.",
    evidence: "Sud ijrochilarining rasmiy sovuqqonligi va bolalarning o‘z uyida begona bo‘lib, tor burchakka qisilib qolishi fojiasi.",
    difficulty: 5,
    secretDetail: "Eshiklardagi rasmiy qizil lenta va mum muhr — bolalar uchun qamoqxonadan battar ruhiy devor bo‘lgani.",
    category: "Sud va musodara tafsilotlari"
  },
  {
    id: 4,
    question: "Saidjon Karimov 'Volga' mashinasini berib yuborishdan oldin Zufarga bu mashinani qanday sovg‘a sifatida taqdim etgan va unga nimalarni va’da qilgan edi?",
    answer: "Uni voyaga yetganda eng nufuzli yigit qilish, shaharda hech kimda yo‘q oq 'Volga'da tengdoshlari oldida viqor bilan yurishini aytib, unga mutlaq erkalik va manmanlik hissini singdirgan edi.",
    evidence: "Otaning bolaga bergan noto‘g‘ri tarbiyasi va mashinani oilaviy shon-shuhrat timsoliga aylantirgani Zufarning o‘limiga poydevor bo‘ldi.",
    difficulty: 5,
    secretDetail: "Mashina kalitlarini ko‘rsatib, bolaga berilgan soxta 'kelajak' va'dasi.",
    category: "Sabab va oqibatlar"
  },
  {
    id: 5,
    question: "Akbar o‘zini olovga tashlashidan bir necha kun oldin ukasi Zafarga o‘zining jismoniy nogironligi haqida qanday falsafiy va hayratlanarli fikrni aytgan edi?",
    answer: "'Mening oyoqlarim yurmasligi baxtim ekan, Zafar. Agar men sog‘lom bo‘lganimda, balki men ham otamning yo‘lidan borib, sizlardek harom luqmaga berilib, gunohkor bo‘larmidim' degan ma’noda o‘z dardini poklik sifatida ko‘rgan.",
    evidence: "Akbar o‘z tanasining ojizligini ruhiy poklik vositasi deb bilgan va sog‘lom bo‘lib o‘g‘ri bo‘lishdan ko‘ra nogiron bo‘lib halol qolishni ustun qo‘ygan.",
    difficulty: 5,
    secretDetail: "Nogironlikni gunohdan asragan qalqon sifatida qabul qilishdek chuqur ruhiy monolog.",
    category: "Qahramon ruhiyati"
  },
  {
    id: 6,
    question: "Yoqutxon Karimova vaqtinchalik hibsxonada yotganida unga hamroh bo‘lgan yoki uning so‘nggi daqiqalarini ko‘rgan nazoratchilar uning nimani quchoqlab yoki nima haqida javrab jon berganini aytishadi?",
    answer: "U o‘zining tortib olingan tilla taqinchoqlari, marjonlari haqida alahsirab, go‘yo qo‘llarida oltin tangalar turgandek barmoqlarini qisib, boyliklari vasvasasida jon bergan.",
    evidence: "Ochko‘zlik illatining odam vujudiga shunchalik chuqur singib ketgani-ki, u hatto o‘lim to‘shagida ham bolalaridan ko‘ra oltinlarni o‘ylab jon beradi.",
    difficulty: 5,
    secretDetail: "So‘nggi nafargacha tillalar xayoli bilan alahsirash — asardagi eng ibratli fojiaviy ramz.",
    category: "Psixologik detallar"
  },
  {
    id: 7,
    question: "Zufar mashinani o‘g‘irlab qochgach, avtohalokat qanday sharoitda va yo‘lning qaysi xavfli qismida sodir bo‘ladi?",
    answer: "Qo‘shni viloyatga eltuvchi xilvat, burilishli katta trassada, tungi qorong‘ulikda boshqaruvni yo‘qotib, yo‘l chetidagi xarsangtosh yoki jarlikka qulashi oqibatida.",
    evidence: "Yosh va tajribasiz, ruhiy bosim ostidagi o‘smirning mashinani ulkan tezlikda qorong‘i trassada haydashi o‘lim halokatiga olib keldi.",
    difficulty: 5,
    secretDetail: "Mashina boshqaruvini yo‘qotib, tun qorong‘isidagi xatarli burilishda qulashi.",
    category: "Voqealar rivoji"
  },
  {
    id: 8,
    question: "Nigora yetim qolib kasallanib yotganida, qo‘lida mahkam qisib yotgan yagona matoh nima edi?",
    answer: "Onasidan qolgan eski atlas ko‘ylak parchasi yoki o‘zi tikkan, ko‘zlari munchoqdan qilingan kichik qo‘g‘irchoq.",
    evidence: "Murg‘ak qizcha uchun butun dunyodan qolgan yagona ona hidi va mehr timsoli shu matoh edi.",
    difficulty: 5,
    secretDetail: "Qo‘g‘irchoqning ko‘zlari va atlas qiyqimi — uning mungli nigohining moddiy aks-sadosi.",
    category: "Buyumlar va ramzlar"
  },
  {
    id: 9,
    question: "Saidjon Karimov qamoqxonada Zafar bilan uchrashuvda o‘g‘lining yuziga qarab eng birinchi qaysi fojiani eshitganda hushidan ketayozadi?",
    answer: "Nogiron Akbarning o‘zini o‘tda yoqib nobud qilgani va Zufarning 'Volga'da halok bo‘lgani xabarini ketma-ket eshitganida.",
    evidence: "Ota o‘zining jazosini yengillatish uchun qurbon qilgan narsalari aslida ikki o‘g‘lining qoniga zomin bo‘lganini anglab, aqldan ozish darajasiga keladi.",
    difficulty: 5,
    secretDetail: "Qamoqxona panjarasi ortida otaning ikki o‘g‘li o‘limini bir kunda eshitishi.",
    category: "Kulminatsion epizod"
  },
  {
    id: 10,
    question: "Zafar maktabga borganida sinf rahbari yoki adabiyot muallimi sinf oldida unga qanday kutilmagan munosabat bildiradi?",
    answer: "Boshqa o‘quvchilar uni chetlatib, masxaralamoqchi bo‘lganida, muallim uni himoya qilib, 'Otaning qilmishi uchun begunoh farzand javobgar emas, unga tosh otmanglar' deb sinfni jim qiladi va Zafarning boshini silaydi.",
    evidence: "Asarda insoniylik va ustozlik sha’nining yorqin namunasi sifatida ushbu o‘qituvchining adolatli pozitsiyasi ko‘rsatiladi.",
    difficulty: 5,
    secretDetail: "O‘qituvchining sinf taxtasi yonida Zafarni himoya qilib, yosh to‘kilgan ko‘zlari.",
    category: "Maktab va ijtimoiy muhit"
  }
];
