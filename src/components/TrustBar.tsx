export default function TrustBar() {
  // Список реальних жіночих облич (Unsplash IDs)
  const avatars = [
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=100&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop"
  ];

  return (
    <div className="flex items-center gap-4 py-8 px-4 bg-stone-900/40 border-y border-stone-800/50 justify-center">
      <div className="flex -space-x-3">
        {avatars.map((url, i) => (
          <div key={i} className="w-10 h-10 rounded-full border-2 border-stone-950 bg-stone-800 flex items-center justify-center overflow-hidden">
             <img src={url} alt="Клієнтка Haircare UA" className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
        <div className="text-stone-300 text-xs sm:text-sm font-medium">
          <span className="text-white font-bold">500+</span> щасливих дівчат у Львові
        </div>
        <div className="hidden sm:block h-4 w-px bg-stone-800"></div>
        <div className="text-[#D4AF37] text-[10px] sm:text-xs font-bold tracking-widest uppercase italic">
          Довіряють майстру
        </div>
      </div>
    </div>
  );
}