import React from "react";
import { Mail, Phone, MapPin, Globe } from "lucide-react";
import { Linkedin, Github } from "../../Icons";

const CreativeGlass = ({ data, colorTheme, fontFamily }) => {
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
    <div style={{ padding: "0", minHeight: "297mm", fontFamily: fontFamily || "'Outfit', sans-serif", fontSize: "11pt", lineHeight: "1.5", color: "#27272a", backgroundColor: "#ffffff" }}>
      {/* Top Architectural Header Banner */}
      <div style={{ backgroundColor: accent, color: "#ffffff", padding: "3rem 2.5rem 2.5rem 2.5rem", position: "relative" }}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: "700", margin: "0 0 0.35rem 0", letterSpacing: "-0.02em" }}>
          {personal?.fullName || "Your Name"}
        </h1>
        <div style={{ fontSize: "1.2rem", fontWeight: "500", opacity: 0.9, marginBottom: "1.25rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>
          {personal?.jobTitle || "Professional Title"}
        </div>
        
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1.25rem", fontSize: "0.85rem", opacity: 0.95, borderTop: "1px solid rgba(255,255,255,0.2)", paddingTop: "1rem" }}>
          {personal?.email && (
            <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
              <Mail size={14} /> <span>{personal.email}</span>
            </div>
          )}
          {personal?.phone && (
            <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
              <Phone size={14} /> <span>{personal.phone}</span>
            </div>
          )}
          {personal?.location && (
            <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
              <MapPin size={14} /> <span>{personal.location}</span>
            </div>
          )}
          {personal?.linkedin && (
            <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
              <Linkedin size={14} /> <span>{personal.linkedin.replace(/^https?:\/\/(www\.)?/, "")}</span>
            </div>
          )}
          {personal?.github && (
            <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
              <Github size={14} /> <span>{personal.github.replace(/^https?:\/\/(www\.)?/, "")}</span>
            </div>
          )}
          {personal?.website && (
            <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
              <Globe size={14} /> <span>{personal.website.replace(/^https?:\/\/(www\.)?/, "")}</span>
            </div>
          )}
        </div>
      </div>

      <div style={{ padding: "2.5rem" }}>
        {/* Summary */}
        {personal?.summary && (
          <div style={{ backgroundColor: "#fafaf9", borderLeft: `4px solid ${accent}`, padding: "1.25rem", borderRadius: "0 4px 4px 0", marginBottom: "2rem", border: "1px solid #e4e4e7", borderLeftWidth: "4px" }}>
            <p style={{ fontSize: "0.95rem", color: "#3f3f46", margin: 0, fontStyle: "italic", lineHeight: "1.6" }}>
              "{personal.summary}"
            </p>
          </div>
        )}

        {/* Skills Tag Badges */}
        {skills.length > 0 && (
          <div style={{ marginBottom: "2.25rem" }}>
            <h2 style={{ fontSize: "1.1rem", fontWeight: "700", color: "#18181b", textTransform: "uppercase", letterSpacing: "0.05em", display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
              <span style={{ width: "12px", height: "12px", backgroundColor: accent, borderRadius: "2px", display: "inline-block" }} />
              Core Competencies & Skills
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {skills.map((s, idx) => {
                const name = typeof s === "string" ? s : s.name;
                const level = typeof s === "string" ? "" : s.level;
                return (
                  <div key={idx} style={{ padding: "0.4rem 0.85rem", backgroundColor: "#f4f4f5", border: "1px solid #d4d4d8", borderRadius: "4px", fontSize: "0.85rem", fontWeight: "600", color: "#27272a", display: "flex", alignItems: "center", gap: "0.4rem" }}>
                    <span>{name}</span>
                    {level && <span style={{ fontSize: "0.7rem", color: accent, fontWeight: "700" }}>• {level}</span>}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Work Experience */}
        {work.length > 0 && (
          <div style={{ marginBottom: "2.25rem" }}>
            <h2 style={{ fontSize: "1.1rem", fontWeight: "700", color: "#18181b", textTransform: "uppercase", letterSpacing: "0.05em", display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.25rem" }}>
              <span style={{ width: "12px", height: "12px", backgroundColor: accent, borderRadius: "2px", display: "inline-block" }} />
              Professional Experience
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem", position: "relative", paddingLeft: "1.5rem", borderLeft: "2px solid #e4e4e7" }}>
              {work.map((w, idx) => (
                <div key={idx} style={{ position: "relative" }}>
                  <div style={{ position: "absolute", left: "-1.85rem", top: "0.3rem", width: "12px", height: "12px", borderRadius: "50%", backgroundColor: accent, border: "2px solid #ffffff", boxShadow: "0 0 0 3px #f4f4f5" }} />
                  
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "0.2rem" }}>
                    <h3 style={{ fontSize: "1.1rem", fontWeight: "700", color: "#18181b", margin: 0 }}>
                      {w.positionTitle}
                    </h3>
                    <span style={{ fontSize: "0.85rem", fontWeight: "600", color: "#71717a", backgroundColor: "#f4f4f5", padding: "0.2rem 0.6rem", borderRadius: "4px" }}>
                      {w.dateStarted} – {w.isCurrent ? "Present" : w.dateEnded}
                    </span>
                  </div>
                  
                  <div style={{ fontSize: "0.95rem", fontWeight: "600", color: accent, marginBottom: "0.6rem" }}>
                    {w.companyName} {w.location && <span style={{ color: "#71717a", fontWeight: "400" }}>• {w.location}</span>}
                  </div>
                  
                  {w.duties && w.duties.length > 0 && (
                    <ul style={{ margin: 0, paddingLeft: "1.25rem", color: "#3f3f46", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                      {w.duties.map((duty, dIdx) => (
                        duty ? <li key={dIdx} style={{ fontSize: "0.9rem" }}>{duty}</li> : null
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Projects */}
        {projects.length > 0 && (
          <div style={{ marginBottom: "2.25rem" }}>
            <h2 style={{ fontSize: "1.1rem", fontWeight: "700", color: "#18181b", textTransform: "uppercase", letterSpacing: "0.05em", display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
              <span style={{ width: "12px", height: "12px", backgroundColor: accent, borderRadius: "2px", display: "inline-block" }} />
              Standout Projects
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              {projects.map((p, idx) => (
                <div key={idx} style={{ padding: "1.25rem", border: "1px solid #e4e4e7", borderRadius: "4px", backgroundColor: "#fafaf9" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "0.4rem" }}>
                    <h3 style={{ fontSize: "1rem", fontWeight: "700", color: "#18181b", margin: 0 }}>
                      {p.name}
                    </h3>
                  </div>
                  {p.technologies && (
                    <div style={{ fontSize: "0.75rem", color: accent, fontWeight: "600", marginBottom: "0.5rem" }}>
                      {p.technologies}
                    </div>
                  )}
                  {p.description && (
                    <p style={{ fontSize: "0.85rem", color: "#52525b", margin: 0 }}>
                      {p.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Education, Certs, Languages grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
          {education.length > 0 && (
            <div>
              <h2 style={{ fontSize: "1rem", fontWeight: "700", color: "#18181b", textTransform: "uppercase", letterSpacing: "0.05em", display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.85rem" }}>
                <span style={{ width: "10px", height: "10px", backgroundColor: accent, borderRadius: "2px", display: "inline-block" }} />
                Education
              </h2>
              {education.map((e, idx) => (
                <div key={idx} style={{ marginBottom: "0.85rem" }}>
                  <div style={{ fontWeight: "700", fontSize: "0.95rem" }}>{e.schoolName}</div>
                  <div style={{ fontSize: "0.85rem", color: "#3f3f46" }}>{e.schoolMajor}</div>
                  <div style={{ fontSize: "0.8rem", color: "#71717a" }}>{e.schoolStartDate} – {e.schoolEndDate}</div>
                  {e.honors && <div style={{ fontSize: "0.8rem", color: "#52525b", fontStyle: "italic", marginTop: "0.2rem" }}>{e.honors}</div>}
                </div>
              ))}
            </div>
          )}

          <div>
            {certifications.length > 0 && (
              <div style={{ marginBottom: "1.5rem" }}>
                <h2 style={{ fontSize: "1rem", fontWeight: "700", color: "#18181b", textTransform: "uppercase", letterSpacing: "0.05em", display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.85rem" }}>
                  <span style={{ width: "10px", height: "10px", backgroundColor: accent, borderRadius: "2px", display: "inline-block" }} />
                  Certifications
                </h2>
                {certifications.map((c, idx) => (
                  <div key={idx} style={{ fontSize: "0.85rem", marginBottom: "0.5rem" }}>
                    <div style={{ fontWeight: "600", color: "#18181b" }}>{c.name}</div>
                    <div style={{ fontSize: "0.75rem", color: "#71717a" }}>{c.issuer} • {c.date}</div>
                  </div>
                ))}
              </div>
            )}

            {languages.length > 0 && (
              <div>
                <h2 style={{ fontSize: "1rem", fontWeight: "700", color: "#18181b", textTransform: "uppercase", letterSpacing: "0.05em", display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.6rem" }}>
                  <span style={{ width: "10px", height: "10px", backgroundColor: accent, borderRadius: "2px", display: "inline-block" }} />
                  Languages
                </h2>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                  {languages.map((l, idx) => {
                    const name = typeof l === "string" ? l : l.name;
                    return (
                      <span key={idx} style={{ backgroundColor: "#f4f4f5", padding: "0.3rem 0.6rem", borderRadius: "4px", fontSize: "0.85rem", fontWeight: "600" }}>
                        {name}
                      </span>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Custom Sections */}
        {customSections.length > 0 && customSections.map((sec, sIdx) => (
          <div key={sIdx} style={{ marginTop: "2rem" }}>
            <h2 style={{ fontSize: "1.1rem", fontWeight: "700", color: "#18181b", textTransform: "uppercase", letterSpacing: "0.05em", display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
              <span style={{ width: "12px", height: "12px", backgroundColor: accent, borderRadius: "2px", display: "inline-block" }} />
              {sec.title}
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
              {(sec.items || []).map((item, iIdx) => (
                <div key={iIdx}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                    <h3 style={{ fontSize: "0.95rem", fontWeight: "700", color: "#18181b", margin: 0 }}>
                      {item.title}
                    </h3>
                    <span style={{ fontSize: "0.8rem", color: "#71717a" }}>{item.date}</span>
                  </div>
                  {item.subtitle && <p style={{ fontSize: "0.85rem", color: "#3f3f46", margin: "0.2rem 0 0 0" }}>{item.subtitle}</p>}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreativeGlass;
