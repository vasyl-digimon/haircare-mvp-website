// Додайте цей компонент у src/components/TrustBar.tsx
import { User } from 'lucide-react';

export default function TrustBar() {
  return (
    <div className="flex items-center gap-4 py-6 px-4 bg-stone-900/20 border-y border-stone-800/50 justify-center">
      <div className="flex -space-x-3">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="w-8 h-8 rounded-full border-2 border-stone-950 bg-stone-800 flex items-center justify-center overflow-hidden">
             <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="avatar" />
          </div>
        ))}
      </div>
      <div className="text-stone-400 text-xs sm:text-sm">
        <span className="text-white font-bold">500+</span> щасливих клієнток у Львові
      </div>
      <div className="h-4 w-px bg-stone-800 mx-2 hidden sm:block"></div>
      <div className="hidden sm:flex items-center gap-1 text-[#D4AF37]">
        <span className="text-sm font-bold tracking-widest">@haircare_ua</span>
      </div>
    </div>
  );
}