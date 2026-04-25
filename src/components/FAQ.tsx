import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqData = [
  {
    q: "Чи можна робити кератин на дуже пошкоджене волосся або блонд?",
    a: "Так, але тільки після діагностики. Для дуже пошкодженого волосся ми часто рекомендуємо холодний ботокс або біопластику, які працюють на відновлення структури без агресивного термічного впливу."
  },
  {
    q: "Який догляд потрібен після процедури вирівнювання?",
    a: "Головне правило — використання безсульфатного шампуню. Це дозволить зберегти захисну оболонку та подовжити ефект від процедури до 6 місяців."
  },
  {
    q: "Чим відрізняється нанопластика від кератину?",
    a: "Нанопластика — це амінокислотне випрямлення, яке ідеально підходить для натурального або жорсткого волосся. Кератин же краще працює з пористим та пухнастим волоссям, забезпечуючи максимальний блиск."
  },
  {
    q: "Чи безпечні процедури для вагітних та жінок, що годують?",
    a: "Для цієї категорії клієнток ми пропонуємо Біопластику. Це органічний склад без формальдегіду, який є абсолютно безпечним і не має різкого запаху."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-stone-950">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="font-serif text-4xl text-white mb-12 text-center italic">
          Поширені <span className="text-[#D4AF37]">запитання</span>
        </h2>
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="border border-stone-800 rounded-2xl overflow-hidden">
              <button
                className="w-full p-6 text-left flex justify-between items-center bg-stone-900/40 hover:bg-stone-900 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-white font-medium pr-4">{item.q}</span>
                {openIndex === index ? <ChevronUp className="text-[#D4AF37]" /> : <ChevronDown className="text-stone-500" />}
              </button>
              {openIndex === index && (
                <div className="p-6 bg-stone-900/20 text-stone-400 text-sm leading-relaxed border-t border-stone-800">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}