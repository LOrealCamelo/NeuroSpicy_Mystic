import { NextRequest, NextResponse } from 'next/server';
import type Stripe from 'stripe';
import { stripe } from '@/lib/stripe';
import { getProductById } from '@/lib/products';
import { mailer, FROM, SUPPORT_EMAIL } from '@/lib/mailer';

export const runtime = 'nodejs';

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

export async function POST(req: NextRequest) {
  const sig = req.headers.get('stripe-signature');
  if (!sig || !webhookSecret) {
    return NextResponse.json({ error: 'Missing signature or webhook secret' }, { status: 400 });
  }

  const rawBody = await req.text();

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(rawBody, sig, webhookSecret);
  } catch (err) {
    const message = err instanceof Error ? err.message : 'invalid signature';
    return NextResponse.json({ error: `Webhook Error: ${message}` }, { status: 400 });
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;
    await fulfill(session);
  }

  return NextResponse.json({ received: true });
}

async function fulfill(session: Stripe.Checkout.Session) {
  const productId = (session.metadata?.product ?? '').toString();
  const product = getProductById(productId);
  const customerEmail = session.customer_details?.email ?? session.customer_email ?? undefined;
  const firstName = (session.customer_details?.name ?? '').split(' ')[0] || 'friend';

  if (!product || !customerEmail) {
    console.warn('[webhook] missing product or email', { productId, customerEmail });
    return;
  }

  const downloadUrl = product.downloadEnvKey ? process.env[product.downloadEnvKey] : undefined;

  await mailer.sendMail({
    from: FROM,
    to: customerEmail,
    replyTo: SUPPORT_EMAIL,
    subject: `✨ Your ${product.name} is ready`,
    html: `
      <p>Hi ${firstName},</p>
      <p>Thank you for grabbing the <strong>${product.name}</strong> — your divinely distracted goddess era starts now.</p>
      ${downloadUrl ? `<p><a href="${downloadUrl}" style="background:#6B46C1;color:#fff;padding:12px 24px;border-radius:999px;text-decoration:none;display:inline-block">Download your files</a></p>` : '<p>Your download link will arrive in a follow-up email shortly.</p>'}
      <p>Need anything? Reply to this email or write to ${SUPPORT_EMAIL}.</p>
      <p>Cheering you on always,<br/>L’Oreal · NeuroSpicy Mystic</p>
    `,
  });
}
