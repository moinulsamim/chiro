import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { services, servicesExtra } from "@/lib/data";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Chiropractic Services",
  description:
    "Explore our full range of chiropractic services: spinal adjustments, sports injury rehab, headache relief, prenatal care, posture correction and wellness care.",
  alternates: { canonical: "/services" },
};

const allServices = [...services, ...servicesExtra];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-linear-to-b from-primary-50 to-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
            <Link href="/" className="hover:text-primary-600">Home</Link>
            <span className="mx-2" aria-hidden="true">/</span>
            <span className="font-semibold text-navy-950">Services</span>
          </nav>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-extrabold tracking-tight text-navy-950 sm:text-5xl">
            Chiropractic Services Designed Around You
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            Every treatment we offer is grounded in evidence, delivered with
            precision and tailored to your unique needs.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl space-y-16 px-4 sm:px-6 lg:px-8">
          {allServices.map((service, i) => (
            <article
              key={service.slug}
              id={service.slug}
              className="grid scroll-mt-28 items-center gap-10 lg:grid-cols-2 lg:gap-16"
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <span className="inline-flex items-center gap-2 rounded-full bg-primary-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary-800">
                  Service {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-navy-950">
                  {service.title}
                </h2>
                <p className="mt-4 leading-relaxed text-slate-600">{service.description}</p>
                <ul className="mt-6 space-y-3">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-center gap-3 text-sm font-semibold text-navy-950">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-700">
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="mt-7 inline-block rounded-full bg-primary-600 px-6 py-3 text-sm font-bold text-white transition-all hover:bg-primary-700"
                >
                  Book for This Service
                </Link>
              </div>
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <div className="overflow-hidden rounded-4xl shadow-lg">
                  <Image
                    src={`/images/service-${service.slug}.svg`}
                    alt={`${service.title} treatment at Vital Chiropractic`}
                    width={800}
                    height={560}
                    className="h-auto w-full"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
