import React from "react";
import { Mail, Phone, MapPin, Globe } from "lucide-react";
import { Linkedin, Github } from "../../Icons";

const ModernExecutive = ({ data, colorTheme, fontFamily }) => {
  const { personal, work = [], education = [], skills = [], projects = [], certifications = [], languages = [], customSections = [] } = data || {};

  const getAccentColor = () => {
    switch (colorTheme) {
      case "emerald": return "#0f766e";
      case "terracotta": return "#c2410c";
      case "navy": return "#334155";
      case "burgundy": return "#881337";
      case "olive": return "#4d5d53";
      case "monochrome":
      default: return "#27272a";
    }
  };

  const getSidebarAccent = () => {
    switch (colorTheme) {
      case "emerald": return "#10b981";
      case "terracotta": return "#fb923c";
      case "navy": return "#94a3b8";
      case "burgundy": return "#fb7185";
      case "olive": return "#a3e635";
      case "monochrome":
      default: return "#e4e4e7";
    }
  };

  const accent = getAccentColor();
  const sidebarAccent = getSidebarAccent();

  return (
    <div style={{ display: "flex", minHeight: "297mm", fontFamily: fontFamily || "'Inter', sans-serif", fontSize: "11pt", lineHeight: "1.4", color: "#27272a", backgroundColor: "#ffffff" }}>
      {/* Left Colored Sidebar */}
      <div style={{ width: "32%", backgroundColor: "#18181b", color: "#f8fafc", padding: "2rem 1.25rem", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        {/* Name & Title */}
        <div>
          <h1 style={{ fontSize: "1.75rem", fontWeight: "700", lineHeight: "1.2", color: "#ffffff", margin: "0 0 0.35rem 0", letterSpacing: "-0.02em" }}>
            {personal?.fullName || "Your Name"}
          </h1>
          <div style={{ fontSize: "0.95rem", fontWeight: "500", color: sidebarAccent, textTransform: "uppercase", letterSpacing: "0.05em" }}>
            {personal?.jobTitle || "Professional Title"}
          </div>
        </div>

        {/* Contact Info */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem", fontSize: "0.85rem", borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "1.25rem" }}>
          {personal?.email && (
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", wordBreak: "break-all" }}>
              <Mail size={14} color={sidebarAccent} style={{ flexShrink: 0 }} />
              <span>{personal.email}</span>
            </div>
          )}
          {personal?.phone && (
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <Phone size={14} color={sidebarAccent} style={{ flexShrink: 0 }} />
              <span>{personal.phone}</span>
            </div>
          )}
          {personal?.location && (
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <MapPin size={14} color={sidebarAccent} style={{ flexShrink: 0 }} />
              <span>{personal.location}</span>
            </div>
          )}
          {personal?.linkedin && (
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", wordBreak: "break-all" }}>
              <Linkedin size={14} color={sidebarAccent} style={{ flexShrink: 0 }} />
              <span>{personal.linkedin.replace(/^https?:\/\/(www\.)?/, "")}</span>
            </div>
          )}
          {personal?.github && (
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", wordBreak: "break-all" }}>
              <Github size={14} color={sidebarAccent} style={{ flexShrink: 0 }} />
              <span>{personal.github.replace(/^https?:\/\/(www\.)?/, "")}</span>
            </div>
          )}
          {personal?.website && (
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", wordBreak: "break-all" }}>
              <Globe size={14} color={sidebarAccent} style={{ flexShrink: 0 }} />
              <span>{personal.website.replace(/^https?:\/\/(www\.)?/, "")}</span>
            </div>
          )}
        </div>

        {/* Skills */}
        {skills.length > 0 && (
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "1.25rem" }}>
            <h3 style={{ fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "#a1a1aa", marginBottom: "0.75rem", fontWeight: "700" }}>
              Core Skills
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {skills.map((s, idx) => {
                const skillName = typeof s === "string" ? s : s.name;
                const skillLevel = typeof s === "string" ? "Advanced" : s.level;
                const width = skillLevel === "Expert" ? "100%" : skillLevel === "Advanced" ? "80%" : skillLevel === "Intermediate" ? "60%" : "40%";
                return (
                  <div key={idx} style={{ fontSize: "0.85rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.2rem" }}>
                      <span>{skillName}</span>
                      <span style={{ fontSize: "0.7rem", color: "#a1a1aa" }}>{skillLevel}</span>
                    </div>
                    <div style={{ width: "100%", height: "4px", backgroundColor: "rgba(255,255,255,0.15)", borderRadius: "2px", overflow: "hidden" }}>
                      <div style={{ width, height: "100%", backgroundColor: sidebarAccent }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Certifications */}
        {certifications.length > 0 && (
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "1.25rem" }}>
            <h3 style={{ fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "#a1a1aa", marginBottom: "0.75rem", fontWeight: "700" }}>
              Certifications
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {certifications.map((c, idx) => (
                <div key={idx} style={{ fontSize: "0.85rem" }}>
                  <div style={{ fontWeight: "600", color: "#ffffff" }}>{c.name}</div>
                  <div style={{ fontSize: "0.75rem", color: "#a1a1aa" }}>{c.issuer} {c.date && `• ${c.date}`}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Languages */}
        {languages.length > 0 && (
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "1.25rem" }}>
            <h3 style={{ fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "#a1a1aa", marginBottom: "0.75rem", fontWeight: "700" }}>
              Languages
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
              {languages.map((l, idx) => {
                const name = typeof l === "string" ? l : l.name;
                const level = typeof l === "string" ? "" : l.level;
                return (
                  <div key={idx} style={{ fontSize: "0.85rem", display: "flex", justifyContent: "space-between" }}>
                    <span>{name}</span>
                    <span style={{ fontSize: "0.75rem", color: "#a1a1aa" }}>{level}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Right Main Column */}
      <div style={{ width: "68%", padding: "2.5rem 2rem", display: "flex", flexDirection: "column", gap: "1.75rem" }}>
        {/* Profile Summary */}
        {personal?.summary && (
          <div>
            <h2 style={{ fontSize: "1.1rem", fontWeight: "700", color: "#18181b", textTransform: "uppercase", letterSpacing: "0.05em", borderBottom: `2px solid ${accent}`, paddingBottom: "0.3rem", marginBottom: "0.75rem", display: "inline-block" }}>
              Professional Summary
            </h2>
            <p style={{ fontSize: "0.95rem", lineHeight: "1.6", color: "#3f3f46", margin: 0 }}>
              {personal.summary}
            </p>
          </div>
        )}

        {/* Work Experience */}
        {work.length > 0 && (
          <div>
            <h2 style={{ fontSize: "1.1rem", fontWeight: "700", color: "#18181b", textTransform: "uppercase", letterSpacing: "0.05em", borderBottom: `2px solid ${accent}`, paddingBottom: "0.3rem", marginBottom: "1rem", display: "inline-block" }}>
              Work Experience
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {work.map((w, idx) => (
                <div key={idx}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "0.2rem" }}>
                    <h3 style={{ fontSize: "1.05rem", fontWeight: "700", color: "#18181b", margin: 0 }}>
                      {w.positionTitle}
                    </h3>
                    <span style={{ fontSize: "0.85rem", fontWeight: "600", color: "#71717a", whiteSpace: "nowrap" }}>
                      {w.dateStarted} – {w.isCurrent ? "Present" : w.dateEnded}
                    </span>
                  </div>
                  <div style={{ fontSize: "0.95rem", fontWeight: "600", color: accent, marginBottom: "0.5rem" }}>
                    {w.companyName} {w.location && <span style={{ color: "#71717a", fontWeight: "400" }}>• {w.location}</span>}
                  </div>
                  {w.duties && w.duties.length > 0 && (
                    <ul style={{ margin: 0, paddingLeft: "1.25rem", color: "#3f3f46", display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                      {w.duties.map((duty, dIdx) => (
                        duty ? <li key={dIdx} style={{ fontSize: "0.9rem", lineHeight: "1.5" }}>{duty}</li> : null
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Education */}
        {education.length > 0 && (
          <div>
            <h2 style={{ fontSize: "1.1rem", fontWeight: "700", color: "#18181b", textTransform: "uppercase", letterSpacing: "0.05em", borderBottom: `2px solid ${accent}`, paddingBottom: "0.3rem", marginBottom: "1rem", display: "inline-block" }}>
              Education
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {education.map((e, idx) => (
                <div key={idx}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                    <h3 style={{ fontSize: "1rem", fontWeight: "700", color: "#18181b", margin: 0 }}>
                      {e.schoolName}
                    </h3>
                    <span style={{ fontSize: "0.85rem", color: "#71717a", whiteSpace: "nowrap" }}>
                      {e.schoolStartDate} – {e.schoolEndDate}
                    </span>
                  </div>
                  <div style={{ fontSize: "0.9rem", fontWeight: "600", color: "#3f3f46" }}>
                    {e.schoolMajor} {e.location && <span style={{ color: "#71717a", fontWeight: "400" }}>• {e.location}</span>}
                  </div>
                  {e.honors && (
                    <div style={{ fontSize: "0.85rem", color: "#52525b", marginTop: "0.2rem", fontStyle: "italic" }}>
                      {e.honors}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Projects */}
        {projects.length > 0 && (
          <div>
            <h2 style={{ fontSize: "1.1rem", fontWeight: "700", color: "#18181b", textTransform: "uppercase", letterSpacing: "0.05em", borderBottom: `2px solid ${accent}`, paddingBottom: "0.3rem", marginBottom: "1rem", display: "inline-block" }}>
              Key Projects
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {projects.map((p, idx) => (
                <div key={idx}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "0.2rem" }}>
                    <h3 style={{ fontSize: "1rem", fontWeight: "700", color: "#18181b", margin: 0 }}>
                      {p.name}
                    </h3>
                    <div style={{ fontSize: "0.8rem", color: accent }}>
                      {p.link && <span>Live Demo</span>}
                      {p.link && p.repo && <span> | </span>}
                      {p.repo && <span>Source Code</span>}
                    </div>
                  </div>
                  {p.technologies && (
                    <div style={{ fontSize: "0.8rem", fontWeight: "600", color: "#71717a", marginBottom: "0.3rem" }}>
                      Tech Stack: {p.technologies}
                    </div>
                  )}
                  {p.description && (
                    <p style={{ fontSize: "0.9rem", color: "#3f3f46", margin: 0, lineHeight: "1.5" }}>
                      {p.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Custom Sections */}
        {customSections.length > 0 && customSections.map((sec, sIdx) => (
          <div key={sIdx}>
            <h2 style={{ fontSize: "1.1rem", fontWeight: "700", color: "#18181b", textTransform: "uppercase", letterSpacing: "0.05em", borderBottom: `2px solid ${accent}`, paddingBottom: "0.3rem", marginBottom: "1rem", display: "inline-block" }}>
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

export default ModernExecutive;
