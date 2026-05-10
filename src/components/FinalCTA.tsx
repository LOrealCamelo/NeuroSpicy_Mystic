import { Sparkle } from './atmosphere/Sparkle';
import { Filigree } from './atmosphere/Filigree';
import { CheckoutButton } from './CheckoutButton';

export function FinalCTA() {
  return (
    <section className="section">
      <div className="container-narrow text-center">
        <p className="label-eyebrow mb-3">One last whisper</p>
        <h2 className="text-balance font-display text-5xl leading-[1.02] text-starlight md:text-7xl">
          Skip the hard part.
          <br />
          <span className="em-magenta italic">Get instant access.</span>
        </h2>
        <Filigree className="!my-8" />
        <CheckoutButton productId="witch-vault" className="btn-cta-hero">
          <Sparkle size={16} variant="gold" />
          <span>Yes! I Want Instant Access</span>
          <span aria-hidden>&rarr;</span>
        </CheckoutButton>
        <p className="mt-4 text-2xs uppercase tracking-[0.32em] text-moonlight/60">
          $67 one-time · Lifetime access · 100% profit
        </p>
      </div>
    </section>
  );
}
