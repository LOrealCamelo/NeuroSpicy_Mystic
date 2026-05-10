import { Sparkle } from './atmosphere/Sparkle';

export function Guarantee() {
  return (
    <section className="section">
      <div className="container-narrow">
        <div className="card-parchment relative overflow-hidden p-10 text-center md:p-14">
          <div className="absolute -inset-px rounded-card ring-1 ring-gold/40" aria-hidden />
          <div className="absolute -top-16 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full bg-gradient-to-b from-gold-300/60 to-transparent blur-2xl" aria-hidden />

          {/* Wax-seal style emblem */}
          <div className="relative mx-auto mb-6 flex h-24 w-24 items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gold-300 via-gold-500 to-gold-700 shadow-glow-gold" />
            <div className="absolute inset-2 rounded-full border border-gold-700/60" />
            <Sparkle size={42} variant="starlight" className="relative" />
          </div>

          <h2 className="font-display text-4xl leading-tight text-ink md:text-5xl">
            Our promise to you.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-body">
            If you can&rsquo;t download the vault, can&rsquo;t open a file, or can&rsquo;t find what
            you need — write to{' '}
            <a className="font-semibold text-primary hover:underline" href="mailto:support@neurospicymystic.com">
              support@neurospicymystic.com
            </a>{' '}
            and we&rsquo;ll fix it the same day. Period.
          </p>
          <p className="mt-3 text-2xs uppercase tracking-[0.22em] text-body/70">
            Real human support · Real mystic on the other end
          </p>
        </div>
      </div>
    </section>
  );
}
