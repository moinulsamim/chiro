"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks, site } from "@/lib/data";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2" aria-label={`${site.name} home`}>
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-600 text-white">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M3 12h3l2-6 3 12 3-9 2 3h5" />
        </svg>
      </span>
      <span className="font-display text-xl font-extrabold tracking-tight text-navy-950">
        Vital<span className="text-primary-600">Chiro</span>
      </span>
    </Link>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-semibold transition-colors hover:text-primary-600 ${
                pathname === link.href ? "text-primary-600" : "text-navy-950"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href={site.phoneHref}
            className="flex items-center gap-2 text-sm font-bold text-navy-950 hover:text-primary-600"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            {site.phone}
          </a>
          <Link
            href="/contact"
            className="rounded-full bg-primary-600 px-5 py-2.5 text-sm font-bold text-white shadow-sm transition-all hover:bg-primary-700 hover:shadow-md"
          >
            Book Appointment
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-navy-950 hover:bg-slate-100 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            {open ? <path d="M18 6 6 18M6 6l12 12" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-slate-100 bg-white px-4 pb-6 pt-2 md:hidden" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`block rounded-lg px-3 py-3 text-base font-semibold ${
                pathname === link.href ? "bg-primary-50 text-primary-700" : "text-navy-950"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-3 block rounded-full bg-primary-600 px-5 py-3 text-center text-sm font-bold text-white"
          >
            Book Appointment
          </Link>
          <a href={site.phoneHref} className="mt-2 block rounded-full border border-slate-200 px-5 py-3 text-center text-sm font-bold text-navy-950">
            Call {site.phone}
          </a>
        </nav>
      )}
    </header>
  );
}
