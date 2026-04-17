import { Award, Heart, Sparkles, Shield } from 'lucide-react';

const highlights = [
  {
    icon: Award,
    title: 'Сертифікований спеціаліст',
    desc: 'Офіційні сертифікати від провідних світових брендів кератинових систем.',
  },
  {
    icon: Heart,
    title: 'Індивідуальний підхід',
    desc: 'Кожна клієнтка отримує персональну консультацію та підбір процедури.',
  },
  {
    icon: Sparkles,
    title: 'Преміум матеріали',
    desc: 'Використовую лише перевірені та безпечні засоби топових брендів.',
  },
  {
    icon: Shield,
    title: 'Безпека та якість',
    desc: 'Всі процедури виконуються з дотриманням найвищих стандартів безпеки.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-28 bg-stone-950 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-gold-800/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/60">
              <img
                src="https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop"
                alt="Майстер кератинового лікування"
                className="w-full h-[520px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-6 -right-6 bg-stone-900 border border-gold-800/40 rounded-2xl p-6 shadow-2xl shadow-black/50 backdrop-blur-sm">
              <p className="text-gold-400 font-serif text-4xl font-bold">6+</p>
              <p className="text-stone-300 text-sm mt-1">Років у красі</p>
            </div>

            <div className="absolute -top-4 -left-4 bg-gold-500/10 border border-gold-600/30 rounded-2xl p-4 backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gold-gradient flex items-center justify-center">
                  <Sparkles size={14} className="text-stone-900" />
                </div>
                <div>
                  <p className="text-white text-xs font-semibold">Топ майстер</p>
                  <p className="text-gold-400 text-xs">Львів, Україна</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-10 bg-gold-500" />
                <span className="text-gold-400 text-xs font-semibold tracking-[0.3em] uppercase">
                  Про мене
                </span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                Ірина Чекалова —<br />
                <span className="text-gold-400">майстер вашої мрії</span>
              </h2>
              <p className="text-stone-300 text-base leading-relaxed mb-4">
                Привіт! Я - Ірина, сертифікований спеціаліст із кератинового лікування волосся.
                Вже понад 6 років я допомагаю жінкам відчути впевненість у собі завдяки
                здоровому, блискучому та гладкому волоссю.
              </p>
              <p className="text-stone-400 text-base leading-relaxed">
                Я закохана в свою справу і постійно вдосконалюю навички, проходячи навчання
                у провідних майстрів Європи. Мій підхід — не просто послуга, а справжній
                ритуал краси та турботи про себе.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-stone-900/60 border border-stone-800/60 hover:border-gold-800/50 transition-colors duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-gold-900/40 flex items-center justify-center flex-shrink-0 group-hover:bg-gold-900/70 transition-colors">
                    <item.icon size={18} className="text-gold-400" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold mb-1">{item.title}</p>
                    <p className="text-stone-400 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
