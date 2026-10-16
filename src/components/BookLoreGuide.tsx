import React from 'react';
import { BookOpen, User, Flame, Car, HeartCrack, Sparkles, Scale, Info, Shield } from 'lucide-react';

export const BookLoreGuide: React.FC = () => {
  const characters = [
    {
      name: "Saidjon Karimov",
      role: "Oila boshlig‘i, oziq-ovqat va sanoat mollari bazasi bosh omborchisi",
      fate: "Poraxo‘rlik va katta miqdordagi davlat mulkini talon-toroj qilgani uchun 11 yilga qamaladi. Qamoqda ikki o‘g‘lining o‘limini eshitib ruhiy sinadi.",
      sin: "Mol-dunyoga hirs qo‘yish, xalq mulkini o‘g‘irlash, farzandlarini harom luqma bilan boqish.",
    },
    {
      name: "Yoqutxon Karimova",
      role: "Ona, uy bekasi, chayqovchi va noqonuniy tillafurush",
      fate: "Boyliklari musodara qilingach, tergov izolyatorida ruhiy zarba va yurak xurujidan sudgacha vafot etadi.",
      sin: "To‘ylarda kimo‘zarga kiyinish, takabburlik, qanoatsizlik, noqonuniy zargarlik buyumlari yig‘ish.",
    },
    {
      name: "Akbar",
      role: "Katta o‘g‘il, jismonan falaj (nogiron), ruhan eng pok qahramon",
      fate: "Ota-onasining kirdikorlari fosh bo‘lgach, sharmandalik va or-nomus yukini ko‘tara olmay o‘z ustiga moy quyib o‘zini yoqib yuboradi.",
      virtue: "Muallimi Ataullo Isayevichdan halollikni o‘rgangan, otasining harom pullariga davolanishdan bosh tortgan.",
    },
    {
      name: "Zafar",
      role: "Asar hikoyachisi, maktab o‘quvchisi",
      fate: "Ota-onasi va jigarlaridan birin-ketin ayrilib, qismatning barcha shafqatsiz zarbalariga chidab, hayotda halol yashashga ahd qiladi.",
      transformation: "Erka va manman boladan qalbida mangu mung va ulkan ma’naviy donolikka ega bo‘lgan yigitga aylanadi.",
    },
    {
      name: "Zufar",
      role: "Erka o‘g‘il, oq 'Volga' shaydosi",
      fate: "Otasining jazosini yengillatish uchun mashinasi berib yuborilgach, uni tunda o‘g‘irlab qochadi va trassada avtohalokatda halok bo‘ladi.",
      weakness: "O‘ylamay harakat qilish, boylik va mashina vasvasasiga berilish.",
    },
    {
      name: "Nigora",
      role: "Kichik qizaloq, beg‘ubor singil",
      fate: "Oila parokandaligi, yetimlik va sovuqdan og‘ir xastalikka uchrab, ota-onasining yo‘liga intizor bo‘lib ko‘z yumadi.",
      symbol: "Atlas parchasidan libos kiygan qo‘g‘irchoq va begunohlik fojiasi.",
    },
    {
      name: "Ataullo Isayevich",
      role: "Akbarning ustozi, nuroniy adabiyot/tarix muallimi",
      fate: "Karimovlarning harom dasturxonidan bitta luqma yemay, Akbarga halollik va kitobsevarlikni singdirgan ma’naviy tayanch.",
      symbol: "Ziyolilik, halol mehnat va qanoat timsoli.",
    },
    {
      name: "Lutfixon",
      role: "Karimovlar uyidagi yollanma xizmatkor ayol",
      fate: "Oila boy paytida muloyim xizmat qiladi, ammo kulfat tushib mulk musodara qilingach, kechasi tugunchagini olib uydan qochib ketadi.",
      symbol: "Boylik yo‘qolgan joyda soxta sadoqat ham yo‘qolishining isboti.",
    },
  ];

  const symbols = [
    {
      name: "Oq 'Volga' (GAZ-24)",
      meaning: "Kibr va halokat g‘ildiragi. Oila uchun boylik faxri bo‘lgan buyum oxir-oqibat Zufarning jismoniy o‘limiga va otaning qamoqda sinishiga olib keldi.",
    },
    {
      name: "Yashirin Sandiq va Tillalar",
      meaning: "Harom to‘plangan boylikning omonatsizligi. Yoqutxonning qamoqdagi yurak xurujiga va butun oila fojiasiga poydevor bo‘lgan ochko‘zlik tuzog‘i.",
    },
    {
      name: "Eshikdagi Qizil Mum (Plomba)",
      meaning: "Shafqatsiz qonuniy jazo va begonalashuv. Kechagi hashamatli qasrning bir kunda sovuq qamoqxonaga va yetimlik burchagiga aylanishi.",
    },
    {
      name: "Latta Qo‘g‘irchoq",
      meaning: "Murg‘ak bolalikning poymol qilingan orzulari. Nigoraning onasini intizor kutib jon berishidagi fojiali mung ifodasi.",
    },
    {
      name: "Xazon Bosgan Nogironlar Aravachasi",
      meaning: "Akbarning olovli fidosi va poklik isyoni. Harom luqma to‘la xonadon ichidagi yolg‘iz halol vijdonga motam ramzi.",
    },
  ];

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      {/* Intro */}
      <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/[0.08] shadow-lg">
        <div className="flex items-center gap-2 text-xs font-tech text-indigo-400 uppercase tracking-widest">
          <BookOpen className="w-4 h-4 text-cyan-400" />
          <span>ASAR PASPORTI & TAHLILI</span>
          <span className="text-slate-600">·</span>
          <span>1988 YILGI KLASSIKA</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white mt-1">
          “Mungli ko‘zlar” — Ijtimoiy-Falsafiy Tahlil
        </h2>
        <p className="text-sm text-slate-300 mt-2 leading-relaxed max-w-3xl">
          Hudoyberdi To‘xtaboyevning 1988-yilda chop etilgan “Mungli ko‘zlar” romani jamiyatdagi poraxo‘rlik, chayqovchilik va ma’naviy tubanlikning begunoh bolalar qismatiga urgan zarbasini ochib bergan eng ibratli asardir.
        </p>
      </div>

      {/* Characters Matrix */}
      <div className="glass-panel rounded-2xl p-6 border border-white/[0.08]">
        <h3 className="text-lg font-heading font-bold text-white mb-4 flex items-center gap-2">
          <User className="w-4 h-4 text-indigo-400" />
          <span>Qahramonlar Tizimi va Qismat Tafsilotlari</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {characters.map((char, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
            >
              <h4 className="font-heading font-bold text-white text-base">
                {char.name}
              </h4>
              <p className="text-xs text-indigo-300 font-tech mt-0.5">
                {char.role}
              </p>
              <div className="mt-3 space-y-1.5 text-xs text-slate-300">
                <p>
                  <strong className="text-white">Qismati:</strong> {char.fate}
                </p>
                {char.sin && (
                  <p className="text-rose-300">
                    <strong>Fojia sababi:</strong> {char.sin}
                  </p>
                )}
                {char.virtue && (
                  <p className="text-emerald-300">
                    <strong>Fazilati:</strong> {char.virtue}
                  </p>
                )}
                {char.transformation && (
                  <p className="text-cyan-300">
                    <strong>Evolyutsiyasi:</strong> {char.transformation}
                  </p>
                )}
                {char.symbol && (
                  <p className="text-purple-300">
                    <strong>Ramzi:</strong> {char.symbol}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cause -> Event -> Consequence */}
      <div className="glass-panel rounded-2xl p-6 border border-white/[0.08]">
        <h3 className="text-lg font-heading font-bold text-white mb-4 flex items-center gap-2">
          <Scale className="w-4 h-4 text-cyan-400" />
          <span>Sabab → Voqea → Oqibat Zanjiri</span>
        </h3>

        <div className="space-y-3 text-xs sm:text-sm">
          <div className="p-4 rounded-xl bg-indigo-950/20 border border-indigo-500/20">
            <strong className="text-indigo-300 block font-heading mb-1">
              1. Zanjir: Poraxo‘rlik va Boylikka Hirs
            </strong>
            <p className="text-slate-300">
              Saidjon Karimov ombordagi taqchil mollarni chayqovchilarga pulladi → Xonadon behisob harom pul va tillaga to‘ldi → Oila kibr va dabdabaga berildi.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-500/20">
            <strong className="text-rose-300 block font-heading mb-1">
              2. Zanjir: Qonuniy Jazo va Xonavayronlik
            </strong>
            <p className="text-slate-300">
              Jinoiy kirdikorlar fosh bo‘ldi → Saidjon 11 yilga qamaldi, Yoqutxon tergovda vafot etdi → Butun mol-mulk musodara qilinib, eshiklarga muhr urildi.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-white/[0.08]">
            <strong className="text-slate-200 block font-heading mb-1">
              3. Zanjir: Farzandlarning Ketma-Ket Qurbonligi
            </strong>
            <p className="text-slate-300">
              Akbar nomus azobida o‘zini o‘tda yoqdi → Zufar mashinani o‘g‘irlab qochib halokatda o‘ldi → Nigora intizorlik va yetimlikda xastalikdan jon berdi.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/20">
            <strong className="text-emerald-300 block font-heading mb-1">
              4. Zanjir: Ma’naviy Uyg‘onish va “Mungli Ko‘zlar”
            </strong>
            <p className="text-slate-300">
              Zafar yolg‘iz qolib, otasining xatolarini to‘liq angladi → Harom luqmadan nafratlandi → Hayotini halol mehnat va or-nomus ustiga qurishga qasam ichdi.
            </p>
          </div>
        </div>
      </div>

      {/* Symbols */}
      <div className="glass-panel rounded-2xl p-6 border border-white/[0.08]">
        <h3 className="text-lg font-heading font-bold text-white mb-4 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>Asardagi Ramziy Buyumlar va Ularning Fojiaviy Roli</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {symbols.map((sym, i) => (
            <div key={i} className="p-4 rounded-xl border border-white/[0.06] bg-white/[0.02]">
              <h4 className="font-heading font-semibold text-white text-sm">
                {sym.name}
              </h4>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                {sym.meaning}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
