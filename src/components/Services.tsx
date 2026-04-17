import { Clock, CheckCircle } from 'lucide-react';

const services = [
  {
    title: 'Кератинове вирівнювання',
    slug: '/keratynove-vyrivnyuvannya-lviv',
    description: 'Максимальне випрямлення найскладнішого завитка та дзеркальне сяйво на тривалий термін.',
    duration: '3–4 год',
    price: 'від 2 500 грн',
    features: ['Глибоке живлення', 'Дзеркальний блиск'],
    image: 'https://images.unsplash.com/photo-1519735810596-a35f3802f33f?auto=format&fit=crop&q=80&w=800',
    highlight: true,
  },
  {
    title: 'Ботокс для волосся',
    slug: '/botoks-volossya-lviv',
    description: 'Відновлення структури, зволоження та дисципліна без повної втрати природного об’єму.',
    duration: '2 год',
    price: 'від 1 800 грн',
    features: ['Відновлення', 'Шовковистість'],
    image: 'https://images.unsplash.com/photo-1522336572468-97b06e8ef143?auto=format&fit=crop&q=80&w=800',
    highlight: false,
  },
  {
    title: 'Нанопластика',
    slug: '/nanoplastyka-volossya-lviv',
    description: 'Безпечне амінокислотне випрямлення. Підходить для натурального та фарбованого волосся.',
    duration: '3 год',
    price: 'від 2 000 грн',
    features: ['Без формальдегіду', 'Яскравий блиск'],
    image: 'https://images.unsplash.com/photo-1552046122-03184de85e08?auto=format&fit=crop&q=80&w=800',
    highlight: false,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-28 bg-stone-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-serif text-4xl text-center text-white mb-16 uppercase tracking-widest">Процедури</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="bg-stone-950 border border-stone-800 rounded-2xl overflow-hidden flex flex-col">
              <div className="h-64 overflow-hidden">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="font-serif text-2xl text-white mb-4">{service.title}</h3>
                <p className="text-stone-400 text-sm mb-6 leading-relaxed">{service.description}</p>
                <div className="mt-auto space-y-4">
                  <div className="flex justify-between text-white font-bold border-b border-stone-800 pb-4">
                    <span className="text-xs text-stone-500 uppercase tracking-widest flex items-center gap-2"><Clock size={12}/> {service.duration}</span>
                    <span>{service.price}</span>
                  </div>
                  <a href="https://www.instagram.com/haircare_ua/" target="_blank" rel="noreferrer" className="block w-full text-center py-4 bg-[#D4AF37] text-stone-950 text-xs font-bold uppercase tracking-widest rounded-lg">Записатись</a>
                  <a href={service.slug} className="block w-full text-center text-stone-500 text-[10px] uppercase tracking-widest hover:text-[#D4AF37] transition-all">Детальніше</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}