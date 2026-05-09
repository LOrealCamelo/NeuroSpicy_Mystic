import { THREE_STEPS } from '@/lib/copy';

export function ThreeStepInventory() {
  return (
    <section className="section">
      <div className="container-wide">
        <div className="mb-12 text-center">
          <p className="label-eyebrow mb-3">A shortcut, not a shortcut-shaped hole</p>
          <h2 className="text-balance font-display text-4xl text-starlight md:text-5xl">
            Your business inventory, <span className="em-magenta italic">already built.</span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3 md:gap-4">
          {THREE_STEPS.map((step, i) => (
            <div key={step.n} className="relative">
              {i < THREE_STEPS.length - 1 && (
                <div
                  className="pointer-events-none absolute right-[-18px] top-12 hidden h-px w-9 bg-gradient-to-r from-gold/60 to-transparent md:block"
                  aria-hidden
                />
              )}
              <div className="card-void h-full p-7">
                <div className="mb-5 inline-flex items-center gap-3">
                  <span className="font-display text-3xl text-grad-text">{step.n}</span>
                  <span className="h-px flex-1 bg-gradient-to-r from-gold/40 to-transparent" />
                </div>
                <h3 className="font-display text-xl text-starlight">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-moonlight/80">{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
