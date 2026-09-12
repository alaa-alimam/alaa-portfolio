import React from "react";
import {
  Code2,
  Database,
  BrainCircuit,
  Languages,
  Sparkles,
  Wrench,
  BarChart3
} from "lucide-react";

import SectionHeader from "../SectionHeader/SectionHeader";

const icons = [
  Code2,
  BrainCircuit,
  BrainCircuit,
  Languages,
  Sparkles,
  Wrench,
  BarChart3
];

function TechnicalSkills({ data }) {
  return (
    <section
      id="skills"
      className="section skills-section"
    >
      <div className="container">
        <SectionHeader
          number="04"
          title="TECHNICAL SKILLS"
          subtitle="Tools, technologies & capabilities"
        />

        <div className="skills-grid">
          {data.map((group, index) => {
            const Icon =
              icons[index] || Database;

            return (
              <article
                className="skill-card glass-card reveal"
                key={group.category}
              >
                <div className="skill-card-top">
                  <div className="skill-icon">
                    <Icon size={21} />
                  </div>

                  <span className="skill-index">
                    {String(index + 1).padStart(
                      2,
                      "0"
                    )}
                  </span>
                </div>

                <h3>{group.category}</h3>

                <div className="skill-tags">
                  {group.skills.map((skill) => (
                    <span key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default TechnicalSkills;