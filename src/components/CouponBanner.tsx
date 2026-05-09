'use client';

import { useEffect, useState } from 'react';

const COOKIE = 'witch30_dismissed';

export function CouponBanner() {
  const [visible, setVisible] = useState(false);
  const [copied, setCopied] = useState(false);

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

  const copy = () => {
    navigator.clipboard.writeText('WITCH30');
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className="fixed inset-x-0 top-0 z-50 border-b border-gold/30 bg-grad-aurora text-starlight">
      <div className="container-wide flex flex-wrap items-center justify-center gap-3 px-4 py-2 text-2xs uppercase tracking-[0.18em] md:text-xs">
        <span>
          ✨ Extra 30% off with code{' '}
          <span className="rounded-pill bg-void-900/40 px-2 py-0.5 font-mono text-gold-200">
            WITCH30
          </span>
        </span>
        <button
          onClick={copy}
          className="rounded-pill border border-starlight/40 bg-starlight/10 px-3 py-1 font-semibold transition-colors hover:bg-starlight/20"
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
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
