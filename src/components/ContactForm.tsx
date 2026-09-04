"use client";

import { useState } from "react";

const inputClass =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-navy-950 placeholder:text-slate-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Demo form: replace with your form backend / API route / CRM integration.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-primary-200 bg-primary-50 p-8 text-center">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary-100 text-primary-700">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </span>
        <h3 className="mt-4 font-display text-xl font-bold text-navy-950">Request received!</h3>
        <p className="mt-2 text-sm text-slate-600">
          Thank you — our team will contact you within one business day to confirm
          your appointment time.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" aria-label="Appointment request form">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-navy-950">
            Full Name
          </label>
          <input id="name" name="name" type="text" required placeholder="Jane Doe" className={inputClass} autoComplete="name" />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-navy-950">
            Phone
          </label>
          <input id="phone" name="phone" type="tel" required placeholder="(555) 000-0000" className={inputClass} autoComplete="tel" />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-navy-950">
            Email
          </label>
          <input id="email" name="email" type="email" required placeholder="jane@email.com" className={inputClass} autoComplete="email" />
        </div>
        <div>
          <label htmlFor="service" className="block text-sm font-semibold text-navy-950">
            Service of Interest
          </label>
          <select id="service" name="service" className={inputClass} defaultValue="">
            <option value="" disabled>
              Select a service…
            </option>
            <option value="spinal-adjustments">Spinal Adjustments</option>
            <option value="sports-injury-rehab">Sports Injury Rehab</option>
            <option value="headache-migraine-relief">Headache & Migraine Relief</option>
            <option value="prenatal-pediatric-care">Prenatal & Pediatric Care</option>
            <option value="posture-corrective-care">Posture Corrective Care</option>
            <option value="wellness-maintenance">Wellness & Maintenance Care</option>
            <option value="new-patient-exam">New Patient Exam</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-navy-950">
          How can we help?
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          placeholder="Tell us briefly about your symptoms or goals…"
          className={inputClass}
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-full bg-primary-600 px-8 py-4 text-base font-bold text-white shadow-lg shadow-primary-600/25 transition-all hover:-translate-y-0.5 hover:bg-primary-700 hover:shadow-xl"
      >
        Request My Appointment
      </button>
      <p className="text-center text-xs text-slate-500">
        We respect your privacy. Your information is never shared.
      </p>
    </form>
  );
}
