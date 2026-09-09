import Link from "next/link";

export default function NotFound() {
  return (
    <article className="px-6 pb-28 pt-36 md:px-12">
      <p className="micro text-waran-gold">404</p>
      <h1 className="mt-4 font-display text-5xl tracking-[-0.06em] md:text-7xl">This layer does not exist yet.</h1>
      <p className="measure mt-6 text-waran-paper/70">Return to the headquarters, or enter WARAN PRIMAL — the only current operating frontier.</p>
      <div className="mt-10 flex gap-4">
        <Link href="/" className="border border-waran-gold px-6 py-3 text-[11px] tracking-[0.28em] text-waran-gold">
          Headquarters
        </Link>
        <Link href="/divisions/primal" className="border border-white/20 px-6 py-3 text-[11px] tracking-[0.28em]">
          PRIMAL
        </Link>
      </div>
    </article>
  );
}
