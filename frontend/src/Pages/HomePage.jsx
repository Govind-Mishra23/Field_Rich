import { useEffect, useState } from "react";
import { HeroSection } from "../Components/HeroSection";
import { ProblemSection } from "../Components/ProblemSection";
import { SolutionSection } from "../Components/SolutionSection";
import { ProductRangePreview } from "../Components/ProductRangePreview";
import { RawSpiceShowcase } from "../Components/RawSpiceShowcase";
import { AboutUsSection } from "../Components/AboutUsSection";
import { ContactSection } from "../Components/ContactSection";

export const HomePage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
 

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      {/* Responsive container wrapper for consistent spacing */}
      <div className="w-full max-w-7xl mx-auto">
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <ProductRangePreview />
        <RawSpiceShowcase />
        <AboutUsSection />
        <ContactSection />
      </div>
    </div>
  );
};
