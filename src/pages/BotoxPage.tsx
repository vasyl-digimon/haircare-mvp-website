import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Contact from '../components/Contact';
import { 
  ShieldCheck, 
  Clock, 
  Star, 
  Flame, 
  Snowflake, 
  HelpCircle 
} from 'lucide-react';

export default function BotoxPage() {
  return (
    <>
      <Helmet>
        <title>Ботокс для волосся Львів: Ціна, Фото До/Після, Відгуки | Haircare UA</title>
        <meta name="description" content="Професійне відновлення волосся ботоксом у Львові. Гаряча та холодна техніки. Результат за 2 години. Дивіться фото до/після та записуйтесь онлайн!" />
        <link rel="canonical" href="https://www.haircareua.com.ua/botoks-volossya-lviv" />
        
        {/* JSON-LD Structured Data для Google */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org/",
              "@type": "Service",
              "serviceType": "Ботокс для волосся",
              "provider": {
                "@type": "BeautySalon",
                "name": "Haircare UA"
              },
              "areaServed": {
                "@type": "City",
                "name": "Львів"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Botox Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Холодний ботокс"
                    },
                    "price": "800",
                    "priceCurrency": "UAH"
                  }
                ]
              }
            }
          `}
        </script>
      </Helmet>

      <div className="pt-20 bg-stone-950 text-white selection:bg-[#D4AF37] selection:text-black">
        
        {/* 1. HERO - Commercial Intent */}
        <section className="relative min-h-[70vh] flex items-center border-b border-stone-900 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src="/botoks-volossya.avif" className="w-full h-full object-cover opacity-30 object-center" alt="Ботокс для волосся Львів" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/80 to-transparent" />
          </div>
          
          <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-6">
                <div className="flex text-[#D4AF37]">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="#D4AF37" />)}
                </div>
                <span className="text-stone-400 text-[10px] uppercase tracking-widest font-bold">Топ-майстер у Львові</span>
              </div>
              <h1 className="font-serif text-4xl md:text-7xl font-bold leading-tight mb-6">
                Ботокс для <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F9E498]">волосся Львів</span>
              </h1>
              <p className="text-stone-300 text-lg md:text-xl mb-10 leading-relaxed italic">
                Відновлення "вбитого" волосся за 2 години. Дзеркальний блиск та шовковистість без втрати об'єму.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="https://www.instagram.com/haircare_ua/" className="px-8 py-4 bg-[#D4AF37] text-black font-bold uppercase text-xs tracking-widest rounded-full hover:bg-white transition-all shadow-xl">
                  Записатись у Direct
                </a>
                <a href="#prices" className="px-8 py-4 border border-stone-700 text-white font-bold uppercase text-xs tracking-widest rounded-full hover:border-[#D4AF37] transition-all">
                  Ціни від 800 грн
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 2. WHY CHOOSE US - Trust & Differentiation */}
        <section className="py-24 bg-stone-900/20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-12">
              <div className="space-y-4 border-l border-[#D4AF37]/30 pl-6">
                <ShieldCheck className="text-[#D4AF37]" size={32} />
                <h3 className="font-serif text-xl">Безпечні склади</h3>
                <p className="text-stone-400 text-sm">Працюю на преміум-брендах без різкого запаху. Безпечно для здоров'я.</p>
              </div>
              <div className="space-y-4 border-l border-[#D4AF37]/30 pl-6">
                <Clock className="text-[#D4AF37]" size={32} />
                <h3 className="font-serif text-xl">Ефект до 4 місяців</h3>
                <p className="text-stone-400 text-sm">Процедура має накопичувальну властивість. Ваше волосся стає кращим з кожним разом.</p>
              </div>
              <div className="space-y-4 border-l border-[#D4AF37]/30 pl-6">
                <Star className="text-[#D4AF37]" size={32} />
                <h3 className="font-serif text-xl">Індивідуальний підбір</h3>
                <p className="text-stone-400 text-sm">Не роблю всім однаковий склад. Тестую волосся на еластичність перед процедурою.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. TYPES - Expertise Coverage */}
        <section className="py-24 border-y border-stone-900">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="font-serif text-3xl md:text-5xl text-center mb-16 italic">Яку техніку <span className="text-[#D4AF37]">обрати?</span></h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-stone-900/40 p-10 rounded-3xl border border-stone-800 hover:border-orange-500/20 transition-all group">
                <Flame className="text-orange-500 mb-6 group-hover:scale-110 transition-transform" size={40} />
                <h4 className="text-xl font-bold mb-4 uppercase tracking-tighter">Гарячий ботокс</h4>
                <p className="text-stone-400 text-sm leading-relaxed mb-6">Ідеально для пухнастого волосся, що реагує на вологість. Прибирає "ялинку", додає неймовірний глянець та легке розгладження.</p>
                <div className="text-xs text-stone-500 font-bold uppercase tracking-widest">Ефект: Візуал + Живлення</div>
              </div>
              <div className="bg-stone-900/40 p-10 rounded-3xl border border-stone-800 hover:border-blue-500/20 transition-all group">
                <Snowflake className="text-blue-400 mb-6 group-hover:scale-110 transition-transform" size={40} />
                <h4 className="text-xl font-bold mb-4 uppercase tracking-tighter">Холодний ботокс</h4>
                <p className="text-stone-400 text-sm leading-relaxed mb-6">SOS-відновлення для дуже пошкодженого, ламкого або освітленого волосся. Працює всередині структури без використання високих температур.</p>
                <div className="text-xs text-stone-500 font-bold uppercase tracking-widest">Ефект: Лікування + Сила</div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. PRICES - Transparancy */}
        <section id="prices" className="py-24">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-5xl mb-4">Вартість процедури</h2>
              <p className="text-stone-500 uppercase tracking-widest text-[10px] font-bold">Львів — Центр</p>
            </div>
            <div className="bg-[#D4AF37]/5 p-8 md:p-12 rounded-[40px] border border-[#D4AF37]/20">
              <div className="space-y-6">
                <div className="flex justify-between items-center border-b border-stone-800 pb-4">
                  <span className="text-stone-300">Холодне відновлення</span>
                  <span className="text-[#D4AF37] font-bold">від 800 грн</span>
                </div>
                <div className="flex justify-between items-center border-b border-stone-800 pb-4">
                  <span className="text-stone-300">Ботокс (коротке волосся)</span>
                  <span className="text-[#D4AF37] font-bold">від 1500 грн</span>
                </div>
                <div className="flex justify-between items-center border-b border-stone-800 pb-4">
                  <span className="text-stone-300">Ботокс (середня довжина)</span>
                  <span className="text-[#D4AF37] font-bold">від 1800 грн</span>
                </div>
                <div className="flex justify-between items-center border-b border-stone-800 pb-4">
                  <span className="text-stone-300">Ботокс (довге волосся)</span>
                  <span className="text-[#D4AF37] font-bold">від 2200 грн</span>
                </div>
              </div>
              <p className="mt-8 text-stone-500 text-[11px] italic leading-relaxed text-center">
                * Доплата за густоту або нарощене волосся — 200-400 грн. <br />
                Мийте голову в день процедури — це пришвидшить роботу!
              </p>
            </div>
          </div>
        </section>

        {/* 5. FAQ - Objection Handling */}
        <section className="py-24 bg-stone-900/30">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="font-serif text-3xl text-center mb-12 italic">Запитання-відповіді</h2>
            <div className="space-y-6">
              {[
                { q: "Чи можна робити ботокс на блонд?", a: "Так! Холодний ботокс — це найкраща процедура для реабілітації освітленого волосся. Він прибирає ламкість та заповнює порожнечі." },
                { q: "Скільки триває сеанс?", a: "Зазвичай від 1.5 до 2.5 годин, залежно від густоти вашого волосся та обраної техніки." },
                { q: "Коли можна мити голову?", a: "Сучасні професійні склади дозволяють мити голову вже через кілька годин після процедури." },
                { q: "Чи забере процедура об'єм?", a: "Гарячий ботокс може візуально зменшити зайву пухнастість, але холодний ботокс на об'єм ніяк не впливає." }
              ].map((faq, index) => (
                <div key={index} className="p-6 border border-stone-800 rounded-2xl bg-stone-950">
                  <h4 className="flex items-center gap-3 text-[#D4AF37] font-bold mb-3">
                    <HelpCircle size={18} /> {faq.q}
                  </h4>
                  <p className="text-stone-400 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. INTERNAL LINKING - Semantic Strength */}
        <section className="py-12 border-t border-stone-900 bg-stone-950">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-stone-500 text-xs uppercase tracking-widest mb-4 font-bold italic">Інші послуги Haircare UA</p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/keratynove-vyrivnyuvannya-lviv" className="text-stone-300 hover:text-[#D4AF37] text-sm underline-offset-4 hover:underline">Кератинове вирівнювання</Link>
              <Link to="/" className="text-stone-300 hover:text-[#D4AF37] text-sm underline-offset-4 hover:underline">Нанопластика волосся</Link>
            </div>
          </div>
        </section>

        <Contact />
      </div>
    </>
  );
}