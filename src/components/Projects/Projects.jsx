import React from "react";
import {
  Github,
  ArrowUpRight
} from "lucide-react";

import SectionHeader from "../SectionHeader/SectionHeader";

function Projects({ data }) {
  return (
    <section
      id="projects"
      className="section projects-section"
    >
      <div className="container">
        <SectionHeader
          number="07"
          title="PROJECTS"
          subtitle="Selected work"
        />

        <div className="projects-grid">
          {data.map((project, index) => (
            <article
              className="project-card glass-card reveal"
              key={project.name}
            >
              <div className="project-card-line" />

              <div className="project-card-header">
                <span className="project-category">
                  {project.technologies[0]}
                </span>

                <span className="project-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <h3>{project.name}</h3>

              <p>{project.description}</p>

              <div className="project-technologies">
                {project.technologies.map(
                  (technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  )
                )}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="github-button"
                aria-label={`View ${project.name} on GitHub`}
              >
                <Github size={17} />
                <span>GitHub</span>
                <ArrowUpRight size={16} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;