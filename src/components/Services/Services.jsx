import React from "react";
import {
  BrainCircuit,
  BarChart3,
  MessageSquareText,
  Network,
  Sparkles
} from "lucide-react";

import SectionHeader from "../SectionHeader/SectionHeader";

const iconMap = {
  brain: BrainCircuit,
  chart: BarChart3,
  message: MessageSquareText,
  network: Network,
  sparkles: Sparkles
};

function Services({ data }) {
  return (
    <section
      id="services"
      className="section services-section"
    >
      <div className="container">
        <SectionHeader
          number="06"
          title="SERVICES"
          subtitle="Practical AI solutions"
        />

        <div className="services-grid">
          {data.map((service, index) => {
            const Icon =
              iconMap[service.icon] ||
              BrainCircuit;

            return (
              <article
                className="service-card glass-card reveal"
                key={service.title}
              >
                <div className="service-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="service-icon">
                  <Icon size={28} />
                </div>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <div className="service-arrow">
                  <span />
                  <span />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;