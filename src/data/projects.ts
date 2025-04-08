import { Project } from "../types/project";

export const projects: Project[] = [
  {
    id: "1",
    name: "Unity Memory Game",
    date: "2024-12-06",
    team: ["Mai Tuyen", "Thu Uyen"],
    technologies: ["C#", "Unity"],
    description:
      "A fun and interactive memory game developed using Unity, featuring various levels and challenges.",
    githubUrl: "https://github.com/Ailey-Prmil/Memory-Game-Unity",
    details: [
      "Lead the development of the game mechanics",
      "Implemented user interface and animations",
      "Played a key role in game design and level creation",
      "Integrated sound effects and background music",
      "Developed a scoring system and leaderboard",
      "Released the insitial version on GitHub",
    ],
  },
  {
    id: "2",
    name: "Statistical Analysis",
    date: "2024-11-20",
    team: ["Mai Tuyen", "Thu Uyen", "Bao Ngoc"],
    technologies: [
      "Python",
      "Pandas",
      "Matplotlib",
      "Seaborn",
      "Scikit-learn",
      "Excel",
      "R",
    ],
    description:
      "A project aims to deliver insights regarding 1 of the most leading cosmetic brand (Lo'real) with descriptive, inferential and predictive analysis.",
    githubUrl: "https://github.com/username/task-manager",
    details: [
      "Lead the team and plan the analysis process",
      "Conducted exploratory data analysis on the dataset",
      "Performed data cleaning and preprocessing using Pandas",
      "Visualized data using Matplotlib and Seaborn",
      "Implemented statistical tests for hypothesis testing",
      "Implemented machine learning models (LSTM Time Series Model) using Scikit-learn",
    ],
  },
  {
    id: "3",
    name: "Sketching App with AI Integration",
    date: "2024-12-01",
    team: [
      "Mai Tuyen",
      "Quoc Anh",
      "Thu Uyen",
      "Bao Ngoc",
      "Tan Khang",
      "Ngoc Diem",
    ],
    technologies: ["C#", "Maui", "Postman", "MySQL", "Docker"],
    description:
      "A sketching application that allows users to create, edit sketches and input some prompts to generate images using AI.",
    githubUrl: "https://github.com/bhqanhuit/DrawWithAI",
    details: [
      "Design Database and API for the application",
      "Compose the datebase using MySQL and Docker",
    ],
  },
  {
    id: "4",
    name: "Vietnam National Graduation Score Analysis 2023",
    date: "2023-12-05",
    team: ["Mai Tuyen"],
    technologies: ["Python", "Pandas", "Numpy"],
    description:
      "An analysis of the Vietnam National Graduation Score 2023 dataset to provide insights into the performance of students across different subjects.",
    githubUrl: "https://github.com/Ailey-Prmil/Score-Analysis-2023",
    details: [
      "Conducted exploratory data analysis on the dataset",
      "Performed data cleaning and preprocessing using Pandas",
    ],
  },
];
