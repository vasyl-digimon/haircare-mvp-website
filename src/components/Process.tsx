import React from 'react';

const steps = [
  { n: "01", t: "Консультація", d: "Проводжу тест на еластичність та підбираю склад індивідуально під ваш тип волосся." },
  { n: "02", t: "Підготовка", d: "Очищення волосся спеціальним шампунем для глибокого проникнення компонентів." },
  { n: "03", t: "Нанесення", d: "Рівномірне нанесення преміального складу (кератин, ботокс або нанопластика)." },
  { n: "04", t: "Запечатування", d: "Термічна обробка пасом для фіксації результату та створення дзеркального блиску." }
];

export default function Process() {
  return (
    <section className="py-24 bg-stone-950 border-t border-stone-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-serif text-4xl text-center text-white mb-16 italic">
          Як проходить <span className="text-[#D4AF37]">процедура</span>
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.n} className="relative p-8 bg-stone-900/30 border border-stone-800 rounded-3xl">
              <span className="text-5xl font-serif text-[#D4AF37]/20 absolute top-4 right-6 font-bold">{step.n}</span>
              <h3 className="text-white font-bold mb-3 relative z-10">{step.t}</h3>
              <p className="text-stone-400 text-sm leading-relaxed relative z-10">{step.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}