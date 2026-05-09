import { BENEFITS } from '@/lib/copy';
import { Sparkle } from './atmosphere/Sparkle';

export function BenefitGrid() {
  return (
    <section className="section">
      <div className="container-wide">
        <div className="mb-12 text-center">
          <p className="label-eyebrow mb-3">Why digital products</p>
          <h2 className="text-balance font-display text-4xl text-starlight md:text-5xl">
            The best way to <span className="em-gold italic">earn online</span> right now.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((b, i) => (
            <div
              key={b.title}
              className="card-void p-7"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <Sparkle size={16} variant={i % 3 === 0 ? 'gold' : i % 3 === 1 ? 'magenta' : 'turquoise'} className="mb-4" />
              <h3 className="font-display text-xl text-starlight">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-moonlight/75">{b.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
