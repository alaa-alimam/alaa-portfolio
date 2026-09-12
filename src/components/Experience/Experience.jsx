import React from "react";
import {
  BriefcaseBusiness,
  ChevronRight
} from "lucide-react";

import SectionHeader from "../SectionHeader/SectionHeader";

function Experience({ data }) {
  return (
    <section
      id="experience"
      className="section experience-section"
    >
      <div className="container">
        <SectionHeader
          number="03"
          title="EXPERIENCE"
          subtitle="Training & practical experience"
        />

        <div className="experience-list">
          {data.map((item, index) => (
            <article
              className="experience-card glass-card reveal"
              key={`${item.role}-${item.organization}`}
              style={{
                "--reveal-delay": `${index * 70}ms`
              }}
            >
              <div className="experience-index">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="experience-main">
                <div className="experience-heading">
                  <div>
                    <div className="experience-role-row">
                      <BriefcaseBusiness
                        size={18}
                      />

                      <span>
                        {item.period}
                      </span>
                    </div>

                    <h3>{item.role}</h3>

                    <h4>
                      {item.organization}
                    </h4>

                    <div className="experience-specialty">
                      {item.specialty}
                    </div>
                  </div>
                </div>

                <div className="experience-body">
                  <ul className="experience-bullets">
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>
                        <ChevronRight size={15} />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="technology-list">
                    {item.technologies.map(
                      (technology) => (
                        <span key={technology}>
                          {technology}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;