import React, { useState } from 'react';
import { Heart, Check, X } from 'lucide-react';
import { sound } from '../utils/audio';

interface EditNameModalProps {
  currentName: string;
  isOpen: boolean;
  onSave: (name: string) => void;
  onClose: () => void;
}

export const EditNameModal: React.FC<EditNameModalProps> = ({
  currentName,
  isOpen,
  onSave,
  onClose,
}) => {
  const [name, setName] = useState(currentName);

  if (!isOpen) return null;

  const presets = ['My Love', 'Meri Jaan', 'Babu', 'Cutie', 'Sweetheart', 'My Angel', 'Queen'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      sound.playChime();
      onSave(name.trim());
      onClose();
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="edit-name-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/50 backdrop-blur-xs"
    >
      <div className="w-full max-w-sm rounded-3xl bg-white p-6 shadow-xl border border-rose-100">
        <div className="flex items-center justify-between pb-3 border-b border-rose-100">
          <div className="flex items-center gap-2">
            <Heart className="h-4 w-4 fill-rose-500 text-rose-500" />
            <h3 id="edit-name-title" className="font-serif text-lg font-bold text-slate-900">
              Personalize Her Name
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Close dialog"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          <div>
            <label htmlFor="partner-name-input" className="block text-xs font-medium text-slate-700 mb-1">
              Enter Name or Nickname
            </label>
            <input
              id="partner-name-input"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. My Love, Swati, Jaan"
              maxLength={24}
              className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-hidden transition-all"
              autoFocus
            />
          </div>

          <div>
            <span className="block text-[11px] font-medium text-slate-500 mb-2">
              Or pick a cute nickname:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {presets.map((preset) => (
                <button
                  key={preset}
                  type="button"
                  onClick={() => setName(preset)}
                  className={`text-xs px-2.5 py-1 rounded-lg border transition-colors ${
                    name === preset
                      ? 'bg-rose-500 text-white border-rose-500 font-semibold'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-rose-50'
                  }`}
                >
                  {preset}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-2 flex items-center justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-slate-600 hover:bg-slate-100 rounded-xl min-h-[44px]"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-rose-600 hover:bg-rose-700 rounded-xl shadow-xs min-h-[44px]"
            >
              <Check className="h-4 w-4" />
              <span>Save & Update</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
