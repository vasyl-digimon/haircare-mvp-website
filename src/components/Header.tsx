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

  const navLinks = [
    { name: 'Кератин', href: '#services' },
    { name: 'Ботокс', href: '#services' },
    { name: 'Нанопластика', href: '#services' },
    { name: 'Контакти', href: '#contact' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-stone-950/90 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 border border-[#D4AF37] flex items-center justify-center rotate-45 group-hover:rotate-0 transition-all">
            <span className="text-[#D4AF37] -rotate-45 group-hover:rotate-0 transition-all font-serif text-xl font-bold">H</span>
          </div>
          <span className="text-white font-serif text-2xl tracking-tighter uppercase ml-2">Haircare<span className="text-[#D4AF37]"> UA</span></span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-stone-300 hover:text-[#D4AF37] text-xs font-semibold tracking-[0.2em] uppercase transition-colors">{link.name}</a>
          ))}
          <a href="https://www.instagram.com/haircare_ua/" target="_blank" rel="noreferrer" className="text-[#D4AF37] hover:text-white transition-colors"><Instagram size={20} /></a>
        </nav>

        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(true)}><Menu size={28} /></button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-stone-950 z-[100] flex flex-col items-center justify-center gap-8 transition-transform duration-500 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <button className="absolute top-8 right-8 text-white" onClick={() => setIsMobileMenuOpen(false)}><X size={32} /></button>
        {navLinks.map((link) => (
          <a key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-serif text-white hover:text-[#D4AF37] uppercase tracking-widest">{link.name}</a>
        ))}
        <a href="https://www.instagram.com/haircare_ua/" className="text-[#D4AF37] flex items-center gap-2 text-xl font-bold italic">@haircare_ua</a>
      </div>
    </header>
  );
}