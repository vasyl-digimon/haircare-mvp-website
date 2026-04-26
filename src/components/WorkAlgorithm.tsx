import { ClipboardCheck, Droplets, CalendarCheck, Zap, Sparkles } from 'lucide-react';

const steps = [
  {
    n: "01",
    t: "Професійна діагностика",
    d: "Кожен візит починається з тесту на еластичність. Ми визначаємо ступінь пошкодження волосся, щоб обрати безпечний температурний режим та склад.",
    icon: <ClipboardCheck className="text-[#D4AF37]" size={24} />
  },
  {
    n: "02",
    t: "Підготовка структури",
    d: "Очищення волосся спеціальним підготовчим шампунем. Це відкриває кутикулу та дозволяє активним компонентам проникнути максимально глибоко.",
    icon: <Droplets className="text-[#D4AF37]" size={24} />
  },
  {
    n: "03",
    t: "Індивідуальний коктейль",
    d: "Я не працюю за шаблоном. За потреби змішую склади або додаю протеїнові підкладки для захисту найбільш вразливих ділянок вашого волосся.",
    icon: <Zap className="text-[#D4AF37]" size={24} />
  },
  {
    n: "04",
    t: "Технічне запечатування",
    d: "Робота з професійними стайлерами, де температура підбирається окремо для кожної зони. Це гарантує ідеальну гладкість без перегріву.",
    icon: <CalendarCheck className="text-[#D4AF37]" size={24} />
  },
  {
    n: "05",
    t: "Миттєвий фініш",
    d: "Я завжди змиваю склад відразу. Ви бачите фінальний результат, насолоджуєтесь блиском і йдете додому з уже чистою головою.",
    icon: <Sparkles className="text-[#D4AF37]" size={24} />
  }
];

export default function WorkAlgorithm() {
  return (
    <section className="py-24 bg-stone-900/20 border-y border-stone-900">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl text-white mb-4 uppercase tracking-tight">
            Мій алгоритм <span className="text-[#D4AF37]">роботи</span>
          </h2>
          <p className="text-stone-500 text-sm tracking-widest uppercase">Технологічний підхід до краси</p>
        </div>

        <div className="grid gap-8">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col md:flex-row gap-6 p-8 bg-stone-950 border border-stone-800 rounded-[32px] hover:border-[#D4AF37]/30 transition-all duration-500 group">
              <div className="flex items-center justify-between md:flex-col md:justify-start gap-4">
                <span className="text-5xl font-serif text-stone-800 group-hover:text-[#D4AF37]/20 transition-colors duration-500">{step.n}</span>
                <div className="p-3 bg-stone-900 rounded-2xl">
                  {step.icon}
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-white font-bold text-xl mb-2 uppercase tracking-wide">{step.t}</h3>
                <p className="text-stone-400 text-sm leading-relaxed max-w-2xl">{step.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}