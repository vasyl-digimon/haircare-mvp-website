import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Contact from '../components/Contact';
import {
    Leaf,
    ShieldCheck,
    Clock,
    HelpCircle,
    ArrowRight,
    Zap
} from 'lucide-react';

export default function NanoplastyPage() {
    return (
        <>
            <Helmet>
                <title>Нанопластика волосся Львів: Ціна, Відгуки, Результат | Haircare UA</title>
                <meta name="description" content="Професійна нанопластика волосся у Львові. Органічне випрямлення без різкого запаху. Безпечна альтернатива кератину. Дізнайтесь ціни та дивіться результати!" />
                <link rel="canonical" href="https://www.haircareua.com.ua/nanoplastyka-volossya-lviv" />
            </Helmet>

            <div className="pt-20 bg-stone-950 text-white selection:bg-[#D4AF37] selection:text-black">

                {/* 1. HERO - Покращений H1 для Local SEO */}
                <section className="relative min-h-[60vh] flex items-center border-b border-stone-900 overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <img src="/nanoplastyka-volossya.avif" className="w-full h-full object-cover opacity-30 object-center" alt="Нанопластика волосся Львів результат" />
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
                                Нанопластика волосся <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F9E498]">у Львові — без токсинів</span>
                            </h1>
                            <p className="text-stone-300 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl italic">
                                Органічне випрямлення, яке обирають за комфорт та безпеку. Ідеальна гладкість без їдкого запаху та диму.
                            </p>
                            <a href="https://www.instagram.com/haircare_ua/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 px-10 py-5 bg-[#D4AF37] text-black font-bold uppercase text-xs tracking-widest rounded-full hover:bg-white transition-all shadow-2xl">
                                Записатись на консультацію <ArrowRight size={16} />
                            </a>
                        </div>
                    </div>
                </section>

                {/* 2. TRUST BAR - М'якіші claims */}
                <section className="py-12 bg-stone-900/30 border-b border-stone-900">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
                            <div className="flex items-center gap-4 justify-center md:justify-start">
                                <Leaf className="text-[#D4AF37]" size={28} />
                                <div>
                                    <h4 className="font-bold text-sm uppercase">Органічний склад</h4>
                                    <p className="text-stone-500 text-xs mt-1">Без формальдегіду та похідних</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 justify-center md:justify-start border-y md:border-y-0 md:border-x border-stone-800 py-6 md:py-0 md:px-8">
                                <ShieldCheck className="text-[#D4AF37]" size={28} />
                                <div>
                                    <h4 className="font-bold text-sm uppercase">Максимальний комфорт</h4>
                                    <p className="text-stone-500 text-xs mt-1">Без сліз та різких випарів</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 justify-center md:justify-start">
                                <Clock className="text-[#D4AF37]" size={28} />
                                <div>
                                    <h4 className="font-bold text-sm uppercase">Ефект до 6 місяців</h4>
                                    <p className="text-stone-500 text-xs mt-1">Довготривала дисципліна волосся</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. COMPARISON - Structured Table (CRO Improvement) */}
                <section className="py-24">
                    <div className="max-w-4xl mx-auto px-6">
                        <h2 className="font-serif text-3xl md:text-4xl text-center mb-16 italic">Нанопластика чи Кератин: <span className="text-[#D4AF37]">що обрати?</span></h2>
                        <div className="overflow-hidden rounded-3xl border border-stone-800 bg-stone-900/20">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-stone-900 text-[#D4AF37] uppercase text-[10px] tracking-widest font-bold">
                                    <tr>
                                        <th className="p-6">Характеристика</th>
                                        <th className="p-6 border-l border-stone-800">Нанопластика</th>
                                        <th className="p-6 border-l border-stone-800">Кератин</th>
                                    </tr>
                                </thead>
                                <tbody className="text-stone-400">
                                    <tr className="border-t border-stone-800">
                                        <td className="p-6 font-bold text-white">Метод дії</td>
                                        <td className="p-6 border-l border-stone-800 italic">Кислотне випрямлення</td>
                                        <td className="p-6 border-l border-stone-800">Термічна модифікація</td>
                                    </tr>
                                    <tr className="border-t border-stone-800 bg-stone-900/10">
                                        <td className="p-6 font-bold text-white">Комфорт</td>
                                        <td className="p-6 border-l border-stone-800">Без запаху та випарів</td>
                                        <td className="p-6 border-l border-stone-800">Можливий різкий запах</td>
                                    </tr>
                                    <tr className="border-t border-stone-800">
                                        <td className="p-6 font-bold text-white">Для блонду</td>
                                        <td className="p-6 border-l border-stone-800 border-b-2 border-[#D4AF37]/20">З обережністю</td>
                                        <td className="p-6 border-l border-stone-800 text-green-700">Рекомендовано</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* 4. PROCESS - Framing Improvement */}
                <section className="py-24 bg-[#D4AF37]/5 border-y border-stone-900">
                    <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                        <div className="relative aspect-[4/5] overflow-hidden rounded-[40px] border border-stone-800 shadow-2xl">
                            <img src="/rev4.avif" className="w-full h-full object-cover" alt="Процес процедури" />
                        </div>
                        <div className="space-y-8">
                            <h2 className="font-serif text-3xl md:text-5xl">Як працює <span className="text-[#D4AF37]">нанопластика?</span></h2>
                            <p className="text-stone-300 leading-relaxed italic border-l-2 border-[#D4AF37] pl-6">
                                Це «розумне» випрямлення, де активні кислоти проникають всередину волосся, роблячи його еластичним та гладким без руйнування структури.
                            </p>
                            <div className="space-y-6">
                                {[
                                    { t: "Безпека", d: "Склад не містить агресивних речовин, що викликають подразнення." },
                                    { t: "Результат", d: "Ми змиваємо склад відразу в студії — ви бачите фінальний вигляд волосся негайно." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <Zap className="text-[#D4AF37] shrink-0" size={20} />
                                        <div>
                                            <h4 className="text-white font-bold text-sm uppercase mb-1">{item.t}</h4>
                                            <p className="text-stone-400 text-sm">{item.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. PRICING */}
                <section className="py-24 bg-stone-950">
                    <div className="max-w-4xl mx-auto px-6">
                        <h2 className="font-serif text-3xl md:text-5xl text-center mb-16">Вартість у <span className="text-[#D4AF37]">Львові</span></h2>
                        <div className="bg-stone-900/40 p-8 md:p-12 rounded-[40px] border border-stone-800 shadow-2xl">
                            <div className="space-y-6">
                                <div className="flex justify-between items-center border-b border-stone-800 pb-4">
                                    <span className="text-stone-300 italic">Коротке волосся / Каре</span>
                                    <span className="text-[#D4AF37] font-bold">від 1800 грн</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-stone-800 pb-4">
                                    <span className="text-stone-300 italic">Середня довжина</span>
                                    <span className="text-[#D4AF37] font-bold">від 2300 грн</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-stone-800 pb-4">
                                    <span className="text-stone-300 italic">Довге волосся</span>
                                    <span className="text-[#D4AF37] font-bold">від 2800 грн</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 6. FAQ - SEO Optimized Questions */}
                <section className="py-24 border-t border-stone-900">
                    <div className="max-w-3xl mx-auto px-6">
                        <h2 className="font-serif text-3xl text-center mb-16">Часті <span className="text-[#D4AF37]">запитання</span></h2>
                        <div className="space-y-6">
                            {[
                                { q: "Чи шкідлива нанопластика для волосся?", a: "Ні, це органічна процедура. Однак вона потребує високих температур при роботі праскою, тому я не проводжу її на дуже пошкодженому волоссі." },
                                { q: "Нанопластика чи кератин — що краще?", a: "Залежить від цілі. Нанопластика — для натурального волосся та еко-складу. Кератин — для максимального випрямлення жорсткого завитка." },
                                { q: "Чи підходить нанопластика для блонду?", a: "Для освітленого волосся (блонд) я рекомендую ботокс або кератин. Нанопластика може бути занадто агресивною для порожньої структури висвітленого пасма." },
                                { q: "Чи забирає нанопластика об’єм?", a: "Вона розгладжує пухнастість, тому візуально об'єм може трохи зменшитись, але волосся залишається рухливим та легким." }
                            ].map((faq, i) => (
                                <div key={i} className="p-8 border border-stone-800 rounded-3xl bg-stone-900/20">
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