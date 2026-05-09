import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import { getProductById } from '@/lib/products';

export const runtime = 'nodejs';

export async function POST(req: NextRequest) {
  try {
    const { productId, couponCode } = await req.json();
    if (!productId || typeof productId !== 'string') {
      return NextResponse.json({ error: 'productId is required' }, { status: 400 });
    }

    const product = getProductById(productId);
    if (!product || !product.available) {
      return NextResponse.json({ error: 'Product not available' }, { status: 404 });
    }
    if (!product.stripePriceId) {
      return NextResponse.json({ error: 'Stripe price not configured for product' }, { status: 500 });
    }

    const baseUrl = process.env.NEXT_PUBLIC_URL ?? 'http://localhost:3000';

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card', 'affirm', 'afterpay_clearpay', 'klarna'],
      line_items: [{ price: product.stripePriceId, quantity: 1 }],
      success_url: `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/?cancelled=1`,
      allow_promotion_codes: true,
      discounts: couponCode ? [{ coupon: couponCode }] : undefined,
      metadata: {
        product: product.id,
        source: 'neurospicymystic_landing',
      },
      customer_creation: 'always',
    });

    return NextResponse.json({ id: session.id, url: session.url });
  } catch (err) {
    console.error('[checkout] error', err);
    const message = err instanceof Error ? err.message : 'Unknown error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
