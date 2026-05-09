import { Filigree } from './atmosphere/Filigree';

const NICHES = [
  'Witchy', 'Tarot', 'Moon', 'Astrology', 'Self-Care', 'Manifestation', 'Money',
  'Yoga', 'Chakra', 'Crystal', 'Prayer', 'Gratitude', 'Habit', 'Productivity',
  'Etsy', 'TikTok', 'Stan Store', 'Shopify', 'Recipe', 'Meal Prep', 'Fitness',
  'Mood Tracker', 'Vision Board', 'Reading List', 'Goal Setting', 'ADHD', 'Introvert',
  'Spiritual', 'Awakening', 'Saving', 'Decluttering', 'Self-Love',
];

export function BundlesMosaic() {
  return (
    <section className="section">
      <div className="container-wide">
        <div className="mb-10 text-center">
          <p className="label-eyebrow mb-3">What&rsquo;s inside</p>
          <h2 className="text-balance font-display text-4xl text-starlight md:text-5xl">
            62 bundles. <span className="em-magenta italic">1M+ products.</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-balance text-base text-moonlight/75">
            Every niche, every platform, every audience. We rebrand once — you sell forever.
          </p>
        </div>

        <div className="card-void overflow-hidden p-6 md:p-10">
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {NICHES.map((n, i) => (
              <span
                key={n}
                className={`rounded-pill border px-4 py-1.5 text-sm font-medium transition-colors ${
                  i % 5 === 0
                    ? 'border-gold/40 bg-gold/10 text-gold'
                    : i % 5 === 1
                    ? 'border-emphasis-500/30 bg-emphasis-500/10 text-emphasis-200'
                    : i % 5 === 2
                    ? 'border-accent-500/40 bg-accent-500/10 text-accent-200'
                    : i % 5 === 3
                    ? 'border-lilac-300/40 bg-lilac-500/10 text-lilac-200'
                    : 'border-starlight/15 bg-void-700/40 text-moonlight/85'
                }`}
              >
                {n}
              </span>
            ))}
          </div>
          <Filigree className="!mb-0 !mt-8" />
          <p className="text-center text-2xs uppercase tracking-[0.32em] text-moonlight/60">
            300GB+ of files · Lifetime access · Master resell rights
          </p>
        </div>
      </div>
    </section>
  );
}
