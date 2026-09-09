import { HomeExperience } from "@/components/experience/HomeExperience";
import { PhilosophyBand } from "@/components/sections/PhilosophyBand";
import { HorizonStrip } from "@/components/sections/HorizonStrip";
import { WaranSystemMap } from "@/components/sections/WaranSystemMap";
import { EliteDivisionExperience } from "@/components/sections/EliteDivisionExperience";
import { FlywheelSection } from "@/components/sections/FlywheelSection";
import { ResearchSection } from "@/components/sections/ResearchSection";
import { PeopleLayer } from "@/components/sections/PeopleLayer";
import { FinalHorizonResolution } from "@/components/sections/FinalHorizonResolution";
import { SystemCursor } from "@/components/ui/SystemCursor";
import { site } from "@/content/site";

export default function HomePage() {
  return (
    <>
      <h1 className="sr-only">
        {site.name} — {site.tagline}
      </h1>
      <SystemCursor />
      <HomeExperience />
      <PhilosophyBand />
      <HorizonStrip />
      <WaranSystemMap />
      <EliteDivisionExperience />
      <FlywheelSection />
      <ResearchSection />
      <PeopleLayer />
      <FinalHorizonResolution />
    </>
  );
}
