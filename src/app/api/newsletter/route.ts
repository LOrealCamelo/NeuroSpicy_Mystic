import { NextRequest, NextResponse } from 'next/server';
import { subscribe, type ListSlug } from '@/lib/mailchimp';
import { mailer, FROM, SUPPORT_EMAIL } from '@/lib/mailer';

export const runtime = 'nodejs';

const VALID: ListSlug[] = ['newsletter', 'money_spell'];

export async function POST(req: NextRequest) {
  try {
    const { email, firstName, list = 'newsletter' } = await req.json();
    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return NextResponse.json({ error: 'Valid email is required' }, { status: 400 });
    }
    const slug: ListSlug = (VALID as string[]).includes(list) ? (list as ListSlug) : 'newsletter';

    await subscribe(slug, email, firstName);

    if (slug === 'money_spell' && process.env.MONEY_SPELL_GUIDE_URL) {
      try {
        await mailer.sendMail({
          from: FROM,
          to: email,
          replyTo: SUPPORT_EMAIL,
          subject: '\u{1F319} Your free Money Spell Manifestation Guide',
          html: `
            <p>Hi ${firstName ?? 'beautiful'},</p>
            <p>Your free <strong>Money Spell Manifestation Guide</strong> is ready — real magic for real abundance.</p>
            <p><a href="${process.env.MONEY_SPELL_GUIDE_URL}" style="background:#6B46C1;color:#fff;padding:12px 24px;border-radius:999px;text-decoration:none;display:inline-block">Download the guide</a></p>
            <p>If the magic resonates, you’ll love the full <strong>NeuroSpicy Witch Vault</strong> — over 2,000 rebrandable PLR templates, lifetime access, 100% profit on every resale.</p>
            <p>Cheering you on always,<br/>L’Oreal · NeuroSpicy Mystic</p>
          `,
        });
      } catch (err) {
        console.error('[newsletter] money_spell email send failed', err);
      }
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[newsletter] error', err);
    const message = err instanceof Error ? err.message : 'Unknown error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
