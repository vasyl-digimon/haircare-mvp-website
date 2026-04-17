export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-stone-950">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1599849594171-47e30c10ee63?auto=format&fit=crop&q=80&w=1920"
          className="w-full h-full object-cover object-center opacity-40"
          alt="" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/60 to-transparent" />
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

          <div className="pt-4">
            <a href="https://www.instagram.com/haircare_ua/" target="_blank" rel="noreferrer" className="inline-block px-12 py-5 bg-[#D4AF37] text-stone-950 font-bold text-sm tracking-widest uppercase rounded-full hover:bg-white transition-all">
              Записатись
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}