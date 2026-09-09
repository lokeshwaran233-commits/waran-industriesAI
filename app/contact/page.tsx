import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { GoldenSocialBadges } from "@/components/ui/GoldenSocialBadges";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Build, research, explore or partner with WARAN Industries. WARAN PRIMAL is the current operating entry point.",
};

export default function ContactPage({
  searchParams,
}: {
  searchParams?: { interest?: string };
}) {
  return (
    <article className="px-6 pb-28 pt-28 md:px-12">
      <p className="micro text-waran-gold">Contact</p>
      <h1 className="mt-4 max-w-4xl font-display text-5xl tracking-[-0.06em] md:text-7xl">
        Begin where the work is real.
      </h1>
      <p className="measure mt-6 text-waran-paper/70">
        {site.hero.now} {site.hero.toward}
      </p>
      <div className="mt-16 grid gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <ContactForm defaultInterest={searchParams?.interest ?? "primal"} />
        <aside className="space-y-8 text-sm leading-7 text-waran-paper/65">
          <div className="border border-white/10 bg-[#0a0c10]/80 p-6 rounded-sm backdrop-blur-md">
            <p className="micro text-waran-gold">DIRECT ACCESS CHANNELS</p>
            <p className="mt-2 text-xs text-waran-paper/60">
              Click the golden badges to connect via official channels.
            </p>
            <div className="mt-5">
              <GoldenSocialBadges showLabels />
            </div>
          </div>
          <div>
            <p className="micro text-waran-gold">What to write about</p>
            <ul className="mt-4 space-y-2">
              <li>— Operational bottlenecks that need software.</li>
              <li>— Research collaboration, honestly scoped.</li>
              <li>— Future exploration or space architecture conversations.</li>
              <li>— Institutional partnership, not theatrical affiliation.</li>
            </ul>
          </div>
          <div>
            <p className="micro text-waran-gold">What we will not invent</p>
            <p className="mt-4">
              Customers, revenue, patents, laboratories, missions, launches or certifications. If it is not operating, it will be labelled as architecture.
            </p>
          </div>
        </aside>
      </div>
    </article>
  );
}
