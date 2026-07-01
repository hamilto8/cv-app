import React, { useState } from "react";
import { Globe, Plus, Trash2 } from "lucide-react";

const LanguagesForm = ({ items = [], onChange }) => {
  const [newLangName, setNewLangName] = useState("");
  const [newLangLevel, setNewLangLevel] = useState("Professional Working Proficiency");

  const proficiencyLevels = [
    "Native / Bilingual",
    "Full Professional Proficiency",
    "Professional Working Proficiency",
    "Limited Working Proficiency",
    "Elementary / Conversational"
  ];

  const handleAddLanguage = (e) => {
    if (e) e.preventDefault();
    if (!newLangName.trim()) return;
    const newItem = {
      id: "l_" + Date.now(),
      name: newLangName.trim(),
      level: newLangLevel
    };
    onChange([...items, newItem]);
    setNewLangName("");
  };

  const handleRemoveLang = (id) => {
    onChange(items.filter((item) => item.id !== id && item !== id));
  };

  const handleLevelChange = (id, newLevel) => {
    const updated = items.map((item) => {
      if (item.id === id || item === id) {
        return typeof item === "string" ? { id: "l_" + Date.now(), name: item, level: newLevel } : { ...item, level: newLevel };
      }
      return item;
    });
    onChange(updated);
  };

  return (
    <div className="animate-fade-in">
      <div className="section-header">
        <div>
          <div className="section-title">
            <Globe size={22} style={{ color: "var(--accent-primary)" }} />
            <span>Languages & Communication</span>
          </div>
          <div className="section-subtitle">
            List languages you speak and your professional fluency level.
          </div>
        </div>
      </div>

      <form onSubmit={handleAddLanguage} className="item-card" style={{ backgroundColor: "var(--bg-subtle)" }}>
        <h4 style={{ fontSize: "0.95rem", fontWeight: "600", marginBottom: "0.75rem" }}>Add Spoken Language</h4>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem", alignItems: "center" }}>
          <input
            type="text"
            placeholder="e.g. English, Spanish, Mandarin, French..."
            value={newLangName}
            onChange={(e) => setNewLangName(e.target.value)}
            style={{ flex: "2 1 200px" }}
          />
          <select
            value={newLangLevel}
            onChange={(e) => setNewLangLevel(e.target.value)}
            style={{ flex: "2 1 220px" }}
          >
            {proficiencyLevels.map((lvl) => (
              <option key={lvl} value={lvl}>{lvl}</option>
            ))}
          </select>
          <button type="submit" className="btn btn-primary" style={{ padding: "0.625rem 1rem" }}>
            <Plus size={16} /> Add
          </button>
        </div>
      </form>

      <div className="item-card">
        <h4 style={{ fontSize: "0.9rem", fontWeight: "600", color: "var(--text-secondary)", marginBottom: "1rem" }}>
          Current Languages ({items.length})
        </h4>

        {items.length === 0 ? (
          <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", textAlign: "center", padding: "1.5rem 0" }}>
            No languages added yet.
          </p>
        ) : (
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
            {items.map((lang, idx) => {
              const langObj = typeof lang === "string" ? { id: idx, name: lang, level: "Professional Working Proficiency" } : lang;
              return (
                <div
                  key={langObj.id || idx}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    padding: "0.6rem 1rem",
                    backgroundColor: "var(--bg-main)",
                    border: "1px solid var(--border-color)",
                    borderRadius: "var(--radius-md)",
                    fontSize: "0.9rem"
                  }}
                >
                  <span style={{ fontWeight: "600", color: "var(--text-primary)" }}>{langObj.name}</span>
                  <select
                    value={langObj.level || "Professional Working Proficiency"}
                    onChange={(e) => handleLevelChange(langObj.id || lang, e.target.value)}
                    style={{
                      padding: "0.2rem 0.5rem",
                      fontSize: "0.8rem",
                      borderRadius: "var(--radius-sm)",
                      backgroundColor: "var(--accent-light)",
                      color: "var(--accent-primary)",
                      border: "none",
                      fontWeight: "500",
                      width: "auto",
                      cursor: "pointer"
                    }}
                  >
                    {proficiencyLevels.map((lvl) => (
                      <option key={lvl} value={lvl}>{lvl}</option>
                    ))}
                  </select>
                  <button
                    type="button"
                    onClick={() => handleRemoveLang(langObj.id || lang)}
                    className="icon-btn"
                    style={{ width: "1.4rem", height: "1.4rem", color: "#ef4444" }}
                    title="Remove Language"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default LanguagesForm;
