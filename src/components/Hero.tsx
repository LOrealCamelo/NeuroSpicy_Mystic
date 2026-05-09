import Image from 'next/image';
import { Sparkle } from './atmosphere/Sparkle';
import { Filigree } from './atmosphere/Filigree';
import { HERO } from '@/lib/copy';

export function Hero() {
  return (
    <section className="section pt-10 md:pt-16">
      <div className="container-narrow flex flex-col items-center text-center">
        <span className="pill-gold mb-6">
          <Sparkle size={10} variant="gold" /> {HERO.pill}
        </span>

        <Image
          src="/logo.png"
          alt="NeuroSpicy Mystic"
          width={260}
          height={260}
          priority
          className="mb-6 animate-float drop-shadow-[0_18px_48px_rgba(212,175,55,0.28)] md:mb-8"
        />

        <h1 className="max-w-4xl text-balance font-display text-5xl font-medium leading-[1.02] tracking-tightest text-starlight md:text-7xl lg:text-[5.5rem]">
          {HERO.h1Top}
          <br />
          <span className="em-magenta italic">{HERO.h1Emph}</span>
        </h1>

        <Filigree className="!my-8" />

        <p className="max-w-xl text-balance text-lg text-moonlight/85 md:text-xl">
          {HERO.sub}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a href="#offer" className="btn-primary">
            <Sparkle size={12} variant="gold" /> {HERO.cta}
          </a>
          <a href="#what" className="btn-secondary">
            {HERO.ctaSecondary}
          </a>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-2xs uppercase tracking-[0.22em] text-moonlight/70">
          {HERO.trust.map((t) => (
            <span key={t} className="flex items-center gap-1.5">
              <span className="text-success">✓</span> {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
