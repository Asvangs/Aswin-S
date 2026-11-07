import React, { useState, useRef, useEffect } from 'react';
import { Heart, Sparkles, Smile, ShieldAlert } from 'lucide-react';
import {
  calculateNextDodgePosition,
  calculateYesButtonScale,
  getEvasionMessage,
  DodgePosition,
} from '../utils/apologyLogic';
import { APOLOGY_SECTIONS } from '../utils/content';
import { sound } from '../utils/audio';

interface RunawayForgiveSectionProps {
  partnerName: string;
  onForgiven: () => void;
}

export const RunawayForgiveSection: React.FC<RunawayForgiveSectionProps> = ({
  partnerName,
  onForgiven,
}) => {
  const [dodgeCount, setDodgeCount] = useState<number>(0);
  const [quip, setQuip] = useState<string>('');
  const [dodgePos, setDodgePos] = useState<DodgePosition | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const noButtonRef = useRef<HTMLButtonElement | null>(null);

  const yesScale = calculateYesButtonScale(dodgeCount);

  const handleDodge = (e?: React.SyntheticEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    sound.playDodgeSound();

    const nextCount = dodgeCount + 1;
    setDodgeCount(nextCount);
    setQuip(getEvasionMessage(nextCount, APOLOGY_SECTIONS.evasiveQuips));

    const container = containerRef.current;
    if (container) {
      const rect = container.getBoundingClientRect();
      const pos = calculateNextDodgePosition(
        nextCount,
        rect.width,
        rect.height,
        130,
        48
      );
      setDodgePos(pos);
    }
  };

  const handleAccept = () => {
    sound.playCelebrationFanfare();
    onForgiven();
  };

  return (
    <section
      id="forgive-section"
      className="mx-auto w-full max-w-2xl py-12 px-4 sm:px-6"
    >
      <div className="relative rounded-3xl bg-gradient-to-b from-rose-500/10 via-pink-50/50 to-white p-6 sm:p-10 border-2 border-rose-200 shadow-xl shadow-rose-950/5 text-center">
        {/* Glow badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100 text-rose-800 text-xs font-semibold uppercase tracking-wider mb-3">
          <Heart className="h-3.5 w-3.5 fill-rose-500 text-rose-500 animate-bounce" />
          <span>The Most Important Question</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 leading-snug">
          Will you forgive your silly boy,{' '}
          <span className="text-rose-600 italic">{partnerName}</span>?
        </h2>

        <p className="mt-3 text-sm text-slate-600 max-w-md mx-auto">
          I promise to never give you reasons to doubt my love again. Please smile for me? 🥺
        </p>

        {/* Evasive feedback alert banner */}
        {quip && (
          <div
            className="mt-4 inline-flex items-center gap-2 rounded-xl bg-amber-50 px-4 py-2 border border-amber-200 text-amber-900 text-xs sm:text-sm font-medium animate-bounce shadow-xs"
            role="status"
          >
            <Smile className="h-4 w-4 text-amber-600 shrink-0" />
            <span>{quip}</span>
          </div>
        )}

        {/* Interactive button playground area */}
        <div
          ref={containerRef}
          className="relative mt-8 min-h-[220px] sm:min-h-[240px] w-full flex items-center justify-center rounded-2xl bg-white/80 border border-rose-100/90 p-4 overflow-hidden"
        >
          {/* Yes Button (Centered, grows and glows) */}
          <div className="z-10 transition-transform duration-300 ease-out" style={{ transform: `scale(${yesScale})` }}>
            <button
              onClick={handleAccept}
              className="group relative flex items-center gap-2.5 rounded-full bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-600 px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-bold text-white shadow-lg shadow-emerald-600/30 hover:shadow-xl hover:shadow-emerald-600/40 hover:scale-105 active:scale-95 transition-all min-h-[48px]"
              aria-label="I Forgive You, accept apology"
            >
              <Heart className="h-5 w-5 fill-white text-white animate-pulse" />
              <span>Yes, I Forgive You ❤️</span>
              <Sparkles className="h-4 w-4 text-emerald-200 group-hover:rotate-12 transition-transform" />
            </button>
          </div>

          {/* Runaway "No" Button (Unclickable, teleports away to corner spots) */}
          <button
            ref={noButtonRef}
            type="button"
            onMouseEnter={handleDodge}
            onPointerDown={handleDodge}
            onTouchStart={handleDodge}
            onClick={handleDodge}
            style={
              dodgePos
                ? {
                    position: 'absolute',
                    left: `${dodgePos.x}px`,
                    top: `${dodgePos.y}px`,
                    transition: 'all 0.18s cubic-bezier(0.16, 1, 0.3, 1)',
                  }
                : {
                    position: 'absolute',
                    right: '12px',
                    bottom: '12px',
                  }
            }
            className="z-20 flex items-center gap-1.5 rounded-full bg-slate-100/90 border border-slate-300/80 px-3.5 py-2 text-xs font-semibold text-slate-600 shadow-xs hover:bg-rose-50 hover:text-rose-600 hover:border-rose-300 active:scale-90 transition-colors cursor-pointer select-none min-h-[44px]"
            aria-label="No, still mad"
          >
            <span>No, still mad 😤</span>
          </button>
        </div>

        {/* Counter hint */}
        <div className="mt-4 flex items-center justify-center gap-1.5 text-xs text-slate-600">
          <ShieldAlert className="h-3.5 w-3.5 text-rose-500" />
          <span>
            {dodgeCount > 0
              ? `Dodged ${dodgeCount} time${dodgeCount === 1 ? '' : 's'}! 'No' button is permanently out of reach 🥰`
              : `Tip: The 'No' button is allergic to being pressed! Only love allowed.`}
          </span>
        </div>
      </div>
    </section>
  );
};
