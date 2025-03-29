import HeroSection from "@/components/HeroSection";
import JobsDisplaySection from "@/components/JobsDisplaySection";

import "@/styles/home.scss";

export default function Home() {
  return (
    <div className="wrapper">
      <HeroSection />
      <div className="scroll-container">
        <div className="elipse"></div>
        <div className="content">
          <JobsDisplaySection />
        </div>
      </div>
    </div>
  );
}
