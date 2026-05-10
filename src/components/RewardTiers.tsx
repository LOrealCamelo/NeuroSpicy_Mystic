import { REWARD_TIERS } from '@/lib/copy';
import { Sparkle } from './atmosphere/Sparkle';
import { Filigree } from './atmosphere/Filigree';

export function RewardTiers() {
  return (
    <section id="perks" className="section">
      <div className="container-wide">
        <div className="mb-12 text-center">
          <p className="label-eyebrow mb-3">Exclusive landing-page perks</p>
          <h2 className="text-balance font-display text-4xl text-starlight md:text-5xl">
            Spend more, <span className="em-magenta italic">get more.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-balance text-base text-moonlight/80">
            Only on <strong className="text-gold-200">neurospicymystic.com</strong> — these
            perks aren&rsquo;t available on Etsy or my TikTok Shop. Hit the spend threshold,
            redeem code arrives with your order confirmation.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {REWARD_TIERS.map((tier) => (
            <article
              key={tier.spend}
              className={`card-parchment relative overflow-hidden p-7 md:p-9 ${
                tier.accent === 'gold' ? 'ring-2 ring-gold/60' : 'ring-1 ring-primary-300/40'
              }`}
            >
              <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full opacity-25 blur-3xl"
                style={{ backgroundColor: tier.accent === 'gold' ? '#D4AF37' : '#7C3AED' }}
                aria-hidden
              />
              <div className="relative">
                <div className="mb-4 flex items-center gap-3">
                  <span className="text-3xl" aria-hidden>{tier.icon}</span>
                  <span
                    className={
                      tier.accent === 'gold'
                        ? 'pill-gold !text-gold-700 !border-gold/50 !bg-gold/15'
                        : 'pill-magenta !text-emphasis-700 !border-emphasis-500/40 !bg-emphasis-500/10'
                    }
                  >
                    Spend ${tier.spend.toFixed(2)}+
                  </span>
                </div>
                <h3 className="font-display text-3xl text-ink">{tier.label}</h3>
                <p className="mt-3 text-body">{tier.body}</p>
                <p className="mt-4 rounded-card border border-parchment-edge/60 bg-white/40 p-3 text-2xs uppercase tracking-[0.18em] text-body/70">
                  {tier.redeemNote}
                </p>
              </div>
            </article>
          ))}
        </div>

        <Filigree className="!my-10" />

        <p className="text-center text-sm text-moonlight/70">
          Each redeem code is unique and tied to your order number — no sharing the wealth.{' '}
          <Sparkle size={10} variant="gold" className="inline" /> The system tracks your
          eligibility automatically. Questions? Email{' '}
          <a href="mailto:support@neurospicymystic.com" className="text-gold hover:underline">
            support@neurospicymystic.com
          </a>
          .
        </p>
      </div>
    </section>
  );
}
