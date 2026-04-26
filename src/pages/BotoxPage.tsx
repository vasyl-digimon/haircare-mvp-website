import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Contact from '../components/Contact';
import { 
  ThermometerSnowflake, 
  Flame, 
  HelpCircle, 
  CheckCircle, 
  ArrowRight 
} from 'lucide-react';

export default function BotoxPage() {
  const pageUrl = "https://www.haircareua.com.ua/botoks-volossya-lviv";

  return (
    <>
      <Helmet>
        <title>Ботокс для волосся Львів: Ціна, Відгуки, Фото | Haircare UA</title>
        <meta name="description" content="Професійний ботокс для волосся у Львові (центр). Гаряча та холодна техніки відновлення. Дзеркальний блиск без втрати об'єму. Дивіться результати та записуйтесь!" />
        <link rel="canonical" href={pageUrl} />
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
              <nav className="flex gap-2 text-stone-500 text-[10px] uppercase tracking-widest mb-8 font-bold">
                <Link to="/" className="hover:text-[#D4AF37] transition-colors">Головна</Link>
                <span>/</span>
                <span className="text-[#D4AF37]">Ботокс для волосся</span>
              </nav>
              <h1 className="font-serif text-4xl md:text-7xl font-bold leading-tight mb-6 text-balance uppercase tracking-tight">
                Ботокс для волосся <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F9E498]">у Львові</span>
              </h1>
              <p className="text-stone-300 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl">
                Глибоке живлення та колагенове відновлення. Приборкуємо пухнастість та повертаємо здоровий блиск без втрати природного об'єму.
              </p>
              <div className="flex flex-wrap gap-4">
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
          </div>
        </section>

        {/* 2. THE CHOICE: HOT VS COLD */}
        <section className="py-24 bg-stone-900/20 border-b border-stone-900">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="font-serif text-3xl md:text-4xl mb-16 tracking-tight">Дві техніки — <span className="text-[#D4AF37]">різні цілі</span></h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-stone-950 p-10 rounded-[40px] border border-stone-800 hover:border-blue-900/30 transition-all group text-left">
                <div className="flex justify-between items-start mb-6">
                  <ThermometerSnowflake className="text-blue-400 group-hover:scale-110 transition-transform" size={40} />
                  <span className="text-[10px] text-stone-600 uppercase tracking-widest border border-stone-800 px-3 py-1 rounded-full">Лікування</span>
                </div>
                <h3 className="text-white font-serif text-2xl mb-4">Холодне відновлення</h3>
                <p className="text-stone-400 text-sm leading-relaxed">
                  SOS-терапія без використання праски. Працює на внутрішньому рівні волосся. Ідеально для реанімації блонду та вкрай пошкоджених пасом.
                </p>
              </div>
              <div className="bg-stone-950 p-10 rounded-[40px] border border-stone-800 hover:border-orange-900/30 transition-all group text-left">
                <div className="flex justify-between items-start mb-6">
                  <Flame className="text-orange-500 group-hover:scale-110 transition-transform" size={40} />
                  <span className="text-[10px] text-stone-600 uppercase tracking-widest border border-stone-800 px-3 py-1 rounded-full">Візуал</span>
                </div>
                <h3 className="text-white font-serif text-2xl mb-4">Гарячий ботокс</h3>
                <p className="text-stone-400 text-sm leading-relaxed">
                  Поєднує живлення з миттєвим естетичним ефектом. Прибирає "ялинку", додає дзеркальний глянець та полегшує укладку.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. DIAGNOSTICS - PROOF OF EXPERTISE */}
        <section className="py-24 bg-stone-950">
          <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative group p-4 bg-white/5 rounded-[40px] border border-stone-800">
               <img src="/rev2.avif" className="w-full h-auto rounded-[32px] shadow-2xl" alt="Відгук ботокс волосся" />
            </div>
            <div className="space-y-8">
              <h2 className="font-serif text-3xl md:text-5xl tracking-tight uppercase">Чому обирають <br/><span className="text-[#D4AF37]">Haircare UA?</span></h2>
              <div className="h-1 w-20 bg-[#D4AF37]" />
              <p className="text-stone-300 leading-relaxed text-lg">
                Я не просто наношу склад. Кожна процедура починається з <strong>тесту на еластичність</strong>. Це дозволяє мені підібрати безпечну температуру та склад, щоб не пошкодити ваше волосся.
              </p>
              <div className="grid gap-4">
                {[
                  'Індивідуальний підбір техніки під тип волосся',
                  'Преміум-склади без їдкого запаху та диму',
                  'Збереження природного об\'єму',
                  'Професійна консультація по домашньому догляду'
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-stone-400 text-sm">
                    <CheckCircle size={18} className="text-[#D4AF37] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 4. PRICE TABLE */}
        <section className="py-24 bg-stone-900/20 border-y border-stone-900">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
               <h2 className="font-serif text-3xl md:text-5xl mb-6 tracking-tight uppercase">Вартість у Львові</h2>
               <p className="text-stone-500 text-[10px] uppercase tracking-[0.3em]">Студія в центрі міста</p>
            </div>
            
            <div className="overflow-hidden rounded-3xl border border-stone-800 bg-stone-950 shadow-2xl">
              <div className="p-8 md:p-12 space-y-8">
                <div className="flex justify-between items-center border-b border-stone-800 pb-6 text-lg">
                  <span className="text-stone-300">Холодне відновлення (SOS)</span>
                  <span className="text-[#D4AF37] font-bold">від 800 грн</span>
                </div>
                <div className="flex justify-between items-center border-b border-stone-800 pb-6 text-lg">
                  <span className="text-stone-300">Ботокс (коротке волосся)</span>
                  <span className="text-[#D4AF37] font-bold">від 1500 грн</span>
                </div>
                <div className="flex justify-between items-center border-b border-stone-800 pb-6 text-lg">
                  <span className="text-stone-300">Ботокс (середня довжина)</span>
                  <span className="text-[#D4AF37] font-bold">від 1800 грн</span>
                </div>
                <div className="flex justify-between items-center border-b border-stone-800 pb-6 text-lg">
                  <span className="text-stone-300">Ботокс (довге волосся)</span>
                  <span className="text-[#D4AF37] font-bold">від 2200 грн</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. EXPERT FAQ */}
        <section className="py-24 bg-stone-950">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="font-serif text-3xl text-center mb-16 uppercase tracking-[0.2em] text-[#D4AF37]">FAQ</h2>
            <div className="space-y-6">
              {[
                { q: "Чи стане волосся жирним швидше?", a: "Ні. Склад наноситься з відступом 1-2 см від коренів. Я допоможу підібрати правильний шампунь для вашого типу шкіри голови." },
                { q: "Скільки триває сеанс?", a: "Залежно від густоти — від 1.5 до 2.5 годин. Ми працюємо на якість, а не на швидкість." },
                { q: "Чи можна робити ботокс на блонд?", a: "Це найкраща процедура для блондинок. Вона наповнює порожню структуру волосини та зупиняє ламкість." },
                { q: "Чи обов'язково сушити волосся феном?", a: "Так. Компоненти ботоксу термоактивні. Тільки під дією теплого повітря ви отримаєте той самий дзеркальний блиск." }
              ].map((faq, i) => (
                <div key={i} className="group p-8 border border-stone-800 rounded-3xl bg-stone-900/10 hover:border-[#D4AF37]/30 transition-all">
                  <h4 className="flex items-center gap-3 text-white font-bold mb-4">
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
           <p className="text-stone-500 text-sm mb-4">Бажаєте максимального випрямлення?</p>
           <Link to="/keratynove-vyrivnyuvannya-lviv" className="text-[#D4AF37] hover:text-white transition-colors underline underline-offset-8 decoration-stone-800 font-bold uppercase text-xs tracking-widest">
             Кератинове вирівнювання волосся у Львові
           </Link>
        </section>

        <Contact />
      </div>
    </>
  );
}