import Link from "next/link";
import { services, servicesExtra } from "@/lib/data";

const allServices = [...services, ...servicesExtra];

export default function ServicesGrid() {
  return (
    <section id="services" className="bg-white py-20 lg:py-28" aria-labelledby="services-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-primary-600">Our Services</p>
          <h2 id="services-heading" className="mt-3 font-display text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl">
            Comprehensive Care for Every Body
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            From acute pain to lifelong wellness — every treatment plan is
            personalized to your body, your goals and your life.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {allServices.map((service) => (
            <article
              key={service.slug}
              className="group rounded-2xl border border-slate-100 bg-slate-50/60 p-7 transition-all hover:-translate-y-1 hover:border-primary-200 hover:bg-white hover:shadow-xl hover:shadow-primary-900/5"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 text-primary-700 transition-colors group-hover:bg-primary-600 group-hover:text-white">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M3 12h3l2-6 3 12 3-9 2 3h5" />
                </svg>
              </span>
              <h3 className="mt-5 font-display text-xl font-bold text-navy-950">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{service.short}</p>
              <Link
                href={`/services#${service.slug}`}
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-primary-600 transition-colors hover:text-primary-700"
              >
                Learn more
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
