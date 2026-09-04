const steps = [
  {
    number: "01",
    title: "Book Your Visit",
    text: "Call us or book online in under a minute. Same-week appointments guaranteed — no referral needed.",
  },
  {
    number: "02",
    title: "Get Your Assessment",
    text: "A thorough consultation, posture analysis and spinal exam. We listen first, then diagnose clearly.",
  },
  {
    number: "03",
    title: "Start Feeling Better",
    text: "Receive your first gentle adjustment and a personalized roadmap to lasting, drug-free relief.",
  },
];

export default function Process() {
  return (
    <section className="bg-white py-20 lg:py-28" aria-labelledby="process-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-primary-600">How It Works</p>
          <h2 id="process-heading" className="mt-3 font-display text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl">
            Relief in 3 Simple Steps
          </h2>
        </div>

        <ol className="mt-14 grid gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <li key={step.number} className="relative rounded-2xl bg-slate-50 p-8">
              <span className="font-display text-5xl font-extrabold text-primary-200">{step.number}</span>
              <h3 className="mt-4 font-display text-xl font-bold text-navy-950">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.text}</p>
              {i < steps.length - 1 && (
                <svg className="absolute -right-6 top-1/2 hidden -translate-y-1/2 text-primary-300 md:block" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
