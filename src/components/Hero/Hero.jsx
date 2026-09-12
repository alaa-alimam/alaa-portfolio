
import React from "react";
import {
  ArrowDown,
  ArrowRight,
  Download,
  Mail
} from "lucide-react";

import SectionHeader from "../SectionHeader/SectionHeader";
import AIVisual from "./AIVisual";

function Hero({ data }) {
  const scrollTo = (id) => {
    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: "smooth"
      });
  };

  return (
    <section id="home" className="hero section">
      <div className="container">

        <SectionHeader
          number="01"
          title="HOME / ABOUT ME"
        />

        <div className="hero-grid">

          <div className="hero-content reveal">

            <div className="hero-eyebrow">
              <span className="status-dot" />

              <span>AI ENGINEER</span>

              <span className="eyebrow-line" />

              <span>{data.location}</span>
            </div>

            <h1 className="hero-title">
              {data.name}
            </h1>

            <div className="hero-role">
              {data.title}
            </div>

            <p className="hero-intro">
              {data.intro}
            </p>

            <p className="hero-additional">
              {data.additionalIntro}
            </p>

            <div className="hero-focus">
              <span className="focus-label">
                Core Focus
              </span>

              <div className="focus-list">
                {data.coreFocus?.map((item) => (
                  <span key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="hero-actions">

              <a
                className="button button-primary magnetic-button"
                href={data.cv}
                target="_blank"
                rel="noreferrer"
              >
                <Download size={18} />
                <span>Download CV</span>
              </a>

              <button
                className="button button-secondary magnetic-button"
                type="button"
                onClick={() => scrollTo("projects")}
              >
                <span>View Projects</span>
                <ArrowRight size={18} />
              </button>

              <button
                className="button button-ghost"
                type="button"
                onClick={() => scrollTo("contact")}
              >
                <Mail size={17} />
                <span>Contact Me</span>
              </button>

            </div>

            <button
              className="scroll-indicator"
              type="button"
              onClick={() => scrollTo("education")}
              aria-label="Explore portfolio"
            >
              <span>Explore portfolio</span>
              <ArrowDown size={17} />
            </button>

          </div>
<div
  style={{
    display: "block",
    width: "100%",
    minHeight: "600px",
    position: "relative",
    zIndex: 9999,
  }}
>
  <AIVisual />
</div>

        </div>
      </div>
    </section>
  );
}

export default Hero;

