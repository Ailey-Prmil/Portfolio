import "@/styles/about-me.scss";
export default function AboutMe() {
  const jobTitle = ["Business Analyst", "Data Analyst", "System Engineer"];
  return (
    <div className="about-me-container">
      <h1>Lam Mai Tuyen</h1>
      <div className="job-title-container">
        {jobTitle.map((title, index) => (
          <div key={index} className="job-title">
            {title}
          </div>
        ))}
      </div>
      <div className="self-description">
        <p>
          Hi! I’m Tuyen, a prospective Business Analyst with an{" "}
          <b>ECBA certification</b> , majoring in <b>Information Systems</b> at
          the <b>University of Information Technology - VNUHCMC</b>.
        </p>
        <p>
          I have experience in the BA workflow from planning to delivery and
          specialize in IT environments, enabling effective communication of
          technical concepts.
        </p>
        <p>
          I’m also eager to expand my skills in{" "}
          <b>Finance, Business Processes, and Testing</b> to enhance my ability
          to deliver business solutions.
        </p>
      </div>
      <div className="divider"></div>
    </div>
  );
}
