
import React, { useEffect, useRef } from "react";

function AIVisual() {
  const visualRef = useRef(null);

  useEffect(() => {
    const element = visualRef.current;

    if (!element) return;

    const handleMove = (event) => {
      const rect = element.getBoundingClientRect();

      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;

      element.style.setProperty("--rotate-x", `${y * -8}deg`);
      element.style.setProperty("--rotate-y", `${x * 8}deg`);
    };

    const handleLeave = () => {
      element.style.setProperty("--rotate-x", "0deg");
      element.style.setProperty("--rotate-y", "0deg");
    };

    element.addEventListener("mousemove", handleMove);
    element.addEventListener("mouseleave", handleLeave);

    return () => {
      element.removeEventListener("mousemove", handleMove);
      element.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  const nodes = [
    { x: "18%", y: "30%", delay: "0s" },
    { x: "82%", y: "27%", delay: "1s" },
    { x: "12%", y: "58%", delay: "1.8s" },
    { x: "88%", y: "58%", delay: "0.7s" },
    { x: "27%", y: "76%", delay: "2.2s" },
    { x: "73%", y: "76%", delay: "1.4s" },
  ];

  return (
    <div ref={visualRef} className="ai-visual-pro">
      <div className="ai-scene">

        {/* Ambient background */}
        <div className="ai-ambient-glow" />
        <div className="ai-grid" />

        {/* System label */}
        <div className="ai-system-label">
          <span className="system-line" />
          <span>INTELLIGENT SYSTEM</span>
          <span className="system-line" />
        </div>

        {/* Background halos */}
        <div className="ai-halo ai-halo-one" />
        <div className="ai-halo ai-halo-two" />

        {/* Neural network */}
        <svg
          className="ai-network"
          viewBox="0 0 620 620"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <line x1="110" y1="185" x2="310" y2="310" />
          <line x1="510" y1="170" x2="310" y2="310" />

          <line x1="75" y1="360" x2="310" y2="310" />
          <line x1="545" y1="360" x2="310" y2="310" />

          <line x1="170" y1="470" x2="310" y2="310" />
          <line x1="450" y1="470" x2="310" y2="310" />

          <line x1="110" y1="185" x2="75" y2="360" />
          <line x1="510" y1="170" x2="545" y2="360" />

          <line x1="75" y1="360" x2="170" y2="470" />
          <line x1="545" y1="360" x2="450" y2="470" />
        </svg>

        {/* Network nodes */}
        {nodes.map((node, index) => (
          <span
            key={index}
            className="ai-network-node"
            style={{
              left: node.x,
              top: node.y,
              animationDelay: node.delay,
            }}
          />
        ))}

        {/* Orbital system */}
        <div className="ai-orbit-pro orbit-outer">
          <span className="orbit-dot orbit-dot-one" />
        </div>

        <div className="ai-orbit-pro orbit-middle">
          <span className="orbit-dot orbit-dot-two" />
        </div>

        <div className="ai-orbit-pro orbit-inner">
          <span className="orbit-dot orbit-dot-three" />
        </div>

        {/* Profile */}
        <div className="ai-profile-stage">

          <div className="profile-glass-ring" />

          <div className="profile-border">
            <div className="profile-image-wrap">
              <img
                src="/assets/profile/profile.png"
                alt="Alaa Ahmed Al Imam"
                className="profile-image"
              />

              <div className="profile-image-overlay" />
            </div>
          </div>

          {/* Online status */}
          <div className="ai-status">
            <span className="status-indicator" />
            <span>AI ENGINEER</span>
          </div>

        </div>

        {/* Technology labels */}
        <div className="ai-tech-label label-ml">
          <span className="label-icon">ML</span>
          <span>Machine Learning</span>
        </div>

        <div className="ai-tech-label label-llm">
          <span className="label-icon">LLM</span>
          <span>Generative AI</span>
        </div>

        <div className="ai-tech-label label-nlp">
          <span className="label-icon">NLP</span>
          <span>Natural Language</span>
        </div>

        <div className="ai-tech-label label-agent">
          <span className="label-icon">AI</span>
          <span>AI Agents</span>
        </div>

        {/* Metrics */}
        <div className="ai-metrics">

          <div>
            <strong>20+</strong>
            <span>AI Projects</span>
          </div>

          <div className="metric-divider" />

          <div>
            <strong>10+</strong>
            <span>ML / DL Models</span>
          </div>

          <div className="metric-divider" />

          <div>
            <strong>5+</strong>
            <span>AI Applications</span>
          </div>

        </div>

      </div>
    </div>
  );
}

export default AIVisual;
