import Image from "next/image";
import { cn } from "@/lib/cn";

export function WaranMark({
  className,
  alt = "WARAN Industries Logo",
}: {
  className?: string;
  gold?: boolean;
  alt?: string;
}) {
  return (
    <div className={cn("relative inline-block h-12 w-12 overflow-hidden flex-shrink-0", className)}>
      <Image
        src="/brand/logo.png"
        alt={alt}
        width={240}
        height={240}
        priority
        quality={100}
        className="h-full w-full object-contain filter drop-shadow-[0_0_12px_rgba(197,160,89,0.3)]"
      />
    </div>
  );
}
