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
    Instagram
} from 'lucide-react';

export default function KeratinPage() {
    const pageUrl = "https://www.haircareua.com.ua/keratynove-vyrivnyuvannya-lviv";

    return (
        <>
            <Helmet>
                <title>Кератинове вирівнювання волосся Львів: ціна, відгуки | Haircare UA</title>
                <meta name="description" content="Ідеальна гладкість до 6 місяців у Львові. Професійне кератинове випрямлення волосся будь-якої складності. Забудьте про праску — записуйтесь онлайн!" />
                <link rel="canonical" href={pageUrl} />

                {/* JSON-LD Service Schema */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org/",
                        "@type": "Service",
                        "serviceType": "Кератинове вирівнювання волосся",
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

            <div className="pt-20 bg-stone-950 text-white selection:bg-[#D4AF37] selection:text-black font-sans">

                {/* 1. HERO SECTION */}
                <section className="relative min-h-[65vh] flex items-center border-b border-stone-900 overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <img
                            src="/keratynove-vypryamlennya-volossya.avif"
                            fetchPriority="high"
                            className="w-full h-full object-cover opacity-30 object-center"
                            alt="Кератинове вирівнювання волосся Львів результат"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/75 to-transparent" />
                    </div>

                    <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
                        <div className="max-w-3xl">
                            <nav className="flex gap-2 text-stone-500 text-[10px] uppercase tracking-widest mb-8 font-bold">
                                <Link to="/" className="hover:text-[#D4AF37] transition-colors">Головна</Link>
                                <span>/</span>
                                <span className="text-[#D4AF37]">Кератинове вирівнювання</span>
                            </nav>
                            <h1 className="font-serif text-4xl md:text-7xl font-bold leading-tight mb-6 text-balance uppercase tracking-tight">
                                Кератинове вирівнювання <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F9E498]">волосся у Львові</span>
                            </h1>
                            <p className="text-stone-300 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl italic">
                                Ідеальна гладкість до 6 місяців. Забудьте про щоденну праску та пухнастість під час дощу. Результат відразу після процедури.
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
                                <Sparkles className="text-[#D4AF37]" size={28} />
                                <div>
                                    <h4 className="font-bold text-sm uppercase">Результат з 1 візиту</h4>
                                    <p className="text-stone-500 text-xs mt-1">Ідеальна гладкість та блиск</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 justify-center md:justify-start border-y md:border-y-0 md:border-x border-stone-800 py-8 md:py-0 md:px-8">
                                <ShieldCheck className="text-[#D4AF37]" size={28} />
                                <div>
                                    <h4 className="font-bold text-sm uppercase">Досвід з 2018 року</h4>
                                    <p className="text-stone-500 text-xs mt-1">Понад 6 років спеціалізації</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 justify-center md:justify-start">
                                <Clock className="text-[#D4AF37]" size={28} />
                                <div>
                                    <h4 className="font-bold text-sm uppercase">Ефект до 6 місяців</h4>
                                    <p className="text-stone-500 text-xs mt-1">Накопичувальна властивість</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. VALUE PROPOSITION */}
                <section className="py-24 bg-stone-950">
                    <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8 text-left">
                            <h2 className="font-serif text-3xl md:text-5xl tracking-tight uppercase">Свобода від <br /><span className="text-[#D4AF37]">щоденної праски</span></h2>
                            <div className="h-1 w-20 bg-[#D4AF37]" />
                            <p className="text-stone-300 leading-relaxed text-lg">
                                Кератин створює захисний полімерний шар, який герметизує кутикулу. Волосся стає розсипчастим та гладким навіть у вологу погоду.
                            </p>
                            <div className="space-y-4">
                                <div className="flex gap-4 p-6 bg-stone-900/30 rounded-2xl border border-stone-800">
                                    <Clock className="text-[#D4AF37] shrink-0" />
                                    <p className="text-stone-400 text-sm"><strong>Економія часу:</strong> Ви витрачаєте на 30 хвилин менше щоранку — достатньо просто висушити волосся феном.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-stone-900 rounded-[40px] p-10 border border-stone-800">
                            <h3 className="text-[#D4AF37] font-serif text-2xl mb-8 flex items-center gap-3">
                                <CheckCircle size={24} /> Кому підійде кератин?
                            </h3>
                            <ul className="space-y-6 text-stone-300">
                                <li className="flex gap-4">
                                    <span className="text-[#D4AF37] font-bold">01.</span>
                                    <p className="text-sm"><strong>Тугий завиток:</strong> Найпотужніша процедура для випрямлення афро-кучерів.</p>
                                </li>
                                <li className="flex gap-4">
                                    <span className="text-[#D4AF37] font-bold">02.</span>
                                    <p className="text-sm"><strong>Пористе волосся:</strong> Прибирає пухнастість та "ялинку" по всій довжині.</p>
                                </li>
                                <li className="flex gap-4">
                                    <span className="text-[#D4AF37] font-bold">03.</span>
                                    <p className="text-sm"><strong>Жорстка структура:</strong> Пом'якшує волосся, роблячи його слухняним.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* 4. SAFETY & TECHNOLOGY */}
                <section className="py-24 bg-stone-900/20 border-y border-stone-900">
                    <div className="max-w-6xl mx-auto px-6 text-center">
                        <h2 className="font-serif text-3xl md:text-4xl mb-16 tracking-tight">Як ми захищаємо <span className="text-[#D4AF37]">ваше волосся?</span></h2>
                        <div className="grid md:grid-cols-3 gap-8 text-left">
                            <div className="p-8 bg-stone-950 rounded-3xl border border-stone-800">
                                <Thermometer className="text-[#D4AF37] mb-6" size={32} />
                                <h4 className="text-white font-bold uppercase text-xs tracking-widest mb-4">Температурний контроль</h4>
                                <p className="text-stone-400 text-sm">Підбираю градус праски індивідуально під кожен сантиметр довжини.</p>
                            </div>
                            <div className="p-8 bg-stone-950 rounded-3xl border border-stone-800">
                                <ShieldCheck className="text-[#D4AF37] mb-6" size={32} />
                                <h4 className="text-white font-bold uppercase text-xs tracking-widest mb-4">Тест на еластичність</h4>
                                <p className="text-stone-400 text-sm">Обов'язкова діагностика перед початком для безпеки результату.</p>
                            </div>
                            <div className="p-8 bg-stone-950 rounded-3xl border border-stone-800">
                                <Wind className="text-[#D4AF37] mb-6" size={32} />
                                <h4 className="text-white font-bold uppercase text-xs tracking-widest mb-4">Витяжна система</h4>
                                <p className="text-stone-400 text-sm">Робота проводиться у комфортних умовах без їдкого диму.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. QUICK COMPARISON */}
                <section className="py-24 bg-stone-950">
                    <div className="max-w-4xl mx-auto px-6">
                        <h2 className="font-serif text-3xl md:text-5xl text-center mb-16 tracking-tight uppercase">Кератин чи Ботокс?</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="p-8 bg-stone-900/30 rounded-3xl border border-[#D4AF37]/30 shadow-lg">
                                <h4 className="text-[#D4AF37] font-bold uppercase text-xs tracking-widest mb-6 font-serif">Кератин:</h4>
                                <p className="text-stone-300 text-sm leading-relaxed italic">Ваша ціль — 100% випрямлення. Волосся стає важчим, блискучим та ідеально рівним від коренів до кінчиків.</p>
                            </div>
                            <div className="p-8 bg-stone-900/10 rounded-3xl border border-stone-800 flex flex-col justify-between">
                                <div>
                                    <h4 className="text-stone-500 font-bold uppercase text-xs tracking-widest mb-6 font-serif">Ботокс:</h4>
                                    <p className="text-stone-500 text-sm leading-relaxed italic mb-6">Ваша ціль — живлення. Волосся стає доглянутим, але природна хвиля та об'єм частково зберігаються.</p>
                                </div>
                                <Link to="/botoks-volossya-lviv" className="inline-flex items-center gap-2 text-[#D4AF37] text-[10px] font-bold uppercase tracking-widest hover:underline">
                                    Дізнатись про Ботокс <ArrowRight size={12} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 6. PHOTO CTA */}
                <section className="py-20 bg-stone-950">
                    <div className="max-w-4xl mx-auto px-6">
                        <div className="bg-gradient-to-br from-[#D4AF37] to-[#B8860B] p-10 rounded-[40px] text-stone-950 text-center relative overflow-hidden group shadow-2xl">
                            <Camera size={80} className="absolute -top-4 -right-4 opacity-10 group-hover:scale-110 transition-transform" />
                            <h3 className="font-serif text-3xl md:text-4xl font-bold mb-4 uppercase tracking-tighter">Розрахунок вартості за фото</h3>
                            <p className="mb-8 font-medium max-w-xl mx-auto">
                                Надішліть фото вашого волосся зі спини в Direct. Я безкоштовно проконсультую та розрахую точну ціну для вашої густоти.
                            </p>
                            <a
                                href="https://www.instagram.com/haircare_ua/"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 px-10 py-5 bg-stone-950 text-white font-bold uppercase text-xs tracking-widest rounded-2xl hover:bg-white hover:text-black transition-all"
                            >
                                <Instagram size={20} /> Надіслати в Instagram
                            </a>
                        </div>
                    </div>
                </section>

                <WorkAlgorithm />

                {/* 7. PRICING */}
                <section className="py-24 bg-stone-900/20 border-y border-stone-900">
                    <div className="max-w-4xl mx-auto px-6 text-center">
                        <h2 className="font-serif text-3xl md:text-5xl mb-12 uppercase tracking-tight">Вартість</h2>
                        <div className="bg-stone-950 p-8 md:p-12 rounded-[40px] border border-stone-800 shadow-2xl">
                            <div className="space-y-8 text-lg">
                                <div className="flex justify-between items-center border-b border-stone-800 pb-6">
                                    <span className="text-stone-300">Коротке волосся (до плечей)</span>
                                    <span className="text-[#D4AF37] font-bold">від 1800 грн</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-stone-800 pb-6">
                                    <span className="text-stone-300">Середня довжина (до лопаток)</span>
                                    <span className="text-[#D4AF37] font-bold">від 2200 грн</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-stone-800 pb-6">
                                    <span className="text-stone-300">Довге волосся (до пояса)</span>
                                    <span className="text-[#D4AF37] font-bold">від 2800 грн</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 8. FAQ */}
                <section className="py-24 bg-stone-950">
                    <div className="max-w-3xl mx-auto px-6">
                        <h2 className="font-serif text-3xl text-center mb-16 uppercase tracking-[0.2em] text-[#D4AF37]">FAQ</h2>
                        <div className="space-y-6">
                            {[
                                { q: "Чи відпаде волосся, коли кератин вимиється?", a: "Ні. Це міф. Ламкість виникає лише при порушенні технології майстром. Попередня діагностика виключає цей ризик." },
                                { q: "Чи можна робити кератин на блонд?", a: "Так, якщо ступінь пошкодження дозволяє. Я використовую спеціальні склади, що нейтралізують жовтизну." },
                                { q: "Чи правда, що не можна мити голову 3 дні?", a: "Це застаріла технологія. Ми змиваємо склад відразу в студії — ви виходите з готовим результатом." },
                                { q: "Чи буде волосся здаватися жирним?", a: "Тільки перші кілька днів через незвичну гладкість. Правильно підібраний безсульфатний шампунь вирішує цю проблему." }
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

                {/* 9. INTERNAL LINKING */}
                <section className="py-20 border-t border-stone-900 bg-stone-950 text-center">
                    <Link to="/" className="text-stone-500 hover:text-[#D4AF37] transition-colors underline underline-offset-8 decoration-stone-800 uppercase text-[10px] font-bold tracking-[0.3em]">
                        Повернутись на головну: Вирівнювання та відновлення волосся у Львові
                    </Link>
                </section>

                <Contact />
            </div>
        </>
    );
}