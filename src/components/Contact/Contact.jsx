import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  ArrowUpRight
} from "lucide-react";

import { useState } from "react";

import SectionHeader from "../SectionHeader/SectionHeader";

function Contact({ data }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value
    }));

    setError("");
    setSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();

    if (!name || !email || !message) {
      setError(
        "Please complete all fields before sending."
      );

      return;
    }

    const subject = encodeURIComponent(
      `Portfolio Inquiry from ${name}`
    );

    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    window.location.href =
      `mailto:${data.email}?subject=${subject}&body=${body}`;

    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="section contact-section"
    >
      <div className="container">
        <SectionHeader
          number="10"
          title="CONTACT"
          subtitle="Let's connect"
        />

        <div className="contact-shell glass-card">
          <div className="contact-intro reveal">
            <span className="contact-kicker">
              OPEN TO OPPORTUNITIES
            </span>

            <h2>
              Let’s Build Something Intelligent
            </h2>

            <p>
              Have an AI project, business idea,
              or technical challenge in mind?
              <br />
              Let’s discuss how Artificial
              Intelligence can turn your idea
              into a practical solution.
            </p>

            <div className="contact-details">
              <a href={`mailto:${data.email}`}>
                <span className="contact-detail-icon">
                  <Mail size={18} />
                </span>

                <span>
                  {data.email}
                </span>
              </a>

              <a href={`tel:${data.phone.replace(/\s/g, "")}`}>
                <span className="contact-detail-icon">
                  <Phone size={18} />
                </span>

                <span>
                  {data.phone}
                </span>
              </a>

              <div>
                <span className="contact-detail-icon">
                  <MapPin size={18} />
                </span>

                <span>
                  {data.location}
                </span>
              </div>
            </div>

            <div className="contact-socials">
              <a
                href={data.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>

              <a
                href={data.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
            </div>
          </div>

          <form
            className="contact-form reveal reveal-delay"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="form-group">
              <label htmlFor="name">
                Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                autoComplete="name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">
                Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="your@email.com"
                autoComplete="email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">
                Message
              </label>

              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project or idea..."
                rows="7"
              />
            </div>

            {error && (
              <p className="form-message form-error">
                {error}
              </p>
            )}

            {submitted && (
              <p className="form-message form-success">
                Your email client is being opened.
              </p>
            )}

            <button
              className="button button-primary contact-submit"
              type="submit"
            >
              Send Message
              <ArrowUpRight size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;