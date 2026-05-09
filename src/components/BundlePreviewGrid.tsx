import { BUNDLE_PREVIEWS } from '@/lib/copy';
import { Sparkle } from './atmosphere/Sparkle';

const HUE_GRAD: Record<'primary' | 'emphasis' | 'gold' | 'accent', string> = {
  primary: 'from-primary-700 to-primary-900',
  emphasis: 'from-emphasis-700 to-void-700',
  gold: 'from-gold-700 to-void-700',
  accent: 'from-accent-700 to-void-700',
};

const TAG_CLASS: Record<'gold' | 'turquoise' | 'magenta', string> = {
  gold: 'pill-gold',
  turquoise: 'pill',
  magenta: 'pill-magenta',
};

export function BundlePreviewGrid() {
  return (
    <section id="what" className="section">
      <div className="container-wide">
        <div className="mb-10 text-center">
          <p className="label-eyebrow mb-3">A peek inside the vault</p>
          <h2 className="text-balance font-display text-4xl text-starlight md:text-5xl">
            8 sample bundles. <span className="em-gold italic">62 in total.</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {BUNDLE_PREVIEWS.map((b) => (
            <div
              key={b.title}
              className={`card-tarot relative aspect-[3/4] overflow-hidden p-4`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${HUE_GRAD[b.hue]} opacity-90`} aria-hidden />
              <div className="relative flex h-full flex-col justify-between">
                <span className={TAG_CLASS[b.tagVariant]}>{b.tag}</span>
                <div className="flex flex-col gap-3">
                  <Sparkle size={18} variant={b.tagVariant === 'magenta' ? 'magenta' : b.tagVariant === 'turquoise' ? 'turquoise' : 'gold'} />
                  <h3 className="font-display text-xl leading-tight text-starlight">{b.title}</h3>
                </div>
              </div>
              <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gold/20 blur-2xl" aria-hidden />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
