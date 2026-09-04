import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

type Payload = {
  name?: string;
  company?: string;
  phone?: string;
  email?: string;
  wasteType?: string;
  message?: string;
  website?: string; // honeypot
};

const clean = (v: unknown) => (typeof v === 'string' ? v.trim().slice(0, 2000) : '');

export async function POST(request: Request) {
  let body: Payload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { message: 'The enquiry could not be read. Send it again.' },
      { status: 400 },
    );
  }

  // A filled honeypot means a bot. Return 200 so it does not retry.
  if (clean(body.website)) {
    return NextResponse.json({ ok: true });
  }

  const name = clean(body.name);
  const phone = clean(body.phone);
  const message = clean(body.message);

  if (!name || !phone || !message) {
    return NextResponse.json(
      { message: 'Name, phone and a short description are needed before we can send this.' },
      { status: 422 },
    );
  }

  if (!/^[0-9+\s-]{8,15}$/.test(phone)) {
    return NextResponse.json(
      { message: 'That phone number does not look right. Check it and send again.' },
      { status: 422 },
    );
  }

  const enquiry = {
    name,
    company: clean(body.company),
    phone,
    email: clean(body.email),
    wasteType: clean(body.wasteType),
    message,
    receivedAt: new Date().toISOString(),
  };

  const apiKey = process.env.RESEND_API_KEY;

  // No mail provider configured: log it so nothing is silently lost in dev.
  if (!apiKey) {
    console.info('[contact enquiry]', enquiry);
    return NextResponse.json({ ok: true });
  }

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL,
        to: [process.env.CONTACT_TO_EMAIL],
        reply_to: enquiry.email || undefined,
        subject: `Website enquiry — ${enquiry.name}${enquiry.company ? ` (${enquiry.company})` : ''}`,
        text: [
          `Name: ${enquiry.name}`,
          `Company: ${enquiry.company || '—'}`,
          `Phone: ${enquiry.phone}`,
          `Email: ${enquiry.email || '—'}`,
          `Waste type: ${enquiry.wasteType || '—'}`,
          '',
          enquiry.message,
        ].join('\n'),
      }),
    });

    if (!res.ok) throw new Error(`Mail provider returned ${res.status}`);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[contact enquiry failed]', err);
    return NextResponse.json(
      { message: 'The enquiry did not send. Please call 8868061839 instead.' },
      { status: 502 },
    );
  }
}
