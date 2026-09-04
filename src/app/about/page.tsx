import type { Metadata } from "next";
import Image from "next/image";
import { stats, site } from "@/lib/data";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About Us",
  description: `Meet the team behind ${site.name} — serving ${site.address.city}, ${site.address.state} with patient-first, evidence-based chiropractic care for over 15 years.`,
  alternates: { canonical: "/about" },
};

const values = [
  {
    title: "Integrity First",
    text: "Honest diagnoses, transparent pricing and no unnecessary treatments — ever.",
  },
  {
    title: "Patient Education",
    text: "We explain the 'why' behind every adjustment so you're empowered in your own care.",
  },
  {
    title: "Community Focus",
    text: "We're proud to support local schools, sports teams and wellness events.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-linear-to-b from-primary-50 to-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
            <a href="/" className="hover:text-primary-600">Home</a>
            <span className="mx-2" aria-hidden="true">/</span>
            <span className="font-semibold text-navy-950">About</span>
          </nav>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-extrabold tracking-tight text-navy-950 sm:text-5xl">
            A Legacy of Healing in {site.address.city}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            For more than 15 years, our mission has been simple: help people live
            active, pain-free lives through expert chiropractic care.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24" aria-label="Our story">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div className="overflow-hidden rounded-4xl shadow-lg">
            <Image
              src="/images/doctor.svg"
              alt="Dr. Alex Carter, lead chiropractor at Vital Chiropractic"
              width={800}
              height={640}
              className="h-auto w-full"
            />
          </div>
          <div>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-navy-950">
              Meet Dr. Alex Carter, D.C.
            </h2>
            <div className="mt-5 space-y-4 leading-relaxed text-slate-600">
              <p>
                After graduating with honors from Palmer College of Chiropractic,
                Dr. Carter founded {site.name} with one belief: healthcare should
                treat people, not just symptoms.
              </p>
              <p>
                A lifelong athlete who recovered from a serious back injury
                through chiropractic care, Dr. Carter brings both personal
                experience and clinical excellence to every treatment room
                conversation.
              </p>
              <p>
                When not in the clinic, you&apos;ll find Dr. Carter trail running,
                coaching youth soccer, or hosting free posture workshops around{" "}
                {site.address.city}.
              </p>
            </div>
            <ul className="mt-6 space-y-2 text-sm font-semibold text-navy-950">
              {[
                "Doctor of Chiropractic, Palmer College",
                "Certified in Webster Technique (prenatal)",
                "Board Certified Physiotherapy",
                "Member, American Chiropractic Association",
              ].map((cred) => (
                <li key={cred} className="flex items-center gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-700">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  {cred}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 lg:py-24" aria-label="Our values">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl">
              What We Stand For
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-slate-100 bg-white p-8 text-center shadow-sm">
                <h3 className="font-display text-xl font-bold text-navy-950">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-950 py-14" aria-label="Clinic statistics">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-4xl font-extrabold text-primary-400">{stat.value}</p>
              <p className="mt-2 text-sm font-semibold text-slate-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
