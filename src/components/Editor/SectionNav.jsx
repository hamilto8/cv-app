import React from "react";
import { 
  User, Briefcase, GraduationCap, Code, 
  FolderGit2, Award, Globe, PlusCircle 
} from "lucide-react";

const SectionNav = ({ activeSection, setActiveSection }) => {
  const sections = [
    { id: "personal", label: "Personal & Bio", icon: User },
    { id: "work", label: "Work Experience", icon: Briefcase },
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "skills", label: "Skills & Tech", icon: Code },
    { id: "projects", label: "Projects", icon: FolderGit2 },
    { id: "certifications", label: "Certifications", icon: Award },
    { id: "languages", label: "Languages", icon: Globe },
    { id: "custom", label: "Custom Sections", icon: PlusCircle }
  ];

  return (
    <nav className="editor-nav">
      {sections.map((s) => {
        const IconComponent = s.icon;
        return (
          <button
            key={s.id}
            onClick={() => setActiveSection(s.id)}
            className={`nav-tab ${activeSection === s.id ? "active" : ""}`}
          >
            <IconComponent size={15} />
            <span>{s.label}</span>
          </button>
        );
      })}
    </nav>
  );
};

export default SectionNav;
