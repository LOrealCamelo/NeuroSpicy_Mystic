import { SHORTCUT_CARDS } from '@/lib/copy';
import { Sparkle } from './atmosphere/Sparkle';

const ACCENT_CLASSES: Record<'gold' | 'magenta' | 'turquoise', string> = {
  gold: 'before:bg-gold/30 after:bg-gold/10',
  magenta: 'before:bg-emphasis-500/30 after:bg-emphasis-500/10',
  turquoise: 'before:bg-accent-500/30 after:bg-accent-500/10',
};

const ICONS = {
  shop: (
    <path d="M4 7h16l-1 12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2L4 7Zm4-3a4 4 0 1 1 8 0v3" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  ),
  link: (
    <path d="M10 13a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7L11.5 6M14 11a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7L12.5 18" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  ),
  coin: (
    <>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" fill="none" />
      <path d="M12 7v10M9.5 9.5C9.5 8.4 10.6 7.5 12 7.5s2.5.9 2.5 2c0 2.5-5 1.5-5 4 0 1.1 1.1 2 2.5 2s2.5-.9 2.5-2" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" />
    </>
  ),
} as const;

export function ShortcutCards() {
  return (
    <section className="section">
      <div className="container-wide">
        <div className="mb-12 text-center">
          <p className="label-eyebrow mb-3">Your shortcut to passive income</p>
          <h2 className="text-balance font-display text-4xl text-starlight md:text-5xl">
            Three ways the vault <span className="em-magenta italic">starts paying you</span>
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {SHORTCUT_CARDS.map((card) => {
            const accentText = card.accent === 'gold'
              ? 'text-gold'
              : card.accent === 'magenta'
                ? 'text-emphasis-300'
                : 'text-accent-300';
            return (
              <div
                key={card.title}
                className={`card-void relative p-6 md:p-7 before:absolute before:inset-x-0 before:top-0 before:h-px ${ACCENT_CLASSES[card.accent]} before:content-[''] after:absolute after:-inset-px after:rounded-card after:opacity-0 after:transition-opacity hover:after:opacity-100 after:content-['']`}
              >
                <div className={`mb-5 inline-flex h-11 w-11 items-center justify-center rounded-pill border border-starlight/10 bg-void-700/80 ${accentText}`}>
                  <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden>
                    {ICONS[card.icon as keyof typeof ICONS]}
                  </svg>
                </div>
                <h3 className="mb-2 font-display text-xl text-starlight">
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed text-moonlight/80">{card.body}</p>
                <div className="mt-5 flex items-center gap-2 text-2xs uppercase tracking-[0.22em] text-moonlight/50">
                  <Sparkle size={8} variant={card.accent === 'magenta' ? 'magenta' : card.accent === 'turquoise' ? 'turquoise' : 'gold'} />
                  <span>NeuroSpicy advantage</span>
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-12 text-center text-2xs uppercase tracking-[0.32em] text-moonlight/50">
          Etsy · Stan Store · Gumroad · Shopify · Beacons · TikTok Shop
        </p>
      </div>
    </section>
  );
}
