import Image from "next/image";
import Link from "next/link";

const reasons = [
  {
    title: "Root-Cause Treatment",
    text: "We don't mask symptoms. We find the source of your pain and fix it for good.",
  },
  {
    title: "Evidence-Based Techniques",
    text: "Modern, research-backed methods combined with years of hands-on expertise.",
  },
  {
    title: "Personalized Plans",
    text: "No cookie-cutter care. Every plan is built around your body and your goals.",
  },
  {
    title: "Comfortable, Modern Clinic",
    text: "A calm, welcoming space designed to make every visit something you look forward to.",
  },
];

export default function WhyUs() {
  return (
    <section className="bg-slate-50 py-20 lg:py-28" aria-labelledby="why-heading">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="relative order-2 lg:order-1">
          <div className="overflow-hidden rounded-4xl shadow-xl">
            <Image
              src="/images/clinic.svg"
              alt="Modern treatment room at the Vital Chiropractic clinic"
              width={800}
              height={640}
              className="h-auto w-full"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 rounded-2xl bg-primary-600 p-5 text-white shadow-xl sm:-right-6">
            <p className="font-display text-3xl font-extrabold">15+</p>
            <p className="text-xs font-semibold uppercase tracking-wide text-primary-100">Years serving the community</p>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <p className="text-sm font-bold uppercase tracking-widest text-primary-600">Why Choose Us</p>
          <h2 id="why-heading" className="mt-3 font-display text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl">
            Care That Puts You First — Always
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Choosing a chiropractor is about trust. Here&apos;s why thousands of
            patients in our community choose Vital Chiropractic and never look back.
          </p>

          <ul className="mt-8 space-y-5">
            {reasons.map((reason) => (
              <li key={reason.title} className="flex gap-4">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-700">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </span>
                <div>
                  <h3 className="font-bold text-navy-950">{reason.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{reason.text}</p>
                </div>
              </li>
            ))}
          </ul>

          <Link
            href="/about"
            className="mt-8 inline-flex items-center gap-2 font-bold text-primary-600 hover:text-primary-700"
          >
            Meet our team
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
