import React, { useState } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';
import { sound } from '../utils/audio';

interface AudioPlayerToggleProps {
  onToggle?: (playing: boolean) => void;
}

export const AudioPlayerToggle: React.FC<AudioPlayerToggleProps> = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(sound.getIsPlayingAmbient());
  const [isMuted, setIsMuted] = useState<boolean>(sound.getMuted());

  const handleToggle = () => {
    if (isMuted) {
      sound.toggleMute();
      setIsMuted(false);
    }
    const playing = sound.toggleAmbientMusic((active) => {
      setIsPlaying(active);
    });
    setIsPlaying(playing);
    if (playing) {
      sound.playChime();
    }
  };

  return (
    <button
      onClick={handleToggle}
      className={`relative inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-medium transition-all active:scale-95 min-h-[44px] ${
        isPlaying && !isMuted
          ? 'bg-rose-500/10 text-rose-700 border border-rose-300/60 shadow-xs'
          : 'bg-white/80 text-slate-600 border border-slate-200/80 hover:bg-slate-50'
      }`}
      aria-label={isPlaying ? 'Pause romantic ambient music' : 'Play romantic ambient music'}
      title={isPlaying ? 'Pause music' : 'Play soft romantic ambient sound'}
    >
      {isPlaying && !isMuted ? (
        <span className="flex items-center gap-1">
          <Music className="h-3.5 w-3.5 text-rose-500 animate-spin" style={{ animationDuration: '4s' }} />
          <span className="flex items-end gap-0.5 h-3">
            <span className="w-0.5 h-2 bg-rose-500 animate-pulse" />
            <span className="w-0.5 h-3 bg-rose-500 animate-pulse" style={{ animationDelay: '150ms' }} />
            <span className="w-0.5 h-1.5 bg-rose-500 animate-pulse" style={{ animationDelay: '300ms' }} />
          </span>
          <span className="font-serif italic tracking-wide text-xs hidden sm:inline">Melody of Us</span>
        </span>
      ) : (
        <span className="flex items-center gap-1.5">
          <Volume2 className="h-3.5 w-3.5 text-slate-500" />
          <span className="font-serif italic text-xs hidden sm:inline">Soft Music</span>
        </span>
      )}
    </button>
  );
};
