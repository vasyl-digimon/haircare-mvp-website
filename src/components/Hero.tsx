export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-stone-950">
      <div className="absolute inset-0 z-0">
        <img
          src="/hero.jpg" 
          className="w-full h-full object-cover object-right md:object-center opacity-60"
          alt="Кератинове вирівнювання волосся Львів" 
        />
        {/* Градієнт, який робить текст читабельним */}
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32">
        <div className="max-w-3xl space-y-8 text-left">
          <div className="flex items-center gap-3">
            <div className="h-px w-12 bg-[#D4AF37]" />
            <span className="text-[#D4AF37] text-xs font-semibold tracking-[0.3em] uppercase">Професійний догляд у Львові</span>
          </div>

          <h1 className="font-serif text-5xl md:text-7xl font-bold text-white leading-tight">
            Кератинове <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F9E498]">вирівнювання волосся</span> <br />
            Львів
          </h1>

          <p className="text-stone-300 text-lg md:text-xl leading-relaxed max-w-xl">
            Відновлення структури, дзеркальний блиск та ідеальна гладкість. Поверніть своєму волоссю силу та здоров'я.
          </p>

          <div className="pt-4 flex flex-wrap gap-4">
            <a href="https://www.instagram.com/haircare_ua/" target="_blank" rel="noreferrer" className="inline-block px-12 py-5 bg-[#D4AF37] text-stone-950 font-bold text-sm tracking-widest uppercase rounded-full hover:bg-white transition-all shadow-lg shadow-gold-900/20">
              Записатись
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}