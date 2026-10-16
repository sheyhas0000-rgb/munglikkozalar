import boyByWindow from '../assets/images/boy_by_window_1791349182648.jpg';
import secretGoldChest from '../assets/images/secret_gold_chest_1791349204700.jpg';
import whiteVolgaSedan from '../assets/images/white_volga_sedan_1791349222922.jpg';
import policeArrestFather from '../assets/images/police_arrest_father_1791349347486.jpg';
import carpetsStrippedRoom from '../assets/images/carpets_stripped_room_1791349367075.jpg';
import emptyWheelchairFire from '../assets/images/empty_wheelchair_fire_1791349237499.jpg';
import crashedWhiteCar from '../assets/images/crashed_white_car_1791349255613.jpg';
import sadGirlDoll from '../assets/images/sad_girl_doll_1791349274175.jpg';
import lockedIronGate from '../assets/images/locked_iron_gate_1791349291127.jpg';
import grandmotherWarmBread from '../assets/images/grandmother_warm_bread_1791349386086.jpg';
import autumnEmptyChair from '../assets/images/autumn_empty_chair_1791349401387.jpg';
import sorrowfulBoyFace from '../assets/images/sorrowful_boy_face_1791349322883.jpg';
import courtroomTrialCage from '../assets/images/courtroom_trial_cage_1792128714628.jpg';
import weddingGoldVanity from '../assets/images/wedding_gold_vanity_1792128729076.jpg';
import teacherWithAkbar from '../assets/images/teacher_with_akbar_1792128744281.jpg';
import prisonGlassVisit from '../assets/images/prison_glass_visit_1792128761298.jpg';

// Map of mystery image ID to actual AI-generated cinematic image asset
export const GENERATED_IMAGE_MAP: Record<number, string> = {
  1: boyByWindow,           // Nogiron Akbar deraza oldidagi aravachada
  2: secretGoldChest,       // Yoqutxonning sandiqdagi tilla va zebu-ziynatlari
  3: whiteVolgaSedan,       // Hovlidagi oppoq GAZ-24 "Volga"
  5: policeArrestFather,    // Militsiya va tergovchilar Saidjonni hibsga olishi
  6: carpetsStrippedRoom,   // Uydagi gilam va buyumlarning musodara qilinishi
  7: carpetsStrippedRoom,   // Eshiklarga muhr bosilishi
  8: emptyWheelchairFire,   // Akbarning to'ntarilgan aravachasi va olovli fidosi
  9: crashedWhiteCar,       // Zufarning tog' trassasidagi oq "Volga" avtohalokati
  10: secretGoldChest,      // Tergov izolyatoridagi so'nggi talvasa
  12: teacherWithAkbar,     // Ustozning halol sabog'i (Ataullo Isayevich va Akbar)
  13: sadGirlDoll,          // Nigoraning atlas ko'ylakli qo'g'irchog'i va yoshlari
  14: lockedIronGate,       // Qarindoshlarning yomg'irda qulflangan darvozasi
  15: courtroomTrialCage,   // Sud zali: Saidjon Karimov panjara ortida
  18: weddingGoldVanity,    // To'yxonadagi zargarona kibr (Yoqutxon)
  20: whiteVolgaSedan,      // Tungi mashina o'g'irligi
  21: prisonGlassVisit,     // Shisha to'siq ortidagi pushaymon (Saidjon va Zafar)
  25: grandmotherWarmBread, // Bozordagi onaxonning issiq noni
  26: autumnEmptyChair,     // Akbar xotirasi, xazon bosgan bo'sh aravacha
  30: sorrowfulBoyFace,     // "Mungli ko'zlar" — Zafarning katta portreti
};

// Fallback helper to always return a high-res authentic cinematic AI image
export function getGeneratedImageForId(id: number): string {
  if (GENERATED_IMAGE_MAP[id]) {
    return GENERATED_IMAGE_MAP[id];
  }
  // Alternate across the available atmospheric cinematic stills based on theme
  const keys = [
    boyByWindow,
    secretGoldChest,
    whiteVolgaSedan,
    policeArrestFather,
    carpetsStrippedRoom,
    emptyWheelchairFire,
    crashedWhiteCar,
    teacherWithAkbar,
    sadGirlDoll,
    lockedIronGate,
    courtroomTrialCage,
    weddingGoldVanity,
    prisonGlassVisit,
    grandmotherWarmBread,
    autumnEmptyChair,
    sorrowfulBoyFace,
  ];
  return keys[(id - 1) % keys.length];
}

export const ALL_GALLERY_IMAGES = [
  { id: 1, title: "Deraza yonidagi ojiz nigoh (Akbar)", src: boyByWindow, category: "Akbar taqdiri" },
  { id: 2, title: "Sandiqdagi xufyona tillalar (Yoqutxon)", src: secretGoldChest, category: "Oila boyligi" },
  { id: 3, title: "Hovlidagi oppoq GAZ-24 Volga", src: whiteVolgaSedan, category: "Kibr timsoli" },
  { id: 5, title: "Saidjon Karimovning hibsga olinishi", src: policeArrestFather, category: "Sud va qamoq" },
  { id: 6, title: "Gilamlar va uyni musodara qilish", src: carpetsStrippedRoom, category: "Musodara" },
  { id: 8, title: "Akbarning fidosi va olovli fojia", src: emptyWheelchairFire, category: "Kulminatsiya" },
  { id: 9, title: "Zufarning tungi avtohalokati", src: crashedWhiteCar, category: "Halokat" },
  { id: 12, title: "Ataullo Isayevich va Akbar suhbati", src: teacherWithAkbar, category: "Halollik sabog‘i" },
  { id: 13, title: "Nigora va uning qo‘g‘irchog‘i", src: sadGirlDoll, category: "Begunohlik" },
  { id: 14, title: "Qarindoshlarning qulflangan darvozasi", src: lockedIronGate, category: "Mehrsizlik" },
  { id: 15, title: "Sud zali va panjara ortidagi Saidjon", src: courtroomTrialCage, category: "Qonuniy jazo" },
  { id: 18, title: "To‘yxonadagi zargarona kibr", src: weddingGoldVanity, category: "Ochko‘zlik" },
  { id: 21, title: "Shisha to‘siq ortidagi pushaymon", src: prisonGlassVisit, category: "Kechikkan haqiqat" },
  { id: 25, title: "Bozordagi saxovatli onaxon va non", src: grandmotherWarmBread, category: "Insoniylik" },
  { id: 26, title: "Xazon bosgan bo‘sh aravacha", src: autumnEmptyChair, category: "Xotira" },
  { id: 30, title: "Mungli ko‘zlar — Zafarning nigohi", src: sorrowfulBoyFace, category: "Asar ruhi" },
];
