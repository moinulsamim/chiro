import { faqs } from "@/lib/data";
import JsonLd from "./JsonLd";

export default function FAQ() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <section className="bg-white py-20 lg:py-28" aria-labelledby="faq-heading">
      <JsonLd data={faqJsonLd} />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-primary-600">FAQ</p>
          <h2 id="faq-heading" className="mt-3 font-display text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl">
            Questions? We've Got Answers.
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Everything you need to know before your first visit.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, i) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-slate-200 bg-slate-50/50 open:border-primary-200 open:bg-white open:shadow-lg open:shadow-primary-900/5"
              open={i === 0}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-bold text-navy-950 [&::-webkit-details-marker]:hidden">
                <h3 className="text-base">{faq.question}</h3>
                <svg className="shrink-0 text-primary-600 transition-transform group-open:rotate-180" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </summary>
              <p className="px-5 pb-5 text-sm leading-relaxed text-slate-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
