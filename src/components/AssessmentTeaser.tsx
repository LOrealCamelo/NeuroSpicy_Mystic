'use client';

import { useState } from 'react';
import { Sparkle } from './atmosphere/Sparkle';

export function AssessmentTeaser() {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'ok' | 'error'>('idle');

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ firstName, email, list: 'newsletter' }),
      });
      if (!res.ok) throw new Error();
      setStatus('ok');
    } catch {
      setStatus('error');
    }
  }

  return (
    <section id="assessment" className="section">
      <div className="container-narrow">
        <div className="card-parchment relative overflow-hidden p-8 md:p-12">
          <div className="absolute -top-16 -right-16 h-56 w-56 rounded-full bg-emphasis-200/40 blur-3xl" aria-hidden />
          <div className="absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-primary-200/50 blur-3xl" aria-hidden />

          <div className="relative grid items-center gap-8 md:grid-cols-[1.1fr_1fr]">
            <div>
              <span className="pill-magenta !text-emphasis-700 !border-emphasis-500/40 !bg-emphasis-500/10 mb-4">
                <Sparkle size={10} variant="magenta" /> Coming soon
              </span>
              <h2 className="font-display text-4xl leading-[1.05] text-ink md:text-5xl">
                Wonder if you might be on the{' '}
                <span className="em-magenta italic">spectrum?</span>
              </h2>
              <p className="mt-4 text-base leading-relaxed text-body">
                We&rsquo;re building two short, AuDHD-friendly self-assessments — one for ADHD,
                one for Autism — with a doodle-style intro video that explains <em>masking</em>,{' '}
                <em>stimming</em>, and how symptoms look different in women. Cute illustrations.
                Real, validating language. No medical jargon.
              </p>
              <p className="mt-3 text-sm text-body/80">
                <strong>Important:</strong> the assessment isn&rsquo;t a diagnosis and isn&rsquo;t
                medical advice. It&rsquo;s a starting point for the conversation you have next
                with your doctor or a qualified specialist.
              </p>
            </div>

            <form onSubmit={onSubmit} className="space-y-3">
              {status === 'ok' ? (
                <div className="rounded-card border border-success/30 bg-white/70 p-6 text-center">
                  <Sparkle size={22} variant="gold" className="mx-auto mb-2" />
                  <p className="font-display text-2xl text-ink">You&rsquo;re on the list.</p>
                  <p className="mt-2 text-sm text-body">
                    We&rsquo;ll email you the moment the assessments go live.
                  </p>
                </div>
              ) : (
                <>
                  <p className="text-2xs font-semibold uppercase tracking-[0.18em] text-emphasis-700">
                    Notify me when it launches
                  </p>
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
                  <label className="flex items-start gap-2 text-2xs text-body/80">
                    <input type="checkbox" defaultChecked className="mt-0.5 accent-primary" />
                    <span>
                      Yes, send me marketing emails about new neurodivergent-friendly products and early access drops. (Unsubscribe anytime — see <a href="/privacy" className="underline">Privacy Policy</a>.)
                    </span>
                  </label>
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="btn-primary w-full"
                  >
                    {status === 'loading' ? 'Saving…' : 'Notify me ✦'}
                  </button>
                  {status === 'error' && (
                    <p className="text-center text-sm text-danger">Try again in a moment.</p>
                  )}
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
