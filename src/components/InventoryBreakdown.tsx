import { INVENTORY_CATEGORIES, INVENTORY_TOTAL_VALUE } from '@/lib/copy';
import { Sparkle } from './atmosphere/Sparkle';

export function InventoryBreakdown() {
  return (
    <section className="section">
      <div className="container-wide">
        <div className="mb-12 text-center">
          <p className="label-eyebrow mb-3">Everything you&rsquo;re getting</p>
          <h2 className="text-balance font-display text-4xl text-starlight md:text-5xl">
            6 categories. <span className="em-gold italic">${INVENTORY_TOTAL_VALUE.toLocaleString()}+</span> combined value.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {INVENTORY_CATEGORIES.map((c) => (
            <div key={c.title} className="card-parchment p-7 md:p-8">
              <div className="mb-4 flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl" aria-hidden>{c.icon}</span>
                  <h3 className="font-display text-xl leading-tight text-ink">{c.title}</h3>
                </div>
                {c.valueLabel ? (
                  <span className="pill-magenta whitespace-nowrap !text-emphasis-700 !border-emphasis-500/40 !bg-emphasis-500/10">
                    {c.valueLabel}
                  </span>
                ) : (
                  <div className="text-right">
                    <div className="text-2xs font-semibold uppercase tracking-[0.18em] text-body">Value</div>
                    <div className="font-display text-2xl text-grad-text">${c.valueUsd}</div>
                  </div>
                )}
              </div>
              <ul className="space-y-2">
                {c.items.map((item) => (
                  <li key={item} className="flex gap-2 text-sm leading-relaxed text-body">
                    <Sparkle size={10} variant="gold" className="mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
