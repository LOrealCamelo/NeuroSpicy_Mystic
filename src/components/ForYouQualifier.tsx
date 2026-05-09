import { QUALIFIER } from '@/lib/copy';

export function ForYouQualifier() {
  return (
    <section className="section">
      <div className="container-wide">
        <div className="mb-12 text-center">
          <p className="label-eyebrow mb-3">Be honest with yourself</p>
          <h2 className="text-balance font-display text-4xl text-starlight md:text-5xl">
            This is for some witches.{' '}
            <span className="em-magenta italic">Not every witch.</span>
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div className="card-parchment p-8 ring-1 ring-success/30">
            <div className="mb-4 flex items-center gap-2">
              <span className="text-2xl" aria-hidden>✅</span>
              <h3 className="font-display text-2xl text-ink">{QUALIFIER.yes.title}</h3>
            </div>
            <ul className="space-y-2.5">
              {QUALIFIER.yes.bullets.map((b) => (
                <li key={b} className="flex gap-2 text-sm text-body">
                  <span className="mt-0.5 text-success">✓</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="card-parchment p-8 ring-1 ring-danger/30 opacity-95">
            <div className="mb-4 flex items-center gap-2">
              <span className="text-2xl" aria-hidden>🚫</span>
              <h3 className="font-display text-2xl text-ink">{QUALIFIER.no.title}</h3>
            </div>
            <ul className="space-y-2.5">
              {QUALIFIER.no.bullets.map((b) => (
                <li key={b} className="flex gap-2 text-sm text-body">
                  <span className="mt-0.5 text-danger">✕</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
