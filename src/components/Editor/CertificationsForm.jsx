import React from "react";
import { Award, Plus, Trash2, ArrowUp, ArrowDown } from "lucide-react";

const CertificationsForm = ({ items = [], onChange }) => {
  const handleAddItem = () => {
    const newItem = {
      id: "c_" + Date.now(),
      name: "",
      issuer: "",
      date: "",
      link: ""
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
            <Award size={22} style={{ color: "var(--accent-primary)" }} />
            <span>Certifications & Awards</span>
          </div>
          <div className="section-subtitle">
            Showcase industry certifications, professional licenses, or notable awards received.
          </div>
        </div>
        <button onClick={handleAddItem} className="btn btn-primary" style={{ padding: "0.45rem 0.8rem" }}>
          <Plus size={16} />
          <span>Add Certification</span>
        </button>
      </div>

      {items.length === 0 ? (
        <div style={{ textAlign: "center", padding: "3rem 1.5rem", border: "2px dashed var(--border-color)", borderRadius: "var(--radius-md)", color: "var(--text-muted)" }}>
          <Award size={36} style={{ opacity: 0.3, marginBottom: "0.75rem" }} />
          <p style={{ fontWeight: "600", marginBottom: "0.25rem" }}>No certifications added</p>
          <p style={{ fontSize: "0.85rem", marginBottom: "1rem" }}>Click above to add AWS, Kubernetes, Scrum, or any industry awards.</p>
          <button onClick={handleAddItem} className="btn btn-secondary">
            <Plus size={15} /> Add Certification
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
                <span>{item.name || "New Certification"}</span>
                {item.issuer && <span style={{ color: "var(--text-muted)", fontWeight: "400" }}>by {item.issuer}</span>}
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
                  title="Delete Certification"
                >
                  <Trash2 size={15} />
                </button>
              </div>
            </div>

            <div className="grid-2">
              <div className="form-group">
                <label>Certification / Award Name</label>
                <input
                  type="text"
                  placeholder="e.g. AWS Certified Solutions Architect"
                  value={item.name || ""}
                  onChange={(e) => handleFieldChange(index, "name", e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Issuing Organization / Authority</label>
                <input
                  type="text"
                  placeholder="e.g. Amazon Web Services (AWS)"
                  value={item.issuer || ""}
                  onChange={(e) => handleFieldChange(index, "issuer", e.target.value)}
                />
              </div>
            </div>

            <div className="grid-2">
              <div className="form-group">
                <label>Date Earned / Issued</label>
                <input
                  type="text"
                  placeholder="e.g. Aug 2023 or 2023-08"
                  value={item.date || ""}
                  onChange={(e) => handleFieldChange(index, "date", e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Credential Verification URL (Optional)</label>
                <input
                  type="url"
                  placeholder="https://verification.example.com/cert/12345"
                  value={item.link || ""}
                  onChange={(e) => handleFieldChange(index, "link", e.target.value)}
                />
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default CertificationsForm;
