'use client';

import { useEffect, useState } from 'react';

const COOKIE = 'mystic_perks_dismissed';

export function CouponBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof document === 'undefined') return;
    const dismissed = document.cookie.split('; ').some((c) => c.startsWith(`${COOKIE}=1`));
    if (!dismissed) setVisible(true);
  }, []);

  if (!visible) return null;

  const dismiss = () => {
    document.cookie = `${COOKIE}=1; path=/; max-age=${60 * 60 * 24 * 7}`;
    setVisible(false);
  };

  return (
    <div className="fixed inset-x-0 top-0 z-50 border-b border-gold/30 bg-grad-aurora text-starlight">
      <div className="container-wide flex flex-wrap items-center justify-center gap-3 px-4 py-2 text-2xs uppercase tracking-[0.18em] md:text-xs">
        <span>
          ✨ Spend $39.99+ &rarr; <strong className="text-gold-200">free 15-min reading on Stan</strong>
          <span className="hidden md:inline"> · spend $69.99+ &rarr; <strong className="text-gold-200">pick a free gift</strong></span>
        </span>
        <a
          href="#perks"
          className="rounded-pill border border-starlight/40 bg-starlight/10 px-3 py-1 font-semibold transition-colors hover:bg-starlight/20"
        >
          See perks
        </a>
        <button
          onClick={dismiss}
          aria-label="Dismiss banner"
          className="ml-2 rounded-full px-2 py-0.5 text-starlight/70 hover:text-starlight"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
