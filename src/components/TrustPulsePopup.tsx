'use client';

import { useEffect, useState } from 'react';
import { TRUSTPULSE_EVENTS } from '@/lib/copy';
import { Sparkle } from './atmosphere/Sparkle';

export function TrustPulsePopup() {
  const [idx, setIdx] = useState(-1);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;
    const start = setTimeout(() => setIdx(0), 6000);
    return () => clearTimeout(start);
  }, [dismissed]);

  useEffect(() => {
    if (dismissed || idx < 0) return;
    const hide = setTimeout(() => {
      setIdx(-1);
    }, 7000);
    const show = setTimeout(() => {
      setIdx((i) => (i + 1 + TRUSTPULSE_EVENTS.length) % TRUSTPULSE_EVENTS.length);
    }, 11000);
    return () => {
      clearTimeout(hide);
      clearTimeout(show);
    };
  }, [idx, dismissed]);

  if (dismissed || idx < 0) return null;
  const ping = TRUSTPULSE_EVENTS[idx];

  return (
    <div className="pointer-events-auto fixed bottom-20 left-4 z-30 max-w-xs animate-pulse-soft md:bottom-6">
      <div className="card-void flex items-start gap-3 p-3 ring-1 ring-gold/30 shadow-glow-gold">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-emphasis-500 to-primary-500 text-sm font-bold text-starlight">
          {ping.name[0]}
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-2xs leading-snug text-moonlight">
            <span className="font-semibold text-starlight">{ping.name}</span> from{' '}
            {ping.city} just bought the
          </p>
          <p className="text-xs font-semibold text-gold-200">{ping.product}</p>
          <p className="mt-1 flex items-center gap-1 text-2xs text-moonlight/60">
            <Sparkle size={8} variant="gold" />
            {ping.minutesAgo} min ago
          </p>
        </div>
        <button
          onClick={() => setDismissed(true)}
          aria-label="Dismiss"
          className="text-moonlight/50 hover:text-moonlight"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
