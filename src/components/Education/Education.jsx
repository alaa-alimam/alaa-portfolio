import React from "react";
import {
  GraduationCap,
  MapPin,
  Calendar
} from "lucide-react";

import SectionHeader from "../SectionHeader/SectionHeader";

function Education({ data }) {
  return (
    <section
      id="education"
      className="section education-section"
    >
      <div className="container">
        <SectionHeader
          number="02"
          title="EDUCATION"
          subtitle="Academic foundation"
        />

        <div className="education-layout">
          <div className="education-card glass-card reveal">
            <div className="education-icon">
              <GraduationCap size={30} />
            </div>

            <div className="education-content">
              <div className="education-topline">
                <span className="mini-label">
                  BACHELOR'S DEGREE
                </span>

                <span className="education-period">
                  <Calendar size={15} />
                  {data.period}
                </span>
              </div>

              <h3>{data.degree}</h3>

              <div className="education-meta">
                <span>
                  <MapPin size={16} />
                  {data.faculty}
                </span>
              </div>

              <p>{data.description}</p>
            </div>
          </div>

          <div className="education-side reveal reveal-delay">
            <span className="side-number">
              01
            </span>

            <p>
              Building a strong academic foundation
              across artificial intelligence,
              machine learning, mathematics,
              programming, and software engineering.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;