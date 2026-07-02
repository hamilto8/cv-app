import React, { useState, useRef } from "react";
import { 
  FileText, Moon, Sun, Download, Upload, Printer, 
  RotateCcw, Palette, ChevronDown 
} from "lucide-react";
import { sampleProfiles } from "../data/sampleData";

const Header = ({
  theme,
  toggleTheme,
  colorTheme,
  setColorTheme,
  fontFamily,
  setFontFamily,
  template,
  setTemplate,
  onLoadSample,
  onReset,
  onExportJSON,
  onImportJSON,
  onPrint,
  pdfElement
}) => {
  const [showDemoMenu, setShowDemoMenu] = useState(false);
  const [showAppearanceMenu, setShowAppearanceMenu] = useState(false);
  const fileInputRef = useRef(null);

  const colors = [
    { id: "monochrome", name: "Minimalist Charcoal", hex: "#18181b" },
    { id: "emerald", name: "Forest Emerald", hex: "#0f766e" },
    { id: "terracotta", name: "Warm Terracotta", hex: "#c2410c" },
    { id: "navy", name: "Executive Slate", hex: "#334155" },
    { id: "burgundy", name: "Editorial Burgundy", hex: "#881337" },
    { id: "olive", name: "Earth Olive", hex: "#4d5d53" }
  ];

  const fonts = [
    { id: "'Inter', sans-serif", name: "Inter (Modern Sans)" },
    { id: "'Outfit', sans-serif", name: "Outfit (Geometric)" },
    { id: "'Space Grotesk', sans-serif", name: "Space Grotesk (Tech)" },
    { id: "'Playfair Display', serif", name: "Playfair Display (Serif)" },
    { id: "'Roboto', sans-serif", name: "Roboto (Classic)" }
  ];

  const templates = [
    { id: "executive", name: "Modern Executive" },
    { id: "tech", name: "Minimalist Tech" },
    { id: "creative", name: "Contemporary Editorial" },
    { id: "ats", name: "ATS Standard Clean" }
  ];

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      onImportJSON(file);
      e.target.value = null;
    }
  };

  return (
    <header className="app-header no-print">
      <div className="header-brand">
        <div className="header-logo">
          <FileText size={20} />
        </div>
        <div className="header-title">
          CV <span>Studio</span>
        </div>
      </div>

      <div className="header-actions">
        {/* Template Selector */}
        <div style={{ position: "relative" }}>
          <select
            value={template}
            onChange={(e) => setTemplate(e.target.value)}
            style={{
              padding: "0.45rem 2rem 0.45rem 0.75rem",
              fontSize: "0.825rem",
              fontWeight: "600",
              borderRadius: "var(--radius-sm)",
              backgroundColor: "var(--bg-subtle)",
              color: "var(--text-primary)",
              border: "1px solid var(--border-color)",
              cursor: "pointer",
              width: "auto"
            }}
            title="Select Resume Template"
          >
            {templates.map((t) => (
              <option key={t.id} value={t.id}>
                {t.name}
              </option>
            ))}
          </select>
        </div>

        {/* Appearance (Color & Font) Dropdown */}
        <div style={{ position: "relative" }}>
          <button
            onClick={() => setShowAppearanceMenu(!showAppearanceMenu)}
            className="btn btn-secondary"
            title="Customize Colors and Typography"
          >
            <Palette size={16} />
            <span>Theme</span>
            <ChevronDown size={14} />
          </button>

          {showAppearanceMenu && (
            <>
              <div
                style={{ position: "fixed", inset: 0, zIndex: 90 }}
                onClick={() => setShowAppearanceMenu(false)}
              />
              <div
                style={{
                  position: "absolute",
                  right: 0,
                  top: "120%",
                  backgroundColor: "var(--bg-surface)",
                  border: "1px solid var(--border-color)",
                  borderRadius: "var(--radius-md)",
                  boxShadow: "var(--shadow-lg)",
                  padding: "1rem",
                  width: "260px",
                  zIndex: 100
                }}
              >
                <div style={{ marginBottom: "1rem" }}>
                  <label style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--text-muted)", marginBottom: "0.5rem", display: "block" }}>
                    Color Palette
                  </label>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                    {colors.map((c) => (
                      <button
                        key={c.id}
                        onClick={() => setColorTheme(c.id)}
                        style={{
                          width: "2rem",
                          height: "2rem",
                          borderRadius: "var(--radius-full)",
                          backgroundColor: c.hex,
                          border: colorTheme === c.id ? "3px solid var(--bg-surface)" : "2px solid transparent",
                          boxShadow: colorTheme === c.id ? "0 0 0 2px " + c.hex : "none",
                          cursor: "pointer",
                          transition: "all 0.15s ease"
                        }}
                        title={c.name}
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <label style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--text-muted)", marginBottom: "0.5rem", display: "block" }}>
                    Typography
                  </label>
                  <select
                    value={fontFamily}
                    onChange={(e) => setFontFamily(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "0.5rem",
                      fontSize: "0.85rem",
                      borderRadius: "var(--radius-sm)",
                      backgroundColor: "var(--bg-main)"
                    }}
                  >
                    {fonts.map((f) => (
                      <option key={f.id} value={f.id}>
                        {f.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Demo Data Button */}
        <div style={{ position: "relative" }}>
          <button
            onClick={() => setShowDemoMenu(!showDemoMenu)}
            className="btn btn-secondary"
            title="Load Sample Resumes"
          >
            <FileText size={16} />
            <span>Sample CVs</span>
            <ChevronDown size={14} />
          </button>

          {showDemoMenu && (
            <>
              <div
                style={{ position: "fixed", inset: 0, zIndex: 90 }}
                onClick={() => setShowDemoMenu(false)}
              />
              <div
                style={{
                  position: "absolute",
                  right: 0,
                  top: "120%",
                  backgroundColor: "var(--bg-surface)",
                  border: "1px solid var(--border-color)",
                  borderRadius: "var(--radius-md)",
                  boxShadow: "var(--shadow-lg)",
                  padding: "0.5rem",
                  width: "220px",
                  zIndex: 100
                }}
              >
                <button
                  onClick={() => { onLoadSample(sampleProfiles.softwareEngineer); setShowDemoMenu(false); }}
                  style={{ width: "100%", textAlign: "left", padding: "0.6rem 0.8rem", borderRadius: "var(--radius-sm)", fontSize: "0.85rem", color: "var(--text-primary)", display: "block" }}
                  className="btn-ghost"
                >
                  Senior Full Stack Dev
                </button>
                <button
                  onClick={() => { onLoadSample(sampleProfiles.productManager); setShowDemoMenu(false); }}
                  style={{ width: "100%", textAlign: "left", padding: "0.6rem 0.8rem", borderRadius: "var(--radius-sm)", fontSize: "0.85rem", color: "var(--text-primary)", display: "block" }}
                  className="btn-ghost"
                >
                  Principal Product Mgr
                </button>
                <button
                  onClick={() => { onLoadSample(sampleProfiles.uxDesigner); setShowDemoMenu(false); }}
                  style={{ width: "100%", textAlign: "left", padding: "0.6rem 0.8rem", borderRadius: "var(--radius-sm)", fontSize: "0.85rem", color: "var(--text-primary)", display: "block" }}
                  className="btn-ghost"
                >
                  Lead UX/UI Designer
                </button>
              </div>
            </>
          )}
        </div>

        {/* JSON Import & Export */}
        <button
          onClick={onExportJSON}
          className="btn btn-ghost"
          title="Backup / Export CV Data as JSON"
          style={{ padding: "0.45rem 0.6rem" }}
        >
          <Download size={16} />
          <span style={{ fontSize: "0.8rem" }}>Backup</span>
        </button>
        <button
          onClick={() => fileInputRef.current?.click()}
          className="btn btn-ghost"
          title="Restore / Import CV Data from JSON"
          style={{ padding: "0.45rem 0.6rem" }}
        >
          <Upload size={16} />
          <span style={{ fontSize: "0.8rem" }}>Restore</span>
        </button>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept=".json"
          style={{ display: "none" }}
        />

        {/* Reset */}
        <button
          onClick={onReset}
          className="btn btn-ghost"
          title="Clear All / Reset CV"
          style={{ padding: "0.45rem 0.6rem", color: "#ef4444" }}
        >
          <RotateCcw size={16} />
        </button>

        {/* Dark / Light Toggle */}
        <button
          onClick={toggleTheme}
          className="icon-btn"
          title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
          aria-label="Toggle Theme"
        >
          {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        {/* Print / Save PDF Button */}
        <button
          onClick={onPrint}
          className="btn btn-secondary"
          title="Print or Save as High-Resolution PDF via Browser"
        >
          <Printer size={16} />
          <span>Print / Save PDF</span>
        </button>

        {/* React PDF Download */}
        {pdfElement && (
          <div style={{ display: "inline-block" }}>
            {pdfElement}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
