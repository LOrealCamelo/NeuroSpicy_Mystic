'use client';

import { useState } from 'react';
import { Sparkle } from './atmosphere/Sparkle';

export function LeadMagnetForm() {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'ok' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');
    setError(null);
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ firstName, email, list: 'money_spell' }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? 'Something went sideways. Try again?');
      }
      setStatus('ok');
    } catch (err) {
      setStatus('error');
      setError(err instanceof Error ? err.message : 'Try again in a moment.');
    }
  }

  return (
    <section id="money-spell" className="section">
      <div className="container-narrow">
        <div className="card-parchment relative overflow-hidden p-8 md:p-12">
          <div className="absolute -top-10 -right-10 h-48 w-48 rounded-full bg-emphasis-200/40 blur-3xl" aria-hidden />
          <div className="absolute -bottom-10 -left-10 h-48 w-48 rounded-full bg-gold-100/60 blur-3xl" aria-hidden />

          <div className="relative grid items-center gap-8 md:grid-cols-[1.1fr_1fr]">
            <div>
              <span className="pill-gold mb-4">
                <Sparkle size={10} variant="gold" /> Free download
              </span>
              <h2 className="font-display text-4xl leading-[1.05] text-ink md:text-5xl">
                Get the <span className="em-magenta italic">Money Spell</span>
                <br />
                Manifestation Guide.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-body">
                Real magic for real abundance — written by L&rsquo;Oreal. Drop your name and email and the PDF arrives in your inbox in under a minute.
              </p>
            </div>

            <form onSubmit={onSubmit} className="space-y-3">
              {status === 'ok' ? (
                <div className="rounded-card border border-success/30 bg-white/70 p-6 text-center">
                  <Sparkle size={20} variant="gold" className="mx-auto mb-2" />
                  <p className="font-display text-2xl text-ink">It&rsquo;s on its way.</p>
                  <p className="mt-2 text-sm text-body">Check your inbox in a minute or two — and your spam folder if it ghosts you.</p>
                </div>
              ) : (
                <>
                  <label className="block">
                    <span className="text-2xs font-semibold uppercase tracking-[0.18em] text-body">First name</span>
                    <input
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                      placeholder="L’Oreal"
                      className="mt-1 w-full rounded-pill border border-parchment-edge bg-white/60 px-5 py-3 text-ink placeholder:text-body/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                    />
                  </label>
                  <label className="block">
                    <span className="text-2xs font-semibold uppercase tracking-[0.18em] text-body">Email</span>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="you@yourbusiness.com"
                      className="mt-1 w-full rounded-pill border border-parchment-edge bg-white/60 px-5 py-3 text-ink placeholder:text-body/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                    />
                  </label>
                  <button type="submit" disabled={status === 'loading'} className="btn-gold w-full">
                    {status === 'loading' ? 'Casting…' : 'Send me the guide ✦'}
                  </button>
                  {error && <p className="text-center text-sm text-danger">{error}</p>}
                  <p className="text-center text-2xs text-body/70">
                    No spam, ever. Unsubscribe in one tap.
                  </p>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
