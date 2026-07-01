import React from "react";
import { User, Mail, Phone, MapPin, Globe, FileText } from "lucide-react";
import { Linkedin, Github } from "../Icons";

const PersonalForm = ({ data, onChange }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange({ ...data, [name]: value });
  };

  return (
    <div className="animate-fade-in">
      <div className="section-header">
        <div>
          <div className="section-title">
            <User size={22} style={{ color: "var(--accent-primary)" }} />
            <span>Personal Details & Summary</span>
          </div>
          <div className="section-subtitle">
            Your primary contact information and high-level professional pitch.
          </div>
        </div>
      </div>

      <div className="item-card">
        <div className="grid-2">
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              placeholder="e.g. Alex Rivera"
              value={data?.fullName || ""}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="jobTitle">Professional Title / Target Role</label>
            <input
              id="jobTitle"
              name="jobTitle"
              type="text"
              placeholder="e.g. Senior Full Stack Engineer"
              value={data?.jobTitle || ""}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="grid-2">
          <div className="form-group">
            <label htmlFor="email" style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
              <Mail size={14} /> Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="alex@domain.com"
              value={data?.email || ""}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone" style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
              <Phone size={14} /> Phone Number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+1 (555) 234-5678"
              value={data?.phone || ""}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="location" style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
            <MapPin size={14} /> Location / City
          </label>
          <input
            id="location"
            name="location"
            type="text"
            placeholder="e.g. San Francisco, CA (Remote)"
            value={data?.location || ""}
            onChange={handleChange}
          />
        </div>

        <div className="grid-2" style={{ marginTop: "1rem", paddingTop: "1rem", borderTop: "1px dashed var(--border-color)" }}>
          <div className="form-group">
            <label htmlFor="linkedin" style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
              <Linkedin size={14} /> LinkedIn URL
            </label>
            <input
              id="linkedin"
              name="linkedin"
              type="url"
              placeholder="https://linkedin.com/in/username"
              value={data?.linkedin || ""}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="github" style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
              <Github size={14} /> GitHub URL
            </label>
            <input
              id="github"
              name="github"
              type="url"
              placeholder="https://github.com/username"
              value={data?.github || ""}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="website" style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
            <Globe size={14} /> Personal Website / Portfolio
          </label>
          <input
            id="website"
            name="website"
            type="url"
            placeholder="https://yourdomain.dev"
            value={data?.website || ""}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="item-card">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
          <label htmlFor="summary" style={{ display: "flex", alignItems: "center", gap: "0.4rem", margin: 0, fontSize: "0.95rem", color: "var(--text-primary)" }}>
            <FileText size={16} style={{ color: "var(--accent-primary)" }} /> Professional Summary / Bio
          </label>
          <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
            {(data?.summary || "").length} characters
          </span>
        </div>
        <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "0.75rem" }}>
          Write 3-4 impactful sentences summarizing your key achievements, years of experience, and unique value proposition.
        </p>
        <textarea
          id="summary"
          name="summary"
          rows={5}
          placeholder="e.g. Innovative Senior Full Stack Engineer with 8+ years of experience building high-performance web apps..."
          value={data?.summary || ""}
          onChange={handleChange}
          style={{ lineHeight: "1.6" }}
        />
      </div>
    </div>
  );
};

export default PersonalForm;
