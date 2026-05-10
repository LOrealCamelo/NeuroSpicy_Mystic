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

    // Best-effort marketing-list subscribe (no-op if Mailchimp/Kit/etc. not configured)
    await subscribe(slug, email, firstName).catch((err) => {
      console.error('[newsletter] subscribe failed (continuing)', err);
    });

    if (slug === 'money_spell') {
      const baseUrl = process.env.NEXT_PUBLIC_URL ?? 'https://neurospicymystic.com';
      const guideUrl = `${baseUrl}/guides/money-spell`;
      const downloadUrl = process.env.MONEY_SPELL_GUIDE_URL;
      const adminEmail = process.env.SMTP_USER ?? 'info@neurospicymystic.com';

      const html = renderMoneySpellEmail({
        firstName: firstName ?? 'beautiful',
        guideUrl,
        downloadUrl,
        supportEmail: SUPPORT_EMAIL,
      });

      try {
        await mailer.sendMail({
          from: FROM,
          to: email,
          bcc: adminEmail,
          replyTo: SUPPORT_EMAIL,
          subject: '\u{1F319} Your free Money Spell Manifestation Guide is ready',
          html,
        });
        return NextResponse.json({ ok: true, delivered: true });
      } catch (err) {
        console.error('[newsletter] money_spell email send failed', err);
        // Notify the admin separately so L'Oreal can manually follow up
        try {
          await mailer.sendMail({
            from: FROM,
            to: adminEmail,
            subject: 'NeuroSpicy: Money Spell signup — email delivery failed',
            html: `
              <p>A new signup just came in but the auto-email failed to send.</p>
              <ul>
                <li><strong>Email:</strong> ${escapeHtml(email)}</li>
                <li><strong>First name:</strong> ${escapeHtml(firstName ?? '(none)')}</li>
              </ul>
              <p>Please send the guide manually to ${escapeHtml(email)}.</p>
            `,
          });
        } catch (err2) {
          console.error('[newsletter] admin notification failed too', err2);
        }
        return NextResponse.json({ ok: true, delivered: false, message: 'Saved your email — check your inbox in a few minutes, and write to support if it does not arrive.' });
      }
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[newsletter] error', err);
    const message = err instanceof Error ? err.message : 'Unknown error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function renderMoneySpellEmail({
  firstName,
  guideUrl,
  downloadUrl,
  supportEmail,
}: {
  firstName: string;
  guideUrl: string;
  downloadUrl?: string;
  supportEmail: string;
}): string {
  const safeName = escapeHtml(firstName);
  return `
    <div style="font-family: system-ui, -apple-system, 'Segoe UI', Helvetica, Arial, sans-serif; color: #2D1B47; max-width: 560px; margin: 0 auto;">
      <h1 style="font-family: Georgia, 'Cormorant Garamond', serif; font-size: 28px; line-height: 1.2; color: #2D1B47; margin: 0 0 12px;">
        \u{2728} Hi ${safeName},
      </h1>
      <p style="font-size: 16px; line-height: 1.55; color: #4B3F6A;">
        Your free <strong>Money Spell Manifestation Guide</strong> is ready &mdash;
        real magic for real abundance.
      </p>

      <p style="font-size: 16px; line-height: 1.55; color: #4B3F6A;">Two ways to read it:</p>

      <table cellpadding="0" cellspacing="0" border="0" style="margin: 18px 0;">
        <tr>
          <td style="padding-right: 12px;">
            <a href="${guideUrl}" style="display:inline-block;background:#5B21B6;color:#FFFDF8;padding:14px 24px;border-radius:999px;text-decoration:none;font-weight:600;border:1px solid #D4AF37;">
              Read online &rarr;
            </a>
          </td>
          ${
            downloadUrl
              ? `<td>
                   <a href="${downloadUrl}" style="display:inline-block;background:linear-gradient(135deg,#E0C766 0%,#D4AF37 100%);color:#2D1B47;padding:14px 24px;border-radius:999px;text-decoration:none;font-weight:600;">
                     Download PDF
                   </a>
                 </td>`
              : ''
          }
        </tr>
      </table>

      <p style="font-size: 14px; line-height: 1.55; color: #4B3F6A;">
        Save the link &mdash; you can come back to the page anytime, no login required.
      </p>

      <hr style="border: none; border-top: 1px solid #EFE0C5; margin: 28px 0;">

      <p style="font-size: 15px; line-height: 1.55; color: #4B3F6A;">
        If the magic resonates, you&rsquo;ll love the full
        <strong>NeuroSpicy Witch Vault</strong> &mdash; 2,000+ rebrandable templates,
        lifetime access, 100% profit on every resale.
      </p>

      <p style="font-size: 14px; line-height: 1.55; color: #4B3F6A;">
        Cheering you on always,<br>
        L&rsquo;Oreal &middot; NeuroSpicy Mystic
      </p>

      <p style="font-size: 11px; line-height: 1.4; color: #4B3F6A; margin-top: 28px; opacity: 0.7;">
        Questions? Reply to this email or write to <a href="mailto:${supportEmail}" style="color:#5B21B6;">${supportEmail}</a>.
      </p>
    </div>
  `;
}
