import React from "react";

const ATSStandard = ({ data, colorTheme, fontFamily }) => {
  const { personal, work = [], education = [], skills = [], projects = [], certifications = [], languages = [], customSections = [] } = data || {};

  const getAccentColor = () => {
    switch (colorTheme) {
      case "emerald": return "#0f766e";
      case "terracotta": return "#c2410c";
      case "navy": return "#334155";
      case "burgundy": return "#881337";
      case "olive": return "#4d5d53";
      case "monochrome":
      default: return "#18181b";
    }
  };

  const accent = getAccentColor();

  return (
    <div style={{ padding: "3rem 3rem", minHeight: "297mm", fontFamily: fontFamily || "'Roboto', sans-serif", fontSize: "11pt", lineHeight: "1.5", color: "#111827", backgroundColor: "#ffffff" }}>
      {/* Header */}
      <header style={{ textAlign: "center", marginBottom: "1.5rem" }}>
        <h1 style={{ fontSize: "2rem", fontWeight: "700", margin: "0 0 0.25rem 0", color: "#111827", textTransform: "uppercase", letterSpacing: "0.05em" }}>
          {personal?.fullName || "YOUR NAME"}
        </h1>
        <div style={{ fontSize: "1.1rem", fontWeight: "600", color: accent, marginBottom: "0.5rem" }}>
          {personal?.jobTitle || "Professional Title"}
        </div>
        <div style={{ fontSize: "0.9rem", color: "#374151", display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "0.5rem" }}>
          {personal?.location && <span>{personal.location}</span>}
          {personal?.location && personal?.phone && <span>|</span>}
          {personal?.phone && <span>{personal.phone}</span>}
          {personal?.phone && personal?.email && <span>|</span>}
          {personal?.email && <span>{personal.email}</span>}
          {personal?.email && personal?.linkedin && <span>|</span>}
          {personal?.linkedin && <span>{personal.linkedin.replace(/^https?:\/\/(www\.)?/, "")}</span>}
          {personal?.github && <span>| {personal.github.replace(/^https?:\/\/(www\.)?/, "")}</span>}
          {personal?.website && <span>| {personal.website.replace(/^https?:\/\/(www\.)?/, "")}</span>}
        </div>
      </header>

      {/* Summary */}
      {personal?.summary && (
        <section style={{ marginBottom: "1.5rem" }}>
          <h2 style={{ fontSize: "1rem", fontWeight: "700", color: accent, textTransform: "uppercase", letterSpacing: "0.08em", borderBottom: "1px solid #111827", paddingBottom: "0.2rem", marginBottom: "0.5rem" }}>
            Professional Summary
          </h2>
          <p style={{ fontSize: "0.95rem", color: "#1f2937", margin: 0, textAlign: "justify" }}>
            {personal.summary}
          </p>
        </section>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <section style={{ marginBottom: "1.5rem" }}>
          <h2 style={{ fontSize: "1rem", fontWeight: "700", color: accent, textTransform: "uppercase", letterSpacing: "0.08em", borderBottom: "1px solid #111827", paddingBottom: "0.2rem", marginBottom: "0.5rem" }}>
            Skills & Competencies
          </h2>
          <p style={{ fontSize: "0.95rem", color: "#1f2937", margin: 0 }}>
            {skills.map((s) => typeof s === "string" ? s : s.name).join(" • ")}
          </p>
        </section>
      )}

      {/* Experience */}
      {work.length > 0 && (
        <section style={{ marginBottom: "1.5rem" }}>
          <h2 style={{ fontSize: "1rem", fontWeight: "700", color: accent, textTransform: "uppercase", letterSpacing: "0.08em", borderBottom: "1px solid #111827", paddingBottom: "0.2rem", marginBottom: "0.75rem" }}>
            Professional Experience
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {work.map((w, idx) => (
              <div key={idx}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                  <span style={{ fontWeight: "700", fontSize: "1.05rem", color: "#111827" }}>
                    {w.companyName}
                  </span>
                  <span style={{ fontSize: "0.9rem", fontWeight: "600", color: "#4b5563" }}>
                    {w.dateStarted} – {w.isCurrent ? "Present" : w.dateEnded}
                  </span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "0.35rem", fontStyle: "italic", color: "#374151" }}>
                  <span style={{ fontWeight: "600" }}>{w.positionTitle}</span>
                  {w.location && <span style={{ fontSize: "0.85rem" }}>{w.location}</span>}
                </div>
                {w.duties && w.duties.length > 0 && (
                  <ul style={{ margin: 0, paddingLeft: "1.25rem", color: "#1f2937", display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                    {w.duties.map((duty, dIdx) => (
                      duty ? <li key={dIdx} style={{ fontSize: "0.95rem" }}>{duty}</li> : null
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Education */}
      {education.length > 0 && (
        <section style={{ marginBottom: "1.5rem" }}>
          <h2 style={{ fontSize: "1rem", fontWeight: "700", color: accent, textTransform: "uppercase", letterSpacing: "0.08em", borderBottom: "1px solid #111827", paddingBottom: "0.2rem", marginBottom: "0.75rem" }}>
            Education
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {education.map((e, idx) => (
              <div key={idx}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                  <span style={{ fontWeight: "700", fontSize: "1rem", color: "#111827" }}>
                    {e.schoolName}
                  </span>
                  <span style={{ fontSize: "0.9rem", color: "#4b5563" }}>
                    {e.schoolStartDate} – {e.schoolEndDate}
                  </span>
                </div>
                <div style={{ fontStyle: "italic", color: "#374151", fontSize: "0.95rem" }}>
                  {e.schoolMajor} {e.location && <span>• {e.location}</span>}
                </div>
                {e.honors && <div style={{ fontSize: "0.9rem", color: "#4b5563", marginTop: "0.15rem" }}>{e.honors}</div>}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <section style={{ marginBottom: "1.5rem" }}>
          <h2 style={{ fontSize: "1rem", fontWeight: "700", color: accent, textTransform: "uppercase", letterSpacing: "0.08em", borderBottom: "1px solid #111827", paddingBottom: "0.2rem", marginBottom: "0.75rem" }}>
            Key Projects
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
            {projects.map((p, idx) => (
              <div key={idx}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                  <span style={{ fontWeight: "700", fontSize: "1rem", color: "#111827" }}>
                    {p.name} {p.technologies && <span style={{ fontWeight: "normal", fontStyle: "italic", fontSize: "0.85rem", color: "#4b5563" }}>({p.technologies})</span>}
                  </span>
                  {p.link && <span style={{ fontSize: "0.85rem", color: "#4b5563" }}>{p.link.replace(/^https?:\/\/(www\.)?/, "")}</span>}
                </div>
                {p.description && (
                  <p style={{ fontSize: "0.95rem", color: "#1f2937", margin: "0.2rem 0 0 0" }}>
                    {p.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Certifications & Languages */}
      {(certifications.length > 0 || languages.length > 0) && (
        <section style={{ marginBottom: "1.5rem" }}>
          <h2 style={{ fontSize: "1rem", fontWeight: "700", color: accent, textTransform: "uppercase", letterSpacing: "0.08em", borderBottom: "1px solid #111827", paddingBottom: "0.2rem", marginBottom: "0.5rem" }}>
            Additional Information
          </h2>
          <div style={{ fontSize: "0.95rem", color: "#1f2937", display: "flex", flexDirection: "column", gap: "0.35rem" }}>
            {certifications.length > 0 && (
              <div>
                <span style={{ fontWeight: "700" }}>Certifications: </span>
                {certifications.map((c) => `${c.name} (${c.issuer})`).join("; ")}
              </div>
            )}
            {languages.length > 0 && (
              <div>
                <span style={{ fontWeight: "700" }}>Languages: </span>
                {languages.map((l) => typeof l === "string" ? l : `${l.name} (${l.level})`).join(", ")}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Custom Sections */}
      {customSections.length > 0 && customSections.map((sec, sIdx) => (
        <section key={sIdx} style={{ marginBottom: "1.5rem" }}>
          <h2 style={{ fontSize: "1rem", fontWeight: "700", color: accent, textTransform: "uppercase", letterSpacing: "0.08em", borderBottom: "1px solid #111827", paddingBottom: "0.2rem", marginBottom: "0.75rem" }}>
            {sec.title}
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {(sec.items || []).map((item, iIdx) => (
              <div key={iIdx}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                  <span style={{ fontWeight: "700", fontSize: "0.95rem", color: "#111827" }}>{item.title}</span>
                  <span style={{ fontSize: "0.85rem", color: "#4b5563" }}>{item.date}</span>
                </div>
                {item.subtitle && <p style={{ fontSize: "0.9rem", color: "#1f2937", margin: "0.15rem 0 0 0" }}>{item.subtitle}</p>}
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default ATSStandard;
