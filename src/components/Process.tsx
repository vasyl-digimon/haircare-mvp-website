import { MessageSquareText, Camera, Search, Sparkles } from 'lucide-react';

const steps = [
  { 
    icon: <MessageSquareText size={24} />, 
    t: "Консультація", 
    d: "Пишете мені в Direct або Telegram. Описуєте історію вашого волосся (фарбування, рівень пошкодження)." 
  },
  { 
    icon: <Camera size={24} />, 
    t: "Фото-аналіз", 
    d: "Надсилаєте фото волосся при денному світлі. Це дозволяє мені попередньо оцінити його стан та об'єм роботи." 
  },
  { 
    icon: <Search size={24} />, 
    t: "Діагностика", 
    d: "Вже в студії я роблю тест на еластичність пасом. Це фінальний крок для вибору правильної техніки та складу." 
  },
  { 
    icon: <Sparkles size={24} />, 
    t: "Результат", 
    d: "Проводимо процедуру (2-3 години) — і ви отримуєте ідеальне волосся з гарантією та порадами по догляду." 
  }
];

export default function Process() {
  return (
    <section className="py-24 bg-stone-950 border-t border-stone-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-serif text-3xl md:text-4xl text-center text-white mb-16 italic">
          Як ми підберемо <span className="text-[#D4AF37]">вашу процедуру</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="group p-8 bg-stone-900/30 border border-stone-800 rounded-3xl hover:border-[#D4AF37]/30 transition-all duration-300">
              <div className="text-[#D4AF37] mb-6 group-hover:scale-110 transition-transform duration-300">
                {step.icon}
              </div>
              <h3 className="text-white font-bold mb-3">{step.t}</h3>
              <p className="text-stone-400 text-sm leading-relaxed">{step.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}