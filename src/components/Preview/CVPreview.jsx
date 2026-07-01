import React, { useState } from "react";
import { ZoomIn, ZoomOut, Maximize2, ShieldCheck, CheckCircle2 } from "lucide-react";
import ModernExecutive from "./templates/ModernExecutive";
import MinimalistTech from "./templates/MinimalistTech";
import CreativeGlass from "./templates/CreativeGlass";
import ATSStandard from "./templates/ATSStandard";

const CVPreview = ({ data, template, colorTheme, fontFamily }) => {
  const [scale, setScale] = useState(0.85);

  const handleZoom = (delta) => {
    const next = Math.max(0.4, Math.min(1.2, scale + delta));
    setScale(next);
  };

  const renderTemplate = () => {
    switch (template) {
      case "tech":
        return <MinimalistTech data={data} colorTheme={colorTheme} fontFamily={fontFamily} />;
      case "creative":
        return <CreativeGlass data={data} colorTheme={colorTheme} fontFamily={fontFamily} />;
      case "ats":
        return <ATSStandard data={data} colorTheme={colorTheme} fontFamily={fontFamily} />;
      case "executive":
      default:
        return <ModernExecutive data={data} colorTheme={colorTheme} fontFamily={fontFamily} />;
    }
  };

  return (
    <div className="preview-column">
      {/* Preview Toolbar */}
      <div className="preview-toolbar no-print">
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <ShieldCheck size={16} style={{ color: "#10b981" }} />
          <span style={{ fontWeight: "600", color: "var(--text-primary)" }}>Live Interactive Preview</span>
          <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>• Auto-saving locally</span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
          <button
            onClick={() => handleZoom(-0.1)}
            className="icon-btn"
            style={{ width: "1.8rem", height: "1.8rem" }}
            title="Zoom Out"
          >
            <ZoomOut size={15} />
          </button>
          
          <select
            value={scale}
            onChange={(e) => setScale(parseFloat(e.target.value))}
            style={{
              padding: "0.2rem 0.5rem",
              fontSize: "0.75rem",
              fontWeight: "600",
              borderRadius: "var(--radius-sm)",
              width: "auto",
              backgroundColor: "var(--bg-subtle)",
              color: "var(--text-primary)",
              border: "1px solid var(--border-color)",
              cursor: "pointer"
            }}
          >
            <option value={1.0}>100% (Real Size)</option>
            <option value={0.85}>85% (Optimal)</option>
            <option value={0.70}>70% (Compact)</option>
            <option value={0.50}>50% (Overview)</option>
          </select>

          <button
            onClick={() => handleZoom(0.1)}
            className="icon-btn"
            style={{ width: "1.8rem", height: "1.8rem" }}
            title="Zoom In"
          >
            <ZoomIn size={15} />
          </button>
        </div>
      </div>

      {/* The Printable Page Area */}
      <div className="preview-container">
        <div
          className="cv-preview-page"
          style={{
            transform: `scale(${scale})`,
            marginBottom: `${-(1 - scale) * 297}mm`
          }}
        >
          {renderTemplate()}
        </div>
      </div>
    </div>
  );
};

export default CVPreview;
