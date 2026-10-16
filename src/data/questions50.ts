export interface QuestionItem {
  id: number;
  question: string;
  answer: string;
  evidence: string;
  difficulty: number;
  category: 'syujet' | 'qahramonlar' | 'detallar' | 'sabab_oqibat' | 'sud_va_musodara' | 'tahliliy';
  hint?: string;
}

export const QUESTIONS_50: QuestionItem[] = [
  {
    id: 1,
    question: "Saidjon Karimov qamoqqa olinganidan so‘ng tergov va sud davrida jazoni yengillatish maqsadida eng katta moddiy qurbonlik sifatida qaysi mulkdan kimning manfaati hisobiga voz kechadi?",
    answer: "Kichik o‘g‘li Zufarga atalgan va oila uchun katta faxr sanalgan oq rangli yangi 'Volga' (GAZ-24) avtomashinasidan voz kechadi.",
    evidence: "Otasi Saidjon Karimov jazosini yengillatish, moddiy zararni qoplash va homiylarga berish bahonasida o‘g‘li Zufarning orzusi bo‘lgan mashinani topshiradi. Bu keyinchalik Zufarning mashinani o‘g‘irlab qochib avtohalokatga uchrashiga sabab bo‘ladi.",
    difficulty: 5,
    category: "sabab_oqibat",
    hint: "Bu transport vositasi keyinchalik oilaning yana bir farzandi o‘limiga bevosita yo‘l ochadi."
  },
  {
    id: 2,
    question: "Nogiron Akbar ota-onasi qamalishi va sharmandalik yuz berishidan oldin ham otasining boyligi va pullariga nisbatan qanday qat’iy norozilik munosabatini bildirib kelgan edi?",
    answer: "Otasining harom va g‘irrom yo‘llar bilan topgan pullariga chet elda yoki qimmatbaho shifoxonalarda davolanishdan, uning hisobiga qimmat dori-darmonlar olishdan qat’iy bosh tortgan.",
    evidence: "Akbar o‘qituvchisi Ataullo Isayevich tarbiyasini olgan, halol vijdonli yigit edi. U uyga kelayotgan behisob mollar halol emasligini sezib, otasining puliga davolanmasligini ochiq aytgan.",
    difficulty: 5,
    category: "qahramonlar"
  },
  {
    id: 3,
    question: "Akbar o‘z ustiga moy/benzin quyib, o‘zini o‘tda yoqishdek dahshatli va ayanchli fojiani amalga oshirishiga turtki bo‘lgan eng so‘nggi, chidab bo‘lmas tomchi nima edi?",
    answer: "Ota-onasining butun jinoyatlari el oldida fosh etilib, jamiyat va mahallaning la’nati, odamlarning nafrat to‘la ko‘zlari va or-nomus, vijdon azobining cheksiz yukiga dosh bera olmasligi.",
    evidence: "Akbar jismonan nogiron bo‘lsa-da, ruhan nihoyatda pok edi. U o‘z oilasining el qarg‘ishiga qolganini, harom boylik evaziga yashab kelganini bilganida, bu nomus va sharmandalikni ko‘tara olmay, o‘zini qurbon qildi.",
    difficulty: 5,
    category: "sud_va_musodara"
  },
  {
    id: 4,
    question: "Yoqutxon Karimova (ona) sud zaliga qadar yetib bormasdan vafot etadi. Uning o‘limi qayerda va qanday tibbiy-ruhiy sabab oqibatida yuz beradi?",
    answer: "Vaqtinchalik hibsxona (tergov izolyatori)da, qattiq ruhiy zarba, boyliklaridan ayrilish fojiasi va yurak xuruji (infarkt) oqibatida vafot etadi.",
    evidence: "Yoqutxon qamoqxona sharoitiga, sharmandalikka va o‘zining noqonuniy tillafurushlik sirlari to‘liq fosh bo‘lganiga chidolmay, yuragi xuruj qilib vafot etadi.",
    difficulty: 5,
    category: "syujet"
  },
  {
    id: 5,
    question: "Zufar otasi tomonidan boshqa odamga topshirilgan 'Volga' mashinasini nima maqsadda va qanday holatda qo‘lga kiritadi hamda bu qanday fojea bilan tugaydi?",
    answer: "Mashinani yangi egasining uyidan yashirincha o‘g‘irlab qochadi, qattiq tezlikda boshqarib qo‘shni viloyat hududiga ketayotganda dahshatli avtohalokatga uchrab halok bo‘ladi.",
    evidence: "Zufar o‘z orzusi bo‘lgan mashinani hech kimga berishni xohlamaydi. O‘ziga tegishli deb bilgan mashinani o‘g‘irlab yo‘lda falokatga uchraydi.",
    difficulty: 5,
    category: "sabab_oqibat"
  },
  {
    id: 6,
    question: "Akbarga kitoblarga muhabbat, halollik va axloqiy poklik saboqlarini bergan, uning ruhiyatini tarbiyalagan muallimning to‘liq ismi-sharifi kim edi?",
    answer: "Ataullo Isayevich.",
    evidence: "Akbarga uyida saboq berib, unga odamiylik, haqiqiy ma’naviyat va halol luqmaning qadrini o‘rgatgan mehribon muallim Ataullo Isayevich edi.",
    difficulty: 4,
    category: "qahramonlar"
  },
  {
    id: 7,
    question: "Karimovlar xonadonida uzoq vaqt xizmat qilib, oilaning barcha kirdikorlari va erkaliklariga guvoh bo‘lgan uy xizmatkori ayolning ismi kim edi?",
    answer: "Lutfixon.",
    evidence: "Lutfixon Karimovlar xonadonida oshpazlik, kir-chir va yumushlarni bajarib kelgan, oila farovonligining ham, keyingi qulashining ham jonli guvohi bo‘lgan ayol.",
    difficulty: 4,
    category: "qahramonlar"
  },
  {
    id: 8,
    question: "Saidjon Karimov lavozimiga ko‘ra qaysi soha va muassasada ishlab, qanday yo‘l bilan davlat mulkini talon-toroj qilgan va poraxo‘rlik tizimini qurgan?",
    answer: "Katta oziq-ovqat va sanoat mollari bazasining bosh omborchisi (baza mudiri) lavozimida ishlab, defitsit (taqchil) mollarni yashirish va noqonuniy sotish orqali.",
    evidence: "Saidjon Karimov bazaga kelgan xaridorgir mollar, qimmatbaho gazlamalar, oziq-ovqat mahsulotlarini yashirib chayqovchilarga pullagan va pora olgan.",
    difficulty: 5,
    category: "detallar"
  },
  {
    id: 9,
    question: "Yoqutxon Karimovaning asosiy noqonuniy 'biznesi' va yashirin boylik yig‘ish manbai nimalardan iborat edi?",
    answer: "Noqonuniy tillafurushlik, qimmatbaho tilla va brilliant taqinchoqlar, tilla tangalar oldi-sotdisi va chayqovchilik.",
    evidence: "Yoqutxon uyida behisob tilla buyumlar, tilla tangalar saqlagan, to‘ylarda boshdan-oyoq tilla taqib kimo‘zarga kiyingan va yashirincha tillafurushlik qilgan.",
    difficulty: 4,
    category: "syujet"
  },
  {
    id: 10,
    question: "Sud qaroriga ko‘ra Saidjon Karimovga qanday muddatdagi ozodlikdan mahrum etish jazosi tayinlandi?",
    answer: "11 yil ozodlikdan mahrum etish jazosi.",
    evidence: "Sudda Saidjon Karimovning juda katta miqdordagi davlat mulkini o‘margani va poraxo‘rligi isbotlanib, unga 11 yil qamoq jazosi beriladi.",
    difficulty: 4,
    category: "sud_va_musodara"
  },
  {
    id: 11,
    question: "Karimovlar uyida o‘tkazilgan musodara (xatlov) jarayonida ijrochilar va qonun vakillari bolalarning ko‘z o‘ngida uydan nimalarni olib chiqib ketishadi?",
    answer: "Uydagi barcha qimmatbaho gilamlar, chet el mebellari, televizor, tilla va billurlar, hatto bolalarning eng sevimli buyumlarigacha xatlab, eshiklarga qizil muhr bosishadi.",
    evidence: "Musodara sahnasi bolalar uchun eng dahshatli ruhiy zarba bo‘ladi: uyning barcha ashyolari yuk mashinalariga ortiladi, qolgan xonalar muhrlanadi.",
    difficulty: 5,
    category: "sud_va_musodara"
  },
  {
    id: 12,
    question: "Singil Nigora fojialar boshlanishidan oldin uyda nimalar bilan ovunardi va uning eng sevimli bolalik mashg‘uloti nima edi?",
    answer: "Qo‘g‘irchoqlariga qimmatbaho atlas va ipaklardan ko‘ylak tikish, ularni yasatish va ertaklar to‘qish bilan ovunardi.",
    evidence: "Nigora beg‘ubor, go‘zallikni sevadigan qizcha edi. U uyga to‘kilayotgan qimmatbaho matolarning qiyqimlaridan qo‘g‘irchoqlariga hashamatli liboslar tikar edi.",
    difficulty: 4,
    category: "detallar"
  },
  {
    id: 13,
    question: "Oila boshiga kulfat tushgach, avvallari xonadonga sovg‘a-salom ilinjida kelib-ketgan xola, tog‘a va amakilar yetim qolgan bolalarga qanday munosabatda bo‘lishadi?",
    answer: "Uydan butunlay yuz o‘girishadi, o‘z nomlariga 'qamoqdagi jinoyatchining bolalari' degan tamg‘a tushishidan qo‘rqib, eshiklarini qulflab, ularni ko‘chada qoldirishadi.",
    evidence: "Qarindoshlarning soxta mehr-oqibati fosh bo‘ladi. Bir paytlar ota-onaning oyog‘iga yiqilib yurgan jigarlar bolalarni hatto bir kecha boshpanasiga kiritishmaydi.",
    difficulty: 5,
    category: "qahramonlar"
  },
  {
    id: 14,
    question: "Bosh qahramon Zafar oilasi to‘kin-sochin bo‘lgan davrda maktabdagi tengdoshlari va o‘rtoqlari oldida o‘zini qanday tutgan edi?",
    answer: "Kibrli, o‘zini hammadan ustun qo‘yuvchi, do‘stlariga pul va chet el mollarini ko‘z-ko‘z qiluvchi, darslarga va kambag‘al sinfdoshlariga mensimay qarovchi bo‘lgan.",
    evidence: "Zafar o‘tmishini eslarkan, otasining pullari tufayli maktabda barchani mensimaganini, keyin bu qilmishlari uchun vijdon azobida qolganini tan oladi.",
    difficulty: 4,
    category: "tahliliy"
  },
  {
    id: 15,
    question: "Zafar boshiga kulfatlar yog‘ilgach, maktabda kimlarning qarashi va muomalasi uning qalbini eng qattiq jarohatlaydi?",
    answer: "Avvallari unga xushomad qilib orqasidan ergashib yurgan, puli borida do‘st tutingan sinfdoshlarining masxarali kulgisi va yuz o‘girishi.",
    evidence: "Zafarga eng og‘ir botgani — soxta o‘rtoqlarning bir kunda dushmanga aylanib, 'o‘g‘rining bolasi' deb chetlatishi bo‘ladi.",
    difficulty: 5,
    category: "qahramonlar"
  },
  {
    id: 16,
    question: "Asar davomida Zafarning yagona taskini, unga taskin beruvchi va ruhiy jihatdan to‘g‘ri yo‘l ko‘rsatuvchi ma’naviy mayoq kim bo‘lib qoladi?",
    answer: "Akbarning ustozi Ataullo Isayevich va Akbarning kitoblari orqali qoldirgan ma’naviy vasiyatlari.",
    evidence: "Ataullo Isayevich barcha yuz o‘girgan paytda Zafarga insoniy dalda beradi va haqiqiy hayot boylikda emas, halollikda ekanini tushuntiradi.",
    difficulty: 4,
    category: "qahramonlar"
  },
  {
    id: 17,
    question: "Yoqutxon Karimova tergov paytida yashirgan tilla buyumlarini qanday qilib fosh qilishadi?",
    answer: "Guvohlarning ko‘rsatmalari, xonadondagi yashirin joylar (devor va pol osti kovaklari) tekshirilishi va chayqovchi sheriklarining sotib berishi natijasida.",
    evidence: "Tergovchilar chayqovchilik zanjirini ochishganda, Yoqutxonning yashirgan tilla tangalari va zargarlik buyumlari topilib, uning aybi to‘liq isbotlanadi.",
    difficulty: 5,
    category: "sud_va_musodara"
  },
  {
    id: 18,
    question: "Nigora aka-ukalaridan va ota-onasidan ayrilgach, uning ruhiy va jismoniy holati qanday fojea bilan intihosiga yetadi?",
    answer: "U qattiq yurak xastaligi va ruhiy tushkunlikka tushib, onasini chaqirgancha bevaqt vafot etadi (ko‘z yumadi).",
    evidence: "Nigoraning murg‘ak qalbi bu kulfatlarni ko‘tara olmaydi. Uning ko‘zlaridagi so‘nmas mung va intizorlik fojiali o‘lim bilan yakun topadi.",
    difficulty: 5,
    category: "syujet"
  },
  {
    id: 19,
    question: "Saidjon Karimov qamoqdan turib Zafarga yozgan xatlarida yoki uchrashuvda asosan nimalardan afsuslanadi?",
    answer: "Farzandlariga halol non yedirmagani, o‘tkinchi boylik deb oilaning, to‘rt farzandning hayotini xazon qilganidan cheksiz pushaymon bo‘ladi.",
    evidence: "Ota kech bo‘lsa-da haqiqatni anglaydi: to‘plagan barcha oltin va mashinalari unga faqat o‘lim va qamoq olib keldi, bolalarini esa yeb bitirdi.",
    difficulty: 5,
    category: "tahliliy"
  },
  {
    id: 20,
    question: "Zafar o‘z xotiralarida onasining eng katta illati va uni qamoqqa yetaklagan xarakter chizg‘isi sifatida nimani alohida ko‘rsatadi?",
    answer: "To‘ylarda kimo‘zarga kiyinish, boshqalarga kibr bilan tilla taqinchoqlarni ko‘z-ko‘z qilish va ochko‘zlik illatini.",
    evidence: "Yoqutxon boshqa ayollardan ustun ko‘rinish uchun tinimsiz tilla yig‘ardi, qanoat nimaligini bilmas edi.",
    difficulty: 4,
    category: "qahramonlar"
  },
  {
    id: 21,
    question: "Asarda 'mungli ko‘zlar' ramzi dastlab qaysi qahramonning nigohida yaqqol namoyon bo‘ladi va keyinchalik kimlarga meros bo‘lib o‘tadi?",
    answer: "Dastlab nogiron Akbar va uning singlisi Nigora nigohida, keyin esa butunlay yolg‘iz qolgan Zafarning ko‘zlarida mangu muhrlanadi.",
    evidence: "Akbar bu dunyoning adolatsizligini chuqur his qilib ko‘zlarida mung bilan yashagan. Oila xonavayron bo‘lgach, bu mung barcha bolalarning nigohiga ko‘chadi.",
    difficulty: 5,
    category: "tahliliy"
  },
  {
    id: 22,
    question: "Saidjon Karimovning uyida mehmonlar kutish va ziyoat berish odati qanday bo‘lgan va uning dasturxonida nimalar ustunlik qilgan?",
    answer: "O‘ta dabdabali, shaharda kamyob bo‘lgan noz-ne’matlar, ichkiliklar va qora ikra, taqchil go‘sht mahsulotlari bilan boyitilgan dabdabali dasturxonlar.",
    evidence: "Har haftada bazadagi hamtovoqlar va amaldorlar uchun dabdabali ziyofatlar uyushtirilar, bu xonadonning soxta obro‘sini ushlab turardi.",
    difficulty: 4,
    category: "detallar"
  },
  {
    id: 23,
    question: "Musodara paytida uydagi devorlarga qoqilgan qaysi buyumlar tergovchilar tomonidan maxsus e’tibor bilan tekshiriladi?",
    answer: "Qimmatbaho chet el va milliy gilamlarning orqasi hamda devor qoplamalari orasidagi yashirin joylar.",
    evidence: "Chayqovchilar va poraxo‘rlar tillalarni ko‘pincha gilamlar ortiga yoki devor kovaklariga yashirishgani sababli devorlar sinchkovlik bilan tekshirilgan.",
    difficulty: 4,
    category: "detallar"
  },
  {
    id: 24,
    question: "Zafar maktab oshxonasida yoki ko‘chada qorni och qolgan paytlarda unga non bergan yoki yordam qo‘lini cho‘zgan insonlar kimlar edi?",
    answer: "Oldinlari ularning uyiga yaqinlashmagan, oddiy, halol mehnatkash insonlar va maktabdagi vijdonli o‘qituvchilar.",
    evidence: "Zafar qiyin ahvolda qolganda boy qarindoshlar emas, balki kutilmaganda oddiy odamlar unga rahm-shafqat ko‘rsatadi.",
    difficulty: 4,
    category: "syujet"
  },
  {
    id: 25,
    question: "Akbar o‘zining jismoniy ojizligiga qaramay, xonada soatlab nima bilan mashg‘ul bo‘lardi va qaysi mavzulardagi kitoblarni sevib o‘qirdi?",
    answer: "Falsafiy, tarixiy va mumtoz adabiyot durdonalari, inson ruhiyati va ezgulik haqidagi asarlarni o‘qish bilan mashg‘ul bo‘lardi.",
    evidence: "Ataullo Isayevich unga doimiy kitoblar keltirib berardi, Akbar kitoblar orqali hayotning asl ma’nosini anglagan edi.",
    difficulty: 4,
    category: "detallar"
  },
  {
    id: 26,
    question: "Saidjon Karimov pora olishda vositachi sifatida kimlardan yoki qanday usullardan foydalangan?",
    answer: "Do‘kon mudirlari, chayqovchilar va o‘zining ishonchli ombor xodimlari orqali xufyona til biriktirish usulidan.",
    evidence: "Sudda Saidjonning bevosita o‘zi emas, balki tarmoqlangan sheriklari orqali pora va tovon undirgani ochib beriladi.",
    difficulty: 5,
    category: "sud_va_musodara"
  },
  {
    id: 27,
    question: "Zufarning tabiatida qanday salbiy xususiyatlar ustunlik qilardi va uni halokat sari yetaklagan asosiy illat nima edi?",
    answer: "Katta ketish, o‘ylamay harakat qilish, sabrsizlik, qonunga bo‘ysunmaslik va mashina vasvasasiga berilish.",
    evidence: "Zufar otasining moddiy imkoniyatlari tufayli erka va qaysar bo‘lib o‘sgan, orzusidan ayrilgach esa jinoyatga qo‘l urgan.",
    difficulty: 4,
    category: "qahramonlar"
  },
  {
    id: 28,
    question: "Sud jarayonida zalda o‘tirgan oddiy xalq va ishchilar Saidjon Karimovga nisbatan qanday munosabat bildirishadi?",
    answer: "G‘azab, nafrat va unga eng og‘ir jazo berilishini talab qiluvchi keskin hayqiriqlar bilan kutib olishadi.",
    evidence: "Xalq uning omborlarda xalq rizqini o‘g‘irlab, o‘z oilasini shohona yashatganidan nihoyatda qattiq g‘azablangan edi.",
    difficulty: 4,
    category: "sud_va_musodara"
  },
  {
    id: 29,
    question: "Zafarning otasi qamalganidan keyin uning familiyasi yoki otasining ismi qanday qilib unga jamiyatda og‘ir yuk bo‘lib tushadi?",
    answer: "Hamma joyda unga 'pora xo‘r Saidjonning o‘g‘li', 'o‘g‘rining zurriyoti' degan haqoratli so‘zlar bilan qarashadi.",
    evidence: "Zafar maktabda ham, ko‘chada ham bu og‘ir tamg‘a ostida eziladi va o‘z sha’nini himoya qila olmay qiynaladi.",
    difficulty: 4,
    category: "tahliliy"
  },
  {
    id: 30,
    question: "Akbar o‘zini yoqib yuborgan kuni xonada qanday holat va hid hukmron bo‘lgan, voqea joyiga birinchi yetib kelganlar nimani ko‘rishadi?",
    answer: "Kerosin/moyning o‘tkir hidi, tutun qoplagan xona va o‘t ichida qolgan nogiron yigitning faryodsiz, so‘nggi sukuti.",
    evidence: "Bu asarning eng fojiali va o‘quvchini larzaga soluvchi sahnalaridan biri bo‘lib, Akbar o‘z vijdoni oldida o‘zini tozalash uchun shu yo‘lni tanlaydi.",
    difficulty: 5,
    category: "syujet"
  },
  {
    id: 31,
    question: "Yoqutxon Karimova qamoqda vafot etganida uning janozasi va dafn marosimi qanday o‘tadi?",
    answer: "Qarindoshlarning ko‘pchiligi kelmaydi, marosim o‘ta sovuq, g‘aribona va xorlikda, faqat bir-ikki kishining ishtirokida o‘tadi.",
    evidence: "Bir paytlar minglab odamlarni to‘yga chaqirgan boyvachcha ayolning o‘limiga hech kim qayg‘urmaydi, bu boylikning o‘tkinchiligini ko‘rsatadi.",
    difficulty: 5,
    category: "syujet"
  },
  {
    id: 32,
    question: "Saidjon Karimov qamalmasidan oldin uydagi pullarni qayerlarga va kimlarning nomiga yashirmoqchi bo‘lgan edi?",
    answer: "Qarindoshlarining nomiga o‘tkazishga va qishloqdagi yaqinlarining hovlisiga yashirishga uringan, lekin ular xiyonat qilgan.",
    evidence: "Saidjon boshiga ish tushganda pullarini saqlab qolish uchun yaqinlariga iltijo qiladi, ammo hech kim uning omonatini qaytarmaydi.",
    difficulty: 5,
    category: "detallar"
  },
  {
    id: 33,
    question: "Asarda Zafarning onasi to‘ylarga borganda boshqa ayollar bilan qaysi jihat bo‘yicha kimo‘zarga musobaqalashardi?",
    answer: "Qo‘llaridagi tilla bilaguzuklarning soni, brilliant ko‘zli uzuklarning kattaligi va chet el matolaridan tikilgan ko‘ylaklarining narxi bilan.",
    evidence: "Yoqutxonning butun maqsadi to‘yda hamma uning tillalariga qarab lol qolishi va hasad qilishi edi.",
    difficulty: 4,
    category: "detallar"
  },
  {
    id: 34,
    question: "Zafar yakunda oilasining qismatini tahlil qilarkan, oilani xonavayron qilgan asl 'zaharni' nima deb ataydi?",
    answer: "Harom luqma, nopok yo‘l bilan topilgan mol-dunyo va ochko‘zlik hirsini.",
    evidence: "Asarning asosiy g‘oyaviy xulosasi: harom luqma baraka keltirmaydi, u oxir-oqibat o‘z egasini va begunoh zurriyotini halokatga yetaklaydi.",
    difficulty: 5,
    category: "tahliliy"
  },
  {
    id: 35,
    question: "Ataullo Isayevich Akbarga qaysi mashhur adabiy va tarixiy shaxslarning sabr-matonati haqida so‘zlab bergan edi?",
    answer: "Qismat zarbalariga qaramay ruhan sinmagan, insoniy qadr-qimmatini saqlab qolgan allomalar va pokiza qahramonlar haqida.",
    evidence: "Muallim o‘quvchisiga jismoniy falajlik ruhiy falajlikdan afzalroq ekanini, qalb pokligi eng ulug‘ ne’matligini uqtirgan.",
    difficulty: 4,
    category: "qahramonlar"
  },
  {
    id: 36,
    question: "Zufar 'Volga'ni olib qochayotganda qaysi vaqtda va qanday ob-havo sharoitida yo‘lga chiqqan edi?",
    answer: "Kechasi, qorong‘ulikda, qaltis va shiddatli ruhiy hayajon holatida.",
    evidence: "Zufarning qorong‘i tunda katta tezlikda mashina boshqarishi va asabiy tarangligi avtohalokatni muqarrar qilgan.",
    difficulty: 4,
    category: "detallar"
  },
  {
    id: 37,
    question: "Uyni musodara qilayotgan komissiya a’zolari orasida kim bolalarga ozgina bo‘lsa-da achinish hissi bilan qaraydi?",
    answer: "Komissiyadagi yoshi katta, bolalarning murg‘ak ko‘zlaridagi qo‘rquvni ko‘rib xo‘rligi kelgan keksa xodim.",
    evidence: "Hatto rasmiy qonun ijrochilari ichida ham begunoh bolalarning sarson bo‘layotganiga chiday olmagan insoniy ko‘zlar uchraydi.",
    difficulty: 5,
    category: "sud_va_musodara"
  },
  {
    id: 38,
    question: "Zafar ukasi Zufarning jasadi olib kelinganida uni qanday holatda ko‘radi va bu unga qanday ta’sir qiladi?",
    answer: "Mashina metallari ezib yuborgan, tanib bo‘lmas darajada jarohatlangan holda ko‘radi va butunlay karaxt bo‘lib qoladi.",
    evidence: "Zafar uchun yana bir jigarining bevaqt va fojiali o‘limi hayotdagi eng og‘ir zarbalardan biri bo‘ladi.",
    difficulty: 5,
    category: "syujet"
  },
  {
    id: 39,
    question: "Saidjon Karimov tergov davomida dastlab o‘z aybini tan oladimi yoki qanday pozitsiyani egallaydi?",
    answer: "Dastlab o‘zini mutlaqo aybsiz ko‘rsatib, barcha aybni boshqa ombor xodimlari va taftishchilarga to‘nkashga urinadi.",
    evidence: "Saidjon so‘nggi lahzagacha o‘z boyliklari va tanish-bilishlari uni qutqarib qolishiga umid qiladi, ammo fosh etuvchi dalillar uni burchakka taqaydi.",
    difficulty: 5,
    category: "sud_va_musodara"
  },
  {
    id: 40,
    question: "Nigoraning so‘nggi kunlarida uning tilidan tushmagan, yurakni ezuvchi yagona so‘z va iltijo nima edi?",
    answer: "'Oyim qachon keladi? Dadam qachon keladi?' degan savol va ota-onasi bag‘riga talpinish.",
    evidence: "Nigora ota-onasining jinoyatchiligini to‘liq tushunmas, faqat ularning mehriga zor bo‘lib ko‘z yumadi.",
    difficulty: 4,
    category: "qahramonlar"
  },
  {
    id: 41,
    question: "Karimovlar oilasiga qarashli hovlining hashamati qanday tasvirlangan edi?",
    answer: "Baland devorlar bilan o‘ralgan, marmar zinalari, billur qandillari, qimmatbaho daraxtzor va favvoralari bo‘lgan 'qasr' monand hovli.",
    evidence: "Hovli atrofdagi oddiy aholi uylaridan keskin ajralib turardi, u yerdagi dabdaba egalarining kibrini aks ettirgan.",
    difficulty: 4,
    category: "detallar"
  },
  {
    id: 42,
    question: "Akbar o‘zini o‘tga tashlashidan oldin stol ustida nima qoldirgan yoki qanday ramziy buyumni o‘zi bilan olgan edi?",
    answer: "O‘zining sevimli kitoblarini chetga olib qo‘ygan va halol hayot kechirishga undovchi so‘nggi ruhiy iztirobini qoldirgan.",
    evidence: "Akbar kitoblarni poklik timsoli deb bilgani uchun ularni olovdan asrashga uringan, o‘z tanasini esa gunohkor xonadonning qurboni deb hisoblagan.",
    difficulty: 5,
    category: "detallar"
  },
  {
    id: 43,
    question: "Zafar ko‘chada sarson bo‘lib yurganida o‘zining eski kiyimlarini ko‘rib nimalarni his qiladi?",
    answer: "Ilgari chet eldan keltirilgan qimmatbaho kiyimlari endi unga sharmandalik kafani bo‘lib tuyuladi va u oddiy toza ko‘ylak orzusida qoladi.",
    evidence: "Zafarning ichki dunyosidagi keskin o‘zgarish: qimmatbaho kiyimlar ortidagi harom luqma unga jirkanch ko‘rina boshlaydi.",
    difficulty: 5,
    category: "tahliliy"
  },
  {
    id: 44,
    question: "Saidjon Karimovning poraxo‘rlik tizimida 'chayqovchilar' qanday vazifani bajargan edi?",
    answer: "Ombordan chiqarilgan davlat mollarini bozorlarda 3-4 baravar qimmat narxda aholiga sotib, tushgan katta foydani Saidjon bilan bo‘lishgan.",
    evidence: "Romanda o‘sha davrdagi sun’iy taqchillik va poraxo‘rlik sxemasi yozuvchi tomonidan realistik fosh qilingan.",
    difficulty: 5,
    category: "syujet"
  },
  {
    id: 45,
    question: "Asarda Hudoyberdi To‘xtaboyev nima sababdan ushbu asarga aynan 'Mungli ko‘zlar' deb nom bergan?",
    answer: "Ota-onaning nafs va boylik qurboniga aylanishi oqibatida ularning to‘rt begunoh farzandi ko‘zlarida paydo bo‘lgan cheksiz iztirob, g‘am va yetimlik mungi sababli.",
    evidence: "Kitobning markaziy g‘oyasi — begunoh bolalarning mung to‘la ko‘zlari harom boylikka qo‘yilgan eng dahshatli la’nat ekanligidir.",
    difficulty: 5,
    category: "tahliliy"
  },
  {
    id: 46,
    question: "Zafar yolg‘iz qolganidan so‘ng o‘z hayotini qanday davom ettirishga va qanday odam bo‘lishga o‘ziga-o‘zi qasam ichadi?",
    answer: "Hech qachon birovning haqiga xiyonat qilmaslik, faqat o‘z peshona teri va halol mehnati bilan yashashga.",
    evidence: "Zafar fojealardan xulosa chiqarib, otasining xatolarini takrorlamaslikka, halol inson bo‘lib yashashga qat’iy ahd qiladi.",
    difficulty: 5,
    category: "tahliliy"
  },
  {
    id: 47,
    question: "Saidjon Karimov ustidan sud o‘tkazilgan binoda Zafar otasining yuzida qanday ifodani ko‘radi?",
    answer: "Mag‘rurligi singan, ko‘zlari yerga qaragan, vijdoni oldida tilka-pora bo‘lgan, nochor va qariyalardek so‘lg‘in ifodani.",
    evidence: "Bir paytlardagi viqorli, o‘ziga ishongan bosh omborchidan asar ham qolmagan edi.",
    difficulty: 4,
    category: "sud_va_musodara"
  },
  {
    id: 48,
    question: "Karimovlar oilasiga qo‘shnilarining munosabati oila boy paytida va qamalganidan keyin qanday farq qilgan?",
    answer: "Boy paytida qo‘rquv va hasad aralash ta’zim qilishgan bo‘lsa, kulfat tushgach ochiqchasiga yuz burib, hatto salomga alik olishmagan.",
    evidence: "Yozuvchi soxta ijtimoiy munosabatlar va odamlarning mol-dunyoga qarab baho berish illatini fosh etadi.",
    difficulty: 4,
    category: "tahliliy"
  },
  {
    id: 49,
    question: "Akbar o‘zini qurbon qilayotgan paytda ukasi Zafarga qanday vasiyat yoki ishora qoldirgan edi?",
    answer: "Halol yashash, otasining gunohlariga sherik bo‘lmaslik va Nigorani asrash haqidagi iltijoli ma’naviy intilishni.",
    evidence: "Akbar Zafarga bu oilaning yagona najoti faqat halollik yo‘liga o‘tishda ekanini o‘z qismati orqali ko‘rsatib ketadi.",
    difficulty: 5,
    category: "qahramonlar"
  },
  {
    id: 50,
    question: "Asarning yakuniy kulminatsiyasida Zafarning ruhiy holatida qanday yakuniy xulosa yangraydi?",
    answer: "'Dunyoda eng katta boylik — bu vijdon xotirjamligi va halol luqmadir. Oltinlar esa odamni faqat tubanlikka va o‘limga yetaklaydi' degan xulosa.",
    evidence: "Hudoyberdi To‘xtaboyev romanni fojiaviy drama orqali har bir kitobxonni hushyor torttiruvchi ulkan axloqiy saboq bilan yakunlaydi.",
    difficulty: 5,
    category: "tahliliy"
  }
];
