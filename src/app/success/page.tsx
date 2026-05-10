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
    (data?.product?.downloadEnvKey && process.env[data.product.downloadEnvKey]) ||
    process.env.WITCH_VAULT_DOWNLOAD_URL;

  return (
    <Backdrop>
      <Header />
      <main className="section">
        <div className="container-narrow space-y-10">
          {/* === Top thank-you card === */}
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
                  Welcome to the vault, <span className="em-magenta italic">{data.firstName}.</span>
                </h1>
                <p className="mx-auto mt-4 max-w-md text-balance text-base text-body">
                  Your order is confirmed. A receipt and download link are on their way to{' '}
                  <strong>{data.email}</strong> — and the entire vault is right below.
                </p>

                <Filigree className="!my-7" />

                {downloadUrl ? (
                  <a href={downloadUrl} className="btn-gold text-base md:text-lg" target="_blank" rel="noopener noreferrer">
                    <Sparkle size={14} variant="starlight" /> Open your Google Drive vault →
                  </a>
                ) : (
                  <div className="rounded-card border border-emphasis-500/30 bg-emphasis-500/5 p-4 text-sm text-body">
                    Your Google Drive link will arrive by email shortly. If it doesn&rsquo;t reach
                    you in 15 minutes, write to{' '}
                    <a href="mailto:support@neurospicymystic.com" className="font-semibold text-primary hover:underline">
                      support@neurospicymystic.com
                    </a>
                    .
                  </div>
                )}

                <p className="mt-5 text-2xs uppercase tracking-[0.22em] text-body/60">
                  Didn&rsquo;t get the email?{' '}
                  <a
                    href="mailto:support@neurospicymystic.com?subject=Resend%20my%20download%20link"
                    className="text-primary hover:underline"
                  >
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
                  We couldn&rsquo;t look up that session, but if you reached this page Stripe says
                  it worked. Check your inbox for your receipt and Google Drive link, or write to{' '}
                  <a href="mailto:support@neurospicymystic.com" className="text-primary">
                    support@neurospicymystic.com
                  </a>
                  .
                </p>
              </>
            )}
          </div>

          {/* === Quick Start guide === */}
          {data && (
            <div className="card-parchment p-8 md:p-12">
              <p className="label-eyebrow !text-emphasis-700 mb-3">Quick Start</p>
              <h2 className="font-display text-3xl text-ink md:text-4xl">
                How to use your <span className="em-magenta italic">vault.</span>
              </h2>

              <ol className="mt-8 grid gap-6 md:grid-cols-3">
                {[
                  {
                    n: '01',
                    title: 'Pick a template',
                    body: 'Open the Google Drive folder above. Browse the planners and journals — every file is named so you know what you&rsquo;re grabbing.',
                  },
                  {
                    n: '02',
                    title: 'Customize in Canva',
                    body: 'Click any Canva template link, then "Use this template." It saves to your Canva account. Swap fonts, colors, and your logo. Save.',
                  },
                  {
                    n: '03',
                    title: 'Export & sell',
                    body: 'Download as PDF. List on Etsy, TikTok Shop, Stan, Shopify — anywhere. Keep 100% of the sale.',
                  },
                ].map((step) => (
                  <li key={step.n} className="rounded-card border border-parchment-edge/60 bg-white/40 p-5">
                    <span className="font-display text-3xl text-grad-text">{step.n}</span>
                    <h3 className="mt-2 font-display text-lg text-ink">{step.title}</h3>
                    <p
                      className="mt-2 text-sm text-body"
                      dangerouslySetInnerHTML={{ __html: step.body }}
                    />
                  </li>
                ))}
              </ol>

              <p className="mt-8 rounded-card border border-gold/30 bg-gold/5 p-4 text-sm text-body">
                <strong className="text-ink">Skipping Canva?</strong> The same Drive folder
                includes pre-exported PDFs of every template — ready to print or list as-is.
              </p>

              <details className="mt-6 rounded-card border border-parchment-edge/60 bg-white/30 p-4 text-sm text-body">
                <summary className="cursor-pointer font-semibold text-ink">
                  Trouble opening anything?
                </summary>
                <ul className="mt-3 space-y-1.5">
                  <li>• Open the Drive folder on a computer first — phone browsers occasionally choke on the folder view.</li>
                  <li>• Canva won&rsquo;t load? Sign into your Canva account in the same browser, then click the template link again.</li>
                  <li>• Zip won&rsquo;t open? Use the built-in Windows extractor, the Mac Archive Utility, or a free tool like 7-Zip / The Unarchiver.</li>
                  <li>• Anything else: <a className="text-primary hover:underline" href="mailto:support@neurospicymystic.com">support@neurospicymystic.com</a> — real mystic on the other end.</li>
                </ul>
              </details>
            </div>
          )}

          {/* === Resell rights === */}
          {data && (
            <div className="card-void p-8 md:p-12">
              <p className="label-eyebrow !text-gold-300 mb-3">Your Master Resell Rights</p>
              <h2 className="font-display text-3xl text-starlight md:text-4xl">
                The <span className="em-gold italic">mystic fine print.</span>
              </h2>
              <p className="mt-3 max-w-2xl text-sm text-moonlight/80">
                Because the vault includes Master Resell Rights, you can rebrand and sell every
                template as your own — but a few rules keep the magic legit for everyone:
              </p>

              <div className="mt-8 grid gap-5 md:grid-cols-2">
                <div className="rounded-card border border-success/30 bg-success/5 p-5">
                  <h3 className="font-display text-xl text-starlight">
                    <span className="text-success">✓</span> You CAN
                  </h3>
                  <ul className="mt-4 space-y-2 text-sm text-moonlight/85">
                    {[
                      'Edit, rebrand, and sell every template as your own digital products',
                      'Bundle them into your own courses, coaching programs, or membership tiers',
                      'Use them as lead magnets or free bonuses',
                      'Print them or use them in client projects',
                      'Set your own price (above the floor below)',
                    ].map((p) => (
                      <li key={p} className="flex gap-2">
                        <span className="mt-1 text-success">✓</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-card border border-danger/30 bg-danger/5 p-5">
                  <h3 className="font-display text-xl text-starlight">
                    <span className="text-danger">✕</span> You CAN&rsquo;T
                  </h3>
                  <ul className="mt-4 space-y-2 text-sm text-moonlight/85">
                    {[
                      'Pass the Master Resell Rights on to your customers (they buy the finished product — not the rights to resell)',
                      'List the whole bundle as "rebrandable templates" or "resell rights" on Whop, Beacons, or template marketplaces',
                      'Use NeuroSpicy Mystic mockups, ad creative, or sales copy in your own listings',
                      'Upload the templates to free Facebook groups, swap groups, or Drive folders shared publicly',
                      'Sell individual templates under $6, or the full bundle under $34',
                      'Resell or share the templates as Canva links — only as finished PDFs or printed products',
                    ].map((p) => (
                      <li key={p} className="flex gap-2">
                        <span className="mt-1 text-danger">✕</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <p className="mt-6 rounded-card border border-emphasis-500/30 bg-emphasis-500/5 p-4 text-sm text-moonlight/80">
                <strong className="text-emphasis-200">Heads up:</strong> Reselling, sharing, or
                redistributing this vault outside these terms is a violation of the license. We
                enforce it — repeat offenders lose access to the vault and any future updates,
                and may face further legal action depending on the breach.
              </p>
            </div>
          )}

          {/* === Upsell carousel === */}
          {upsells.length > 0 && (
            <div>
              <h2 className="mb-6 text-center font-display text-2xl text-starlight md:text-3xl">
                You may also love&hellip;
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

          {/* === Back home === */}
          <div className="text-center">
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
