export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-stone-950">
      <div className="absolute inset-0 z-0">
        <img
          src="/hero.jpg" 
          className="w-full h-full object-cover object-[70%_center] md:object-center opacity-60"
          alt="Професійне вирівнювання волосся Львів" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-20 pb-12 md:py-32">
        <div className="max-w-3xl space-y-6 md:space-y-8 text-left">
          <div className="flex items-center gap-3">
            <div className="h-px w-8 md:w-12 bg-[#D4AF37]" />
            <span className="text-[#D4AF37] text-[10px] md:text-xs font-semibold tracking-[0.3em] uppercase">
              Студія краси волосся Haircare UA
            </span>
          </div>

          {/* Новий SEO H1 для Головної */}
          <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] md:leading-tight break-words h-auto">
            Професійне <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F9E498] inline-block">
              вирівнювання та відновлення
            </span> <br />
            волосся у Львові
          </h1>

          <p className="text-stone-300 text-base md:text-xl leading-relaxed max-w-md md:max-w-xl text-balance italic">
            Допомагаємо підібрати ідеальну процедуру для вашого типу волосся — кератин, ботокс або нанопластика. Працюємо на результат.
          </p>

          <div className="pt-4 flex flex-wrap gap-4">
            <a href="https://www.instagram.com/haircare_ua/" 
               target="_blank" 
               rel="noreferrer" 
               className="inline-block px-10 py-4 md:px-12 md:py-5 bg-[#D4AF37] text-stone-950 font-bold text-xs md:text-sm tracking-widest uppercase rounded-full hover:bg-white transition-all shadow-lg shadow-gold-900/20">
              Записатись
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}