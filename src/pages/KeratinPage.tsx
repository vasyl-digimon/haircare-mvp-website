import React from 'react';
import Contact from '../components/Contact';

export default function KeratinPage() {
  return (
    <div className="pt-24 bg-stone-950">
      {/* Hero секція сторінки */}
      <section className="relative py-20 border-b border-stone-900">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
            Кератинове вирівнювання <span className="text-[#D4AF37]">волосся Львів</span>
          </h1>
          <p className="text-stone-400 text-lg leading-relaxed mb-8">
            Шукаєте ідеальну гладкість? Професійне кератинове випрямлення у Львові — це процедура, 
            яка перетворює навіть найскладніший завиток на дзеркальне полотно.
          </p>
        </div>
      </section>

      {/* Основний SEO контент */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 prose prose-invert prose-gold">
          
          <h2 className="text-[#D4AF37] font-serif text-3xl mb-6">Ціна на кератин у Львові</h2>
          <p>Вартість процедури залежить від довжини та густоти вашого волосся. У моїй студії ціна стартує <strong>від 1800 грн</strong>. Точну вартість я розраховую після діагностики стану пасом.</p>

          <h2 className="text-[#D4AF37] font-serif text-3xl mt-12 mb-6">Плюси та мінуси процедури</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-stone-900/50 p-6 rounded-2xl border border-green-900/20">
              <h3 className="text-white mb-4">Переваги:</h3>
              <ul className="text-stone-400 text-sm space-y-2">
                <li>• Ідеальна гладкість до 6 місяців</li>
                <li>• Легке розчісування та економія часу</li>
                <li>• Захист від вологості (волосся не пушиться)</li>
                <li>• Неймовірний блиск</li>
              </ul>
            </div>
            <div className="bg-stone-900/50 p-6 rounded-2xl border border-red-900/20">
              <h3 className="text-white mb-4">Особливості:</h3>
              <ul className="text-stone-400 text-sm space-y-2">
                <li>• Потрібен спеціальний безсульфатний догляд</li>
                <li>• Можлива втрата об'єму в перші тижні</li>
              </ul>
            </div>
          </div>

          <h2 className="text-[#D4AF37] font-serif text-3xl mt-12 mb-6">Як проходить процедура?</h2>
          <ol className="text-stone-400 space-y-4">
            <li><strong>1. Діагностика:</strong> Перевіряємо ступінь пошкодження волосся.</li>
            <li><strong>2. Очищення:</strong> Використовуємо шампунь глибокої очистки.</li>
            <li><strong>3. Нанесення:</strong> Наносимо преміальний кератиновий склад.</li>
            <li><strong>4. Випаровування:</strong> Запечатуємо склад за допомогою професійної праски.</li>
          </ol>

          <h2 className="text-[#D4AF37] font-serif text-3xl mt-12 mb-6">Догляд після кератину</h2>
          <p>Щоб результат радував вас максимально довго, я рекомендую використовувати тільки безсульфатні шампуні та професійні маски. Також важливо сушити волосся феном після кожного миття для активації компонентів кератину.</p>
        </div>
      </section>

      <Contact />
    </div>
  );
}