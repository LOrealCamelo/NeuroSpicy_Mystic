import { OLD_NEW } from '@/lib/copy';

export function OldVsNew() {
  return (
    <section className="section">
      <div className="container-wide">
        <div className="mb-12 text-center">
          <h2 className="text-balance font-display text-4xl text-starlight md:text-5xl">
            Two paths to the same goddess goal.{' '}
            <span className="em-magenta italic">Pick wisely.</span>
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div className="card-void p-8 opacity-90">
            <div className="mb-4 flex items-center gap-3">
              <span className="text-2xl" aria-hidden>❌</span>
              <h3 className="font-display text-2xl text-starlight">{OLD_NEW.old.title}</h3>
            </div>
            <ul className="space-y-2">
              {OLD_NEW.old.bullets.map((b) => (
                <li key={b} className="flex gap-2 text-sm text-moonlight/75">
                  <span className="mt-1 text-danger">✕</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-2xs uppercase tracking-[0.22em] text-moonlight/60">
              {OLD_NEW.old.foot}
            </p>
          </div>

          <div className="card-void relative p-8 ring-1 ring-gold/50">
            <span className="absolute -top-3 right-6 pill-gold !text-gold-700 !bg-gold/95 !border-gold-400">
              The Smart Way
            </span>
            <div className="mb-4 flex items-center gap-3">
              <span className="text-2xl" aria-hidden>✨</span>
              <h3 className="font-display text-2xl text-starlight">{OLD_NEW.new.title}</h3>
            </div>
            <ul className="space-y-2">
              {OLD_NEW.new.bullets.map((b) => (
                <li key={b} className="flex gap-2 text-sm text-moonlight/95">
                  <span className="mt-1 text-success">✓</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-2xs uppercase tracking-[0.22em] text-gold-300">
              {OLD_NEW.new.foot}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
