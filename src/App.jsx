// import { useEffect, useState } from "react";

// import Navbar from "./components/Navbar/Navbar";
// import Hero from "./components/Hero/Hero";
// import Education from "./components/Education/Education";
// import Experience from "./components/Experience/Experience";
// import TechnicalSkills from "./components/TechnicalSkills/TechnicalSkills";
// import SoftSkills from "./components/SoftSkills/SoftSkills";
// import Services from "./components/Services/Services";
// import Projects from "./components/Projects/Projects";
// import Training from "./components/Training/Training";
// import Testimonials from "./components/Testimonials/Testimonials";
// import Contact from "./components/Contact/Contact";
// import Footer from "./components/Footer/Footer";

// import { portfolioData } from "./data/portfolioData";

// function App() {
//   const [activeSection, setActiveSection] = useState("home");
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [selectedTestimonial, setSelectedTestimonial] = useState(null);

//   useEffect(() => {
//     const sections = document.querySelectorAll("section[id]");

//     const observer = new IntersectionObserver(
//       (entries) => {
//         const visibleEntry = entries
//           .filter((entry) => entry.isIntersecting)
//           .sort(
//             (a, b) =>
//               b.intersectionRatio - a.intersectionRatio
//           )[0];

//         if (visibleEntry) {
//           setActiveSection(visibleEntry.target.id);
//         }
//       },
//       {
//         threshold: [0.2, 0.4, 0.6],
//         rootMargin: "-20% 0px -55% 0px"
//       }
//     );

//     sections.forEach((section) => observer.observe(section));

//     return () => observer.disconnect();
//   }, []);

//   const closeMobileMenu = () => {
//     setMobileMenuOpen(false);
//   };

//   return (
//     <div className="app">
//       <div className="ambient-background">
//         <div className="ambient-orb ambient-orb-one" />
//         <div className="ambient-orb ambient-orb-two" />
//         <div className="ambient-orb ambient-orb-three" />
//       </div>

//       <Navbar
//         activeSection={activeSection}
//         mobileMenuOpen={mobileMenuOpen}
//         setMobileMenuOpen={setMobileMenuOpen}
//         onNavigate={closeMobileMenu}
//         cv={portfolioData.personal.cv}
//       />

//       <main>
//         <Hero
//           data={portfolioData.personal}
//           onNavigate={closeMobileMenu}
//         />

//         <Education data={portfolioData.education} />

//         <Experience data={portfolioData.experience} />

//         <TechnicalSkills data={portfolioData.technicalSkills} />

//         <SoftSkills data={portfolioData.softSkills} />

//         <Services data={portfolioData.services} />

//         <Projects data={portfolioData.projects} />

//         <Training data={portfolioData.training} />

//         <Testimonials
//           data={portfolioData.testimonials}
//           onSelect={setSelectedTestimonial}
//         />

//         <Contact data={portfolioData.personal} />
//       </main>

//       <Footer data={portfolioData.personal} />

//       {selectedTestimonial && (
//         <div
//           className="testimonial-modal"
//           role="dialog"
//           aria-modal="true"
//           aria-label={`${selectedTestimonial.client} testimonial`}
//           onClick={() => setSelectedTestimonial(null)}
//         >
//           <button
//             className="modal-close"
//             type="button"
//             aria-label="Close testimonial"
//             onClick={() => setSelectedTestimonial(null)}
//           >
//             ×
//           </button>

//           <div
//             className="modal-content"
//             onClick={(event) => event.stopPropagation()}
//           >
//             <img
//               src={selectedTestimonial.image}
//               alt={`${selectedTestimonial.client} testimonial`}
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;
import React, { useEffect, useState } from "react";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import TechnicalSkills from "./components/TechnicalSkills/TechnicalSkills";
import SoftSkills from "./components/SoftSkills/SoftSkills";
import Services from "./components/Services/Services";
import Projects from "./components/Projects/Projects";
import Training from "./components/Training/Training";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

import { portfolioData } from "./data/portfolioData";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  // ----------------------------------------
  // Active Navbar Section
  // ----------------------------------------
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visibleEntries.length > 0) {
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      {
        threshold: [0.2, 0.4, 0.6],
        rootMargin: "-20% 0px -55% 0px",
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  // ----------------------------------------
  // Scroll Reveal Animation
  // ----------------------------------------
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
      }
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  // ----------------------------------------
  // Mobile Navigation
  // ----------------------------------------
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // ----------------------------------------
  // Testimonial Modal
  // ----------------------------------------
  const openTestimonial = (testimonial) => {
    setSelectedTestimonial(testimonial);
  };

  const closeTestimonialModal = () => {
    setSelectedTestimonial(null);
  };

  // ----------------------------------------
  // Render
  // ----------------------------------------
  return (
    <div className="app">
      {/* Ambient Background */}
      <div className="ambient-background" aria-hidden="true">
        <div className="ambient-orb ambient-orb-one" />
        <div className="ambient-orb ambient-orb-two" />
        <div className="ambient-orb ambient-orb-three" />
      </div>

      {/* Navbar */}
      <Navbar
        activeSection={activeSection}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        onNavigate={closeMobileMenu}
        cv={portfolioData.personal.cv}
      />

      {/* Main Content */}
      <main>
        <Hero
          data={portfolioData.personal}
          onNavigate={closeMobileMenu}
        />

        <Education
          data={portfolioData.education}
        />

        <Experience
          data={portfolioData.experience}
        />

        <TechnicalSkills
          data={portfolioData.technicalSkills}
        />

        <SoftSkills
          data={portfolioData.softSkills}
        />

        <Services
          data={portfolioData.services}
        />

        <Projects
          data={portfolioData.projects}
        />

        <Training
          data={portfolioData.training}
        />

        <Testimonials
          data={portfolioData.testimonials}
          onSelect={openTestimonial}
        />

        <Contact
          data={portfolioData.personal}
        />
      </main>

      {/* Footer */}
      <Footer
        data={portfolioData.personal}
      />

      {/* Testimonial Modal */}
      {selectedTestimonial && (
        <div
          className="testimonial-modal"
          role="dialog"
          aria-modal="true"
          aria-label="Client testimonial"
          onClick={closeTestimonialModal}
        >
          <button
            className="modal-close"
            type="button"
            aria-label="Close testimonial"
            onClick={closeTestimonialModal}
          >
            ×
          </button>

          <div
            className="modal-content"
            onClick={(event) => {
              event.stopPropagation();
            }}
          >
            <img
              src={selectedTestimonial.image}
              alt="Client testimonial"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;