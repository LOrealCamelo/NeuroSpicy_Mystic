import { PROOF_CARDS } from '@/lib/copy';
import { Sparkle } from './atmosphere/Sparkle';

const ACCENT: Record<'gold' | 'magenta' | 'turquoise', { ring: string; chip: string }> = {
  gold: { ring: 'ring-gold/40', chip: 'pill-gold' },
  magenta: { ring: 'ring-emphasis-500/40', chip: 'pill-magenta' },
  turquoise: { ring: 'ring-accent-500/40', chip: 'pill' },
};

export function ProofSection() {
  return (
    <section className="section">
      <div className="container-wide">
        <div className="mb-12 text-center">
          <p className="label-eyebrow mb-3">Real sales. Real sellers.</p>
          <h2 className="text-balance font-display text-4xl text-starlight md:text-5xl">
            Customers shipping <span className="em-gold italic">today.</span>
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {PROOF_CARDS.map((p) => {
            const accent = ACCENT[p.accent];
            return (
              <div
                key={p.platform}
                className={`card-parchment p-7 ring-1 ${accent.ring}`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-body">
                    {p.platform}
                  </span>
                  <span className={accent.chip}>
                    <Sparkle size={9} variant={p.accent === 'magenta' ? 'magenta' : p.accent === 'turquoise' ? 'turquoise' : 'gold'} /> Live
                  </span>
                </div>
                <div className="mt-4 font-display text-5xl text-grad-text">{p.headline}</div>
                <div className="mt-1 text-sm text-body">{p.sub}</div>

                {/* Sparkline-style decoration */}
                <svg viewBox="0 0 120 30" className="mt-5 h-8 w-full" aria-hidden>
                  <path
                    d="M0 22 L15 18 L30 20 L45 12 L60 14 L75 8 L90 10 L105 4 L120 6"
                    stroke="#D4AF37"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <path
                    d="M0 22 L15 18 L30 20 L45 12 L60 14 L75 8 L90 10 L105 4 L120 6 L120 30 L0 30 Z"
                    fill="rgba(212,175,55,0.12)"
                  />
                </svg>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
