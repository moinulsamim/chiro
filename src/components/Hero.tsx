import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-primary-50 via-white to-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 pt-16 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:pb-28 lg:pt-24">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full bg-primary-100 px-4 py-1.5 text-sm font-bold text-primary-800">
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary-500" aria-hidden="true" />
            Same-week appointments available
          </p>

          <h1 className="mt-6 font-display text-4xl font-extrabold leading-tight tracking-tight text-navy-950 sm:text-5xl lg:text-6xl">
            Pain-Free Living Starts With a{" "}
            <span className="relative whitespace-nowrap text-primary-600">
              Healthy Spine
              <svg className="absolute -bottom-2 left-0 w-full text-primary-300" viewBox="0 0 300 12" fill="none" preserveAspectRatio="none" aria-hidden="true">
                <path d="M2 9C60 3 160 2 298 8" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
            Expert chiropractic care for back pain, neck pain, headaches and injuries —
            without drugs or surgery. Trusted by thousands of families in{" "}
            {site.address.city} for over 15 years.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-full bg-primary-600 px-8 py-4 text-center text-base font-bold text-white shadow-lg shadow-primary-600/25 transition-all hover:-translate-y-0.5 hover:bg-primary-700 hover:shadow-xl"
            >
              Book Your First Visit
            </Link>
            <a
              href={site.phoneHref}
              className="rounded-full border-2 border-navy-200 bg-white px-8 py-4 text-center text-base font-bold text-navy-950 transition-all hover:border-primary-400 hover:text-primary-700"
            >
              Call {site.phone}
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-semibold text-slate-600">
            {["No referral needed", "Insurance accepted", "Free parking"].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <svg className="text-primary-600" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-4xl bg-linear-to-tr from-primary-200/60 to-navy-100/40 blur-2xl" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-4xl shadow-2xl">
            <Image
              src="/images/hero.svg"
              alt="Chiropractor performing a gentle spinal adjustment on a patient at Vital Chiropractic"
              width={880}
              height={760}
              priority
              className="h-auto w-full"
            />
          </div>
          <div className="absolute -bottom-5 -left-5 flex items-center gap-3 rounded-2xl bg-white p-4 shadow-xl sm:-left-8">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-100 text-primary-700">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.2 5.9 20.6l1.4-6.8L2.2 9.1l6.9-.8z" />
              </svg>
            </span>
            <div>
              <p className="text-sm font-extrabold text-navy-950">4.9/5 Rating</p>
              <p className="text-xs text-slate-500">500+ Google reviews</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
