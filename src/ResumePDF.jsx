import React from "react";
import { Document, Page, View, Text, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 35,
    fontFamily: "Helvetica",
    fontSize: 10,
    lineHeight: 1.4,
    color: "#27272a",
    backgroundColor: "#ffffff"
  },
  header: {
    marginBottom: 15,
    borderBottomWidth: 1.5,
    borderBottomColor: "#3f3f46",
    paddingBottom: 10
  },
  name: {
    fontSize: 22,
    fontFamily: "Helvetica-Bold",
    color: "#18181b",
    marginBottom: 4,
    textTransform: "uppercase"
  },
  jobTitle: {
    fontSize: 12,
    fontFamily: "Helvetica-Bold",
    color: "#18181b",
    marginBottom: 6
  },
  contactRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    fontSize: 8.5,
    color: "#52525b"
  },
  sectionTitle: {
    fontSize: 11,
    fontFamily: "Helvetica-Bold",
    color: "#18181b",
    textTransform: "uppercase",
    borderBottomWidth: 1,
    borderBottomColor: "#d4d4d8",
    paddingBottom: 2,
    marginTop: 12,
    marginBottom: 8
  },
  summaryText: {
    fontSize: 9.5,
    color: "#3f3f46",
    textAlign: "justify",
    marginBottom: 8
  },
  itemContainer: {
    marginBottom: 8
  },
  itemHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline"
  },
  itemTitle: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    color: "#18181b"
  },
  itemSubtitle: {
    fontSize: 9,
    fontFamily: "Helvetica-Bold",
    color: "#18181b",
    marginBottom: 2
  },
  itemDate: {
    fontSize: 8.5,
    color: "#71717a"
  },
  bulletList: {
    marginTop: 3,
    paddingLeft: 10
  },
  bulletRow: {
    flexDirection: "row",
    marginBottom: 2
  },
  bulletPoint: {
    width: 10,
    fontSize: 9,
    color: "#71717a"
  },
  bulletText: {
    flex: 1,
    fontSize: 9,
    color: "#3f3f46"
  },
  skillsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 4,
    marginTop: 4
  },
  skillBadge: {
    backgroundColor: "#f4f4f5",
    paddingVertical: 2,
    paddingHorizontal: 6,
    borderRadius: 4,
    fontSize: 8.5,
    color: "#27272a",
    marginRight: 4,
    marginBottom: 4
  },
  projectStack: {
    fontSize: 8.5,
    fontFamily: "Helvetica-Oblique",
    color: "#71717a",
    marginBottom: 2
  }
});

const getAccentColor = (colorTheme) => {
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

const ResumePDF = ({ data, colorTheme }) => {
  const accent = getAccentColor(colorTheme);
  const {
    personal = {},
    work = [],
    education = [],
    skills = [],
    projects = [],
    certifications = [],
    languages = [],
    customSections = []
  } = data || {};

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.name}>{personal.fullName || "Your Name"}</Text>
          {personal.jobTitle && <Text style={[styles.jobTitle, { color: accent }]}>{personal.jobTitle}</Text>}
          <View style={styles.contactRow}>
            {personal.email && <Text>{personal.email}</Text>}
            {personal.phone && <Text>• {personal.phone}</Text>}
            {personal.location && <Text>• {personal.location}</Text>}
            {personal.linkedin && <Text>• {personal.linkedin.replace(/^https?:\/\/(www\.)?/, "")}</Text>}
            {personal.github && <Text>• {personal.github.replace(/^https?:\/\/(www\.)?/, "")}</Text>}
            {personal.website && <Text>• {personal.website.replace(/^https?:\/\/(www\.)?/, "")}</Text>}
          </View>
        </View>

        {/* Summary */}
        {personal.summary && (
          <View>
            <Text style={[styles.sectionTitle, { color: accent }]}>Professional Summary</Text>
            <Text style={styles.summaryText}>{personal.summary}</Text>
          </View>
        )}

        {/* Skills */}
        {skills.length > 0 && (
          <View>
            <Text style={[styles.sectionTitle, { color: accent }]}>Core Competencies & Skills</Text>
            <View style={styles.skillsRow}>
              {skills.map((s, idx) => {
                const name = typeof s === "string" ? s : s.name;
                const level = typeof s === "string" ? "" : s.level;
                return (
                  <Text key={idx} style={styles.skillBadge}>
                    {name} {level ? `(${level})` : ""}
                  </Text>
                );
              })}
            </View>
          </View>
        )}

        {/* Work Experience */}
        {work.length > 0 && (
          <View>
            <Text style={[styles.sectionTitle, { color: accent }]}>Professional Experience</Text>
            {work.map((w, idx) => (
              <View key={idx} style={styles.itemContainer}>
                <View style={styles.itemHeaderRow}>
                  <Text style={styles.itemTitle}>{w.positionTitle}</Text>
                  <Text style={styles.itemDate}>
                    {w.dateStarted} – {w.isCurrent ? "Present" : w.dateEnded}
                  </Text>
                </View>
                <Text style={[styles.itemSubtitle, { color: accent }]}>
                  {w.companyName} {w.location ? `• ${w.location}` : ""}
                </Text>
                {w.duties && w.duties.length > 0 && (
                  <View style={styles.bulletList}>
                    {w.duties.map((duty, dIdx) => (
                      duty ? (
                        <View key={dIdx} style={styles.bulletRow}>
                          <Text style={styles.bulletPoint}>•</Text>
                          <Text style={styles.bulletText}>{duty}</Text>
                        </View>
                      ) : null
                    ))}
                  </View>
                )}
              </View>
            ))}
          </View>
        )}

        {/* Projects */}
        {projects.length > 0 && (
          <View>
            <Text style={[styles.sectionTitle, { color: accent }]}>Key Projects</Text>
            {projects.map((p, idx) => (
              <View key={idx} style={styles.itemContainer}>
                <View style={styles.itemHeaderRow}>
                  <Text style={styles.itemTitle}>{p.name}</Text>
                  {p.link && <Text style={styles.itemDate}>{p.link.replace(/^https?:\/\/(www\.)?/, "")}</Text>}
                </View>
                {p.technologies && <Text style={styles.projectStack}>Stack: {p.technologies}</Text>}
                {p.description && <Text style={styles.bulletText}>{p.description}</Text>}
              </View>
            ))}
          </View>
        )}

        {/* Education */}
        {education.length > 0 && (
          <View>
            <Text style={[styles.sectionTitle, { color: accent }]}>Education</Text>
            {education.map((e, idx) => (
              <View key={idx} style={styles.itemContainer}>
                <View style={styles.itemHeaderRow}>
                  <Text style={styles.itemTitle}>{e.schoolName}</Text>
                  <Text style={styles.itemDate}>
                    {e.schoolStartDate} – {e.schoolEndDate}
                  </Text>
                </View>
                <Text style={[styles.itemSubtitle, { color: accent }]}>
                  {e.schoolMajor} {e.location ? `• ${e.location}` : ""}
                </Text>
                {e.honors && <Text style={styles.bulletText}>{e.honors}</Text>}
              </View>
            ))}
          </View>
        )}

        {/* Certifications & Languages */}
        {(certifications.length > 0 || languages.length > 0) && (
          <View>
            <Text style={[styles.sectionTitle, { color: accent }]}>Additional Credentials</Text>
            {certifications.length > 0 && (
              <View style={{ marginBottom: 4 }}>
                <Text style={{ fontSize: 9, fontFamily: "Helvetica-Bold", marginBottom: 2, color: "#18181b" }}>Certifications:</Text>
                {certifications.map((c, idx) => (
                  <Text key={idx} style={{ fontSize: 8.5, color: "#3f3f46", marginLeft: 8 }}>
                    • {c.name} ({c.issuer}) {c.date ? `- ${c.date}` : ""}
                  </Text>
                ))}
              </View>
            )}
            {languages.length > 0 && (
              <View style={{ marginTop: 4 }}>
                <Text style={{ fontSize: 9, fontFamily: "Helvetica-Bold", marginBottom: 2, color: "#18181b" }}>Languages:</Text>
                <Text style={{ fontSize: 8.5, color: "#3f3f46", marginLeft: 8 }}>
                  {languages.map((l) => typeof l === "string" ? l : `${l.name} (${l.level})`).join(", ")}
                </Text>
              </View>
            )}
          </View>
        )}

        {/* Custom Sections */}
        {customSections.length > 0 && customSections.map((sec, sIdx) => (
          <View key={sIdx}>
            <Text style={[styles.sectionTitle, { color: accent }]}>{sec.title}</Text>
            {(sec.items || []).map((item, iIdx) => (
              <View key={iIdx} style={styles.itemContainer}>
                <View style={styles.itemHeaderRow}>
                  <Text style={styles.itemTitle}>{item.title}</Text>
                  <Text style={styles.itemDate}>{item.date}</Text>
                </View>
                {item.subtitle && <Text style={styles.bulletText}>{item.subtitle}</Text>}
              </View>
            ))}
          </View>
        ))}
      </Page>
    </Document>
  );
};

export default ResumePDF;
