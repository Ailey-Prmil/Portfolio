import { TimelineData, SkillsData, CertificatesData } from "@/types/about-me";

export const jobTitle: string[] = [
  "Business Analyst",
  "Data Analyst",
  "System Engineer",
];

export const timelineData: TimelineData[] = [
  {
    startDate: "Jun 2023",
    endDate: "Present",
    title: "Participate in multiples",
    organization: "Courses and Extra-Curricular",
    description: [
      "Courses on Udemy Business ranging widely from Data Analytics to some Technical areas.",
      "An active member of IIBA ",
    ],
  },
  {
    startDate: "Aug 2022",
    endDate: "Present",
    title: "Information Systems",
    organization: "University of Information Technology - VNUHCMC",
    description: [
      "GPA: 9.26/10",
      "Received 5 scholarships for excellent students",
      "Major in Information Systems",
      "Expected Graduation: May 2024",
      "Relevant Courses: Business Analysis, Data Analysis, Database Management, ERP Systems",
    ],
  },

  {
    startDate: "Sep 2019",
    endDate: "July 2022",
    title: "High School Diploma",
    organization: "High School for the Gifted - VNUHCMC",
    description: ["GPA: 9.4/10"],
  },
];

export const skillsData: SkillsData = {
  technical: [
    {
      name: "Python",
      logo: "/skills/python.png",
    },
    {
      name: "C#",
      logo: "/skills/csharp.png",
    },
    {
      name: "PostgreSQL",
      logo: "/skills/postgresql.jpg",
    },
    {
      name: "MySQL",
      logo: "/skills/mysql.png",
    },
    {
      name: "MSSQL",
      logo: "/skills/mssql.png",
    },
    {
      name: "GraphQL",
      logo: "/skills/graphql.png",
    },
    {
      name: "JavaScript",
      logo: "/skills/javascript.png",
    },
    {
      name: "Typescript",
      logo: "/skills/typescript.png",
    },
    {
      name: "ReactJS",
      logo: "/skills/react.png",
    },
    {
      name: "NodeJS",
      logo: "/skills/nodejs.png",
    },
    {
      name: "Statistical Analysis",
      logo: "/skills/stats.png",
    },
    {
      name: "Design Patterns",
      logo: "/skills/design-patterns.png",
    },
    {
      name: "OOP",
      logo: "/skills/OOP.png",
    },
  ],
  business: [
    {
      name: "Business Process Modeling",
      logo: "/skills/bpm.png",
    },
    {
      name: "Agile Methodologies",
      logo: "/skills/agile.png",
    },
    {
      name: "Project Management",
      logo: "/skills/project-management.png",
    },
    {
      name: "Data Flow Diagram",
      logo: "/skills/data-flow-diagram.png",
    },
    {
      name: "BPMN Diagrams",
      logo: "/skills/bpmn.png",
    },
    {
      name: "UML Diagrams",
      logo: "/skills/uml.png",
    },
    {
      name: "Use Case Diagram",
      logo: "/skills/use-case-diagram.png",
    },
    {
      name: "Documentation",
      logo: "/skills/documentation.png",
    },
    {
      name: "English Proficiency",
      logo: "/skills/english.png",
    },
  ],
  tools: [
    {
      name: "JIRA",
      logo: "/skills/atlassian.jpg",
    },
    {
      name: "Confluence",
      logo: "/skills/atlassian.jpg",
    },
    {
      name: "ClickUp",
      logo: "/skills/clickup.png",
    },
    {
      name: "Figma",
      logo: "/skills/figma.png",
    },
    {
      name: "Draw.io",
      logo: "/skills/drawio.png",
    },
    {
      name: "Miro",
      logo: "/skills/miro.jpeg",
    },
    {
      name: "Microsoft Office Suite",
      logo: "/skills/microsoft.png",
    },
    {
      name: "Power BI",
      logo: "/skills/powerBI.png",
    },
    {
      name: "Tableau",
      logo: "/skills/tableau.png",
    },
    {
      name: "Git/GitHub",
      logo: "/skills/github.png",
    },
  ],
};

export const certificatesData: CertificatesData[] = [
  {
    name: "ECBA™ (Entry Certificate in Business Analysis)",
    issuer: "IIBA® (International Institute of Business Analysis)",
    date: "Mar 2025",
    credentialId: "136978528",
  },
  {
    name: "Udemy Certificate of Completion Software Testing Masterclass - From Novice to Expert",
    issuer: "Udemy",
    date: "Aug 2024",
  },
  {
    name: "Hackerrank SQL (Advanced) Certificate",
    issuer: "Hackerrank",
    date: "Aug 2023",
    credentialId: "F61336DD74B4",
  },
  {
    name: "IELTS 8.0",
    issuer: "British Council",
    date: "Apr 2022",
    credentialId: "21VN012282LAMM028A",
  },
];
