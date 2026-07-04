import React from "react";
import { FolderGit2, Plus, Trash2, ArrowUp, ArrowDown } from "lucide-react";

const ProjectsForm = ({ items = [], onChange }) => {
  const handleAddItem = () => {
    const newItem = {
      id: "p_" + Date.now(),
      name: "",
      description: "",
      technologies: "",
      link: "",
      repo: ""
    };
    onChange([...items, newItem]);
  };

  const handleRemoveItem = (index) => {
    const updated = items.filter((_, i) => i !== index);
    onChange(updated);
  };

  const handleMove = (index, direction) => {
    if (direction === -1 && index === 0) return;
    if (direction === 1 && index === items.length - 1) return;
    const updated = [...items];
    const temp = updated[index];
    updated[index] = updated[index + direction];
    updated[index + direction] = temp;
    onChange(updated);
  };

  const handleFieldChange = (index, field, value) => {
    const updated = [...items];
    updated[index] = { ...updated[index], [field]: value };
    onChange(updated);
  };

  return (
    <div className="animate-fade-in">
      <div className="section-header">
        <div>
          <div className="section-title">
            <FolderGit2 size={22} style={{ color: "var(--accent-primary)" }} />
            <span>Key Projects & Open Source</span>
          </div>
          <div className="section-subtitle">
            Showcase your standout technical projects, products built, or GitHub contributions.
          </div>
        </div>
        <button onClick={handleAddItem} className="btn btn-primary" style={{ padding: "0.45rem 0.8rem" }}>
          <Plus size={16} />
          <span>Add Project</span>
        </button>
      </div>

      {items.length === 0 ? (
        <div style={{ textAlign: "center", padding: "3rem 1.5rem", border: "2px dashed var(--border-color)", borderRadius: "var(--radius-md)", color: "var(--text-muted)" }}>
          <FolderGit2 size={36} style={{ opacity: 0.3, marginBottom: "0.75rem" }} />
          <p style={{ fontWeight: "600", marginBottom: "0.25rem" }}>No projects added yet</p>
          <p style={{ fontSize: "0.85rem", marginBottom: "1rem" }}>Click above to add your impressive personal or open source projects.</p>
          <button onClick={handleAddItem} className="btn btn-secondary">
            <Plus size={15} /> Add Project
          </button>
        </div>
      ) : (
        items.map((item, index) => (
          <div key={item.id || index} className="item-card">
            <div className="item-card-header">
              <div className="item-card-title">
                <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "1.5rem", height: "1.5rem", borderRadius: "var(--radius-full)", backgroundColor: "var(--accent-light)", color: "var(--accent-primary)", fontSize: "0.75rem" }}>
                  {index + 1}
                </span>
                <span>{item.name || "New Project"}</span>
              </div>
              <div style={{ display: "flex", gap: "0.25rem" }}>
                <button
                  onClick={() => handleMove(index, -1)}
                  disabled={index === 0}
                  className="icon-btn"
                  title="Move Up"
                  style={{ opacity: index === 0 ? 0.3 : 1 }}
                >
                  <ArrowUp size={15} />
                </button>
                <button
                  onClick={() => handleMove(index, 1)}
                  disabled={index === items.length - 1}
                  className="icon-btn"
                  title="Move Down"
                  style={{ opacity: index === items.length - 1 ? 0.3 : 1 }}
                >
                  <ArrowDown size={15} />
                </button>
                <button
                  onClick={() => handleRemoveItem(index)}
                  className="icon-btn"
                  style={{ color: "#ef4444" }}
                  title="Delete Project"
                >
                  <Trash2 size={15} />
                </button>
              </div>
            </div>

            <div className="grid-2">
              <div className="form-group">
                <label>Project Title / Name</label>
                <input
                  type="text"
                  placeholder="e.g. DevPulse Telemetry Platform"
                  value={item.name || ""}
                  onChange={(e) => handleFieldChange(index, "name", e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Tech Stack / Technologies Used</label>
                <input
                  type="text"
                  placeholder="e.g. Next.js, TypeScript, Go, WebSockets"
                  value={item.technologies || ""}
                  onChange={(e) => handleFieldChange(index, "technologies", e.target.value)}
                />
              </div>
            </div>

            <div className="grid-2">
              <div className="form-group">
                <label>Live Demo URL</label>
                <input
                  type="url"
                  placeholder="https://project.example.com"
                  value={item.link || ""}
                  onChange={(e) => handleFieldChange(index, "link", e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Repository / Source Code URL</label>
                <input
                  type="url"
                  placeholder="https://github.com/example-username/project-name"
                  value={item.repo || ""}
                  onChange={(e) => handleFieldChange(index, "repo", e.target.value)}
                />
              </div>
            </div>

            <div className="form-group">
              <label>Description & Key Achievements</label>
              <textarea
                rows={3}
                placeholder="e.g. An open-source real-time telemetry tool monitoring deployment health and test metrics..."
                value={item.description || ""}
                onChange={(e) => handleFieldChange(index, "description", e.target.value)}
                style={{ lineHeight: "1.5" }}
              />
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ProjectsForm;
