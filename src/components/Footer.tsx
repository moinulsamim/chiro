import Link from "next/link";
import { navLinks, services, site } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-600 text-white">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M3 12h3l2-6 3 12 3-9 2 3h5" />
                </svg>
              </span>
              <span className="font-display text-xl font-extrabold text-white">
                Vital<span className="text-primary-400">Chiro</span>
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              {site.tagline} Expert, compassionate chiropractic care for the whole family in{" "}
              {site.address.city}, {site.address.state}.
            </p>
            <div className="mt-5 flex gap-3">
              {[
                { href: site.social.facebook, label: "Facebook", path: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" },
                { href: site.social.instagram, label: "Instagram", path: "M16 3H8a5 5 0 0 0-5 5v8a5 5 0 0 0 5 5h8a5 5 0 0 0 5-5V8a5 5 0 0 0-5-5zm-4 12.5A3.5 3.5 0 1 1 15.5 12 3.5 3.5 0 0 1 12 15.5zM17.2 6.8a1 1 0 1 1 1-1 1 1 0 0 1-1 1z" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-primary-600"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Quick links">
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">Quick Links</h3>
            <ul className="mt-4 space-y-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors hover:text-primary-400">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Services">
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">Our Services</h3>
            <ul className="mt-4 space-y-3 text-sm">
              {services.slice(0, 5).map((s) => (
                <li key={s.slug}>
                  <Link href={`/services#${s.slug}`} className="transition-colors hover:text-primary-400">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">Contact Us</h3>
            <address className="mt-4 space-y-3 text-sm not-italic">
              <p>
                {site.address.street}
                <br />
                {site.address.city}, {site.address.state} {site.address.zip}
              </p>
              <p>
                <a href={site.phoneHref} className="transition-colors hover:text-primary-400">
                  {site.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${site.email}`} className="transition-colors hover:text-primary-400">
                  {site.email}
                </a>
              </p>
            </address>
            <div className="mt-4 rounded-xl bg-white/5 p-4 text-xs text-slate-400">
              {site.hours.map((h) => (
                <p key={h.days} className="flex justify-between gap-4 py-0.5">
                  <span>{h.days}</span>
                  <span className="font-semibold text-slate-300">{h.time}</span>
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-slate-500 sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>Medical disclaimer: Content on this site is for informational purposes only.</p>
        </div>
      </div>
    </footer>
  );
}
