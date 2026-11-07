import React from 'react';
import { CheckCircle2, Heart } from 'lucide-react';
import { APOLOGY_SECTIONS } from '../utils/content';

export const LovePromises: React.FC = () => {
  return (
    <section id="promises" className="mx-auto w-full max-w-3xl py-8 px-4 sm:px-6">
      <div className="mb-6 text-center">
        <div className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-widest text-rose-600 mb-1">
          <Heart className="h-3.5 w-3.5 fill-rose-500 text-rose-500" />
          <span>My Sacred Vows</span>
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
          Promises From My Heart To Yours
        </h2>
        <p className="mt-1 text-xs sm:text-sm text-slate-600">
          I don't just say sorry; I promise to do better every single day.
        </p>
      </div>

      <div className="divide-y divide-rose-100 rounded-2xl bg-white border border-rose-100 shadow-xs overflow-hidden">
        {APOLOGY_SECTIONS.promises.map((p, idx) => (
          <div key={p.id} className="p-4 sm:p-5 flex items-start gap-3.5 hover:bg-rose-50/30 transition-colors">
            <div className="mt-0.5 rounded-full p-1 bg-rose-100 text-rose-600 shrink-0">
              <CheckCircle2 className="h-4 w-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-semibold text-rose-500">
                  0{idx + 1}.
                </span>
                <h3 className="text-sm sm:text-base font-bold text-slate-900">
                  {p.promise}
                </h3>
              </div>
              <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                {p.vow}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
