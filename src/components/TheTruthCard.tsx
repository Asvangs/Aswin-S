import React from 'react';
import { KeyRound, ShieldAlert, HeartCrack, HeartHandshake, Film } from 'lucide-react';
import { APOLOGY_SECTIONS } from '../utils/content';

export const TheTruthCard: React.FC = () => {
  return (
    <section id="truth" className="mx-auto w-full max-w-3xl py-8 px-4 sm:px-6">
      <div className="mb-6 text-center">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
          The Honest Truth, Without Filters
        </h2>
        <p className="mt-1 text-xs sm:text-sm text-slate-600">
          Total transparency because you deserve nothing less than 100% honesty.
        </p>
      </div>

      <div className="grid gap-4 sm:gap-6">
        {APOLOGY_SECTIONS.theIncidentBreakdown.map((item, idx) => {
          const icons = [
            <Film className="h-5 w-5 text-rose-500" key="0" />,
            <KeyRound className="h-5 w-5 text-amber-500" key="1" />,
            <HeartCrack className="h-5 w-5 text-red-500" key="2" />,
            <HeartHandshake className="h-5 w-5 text-emerald-600" key="3" />,
          ];

          return (
            <div
              key={idx}
              className="rounded-2xl bg-white p-5 sm:p-6 border border-rose-100 shadow-xs hover:border-rose-200 transition-all"
            >
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-rose-50/80 border border-rose-100/60 shrink-0">
                  {icons[idx]}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-900 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Special Trust Card */}
      <div className="mt-6 rounded-2xl bg-gradient-to-r from-rose-50 via-pink-50 to-amber-50 p-5 sm:p-6 border border-rose-200/80">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-rose-800 mb-2">
          <ShieldAlert className="h-4 w-4 text-rose-600" />
          <span>Why You Never Have To Worry</span>
        </div>
        <p className="text-sm text-rose-950 leading-relaxed">
          &ldquo;If I ever wanted to hide anything from you, I wouldn&apos;t give you my credentials or share it to an account you control. You have total access to my world because you ARE my world. I never want you to lose sleep or doubt for a single millisecond how deeply loyal and dedicated I am to you.&rdquo;
        </p>
      </div>
    </section>
  );
};
