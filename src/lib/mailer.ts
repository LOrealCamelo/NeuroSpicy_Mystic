import nodemailer from 'nodemailer';

const host = process.env.SMTP_HOST ?? 'smtp.gmail.com';
const port = Number(process.env.SMTP_PORT ?? 465);
const user = process.env.SMTP_USER;
const pass = process.env.SMTP_PASS;

export const mailer = nodemailer.createTransport({
  host,
  port,
  secure: port === 465,
  auth: user && pass ? { user, pass } : undefined,
});

export const FROM = `${process.env.SMTP_FROM_NAME ?? 'NeuroSpicy Mystic'} <${user ?? 'info@neurospicymystic.com'}>`;
export const SUPPORT_EMAIL = process.env.SUPPORT_EMAIL ?? 'support@neurospicymystic.com';
