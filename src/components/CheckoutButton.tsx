'use client';

import { useState } from 'react';
import { getProductById } from '@/lib/products';

type Props = {
  productId: string;
  children: React.ReactNode;
  className?: string;
  couponCode?: string;
};

export function CheckoutButton({ productId, children, className = 'btn-primary', couponCode }: Props) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function go() {
    setLoading(true);
    setError(null);

    // Path A — Stripe Payment Link is set: redirect directly. Faster, no API.
    const product = getProductById(productId);
    if (product?.paymentLinkUrl) {
      window.location.href = product.paymentLinkUrl;
      return;
    }

    // Path B — fall back to programmatic Checkout Session via /api/checkout.
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ productId, couponCode }),
      });
      const data = await res.json();
      if (!res.ok || !data.url) throw new Error(data.error ?? 'Checkout error');
      window.location.href = data.url;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Try again');
      setLoading(false);
    }
  }

  return (
    <>
      <button onClick={go} disabled={loading} className={className}>
        {loading ? 'Opening checkout…' : children}
      </button>
      {error && <p className="mt-2 text-sm text-danger">{error}</p>}
    </>
  );
}
