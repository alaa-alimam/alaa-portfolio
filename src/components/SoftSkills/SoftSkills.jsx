import React from "react";
import {
  Check,
  Sparkles
} from "lucide-react";

import SectionHeader from "../SectionHeader/SectionHeader";

function SoftSkills({ data }) {
  return (
    <section
      id="soft-skills"
      className="section soft-skills-section"
    >
      <div className="container">
        <SectionHeader
          number="05"
          title="SOFT SKILLS"
          subtitle="How I approach work"
        />

        <div className="soft-skills-layout">
          <div className="soft-skills-intro reveal">
            <div className="soft-skills-orb">
              <Sparkles size={30} />
            </div>

            <h3>
              Technical ability works best
              with strong collaboration.
            </h3>

            <p>
              I value clear communication,
              structured problem solving,
              adaptability, and continuous
              improvement throughout the
              development process.
            </p>
          </div>

          <div className="soft-skills-list">
            {data.map((skill, index) => (
              <div
                className="soft-skill-item glass-card reveal"
                key={skill}
              >
                <span className="soft-skill-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="soft-skill-check">
                  <Check size={15} />
                </span>

                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SoftSkills;