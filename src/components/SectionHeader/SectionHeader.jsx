import React from "react";
function SectionHeader({
  number,
  title,
  subtitle,
  align = "left"
}) {
  return (
    <header
      className={`section-header section-header-${align}`}
    >
      <div className="section-number">
        {number}
      </div>

      <div>
        <h2>{title}</h2>

        {subtitle && (
          <p>{subtitle}</p>
        )}
      </div>
    </header>
  );
}

export default SectionHeader;