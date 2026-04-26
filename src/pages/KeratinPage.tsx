import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import WorkAlgorithm from '../components/WorkAlgorithm';
import Contact from '../components/Contact';
import {
    Sparkles,
    Clock,
    ShieldCheck,
    CheckCircle,
    ArrowRight,
    Camera,
    HelpCircle,
    Wind,
    Thermometer,
    Instagram,
    FlaskConical, // Для наукового підходу
    HandHeart,    // Для догляду
    AlertTriangle // Для блоку безпеки
} from 'lucide-react';

export default function KeratinPage() {
    const pageUrl = "https://www.haircareua.com.ua/keratynove-vyrivnyuvannya-lviv";
    
    // FAQ Data для Schema.org та рендерингу
    const faqData = [
        { q: "Чи відпаде волосся, коли кератин вимиється?", a: "Ні. Це міф. Ламкість виникає лише при порушенні технології або невірно підібраній температурі. Я провожу тест на еластичність перед кожною процедурою." },
        { q: "Чи можна робити кератин на блонд?", a: "Так, якщо волосся має достатній ступінь міцності. Для дуже пошкодженого блонду я рекомендую спочатку «холодне відновлення»." },
        { q: "Чи правда, що не можна мити голову 3 дні?", a: "Ні, це застарілий стандарт. У моїй студії ми змиваємо склад відразу — ви бачите кінцевий результат ще в кріслі." },
        { q: "Який шампунь потрібен після кератину?", a: "Обов'язково безсульфатний або професійний м'який шампунь. Це допоможе зберегти полімерну плівку до 6 місяців." }
    ];

    return (
        <>
            <Helmet>
                <title>Кератинове вирівнювання волосся Львів | Ціна та Догляд 2025</title>
                <meta name="description" content="Професійне кератування волосся у Львові. 100% вирівнювання навіть афро-кучерів. Безпечна техніка, результат до 6 місяців. Дізнайтесь ціну та запишіться!" />
                <link rel="canonical" href={pageUrl} />

                {/* РОЗШИРЕНА СХЕМА (Service + FAQ) */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org/",
                        "@type": "Service",
                        "serviceType": "Кератинове вирівнювання волосся",
                        "description": "Процедура довготривалого випрямлення та відновлення структури волосся.",
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
                        "hasOfferCatalog": {
                            "@type": "OfferCatalog",
                            "name": "Послуги випрямлення",
                            "itemListElement": [
                                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Кератин на коротке волосся" }, "price": "1800", "priceCurrency": "UAH" }
                            ]
                        }
                    })}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": faqData.map(item => ({
                            "@type": "Question",
                            "name": item.q,
                            "acceptedAnswer": { "@type": "Answer", "text": item.a }
                        }))
                    })}
                </script>
            </Helmet>

            <div className="pt-20 bg-stone-950 text-white font-sans selection:bg-[#D4AF37] selection:text-black">

                {/* 1. HERO (Залишаємо, він ідеальний) */}
                <section className="relative min-h-[70vh] flex items-center border-b border-stone-900 overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <img src="/keratynove-vypryamlennya-volossya.avif" className="w-full h-full object-cover opacity-30 object-center" alt="Кератин Львів" />
                        <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/80 to-transparent" />
                    </div>
                    <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
                        <nav className="flex gap-2 text-stone-500 text-[10px] uppercase tracking-[0.2em] mb-8 font-bold">
                            <Link to="/" className="hover:text-[#D4AF37]">Головна</Link>
                            <span>/</span>
                            <span className="text-[#D4AF37]">Кератинове вирівнювання</span>
                        </nav>
                        <h1 className="font-serif text-4xl md:text-7xl font-bold leading-tight mb-6 uppercase tracking-tight">
                            Кератинове <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F9E498]">вирівнювання Львів</span>
                        </h1>
                        <p className="text-stone-300 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl italic">
                            Професійне випрямлення волосся будь-якої складності. 100% гладкість, дзеркальний блиск та захист від вологи.
                        </p>
                        <a href="https://www.instagram.com/haircare_ua/" className="inline-flex items-center gap-3 px-10 py-5 bg-[#D4AF37] text-black font-bold uppercase text-xs tracking-widest rounded-full hover:scale-105 transition-all">
                            Записатись <ArrowRight size={16} />
                        </a>
                    </div>
                </section>

                {/* 2. SEMANTIC CONTENT: ЩО ТАКЕ КЕРАТИН? (НОВИЙ БЛОК) */}
                <section className="py-24 bg-stone-950 border-b border-stone-900">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="grid lg:grid-cols-2 gap-16 items-start">
                            <div>
                                <h2 className="font-serif text-3xl md:text-4xl mb-8 uppercase tracking-tight">
                                    Що таке <span className="text-[#D4AF37]">кератинування</span> волосся?
                                </h2>
                                <p className="text-stone-400 leading-relaxed mb-6">
                                    Це процедура інтенсивного відновлення та випрямлення. Наше волосся на 80% складається з кератину, але через фарбування та стайлінг цей білок руйнується. 
                                </p>
                                <p className="text-stone-400 leading-relaxed">
                                    Під час процедури я наповнюю порожнечі волосини рідким кератином, який під дією температури «запечатується», створюючи стійкий полімерний каркас. Результат — ідеально рівне волосся, яке не пушиться навіть у львівську мряку.
                                </p>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-6 bg-stone-900/50 rounded-2xl border border-stone-800">
                                    <FlaskConical className="text-[#D4AF37] mb-4" />
                                    <h4 className="text-sm font-bold uppercase mb-2">Склад</h4>
                                    <p className="text-[10px] text-stone-500 uppercase tracking-wider">Натуральні амінокислоти та гідролізований кератин</p>
                                </div>
                                <div className="p-6 bg-stone-900/50 rounded-2xl border border-stone-800">
                                    <ShieldCheck className="text-[#D4AF37] mb-4" />
                                    <h4 className="text-sm font-bold uppercase mb-2">Захист</h4>
                                    <p className="text-[10px] text-stone-500 uppercase tracking-wider">Термозахисний екран від UV-променів</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. SAFETY BLOCK: ЧИ ЦЕ ШКІДЛИВО? (НОВИЙ БЛОК) */}
                <section className="py-24 bg-stone-900/10">
                    <div className="max-w-4xl mx-auto px-6 text-center">
                        <AlertTriangle className="text-[#D4AF37] mx-auto mb-6" size={40} />
                        <h2 className="font-serif text-3xl md:text-4xl mb-8 uppercase">Чи безпечна процедура?</h2>
                        <p className="text-stone-300 text-lg mb-12 italic">
                            «Головний міф: кератин псує волосся. Істина: волосся псує некомпетентний майстер та невірна температура.»
                        </p>
                        <div className="grid md:grid-cols-2 gap-6 text-left">
                            <div className="p-6 border border-stone-800 rounded-2xl">
                                <h4 className="font-bold text-[#D4AF37] mb-2">Моя відповідальність:</h4>
                                <ul className="text-sm text-stone-400 space-y-2">
                                    <li>• Тест на ступінь пошкодження (0-5)</li>
                                    <li>• Підбір складу без формальдегіду</li>
                                    <li>• Професійна витяжна система в студії</li>
                                </ul>
                            </div>
                            <div className="p-6 border border-stone-800 rounded-2xl">
                                <h4 className="font-bold text-[#D4AF37] mb-2">Кератин на блонд?</h4>
                                <p className="text-sm text-stone-400">
                                    Можна, якщо волосся не "тягнеться". Для блондинок я використовую низькотемпературні режими та додаю протеїнові підкладки для зміцнення кортексу.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. EXPANDED COMPARISON (ПОКРАЩЕНО) */}
                <section className="py-24 bg-stone-950">
                    <div className="max-w-6xl mx-auto px-6">
                        <h2 className="font-serif text-3xl md:text-5xl text-center mb-16 uppercase tracking-tight">Кератин vs Ботокс: <span className="text-[#D4AF37]">Різниця</span></h2>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse border border-stone-800">
                                <thead className="bg-stone-900/50 text-[#D4AF37] uppercase text-[10px] tracking-widest">
                                    <tr>
                                        <th className="p-6 border border-stone-800">Характеристика</th>
                                        <th className="p-6 border border-stone-800">Кератин</th>
                                        <th className="p-6 border border-stone-800">Ботокс</th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm text-stone-400">
                                    <tr>
                                        <td className="p-6 border border-stone-800 font-bold">Випрямлення</td>
                                        <td className="p-6 border border-stone-800">100% (навіть жорсткий завиток)</td>
                                        <td className="p-6 border border-stone-800">30-50% (лише прибирає пух)</td>
                                    </tr>
                                    <tr>
                                        <td className="p-6 border border-stone-800 font-bold">Ефект на об'єм</td>
                                        <td className="p-6 border border-stone-800">Зменшує (за рахунок гладкості)</td>
                                        <td className="p-6 border border-stone-800">Зберігає природний об'єм</td>
                                    </tr>
                                    <tr>
                                        <td className="p-6 border border-stone-800 font-bold">Тривалість</td>
                                        <td className="p-6 border border-stone-800">4-6 місяців</td>
                                        <td className="p-6 border border-stone-800">2-3 місяці</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                <WorkAlgorithm />

                {/* 5. AFTERCARE: ДОГЛЯД (НОВИЙ БЛОК) */}
                <section className="py-24 bg-stone-900/20">
                    <div className="max-w-4xl mx-auto px-6">
                        <div className="text-center mb-12">
                            <HandHeart className="text-[#D4AF37] mx-auto mb-4" size={32} />
                            <h2 className="font-serif text-3xl uppercase">Як зберегти результат?</h2>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                { t: "Безсульфатні шампуні", d: "М'яке очищення не вимиває кератин з кутикули." },
                                { t: "Сушіння феном", d: "Кератин — термоактивний. Гаряче повітря «активує» гладкість." },
                                { t: "Ніяких солей", d: "Після моря або басейну обов'язково промивайте волосся прісною водою." }
                            ].map((item, i) => (
                                <div key={i} className="text-center">
                                    <h4 className="font-bold text-[#D4AF37] text-xs uppercase mb-3">{item.t}</h4>
                                    <p className="text-stone-500 text-xs leading-relaxed">{item.d}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ (Рендериться з масиву для консистентності) */}
                <section className="py-24 bg-stone-950">
                    <div className="max-w-3xl mx-auto px-6">
                        <h2 className="font-serif text-3xl text-center mb-16 uppercase tracking-[0.2em] text-[#D4AF37]">Питання та відповіді</h2>
                        <div className="space-y-6">
                            {faqData.map((faq, i) => (
                                <div key={i} className="p-8 border border-stone-800 rounded-3xl bg-stone-900/10">
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