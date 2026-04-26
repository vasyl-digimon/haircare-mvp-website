import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Contact from '../components/Contact';
import { 
  Leaf, 
  ShieldCheck, 
  Clock, 
  Beaker, 
  AlertTriangle, 
  HelpCircle, 
  ArrowRight ,
  CheckCircle
} from 'lucide-react';

export default function NanoplastyPage() {
  const pageUrl = "https://www.haircareua.com.ua/nanoplastyka-volossya-lviv";
  
  return (
    <>
      <Helmet>
        <title>Нанопластика волосся Львів: ціна, безпечне випрямлення | Haircare UA</title>
        <meta name="description" content="Органічне амінокислотне випрямлення волосся у Львові. Без формальдегіду, безпечно для вагітних. Ідеальна гладкість до 6 місяців. Записуйтесь на консультацію!" />
        <link rel="canonical" href={pageUrl} />

        {/* JSON-LD Service Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Service",
            "serviceType": "Нанопластика волосся",
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
              "price": "1800"
            }
          })}
        </script>
      </Helmet>

      <div className="pt-20 bg-stone-950 text-white selection:bg-[#D4AF37] selection:text-black">
        
        {/* HERO SECTION */}
        <section className="relative min-h-[60vh] flex items-center border-b border-stone-900 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="/nanoplastyka-volossya.avif" 
              className="w-full h-full object-cover opacity-30 object-center" 
              alt="Нанопластика волосся Львів" 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/70 to-transparent" />
          </div>
          
          <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
            <div className="max-w-3xl">
              <nav className="flex gap-2 text-stone-500 text-[10px] uppercase tracking-widest mb-8 font-bold">
                <Link to="/" className="hover:text-[#D4AF37] transition-colors">Головна</Link>
                <span>/</span>
                <span className="text-[#D4AF37]">Нанопластика</span>
              </nav>
              <h1 className="font-serif text-4xl md:text-7xl font-bold leading-tight mb-6 text-balance">
                Нанопластика волосся: <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F9E498]">гладкість без токсинів</span>
              </h1>
              <p className="text-stone-300 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl">
                Органічне амінокислотне випрямлення, яке приборкує навіть найжорсткіший завиток. 
                Безпечна процедура без токсичних випарів та їдкого запаху.
              </p>
              <a 
                href="https://www.instagram.com/haircare_ua/" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-3 px-10 py-5 bg-[#D4AF37] text-black font-bold uppercase text-xs tracking-widest rounded-full hover:bg-white transition-all shadow-2xl shadow-gold-950/20"
              >
                Отримати консультацію <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>

        {/* TRUST BAR */}
        <section className="py-12 bg-stone-900/30 border-b border-stone-900">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-all">
                  <Leaf size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wider">0% Формальдегіду</h4>
                  <p className="text-stone-500 text-xs mt-1">Органічні кислоти</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group border-y md:border-y-0 md:border-x border-stone-800 py-6 md:py-0 md:px-8">
                <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-all">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wider">Дозволено вагітним</h4>
                  <p className="text-stone-500 text-xs mt-1">Безпечно для здоров'я</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-all">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wider">Ефект до 6 місяців</h4>
                  <p className="text-stone-500 text-xs mt-1">Тривале розгладження</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SELF-SEGMENTATION */}
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-6 text-center mb-16">
            <h2 className="font-serif text-3xl md:text-5xl mb-6">Чи підійде нанопластика <span className="text-[#D4AF37] italic">саме вам?</span></h2>
            <p className="text-stone-400">Ця процедура створена для роботи з волоссям, яке має сильний спротив.</p>
          </div>
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">
            <div className="bg-stone-900/40 p-10 rounded-[40px] border border-stone-800">
              <h3 className="text-[#D4AF37] font-serif text-2xl mb-8 flex items-center gap-3">
                <CheckCircle size={24} /> Вам варто обрати її:
              </h3>
              <ul className="space-y-6 text-stone-300">
                <li className="flex gap-4">
                  <span className="text-[#D4AF37] font-bold">01.</span>
                  <p><strong>Натуральне та нефарбоване волосся:</strong> ідеальний варіант для дівчат, які ніколи не змінювали колір.</p>
                </li>
                <li className="flex gap-4">
                  <span className="text-[#D4AF37] font-bold">02.</span>
                  <p><strong>Жорсткий, етнічний завиток:</strong> максимальне випрямлення там, де інші склади не справляються.</p>
                </li>
                <li className="flex gap-4">
                  <span className="text-[#D4AF37] font-bold">03.</span>
                  <p><strong>Схильність до алергій:</strong> комфортна процедура без їдких випарів та запаху.</p>
                </li>
              </ul>
            </div>
            <div className="bg-stone-950 p-10 rounded-[40px] border border-red-900/20 flex flex-col justify-center">
              <div className="mb-6 p-4 bg-red-900/10 rounded-2xl border border-red-900/20 text-red-400 flex gap-4 items-start text-sm">
                <AlertTriangle className="shrink-0" />
                <p>Якщо ваше волосся сильно освітлене (блонд), дуже ламке або має високий ступінь пошкодження — ми оберемо ботокс або змішані техніки.</p>
              </div>
              <p className="text-stone-500 text-sm italic">Нанопластика потребує здорової бази для роботи з високими температурами.</p>
            </div>
          </div>
        </section>

        {/* COMPARISON BATTLE */}
        <section className="py-24 bg-[#D4AF37]/5 border-y border-stone-900">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="font-serif text-3xl md:text-5xl text-center mb-16 italic">Нанопластика <span className="text-[#D4AF37]">vs</span> Кератин</h2>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-8 border border-stone-800 rounded-3xl bg-stone-950">
                <h4 className="text-white font-bold mb-4 uppercase tracking-widest text-xs">Комфорт</h4>
                <p className="text-stone-400 text-sm">Приємний запах, жодної сльозотечі чи подразнення слизової.</p>
              </div>
              <div className="p-8 border border-[#D4AF37]/30 rounded-3xl bg-stone-900/40">
                <h4 className="text-[#D4AF37] font-bold mb-4 uppercase tracking-widest text-xs">Колір</h4>
                <p className="text-stone-200 text-sm font-medium">Може освітлити волосся на 1–2 тони через дію органічних кислот.</p>
              </div>
              <div className="p-8 border border-stone-800 rounded-3xl bg-stone-950">
                <h4 className="text-white font-bold mb-4 uppercase tracking-widest text-xs">Об'єм</h4>
                <p className="text-stone-400 text-sm">Зберігає природну легкість та рухливість волосся без обтяження.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SCIENCE & PROCESS */}
        <section className="py-24">
          <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="font-serif text-3xl md:text-4xl">Механіка процедури: <span className="text-[#D4AF37]">Сила кислот</span></h2>
              <div className="flex gap-6">
                <Beaker className="text-[#D4AF37] shrink-0" size={32} />
                <p className="text-stone-400 leading-relaxed text-sm">
                  Активні компоненти проникають у кортекс волосся, під дією температури розм'якшують структуру та "перешивають" зв’язки всередині. 
                  Це не просто маскування недоліків, а внутрішня модифікація форми пасма, що забезпечує неймовірний глянець.
                </p>
              </div>
              <div className="p-8 bg-stone-900/50 rounded-3xl border border-stone-800">
                <h4 className="font-bold mb-4 flex items-center gap-2 underline underline-offset-8 decoration-[#D4AF37]">Результат:</h4>
                <p className="text-stone-300 text-sm leading-relaxed italic">
                  Ви виходите зі студії з уже помитою головою. Нам не потрібно чекати 72 години — фінальний результат ви бачите відразу в дзеркалі.
                </p>
              </div>
            </div>
            <div className="relative group">
               <img src="/rev4.avif" className="rounded-[40px] border border-stone-800 grayscale-[20%] group-hover:grayscale-0 transition-all duration-700" alt="Процес нанопластики" />
               <div className="absolute inset-0 bg-[#D4AF37]/5 rounded-[40px] pointer-events-none" />
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section className="py-24 bg-stone-950">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-5xl mb-4 italic">Вартість у <span className="text-[#D4AF37]">Львові</span></h2>
            </div>
            <div className="bg-stone-900/40 p-8 md:p-12 rounded-[40px] border border-stone-800 shadow-2xl">
              <div className="space-y-6">
                <div className="flex justify-between items-center border-b border-stone-800 pb-4">
                  <span className="text-stone-300">Коротке волосся / Каре</span>
                  <span className="text-[#D4AF37] font-bold">від 1800 грн</span>
                </div>
                <div className="flex justify-between items-center border-b border-stone-800 pb-4">
                  <span className="text-stone-300">Середня довжина (до лопаток)</span>
                  <span className="text-[#D4AF37] font-bold">від 2300 грн</span>
                </div>
                <div className="flex justify-between items-center border-b border-stone-800 pb-4">
                  <span className="text-stone-300">Довге волосся (нижче лопаток)</span>
                  <span className="text-[#D4AF37] font-bold">від 2800 грн</span>
                </div>
              </div>
              <p className="mt-8 text-stone-500 text-[11px] uppercase tracking-widest text-center">
                * Доплата за густоту або складний етнічний завиток — 200-400 грн.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-24 border-t border-stone-900 bg-stone-900/10">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="font-serif text-3xl text-center mb-16 italic">Експертні <span className="text-[#D4AF37]">відповіді</span></h2>
            <div className="space-y-8">
              {[
                { q: "Чи змінить нанопластика мій колір волосся?", a: "Так, колір може стати світлішим на 1-2 рівні. Це нормальна реакція на кислотний склад. Фарбування краще планувати через 10-14 днів після процедури." },
                { q: "Чи можна робити нанопластику вагітним?", a: "Абсолютно. Це єдина процедура випрямлення без протипоказань для майбутніх матусь, оскільки в складі немає формальдегіду." },
                { q: "Як доглядати за волоссям вдома?", a: "Тільки безсульфатний шампунь та обов'язкова сушка феном. Тепло фена активує компоненти для дзеркального блиску." },
                { q: "Чи буде волосся випадати після процедури?", a: "Ні. Склад наноситься з відступом від шкіри голови. Випадіння — це внутрішній процес, не пов'язаний із зовнішнім випрямленням." }
              ].map((faq, i) => (
                <div key={i} className="group p-8 border border-stone-800 rounded-3xl hover:border-[#D4AF37]/30 transition-all bg-stone-950">
                  <h4 className="flex items-center gap-3 text-white font-bold mb-4">
                    <HelpCircle size={20} className="text-[#D4AF37]" /> {faq.q}
                  </h4>
                  <p className="text-stone-400 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INTERNAL LINKING */}
        <section className="py-20 border-t border-stone-900 bg-stone-950">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-stone-500 text-sm">
              Не впевнені, чи підійде вам нанопластика? Перегляньте інші варіанти 
              <Link to="/" className="text-[#D4AF37] hover:underline ml-1">
                вирівнювання та відновлення волосся у Львові
              </Link> на головній.
            </p>
          </div>
        </section>

        <Contact />
      </div>
    </>
  );
}