import React, { useState } from 'react';
import { Music2, Sparkles, Check, Heart, Play } from 'lucide-react';
import { sound } from '../utils/audio';

interface DanceDareCardProps {
  partnerName: string;
}

export const DanceDareCard: React.FC<DanceDareCardProps> = ({ partnerName }) => {
  const [acceptedDare, setAcceptedDare] = useState(false);

  const handleAccept = () => {
    sound.playChime();
    setAcceptedDare(true);
  };

  return (
    <section className="mx-auto w-full max-w-3xl py-6 px-4 sm:px-6">
      <div className="rounded-3xl bg-gradient-to-br from-rose-100/70 via-pink-50/60 to-purple-50/50 p-6 sm:p-8 border border-rose-200 shadow-sm relative overflow-hidden">
        {/* Decorative background note */}
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-rose-700 mb-2">
          <Music2 className="h-4 w-4" />
          <span>The Story Behind The Reels</span>
        </div>

        <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
          The &ldquo;Dance Dare&rdquo; That Started It All
        </h3>

        <p className="mt-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
          When I saw those dance reels, I didn&apos;t care about who was dancing. All I could think of was you, laughing and trying those goofy or cool moves in your room. I shared them right to our private account to send you the dare: <em>&ldquo;Bet you can&apos;t do this better!&rdquo;</em> But you saw it before I could send the text, and it hurt you.
        </p>

        {/* Counter Dare */}
        <div className="mt-5 rounded-2xl bg-white/90 p-4 sm:p-5 border border-rose-200/80 shadow-xs">
          <div className="flex items-center gap-2 text-xs font-bold text-rose-900 mb-1">
            <Sparkles className="h-4 w-4 text-rose-500" />
            <span>MY NEW DARE FOR YOU, {partnerName.toUpperCase()}:</span>
          </div>
          <p className="text-sm font-medium text-slate-800">
            I dare you to let me cook your favorite meal, play your favorite song in the living room, and slow-dance with you while I whisper how much I love you.
          </p>

          <div className="mt-4 flex items-center justify-between">
            <span className="text-xs text-slate-600 italic">
              Dare Status: {acceptedDare ? 'ACCEPTED WITH LOVE ❤️' : 'PENDING YOUR SMILE'}
            </span>
            <button
              onClick={handleAccept}
              disabled={acceptedDare}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold transition-all min-h-[44px] ${
                acceptedDare
                  ? 'bg-emerald-600 text-white cursor-default'
                  : 'bg-rose-600 text-white hover:bg-rose-700 active:scale-95 shadow-xs'
              }`}
            >
              {acceptedDare ? (
                <>
                  <Check className="h-4 w-4" />
                  <span>Dare Accepted!</span>
                </>
              ) : (
                <>
                  <Heart className="h-4 w-4 fill-white text-white" />
                  <span>I Accept The Dance Dare</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
