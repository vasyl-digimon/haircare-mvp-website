import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Contact from '../components/Contact';
import { 
  ThermometerSnowflake, 
  Flame, 
  ShieldCheck, 
  HelpCircle, 
  CheckCircle, 
  ArrowRight 
} from 'lucide-react';

export default function BotoxPage() {
  const pageUrl = "https://www.haircareua.com.ua/botoks-volossya-lviv";

  return (
    <>
      <Helmet>
        <title>Ботокс для волосся Львів: ціна, гаряче та холодне відновлення | Haircare UA</title>
        <meta name="description" content="Професійне відновлення волосся ботоксом у Львові. Приборкуємо пухнастість, повертаємо еластичність та здоровий блиск без втрати об'єму. Записуйтесь!" />
        <link rel="canonical" href={pageUrl} />

        {/* JSON-LD Service Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Service",
            "serviceType": "Ботокс для волосся",
            "provider": {
              "@type": "BeautySalon",
              "name": "Haircare UA",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "вул. Костюшка, 18",
                "addressLocality": "Львів",
                "addressCountry": "UA"
              }
            },
            "areaServed": {
              "@type": "City",
              "name": "Львів"
            },
            "offers": {
              "@type": "Offer",
              "priceCurrency": "UAH",
              "price": "800"
            }
          })}
        </script>
      </Helmet>

      <div className="pt-20 bg-stone-950 text-white selection:bg-[#D4AF37] selection:text-black">
        
        {/* 1. HERO SECTION */}
        <section className="relative min-h-[65vh] flex items-center border-b border-stone-900 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="/botoks-volossya.avif" 
              className="w-full h-full object-cover opacity-30 object-center" 
              alt="Ботокс для волосся Львів результат" 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/75 to-transparent" />
          </div>
          
          <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
            <div className="max-w-3xl">
              <nav className="flex gap-2 text-stone-500 text-[10px] uppercase tracking-widest mb-8 font-bold text-balance">
                <Link to="/" className="hover:text-[#D4AF37] transition-colors">Головна</Link>
                <span>/</span>
                <span className="text-[#D4AF37]">Ботокс</span>
              </nav>
              <h1 className="font-serif text-4xl md:text-7xl font-bold leading-tight mb-6 text-balance uppercase tracking-tight">
                Ботокс для волосся: <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F9E498]">дзеркальний блиск</span>
              </h1>
              <p className="text-stone-300 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl">
                Інтенсивне живлення та колагенове відновлення у Львові. 
                Приборкуємо пухнастість, повертаємо еластичність та здоровий вигляд за один візит.
              </p>
              <a 
                href="https://www.instagram.com/haircare_ua/" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-3 px-10 py-5 bg-[#D4AF37] text-black font-bold uppercase text-xs tracking-widest rounded-full hover:bg-white transition-all shadow-2xl"
              >
                Записатись на діагностику <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>

        {/* 2. THE CHOICE: HOT VS COLD */}
        <section className="py-24 bg-stone-900/20 border-b border-stone-900">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-serif text-3xl md:text-4xl text-center mb-16 tracking-tight">Дві техніки — <span className="text-[#D4AF37]">різні цілі</span></h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-stone-950 p-10 rounded-[40px] border border-stone-800 hover:border-blue-900/30 transition-all group">
                <ThermometerSnowflake className="text-blue-400 mb-6 group-hover:scale-110 transition-transform" size={40} />
                <h3 className="text-white font-serif text-2xl mb-4">Холодне відновлення</h3>
                <p className="text-stone-400 text-sm leading-relaxed">
                  Працює виключно на внутрішню структуру без використання праски. 
                  Це справжня «терапія» для вкрай пошкодженого, ламкого волосся та блонду, що втратив силу.
                </p>
              </div>
              <div className="bg-stone-950 p-10 rounded-[40px] border border-stone-800 hover:border-orange-900/30 transition-all group">
                <Flame className="text-orange-500 mb-6 group-hover:scale-110 transition-transform" size={40} />
                <h3 className="text-white font-serif text-2xl mb-4">Гарячий ботокс</h3>
                <p className="text-stone-400 text-sm leading-relaxed">
                  Поєднує глибоке живлення з візуальним ефектом. Склад герметизується під дією температури, 
                  створюючи захисну оболонку, неймовірний глянець та легке розчісування.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. IDEAL CANDIDATES & VALUE PROP */}
        <section className="py-24 bg-stone-950">
          <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="font-serif text-3xl md:text-5xl tracking-tight">Дисципліна <br/><span className="text-[#D4AF37]">без радикальних змін</span></h2>
              <div className="h-1 w-20 bg-[#D4AF37]" />
              <p className="text-stone-300 leading-relaxed text-lg">
                На відміну від кератину, ботокс не руйнує дисульфідні зв’язки. Він робить природні кучері структурованими та важкими, не випрямляючи їх у "палки".
              </p>
              <div className="grid gap-4">
                {['Освітлений блонд', 'Надмірна пухнастість', 'Сухість та посічені кінчики', 'Тонке волосся без блиску'].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-stone-400 text-sm">
                    <CheckCircle size={18} className="text-[#D4AF37] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative group p-4 bg-white/5 rounded-[40px] border border-stone-800">
               <img src="/rev2.avif" className="w-full h-auto rounded-[32px] shadow-2xl grayscale-[20%] group-hover:grayscale-0 transition-all duration-700" alt="Ботокс волосся догляд" />
            </div>
          </div>
        </section>

        {/* 4. SAFETY & PRICE TABLE */}
        <section className="py-24 bg-stone-900/20 border-y border-stone-900">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
               <ShieldCheck className="text-[#D4AF37] mx-auto mb-6" size={48} />
               <h2 className="font-serif text-3xl md:text-5xl mb-6 tracking-tight uppercase">Вартість у Львові</h2>
               <p className="text-stone-400 text-sm italic">Ми працюємо з низькотемпературними режимами та складами, багатими на олії та протеїни.</p>
            </div>
            
            <div className="overflow-hidden rounded-3xl border border-stone-800 bg-stone-950 shadow-2xl">
              <div className="p-8 md:p-12 space-y-8">
                <div className="flex justify-between items-center border-b border-stone-800 pb-6 text-lg">
                  <span className="text-stone-300">Холодне відновлення (SOS)</span>
                  <span className="text-[#D4AF37] font-bold">від 800 грн</span>
                </div>
                <div className="flex justify-between items-center border-b border-stone-800 pb-6 text-lg">
                  <span className="text-stone-300">Гарячий ботокс (коротка)</span>
                  <span className="text-[#D4AF37] font-bold">від 1500 грн</span>
                </div>
                <div className="flex justify-between items-center border-b border-stone-800 pb-6 text-lg">
                  <span className="text-stone-300">Гарячий ботокс (середня)</span>
                  <span className="text-[#D4AF37] font-bold">від 1800 грн</span>
                </div>
                <div className="flex justify-between items-center border-b border-stone-800 pb-6 text-lg">
                  <span className="text-stone-300">Гарячий ботокс (довге)</span>
                  <span className="text-[#D4AF37] font-bold">від 2200 грн</span>
                </div>
              </div>
            </div>
            <p className="text-center text-stone-500 text-[10px] mt-6 uppercase tracking-widest">* Остаточна ціна після тесту на еластичність</p>
          </div>
        </section>

        {/* 5. FAQ SECTION */}
        <section className="py-24 bg-stone-950">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="font-serif text-3xl text-center mb-16 uppercase tracking-[0.2em] text-[#D4AF37]">Експертний FAQ</h2>
            <div className="space-y-6">
              {[
                { q: "Чи стане волосся жирним швидше?", a: "Ні. Склад наноситься з відступом від коренів. Я допоможу підібрати правильний шампунь, щоб очищення було ефективним." },
                { q: "Чи можна робити ботокс після фарбування?", a: "Рекомендую почекати 10-14 днів. Ботокс може трохи 'виштовхнути' свіжий пігмент через дію компонентів." },
                { q: "Чим ботокс кращий за кератин?", a: "Він не кращий, він інший. Кератин — про випрямлення. Ботокс — про наповнення та якість без втрати об'єму." },
                { q: "Чи обов'язково сушити волосся феном?", a: "Так. Ботокс термоактивний. Тепле повітря розправляє захисну плівку і створює той самий глянець." }
              ].map((faq, i) => (
                <div key={i} className="group p-8 border border-stone-800 rounded-3xl bg-stone-900/10 hover:border-[#D4AF37]/30 transition-all">
                  <h4 className="flex items-center gap-3 text-white font-bold mb-4 text-balance">
                    <HelpCircle size={20} className="text-[#D4AF37]" /> {faq.q}
                  </h4>
                  <p className="text-stone-400 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. INTERNAL LINKING */}
        <section className="py-20 border-t border-stone-900 bg-stone-950 text-center">
           <p className="text-stone-500 text-sm mb-4 italic">Мрієте про ідеальну гладкість без кучерів?</p>
           <Link to="/keratynove-vyrivnyuvannya-lviv" className="text-[#D4AF37] hover:text-white transition-colors underline underline-offset-8 decoration-stone-800 font-bold uppercase text-xs tracking-widest">
             Кератинове вирівнювання волосся у Львові
           </Link>
        </section>

        <Contact />
      </div>
    </>
  );
}