import { Project } from "../types/project";

export const projects: Project[] = [
  {
    id: "1",
    name: "E-commerce Platform",
    date: "2024-03-15",
    team: ["John Doe", "Jane Smith"],
    technologies: ["React", "Node.js", "MongoDB", "TypeScript"],
    description:
      "A full-stack e-commerce platform with real-time inventory management and payment processing.",
    githubUrl: "https://github.com/username/ecommerce-platform",
    details: [
      "Implemented real-time inventory tracking system",
      "Developed secure payment processing integration",
      "Created responsive product catalog with search and filtering",
      "Built admin dashboard for order management",
      "Optimized database queries for better performance",
    ],
  },
  {
    id: "2",
    name: "Task Management App",
    date: "2024-02-20",
    team: ["Alice Johnson", "Bob Wilson"],
    technologies: ["Next.js", "Firebase", "Tailwind CSS"],
    description:
      "A collaborative task management application with real-time updates and team features.",
    githubUrl: "https://github.com/username/task-manager",
    details: [
      "Implemented real-time task updates using Firebase",
      "Created drag-and-drop task organization",
      "Developed team collaboration features",
      "Built user authentication and authorization",
      "Added task filtering and sorting capabilities",
    ],
  },
  {
    id: "3",
    name: "Weather Dashboard",
    date: "2024-01-10",
    team: ["Charlie Brown"],
    technologies: ["React", "OpenWeather API", "Chart.js"],
    description:
      "A weather dashboard showing real-time and forecasted weather data with interactive charts.",
    githubUrl: "https://github.com/username/weather-dashboard",
    details: [
      "Integrated OpenWeather API for real-time weather data",
      "Created interactive weather charts using Chart.js",
      "Implemented location-based weather search",
      "Added weather forecast for next 5 days",
      "Built responsive design for all screen sizes",
    ],
  },
];
