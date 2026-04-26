import { Instagram, MapPin, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-28 bg-stone-950">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">Готові до перетворення?</h2>
          <p className="text-stone-400 max-w-xl mx-auto italic">
            Не відкладайте турботу про себе. Запишіться на консультацію вже сьогодні.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* Картка контактів */}
          <div className="bg-stone-900/40 p-10 rounded-3xl border border-stone-800 flex flex-col justify-between">
            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-[#D4AF37]/10 flex items-center justify-center rounded-2xl text-[#D4AF37]">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-white font-bold text-lg">Студія у центрі</p>
                  <p className="text-stone-400">м. Львів, вул. Костюшка, 18</p>
                </div>
              </div>
              
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-[#D4AF37]/10 flex items-center justify-center rounded-2xl text-[#D4AF37]">
                  <Instagram size={24} />
                </div>
                <div>
                  <p className="text-white font-bold text-lg">Ми в Instagram</p>
                  <a href="https://www.instagram.com/haircare_ua/" target="_blank" rel="noreferrer" className="text-[#D4AF37] hover:underline">@haircare_ua</a>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-stone-800">
              <p className="text-stone-400 uppercase tracking-widest text-[10px] mb-2 font-bold">Робочі години</p>
              <p className="text-white text-2xl font-serif italic">За індивідуальним записом</p>
            </div>
          </div>

          {/* МЕГА CTA БЛОК */}
          <div className="bg-gradient-to-br from-[#D4AF37] to-[#B8860B] p-10 rounded-3xl flex flex-col justify-center items-center text-center shadow-2xl shadow-gold-900/20">
            <MessageCircle size={48} className="text-stone-950 mb-6 animate-bounce" />
            <h3 className="text-stone-950 font-serif text-3xl font-bold mb-4">Отримати безкоштовну консультацію</h3>
            <p className="text-stone-900/80 mb-8 font-medium">
              Надішліть фото вашого волосся в Direct, і я підберу ідеальну процедуру саме для вас.
            </p>
            <a 
              href="https://www.instagram.com/haircare_ua/" 
              target="_blank" 
              rel="noreferrer"
              className="w-full py-5 bg-stone-950 text-white font-bold uppercase tracking-[0.2em] rounded-2xl hover:bg-white hover:text-stone-950 transition-all duration-500 shadow-xl"
            >
              Написати в Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}