import { useState } from "react";
import { HeroSection } from "../Components/HeroSection";
import { ProblemSection } from "../Components/ProblemSection";
import { SolutionSection } from "../Components/SolutionSection";
import { ProductRangePreview } from "../Components/ProductRangePreview";
import { RawSpiceShowcase } from "../Components/RawSpiceShowcase";
import { ContactSection } from "../Components/ContactSection";
import { useScrollToTop } from "../hooks/useScrollToTop";

export const HomePage = () => {
  useScrollToTop();

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      {/* Responsive container wrapper for consistent spacing */}
      <div className="w-full max-w-7xl mx-auto">
        <HeroSection />
        {/* <ProblemSection /> */}
        <ProductRangePreview />
        <RawSpiceShowcase />
        <SolutionSection />
        <ContactSection />
      </div>
    </div>
  );
};
