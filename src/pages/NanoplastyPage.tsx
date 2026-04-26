import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Contact from '../components/Contact';
import { 
  Leaf, 
  ShieldCheck, 
  Clock, 
  ArrowRight,
  CheckCircle,
  XCircle,
  Camera,
  Instagram
} from 'lucide-react';

export default function NanoplastyPage() {
  const pageUrl = "https://www.haircareua.com.ua/nanoplastyka-volossya-lviv";
  
  return (
    <>
      <Helmet>
        <title>Нанопластика волосся Львів: Ціна, Відгуки, Результат | Haircare UA</title>
        <meta name="description" content="Професійна нанопластика волосся у Львові. Органічне випрямлення без токсинів. Ідеальна гладкість до 6 місяців. Розрахунок вартості за фото!" />
        <link rel="canonical" href={pageUrl} />

        {/* Rich Schema для Нанопластики */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Service",
            "serviceType": "Нанопластика волосся",
            "provider": {
              "@type": "BeautySalon",
              "name": "Haircare UA",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "вул. Костюшка, 18",
                "addressLocality": "Львів",
                "addressCountry": "UA"
              }
            },
            "areaServed": {
              "@type": "City",
              "name": "Львів"
            },
            "offers": {
              "@type": "Offer",
              "priceCurrency": "UAH",
              "price": "1800"
            }
          })}
        </script>
      </Helmet>

      <div className="pt-20 bg-stone-950 text-white selection:bg-[#D4AF37] selection:text-black font-sans">
        
        {/* 1. HERO SECTION */}
        <section className="relative min-h-[60vh] flex items-center border-b border-stone-900 overflow-hidden text-left">
          <div className="absolute inset-0 z-0">
            <img src="/nanoplastyka-volossya.avif" className="w-full h-full object-cover opacity-30 object-center" alt="Нанопластика волосся Львів результат" fetchPriority="high"/>
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/70 to-transparent" />
          </div>
          <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
            <div className="max-w-3xl">
              <nav className="flex gap-2 text-stone-500 text-[10px] uppercase tracking-widest mb-8 font-bold">
                <Link to="/" className="hover:text-[#D4AF37] transition-colors">Головна</Link>
                <span>/</span>
                <span className="text-[#D4AF37]">Нанопластика</span>
              </nav>
              <h1 className="font-serif text-4xl md:text-7xl font-bold leading-tight mb-6 text-balance uppercase tracking-tight">
                Нанопластика волосся <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F9E498]">у Львові</span>
              </h1>
              <p className="text-stone-300 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl">
                Органічне випрямлення без токсинів. Приборкуємо навіть найжорсткіший завиток, даруючи волоссю дзеркальну гладкість.
              </p>
              <a href="https://www.instagram.com/haircare_ua/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 px-10 py-5 bg-[#D4AF37] text-black font-bold uppercase text-xs tracking-widest rounded-full hover:bg-white transition-all shadow-2xl">
                Записатись на консультацію <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>

        {/* 2. TRUST BAR */}
        <section className="py-12 bg-stone-900/30 border-b border-stone-900">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-center gap-4 justify-center md:justify-start">
                <Leaf className="text-[#D4AF37]" size={28} />
                <div>
                  <h4 className="font-bold text-sm uppercase font-serif">Органічний склад</h4>
                  <p className="text-stone-500 text-xs mt-1">Без формальдегіду</p>
                </div>
              </div>
              <div className="flex items-center gap-4 justify-center md:justify-start border-y md:border-y-0 md:border-x border-stone-800 py-8 md:py-0 md:px-8">
                <ShieldCheck className="text-[#D4AF37]" size={28} />
                <div>
                  <h4 className="font-bold text-sm uppercase font-serif">Комфорт процедури</h4>
                  <p className="text-stone-500 text-xs mt-1">Без диму та сліз</p>
                </div>
              </div>
              <div className="flex items-center gap-4 justify-center md:justify-start">
                <Clock className="text-[#D4AF37]" size={28} />
                <div>
                  <h4 className="font-bold text-sm uppercase font-serif">Ефект до 6 місяців</h4>
                  <p className="text-stone-500 text-xs mt-1">Довготривала гладкість</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. CHOICE BLOCK */}
        <section className="py-24 bg-stone-950 text-left">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="font-serif text-3xl md:text-5xl text-center mb-16 tracking-tight uppercase">Кому підійде <br/> Нанопластика?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-stone-900/30 p-10 rounded-3xl border border-[#D4AF37]/30 shadow-lg">
                <h4 className="text-[#D4AF37] font-bold uppercase text-xs tracking-widest mb-8">Обирайте Нанопластику, якщо:</h4>
                <ul className="space-y-6">
                  {["Натуральне або нефарбоване волосся", "Жорсткий, етнічний завиток", "Чутливість до запахів кератину", "Хочете безпечний еко-склад"].map((item, i) => (
                    <li key={i} className="flex gap-4 text-stone-300 text-sm">
                      <CheckCircle className="text-[#D4AF37] shrink-0" size={18} /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col justify-center p-10 bg-stone-900/10 rounded-3xl border border-stone-800">
                <div className="mb-8 p-6 bg-red-900/5 rounded-2xl border border-red-900/20 text-stone-400 text-sm">
                  <h4 className="text-white font-bold mb-4 uppercase text-[10px] tracking-widest flex items-center gap-2">
                     <XCircle size={16} className="text-red-900" /> Увага
                  </h4>
                  Процедура не підходить для сильно пошкодженого блонду. Кислотний склад може бути занадто активним для крихкої структури.
                </div>
                <Link to="/botoks-volossya-lviv" className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.2em] hover:underline flex items-center gap-2">
                   Дивитись Ботокс <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 4. PHOTO CTA */}
        <section className="py-24 bg-stone-950">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="bg-gradient-to-br from-[#D4AF37] to-[#B8860B] p-10 rounded-[40px] text-stone-950 relative overflow-hidden group shadow-2xl">
              <Camera size={80} className="absolute -top-4 -right-4 opacity-10 group-hover:scale-110 transition-transform" />
              <h3 className="font-serif text-3xl md:text-4xl font-bold mb-4 uppercase tracking-tighter italic">Діагностика за фото</h3>
              <p className="mb-8 font-medium max-w-xl mx-auto text-stone-950">Надішліть фото в Direct. Я безкоштовно проаналізую структуру та підберу ідеальний склад.</p>
              <a href="https://www.instagram.com/haircare_ua/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-10 py-5 bg-stone-950 text-white font-bold uppercase text-xs tracking-widest rounded-2xl hover:bg-white hover:text-black transition-all">
                <Instagram size={20} /> Надіслати фото
              </a>
            </div>
          </div>
        </section>

        {/* 5. PRICING */}
        <section className="py-24 bg-stone-900/20 border-y border-stone-900">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="font-serif text-3xl md:text-5xl mb-12 uppercase tracking-tight">Вартість</h2>
            <div className="bg-stone-950 p-8 md:p-12 rounded-[40px] border border-stone-800 shadow-2xl">
              <div className="space-y-8 text-lg">
                <div className="flex justify-between items-center border-b border-stone-800 pb-6 text-stone-300">
                  <span>Коротке волосся / Каре</span>
                  <span className="text-[#D4AF37] font-bold">від 1800 грн</span>
                </div>
                <div className="flex justify-between items-center border-b border-stone-800 pb-6 text-stone-300">
                  <span>Середня довжина</span>
                  <span className="text-[#D4AF37] font-bold">від 2300 грн</span>
                </div>
                <div className="flex justify-between items-center border-b border-stone-800 pb-6 text-stone-300">
                  <span>Довге волосся</span>
                  <span className="text-[#D4AF37] font-bold">від 2800 грн</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Contact />
      </div>
    </>
  );
}