import RotatingText from "../animations/RotatingText";
import GradientText from "../animations/GradientText";
import FloatingMenu from "../animations/FloatingMenu";
import "./JobsDisplaySection.scss";
export default function JobsDisplaySection() {
  const demoItems = [
    {
      link: "#",
      text: "Business Analyst",
      image: "https://picsum.photos/600/400?random=1",
    },
    {
      link: "#",
      text: "Data Analyst",
      image: "https://picsum.photos/600/400?random=2",
    },
    {
      link: "#",
      text: "System Engineer",
      image: "https://picsum.photos/600/400?random=3",
    },
  ];
  return (
    <>
      <div className="job-section-full-text-container">
        <div className="gradient-text">
          <GradientText
            colors={["#2f8aa0", "#b96074", "#004481", "#b96074", "#2f8aa0"]}
            animationSpeed={8}
            showBorder={false}
          >
            <h1>Dynamic Role Player</h1>
          </GradientText>
        </div>
        <RotatingText
          texts={["Business Analyst", "Data Analyst", "System Engineer"]}
          mainClassName="job-section-text-container"
          staggerFrom={"last"}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-120%" }}
          staggerDuration={0.025}
          splitLevelClassName="job-section-text primary-header-text"
          transition={{ type: "spring", damping: 50, stiffness: 400 }}
          rotationInterval={3000}
        />
      </div>
      <div style={{ height: "500px", position: "relative", width: "100%" }}>
        <FloatingMenu items={demoItems} />
      </div>
    </>
  );
}
