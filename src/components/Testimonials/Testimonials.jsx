import React from "react";
import {
  Maximize2,
  Quote
} from "lucide-react";

import SectionHeader from "../SectionHeader/SectionHeader";

function Testimonials({ data, onSelect }) {
  return (
    <section
      id="testimonials"
      className="section testimonials-section"
    >
      <div className="container">
        <SectionHeader
          number="09"
          title="TESTIMONIALS"
          subtitle="Client Reviews"
        />

        <div className="testimonials-grid">
          {data.map((testimonial, index) => (
            <button
              type="button"
              className="testimonial-card glass-card reveal"
              key={`${testimonial.client}-${testimonial.image}`}
              onClick={() => onSelect(testimonial)}
              aria-label={`Open testimonial from ${testimonial.client}`}
            >
              <div className="testimonial-card-top">
                <Quote size={19} />

                <span>
                  {testimonial.client}
                </span>

                <Maximize2 size={16} />
              </div>

              <div className="testimonial-image-wrap">
                <img
                  src={testimonial.image}
                  alt={`${testimonial.client} testimonial`}
                  loading="lazy"
                />
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;