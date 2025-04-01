import "@/styles/about-me.scss";

import Timeline from "@/components/Timeline/Timeline";
import TimelinePoint from "@/components/Timeline/TimelinePoint";
import Image from "next/image";

export default function AboutMe() {
  const jobTitle = ["Business Analyst", "Data Analyst", "System Engineer"];

  const timelineData = [
    {
      startDate: "Aug 2019",
      endDate: "Present",
      title: "Information Systems",
      organization: "University of Information Technology - VNUHCMC",
      description: [
        "GPA: 8.4/10",
        "Major in Business Analysis and Information Systems",
        "Minor in Data Analysis",
      ],
    },
    {
      startDate: "Jun 2023",
      endDate: "Sep 2023",
      title: "Business Analyst Intern",
      organization: "FPT Software",
      description: [
        "Analyzed and documented business requirements",
        "Created user stories and acceptance criteria",
        "Collaborated with development team for implementation",
      ],
    },
  ];

  const skillsData = {
    technical: [
      {
        name: "Business Analysis",
        logo: "/skills/business-analysis.svg",
      },
      {
        name: "Requirements Engineering",
        logo: "/skills/requirements.svg",
      },
      {
        name: "Data Analysis",
        logo: "/skills/data-analysis.svg",
      },
      {
        name: "SQL",
        logo: "/skills/postgresql.jpg",
      },
      {
        name: "Python",
        logo: "/skills/python.png",
      },
      {
        name: "UML Modeling",
        logo: "/svgs/uml.svg",
      },
    ],
    business: [
      {
        name: "Business Process Modeling",
        logo: "/svgs/bpm.svg",
      },
      {
        name: "Agile Methodologies",
        logo: "/svgs/agile.svg",
      },
      {
        name: "Project Management",
        logo: "/svgs/project-management.svg",
      },
      {
        name: "Stakeholder Management",
        logo: "/svgs/stakeholder.svg",
      },
      {
        name: "Documentation",
        logo: "/svgs/documentation.svg",
      },
    ],
    tools: [
      {
        name: "JIRA",
        logo: "/skills/jira.jpg",
      },
      {
        name: "Confluence",
        logo: "/skills/confluence.jpg",
      },
      {
        name: "Draw.io",
        logo: "/svgs/drawio.svg",
      },
      {
        name: "Microsoft Office Suite",
        logo: "/svgs/office.svg",
      },
      {
        name: "Power BI",
        logo: "/svgs/powerbi.svg",
      },
      {
        name: "Tableau",
        logo: "/svgs/tableau.svg",
      },
    ],
  };

  const certificatesData = [
    {
      name: "ECBA™ (Entry Certificate in Business Analysis)",
      issuer: "IIBA®",
      date: "Oct 2023",
      credentialId: "12345678",
    },
    {
      name: "Professional Scrum Master™ I",
      issuer: "Scrum.org",
      date: "Aug 2023",
      credentialId: "87654321",
    },
    {
      name: "SQL Fundamentals",
      issuer: "DataCamp",
      date: "Jul 2023",
      credentialId: "DC-SQL-123",
    },
  ];

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
          Hi! I&apos;m Tuyen, a prospective Business Analyst with an{" "}
          <b>ECBA certification</b> , majoring in <b>Information Systems</b> at
          the <b>University of Information Technology - VNUHCMC</b>.
        </p>
        <p>
          I have experience in the BA workflow from planning to delivery and
          specialize in IT environments, enabling effective communication of
          technical concepts.
        </p>
        <p>
          I&apos;m also eager to expand my skills in{" "}
          <b>Finance, Business Processes, and Testing</b> to enhance my ability
          to deliver business solutions.
        </p>
      </div>

      <Timeline>
        {timelineData.map((item, index) => (
          <TimelinePoint key={index} {...item} />
        ))}
      </Timeline>

      <section className="skills-section">
        <h2>Skills & Expertise</h2>
        <div className="skills-container">
          <div className="skill-category">
            <h3>Technical Skills</h3>
            <div className="skills-grid">
              {skillsData.technical.map((skill, index) => (
                <div key={index} className="skill-card">
                  <div className="skill-logo">
                    <Image
                      src={skill.logo}
                      alt={skill.name}
                      width={48}
                      height={48}
                      className="logo-image"
                    />
                  </div>
                  <div className="skill-info">
                    <h4>{skill.name}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="skill-category">
            <h3>Business Skills</h3>
            <div className="skills-grid">
              {skillsData.business.map((skill, index) => (
                <div key={index} className="skill-card">
                  <div className="skill-logo">
                    <Image
                      src={skill.logo}
                      alt={skill.name}
                      width={48}
                      height={48}
                      className="logo-image"
                    />
                  </div>
                  <div className="skill-info">
                    <h4>{skill.name}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="skill-category">
            <h3>Tools & Technologies</h3>
            <div className="skills-grid">
              {skillsData.tools.map((skill, index) => (
                <div key={index} className="skill-card">
                  <div className="skill-logo">
                    <Image
                      src={skill.logo}
                      alt={skill.name}
                      width={48}
                      height={48}
                      className="logo-image"
                    />
                  </div>
                  <div className="skill-info">
                    <h4>{skill.name}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <div className="divider"></div>
      <section className="certificates-section">
        <h2>Certifications</h2>
        <div className="certificates-container">
          {certificatesData.map((cert, index) => (
            <div key={index} className="certificate-card">
              <h3>{cert.name}</h3>
              <p className="issuer">{cert.issuer}</p>
              <p className="date">Issued: {cert.date}</p>
              <p className="credential">ID: {cert.credentialId}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
