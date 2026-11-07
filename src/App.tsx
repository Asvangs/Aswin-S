/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { FloatingHearts } from './components/FloatingHearts';
import { TopBar } from './components/TopBar';
import { EnvelopeHero } from './components/EnvelopeHero';
import { TheTruthCard } from './components/TheTruthCard';
import { DanceDareCard } from './components/DanceDareCard';
import { ReasonsWhy } from './components/ReasonsWhy';
import { LovePromises } from './components/LovePromises';
import { LoveCoupons } from './components/LoveCoupons';
import { RunawayForgiveSection } from './components/RunawayForgiveSection';
import { CelebrationModal } from './components/CelebrationModal';
import { EditNameModal } from './components/EditNameModal';
import { Heart, Mail, Sparkles, ShieldCheck } from 'lucide-react';
import { sound } from './utils/audio';

export default function App() {
  const [partnerName, setPartnerName] = useState<string>('My Love');
  const [isCelebrationOpen, setIsCelebrationOpen] = useState<boolean>(false);
  const [isEditNameOpen, setIsEditNameOpen] = useState<boolean>(false);

  const scrollToSection = (id: string) => {
    sound.playChime();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleForgiven = () => {
    setIsCelebrationOpen(true);
  };

  const handleReplay = () => {
    setIsCelebrationOpen(false);
    scrollToSection('forgive-section');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50/70 via-pink-50/30 to-amber-50/40 text-slate-800 relative selection:bg-rose-200 selection:text-rose-950 pb-24 md:pb-16">
      {/* Floating interactive particles */}
      <FloatingHearts />

      {/* Top Header */}
      <TopBar
        partnerName={partnerName}
        onEditName={() => setIsEditNameOpen(true)}
        onJumpToForgive={() => scrollToSection('forgive-section')}
      />

      <main className="relative z-10 w-full overflow-hidden">
        {/* Envelope & Apology Letter */}
        <EnvelopeHero partnerName={partnerName} />

        {/* The Truth Behind The Reels Breakdown */}
        <TheTruthCard />

        {/* Dance Dare Resolution */}
        <DanceDareCard partnerName={partnerName} />

        {/* Reasons Why Without You I Am Nothing */}
        <ReasonsWhy partnerName={partnerName} />

        {/* Sacred Love Promises */}
        <LovePromises />

        {/* Interactive Love Coupons */}
        <LoveCoupons />

        {/* Runaway Unclickable Forgiveness Section */}
        <RunawayForgiveSection
          partnerName={partnerName}
          onForgiven={handleForgiven}
        />
      </main>

      {/* Romantic Footer */}
      <footer className="relative z-10 border-t border-rose-200/60 bg-white/60 py-8 px-4 text-center">
        <div className="mx-auto max-w-md space-y-2">
          <div className="flex items-center justify-center gap-1.5 text-xs text-rose-600 font-medium">
            <Heart className="h-3.5 w-3.5 fill-rose-500 text-rose-500 animate-pulse" />
            <span>Forever your boy, through every storm and every smile</span>
          </div>
          <p className="text-[11px] text-slate-600">
            Created with pure love, total honesty, and endless repentance. You are my only girl.
          </p>
        </div>
      </footer>

      {/* Mobile Bottom Thumb Navigation Bar (Ergonomic thumb reach zone) */}
      <nav
        aria-label="Mobile quick actions"
        className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-rose-200/80 px-2 py-1 shadow-lg pb-safe"
      >
        <div className="grid grid-cols-4 items-center h-14">
          <button
            onClick={() => scrollToSection('letter')}
            className="flex flex-col items-center justify-center text-slate-600 hover:text-rose-600 min-h-[44px]"
          >
            <Mail className="h-4 w-4" />
            <span className="text-[10px] font-medium tracking-tight mt-0.5">Letter</span>
          </button>

          <button
            onClick={() => scrollToSection('truth')}
            className="flex flex-col items-center justify-center text-slate-600 hover:text-rose-600 min-h-[44px]"
          >
            <ShieldCheck className="h-4 w-4" />
            <span className="text-[10px] font-medium tracking-tight mt-0.5">The Truth</span>
          </button>

          <button
            onClick={() => scrollToSection('reasons')}
            className="flex flex-col items-center justify-center text-slate-600 hover:text-rose-600 min-h-[44px]"
          >
            <Heart className="h-4 w-4" />
            <span className="text-[10px] font-medium tracking-tight mt-0.5">My World</span>
          </button>

          <button
            onClick={() => scrollToSection('forgive-section')}
            className="flex flex-col items-center justify-center text-rose-700 font-semibold min-h-[44px]"
          >
            <Sparkles className="h-4 w-4 text-rose-500 animate-bounce" />
            <span className="text-[10px] font-bold tracking-tight mt-0.5">Forgive?</span>
          </button>
        </div>
      </nav>

      {/* Forgiveness Celebration Modal */}
      <CelebrationModal
        partnerName={partnerName}
        isOpen={isCelebrationOpen}
        onClose={() => setIsCelebrationOpen(false)}
        onReplay={handleReplay}
      />

      {/* Edit Partner Name Modal */}
      <EditNameModal
        currentName={partnerName}
        isOpen={isEditNameOpen}
        onSave={(name) => setPartnerName(name)}
        onClose={() => setIsEditNameOpen(false)}
      />
    </div>
  );
}
