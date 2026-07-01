import React, { useState } from "react";
import { Code, Plus, Trash2, Tag } from "lucide-react";

const SkillsForm = ({ items = [], onChange }) => {
  const [newSkillName, setNewSkillName] = useState("");
  const [newSkillLevel, setNewSkillLevel] = useState("Expert");
  const [newSkillCategory, setNewSkillCategory] = useState("Technical");

  const categories = ["Technical", "Languages", "Frontend", "Backend", "Database", "Cloud & DevOps", "Design & UX", "Strategy & Mgmt"];
  const levels = ["Expert", "Advanced", "Intermediate", "Beginner"];

  const handleAddSkill = (e) => {
    if (e) e.preventDefault();
    if (!newSkillName.trim()) return;
    const newItem = {
      id: "s_" + Date.now(),
      name: newSkillName.trim(),
      level: newSkillLevel,
      category: newSkillCategory
    };
    onChange([...items, newItem]);
    setNewSkillName("");
  };

  const handleRemoveSkill = (id) => {
    onChange(items.filter((item) => item.id !== id && item !== id));
  };

  const handleLevelChange = (id, newLevel) => {
    const updated = items.map((item) => {
      if (item.id === id || item === id) {
        return typeof item === "string" ? { id: "s_" + Date.now(), name: item, level: newLevel, category: "Technical" } : { ...item, level: newLevel };
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
            <Code size={22} style={{ color: "var(--accent-primary)" }} />
            <span>Skills & Core Competencies</span>
          </div>
          <div className="section-subtitle">
            Highlight your technical expertise, tools, frameworks, and methodologies.
          </div>
        </div>
      </div>

      {/* Add Skill Box */}
      <form onSubmit={handleAddSkill} className="item-card" style={{ backgroundColor: "var(--bg-subtle)" }}>
        <h4 style={{ fontSize: "0.95rem", fontWeight: "600", marginBottom: "0.75rem", display: "flex", alignItems: "center", gap: "0.4rem" }}>
          <Tag size={15} style={{ color: "var(--accent-primary)" }} /> Add New Skill
        </h4>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem", alignItems: "center" }}>
          <input
            type="text"
            placeholder="e.g. TypeScript, React, System Design, or Figma..."
            value={newSkillName}
            onChange={(e) => setNewSkillName(e.target.value)}
            style={{ flex: "2 1 200px" }}
          />
          <select
            value={newSkillLevel}
            onChange={(e) => setNewSkillLevel(e.target.value)}
            style={{ flex: "1 1 120px" }}
          >
            {levels.map((lvl) => (
              <option key={lvl} value={lvl}>{lvl}</option>
            ))}
          </select>
          <select
            value={newSkillCategory}
            onChange={(e) => setNewSkillCategory(e.target.value)}
            style={{ flex: "1 1 130px" }}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          <button type="submit" className="btn btn-primary" style={{ padding: "0.625rem 1rem" }}>
            <Plus size={16} /> Add
          </button>
        </div>
      </form>

      {/* Render Skills Grid */}
      <div className="item-card">
        <h4 style={{ fontSize: "0.9rem", fontWeight: "600", color: "var(--text-secondary)", marginBottom: "1rem" }}>
          Current Skills ({items.length})
        </h4>

        {items.length === 0 ? (
          <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", textAlign: "center", padding: "1.5rem 0" }}>
            No skills added yet. Use the form above to tag your expertise!
          </p>
        ) : (
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
            {items.map((skill, idx) => {
              const skillObj = typeof skill === "string" ? { id: idx, name: skill, level: "Advanced", category: "General" } : skill;
              return (
                <div
                  key={skillObj.id || idx}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    padding: "0.4rem 0.75rem",
                    backgroundColor: "var(--bg-main)",
                    border: "1px solid var(--border-color)",
                    borderRadius: "var(--radius-full)",
                    fontSize: "0.85rem",
                    transition: "all 0.15s ease"
                  }}
                >
                  <span style={{ fontWeight: "600", color: "var(--text-primary)" }}>{skillObj.name}</span>
                  <select
                    value={skillObj.level || "Advanced"}
                    onChange={(e) => handleLevelChange(skillObj.id || skill, e.target.value)}
                    style={{
                      padding: "0.1rem 0.3rem",
                      fontSize: "0.7rem",
                      borderRadius: "var(--radius-sm)",
                      backgroundColor: "var(--accent-light)",
                      color: "var(--accent-primary)",
                      border: "none",
                      fontWeight: "600",
                      width: "auto",
                      cursor: "pointer"
                    }}
                  >
                    {levels.map((lvl) => (
                      <option key={lvl} value={lvl}>{lvl}</option>
                    ))}
                  </select>
                  <button
                    type="button"
                    onClick={() => handleRemoveSkill(skillObj.id || skill)}
                    className="icon-btn"
                    style={{ width: "1.2rem", height: "1.2rem", color: "#ef4444", marginLeft: "0.1rem" }}
                    title="Remove Skill"
                  >
                    <Trash2 size={13} />
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

export default SkillsForm;
