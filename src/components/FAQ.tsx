import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqData = [
  {
    q: "Кератин чи Ботокс — що підійде саме мені?",
    a: "Якщо ваша мета — ідеальна гладкість та випрямлення кучерів, обирайте кератин. Якщо волосся дуже пошкоджене і ви хочете його 'підлікувати', зберігши об'єм — ідеальним буде ботокс."
  },
  {
    q: "Наскільки безпечні склади, з якими ви працюєте?",
    a: "Я використовую тільки преміум-бренди. Для вагітних та дівчат з чутливою шкірою у мене є лінійка Біопластики — без формальдегіду та різкого запаху."
  },
  {
    q: "Як довго я буду бачити результат?",
    a: "Ефект накопичувальний. Перша процедура тримається 2-4 місяці. Після другої та третьої результат зазвичай зберігається до 6 місяців."
  },
  {
    q: "Чи потрібно мені купувати спеціальний дорогий догляд після?",
    a: "Достатньо якісного безсульфатного шампуню та кондиціонера. Я дам вам чіткий список доступних брендів відразу після процедури."
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
                {openIndex === index ? <ChevronUp className="text-[#D4AF37]" /> : <ChevronDown className="text-stone-300" />}
              </button>
              {openIndex === index && (
                <div className="p-6 bg-stone-900/20 text-stone-300 text-sm leading-relaxed border-t border-stone-800">
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