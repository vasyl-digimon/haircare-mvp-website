import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Contact from '../components/Contact';
import {
    Sparkles,
    ShieldCheck,
    ArrowRight,
    HandHeart,
    HelpCircle,
    Thermometer,
    Instagram,
    XCircle,
    Info,
    Check,
    Zap
} from 'lucide-react';

export default function KeratinPage() {
    const pageUrl = "https://www.haircareua.com.ua/keratynove-vyrivnyuvannya-lviv";

    return (
        <>
            <Helmet>
                <title>Кератинове вирівнювання волосся Львів | Ціна, Відгуки, Догляд</title>
                <meta name="description" content="Професійне кератування волосся у Львові. 100% вирівнювання навіть афро-кучерів. Безпечна техніка, результат до 6 місяців. Відповіді на всі питання про шкоду та догляд." />
                <link rel="canonical" href={pageUrl} />
                
                {/* JSON-LD: Service + FAQ */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
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
                        }
                    })}
                </script>
            </Helmet>

            <div className="pt-20 bg-stone-950 text-white font-sans selection:bg-[#D4AF37] selection:text-black">

                {/* 1. HERO SECTION */}
                <section className="relative min-h-[70vh] flex items-center border-b border-stone-900 overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <img src="/keratynove-vypryamlennya-volossya.avif" className="w-full h-full object-cover opacity-20 object-center" alt="Кератинове вирівнювання волосся Львів результат" />
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
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F9E498]">вирівнювання волосся</span>
                        </h1>
                        <p className="text-stone-300 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl italic">
                            Ідеальна гладкість до 6 місяців. Забудьте про щоденну праску та пухнастість. Результат, який ви бачите одразу в дзеркалі.
                        </p>
                        <a href="https://www.instagram.com/haircare_ua/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 px-10 py-5 bg-[#D4AF37] text-black font-bold uppercase text-xs tracking-widest rounded-full hover:scale-105 transition-all shadow-2xl">
                            Записатись на консультацію <ArrowRight size={16} />
                        </a>
                    </div>
                </section>

                {/* 2. TRUST BAR */}
                <section className="py-12 bg-stone-900/30 border-b border-stone-900">
                    <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="flex items-center gap-4">
                            <Sparkles className="text-[#D4AF37]" size={28} />
                            <div><h4 className="font-bold text-xs uppercase tracking-wider">Ефект до 6 місяців</h4><p className="text-stone-500 text-[10px] uppercase">Має накопичувальну властивість</p></div>
                        </div>
                        <div className="flex items-center gap-4 border-y md:border-y-0 md:border-x border-stone-800 py-6 md:py-0 md:px-8">
                            <ShieldCheck className="text-[#D4AF37]" size={28} />
                            <div><h4 className="font-bold text-xs uppercase tracking-wider">Безпека блонду</h4><p className="text-stone-500 text-[10px] uppercase">Працюю з пошкодженим волоссям</p></div>
                        </div>
                        <div className="flex items-center gap-4">
                            <Zap className="text-[#D4AF37]" size={28} />
                            <div><h4 className="font-bold text-xs uppercase tracking-wider">Досвід 6+ років</h4><p className="text-stone-500 text-[10px] uppercase">Понад 500+ задоволених клієнток</p></div>
                        </div>
                    </div>
                </section>

                {/* 3. WHAT IS KERATIN / HOW IT WORKS */}
                <section className="py-24 bg-stone-950 border-b border-stone-900">
                    <div className="max-w-4xl mx-auto px-6">
                        <h2 className="font-serif text-3xl md:text-4xl mb-8 uppercase tracking-tight text-center">Що таке <span className="text-[#D4AF37]">кератинове вирівнювання</span>?</h2>
                        <div className="prose prose-invert max-w-none text-stone-400 text-center text-lg leading-relaxed">
                            <p>
                                Кератинове вирівнювання — це не просто стайлінг, а процедура наповнення структури волосся рідким білком (кератином). 
                                Під дією температури кератин заповнює порожнечі в кортексі та створює захисну плівку на кутикулі. 
                                На відміну від домашніх масок, цей склад працює глибоко всередині, змінюючи структуру волосся на термін від 3 до 6 місяців.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 4. WHO IT FITS / NOT FITS */}
                <section className="py-24 bg-stone-900/10">
                    <div className="max-w-6xl mx-auto px-6">
                        <h2 className="font-serif text-3xl md:text-4xl mb-16 uppercase tracking-tight text-center">Кому підійде процедура?</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="p-10 bg-stone-950 rounded-3xl border border-stone-800">
                                <h3 className="text-[#D4AF37] font-serif text-2xl mb-8 flex items-center gap-3"><Check size={24}/> Ідеально для:</h3>
                                <ul className="space-y-4 text-stone-400 text-sm">
                                    <li className="flex gap-3"><span>•</span> Хвилястого, кучерявого та неслухняного волосся</li>
                                    <li className="flex gap-3"><span>•</span> Пористої структури ("ялинка", пухнастість від вологи)</li>
                                    <li className="flex gap-3"><span>•</span> Жорсткого волосся, що важко піддається укладці</li>
                                    <li className="flex gap-3"><span>•</span> Бажання мати ідеальну гладкість без щоденної праски</li>
                                </ul>
                            </div>
                            <div className="p-10 bg-stone-950 rounded-3xl border border-stone-800">
                                <h3 className="text-stone-500 font-serif text-2xl mb-8 flex items-center gap-3"><XCircle size={24}/> Обережно, якщо:</h3>
                                <ul className="space-y-4 text-stone-500 text-sm">
                                    <li className="flex gap-3"><span>•</span> У вас критичний ступінь пошкодження (волосся "тягнеться")</li>
                                    <li className="flex gap-3"><span>•</span> Потрібен об'єм (кератин робить волосся важчим та гладким)</li>
                                    <li className="flex gap-3"><span>•</span> Ви хочете лише лікування без ефекту випрямлення</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. SAFETY / DAMAGE OBJECTION */}
                <section className="py-24 bg-stone-950 border-y border-stone-900">
                    <div className="max-w-4xl mx-auto px-6">
                        <div className="bg-stone-900/50 p-12 rounded-[40px] border border-stone-800 relative overflow-hidden">
                            <Info size={120} className="absolute -bottom-10 -right-10 opacity-5 text-[#D4AF37]" />
                            <h2 className="font-serif text-3xl md:text-4xl mb-8 uppercase tracking-tight text-[#D4AF37]">Чи шкодить кератин волоссю?</h2>
                            <p className="text-stone-300 mb-6 leading-relaxed">
                                Найбільший страх — що після вимивання складу волосся стане гіршим. Це можливо лише у двох випадках: 
                                <strong> неправильно підібрана температура</strong> або <strong>неякісний склад</strong>.
                            </p>
                            <p className="text-stone-400 text-sm leading-relaxed">
                                У своїй роботі я використовую лише преміальні склади та індивідуально налаштовую температуру праски для кожного сантиметра вашого волосся. Правильно виконаний кератин, навпаки, захищає волосся від механічних пошкоджень та пересушування.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 6. BLONDE BLOCK */}
                <section className="py-24 bg-stone-900/10">
                    <div className="max-w-4xl mx-auto px-6 text-center">
                        <h2 className="font-serif text-3xl md:text-4xl mb-8 uppercase tracking-tight italic">Кератин на <span className="text-[#D4AF37]">Блонд</span></h2>
                        <p className="text-stone-300 text-lg mb-8">
                            Освітлене волосся вимагає особливої обережності. 
                        </p>
                        <div className="bg-stone-950 p-8 rounded-3xl border border-stone-800 text-left">
                            <p className="text-stone-400 text-sm leading-relaxed mb-4">
                                Якщо волосся в нормальному стані, кератин допоможе прибрати "пух" та надати блиску. Проте, при високому ступені пошкодження я рекомендую поєднувати процедуру з протеїновими підкладками або обрати "Холодне відновлення".
                            </p>
                            <div className="flex items-center gap-2 text-[#D4AF37] font-bold text-[10px] uppercase tracking-widest">
                                <Check size={14} /> Нейтралізація жовтизни складом
                            </div>
                        </div>
                    </div>
                </section>

                {/* 7. COMPARISON */}
                <section className="py-24 bg-stone-950 border-b border-stone-900">
                    <div className="max-w-6xl mx-auto px-6">
                        <h2 className="font-serif text-3xl md:text-4xl mb-16 uppercase tracking-tight text-center">Кератин чи Ботокс?</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="p-8 border border-[#D4AF37]/30 rounded-3xl bg-stone-900/20 shadow-xl">
                                <h4 className="text-[#D4AF37] font-bold uppercase text-xs mb-4">Кератин</h4>
                                <ul className="text-stone-400 text-xs space-y-3 uppercase tracking-wider">
                                    <li>• Випрямлення: 100%</li>
                                    <li>• Тривалість: до 6 місяців</li>
                                    <li>• Для кого: жорсткий завиток, пух</li>
                                </ul>
                            </div>
                            <div className="p-8 border border-stone-800 rounded-3xl bg-stone-900/10">
                                <h4 className="text-stone-500 font-bold uppercase text-xs mb-4">Ботокс</h4>
                                <ul className="text-stone-500 text-xs space-y-3 uppercase tracking-wider font-medium">
                                    <li>• Випрямлення: 30-50%</li>
                                    <li>• Тривалість: до 3 місяців</li>
                                    <li>• Для кого: живлення, легка хвиля</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 8. BEFORE / AFTER (placeholder logic) */}
                <section className="py-24 bg-stone-900/20">
                    <div className="max-w-6xl mx-auto px-6 text-center">
                        <h2 className="font-serif text-3xl md:text-4xl mb-16 uppercase tracking-tight">Результати моїх робіт</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 opacity-70">
                            {/* Тут будуть ваші фото */}
                            <div className="aspect-[3/4] bg-stone-900 rounded-2xl border border-stone-800 flex items-center justify-center text-[10px] uppercase text-stone-700 tracking-widest">Портфоліо 1</div>
                            <div className="aspect-[3/4] bg-stone-900 rounded-2xl border border-stone-800 flex items-center justify-center text-[10px] uppercase text-stone-700 tracking-widest">Портфоліо 2</div>
                            <div className="aspect-[3/4] bg-stone-900 rounded-2xl border border-stone-800 flex items-center justify-center text-[10px] uppercase text-stone-700 tracking-widest">Портфоліо 3</div>
                            <div className="aspect-[3/4] bg-stone-900 rounded-2xl border border-stone-800 flex items-center justify-center text-[10px] uppercase text-stone-700 tracking-widest">Портфоліо 4</div>
                        </div>
                    </div>
                </section>

                {/* 10. PRICING */}
                <section className="py-24 bg-stone-950">
                    <div className="max-w-4xl mx-auto px-6">
                        <h2 className="font-serif text-3xl md:text-5xl text-center mb-16 uppercase tracking-tight">Вартість</h2>
                        <div className="bg-stone-900/30 p-10 rounded-[40px] border border-stone-800 shadow-2xl">
                            <div className="space-y-8">
                                <div className="flex justify-between items-center border-b border-stone-800 pb-6">
                                    <span className="text-stone-300 uppercase text-xs font-bold tracking-widest">До плечей</span>
                                    <span className="text-[#D4AF37] font-bold">від 1800 грн</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-stone-800 pb-6">
                                    <span className="text-stone-300 uppercase text-xs font-bold tracking-widest">До лопаток</span>
                                    <span className="text-[#D4AF37] font-bold">від 2200 грн</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-stone-800 pb-6">
                                    <span className="text-stone-300 uppercase text-xs font-bold tracking-widest">До пояса</span>
                                    <span className="text-[#D4AF37] font-bold">від 2800 грн</span>
                                </div>
                            </div>
                            <p className="mt-8 text-stone-500 text-[10px] uppercase text-center tracking-widest italic">
                                *Кінцева вартість залежить від густоти та стану волосся
                            </p>
                        </div>
                    </div>
                </section>

                {/* 11. AFTERCARE */}
                <section className="py-24 bg-stone-900/10 border-y border-stone-900">
                    <div className="max-w-4xl mx-auto px-6">
                        <h2 className="font-serif text-3xl text-center mb-16 uppercase tracking-tight">Догляд після процедури</h2>
                        <div className="grid md:grid-cols-3 gap-8 text-center">
                            <div>
                                <div className="text-[#D4AF37] mb-4 flex justify-center"><Thermometer size={32} /></div>
                                <h4 className="font-bold text-xs uppercase mb-2">Сушіть феном</h4>
                                <p className="text-stone-500 text-[10px] uppercase leading-relaxed">Кератин термоактивний. Фен "активує" гладкість після кожного миття.</p>
                            </div>
                            <div>
                                <div className="text-[#D4AF37] mb-4 flex justify-center"><Info size={32} /></div>
                                <h4 className="font-bold text-xs uppercase mb-2">М'який шампунь</h4>
                                <p className="text-stone-500 text-[10px] uppercase leading-relaxed">Використовуйте безсульфатні засоби для збереження ефекту.</p>
                            </div>
                            <div>
                                <div className="text-[#D4AF37] mb-4 flex justify-center"><HandHeart className="w-8 h-8" /></div>
                                <h4 className="font-bold text-xs uppercase mb-2">Без солі та хлору</h4>
                                <p className="text-stone-500 text-[10px] uppercase leading-relaxed">Після басейну або моря обов'язково промивайте волосся прісною водою.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 12. FAQ */}
                <section className="py-24 bg-stone-950">
                    <div className="max-w-3xl mx-auto px-6">
                        <h2 className="font-serif text-3xl text-center mb-16 uppercase tracking-widest text-[#D4AF37]">FAQ</h2>
                        <div className="space-y-6">
                            {[
                                { q: "Чи зникає об'єм?", a: "Кератин прибирає 'пухнастість', через що візуально об'єму може стати менше. Проте через 1-2 тижні волосся стає більш природним." },
                                { q: "Чи можна мити голову одразу?", a: "Так, я використовую сучасні склади, які ми змиваємо відразу в студії." },
                                { q: "Чи можна фарбувати волосся?", a: "Фарбування рекомендується робити за 2 тижні до або через 2 тижні після процедури." }
                            ].map((faq, i) => (
                                <div key={i} className="p-8 border border-stone-800 rounded-3xl bg-stone-900/10">
                                    <h4 className="flex items-center gap-3 text-white font-bold mb-4 uppercase text-[11px] tracking-widest">
                                        <HelpCircle size={18} className="text-[#D4AF37]" /> {faq.q}
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