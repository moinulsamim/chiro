import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact & Book an Appointment",
  description: `Book your chiropractic appointment at ${site.name} in ${site.address.city}, ${site.address.state}. Call ${site.phone} or request an appointment online. Same-week availability.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-linear-to-b from-primary-50 to-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
            <a href="/" className="hover:text-primary-600">Home</a>
            <span className="mx-2" aria-hidden="true">/</span>
            <span className="font-semibold text-navy-950">Contact</span>
          </nav>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-extrabold tracking-tight text-navy-950 sm:text-5xl">
            Book Your Appointment
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            Ready to feel your best? Request an appointment below and we&apos;ll
            confirm your time within one business day.
          </p>
        </div>
      </section>

      <section className="bg-white pb-20 lg:pb-28" aria-label="Contact details and appointment form">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.2fr] lg:gap-16 lg:px-8">
          <div>
            <h2 className="font-display text-2xl font-extrabold text-navy-950">Get in Touch</h2>
            <dl className="mt-8 space-y-7">
              <div className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-100 text-primary-700">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </span>
                <div>
                  <dt className="text-sm font-bold text-navy-950">Phone</dt>
                  <dd className="mt-1">
                    <a href={site.phoneHref} className="text-sm text-slate-600 hover:text-primary-600">
                      {site.phone}
                    </a>
                  </dd>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-100 text-primary-700">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-10 6L2 7" />
                  </svg>
                </span>
                <div>
                  <dt className="text-sm font-bold text-navy-950">Email</dt>
                  <dd className="mt-1">
                    <a href={`mailto:${site.email}`} className="text-sm text-slate-600 hover:text-primary-600">
                      {site.email}
                    </a>
                  </dd>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-100 text-primary-700">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <div>
                  <dt className="text-sm font-bold text-navy-950">Visit Us</dt>
                  <dd className="mt-1 text-sm text-slate-600">
                    {site.address.street}<br />
                    {site.address.city}, {site.address.state} {site.address.zip}
                  </dd>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-100 text-primary-700">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                </span>
                <div>
                  <dt className="text-sm font-bold text-navy-950">Office Hours</dt>
                  <dd className="mt-1 space-y-0.5 text-sm text-slate-600">
                    {site.hours.map((h) => (
                      <p key={h.days}>
                        <span className="font-semibold text-navy-950">{h.days}:</span> {h.time}
                      </p>
                    ))}
                  </dd>
                </div>
              </div>
            </dl>
          </div>

          <div className="rounded-3xl border border-slate-100 bg-slate-50/60 p-6 shadow-sm sm:p-8">
            <h2 className="font-display text-2xl font-extrabold text-navy-950">Request an Appointment</h2>
            <p className="mt-2 mb-6 text-sm text-slate-600">
              Fill out the form and our front desk will call you to confirm.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}

