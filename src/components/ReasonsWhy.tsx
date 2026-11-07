import React from 'react';
import { Home, Smile, Sparkles, HeartHandshake, Flame, ShieldCheck } from 'lucide-react';
import { APOLOGY_SECTIONS } from '../utils/content';
import { sound } from '../utils/audio';

interface ReasonsWhyProps {
  partnerName: string;
}

export const ReasonsWhy: React.FC<ReasonsWhyProps> = ({ partnerName }) => {
  const iconMap: Record<string, React.ReactNode> = {
    Home: <Home className="h-5 w-5 text-rose-500" />,
    Smile: <Smile className="h-5 w-5 text-amber-500" />,
    Sparkles: <Sparkles className="h-5 w-5 text-pink-500" />,
    HeartHandshake: <HeartHandshake className="h-5 w-5 text-emerald-500" />,
    Flame: <Flame className="h-5 w-5 text-rose-600" />,
    ShieldCheck: <ShieldCheck className="h-5 w-5 text-blue-500" />,
  };

  return (
    <section id="reasons" className="mx-auto w-full max-w-4xl py-8 px-4 sm:px-6">
      <div className="mb-8 text-center">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-600 uppercase tracking-widest mb-1.5">
          <span>You Are My Everything</span>
        </div>
        <h2 className="font-serif text-2xl sm:text-4xl font-bold text-slate-900">
          Why Without You, I Am Nothing
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-slate-600 max-w-lg mx-auto">
          Every moment without your smile feels like an eternity. Here is what you mean to me, {partnerName}.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {APOLOGY_SECTIONS.reasonsWhy.map((reason) => (
          <div
            key={reason.id}
            onClick={() => sound.playChime()}
            className="group relative rounded-2xl bg-white p-5 border border-rose-100 shadow-xs hover:border-rose-300 hover:shadow-md transition-all cursor-pointer active:scale-[0.98]"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="p-2.5 rounded-xl bg-rose-50/70 border border-rose-100/50 group-hover:scale-110 transition-transform">
                {iconMap[reason.icon] || <Sparkles className="h-5 w-5 text-rose-500" />}
              </div>
              <span className="text-[11px] font-medium text-rose-500 tracking-wider font-mono">
                FOREVER
              </span>
            </div>
            <h3 className="font-serif text-lg font-bold text-slate-900 group-hover:text-rose-700 transition-colors">
              {reason.title}
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              {reason.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
