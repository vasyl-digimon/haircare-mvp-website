import { Clock, CheckCircle } from 'lucide-react';

const services = [
  {
    title: 'Кератинове випрямлення',
    slug: '/keratynove-vyrivnyuvannya-lviv',
    description: 'Випрямлення пухнастого, пористого та кучерявого волосся.',
    duration: '2–3 год',
    price: 'від 1800 грн',
    features: ['Для пористого волосся', 'Прибирає пухнастість'],
    image: '/keratynove-vypryamlennya-volossya.avif',
    highlight: true,
  },
  {
    title: 'Ботокс для волосся',
    slug: '/botoks-volossya-lviv',
    description: 'Глибоке зволоження та відновлення структури.',
    duration: '1–2 год',
    price: 'від 800 грн',
    features: ['Зволоження', 'Дисципліна волосся'],
    image: '/botoks-volossya.avif',
    highlight: false,
  },
  {
    title: 'Біопластика',
    slug: '/bioplastyka-volossya-lviv',
    description: 'Органічне випрямлення без формальдегіду. Безпечно для вагітних.',
    duration: '2–3 год',
    price: 'від 1800 грн',
    features: ['Без формальдегіду', 'Можна вагітним'],
    image: '/bioplastika-volossya.avif',
    highlight: false,
  },
  {
    title: 'Нанопластика',
    slug: '/nanoplastyka-volossya-lviv',
    description: 'Інноваційна процедура для випрямлення жорсткого завитка.',
    duration: '2–3 год',
    price: 'від 1800 грн',
    features: ['Максимальне випрямлення', 'Глянцевий блиск'],
    image: '/nanoplastyka-volossya.avif',
    highlight: false,
  },
  {
    title: 'Відновлення волосся',
    slug: '/vidnovlennya-volossya-lviv',
    description: 'Живить і зміцнює пошкоджене волосся.',
    duration: '1–2 год',
    price: 'від 800 грн',
    features: ['Живлення та сила', 'Здоровий вигляд'],
    image: '/vidnovlennya-volossya.avif',
    highlight: false,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-28 bg-stone-900 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-[#D4AF37]" />
            <span className="text-[#D4AF37] text-xs font-semibold tracking-[0.3em] uppercase">Прайс та послуги</span>
            <div className="h-px w-10 bg-[#D4AF37]" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4 italic">
            Мої <span className="text-[#D4AF37]">процедури</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className={`bg-stone-950 border ${service.highlight ? 'border-[#D4AF37]/50 shadow-2xl shadow-gold-900/10' : 'border-stone-800'} rounded-2xl overflow-hidden flex flex-col transition-all duration-500 hover:-translate-y-2 group`}>
              <div className="h-64 overflow-hidden relative bg-stone-900">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" 
                />
                {service.highlight && (
                   <div className="absolute top-4 right-4 bg-[#D4AF37] text-stone-900 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter shadow-xl">Top Choice</div>
                )}
              </div>
              <div className="p-8 flex flex-col flex-grow">
                {/* Виправлений заголовок з фіксованою мін-висотою */}
                <h3 className="font-serif text-2xl text-white mb-3 tracking-wide min-h-[4rem] flex items-center">
                  {service.title}
                </h3>
                
                {/* Виправлений опис з фіксованою мін-висотою */}
                <p className="text-stone-400 text-sm mb-6 leading-relaxed min-h-[3rem] line-clamp-2 italic">
                  {service.description}
                </p>
                
                {/* Список фішок з фіксованою мін-висотою */}
                <ul className="space-y-2 mb-6 min-h-[3rem]">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-[11px] text-stone-300 uppercase tracking-wider">
                      <CheckCircle size={12} className="text-[#D4AF37]" /> {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto space-y-4">
                  <div className="flex justify-between items-center text-white font-bold border-b border-stone-800 pb-4">
                    <span className="text-[10px] text-stone-500 uppercase tracking-[0.2em] flex items-center gap-2">
                      <Clock size={12} /> {service.duration}
                    </span>
                    <span className="text-[#D4AF37] tracking-tighter">{service.price}</span>
                  </div>
                  <a 
                    href="https://www.instagram.com/haircare_ua/" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="block w-full text-center py-4 bg-[#D4AF37] text-stone-950 text-xs font-bold uppercase tracking-[0.2em] rounded-lg hover:bg-white transition-all duration-300 shadow-md"
                  >
                    Записатись
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}