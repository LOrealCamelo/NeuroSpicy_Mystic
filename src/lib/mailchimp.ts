import mailchimp from '@mailchimp/mailchimp_marketing';

const apiKey = process.env.MAILCHIMP_API_KEY;
const server = process.env.MAILCHIMP_SERVER_PREFIX ?? 'us1';

if (apiKey) {
  mailchimp.setConfig({ apiKey, server });
}

export type ListSlug = 'newsletter' | 'money_spell';

export function getListId(slug: ListSlug): string | undefined {
  if (slug === 'money_spell') return process.env.MAILCHIMP_LIST_ID_MONEY_SPELL;
  return process.env.MAILCHIMP_LIST_ID_NEWSLETTER;
}

export async function subscribe(slug: ListSlug, email: string, firstName?: string) {
  const listId = getListId(slug);
  if (!listId || !apiKey) {
    console.warn('[mailchimp] missing config — skipping subscribe', { slug, hasKey: !!apiKey, hasList: !!listId });
    return { skipped: true };
  }

  await mailchimp.lists.addListMember(listId, {
    email_address: email,
    status: 'subscribed',
    merge_fields: firstName ? { FNAME: firstName } : undefined,
    tags: [slug === 'money_spell' ? 'money_spell_lead_magnet' : 'newsletter_signup'],
  });
  return { skipped: false };
}
