export default function Footer() {
  return (
    <footer className="py-12 bg-stone-950 border-t border-stone-900 text-center">
      <div className="flex flex-col items-center gap-6">
        <span className="text-white font-serif text-xl tracking-widest uppercase">Haircare<span className="text-[#D4AF37]"> UA</span></span>
        <p className="text-stone-400 text-[10px] tracking-widest uppercase">© {new Date().getFullYear()} HAIRCARE_UA LVIV. ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  );
}