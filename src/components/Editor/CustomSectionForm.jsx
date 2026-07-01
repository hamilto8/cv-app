import React from "react";
import { PlusCircle, Plus, Trash2, ArrowUp, ArrowDown } from "lucide-react";

const CustomSectionForm = ({ items = [], onChange }) => {
  const handleAddSection = () => {
    const newSection = {
      id: "cs_" + Date.now(),
      title: "New Custom Section",
      items: [
        { id: "csi_" + Date.now(), title: "Item Title", subtitle: "Subtitle or description", date: "2023" }
      ]
    };
    onChange([...items, newSection]);
  };

  const handleRemoveSection = (index) => {
    const updated = items.filter((_, i) => i !== index);
    onChange(updated);
  };

  const handleSectionTitleChange = (index, value) => {
    const updated = [...items];
    updated[index].title = value;
    onChange(updated);
  };

  const handleAddItem = (sectionIdx) => {
    const updated = [...items];
    const newItems = [...(updated[sectionIdx].items || []), { id: "csi_" + Date.now(), title: "", subtitle: "", date: "" }];
    updated[sectionIdx].items = newItems;
    onChange(updated);
  };

  const handleRemoveItem = (sectionIdx, itemIdx) => {
    const updated = [...items];
    updated[sectionIdx].items = updated[sectionIdx].items.filter((_, i) => i !== itemIdx);
    onChange(updated);
  };

  const handleItemChange = (sectionIdx, itemIdx, field, value) => {
    const updated = [...items];
    updated[sectionIdx].items[itemIdx] = { ...updated[sectionIdx].items[itemIdx], [field]: value };
    onChange(updated);
  };

  return (
    <div className="animate-fade-in">
      <div className="section-header">
        <div>
          <div className="section-title">
            <PlusCircle size={22} style={{ color: "var(--accent-primary)" }} />
            <span>Custom Sections</span>
          </div>
          <div className="section-subtitle">
            Add tailored sections like Publications, Volunteering, Patents, or Speaking Engagements.
          </div>
        </div>
        <button onClick={handleAddSection} className="btn btn-primary" style={{ padding: "0.45rem 0.8rem" }}>
          <Plus size={16} />
          <span>Add Custom Section</span>
        </button>
      </div>

      {items.length === 0 ? (
        <div style={{ textAlign: "center", padding: "3rem 1.5rem", border: "2px dashed var(--border-color)", borderRadius: "var(--radius-md)", color: "var(--text-muted)" }}>
          <PlusCircle size={36} style={{ opacity: 0.3, marginBottom: "0.75rem" }} />
          <p style={{ fontWeight: "600", marginBottom: "0.25rem" }}>No custom sections added</p>
          <p style={{ fontSize: "0.85rem", marginBottom: "1rem" }}>Click above to create any specialized resume category you need.</p>
          <button onClick={handleAddSection} className="btn btn-secondary">
            <Plus size={15} /> Add Custom Section
          </button>
        </div>
      ) : (
        items.map((section, sIdx) => (
          <div key={section.id || sIdx} className="item-card" style={{ borderLeft: "4px solid var(--accent-primary)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem", paddingBottom: "0.5rem", borderBottom: "1px solid var(--border-color)" }}>
              <input
                type="text"
                placeholder="Section Title (e.g. Publications)"
                value={section.title || ""}
                onChange={(e) => handleSectionTitleChange(sIdx, e.target.value)}
                style={{ fontSize: "1.05rem", fontWeight: "700", border: "none", backgroundColor: "transparent", padding: "0.25rem 0" }}
              />
              <button
                onClick={() => handleRemoveSection(sIdx)}
                className="btn btn-danger"
                style={{ padding: "0.3rem 0.6rem", fontSize: "0.75rem" }}
              >
                <Trash2 size={13} /> Delete Section
              </button>
            </div>

            {(section.items || []).map((item, iIdx) => (
              <div key={item.id || iIdx} style={{ padding: "0.75rem", backgroundColor: "var(--bg-main)", borderRadius: "var(--radius-sm)", marginBottom: "0.75rem", border: "1px solid var(--border-color)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                  <span style={{ fontSize: "0.75rem", fontWeight: "600", color: "var(--text-muted)" }}>Item #{iIdx + 1}</span>
                  <button
                    onClick={() => handleRemoveItem(sIdx, iIdx)}
                    className="icon-btn"
                    style={{ width: "1.4rem", height: "1.4rem", color: "#ef4444" }}
                    title="Remove item"
                  >
                    <Trash2 size={13} />
                  </button>
                </div>
                <div className="grid-2">
                  <div className="form-group">
                    <label>Title / Heading</label>
                    <input
                      type="text"
                      placeholder="e.g. Speaker at QCon 2023"
                      value={item.title || ""}
                      onChange={(e) => handleItemChange(sIdx, iIdx, "title", e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Date or Location</label>
                    <input
                      type="text"
                      placeholder="e.g. Oct 2023"
                      value={item.date || ""}
                      onChange={(e) => handleItemChange(sIdx, iIdx, "date", e.target.value)}
                    />
                  </div>
                </div>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label>Subtitle or Details</label>
                  <input
                    type="text"
                    placeholder="e.g. Talk on Scaling Microfrontends to 10M Users"
                    value={item.subtitle || ""}
                    onChange={(e) => handleItemChange(sIdx, iIdx, "subtitle", e.target.value)}
                  />
                </div>
              </div>
            ))}

            <button
              onClick={() => handleAddItem(sIdx)}
              className="btn btn-secondary"
              style={{ fontSize: "0.8rem", padding: "0.4rem 0.7rem", marginTop: "0.5rem" }}
            >
              <Plus size={14} /> Add Item to {section.title || "Section"}
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default CustomSectionForm;
