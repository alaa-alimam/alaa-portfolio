import React from "react";
import {
  ArrowUp,
  Github,
  Linkedin
} from "lucide-react";

function Footer({ data }) {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div>
            <div className="footer-brand">
              Alaa Ahmed Al Imam
            </div>

            <p>
              AI Engineer
            </p>
          </div>

          <div className="footer-socials">
            <a
              href={data.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={17} />
            </a>

            <a
              href={data.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Github size={17} />
            </a>

            <button
              type="button"
              onClick={scrollTop}
              aria-label="Back to top"
            >
              <ArrowUp size={17} />
            </button>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Alaa Ahmed Al Imam
          </span>

          <span>
            AI Engineer Portfolio
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;