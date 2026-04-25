import { Instagram, Quote } from 'lucide-react';

const reviewsList = [
  { img: "/rev1.avif", label: "Після миття" },
  { img: "/rev2.avif", label: "Результат" },
  { img: "/rev4.avif", label: "Враження" },
];

export default function Reviews() {
  return (
    <section className="py-24 bg-stone-950 border-t border-stone-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-6 italic">
              Що кажуть <span className="text-[#D4AF37]">клієнтки</span>
            </h2>
            <p className="text-stone-400 leading-relaxed">
              Найкраща оцінка моєї роботи — це ваші повідомлення та впевненість, яку ви отримуєте разом із новим виглядом вашого волосся.
            </p>
          </div>
          <a 
            href="https://www.instagram.com/haircare_ua/" 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center gap-3 px-6 py-3 border border-[#D4AF37]/30 rounded-full text-[#D4AF37] hover:bg-[#D4AF37] hover:text-stone-950 transition-all text-xs font-bold uppercase tracking-widest"
          >
            <Instagram size={18} />
            Більше в Instagram
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviewsList.map((rev, i) => (
            <div key={i} className="group relative">
              {/* Декоративна кавичка */}
              <Quote className="absolute -top-4 -left-4 text-[#D4AF37]/20 w-12 h-12" />
              
              <div className="overflow-hidden rounded-2xl border border-stone-800 bg-stone-900/50 p-2 transition-all duration-500 group-hover:border-[#D4AF37]/50 group-hover:shadow-[0_0_30px_rgba(212,175,55,0.1)]">
                <img 
                  src={rev.img} 
                  alt="Відгук клієнтки Haircare UA" 
                  className="w-full h-auto rounded-xl grayscale-[30%] group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              
              <div className="mt-4 flex justify-center">
                <span className="text-[10px] uppercase tracking-[0.3em] text-stone-500 font-bold">
                  {rev.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}