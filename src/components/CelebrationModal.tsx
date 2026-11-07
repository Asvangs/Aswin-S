import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import { Heart, Sparkles, Award, Copy, Check, Share2, RotateCcw } from 'lucide-react';
import { generateCertificateCode } from '../utils/apologyLogic';
import { sound } from '../utils/audio';

interface CelebrationModalProps {
  partnerName: string;
  isOpen: boolean;
  onClose: () => void;
  onReplay: () => void;
}

export const CelebrationModal: React.FC<CelebrationModalProps> = ({
  partnerName,
  isOpen,
  onClose,
  onReplay,
}) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Fire confetti cannon
      const end = Date.now() + 3 * 1000;
      const colors = ['#f43f5e', '#ec4899', '#fb7185', '#fbbf24', '#ffffff'];

      const frame = () => {
        confetti({
          particleCount: 4,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: colors,
        });
        confetti({
          particleCount: 4,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: colors,
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      };
      frame();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const certCode = generateCertificateCode(partnerName);
  const forgivenessMessage = `I forgive you, my silly boy ❤️ Thank you for the heartfelt letter and promises. You are my world too. Now come give me my tight hug! [Certificate: ${certCode}]`;

  const handleCopy = () => {
    sound.playChime();
    navigator.clipboard.writeText(forgivenessMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="celebration-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm overflow-y-auto"
    >
      <div className="relative my-8 w-full max-w-lg rounded-3xl bg-gradient-to-b from-rose-50 via-white to-amber-50 p-6 sm:p-8 border-2 border-rose-300 shadow-2xl text-center">
        {/* Confetti & Medal Header */}
        <div className="mx-auto -mt-12 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-tr from-rose-500 to-amber-400 text-white shadow-lg shadow-rose-500/30">
          <Award className="h-10 w-10 text-white animate-pulse" />
        </div>

        <div className="mt-4">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-rose-700">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Apology Accepted & Blessed</span>
            <Sparkles className="h-3.5 w-3.5" />
          </div>

          <h2
            id="celebration-title"
            className="mt-1 font-serif text-2xl sm:text-3xl font-bold text-slate-900 leading-tight"
          >
            Thank You For Forgiving Me! ❤️
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600">
            You just gave this silly boy his life, smile, and peace back.
          </p>
        </div>

        {/* Certificate Card */}
        <div className="mt-6 rounded-2xl bg-white p-5 border-2 border-dashed border-rose-200 text-left shadow-xs">
          <div className="flex items-center justify-between border-b border-rose-100 pb-3">
            <div className="flex items-center gap-2">
              <Heart className="h-4 w-4 fill-rose-500 text-rose-500" />
              <span className="font-serif italic font-bold text-sm text-rose-950">
                Official Certificate of Forgiveness
              </span>
            </div>
            <span className="font-mono text-[10px] text-slate-600 font-semibold">
              {certCode}
            </span>
          </div>

          <div className="py-4 space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <p>
              This document certifies that <strong className="text-rose-950 font-bold">{partnerName}</strong> has officially granted forgiveness to her boyfriend.
            </p>
            <p className="text-slate-600 italic">
              Terms: Entitled to unlimited forehead kisses, zero secrets forever, priority cuddling rights, and an immediate slow dance to celebrate!
            </p>
          </div>

          <div className="pt-3 border-t border-rose-100 flex items-center justify-between text-[11px] text-slate-600">
            <span>Status: <strong>Eternally In Love</strong></span>
            <span>Signed: <strong>Your Forever Boy</strong></span>
          </div>
        </div>

        {/* Action buttons */}
        <div className="mt-6 flex flex-col gap-2.5">
          <button
            onClick={handleCopy}
            className="flex items-center justify-center gap-2 w-full rounded-xl bg-rose-600 px-4 py-3 text-sm font-semibold text-white shadow-md hover:bg-rose-700 active:scale-98 transition-all min-h-[44px]"
          >
            {copied ? (
              <>
                <Check className="h-4 w-4" />
                <span>Copied to Clipboard! Send it to him!</span>
              </>
            ) : (
              <>
                <Copy className="h-4 w-4" />
                <span>Copy Sweet Reply to Send Him</span>
              </>
            )}
          </button>

          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={onReplay}
              className="flex items-center justify-center gap-1.5 rounded-xl bg-slate-100 px-3 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-200 active:scale-95 transition-all min-h-[44px]"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              <span>Tease Him Again (Replay)</span>
            </button>
            <button
              onClick={onClose}
              className="flex items-center justify-center gap-1.5 rounded-xl border border-rose-200 bg-white px-3 py-2.5 text-xs font-semibold text-rose-700 hover:bg-rose-50 active:scale-95 transition-all min-h-[44px]"
            >
              <Heart className="h-3.5 w-3.5 fill-rose-500 text-rose-500" />
              <span>Close & Smile</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
