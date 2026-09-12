import React from "react";

import {
  Award,
  CalendarDays,
  ExternalLink
} from "lucide-react";

import SectionHeader from "../SectionHeader/SectionHeader";

function Training({ data }) {
  return (
    <section
      id="training"
      className="section training-section"
    >
      <div className="container">
        <SectionHeader
          number="08"
          title="TRAINING & CERTIFICATIONS"
          subtitle="Professional learning journey"
        />

        <div className="training-list">
          {data.map((item, index) => (
            <article
              className="training-card glass-card reveal"
              key={`${item.organization}-${item.title}`}
            >
              <div className="training-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="training-icon">
                <Award size={23} />
              </div>

              <div className="training-main">
                <div className="training-meta">
                  <span>
                    {item.organization}
                  </span>

                  {item.period && (
                    <span>
                      <CalendarDays size={14} />
                      {item.period}
                    </span>
                  )}
                </div>

                <h3>{item.title}</h3>

                {item.specialty && (
                  <p className="training-specialty">
                    {item.specialty}
                  </p>
                )}

                <div className="training-details">
                  {item.details.map((detail) => (
                    <span key={detail}>
                      {detail}
                    </span>
                  ))}
                </div>
              </div>

              {item.certificate && (
                <a
                  className="certificate-button"
                  href={item.certificate}
                  target="_blank"
                  rel="noreferrer"
                >
                  View Certificate
                  <ExternalLink size={16} />
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Training;