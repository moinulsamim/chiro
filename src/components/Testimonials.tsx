import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="bg-slate-50 py-20 lg:py-28" aria-labelledby="testimonials-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-primary-600">Testimonials</p>
          <h2 id="testimonials-heading" className="mt-3 font-display text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl">
            Real Patients. Real Results.
          </h2>
          <div className="mt-4 flex items-center justify-center gap-2 text-lg font-bold text-navy-950">
            <span className="text-amber-400" aria-hidden="true">★★★★★</span>
            4.9/5 from 500+ verified reviews
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="flex flex-col rounded-2xl border border-slate-100 bg-white p-7 shadow-sm">
              <div className="text-amber-400" aria-label={`${t.rating} out of 5 stars`}>
                {"★".repeat(t.rating)}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-slate-600">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 font-display font-extrabold text-primary-700" aria-hidden="true">
                  {t.name.charAt(0)}
                </span>
                <div>
                  <p className="text-sm font-bold text-navy-950">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
