import HeroSection from "@/components/HeroSection";
import "@/styles/home.scss";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="elipse"></div>
      <div className="content">
        <h1>Welcome to My Portfolio</h1>
        <p>This is a simple portfolio website built with Next.js and SCSS.</p>
        <p>Explore my projects, resume, and more!</p>
        <p>
          Feel free to reach out if you have any questions or want to connect!
        </p>
      </div>
    </>
  );
}
