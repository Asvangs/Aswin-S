import React, { useState } from 'react';
import { Heart, Sparkles, Feather, Lock, Stamp, RefreshCw, MailOpen } from 'lucide-react';
import { sound } from '../utils/audio';

interface EnvelopeHeroProps {
  partnerName: string;
}

export const EnvelopeHero: React.FC<EnvelopeHeroProps> = ({ partnerName }) => {
  const [isSealed, setIsSealed] = useState<boolean>(false);
  const [isSealingAnimation, setIsSealingAnimation] = useState<boolean>(false);

  const handleSeal = () => {
    sound.playSealSound();
    setIsSealingAnimation(true);
    setTimeout(() => {
      setIsSealed(true);
      setIsSealingAnimation(false);
    }, 700);
  };

  const handleUnseal = () => {
    sound.playChime();
    setIsSealed(false);
  };

  return (
    <section id="letter" className="relative mx-auto w-full max-w-3xl pt-6 pb-8 px-4 sm:px-6">
      {/* Decorative intro kicker */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 text-xs font-medium text-rose-600/90 tracking-widest uppercase mb-2">
          <span>A Sincere Apology</span>
          <span aria-hidden="true">·</span>
          <span>From My Whole Heart</span>
          <span aria-hidden="true">·</span>
          <span>Only For You</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
          I am so, so sorry,{' '}
          <span className="italic text-rose-700 underline decoration-rose-300 decoration-wavy decoration-1 underline-offset-4">
            {partnerName}
          </span>
        </h1>
        <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
          I made a terrible and thoughtless mistake that made you doubt my heart. Here is the unvarnished truth, my genuine remorse, and my eternal love.
        </p>
      </div>

      {/* Interactive Envelope & Letter Container */}
      <div className="relative rounded-3xl bg-gradient-to-b from-amber-50/70 via-rose-50/30 to-white p-6 sm:p-10 shadow-lg shadow-rose-950/5 border border-rose-200/70 overflow-hidden">
        
        {/* SEALING IN PROGRESS OVERLAY ANIMATION */}
        {isSealingAnimation && (
          <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-rose-950/20 backdrop-blur-xs transition-opacity duration-300">
            {/* Wax seal stamping down */}
            <div className="animate-wax-stamp flex flex-col items-center">
              <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-rose-600 via-red-700 to-rose-950 shadow-2xl border-4 border-rose-800/80">
                <div className="h-18 w-18 rounded-full border-2 border-dashed border-rose-300/40 flex flex-col items-center justify-center">
                  <Heart className="h-8 w-8 fill-rose-100 text-rose-100 animate-pulse" />
                  <span className="font-serif text-[10px] uppercase tracking-widest font-bold text-rose-200 mt-0.5">
                    FOREVER
                  </span>
                </div>
              </div>
              <span className="mt-4 font-serif italic text-lg font-bold text-rose-900 bg-white/90 px-4 py-1.5 rounded-full shadow-md">
                Sealing our love with wax...
              </span>
            </div>
          </div>
        )}

        {/* SEALED ENVELOPE VIEW */}
        {isSealed ? (
          <div className="relative py-10 px-4 sm:px-8 text-center flex flex-col items-center justify-center">
            {/* Visual envelope flap styling */}
            <div className="relative w-full max-w-md mx-auto rounded-2xl bg-gradient-to-b from-amber-100/90 via-rose-50 to-amber-50 p-8 border-2 border-rose-200/90 shadow-md">
              
              {/* Envelope triangular fold simulation */}
              <div className="absolute -top-1 left-0 right-0 h-10 border-b-2 border-rose-200/60 bg-gradient-to-b from-amber-200/50 to-transparent rounded-t-xl" />

              <div className="relative z-10 flex flex-col items-center">
                {/* The Royal Crimson Wax Seal */}
                <div className="relative group cursor-pointer" onClick={handleUnseal} title="Click to break wax seal and open">
                  <div className="animate-seal-pulse flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-rose-600 via-red-700 to-rose-950 shadow-xl border-4 border-rose-900/40 transform transition-transform group-hover:scale-105 active:scale-95">
                    <div className="h-18 w-18 rounded-full border-2 border-dashed border-rose-300/50 flex flex-col items-center justify-center">
                      <Heart className="h-8 w-8 fill-rose-100 text-rose-100" />
                      <span className="font-serif text-[9px] uppercase tracking-widest font-bold text-rose-200 mt-0.5">
                        SEALED
                      </span>
                    </div>
                  </div>
                  {/* Subtle seal stamp aura */}
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-bold uppercase tracking-wider text-rose-800 bg-white/95 px-2 py-0.5 rounded-full border border-rose-200 shadow-xs">
                    Wax Sealed
                  </span>
                </div>

                <div className="mt-6 space-y-1">
                  <div className="font-serif italic text-2xl font-bold text-rose-950">
                    To: My Dearest {partnerName}
                  </div>
                  <p className="text-xs text-slate-600 max-w-xs mx-auto leading-relaxed">
                    This letter has been sealed with complete honesty, endless repentance, and all of my love.
                  </p>
                </div>

                <div className="mt-6 flex flex-col sm:flex-row items-center gap-2">
                  <button
                    onClick={handleUnseal}
                    className="flex items-center gap-2 rounded-full bg-rose-600 hover:bg-rose-700 active:scale-95 text-white px-5 py-2.5 text-xs font-semibold shadow-md transition-all min-h-[44px]"
                    aria-label="Break wax seal and re-read letter"
                  >
                    <MailOpen className="h-4 w-4" />
                    <span>Break Wax Seal & Re-Read</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-center gap-1.5 text-xs text-rose-700 font-medium">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Safe in your heart · The seal guarantees zero secrets forever</span>
            </div>
          </div>
        ) : (
          /* OPEN LETTER VIEW */
          <>
            {/* Top vintage stamp & wax seal indicator */}
            <div className="flex items-center justify-between pb-6 border-b border-rose-200/50">
              <div className="flex items-center gap-2">
                <Feather className="h-5 w-5 text-rose-600" />
                <span className="font-serif italic text-sm text-rose-900 font-semibold">
                  Handwritten with remorse & infinite love
                </span>
              </div>
              
              <button
                onClick={handleSeal}
                className="flex items-center gap-1.5 text-xs font-medium text-rose-800 bg-rose-100 hover:bg-rose-200/90 px-3.5 py-1.5 rounded-full transition-all active:scale-95 min-h-[44px] shadow-xs"
                aria-label="Seal letter with wax"
                title="Seal letter with digital wax seal"
              >
                <Stamp className="h-4 w-4 text-rose-600" />
                <span>Seal Letter</span>
              </button>
            </div>

            {/* The Letter Body */}
            <article className="mt-6 space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed font-sans">
              <div className="font-serif italic text-2xl text-rose-950 font-bold mb-3">
                My Dearest {partnerName},
              </div>

              <p>
                I am writing this because words on a phone call or quick text could never fully express how deeply I regret hurting you today. Seeing you upset because of something I did tears me apart, and I cannot rest until you know the honest truth and feel safe in my arms again.
              </p>

              <p>
                I know how it looked when you checked my private account and saw those two girls' dance reels shared there. With zero context and no explanation from me beforehand, it looked suspicious and hurtful. Anyone in your position would feel angry, confused, and insecure. You have every single right to be furious with me.
              </p>

              <div className="my-5 rounded-2xl bg-white/90 p-5 border border-rose-100 shadow-xs">
                <p className="font-medium text-rose-950">
                  <span className="font-semibold text-rose-700">The Honest Truth:</span> I saw those dance reels and immediately thought of you. I thought: <em>&ldquo;Imagine my girl trying this dance dare—she would look a million times cuter and dance circles around everyone!&rdquo;</em> It was meant to be a fun, playful challenge for you.
                </p>
                <p className="mt-2 text-xs sm:text-sm text-slate-600">
                  You have the access and password to my account—I shared it right there because I had nothing to hide from you. If I ever wanted to hide anything, I could have just saved or downloaded it secretly. But you share my life, my phone, and my accounts.
                </p>
              </div>

              <p>
                <strong className="text-slate-900">Where I failed you:</strong> Even though my intention was an innocent dance dare for you, I was thoughtless not to tell you immediately. I left room for doubt. You shouldn't have to guess my intentions, and you should never, ever feel insecure in my love. Protecting your heart is my biggest responsibility, and I dropped the ball.
              </p>

              <p>
                Please hear me when I say this: <strong>You are my whole universe.</strong> Without you, my world loses its color, its warmth, and its direction. There is no one in this world who compares to you—not in beauty, not in grace, not in character, not in anything.
              </p>

              <div className="pt-4 border-t border-rose-200/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="font-serif italic text-lg text-rose-900">
                  Forever & completely yours,
                  <br />
                  <span className="text-sm font-sans not-italic text-slate-600 font-normal">
                    Your silly boy who loves you endlessly
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 text-xs text-rose-700 bg-rose-50 px-2.5 py-1 rounded-md border border-rose-200/60">
                    <Sparkles className="h-3.5 w-3.5 text-rose-500" />
                    <span>A promise sealed in my heart</span>
                  </span>
                </div>
              </div>

              {/* Special 'Seal Letter' End Callout */}
              <div className="mt-6 rounded-2xl bg-gradient-to-r from-rose-50 via-amber-50 to-pink-50 p-5 border border-rose-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-left">
                  <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-rose-900">
                    <Stamp className="h-4 w-4 text-rose-600" />
                    <span>Finished Reading?</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                    Seal this digital envelope with a royal wax seal to lock my sincere promises into your heart.
                  </p>
                </div>
                <button
                  onClick={handleSeal}
                  className="w-full sm:w-auto shrink-0 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-700 hover:to-rose-800 active:scale-95 text-white px-5 py-3 text-xs font-bold shadow-md shadow-rose-700/20 transition-all min-h-[44px]"
                  aria-label="Seal letter with wax seal"
                >
                  <Stamp className="h-4 w-4" />
                  <span>Seal Letter with Wax 🕯️</span>
                </button>
              </div>
            </article>
          </>
        )}
      </div>
    </section>
  );
};
