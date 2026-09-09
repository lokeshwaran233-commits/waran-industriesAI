import { HomeExperience } from "@/components/experience/HomeExperience";
import { HorizonStrip } from "@/components/sections/HorizonStrip";
import { DivisionExplorer } from "@/components/sections/DivisionExplorer";
import { FlywheelSection } from "@/components/sections/FlywheelSection";
import { CTASection } from "@/components/sections/CTASection";
import { PhilosophyBand } from "@/components/sections/PhilosophyBand";
import { site } from "@/content/site";

export default function HomePage() {
  return (
    <>
      <h1 className="sr-only">
        {site.name} — {site.tagline}
      </h1>
      <HomeExperience />
      <PhilosophyBand />
      <HorizonStrip />
      <DivisionExplorer />
      <FlywheelSection />
      <CTASection />
    </>
  );
}
