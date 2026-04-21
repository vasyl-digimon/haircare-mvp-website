import React from 'react';
import Contact from '../components/Contact';
import { CheckCircle, AlertCircle, Info } from 'lucide-react';

export default function KeratinPage() {
  return (
    <div className="pt-24 bg-stone-950">
      {/* HERO SECTION */}
      <section className="relative py-20 border-b border-stone-900">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
            Кератинове вирівнювання <span className="text-[#D4AF37]">волосся Львів</span>
          </h1>
          <p className="text-stone-400 text-lg leading-relaxed">
            Професійне кератинове випрямлення волосся будь-якої складності. Поверніть своїм пасмам дзеркальний блиск та ідеальну гладкість на термін до 6 місяців.
          </p>
        </div>
      </section>

      {/* SEO CONTENT SECTION */}
      <section className="py-20 bg-stone-950">
        <div className="max-w-4xl mx-auto px-6">
          
          {/* ЦІНА */}
          <div className="mb-16">
            <h2 className="text-[#D4AF37] font-serif text-3xl mb-6">Ціна на кератинове випрямлення у Львові</h2>
            <div className="bg-stone-900/30 p-8 rounded-3xl border border-stone-800">
              <p className="text-stone-300 mb-4 leading-relaxed">
                Багатьох цікавить питання: <strong>скільки коштує кератин?</strong> Вартість процедури розраховується індивідуально і залежить від довжини та густоти. 
              </p>
              <ul className="space-y-3 text-stone-400">
                <li className="flex justify-between border-b border-stone-800 pb-2"><span>Коротке волосся (до плечей)</span> <span className="text-white font-bold">від 1800 грн</span></li>
                <li className="flex justify-between border-b border-stone-800 pb-2"><span>Середня довжина (до лопаток)</span> <span className="text-white font-bold">від 2200 грн</span></li>
                <li className="flex justify-between border-b border-stone-800 pb-2"><span>Довге волосся (до пояса)</span> <span className="text-white font-bold">від 2800 грн</span></li>
              </ul>
              <p className="text-xs text-stone-500 mt-4 italic">* Можлива доплата за густоту та складність завитка.</p>
            </div>
          </div>

          {/* ПЛЮСИ, МІНУСИ ТА НАСЛІДКИ */}
          <div className="mb-16">
            <h2 className="text-[#D4AF37] font-serif text-3xl mb-6">Плюси та мінуси, можливі наслідки</h2>
            <p className="text-stone-300 mb-8 leading-relaxed">
              Чи шкідливе кератинове вирівнювання? При дотриманні технології та використанні якісних складів — ні. Процедура має накопичувальний ефект і значно полегшує домашній догляд.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-white font-bold flex items-center gap-2"><CheckCircle size={20} className="text-green-600"/> Переваги:</h3>
                <ul className="text-stone-400 text-sm space-y-2">
                  <li>• Повне випрямлення навіть сильного завитка</li>
                  <li>• Захист від вологості та "пухнастості"</li>
                  <li>• Неймовірний глянцевий блиск</li>
                  <li>• Економія часу на щоденну укладку</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-white font-bold flex items-center gap-2"><AlertCircle size={20} className="text-red-600"/> На що звернути увагу:</h3>
                <ul className="text-stone-400 text-sm space-y-2">
                  <li>• Потрібно використовувати безсульфатний шампунь</li>
                  <li>• Перші 2 тижні можлива легка втрата об'єму</li>
                  <li>• Процедура не підходить для дуже вбитого волосся</li>
                </ul>
              </div>
            </div>
          </div>

          {/* ПОРІВНЯННЯ */}
          <div className="mb-16 p-8 bg-stone-900/50 rounded-3xl border border-[#D4AF37]/20">
            <h2 className="text-[#D4AF37] font-serif text-3xl mb-6">Кератин чи Ботокс: що обрати?</h2>
            <p className="text-stone-300 leading-relaxed mb-4">
              Головна відмінність кератину від ботоксу та нанопластики полягає в силі випрямлення.
            </p>
            <p className="text-stone-400 text-sm italic">
              <strong>Кератин</strong> — ідеально вирівнює. <strong>Ботокс</strong> — глибоко зволожує без втрати об'єму. <strong>Нанопластика</strong> — органічне випрямлення для натурального волосся.
            </p>
          </div>

          {/* ДОГЛЯД ПІСЛЯ */}
          <div className="mb-16">
            <h2 className="text-[#D4AF37] font-serif text-3xl mb-6">Правильний догляд після кератину</h2>
            <div className="space-y-6 text-stone-300">
              <div className="flex gap-4">
                <div className="text-[#D4AF37] font-bold">01.</div>
                <p><strong>Шампунь:</strong> Використовуйте тільки професійні безсульфатні лінійки. Це критично для збереження результату.</p>
              </div>
              <div className="flex gap-4">
                <div className="text-[#D4AF37] font-bold">02.</div>
                <p><strong>Сушка:</strong> Після кожного миття волосся обов'язково потрібно сушити феном. Кератин активується під дією тепла.</p>
              </div>
              <div className="flex gap-4">
                <div className="text-[#D4AF37] font-bold">03.</div>
                <p><strong>Відгуки клієнток:</strong> Понад 90% дівчат відзначають, що після кератину волосся стає слухнянішим навіть без використання додаткових засобів для стайлінгу.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Contact />
    </div>
  );
}