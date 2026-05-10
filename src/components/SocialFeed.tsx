import { SOCIAL_FEED_LINKS } from '@/lib/copy';
import { Sparkle } from './atmosphere/Sparkle';

const CARDS: Array<{
  href: string;
  badge: string;
  title: string;
  body: string;
  cta: string;
  hue: 'primary' | 'emphasis' | 'gold' | 'accent';
  icon: React.ReactNode;
}> = [
  {
    href: SOCIAL_FEED_LINKS.chirp,
    badge: 'Latest videos',
    title: 'Watch the Chirp feed',
    body: 'Live tarot pulls, daily card-of-the-day, and behind-the-scenes from my reading desk. Updated every week.',
    cta: 'Open the feed',
    hue: 'emphasis',
    icon: (
      <svg viewBox="0 0 32 32" width="28" height="28" fill="none" aria-hidden>
        <path d="M9 5 L23 16 L9 27 Z" fill="currentColor" />
      </svg>
    ),
  },
  {
    href: SOCIAL_FEED_LINKS.tiktok,
    badge: 'TikTok',
    title: '@neurospicy_mystic',
    body: 'AuDHD-friendly tarot, neurodivergent magic, and the occasional witchy-bestie rant. Follow for daily pulls.',
    cta: 'Follow on TikTok',
    hue: 'primary',
    icon: (
      <svg viewBox="0 0 32 32" width="26" height="26" fill="currentColor" aria-hidden>
        <path d="M22 4v3.4c1.7 1.2 3.7 2 5.8 2.2v3.6c-2.2-.1-4.2-.7-6-1.7v9.7c0 4.6-3.7 8.3-8.3 8.3S5.2 25.8 5.2 21.2c0-4.4 3.3-8 7.6-8.3v3.7c-2.2.3-4 2.2-4 4.6 0 2.6 2.1 4.7 4.7 4.7s4.7-2.1 4.7-4.7V4H22z" />
      </svg>
    ),
  },
  {
    href: SOCIAL_FEED_LINKS.youtube,
    badge: 'YouTube',
    title: 'Long-form readings',
    body: '10-minute deep-dive readings, vault unboxings, and the occasional hour-long Money Spell live ritual.',
    cta: 'Subscribe on YouTube',
    hue: 'gold',
    icon: (
      <svg viewBox="0 0 32 32" width="28" height="28" fill="currentColor" aria-hidden>
        <path d="M28 8.5c-.3-1.1-1.2-2-2.4-2.3C23.5 5.5 16 5.5 16 5.5s-7.5 0-9.6.7C5.2 6.5 4.3 7.4 4 8.5 3.3 10.6 3.3 16 3.3 16s0 5.4.7 7.5c.3 1.1 1.2 2 2.4 2.3 2.1.7 9.6.7 9.6.7s7.5 0 9.6-.7c1.2-.3 2.1-1.2 2.4-2.3.7-2.1.7-7.5.7-7.5s0-5.4-.7-7.5zM13 20V12l7 4-7 4z" />
      </svg>
    ),
  },
];

const HUE_BG: Record<'primary' | 'emphasis' | 'gold' | 'accent', string> = {
  primary: 'from-primary-700 to-primary-900',
  emphasis: 'from-emphasis-700 to-void-700',
  gold: 'from-gold-700 to-void-700',
  accent: 'from-accent-700 to-void-700',
};

const HUE_TEXT: Record<'primary' | 'emphasis' | 'gold' | 'accent', string> = {
  primary: 'text-primary-200',
  emphasis: 'text-emphasis-200',
  gold: 'text-gold-200',
  accent: 'text-accent-200',
};

export function SocialFeed() {
  return (
    <section className="section" id="watch">
      <div className="container-wide">
        <div className="mb-10 text-center">
          <p className="label-eyebrow mb-3">Follow the magic</p>
          <h2 className="text-balance font-display text-4xl text-starlight md:text-5xl">
            Live with me <span className="em-magenta italic">between</span> readings.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {CARDS.map((c) => (
            <a
              key={c.href}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`card-void group relative flex flex-col overflow-hidden p-6 ring-1 transition-all hover:-translate-y-1 ${
                c.hue === 'gold' ? 'ring-gold/40 hover:ring-gold/70' :
                c.hue === 'emphasis' ? 'ring-emphasis-500/30 hover:ring-emphasis-500/60' :
                'ring-primary-500/30 hover:ring-primary-500/60'
              }`}
            >
              <div className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br ${HUE_BG[c.hue]} ${HUE_TEXT[c.hue]} shadow-card`}>
                {c.icon}
              </div>
              <span className="text-2xs font-semibold uppercase tracking-[0.22em] text-gold-300">
                {c.badge}
              </span>
              <h3 className="mt-1 font-display text-2xl text-starlight">{c.title}</h3>
              <p className="mt-2 text-sm text-moonlight/80">{c.body}</p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-starlight transition-colors group-hover:text-gold">
                <Sparkle size={10} variant={c.hue === 'gold' ? 'gold' : c.hue === 'emphasis' ? 'magenta' : 'starlight'} />
                {c.cta} <span aria-hidden>&rarr;</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
