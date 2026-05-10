import Image from 'next/image';
import { Sparkle } from './atmosphere/Sparkle';
import { FOOTER_LINKS } from '@/lib/copy';

const STAN_LINK = FOOTER_LINKS.shop.find((l) => l.label.toLowerCase().includes('stan'))?.href
  ?? 'https://stan.store/neurospicymystic';

export function ReadingCallout() {
  return (
    <section className="section" id="readings">
      <div className="container-wide">
        <div className="card-parchment relative overflow-hidden">
          <div className="grid items-center gap-0 md:grid-cols-[5fr_7fr]">
            {/* Photo column */}
            <div className="relative aspect-[4/5] md:aspect-auto md:h-full">
              <Image
                src="/reading.png"
                alt="L’Oreal — clairvoyant reader at NeuroSpicy Mystic"
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-void-800/30 via-transparent to-transparent" aria-hidden />
              <Sparkle size={24} variant="gold" className="absolute right-5 top-5 animate-twinkle" />
              <Sparkle size={14} variant="magenta" className="absolute left-6 bottom-12 animate-twinkle-slow" />
            </div>

            {/* Text column */}
            <div className="p-8 md:p-12">
              <p className="label-eyebrow !text-emphasis-700 mb-3">1:1 readings on Stan</p>
              <h2 className="font-display text-4xl leading-[1.05] text-ink md:text-5xl">
                Want a <span className="em-magenta italic">real reading</span> from me?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-body">
                Tarot. Oracle cards. Pendulum. Dowsing rods. I read with all of them, using my
                natural-born clairvoyant energy. If you want clarity in love, career, or life
                straight from my hands to yours — book a reading on my Stan Store.
              </p>

              <ul className="mt-5 space-y-2 text-sm text-body">
                <li className="flex items-start gap-2">
                  <Sparkle size={10} variant="gold" className="mt-1 shrink-0" />
                  <span>Recorded, sent to your inbox — re-watch any time</span>
                </li>
                <li className="flex items-start gap-2">
                  <Sparkle size={10} variant="gold" className="mt-1 shrink-0" />
                  <span>One question or full life-area read · your choice</span>
                </li>
                <li className="flex items-start gap-2">
                  <Sparkle size={10} variant="gold" className="mt-1 shrink-0" />
                  <span>Honest, ADHD-friendly, no toxic positivity</span>
                </li>
              </ul>

              <div className="mt-7 flex flex-wrap items-center gap-4">
                <a
                  href={STAN_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cta-hero !px-7 !py-3 !text-base"
                >
                  <Sparkle size={14} variant="gold" />
                  <span>Book a reading on Stan</span>
                  <span aria-hidden>&rarr;</span>
                </a>
                <span className="text-2xs uppercase tracking-[0.22em] text-body/60">
                  opens in new tab
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
