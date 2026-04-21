import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Блокування скролу при відкритому меню
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Кератин', href: '#services' },
    { name: 'Ботокс', href: '#services' },
    { name: 'Нанопластика', href: '#services' },
    { name: 'Контакти', href: '#contact' },
  ];

  return (
    <>
      <header 
        className={`fixed w-full z-[80] transition-all duration-500 ${
          isScrolled ? 'bg-stone-950/95 backdrop-blur-md py-4 shadow-xl' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 border border-[#D4AF37] flex items-center justify-center rotate-45 group-hover:rotate-0 transition-all duration-500">
              <span className="text-[#D4AF37] -rotate-45 group-hover:rotate-0 transition-all font-serif text-xl font-bold">H</span>
            </div>
            <span className="text-white font-serif text-2xl tracking-tighter uppercase ml-2 italic">
              Haircare<span className="text-[#D4AF37]"> UA</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-stone-300 hover:text-[#D4AF37] text-xs font-semibold tracking-[0.2em] uppercase transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="https://www.instagram.com/haircare_ua/" 
              target="_blank" 
              rel="noreferrer" 
              className="text-[#D4AF37] hover:text-white transition-colors p-2 border border-[#D4AF37]/30 rounded-full hover:border-[#D4AF37]"
            >
              <Instagram size={18} />
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-white p-2" 
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open Menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-stone-950 z-[100] flex flex-col items-center justify-center transition-all duration-500 md:hidden ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible translate-y-[-20px]'
        }`}
      >
        <button 
          className="absolute top-8 right-8 text-white p-2 hover:text-[#D4AF37] transition-colors" 
          onClick={() => setIsMobileMenuOpen(false)}
          aria-label="Close Menu"
        >
          <X size={32} />
        </button>

        <nav className="flex flex-col items-center gap-8 w-full px-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsMobileMenuOpen(false)} 
              className="text-2xl font-serif text-white hover:text-[#D4AF37] uppercase tracking-[0.2em] transition-all"
            >
              {link.name}
            </a>
          ))}

          {/* ПРЕМІАЛЬНА КНОПКА INSTAGRAM */}
          <div className="w-full h-px bg-stone-800 my-4 max-w-[150px]"></div>
          
          <a 
            href="https://www.instagram.com/haircare_ua/" 
            target="_blank" 
            rel="noreferrer" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center gap-3 px-8 py-4 border border-[#D4AF37] rounded-full text-[#D4AF37] hover:bg-[#D4AF37] hover:text-stone-950 transition-all duration-300 group shadow-lg shadow-gold-900/10"
          >
            <Instagram size={22} className="group-hover:scale-110 transition-transform" />
            <span className="text-sm font-bold uppercase tracking-[0.2em] italic">@haircare_ua</span>
          </a>
        </nav>
      </div>
    </>
  );
}