import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Contact from '../components/Contact';
import { 
  Leaf, 
  ShieldCheck, 
  Clock, 
  HelpCircle, 
  ArrowRight,
  Zap,
  CheckCircle
} from 'lucide-react';

export default function NanoplastyPage() {
  const pageUrl = "https://www.haircareua.com.ua/nanoplastyka-volossya-lviv";
  
  return (
    <>
      <Helmet>
        <title>Нанопластика волосся Львів: Ціна, Відгуки, Результат | Haircare UA</title>
        <meta name="description" content="Професійна нанопластика волосся у Львові. Органічне випрямлення без різкого запаху. Безпечна альтернатива кератину. Дізнайтесь ціни та дивіться результати!" />
        <link rel="canonical" href={pageUrl} />
      </Helmet>

      <div className="pt-20 bg-stone-950 text-white selection:bg-[#D4AF37] selection:text-black">
        
        {/* 1. HERO SECTION */}
        <section className="relative min-h-[60vh] flex items-center border-b border-stone-900 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="/nanoplastyka-volossya.avif" 
              className="w-full h-full object-cover opacity-30 object-center" 
              alt="Нанопластика волосся Львів результат" 
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
              <h1 className="font-serif text-4xl md:text-7xl font-bold leading-tight mb-6 text-balance uppercase tracking-tight">
                Нанопластика волосся <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F9E498]">у Львові</span>
              </h1>
              <p className="text-stone-300 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl">
                Органічне випрямлення, яке обирають за комфорт та безпеку. Ідеальна гладкість без їдкого запаху та диму.
              </p>
              <a 
                href="https://www.instagram.com/haircare_ua/" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-3 px-10 py-5 bg-[#D4AF37] text-black font-bold uppercase text-xs tracking-widest rounded-full hover:bg-white transition-all shadow-2xl"
              >
                Записатись на консультацію <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>

        {/* 2. TRUST BAR */}
        <section className="py-12 bg-stone-900/30 border-b border-stone-900">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-center gap-4 justify-center md:justify-start">
                <Leaf className="text-[#D4AF37]" size={28} />
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wider">Органічний склад</h4>
                  <p className="text-stone-500 text-xs mt-1">Без формальдегіду та похідних</p>
                </div>
              </div>
              <div className="flex items-center gap-4 justify-center md:justify-start border-y md:border-y-0 md:border-x border-stone-800 py-8 md:py-0 md:px-8">
                <ShieldCheck className="text-[#D4AF37]" size={28} />
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wider">Максимальний комфорт</h4>
                  <p className="text-stone-500 text-xs mt-1">Без сліз та різких випарів</p>
                </div>
              </div>
              <div className="flex items-center gap-4 justify-center md:justify-start">
                <Clock className="text-[#D4AF37]" size={28} />
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wider">Ефект до 6 місяців</h4>
                  <p className="text-stone-500 text-xs mt-1">Довготривала дисципліна волосся</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. COMPARISON TABLE - Fixed for Mobile */}
        <section className="py-24 bg-stone-950">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="font-serif text-3xl md:text-5xl text-center mb-16 tracking-tight">
              Нанопластика чи Кератин: <span className="text-[#D4AF37]">що обрати?</span>
            </h2>
            
            {/* Огортаємо таблицю для скролу на мобайлі */}
            <div className="overflow-x-auto -mx-6 px-6 md:mx-0 md:px-0">
              <div className="inline-block min-w-[600px] w-full align-middle">
                <div className="overflow-hidden rounded-3xl border border-stone-800 bg-stone-900/20 shadow-2xl">
                  <table className="min-w-full text-left">
                    <thead className="bg-stone-900 text-[#D4AF37] uppercase text-[10px] tracking-[0.2em] font-bold">
                      <tr>
                        <th className="p-6">Характеристика</th>
                        <th className="p-6 border-l border-stone-800">Нанопластика</th>
                        <th className="p-6 border-l border-stone-800">Кератин</th>
                      </tr>
                    </thead>
                    <tbody className="text-stone-400 text-sm">
                      <tr className="border-t border-stone-800">
                        <td className="p-6 font-bold text-white bg-stone-900/30">Метод дії</td>
                        <td className="p-6 border-l border-stone-800">Кислотне випрямлення</td>
                        <td className="p-6 border-l border-stone-800 text-stone-500">Термічна модифікація</td>
                      </tr>
                      <tr className="border-t border-stone-800 bg-stone-900/10">
                        <td className="p-6 font-bold text-white bg-stone-900/30">Комфорт</td>
                        <td className="p-6 border-l border-stone-800">Без запаху та випарів</td>
                        <td className="p-6 border-l border-stone-800 text-stone-500">Можливий різкий запах</td>
                      </tr>
                      <tr className="border-t border-stone-800">
                        <td className="p-6 font-bold text-white bg-stone-900/30">Для блонду</td>
                        <td className="p-6 border-l border-stone-800 text-stone-300 font-medium">З обережністю</td>
                        <td className="p-6 border-l border-stone-800 text-[#D4AF37] font-bold">Рекомендовано</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-[10px] text-stone-600 mt-4 text-center uppercase tracking-widest md:hidden">← Гортайте таблицю вбік →</p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. REVIEWS SPOTLIGHT */}
        <section className="py-12 bg-stone-950">
          <div className="max-w-2xl mx-auto px-6">
            <div className="relative group p-4 bg-white/5 rounded-[40px] border border-stone-800">
               <img src="/rev4.avif" className="w-full h-auto rounded-[32px] shadow-2xl" alt="Відгук про нанопластику" />
               <div className="absolute -bottom-4 -right-4 bg-[#D4AF37] text-black p-4 rounded-2xl shadow-xl">
                 <CheckCircle size={24} />
               </div>
            </div>
          </div>
        </section>

        {/* 5. PROCESS EXPLANATION */}
        <section className="py-24 bg-stone-900/20 border-y border-stone-900">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="font-serif text-3xl md:text-5xl tracking-tight">Як працює <span className="text-[#D4AF37]">нанопластика?</span></h2>
                <div className="h-1 w-20 bg-[#D4AF37]" />
                <p className="text-stone-300 leading-relaxed text-lg">
                  Це сучасне випрямлення, де активні амінокислоти проникають всередину волосся, роблячи його еластичним та гладким без руйнування структури.
                </p>
                <div className="grid gap-6">
                  <div className="flex gap-4 p-6 bg-stone-950 rounded-2xl border border-stone-800">
                    <Zap className="text-[#D4AF37] shrink-0" size={24} />
                    <div>
                      <h4 className="text-white font-bold uppercase text-xs tracking-wider mb-2">Безпека</h4>
                      <p className="text-stone-400 text-sm">Склад не містить формальдегіду, що робить процедуру комфортною навіть для найчутливіших клієнток.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-6 bg-stone-950 rounded-2xl border border-stone-800">
                    <Zap className="text-[#D4AF37] shrink-0" size={24} />
                    <div>
                      <h4 className="text-white font-bold uppercase text-xs tracking-wider mb-2">Миттєвий ефект</h4>
                      <p className="text-stone-400 text-sm">Ми змиваємо склад відразу в студії — ви бачите фінальний вигляд волосся негайно, без очікування.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-stone-900 rounded-[40px] p-8 border border-stone-800">
                 <h4 className="font-serif text-2xl text-white mb-6 underline decoration-[#D4AF37]">Для кого ця послуга?</h4>
                 <ul className="space-y-4 text-stone-400">
                   <li className="flex gap-3"><span>•</span> Натуральне та нефарбоване волосся</li>
                   <li className="flex gap-3"><span>•</span> Жорсткий, етнічний завиток</li>
                   <li className="flex gap-3"><span>•</span> Чутливість до різких запахів</li>
                 </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 6. PRICING */}
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="font-serif text-3xl md:text-5xl text-center mb-16 tracking-tight uppercase">Вартість</h2>
            <div className="bg-stone-900/40 p-8 md:p-12 rounded-[40px] border border-stone-800 shadow-2xl">
              <div className="space-y-8">
                <div className="flex justify-between items-center border-b border-stone-800 pb-6 text-lg">
                  <span className="text-stone-300">Коротке волосся / Каре</span>
                  <span className="text-[#D4AF37] font-bold">від 1800 грн</span>
                </div>
                <div className="flex justify-between items-center border-b border-stone-800 pb-6 text-lg">
                  <span className="text-stone-300">Середня довжина</span>
                  <span className="text-[#D4AF37] font-bold">від 2300 грн</span>
                </div>
                <div className="flex justify-between items-center border-b border-stone-800 pb-6 text-lg">
                  <span className="text-stone-300">Довге волосся</span>
                  <span className="text-[#D4AF37] font-bold">від 2800 грн</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. FAQ */}
        <section className="py-24 bg-stone-950">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="font-serif text-3xl text-center mb-16 uppercase tracking-[0.2em] text-[#D4AF37]">FAQ</h2>
            <div className="space-y-6">
              {[
                { q: "Чи шкідлива нанопластика для волосся?", a: "Ні, це органічна процедура. Однак вона потребує високих температур, тому я не проводжу її на критично пошкодженому волоссі." },
                { q: "Чи підходить нанопластика для блонду?", a: "Для освітленого волосся я зазвичай рекомендую ботокс або кератин. Нанопластика може бути занадто агресивною для крихкої структури висвітлених пасом." },
                { q: "Чи забирає процедура об’єм?", a: "Вона розгладжує пухнастість, тому візуально об'єм може трохи зменшитись, але волосся залишається рухливим та легким." }
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

        {/* 8. INTERNAL LINKING */}
        <section className="py-20 border-t border-stone-900 bg-stone-950 text-center">
           <p className="text-stone-500 text-sm mb-4">Більше послуг у студії Haircare UA</p>
           <Link to="/" className="text-[#D4AF37] hover:text-white transition-colors underline underline-offset-8 decoration-stone-800">
             Вирівнювання та відновлення волосся у Львові
           </Link>
        </section>

        <Contact />
      </div>
    </>
  );
}