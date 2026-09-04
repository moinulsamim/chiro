import Link from "next/link";
import { site } from "@/lib/data";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-20 lg:py-24">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 70% 20%, rgba(20,189,131,0.35), transparent), radial-gradient(ellipse 50% 60% at 20% 90%, rgba(50,116,168,0.3), transparent)",
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Your First Step to a Pain-Free Life
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
          New patients receive a comprehensive consultation, exam and posture
          analysis — plus a clear plan forward. Spots fill fast each week.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="rounded-full bg-primary-500 px-8 py-4 text-base font-bold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-primary-400 hover:shadow-xl"
          >
            Book Appointment Now
          </Link>
          <a
            href={site.phoneHref}
            className="rounded-full border-2 border-white/25 px-8 py-4 text-base font-bold text-white transition-all hover:border-primary-400 hover:text-primary-300"
          >
            Or call {site.phone}
          </a>
        </div>
        <p className="mt-6 text-sm text-slate-400">
          No long-term contracts · Insurance verified before your visit · Cancel anytime
        </p>
      </div>
    </section>
  );
}
