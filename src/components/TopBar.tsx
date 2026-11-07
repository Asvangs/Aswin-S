import React from 'react';
import { Heart, Sparkles, Edit2 } from 'lucide-react';
import { AudioPlayerToggle } from './AudioPlayerToggle';

interface TopBarProps {
  partnerName: string;
  onEditName: () => void;
  onJumpToForgive: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({
  partnerName,
  onEditName,
  onJumpToForgive,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-rose-100/80 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6">
        {/* Zone 1: Wordmark / Title */}
        <div className="flex items-center gap-2 shrink-0">
          <Heart className="h-4 w-4 fill-rose-500 text-rose-500 animate-pulse shrink-0" />
          <button
            onClick={onEditName}
            className="group flex items-center gap-1.5 text-left text-sm font-semibold tracking-tight text-slate-900 hover:text-rose-600 transition-colors whitespace-nowrap shrink-0"
            title="Tap to personalize her name"
            aria-label={`Personalize recipient name, currently ${partnerName}`}
          >
            <span className="font-serif text-base font-bold italic text-rose-950 whitespace-nowrap">
              For {partnerName}
            </span>
            <Edit2 className="h-3 w-3 text-rose-400 opacity-60 group-hover:opacity-100 transition-opacity shrink-0" />
          </button>
        </div>

        {/* Zone 2: Navigation Links (single line, unboxed, subtle hover) */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-slate-600">
          <a href="#letter" className="hover:text-rose-600 transition-colors whitespace-nowrap">
            The Letter
          </a>
          <a href="#truth" className="hover:text-rose-600 transition-colors whitespace-nowrap">
            The Truth
          </a>
          <a href="#reasons" className="hover:text-rose-600 transition-colors whitespace-nowrap">
            My World
          </a>
          <a href="#promises" className="hover:text-rose-600 transition-colors whitespace-nowrap">
            Promises
          </a>
          <a href="#coupons" className="hover:text-rose-600 transition-colors whitespace-nowrap">
            Love Coupons
          </a>
        </nav>

        {/* Zone 3: Audio Toggle & Primary CTA */}
        <div className="flex items-center gap-2">
          <AudioPlayerToggle />
          <button
            onClick={onJumpToForgive}
            className="flex items-center gap-1.5 rounded-full bg-rose-600 px-3 py-1.5 text-xs font-semibold text-white shadow-xs hover:bg-rose-700 active:scale-95 transition-all min-h-[44px]"
            aria-label="Jump to forgive section"
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span className="whitespace-nowrap">Forgive Me?</span>
          </button>
        </div>
      </div>
    </header>
  );
};
