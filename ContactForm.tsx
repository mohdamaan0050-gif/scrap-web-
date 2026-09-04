'use client';

import { useState } from 'react';
import { Loader2 } from 'lucide-react';

type Status = 'idle' | 'sending' | 'sent' | 'error';

const wasteTypes = [
  'Metal scrap (ferrous or non-ferrous)',
  'Paper, cartons and packaging',
  'Plastic, film and drums',
  'E-waste',
  'Mixed plant waste on contract',
  'Something else',
];

const field =
  'w-full rounded-data border border-steel-faint bg-white px-4 py-3 text-forest placeholder:text-steel-light focus:border-brand';
const label = 'block text-sm font-semibold text-forest';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    setError('');

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const body = await res.json();

      if (!res.ok) {
        setError(body?.message ?? 'The enquiry did not go through. Try again.');
        setStatus('error');
        return;
      }

      form.reset();
      setStatus('sent');
    } catch {
      setError(
        'We could not reach the server. Check your connection, or call us on 8868061839.',
      );
      setStatus('error');
    }
  }

  if (status === 'sent') {
    return (
      <div className="rounded-data border border-brand/30 bg-brand/5 p-8">
        <h3 className="font-display text-display-sm text-forest">
          Enquiry received.
        </h3>
        <p className="mt-3 max-w-prose leading-relaxed text-steel">
          We will call you back within one working day with an indicative rate.
          For anything urgent, ring 8868061839 directly.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-6 text-sm font-semibold text-brand underline underline-offset-4"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate={false} className="grid gap-5 sm:grid-cols-2">
      <div>
        <label className={label} htmlFor="name">
          Your name
        </label>
        <input id="name" name="name" required autoComplete="name" className={`${field} mt-2`} />
      </div>

      <div>
        <label className={label} htmlFor="company">
          Company
        </label>
        <input id="company" name="company" autoComplete="organization" className={`${field} mt-2`} />
      </div>

      <div>
        <label className={label} htmlFor="phone">
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          inputMode="tel"
          autoComplete="tel"
          pattern="[0-9+\s-]{8,15}"
          className={`${field} mt-2 tabular`}
        />
      </div>

      <div>
        <label className={label} htmlFor="email">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          className={`${field} mt-2`}
        />
      </div>

      <div className="sm:col-span-2">
        <label className={label} htmlFor="wasteType">
          What do you need cleared?
        </label>
        <select id="wasteType" name="wasteType" className={`${field} mt-2`} defaultValue={wasteTypes[0]}>
          {wasteTypes.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </div>

      <div className="sm:col-span-2">
        <label className={label} htmlFor="message">
          Quantity, location and anything else we should know
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className={`${field} mt-2 resize-y`}
          placeholder="About 8 MT of MS turnings at our Roorkee unit, needs lifting every fortnight."
        />
      </div>

      {/* Honeypot: hidden from people, filled by bots. */}
      <div className="hidden" aria-hidden>
        <label htmlFor="website">Leave this empty</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      {status === 'error' && (
        <p role="alert" className="sm:col-span-2 rounded-data bg-red-50 px-4 py-3 text-sm text-red-800">
          {error}
        </p>
      )}

      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="inline-flex items-center gap-2 rounded-data bg-brand px-7 py-3.5 font-semibold text-white transition-colors hover:bg-brand-dark disabled:opacity-60"
        >
          {status === 'sending' && <Loader2 aria-hidden className="h-4 w-4 animate-spin" />}
          {status === 'sending' ? 'Sending' : 'Send enquiry'}
        </button>
        <p className="mt-3 text-sm text-steel-light">
          We reply within one working day. No mailing list, no forwarding your
          details.
        </p>
      </div>
    </form>
  );
}
