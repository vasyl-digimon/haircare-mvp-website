import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Contact from '../components/Contact';
import { 
  ThermometerSnowflake, 
  Flame, 
  HelpCircle, 
  CheckCircle, 
  ArrowRight,
  Camera,
  XCircle,
  Instagram
} from 'lucide-react';

export default function BotoxPage() {
  const pageUrl = "https://www.haircareua.com.ua/botoks-volossya-lviv";

  return (
    <>
      <Helmet>
        <title>Ботокс для волосся Львів: Ціна, Відгуки, Фото | Haircare UA</title>
        <meta name="description" content="Професійне відновлення волосся ботоксом у Львові. Гаряча та холодна техніки. Дзеркальний блиск без втрати об'єму. Отримайте ціну за фото в Direct!" />
        <link rel="canonical" href={pageUrl} />
      </Helmet>

      <div className="pt-20 bg-stone-950 text-white selection:bg-[#D4AF37] selection:text-black font-sans">
        
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
              <p className="text-stone-300 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl italic">
                Живлення та відновлення структури без втрати об'єму. Приборкуємо пухнастість та повертаємо здоровий глянець за один візит.
              </p>
              <a href="https://www.instagram.com/haircare_ua/" className="inline-flex items-center gap-3 px-10 py-5 bg-[#D4AF37] text-black font-bold uppercase text-xs tracking-widest rounded-full hover:bg-white transition-all shadow-2xl">
                Записатись на діагностику <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>

        {/* 2. THE CHOICE: HOT VS COLD */}
        <section className="py-24 bg-stone-900/20 border-b border-stone-900">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-serif text-3xl md:text-4xl mb-16 text-center tracking-tight">Дві техніки — <span className="text-[#D4AF37]">різні цілі</span></h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-stone-950 p-10 rounded-[40px] border border-stone-800 hover:border-blue-900/30 transition-all group">
                <div className="flex justify-between items-start mb-6">
                  <ThermometerSnowflake className="text-blue-400 group-hover:scale-110 transition-transform" size={40} />
                  <span className="text-[10px] text-stone-600 uppercase tracking-widest border border-stone-800 px-3 py-1 rounded-full">Лікування</span>
                </div>
                <h3 className="text-white font-serif text-2xl mb-4">Холодне відновлення</h3>
                <p className="text-stone-400 text-sm leading-relaxed">SOS-терапія без праски. Працює всередині структури. Ідеально для реанімації блонду та вкрай пошкоджених пасом.</p>
              </div>
              <div className="bg-stone-950 p-10 rounded-[40px] border border-stone-800 hover:border-orange-900/30 transition-all group">
                <div className="flex justify-between items-start mb-6">
                  <Flame className="text-orange-500 group-hover:scale-110 transition-transform" size={40} />
                  <span className="text-[10px] text-stone-600 uppercase tracking-widest border border-stone-800 px-3 py-1 rounded-full">Візуал</span>
                </div>
                <h3 className="text-white font-serif text-2xl mb-4">Гарячий ботокс</h3>
                <p className="text-stone-400 text-sm leading-relaxed">Поєднує живлення з миттєвим естетичним ефектом. Прибирає "ялинку", додає глянець та полегшує укладку.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. КРОК 3: ADAPTIVE COMPARISON (Ботокс чи Кератин?) */}
        <section className="py-24 bg-stone-950">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="font-serif text-3xl md:text-5xl text-center mb-16 tracking-tight uppercase">Ботокс чи Кератин?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Botox Column */}
              <div className="bg-stone-900/30 p-8 rounded-3xl border border-stone-800">
                <h4 className="text-[#D4AF37] font-bold uppercase text-xs tracking-widest mb-6">Тобі потрібен Ботокс, якщо:</h4>
                <ul className="space-y-4">
                  {[
                    "Хочеш зберегти природний об'єм",
                    "Волосся пошкоджене, сухе або ламке",
                    "Потрібно прибрати пухнастість, але залишити кучері",
                    "Твоя мета — глибоке живлення та оздоровлення"
                  ].map((text) => (
                    <li key={text} className="flex gap-3 text-stone-300 text-sm">
                      <CheckCircle className="text-[#D4AF37] shrink-0" size={18} /> {text}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Keratin Column */}
              <div className="bg-stone-950 p-8 rounded-3xl border border-stone-800">
                <h4 className="text-stone-500 font-bold uppercase text-xs tracking-widest mb-6">Тобі потрібен Кератин, якщо:</h4>
                <ul className="space-y-4 text-stone-500">
                  {[
                    "Мрієш про 100% ідеальну гладкість",
                    "Втомилася від щоденної праски",
                    "Хочеш максимально випрямити завиток",
                    "Потрібен ефект до 6 місяців"
                  ].map((text) => (
                    <li key={text} className="flex gap-3 text-sm">
                      <XCircle className="shrink-0" size={18} /> {text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 4. PRICE TABLE */}
        <section id="prices" className="py-24 bg-stone-900/20 border-y border-stone-900">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="font-serif text-3xl md:text-5xl mb-12 text-center tracking-tight uppercase">Вартість</h2>
            <div className="bg-stone-950 p-8 md:p-12 rounded-[40px] border border-stone-800 shadow-2xl">
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
            </div>
          </div>
        </section>

        {/* 5. КРОК 4: PHOTO CTA (Діагностика за фото) */}
        <section className="py-20 bg-stone-950">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-gradient-to-br from-[#D4AF37] to-[#B8860B] p-10 rounded-[40px] text-stone-950 text-center relative overflow-hidden group shadow-2xl shadow-gold-900/20">
              <Camera size={80} className="absolute -top-4 -right-4 opacity-10 group-hover:scale-110 transition-transform" />
              <h3 className="font-serif text-3xl md:text-4xl font-bold mb-4">Діагностика за фото</h3>
              <p className="mb-8 font-medium max-w-xl mx-auto">
                Не впевнені, яку процедуру обрати? Надішліть фото вашого волосся в Direct. Я безкоштовно проконсультую та розрахую точну вартість.
              </p>
              <a 
                href="https://www.instagram.com/haircare_ua/" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-10 py-5 bg-stone-950 text-white font-bold uppercase text-xs tracking-widest rounded-2xl hover:bg-white hover:text-black transition-all"
              >
                <Instagram size={20} /> Надіслати фото
              </a>
            </div>
          </div>
        </section>

        {/* 6. FAQ */}
        <section className="py-24 border-t border-stone-900">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="font-serif text-3xl text-center mb-16 uppercase tracking-[0.2em] text-[#D4AF37]">FAQ</h2>
            <div className="space-y-6">
              {[
                { q: "Чи стане волосся жирним швидше?", a: "Ні. Склад наноситься з відступом 1-2 см. Я підберу правильний шампунь для очищення шкіри голови." },
                { q: "Чи можна робити ботокс на блонд?", a: "Це найкраща процедура для блондинок. Вона наповнює порожню структуру та зупиняє ламкість." },
                { q: "Чи обов'язково сушити волосся феном?", a: "Так. Компоненти ботоксу термоактивні. Дзеркальний блиск з'являється тільки під дією тепла." }
              ].map((faq, i) => (
                <div key={i} className="p-8 border border-stone-800 rounded-3xl bg-stone-900/10 hover:border-[#D4AF37]/30 transition-all">
                  <h4 className="flex items-center gap-3 text-white font-bold mb-4">
                    <HelpCircle size={20} className="text-[#D4AF37]" /> {faq.q}
                  </h4>
                  <p className="text-stone-400 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Contact />
      </div>
    </>
  );
}