import Link from "next/link";
import { WaranMark } from "@/components/brand/WaranMark";
import { GoldenSocialBadges } from "@/components/ui/GoldenSocialBadges";
import { site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="relative z-30 border-t border-white/10 bg-[#07080a] px-6 py-16 md:px-12">
      <div className="flex flex-col justify-between gap-10 md:flex-row">
        <div>
          <div className="flex items-center gap-4">
            <WaranMark gold className="h-14 w-14" />
            <span className="font-display text-2xl tracking-[0.2em] font-semibold">WARAN</span>
          </div>
          <p className="measure mt-4 text-sm text-waran-paper/55">{site.northStar}</p>
          <div className="mt-6">
            <GoldenSocialBadges />
          </div>
          <p className="mt-3 max-w-sm text-xs leading-6 text-waran-paper/40">{site.honesty.body}</p>
        </div>
        <div className="grid grid-cols-2 gap-10 text-sm tracking-[0.16em] text-waran-paper/70">
          <div className="space-y-3">
            {site.navigation.map((item) => (
              <Link key={item.href} href={item.href} className="block hover:text-waran-gold">
                {item.label}
              </Link>
            ))}
          </div>
          <div className="space-y-3">
            <Link href="/divisions/primal" className="block hover:text-waran-gold">
              PRIMAL
            </Link>
            <Link href="/divisions/tech" className="block hover:text-waran-gold">
              TECH
            </Link>
            <Link href="/divisions/sciences" className="block hover:text-waran-gold">
              SCIENCES
            </Link>
            <Link href="/divisions/capital" className="block hover:text-waran-gold">
              CAPITAL
            </Link>
            <Link href="/divisions/exploration" className="block hover:text-waran-gold">
              EXPLORATION
            </Link>
            <Link href="/divisions/space" className="block hover:text-waran-gold">
              SPACE
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-12 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 text-[11px] tracking-[0.18em] text-waran-paper/35 md:flex-row">
        <p>© {new Date().getFullYear()} WARAN Industries. All rights reserved.</p>
        <p>No fabricated operations. No invented credentials.</p>
      </div>
    </footer>
  );
}
