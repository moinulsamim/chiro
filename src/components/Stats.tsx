import { stats } from "@/lib/data";

export default function Stats() {
  return (
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
  );
}
