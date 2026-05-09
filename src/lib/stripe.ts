import Stripe from 'stripe';

// Use a placeholder at module-load time so `next build` (which collects route
// metadata before runtime env is wired) doesn't crash. Real env is supplied
// by Render at runtime; missing keys will surface as a Stripe API error on
// actual call rather than a build failure.
export const stripe = new Stripe(
  process.env.STRIPE_SECRET_KEY ?? 'sk_test_placeholder_for_build_only',
  { typescript: true },
);
