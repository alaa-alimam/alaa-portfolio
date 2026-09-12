import React from "react";
import {
  Download,
  Menu,
  X
} from "lucide-react";

const navItems = [
  { label: "Home", id: "home" },
  { label: "Education", id: "education" },
  { label: "Experience", id: "experience" },
  { label: "Skills", id: "skills" },
  { label: "Services", id: "services" },
  { label: "Projects", id: "projects" },
  { label: "Training", id: "training" },
  { label: "Testimonials", id: "testimonials" },
  { label: "Contact", id: "contact" }
];

function Navbar({
  activeSection,
  mobileMenuOpen,
  setMobileMenuOpen,
  onNavigate,
  cv
}) {
  const scrollToSection = (id) => {
    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    onNavigate();
  };

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <button
          className="brand"
          type="button"
          onClick={() => scrollToSection("home")}
          aria-label="Go to homepage"
        >
          <span className="brand-mark">
            AA
          </span>

          <span className="brand-text">
            Alaa<span>Alimam</span>
          </span>
        </button>

        <div
          className={`nav-links ${
            mobileMenuOpen
              ? "nav-links-open"
              : ""
          }`}
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              className={
                activeSection === item.id
                  ? "nav-link active"
                  : "nav-link"
              }
              onClick={() =>
                scrollToSection(item.id)
              }
            >
              {item.label}
            </button>
          ))}

          <a
            className="nav-cv-button"
            href={cv}
            target="_blank"
            rel="noreferrer"
            onClick={onNavigate}
          >
            <Download size={16} />
            <span>Download CV</span>
          </a>
        </div>

        <button
          className="mobile-menu-button"
          type="button"
          aria-label={
            mobileMenuOpen
              ? "Close menu"
              : "Open menu"
          }
          aria-expanded={mobileMenuOpen}
          onClick={() =>
            setMobileMenuOpen(
              (previous) => !previous
            )
          }
        >
          {mobileMenuOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;