import { PAIN_STATS } from '@/lib/copy';

export function PainSection() {
  return (
    <section className="section">
      <div className="container-narrow text-center">
        <h2 className="font-display text-4xl leading-[1.05] text-starlight md:text-5xl">
          Did you know most people trying to sell digital products{' '}
          <span className="em-magenta italic">fail?</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-balance text-base text-moonlight/75">
          It&rsquo;s not because they aren&rsquo;t talented. It&rsquo;s because they get stuck in the
          before-the-launch phase forever.
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {PAIN_STATS.map((s) => (
            <div key={s.label} className="card-void p-8 text-left">
              <div className="font-display text-7xl text-grad-text">{s.value}</div>
              <p className="mt-3 max-w-sm text-base text-moonlight/85">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
