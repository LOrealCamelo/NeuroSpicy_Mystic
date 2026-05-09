import { Sparkle } from './atmosphere/Sparkle';
import { INVENTORY_TOTAL_VALUE } from '@/lib/copy';
import { CheckoutButton } from './CheckoutButton';

export function OfferCard() {
  return (
    <section id="offer" className="section">
      <div className="container-narrow">
        <div className="card-parchment relative overflow-hidden p-8 md:p-12">
          {/* Wax seal accent */}
          <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-gradient-to-br from-emphasis-300/40 to-emphasis-700/30 blur-3xl" aria-hidden />
          <div className="absolute -left-12 -bottom-12 h-48 w-48 rounded-full bg-gradient-to-tr from-gold-200/50 to-gold-500/30 blur-3xl" aria-hidden />

          <div className="relative text-center">
            <span className="pill-magenta !text-emphasis-700 !border-emphasis-500/40 !bg-emphasis-500/10 mb-4">
              <Sparkle size={10} variant="magenta" /> Today only
            </span>
            <p className="text-sm uppercase tracking-[0.32em] text-body">Total combined value</p>
            <p className="font-display text-2xl text-body line-through opacity-60">
              ${INVENTORY_TOTAL_VALUE.toLocaleString()}+
            </p>

            <div className="my-6 flex flex-wrap items-baseline justify-center gap-3">
              <span className="font-display text-2xl text-body line-through">$97</span>
              <span className="font-display text-7xl leading-none text-grad-text md:text-8xl">$67</span>
              <span className="pill-gold !text-gold-700 !border-gold/50 !bg-gold/15">98% OFF</span>
            </div>

            <p className="text-base text-body">
              Or <strong className="font-semibold text-ink">4 interest-free payments of $16.75</strong>
            </p>
            <div className="mt-3 flex items-center justify-center gap-3 text-2xs uppercase tracking-[0.22em] text-body/70">
              <span>Affirm</span>
              <span className="h-1 w-1 rounded-full bg-accent-500" />
              <span>Afterpay</span>
              <span className="h-1 w-1 rounded-full bg-accent-500" />
              <span>Klarna</span>
            </div>

            <ul className="mx-auto mt-8 max-w-md space-y-2 text-left text-sm text-body">
              {[
                'One-time payment · lifetime access',
                '300GB+ files across 62 bundles',
                'Master resell rights · 100% profit',
                'Money Spell guide · NeuroSpicy original',
                'New templates added free, forever',
              ].map((line) => (
                <li key={line} className="flex items-start gap-2">
                  <span className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full bg-success" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <CheckoutButton productId="witch-vault" className="btn-primary text-base md:text-lg !px-9 !py-4">
                <Sparkle size={14} variant="gold" /> Yes! I Want Instant Access →
              </CheckoutButton>
              <p className="mt-3 text-2xs uppercase tracking-[0.22em] text-body/60">
                Secure checkout via Stripe · 256-bit SSL
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
