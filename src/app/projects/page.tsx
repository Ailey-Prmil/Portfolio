"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
import { format } from "date-fns";
import ProjectModal from "@/components/ProjectModal";
import { Project } from "@/types/project";
import "@/styles/projects.scss";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const sortedProjects = [...projects].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      <div className="projects-grid">
        {sortedProjects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-content">
              <h2>{project.name}</h2>
              <p className="project-date">
                {format(new Date(project.date), "MMMM yyyy")}
              </p>
              <div className="project-team">
                <span>Team:</span>
                <span>{project.team.join(", ")}</span>
              </div>
              <div className="technologies">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tech-pill">
                    {tech}
                  </span>
                ))}
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-links">
                <div
                  className="project-link"
                  onClick={() => setSelectedProject(project)}
                >
                  More Details
                </div>
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
