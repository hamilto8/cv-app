import React from "react";

const MinimalistTech = ({ data, colorTheme, fontFamily }) => {
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
    <div style={{ padding: "2.5rem 2.5rem", minHeight: "297mm", fontFamily: fontFamily || "'Space Grotesk', sans-serif", fontSize: "10.5pt", lineHeight: "1.5", color: "#18181b", backgroundColor: "#ffffff" }}>
      {/* Header */}
      <header style={{ borderBottom: "2px solid #18181b", paddingBottom: "1.25rem", marginBottom: "1.5rem" }}>
        <h1 style={{ fontSize: "2.25rem", fontWeight: "700", letterSpacing: "-0.03em", margin: "0 0 0.25rem 0", color: "#18181b" }}>
          {personal?.fullName || "Your Name"}
        </h1>
        <div style={{ fontSize: "1.1rem", fontWeight: "600", color: accent, marginBottom: "0.75rem", fontFamily: "'Inter', sans-serif" }}>
          {personal?.jobTitle || "Professional Title"}
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", fontSize: "0.85rem", color: "#52525b", fontFamily: "'Inter', sans-serif" }}>
          {personal?.email && <span>📧 {personal.email}</span>}
          {personal?.phone && <span>📱 {personal.phone}</span>}
          {personal?.location && <span>📍 {personal.location}</span>}
          {personal?.linkedin && <span>🔗 {personal.linkedin.replace(/^https?:\/\/(www\.)?/, "")}</span>}
          {personal?.github && <span>🐙 {personal.github.replace(/^https?:\/\/(www\.)?/, "")}</span>}
          {personal?.website && <span>🌐 {personal.website.replace(/^https?:\/\/(www\.)?/, "")}</span>}
        </div>
      </header>

      {/* Summary */}
      {personal?.summary && (
        <section style={{ marginBottom: "1.5rem" }}>
          <p style={{ fontSize: "0.95rem", color: "#3f3f46", margin: 0, fontFamily: "'Inter', sans-serif" }}>
            {personal.summary}
          </p>
        </section>
      )}

      {/* Technical Skills - Tag Cloud */}
      {skills.length > 0 && (
        <section style={{ marginBottom: "1.75rem" }}>
          <h2 style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: "700", color: "#71717a", borderBottom: "1px solid #e4e4e7", paddingBottom: "0.3rem", marginBottom: "0.75rem" }}>
            Technical Expertise & Stack
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
            {skills.map((s, idx) => {
              const name = typeof s === "string" ? s : s.name;
              return (
                <span key={idx} style={{ backgroundColor: "#f4f4f5", border: "1px solid #d4d4d8", color: "#27272a", padding: "0.2rem 0.6rem", borderRadius: "4px", fontSize: "0.8rem", fontWeight: "600", fontFamily: "monospace" }}>
                  {name}
                </span>
              );
            })}
          </div>
        </section>
      )}

      {/* Work Experience */}
      {work.length > 0 && (
        <section style={{ marginBottom: "1.75rem" }}>
          <h2 style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: "700", color: "#71717a", borderBottom: "1px solid #e4e4e7", paddingBottom: "0.3rem", marginBottom: "1rem" }}>
            Professional Experience
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {work.map((w, idx) => (
              <div key={idx}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: "700", margin: 0, color: "#18181b" }}>
                    {w.positionTitle}
                  </h3>
                  <span style={{ fontSize: "0.85rem", fontWeight: "600", color: "#71717a", fontFamily: "monospace" }}>
                    {w.dateStarted} – {w.isCurrent ? "Present" : w.dateEnded}
                  </span>
                </div>
                <div style={{ fontSize: "0.95rem", fontWeight: "600", color: accent, marginBottom: "0.5rem" }}>
                  {w.companyName} {w.location && <span style={{ color: "#71717a", fontWeight: "400" }}>• {w.location}</span>}
                </div>
                {w.duties && w.duties.length > 0 && (
                  <ul style={{ margin: 0, paddingLeft: "1.25rem", color: "#3f3f46", display: "flex", flexDirection: "column", gap: "0.35rem", fontFamily: "'Inter', sans-serif" }}>
                    {w.duties.map((duty, dIdx) => (
                      duty ? <li key={dIdx} style={{ fontSize: "0.9rem" }}>{duty}</li> : null
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <section style={{ marginBottom: "1.75rem" }}>
          <h2 style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: "700", color: "#71717a", borderBottom: "1px solid #e4e4e7", paddingBottom: "0.3rem", marginBottom: "1rem" }}>
            Key Engineering Projects
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {projects.map((p, idx) => (
              <div key={idx}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "0.2rem" }}>
                  <h3 style={{ fontSize: "1rem", fontWeight: "700", margin: 0, color: "#18181b" }}>
                    {p.name}
                  </h3>
                  <div style={{ fontSize: "0.8rem", color: accent, fontFamily: "monospace" }}>
                    {p.link && <span>[Demo]</span>}
                    {p.link && p.repo && <span> </span>}
                    {p.repo && <span>[Repo]</span>}
                  </div>
                </div>
                {p.technologies && (
                  <div style={{ fontSize: "0.8rem", color: "#52525b", marginBottom: "0.35rem", fontFamily: "monospace", backgroundColor: "#f4f4f5", padding: "0.2rem 0.5rem", borderRadius: "3px", display: "inline-block" }}>
                    Stack: {p.technologies}
                  </div>
                )}
                {p.description && (
                  <p style={{ fontSize: "0.9rem", color: "#3f3f46", margin: 0, fontFamily: "'Inter', sans-serif" }}>
                    {p.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Education & Certs */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", marginBottom: "1.5rem" }}>
        {education.length > 0 && (
          <section>
            <h2 style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: "700", color: "#71717a", borderBottom: "1px solid #e4e4e7", paddingBottom: "0.3rem", marginBottom: "0.75rem" }}>
              Education
            </h2>
            {education.map((e, idx) => (
              <div key={idx} style={{ marginBottom: "0.75rem" }}>
                <div style={{ fontWeight: "700", fontSize: "0.95rem" }}>{e.schoolName}</div>
                <div style={{ fontSize: "0.85rem", color: "#3f3f46" }}>{e.schoolMajor}</div>
                <div style={{ fontSize: "0.8rem", color: "#71717a", fontFamily: "monospace" }}>{e.schoolStartDate} – {e.schoolEndDate}</div>
              </div>
            ))}
          </section>
        )}

        {(certifications.length > 0 || languages.length > 0) && (
          <section>
            {certifications.length > 0 && (
              <div style={{ marginBottom: "1rem" }}>
                <h2 style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: "700", color: "#71717a", borderBottom: "1px solid #e4e4e7", paddingBottom: "0.3rem", marginBottom: "0.75rem" }}>
                  Certifications
                </h2>
                {certifications.map((c, idx) => (
                  <div key={idx} style={{ fontSize: "0.85rem", marginBottom: "0.4rem" }}>
                    <span style={{ fontWeight: "600" }}>{c.name}</span> <span style={{ color: "#71717a" }}>({c.issuer})</span>
                  </div>
                ))}
              </div>
            )}
            {languages.length > 0 && (
              <div>
                <h2 style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: "700", color: "#71717a", borderBottom: "1px solid #e4e4e7", paddingBottom: "0.3rem", marginBottom: "0.5rem" }}>
                  Languages
                </h2>
                <div style={{ fontSize: "0.85rem", color: "#3f3f46" }}>
                  {languages.map((l) => typeof l === "string" ? l : `${l.name} (${l.level})`).join(", ")}
                </div>
              </div>
            )}
          </section>
        )}
      </div>

      {/* Custom Sections */}
      {customSections.length > 0 && customSections.map((sec, sIdx) => (
        <section key={sIdx} style={{ marginBottom: "1.5rem" }}>
          <h2 style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: "700", color: "#71717a", borderBottom: "1px solid #e4e4e7", paddingBottom: "0.3rem", marginBottom: "0.75rem" }}>
            {sec.title}
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {(sec.items || []).map((item, iIdx) => (
              <div key={iIdx}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ fontWeight: "700", fontSize: "0.9rem" }}>{item.title}</span>
                  <span style={{ fontSize: "0.8rem", color: "#71717a", fontFamily: "monospace" }}>{item.date}</span>
                </div>
                {item.subtitle && <div style={{ fontSize: "0.85rem", color: "#3f3f46" }}>{item.subtitle}</div>}
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default MinimalistTech;
