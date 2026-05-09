import Link from 'next/link';
import Image from 'next/image';
import { Backdrop } from '@/components/atmosphere/Backdrop';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Filigree } from '@/components/atmosphere/Filigree';
import { Sparkle } from '@/components/atmosphere/Sparkle';
import { stripe } from '@/lib/stripe';
import { getProductById, getUpsellsExcluding, type Product } from '@/lib/products';

type Props = { searchParams: { session_id?: string } };

async function loadSession(sessionId?: string) {
  if (!sessionId) return null;
  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ['line_items', 'customer_details'],
    });
    const productId = (session.metadata?.product ?? 'witch-vault').toString();
    const product = getProductById(productId);
    const fullName = session.customer_details?.name ?? '';
    const firstName = fullName.split(' ')[0] || 'friend';
    const email = session.customer_details?.email ?? '';
    return {
      orderRef: session.id.slice(-8).toUpperCase(),
      total: ((session.amount_total ?? 0) / 100).toFixed(2),
      currency: (session.currency ?? 'usd').toUpperCase(),
      product,
      productId,
      firstName,
      email,
    };
  } catch (err) {
    console.error('[success] could not retrieve session', err);
    return null;
  }
}

export default async function SuccessPage({ searchParams }: Props) {
  const data = await loadSession(searchParams.session_id);
  const upsells: Product[] = data?.productId ? getUpsellsExcluding(data.productId) : [];
  const downloadUrl =
    data?.product?.downloadEnvKey && process.env[data.product.downloadEnvKey];

  return (
    <Backdrop>
      <Header />
      <main className="section">
        <div className="container-narrow">
          <div className="card-parchment relative overflow-hidden p-8 text-center md:p-14">
            <div className="absolute -top-12 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full bg-gradient-to-b from-gold-300/60 to-transparent blur-2xl" aria-hidden />

            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-success/80 to-success shadow-glow-gold">
              <svg viewBox="0 0 32 32" width="40" height="40" aria-hidden>
                <path d="M8 16 l6 6 l12 -14" fill="none" stroke="#FFFDF8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            {data ? (
              <>
                <p className="text-2xs font-semibold uppercase tracking-[0.32em] text-emphasis-700">
                  Order #{data.orderRef}
                </p>
                <h1 className="mt-3 font-display text-5xl leading-[1.05] text-ink md:text-6xl">
                  Thank you, <span className="em-magenta italic">{data.firstName}!</span>
                </h1>
                <p className="mx-auto mt-4 max-w-md text-balance text-base text-body">
                  Your order is confirmed. A receipt and download link are on their way to{' '}
                  <strong>{data.email}</strong> — check your inbox in the next few minutes (and your
                  spam folder if it ghosts you).
                </p>

                <Filigree className="!my-7" />

                {downloadUrl ? (
                  <a href={downloadUrl} className="btn-gold text-base md:text-lg" target="_blank" rel="noopener noreferrer">
                    <Sparkle size={14} variant="starlight" /> Download your files →
                  </a>
                ) : (
                  <div className="rounded-card border border-emphasis-500/30 bg-emphasis-500/5 p-4 text-sm text-body">
                    Your download link will arrive by email shortly. If it doesn&rsquo;t reach you in
                    15 minutes, write to{' '}
                    <a href="mailto:support@neurospicymystic.com" className="font-semibold text-primary hover:underline">
                      support@neurospicymystic.com
                    </a>{' '}
                    and we&rsquo;ll send it manually.
                  </div>
                )}

                <p className="mt-5 text-2xs uppercase tracking-[0.22em] text-body/60">
                  Didn&rsquo;t get the email?{' '}
                  <a href="mailto:support@neurospicymystic.com?subject=Resend%20my%20download%20link" className="text-primary hover:underline">
                    Resend my email
                  </a>
                </p>

                <div className="mt-8 grid gap-3 text-left text-xs text-body md:grid-cols-3">
                  <div className="rounded-md border border-parchment-edge/60 p-3">
                    <p className="text-2xs font-semibold uppercase tracking-wider text-body/60">Total</p>
                    <p className="mt-1 font-display text-xl text-ink">${data.total} {data.currency}</p>
                  </div>
                  <div className="rounded-md border border-parchment-edge/60 p-3">
                    <p className="text-2xs font-semibold uppercase tracking-wider text-body/60">Product</p>
                    <p className="mt-1 font-medium text-ink">{data.product?.name ?? 'NeuroSpicy product'}</p>
                  </div>
                  <div className="rounded-md border border-parchment-edge/60 p-3">
                    <p className="text-2xs font-semibold uppercase tracking-wider text-body/60">Email</p>
                    <p className="mt-1 truncate font-mono text-xs text-ink">{data.email}</p>
                  </div>
                </div>
              </>
            ) : (
              <>
                <h1 className="mt-3 font-display text-4xl leading-[1.05] text-ink md:text-5xl">
                  Order confirmed.
                </h1>
                <p className="mx-auto mt-4 max-w-md text-balance text-base text-body">
                  We couldn&rsquo;t look up that session, but if you reached this page Stripe says it
                  worked. Check your inbox for the receipt and download link, or write to{' '}
                  <a href="mailto:support@neurospicymystic.com" className="text-primary">
                    support@neurospicymystic.com
                  </a>
                  .
                </p>
              </>
            )}
          </div>

          {upsells.length > 0 && (
            <div className="mt-12">
              <h2 className="mb-6 text-center font-display text-2xl text-starlight md:text-3xl">
                You may also love…
              </h2>
              <div className="grid gap-5 md:grid-cols-2">
                {upsells.map((p) => (
                  <div key={p.id} className="card-void p-6">
                    <div className="mb-3 flex items-center justify-between">
                      <span className="text-2xs font-semibold uppercase tracking-[0.18em] text-gold-300">
                        {p.badge ?? 'Coming soon'}
                      </span>
                      <span className="font-display text-xl text-grad-text">${p.priceUsd}</span>
                    </div>
                    <h3 className="font-display text-xl text-starlight">{p.name}</h3>
                    <p className="mt-1 text-sm text-moonlight/75">{p.tagline}</p>
                    <Link
                      href={`/?product=${p.id}#offer`}
                      className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-gold-200 hover:text-gold-50"
                    >
                      Learn more →
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-10 text-center">
            <Link href="/" className="btn-ghost">
              <Image src="/logo.png" alt="" width={20} height={20} className="rounded" />
              Back to NeuroSpicy Mystic
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </Backdrop>
  );
}
