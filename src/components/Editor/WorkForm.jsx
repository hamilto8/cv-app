import React, { useState } from "react";
import { Briefcase, Plus, Trash2, ArrowUp, ArrowDown, BookOpen, X } from "lucide-react";
import ActionVerbsModal from "../SmartAssistant/ActionVerbsModal";

const WorkForm = ({ items = [], onChange }) => {
  const [activeVerbModalIndex, setActiveVerbModalIndex] = useState(null);

  const handleAddItem = () => {
    const newItem = {
      id: "w_" + Date.now(),
      companyName: "",
      positionTitle: "",
      location: "",
      dateStarted: "",
      dateEnded: "",
      isCurrent: false,
      duties: [""]
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
    if (field === "isCurrent" && value === true) {
      updated[index].dateEnded = "Present";
    }
    onChange(updated);
  };

  const handleDutyChange = (itemIndex, dutyIndex, value) => {
    const updated = [...items];
    const newDuties = [...(updated[itemIndex].duties || [""])];
    newDuties[dutyIndex] = value;
    updated[itemIndex].duties = newDuties;
    onChange(updated);
  };

  const handleAddDuty = (itemIndex) => {
    const updated = [...items];
    const newDuties = [...(updated[itemIndex].duties || []), ""];
    updated[itemIndex].duties = newDuties;
    onChange(updated);
  };

  const handleRemoveDuty = (itemIndex, dutyIndex) => {
    const updated = [...items];
    const newDuties = updated[itemIndex].duties.filter((_, i) => i !== dutyIndex);
    updated[itemIndex].duties = newDuties.length > 0 ? newDuties : [""];
    onChange(updated);
  };

  const handleInsertVerb = (itemIndex, dutyIndex, verb) => {
    const updated = [...items];
    const currentText = updated[itemIndex].duties[dutyIndex] || "";
    updated[itemIndex].duties[dutyIndex] = `${verb} ${currentText}`.trim();
    onChange(updated);
    setActiveVerbModalIndex(null);
  };

  return (
    <div className="animate-fade-in">
      <div className="section-header">
        <div>
          <div className="section-title">
            <Briefcase size={22} style={{ color: "var(--accent-primary)" }} />
            <span>Work Experience</span>
          </div>
          <div className="section-subtitle">
            Detail your employment history, key responsibilities, and quantified impact.
          </div>
        </div>
        <button onClick={handleAddItem} className="btn btn-primary" style={{ padding: "0.45rem 0.8rem" }}>
          <Plus size={16} />
          <span>Add Position</span>
        </button>
      </div>

      {items.length === 0 ? (
        <div style={{ textAlign: "center", padding: "3rem 1.5rem", border: "2px dashed var(--border-color)", borderRadius: "var(--radius-md)", color: "var(--text-muted)" }}>
          <Briefcase size={36} style={{ opacity: 0.3, marginBottom: "0.75rem" }} />
          <p style={{ fontWeight: "600", marginBottom: "0.25rem" }}>No work experience added yet</p>
          <p style={{ fontSize: "0.85rem", marginBottom: "1rem" }}>Click above to add your first job position or internship.</p>
          <button onClick={handleAddItem} className="btn btn-secondary">
            <Plus size={15} /> Add Work Experience
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
                <span>{item.positionTitle || "New Position"}</span>
                {item.companyName && <span style={{ color: "var(--text-muted)", fontWeight: "400" }}>at {item.companyName}</span>}
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
                  title="Delete Position"
                >
                  <Trash2 size={15} />
                </button>
              </div>
            </div>

            <div className="grid-2">
              <div className="form-group">
                <label>Job / Position Title</label>
                <input
                  type="text"
                  placeholder="e.g. Senior Software Engineer"
                  value={item.positionTitle || ""}
                  onChange={(e) => handleFieldChange(index, "positionTitle", e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Company / Employer Name</label>
                <input
                  type="text"
                  placeholder="e.g. Google or CloudScale"
                  value={item.companyName || ""}
                  onChange={(e) => handleFieldChange(index, "companyName", e.target.value)}
                />
              </div>
            </div>

            <div className="grid-2">
              <div className="form-group">
                <label>Location</label>
                <input
                  type="text"
                  placeholder="e.g. San Francisco, CA (Hybrid)"
                  value={item.location || ""}
                  onChange={(e) => handleFieldChange(index, "location", e.target.value)}
                />
              </div>
              <div style={{ display: "flex", gap: "0.5rem" }}>
                <div className="form-group" style={{ flex: 1 }}>
                  <label>Start Date</label>
                  <input
                    type="text"
                    placeholder="YYYY-MM or Jan 2021"
                    value={item.dateStarted || ""}
                    onChange={(e) => handleFieldChange(index, "dateStarted", e.target.value)}
                  />
                </div>
                <div className="form-group" style={{ flex: 1 }}>
                  <label style={{ display: "flex", justifyContent: "space-between" }}>
                    <span>End Date</span>
                    <span style={{ fontSize: "0.7rem", fontWeight: "normal", cursor: "pointer", color: "var(--accent-primary)" }} onClick={() => handleFieldChange(index, "isCurrent", !item.isCurrent)}>
                      {item.isCurrent ? "✓ Current" : "Set Current"}
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="YYYY-MM or Present"
                    disabled={item.isCurrent}
                    value={item.isCurrent ? "Present" : item.dateEnded || ""}
                    onChange={(e) => handleFieldChange(index, "dateEnded", e.target.value)}
                    style={{ backgroundColor: item.isCurrent ? "var(--bg-subtle)" : "var(--bg-surface)" }}
                  />
                </div>
              </div>
            </div>

            {/* Bullet Points / Duties */}
            <div style={{ marginTop: "0.75rem", paddingTop: "0.75rem", borderTop: "1px dashed var(--border-color)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.6rem" }}>
                <label style={{ margin: 0, color: "var(--text-primary)" }}>Key Achievements & Responsibilities</label>
                <span
                  onClick={() => setActiveVerbModalIndex({ itemIndex: index, dutyIndex: (item.duties || []).length - 1 })}
                  className="smart-badge"
                  title="Click for Action Verbs library"
                >
                  <BookOpen size={13} />
                  <span>Action Verbs</span>
                </span>
              </div>

              {(item.duties || [""]).map((duty, dutyIdx) => (
                <div key={dutyIdx} style={{ display: "flex", gap: "0.5rem", marginBottom: "0.5rem", alignItems: "flex-start" }}>
                  <span style={{ padding: "0.6rem 0.2rem", color: "var(--text-muted)", fontSize: "0.9rem", fontWeight: "bold" }}>•</span>
                  <textarea
                    rows={2}
                    placeholder="e.g. Spearheaded the migration to serverless microservices, reducing latency by 40%..."
                    value={duty || ""}
                    onChange={(e) => handleDutyChange(index, dutyIdx, e.target.value)}
                    style={{ flex: 1, fontSize: "0.875rem", lineHeight: "1.5" }}
                  />
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.2rem" }}>
                    <button
                      type="button"
                      onClick={() => setActiveVerbModalIndex({ itemIndex: index, dutyIndex: dutyIdx })}
                      className="icon-btn"
                      style={{ width: "1.8rem", height: "1.8rem", color: "var(--accent-primary)" }}
                      title="Insert action verb"
                    >
                      <BookOpen size={14} />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleRemoveDuty(index, dutyIdx)}
                      className="icon-btn"
                      style={{ width: "1.8rem", height: "1.8rem", color: "#ef4444" }}
                      title="Remove bullet point"
                    >
                      <X size={14} />
                    </button>
                  </div>
                </div>
              ))}

              <button
                type="button"
                onClick={() => handleAddDuty(index)}
                className="btn btn-ghost"
                style={{ fontSize: "0.8rem", padding: "0.3rem 0.5rem", marginTop: "0.25rem", color: "var(--accent-primary)" }}
              >
                <Plus size={14} /> Add Bullet Point
              </button>
            </div>
          </div>
        ))
      )}

      {/* Action Verbs Modal */}
      <ActionVerbsModal
        isOpen={activeVerbModalIndex !== null}
        onClose={() => setActiveVerbModalIndex(null)}
        onSelectVerb={(verb) => {
          if (activeVerbModalIndex) {
            handleInsertVerb(activeVerbModalIndex.itemIndex, activeVerbModalIndex.dutyIndex, verb);
          }
        }}
      />
    </div>
  );
};

export default WorkForm;
