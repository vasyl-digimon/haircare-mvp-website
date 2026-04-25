import { Helmet } from 'react-helmet-async'; // Додаємо цей імпорт для SEO
import { Link } from 'react-router-dom';
import Reviews from '../components/Reviews';
import Contact from '../components/Contact';
import { CheckCircle, AlertCircle } from 'lucide-react';

export default function KeratinPage() {
    return (
        <>
            {/* Цей блок підміняє дані в <head> тільки для цієї сторінки */}
            <Helmet>
                <title>Кератинове вирівнювання волосся Львів — ціна, відгуки | Haircare UA</title>
                <meta name="description" content="Шукаєте професійне кератинове випрямлення у Львові? Дізнайтесь ціни, плюси та мінуси процедури та як правильно доглядати за волоссям після кератину." />
                <link rel="canonical" href="https://www.haircareua.com.ua/keratynove-vyrivnyuvannya-lviv" />
            </Helmet>

            <div className="pt-24 bg-stone-950 text-white">
                {/* HERO SECTION */}
                <section className="relative py-20 border-b border-stone-900">
                    <div className="max-w-4xl mx-auto px-6 text-center md:text-left">
                        <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
                            Кератинове вирівнювання <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F9E498]">волосся Львів</span>
                        </h1>
                        <p className="text-stone-400 text-lg leading-relaxed max-w-2xl mx-auto md:mx-0">
                            Професійне кератинове випрямлення волосся будь-якої складності. Поверніть своїм пасмам дзеркальний блиск та ідеальну гладкість на термін до 6 місяців.
                        </p>
                    </div>
                </section>

                {/* SEO CONTENT SECTION */}
                <section className="py-20">
                    <div className="max-w-4xl mx-auto px-6">

                        {/* ЦІНА */}
                        <div className="mb-20">
                            <h2 className="text-[#D4AF37] font-serif text-3xl mb-6">Ціна на кератинове випрямлення у Львові</h2>
                            <div className="bg-stone-900/30 p-8 rounded-3xl border border-stone-800 shadow-xl shadow-black/20">
                                <p className="text-stone-300 mb-6 leading-relaxed">
                                    Багатьох цікавить питання: <strong>скільки коштує кератин?</strong> Вартість процедури розраховується індивідуально і залежить від довжини та густоти волосся.
                                </p>
                                <div className="space-y-4 text-stone-400">
                                    <div className="flex justify-between border-b border-stone-800 pb-3">
                                        <span>Коротке волосся (до плечей)</span>
                                        <span className="text-white font-bold tracking-tighter">від 1800 грн</span>
                                    </div>
                                    <div className="flex justify-between border-b border-stone-800 pb-3">
                                        <span>Середня довжина (до лопаток)</span>
                                        <span className="text-white font-bold tracking-tighter">від 2200 грн</span>
                                    </div>
                                    <div className="flex justify-between border-b border-stone-800 pb-3">
                                        <span>Довге волосся (до пояса)</span>
                                        <span className="text-white font-bold tracking-tighter">від 2800 грн</span>
                                    </div>
                                </div>
                                <p className="text-xs text-stone-500 mt-6 italic">* Точну ціну майстер озвучує після діагностики стану волосся.</p>
                            </div>
                        </div>

                        {/* ПЛЮСИ ТА МІНУСИ */}
                        <div className="mb-20">
                            <h2 className="text-[#D4AF37] font-serif text-3xl mb-6 text-center md:text-left">Плюси та мінуси, можливі наслідки</h2>
                            <p className="text-stone-300 mb-8 leading-relaxed">
                                Чи шкідливе кератинове вирівнювання? При дотриманні технології та використанні якісних складів — ні. Процедура має накопичувальний ефект і значно полегшує домашній догляд.
                            </p>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="bg-stone-900/40 p-8 rounded-3xl border border-stone-800">
                                    <h3 className="text-white font-bold flex items-center gap-2 mb-6">
                                        <CheckCircle size={20} className="text-green-600" /> Переваги:
                                    </h3>
                                    <ul className="text-stone-400 text-sm space-y-4">
                                        <li className="flex gap-2"><span>•</span> Повне випрямлення навіть сильного завитка</li>
                                        <li className="flex gap-2"><span>•</span> Захист від вологості та "пухнастості"</li>
                                        <li className="flex gap-2"><span>•</span> Неймовірний глянцевий блиск</li>
                                        <li className="flex gap-2"><span>•</span> Економія часу на щоденну укладку</li>
                                    </ul>
                                </div>
                                <div className="bg-stone-900/40 p-8 rounded-3xl border border-stone-800">
                                    <h3 className="text-white font-bold flex items-center gap-2 mb-6">
                                        <AlertCircle size={20} className="text-[#D4AF37]" /> На що звернути увагу:
                                    </h3>
                                    <ul className="text-stone-400 text-sm space-y-4">
                                        <li className="flex gap-2"><span>•</span> Потрібно використовувати безсульфатний шампунь</li>
                                        <li className="flex gap-2"><span>•</span> Перші 2 тижні можлива легка втрата об'єму</li>
                                        <li className="flex gap-2"><span>•</span> Не підходить для критично пошкодженого волосся</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* ПОРІВНЯННЯ */}
                        <div className="mb-20 p-8 md:p-12 bg-gradient-to-br from-stone-900 to-black rounded-3xl border border-[#D4AF37]/20 shadow-2xl">
                            <h2 className="text-[#D4AF37] font-serif text-3xl mb-6">Кератин, Ботокс чи Нанопластика: що обрати?</h2>
                            <p className="text-stone-300 leading-relaxed mb-6">
                                Головна відмінність кератину від ботоксу та нанопластики полягає в силі випрямлення та складі.
                            </p>
                            <div className="space-y-4 text-stone-400 text-sm leading-relaxed">
                                <p><strong>Кератин</strong> — ідеально вирівнює будь-який завиток.</p>
                                <p><strong>Ботокс</strong> — глибоко зволожує та прибирає пухнастість без повної втрати природного об’єму.</p>
                                <p><strong>Нанопластика</strong> — органічне випрямлення на основі кислот, ідеальне для натурального волосся.</p>
                            </div>
                        </div>

                        {/* ДОГЛЯД ПІСЛЯ */}
                        <div className="mb-20">
                            <h2 className="text-[#D4AF37] font-serif text-3xl mb-8">Правильний догляд після кератину</h2>
                            <div className="grid gap-6">
                                <div className="flex gap-6 p-6 bg-stone-900/20 rounded-2xl border border-stone-800 hover:border-[#D4AF37]/30 transition-colors">
                                    <div className="text-[#D4AF37] font-serif text-2xl font-bold opacity-50">01</div>
                                    <div>
                                        <h4 className="text-white font-bold mb-2 uppercase tracking-widest text-xs">Шампунь</h4>
                                        <p className="text-stone-400 text-sm leading-relaxed">Використовуйте тільки професійні безсульфатні лінійки. Це критично для збереження кератинової оболонки.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6 p-6 bg-stone-900/20 rounded-2xl border border-stone-800 hover:border-[#D4AF37]/30 transition-colors">
                                    <div className="text-[#D4AF37] font-serif text-2xl font-bold opacity-50">02</div>
                                    <div>
                                        <h4 className="text-white font-bold mb-2 uppercase tracking-widest text-xs">Сушка феном</h4>
                                        <p className="text-stone-400 text-sm leading-relaxed">Після кожного миття волосся обов'язково потрібно сушити теплим повітрям фена. Кератин термоактивний і "запам'ятовує" форму під дією тепла.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6 p-6 bg-stone-900/20 rounded-2xl border border-stone-800 hover:border-[#D4AF37]/30 transition-colors">
                                    <div className="text-[#D4AF37] font-serif text-2xl font-bold opacity-50">03</div>
                                    <div>
                                        <h4 className="text-white font-bold mb-2 uppercase tracking-widest text-xs">Відгуки клієнток</h4>
                                        <p className="text-stone-400 text-sm leading-relaxed">Більшість дівчат відзначають, що час на ранкові збори скорочується у 3 рази, а волосся виглядає доглянутим навіть у дощову погоду.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
                {/* Додайте це всередині KeratinPage.tsx перед <Contact /> */}
                <section className="py-12 border-t border-stone-900">
                    <div className="max-w-4xl mx-auto px-6 text-center">
                        <p className="text-stone-500 text-sm">
                            Не впевнені, що вам підійде саме кератин? Ознайомтесь з усіма послугами
                            <Link to="/" className="text-[#D4AF37] hover:underline ml-1">
                                вирівнювання та відновлення волосся у Львові
                            </Link> на нашій головній сторінці.
                        </p>
                    </div>
                </section>
                <Reviews />
                <Contact />
            </div>
        </>
    );
}