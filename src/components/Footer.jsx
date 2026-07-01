import React from "react";
import { ShieldCheck } from "lucide-react";
import { Github } from "./Icons";

const Footer = () => {
  return (
    <footer className="app-footer no-print">
      <div className="footer-secure">
        <ShieldCheck size={16} />
        <span>100% Client-Side Privacy — All data stays locally in your browser</span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
        <span>Crafted with precision • Open Source CV Workspace</span>
        <a
          href="https://github.com/hamilto8/cv-app"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "var(--text-secondary)", display: "flex", alignItems: "center", gap: "0.4rem", textDecoration: "none" }}
        >
          <Github size={15} />
          <span>Repository</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
