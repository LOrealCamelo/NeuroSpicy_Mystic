import { getComingSoonProducts, type Product } from '@/lib/products';
import { Sparkle } from './atmosphere/Sparkle';

const HUE_GRAD: Record<Product['hue'], string> = {
  primary: 'from-primary-700 via-primary-600 to-emphasis-700',
  emphasis: 'from-emphasis-700 via-emphasis-600 to-primary-700',
  gold: 'from-gold-700 via-gold-500 to-emphasis-700',
  accent: 'from-accent-700 via-accent-600 to-primary-700',
  lilac: 'from-lilac-600 via-primary-700 to-emphasis-700',
};

const HUE_RING: Record<Product['hue'], string> = {
  primary: 'ring-primary-500/30',
  emphasis: 'ring-emphasis-500/30',
  gold: 'ring-gold/40',
  accent: 'ring-accent-500/30',
  lilac: 'ring-lilac-300/30',
};

const SPARKLE_VARIANT: Record<Product['hue'], 'gold' | 'magenta' | 'turquoise' | 'starlight'> = {
  primary: 'gold',
  emphasis: 'magenta',
  gold: 'gold',
  accent: 'turquoise',
  lilac: 'starlight',
};

export function BundleRoadmap() {
  const upcoming = getComingSoonProducts();
  if (upcoming.length === 0) return null;

  return (
    <section id="bundles" className="section">
      <div className="container-wide">
        <div className="mb-12 text-center">
          <p className="label-eyebrow mb-3">Coming next from the cauldron</p>
          <h2 className="text-balance font-display text-4xl text-starlight md:text-5xl">
            More bundles, <span className="em-magenta italic">more magic.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-balance text-base text-moonlight/80">
            Every one fully rebranded under NeuroSpicy Mystic, sold with resell rights so
            <span className="em-gold italic"> every dollar lands in your pocket.</span> Reserve
            early access below — first launches drop this season.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {upcoming.map((p) => (
            <article
              key={p.id}
              className={`card-void group relative flex flex-col overflow-hidden p-0 ring-1 ${HUE_RING[p.hue]} transition-all hover:-translate-y-0.5`}
            >
              {/* Visual placeholder */}
              <div className={`relative aspect-[16/10] overflow-hidden bg-gradient-to-br ${HUE_GRAD[p.hue]}`}>
                <div className="absolute inset-0 bg-grain mix-blend-overlay opacity-25" aria-hidden />
                <Sparkle size={28} variant={SPARKLE_VARIANT[p.hue]} className="absolute right-4 top-4 animate-twinkle" />
                <Sparkle size={14} variant="starlight" className="absolute left-6 bottom-5 animate-twinkle-slow" />
                <Sparkle size={10} variant={SPARKLE_VARIANT[p.hue]} className="absolute right-12 bottom-8 animate-twinkle" />
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-void-900/90 to-transparent" aria-hidden />
                <span className="absolute left-4 top-4">
                  <span
                    className={
                      p.badge === 'TAROT'
                        ? 'pill-magenta'
                        : p.badge === 'COMING SOON'
                          ? 'pill-purple'
                          : 'pill-gold'
                    }
                  >
                    {p.badge ?? 'COMING SOON'}
                  </span>
                </span>
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-2xl text-starlight">{p.name}</h3>
                <p className="mt-1 text-sm text-moonlight/70">{p.tagline}</p>

                <ul className="mt-4 space-y-1.5 text-sm text-moonlight/80">
                  {p.bullets.slice(0, 3).map((b) => (
                    <li key={b} className="flex gap-2">
                      <Sparkle size={9} variant={SPARKLE_VARIANT[p.hue]} className="mt-1 shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 border-t border-starlight/10 pt-4">
                  <p className="text-2xs uppercase tracking-[0.22em] text-gold-300">
                    {p.comingSoonNote ?? 'Rebranding & Resell Rights pending'}
                  </p>
                  <a
                    href="#money-spell"
                    className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-starlight transition-colors hover:text-gold"
                  >
                    Reserve early access <span aria-hidden>→</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-moonlight/60">
          Drop your name in the form above to be the <span className="text-gold">first notified</span> the moment each bundle launches.
        </p>
      </div>
    </section>
  );
}
