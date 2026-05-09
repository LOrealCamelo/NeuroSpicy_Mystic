'use client';

import { useState } from 'react';
import { FAQ_ITEMS } from '@/lib/copy';

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="section">
      <div className="container-narrow">
        <div className="mb-10 text-center">
          <p className="label-eyebrow mb-3">Frequently asked</p>
          <h2 className="text-balance font-display text-4xl text-starlight md:text-5xl">
            Witches always wonder. <span className="em-gold italic">So we answered.</span>
          </h2>
        </div>

        <div className="card-void overflow-hidden">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className="border-b border-starlight/8 last:border-b-0">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-void-700/40 md:px-8"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-lg text-starlight md:text-xl">{item.q}</span>
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold transition-transform ${isOpen ? 'rotate-45' : ''}`}
                    aria-hidden
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-sm leading-relaxed text-moonlight/85 md:px-8 md:text-base">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
