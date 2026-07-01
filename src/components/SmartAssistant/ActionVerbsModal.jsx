import React, { useState } from "react";
import { BookOpen, X, Check, Copy } from "lucide-react";
import { actionVerbsCategories } from "../../data/actionVerbs";

const ActionVerbsModal = ({ isOpen, onClose, onSelectVerb }) => {
  const [activeCategory, setActiveCategory] = useState("Leadership");
  const [copiedVerb, setCopiedVerb] = useState(null);

  if (!isOpen) return null;

  const handleVerbClick = (verb) => {
    if (onSelectVerb) {
      onSelectVerb(verb);
    } else {
      navigator.clipboard.writeText(verb);
      setCopiedVerb(verb);
      setTimeout(() => setCopiedVerb(null), 2000);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: "550px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.25rem" }}>
          <h3 style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "1.25rem", fontWeight: "700", fontFamily: "'Outfit', sans-serif" }}>
            <BookOpen size={20} style={{ color: "var(--accent-primary)" }} />
            Action Verbs Library
          </h3>
          <button onClick={onClose} className="icon-btn" aria-label="Close modal">
            <X size={20} />
          </button>
        </div>
        <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", marginBottom: "1.25rem" }}>
          Strengthen your experience bullet points by starting with impactful, active verbs. Click any word to copy or insert it directly!
        </p>

        {/* Category Tabs */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.25rem", borderBottom: "1px solid var(--border-color)", paddingBottom: "0.75rem" }}>
          {Object.keys(actionVerbsCategories).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: "0.4rem 0.8rem",
                borderRadius: "var(--radius-sm)",
                fontSize: "0.825rem",
                fontWeight: "600",
                backgroundColor: activeCategory === cat ? "var(--accent-primary)" : "var(--bg-subtle)",
                color: activeCategory === cat ? "var(--bg-surface)" : "var(--text-secondary)",
                border: "1px solid " + (activeCategory === cat ? "var(--accent-primary)" : "var(--border-color)"),
                cursor: "pointer",
                transition: "all 0.15s ease"
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Verbs Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(130px, 1fr))", gap: "0.6rem", maxHeight: "250px", overflowY: "auto", paddingRight: "0.5rem" }}>
          {actionVerbsCategories[activeCategory].map((verb) => (
            <button
              key={verb}
              onClick={() => handleVerbClick(verb)}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0.6rem 0.8rem",
                borderRadius: "var(--radius-sm)",
                border: "1px solid var(--border-color)",
                backgroundColor: "var(--bg-main)",
                color: "var(--text-primary)",
                fontSize: "0.875rem",
                fontWeight: "500",
                cursor: "pointer",
                textAlign: "left",
                transition: "all 0.15s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--accent-primary)";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border-color)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <span>{verb}</span>
              {copiedVerb === verb ? <Check size={14} color="#0f766e" /> : <Copy size={13} style={{ opacity: 0.5 }} />}
            </button>
          ))}
        </div>

        <div style={{ marginTop: "1.5rem", display: "flex", justifyContent: "flex-end", gap: "0.75rem", borderTop: "1px solid var(--border-color)", paddingTop: "1rem" }}>
          <button onClick={onClose} className="btn btn-secondary">
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActionVerbsModal;
