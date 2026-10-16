export interface CrosswordWord {
  id: string;
  number: number;
  word: string;
  direction: 'across' | 'down';
  startRow: number; // 0-indexed
  startCol: number; // 0-indexed
  clue: string;
}

export interface CrosswordLevel {
  id: string;
  title: string;
  subtitle: string;
  rows: number;
  cols: number;
  words: CrosswordWord[];
}

export const CROSSWORD_LEVELS: CrosswordLevel[] = [
  {
    id: 'level-1',
    title: '1-Krossvord: Qahramonlar va Taqdir',
    subtitle: 'Asarning bosh qahramonlari, ustoz va oilaning taqdirini belgilagan kalit so‘zlar',
    rows: 11,
    cols: 11,
    words: [
      {
        id: 'w1',
        number: 1,
        word: 'SAIDJON',
        direction: 'across',
        startRow: 3,
        startCol: 2,
        clue: 'Baza bosh omborchisi, 11 yilga qamalgan Karimovlar oilasi boshlig‘i',
      },
      {
        id: 'w2',
        number: 2,
        word: 'ATAULLO',
        direction: 'down',
        startRow: 3,
        startCol: 3,
        clue: 'Akbarga saboq bergan, halollikni o‘rgatgan, xonadon dasturxoniga qo‘l tekkizmagan keksa muallim',
      },
      {
        id: 'w3',
        number: 3,
        word: 'OMBOR',
        direction: 'down',
        startRow: 3,
        startCol: 7,
        clue: 'Saidjon Karimov davlatning taqchil mollarini yashirib, chayqovchilarga pullagan joy',
      },
      {
        id: 'w4',
        number: 4,
        word: 'AKBAR',
        direction: 'across',
        startRow: 5,
        startCol: 5,
        clue: 'Nogiron bo‘lsa-da qalbi pok, or-nomus yukini ko‘tara olmay o‘zini o‘tda yoqqan o‘spirin',
      },
      {
        id: 'w5',
        number: 5,
        word: 'ZAFAR',
        direction: 'down',
        startRow: 4,
        startCol: 5,
        clue: 'Romanning bosh qahramoni va hikoyachisi, mungli ko‘zlar bilan qolgan katta o‘g‘il',
      },
      {
        id: 'w6',
        number: 6,
        word: 'VOLGA',
        direction: 'across',
        startRow: 7,
        startCol: 1,
        clue: 'Zufarga atalgan, otasining jazosini yengillatish uchun sotilgan va halokatga sabab bo‘lgan oq mashina',
      },
      {
        id: 'w7',
        number: 7,
        word: 'NIGORA',
        direction: 'down',
        startRow: 1,
        startCol: 9,
        clue: 'Atlas ko‘ylakli qo‘g‘irchog‘ini quchoqlab, onasini kutib vafot etgan murg‘ak singil',
      },
      {
        id: 'w8',
        number: 8,
        word: 'OLTIN',
        direction: 'across',
        startRow: 9,
        startCol: 3,
        clue: 'Yoqutxon va Saidjonning to‘plagan, oilani xonavayron qilgan harom boyligi',
      },
    ],
  },
  {
    id: 'level-2',
    title: '2-Krossvord: Fojia, Detallar va Ramzlar',
    subtitle: 'Sud, olovli fido va qalb jarohatlarini ifodalovchi tushunchalar',
    rows: 11,
    cols: 11,
    words: [
      {
        id: 'w2-1',
        number: 1,
        word: 'YOQUTXON',
        direction: 'across',
        startRow: 2,
        startCol: 2,
        clue: 'Tilla va zeb-ziynatga mukkasidan ketgan, qamoqda yurak xurujidan vafot etgan ona',
      },
      {
        id: 'w2-2',
        number: 2,
        word: 'ZUFAR',
        direction: 'down',
        startRow: 1,
        startCol: 5,
        clue: 'Oq Volga vasvasasiga uchrab, uni o‘g‘irlab qochib avtohalokatda halok bo‘lgan erka o‘g‘il',
      },
      {
        id: 'w2-3',
        number: 3,
        word: 'KEROSIN',
        direction: 'across',
        startRow: 5,
        startCol: 3,
        clue: 'Akbar sharmandalikdan poklanish uchun o‘z ustiga quyib o‘t yoqqan modda',
      },
      {
        id: 'w2-4',
        number: 4,
        word: 'OMBOR',
        direction: 'down',
        startRow: 5,
        startCol: 6,
        clue: 'Xalq rizqi o‘g‘irlanib, xufyona savdolar qilingan qora maskan',
      },
      {
        id: 'w2-5',
        number: 5,
        word: 'SUD',
        direction: 'down',
        startRow: 5,
        startCol: 7,
        clue: 'Saidjon Karimovning jinoyatlari xalq oldida ko‘rib chiqilib, 11 yillik hukm o‘qilgan joy',
      },
      {
        id: 'w2-6',
        number: 6,
        word: 'DARD',
        direction: 'across',
        startRow: 7,
        startCol: 7,
        clue: 'Begunoh bolalar ko‘zlariga muhrlangan va oila boshiga yog‘ilgan cheksiz musibat',
      },
      {
        id: 'w2-7',
        number: 7,
        word: 'ROST',
        direction: 'down',
        startRow: 7,
        startCol: 9,
        clue: 'Ataullo Isayevich uqtirgan, qalbni va vijdonni asraydigan yagona to‘g‘ri yo‘l',
      },
    ],
  },
];
