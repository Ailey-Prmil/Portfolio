import HeroSection from "@/components/HeroSection";
import JobsDisplaySection from "@/components/JobsDisplaySection";
import CTABtnLayout from "@/components/CTABtnLayout";

import "@/styles/home.scss";

export default function Home() {
  return (
    <div className="wrapper">
      <HeroSection />
      <div className="scroll-container">
        <div className="elipse"></div>
        <div className="content">
          <JobsDisplaySection />
          <CTABtnLayout />
        </div>
      </div>
    </div>
  );
}
