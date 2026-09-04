import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-20 text-center">
      <p className="font-display text-6xl font-extrabold text-primary-500">404</p>
      <h1 className="mt-4 font-display text-3xl font-extrabold text-navy-950">
        Page Not Found
      </h1>
      <p className="mt-3 max-w-md text-slate-600">
        The page you&apos;re looking for doesn&apos;t exist — but your path to
        pain-free living starts right here.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-primary-600 px-8 py-3.5 font-bold text-white transition-colors hover:bg-primary-700"
      >
        Back to Home
      </Link>
    </section>
  );
}
