import { STATS } from '@/lib/copy';
import { Sparkle } from './atmosphere/Sparkle';

export function StatCounters() {
  return (
    <section className="section">
      <div className="container-wide">
        <div className="flex items-center justify-center gap-3 mb-10">
          <Sparkle variant="gold" />
          <p className="label-eyebrow">
            Join thousands of digital sellers already earning online
          </p>
          <Sparkle variant="gold" />
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="card-void flex flex-col items-center px-8 py-10 text-center"
            >
              <div className="font-display text-6xl font-medium text-grad-text">{s.value}</div>
              <div className="mt-3 text-2xs uppercase tracking-[0.32em] text-moonlight/70">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
