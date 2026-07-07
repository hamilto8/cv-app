import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SectionNav from "./components/Editor/SectionNav";
import PersonalForm from "./components/Editor/PersonalForm";
import WorkForm from "./components/Editor/WorkForm";
import EducationForm from "./components/Editor/EducationForm";
import SkillsForm from "./components/Editor/SkillsForm";
import ProjectsForm from "./components/Editor/ProjectsForm";
import CertificationsForm from "./components/Editor/CertificationsForm";
import LanguagesForm from "./components/Editor/LanguagesForm";
import CustomSectionForm from "./components/Editor/CustomSectionForm";
import CVPreview from "./components/Preview/CVPreview";
import ResumePDF from "./ResumePDF";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { defaultCVData } from "./data/sampleData";
import { Edit3, Eye, Download, CheckCircle2 } from "lucide-react";
import "./styles/App.css";

const STORAGE_KEY = "cv_studio_data";
const THEME_KEY = "cv_studio_theme";
const COLOR_KEY = "cv_studio_color";

const safeGetItem = (key, fallback = null) => {
  try {
    return localStorage.getItem(key) || fallback;
  } catch (e) {
    console.warn("localStorage read failed:", e);
    return fallback;
  }
};

const safeSetItem = (key, value) => {
  try {
    localStorage.setItem(key, value);
  } catch (e) {
    console.warn("localStorage write failed:", e);
  }
};

function App() {
  // Load saved CV data or default sample
  const [cvData, setCvData] = useState(() => {
    try {
      const saved = safeGetItem(STORAGE_KEY) || safeGetItem("antigravity_cv_studio_data");
      if (saved) {
        const parsed = JSON.parse(saved);
        // Migrate old sample data to the new 100% anonymous standardized contact info
        if (parsed?.personal?.email && (parsed.personal.email.includes("chendesign.studio") || parsed.personal.email.includes("devmail.io") || parsed.personal.email.includes("productlead.com") || parsed.personal.email.includes("marcus.chen@") || parsed.personal.email.includes("alex.rivera@") || parsed.personal.email.includes("sarah.jenkins@"))) {
          return defaultCVData;
        }
        return parsed;
      }
    } catch (e) {
      console.error("Failed to load CV from localStorage:", e);
    }
    return defaultCVData;
  });

  const [theme, setTheme] = useState(() => safeGetItem(THEME_KEY) || safeGetItem("antigravity_cv_theme") || "dark");
  const [colorTheme, setColorTheme] = useState(() => {
    const saved = safeGetItem(COLOR_KEY) || safeGetItem("antigravity_cv_color");
    if (saved === "indigo" || saved === "royal" || saved === "violet" || saved === "slate") {
      return "monochrome";
    }
    return saved || "monochrome";
  });
  const [fontFamily, setFontFamily] = useState("'Inter', sans-serif");
  const [template, setTemplate] = useState("executive");
  const [activeSection, setActiveSection] = useState("personal");
  const [mobileTab, setMobileTab] = useState("editor"); // "editor" | "preview"
  const [toast, setToast] = useState(null);

  // Apply Theme and Color to DOM
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    safeSetItem(THEME_KEY, theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute("data-color", colorTheme);
    safeSetItem(COLOR_KEY, colorTheme);
  }, [colorTheme]);

  // Auto-save to localStorage
  useEffect(() => {
    try {
      safeSetItem(STORAGE_KEY, JSON.stringify(cvData));
    } catch (e) {
      console.error("Failed to auto-save CV data:", e);
    }
  }, [cvData]);

  const showToast = (message) => {
    setToast(message);
    setTimeout(() => {
      setToast(null);
    }, 3000);
  };

  const updateSectionData = (section, newItems) => {
    setCvData((prev) => ({
      ...prev,
      [section]: newItems
    }));
  };

  const handleLoadSample = (sampleProfile) => {
    if (window.confirm("Load sample resume? This will overwrite your current edits.")) {
      setCvData(sampleProfile);
      showToast("✨ Sample profile loaded successfully!");
    }
  };

  const handleReset = () => {
    if (window.confirm("Are you sure you want to clear all data and start from scratch?")) {
      const emptyData = {
        personal: {
          fullName: "",
          jobTitle: "",
          email: "",
          phone: "",
          location: "",
          linkedin: "",
          github: "",
          portfolio: "",
          summary: ""
        },
        work: [],
        education: [],
        skills: [],
        projects: [],
        certifications: [],
        languages: [],
        customSections: []
      };
      setCvData(emptyData);
      showToast("🧹 CV reset to empty template.");
    }
  };

  const handleExportJSON = () => {
    try {
      const jsonStr = JSON.stringify(cvData, null, 2);
      const blob = new Blob([jsonStr], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const downloadAnchor = document.createElement("a");
      downloadAnchor.href = url;
      downloadAnchor.download = `${(cvData?.personal?.fullName || "Resume").toLowerCase().replace(/[^a-z0-9_-]/gi, "_")}_backup.json`;
      document.body.appendChild(downloadAnchor);
      downloadAnchor.click();
      document.body.removeChild(downloadAnchor);
      URL.revokeObjectURL(url);
      showToast("💾 CV data exported as JSON backup.");
    } catch (e) {
      console.error("Failed to export JSON:", e);
      alert("Error exporting CV data.");
    }
  };

  const handleImportJSON = (file) => {
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) {
      alert("File is too large. Please upload a valid JSON backup under 5MB.");
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const imported = JSON.parse(e.target.result);
        if (imported && typeof imported === "object" && !Array.isArray(imported) && (imported.personal || imported.work || imported.education)) {
          setCvData(imported);
          showToast("📂 CV data restored from JSON file!");
        } else {
          alert("Invalid JSON format. Please upload a valid CV backup file.");
        }
      } catch (err) {
        alert("Error parsing JSON file: " + err.message);
      }
    };
    reader.onerror = () => {
      alert("Failed to read backup file.");
    };
    reader.readAsText(file);
  };

  const handlePrint = () => {
    window.print();
  };

  // Render the currently active editor form
  const renderActiveForm = () => {
    switch (activeSection) {
      case "work":
        return <WorkForm items={cvData?.work || []} onChange={(items) => updateSectionData("work", items)} />;
      case "education":
        return <EducationForm items={cvData?.education || []} onChange={(items) => updateSectionData("education", items)} />;
      case "skills":
        return <SkillsForm items={cvData?.skills || []} onChange={(items) => updateSectionData("skills", items)} />;
      case "projects":
        return <ProjectsForm items={cvData?.projects || []} onChange={(items) => updateSectionData("projects", items)} />;
      case "certifications":
        return <CertificationsForm items={cvData?.certifications || []} onChange={(items) => updateSectionData("certifications", items)} />;
      case "languages":
        return <LanguagesForm items={cvData?.languages || []} onChange={(items) => updateSectionData("languages", items)} />;
      case "custom":
        return <CustomSectionForm items={cvData?.customSections || []} onChange={(items) => updateSectionData("customSections", items)} />;
      case "personal":
      default:
        return <PersonalForm data={cvData?.personal || {}} onChange={(data) => updateSectionData("personal", data)} />;
    }
  };

  const pdfElement = (
    <PDFDownloadLink
      document={<ResumePDF data={cvData} template={template} colorTheme={colorTheme} />}
      fileName={`${(cvData?.personal?.fullName || "Resume").toLowerCase().replace(/[^a-z0-9_-]/gi, "_")}_resume.pdf`}
      className="btn btn-primary"
      style={{ textDecoration: "none" }}
    >
      {({ loading }) => (
        <>
          <Download size={16} />
          <span>{loading ? "Preparing PDF..." : "Download PDF"}</span>
        </>
      )}
    </PDFDownloadLink>
  );

  return (
    <div className="app-wrapper">
      <Header
        theme={theme}
        toggleTheme={() => setTheme(theme === "dark" ? "light" : "dark")}
        colorTheme={colorTheme}
        setColorTheme={setColorTheme}
        fontFamily={fontFamily}
        setFontFamily={setFontFamily}
        template={template}
        setTemplate={setTemplate}
        onLoadSample={handleLoadSample}
        onReset={handleReset}
        onExportJSON={handleExportJSON}
        onImportJSON={handleImportJSON}
        onPrint={handlePrint}
        pdfElement={pdfElement}
      />

      {/* Mobile Tab bar */}
      <div className="mobile-tabs no-print">
        <button
          onClick={() => setMobileTab("editor")}
          className={mobileTab === "editor" ? "active" : ""}
          style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}
        >
          <Edit3 size={16} />
          <span>Edit CV</span>
        </button>
        <button
          onClick={() => setMobileTab("preview")}
          className={mobileTab === "preview" ? "active" : ""}
          style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}
        >
          <Eye size={16} />
          <span>Live Preview</span>
        </button>
      </div>

      <main className="app-workspace">
        {/* Editor Column */}
        <div className={`editor-column ${mobileTab === "preview" ? "hidden-mobile" : ""} no-print`}>
          <SectionNav activeSection={activeSection} setActiveSection={setActiveSection} />
          <div className="editor-content">
            {renderActiveForm()}
          </div>
        </div>

        {/* Live Preview Column */}
        <div className={`preview-column ${mobileTab === "editor" ? "hidden-mobile" : ""}`} style={{ flex: 1, width: "100%" }}>
          <CVPreview
            data={cvData}
            template={template}
            colorTheme={colorTheme}
            fontFamily={fontFamily}
          />
        </div>
      </main>

      <Footer />

      {/* Toast Notification */}
      {toast && (
        <div className="toast-container no-print">
          <div className="toast">
            <CheckCircle2 size={18} style={{ color: "var(--accent-primary)" }} />
            <span>{toast}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
