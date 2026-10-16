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
  10: secretGoldChest,      // Tergov izolyatoridagi o'lim
  13: sadGirlDoll,          // Nigoraning atlas ko'ylakli qo'g'irchog'i va yoshlari
  14: lockedIronGate,       // Qarindoshlarning yomg'irda qulflangan darvozasi
  15: policeArrestFather,   // Sud zali va panjara
  20: whiteVolgaSedan,      // Tungi mashina o'g'irligi
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
    sadGirlDoll,
    lockedIronGate,
    grandmotherWarmBread,
    autumnEmptyChair,
    sorrowfulBoyFace,
  ];
  return keys[(id - 1) % keys.length];
}
