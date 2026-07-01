import React from "react";
import { GraduationCap, Plus, Trash2, ArrowUp, ArrowDown } from "lucide-react";

const EducationForm = ({ items = [], onChange }) => {
  const handleAddItem = () => {
    const newItem = {
      id: "e_" + Date.now(),
      schoolName: "",
      schoolMajor: "",
      location: "",
      schoolStartDate: "",
      schoolEndDate: "",
      honors: ""
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
            <GraduationCap size={22} style={{ color: "var(--accent-primary)" }} />
            <span>Education & Academic Credentials</span>
          </div>
          <div className="section-subtitle">
            List your degrees, institutions, graduation dates, and academic honors.
          </div>
        </div>
        <button onClick={handleAddItem} className="btn btn-primary" style={{ padding: "0.45rem 0.8rem" }}>
          <Plus size={16} />
          <span>Add Degree</span>
        </button>
      </div>

      {items.length === 0 ? (
        <div style={{ textAlign: "center", padding: "3rem 1.5rem", border: "2px dashed var(--border-color)", borderRadius: "var(--radius-md)", color: "var(--text-muted)" }}>
          <GraduationCap size={36} style={{ opacity: 0.3, marginBottom: "0.75rem" }} />
          <p style={{ fontWeight: "600", marginBottom: "0.25rem" }}>No educational background added</p>
          <p style={{ fontSize: "0.85rem", marginBottom: "1rem" }}>Click above to add your university degrees or academic achievements.</p>
          <button onClick={handleAddItem} className="btn btn-secondary">
            <Plus size={15} /> Add Education
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
                <span>{item.schoolMajor || "New Degree / Major"}</span>
                {item.schoolName && <span style={{ color: "var(--text-muted)", fontWeight: "400" }}>from {item.schoolName}</span>}
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
                  title="Delete Degree"
                >
                  <Trash2 size={15} />
                </button>
              </div>
            </div>

            <div className="grid-2">
              <div className="form-group">
                <label>Institution / School Name</label>
                <input
                  type="text"
                  placeholder="e.g. UC Berkeley or MIT"
                  value={item.schoolName || ""}
                  onChange={(e) => handleFieldChange(index, "schoolName", e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Degree / Major / Field of Study</label>
                <input
                  type="text"
                  placeholder="e.g. B.S. in Computer Science"
                  value={item.schoolMajor || ""}
                  onChange={(e) => handleFieldChange(index, "schoolMajor", e.target.value)}
                />
              </div>
            </div>

            <div className="grid-2">
              <div className="form-group">
                <label>Location</label>
                <input
                  type="text"
                  placeholder="e.g. Berkeley, CA"
                  value={item.location || ""}
                  onChange={(e) => handleFieldChange(index, "location", e.target.value)}
                />
              </div>
              <div style={{ display: "flex", gap: "0.5rem" }}>
                <div className="form-group" style={{ flex: 1 }}>
                  <label>Start Date</label>
                  <input
                    type="text"
                    placeholder="YYYY-MM or Sep 2011"
                    value={item.schoolStartDate || ""}
                    onChange={(e) => handleFieldChange(index, "schoolStartDate", e.target.value)}
                  />
                </div>
                <div className="form-group" style={{ flex: 1 }}>
                  <label>End Date / Grad Year</label>
                  <input
                    type="text"
                    placeholder="YYYY-MM or May 2015"
                    value={item.schoolEndDate || ""}
                    onChange={(e) => handleFieldChange(index, "schoolEndDate", e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="form-group">
              <label>Honors, GPA, or Relevant Coursework (Optional)</label>
              <textarea
                rows={2}
                placeholder="e.g. Magna Cum Laude (GPA: 3.86/4.0), Dean's List, President of ACM"
                value={item.honors || ""}
                onChange={(e) => handleFieldChange(index, "honors", e.target.value)}
              />
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default EducationForm;
