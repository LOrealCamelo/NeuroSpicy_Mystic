'use client';

import { useEffect, useState } from 'react';
import { Sparkle } from './atmosphere/Sparkle';

export function StickyBottomBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > window.innerHeight * 0.7);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = () => {
    fetch('/api/checkout', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ productId: 'witch-vault' }),
    })
      .then((r) => r.json())
      .then((d) => {
        if (d.url) window.location.href = d.url;
        else window.location.hash = '#offer';
      });
  };

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-30 border-t border-gold/30 bg-void-900/95 backdrop-blur-md transition-transform duration-300 md:hidden ${
        show ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="flex items-center justify-between gap-3 px-4 py-3">
        <div className="leading-tight">
          <p className="text-2xs uppercase tracking-[0.18em] text-moonlight/70">Witch Vault</p>
          <p className="font-display text-2xl text-starlight">
            <span className="text-base text-moonlight/55 line-through">$97</span>{' '}
            <span className="em-gold italic">$67</span>
          </p>
        </div>
        <button onClick={handleClick} className="btn-primary py-2.5 text-sm">
          <Sparkle size={11} variant="gold" />
          Add to cart &rarr;
        </button>
      </div>
    </div>
  );
}
