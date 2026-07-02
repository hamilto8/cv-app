# ✨ CV Studio

> **The professional, privacy-first, editorial resume workspace built with React & Vite.**

<p align="center">
  <img src="https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/Vite-4.4.5-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/@react--pdf/renderer-3.1.12-FF0000?style=for-the-badge&logo=adobeacrobatreader&logoColor=white" alt="React PDF" />
  <img src="https://img.shields.io/badge/Privacy-100%25%20Client--Side-10b981?style=for-the-badge&logo=shield&logoColor=white" alt="Privacy First" />
  <img src="https://img.shields.io/badge/ATS--Friendly-Optimized-3b82f6?style=for-the-badge&logo=checkmarx&logoColor=white" alt="ATS Friendly" />
</p>

---

## 📖 Overview

**CV Studio** is a state-of-the-art web application designed to empower professionals, developers, and creatives to craft stunning, ATS-optimized resumes without compromise. 

Unlike traditional online resume builders that lock your finished CV behind paywalls, subscription traps, or invasive data-harvesting servers, **CV Studio operates 100% client-side in your browser**. Your personal career data belongs entirely to you, stored securely in local browser storage with full JSON export and import capabilities.

With a split-screen **real-time live preview**, curated **editorial typography**, tailored **color palettes**, and integrated **smart vocabulary assistance**, CV Studio transforms resume creation from a tedious task into an inspiring design experience.

---

## 🚀 Key Features

### ⚡ Split-Screen Real-Time Live Preview
- **Instant Visual Feedback**: Watch your resume layout update seamlessly in real time as you edit section fields.
- **Responsive Workspace**: Seamlessly switch between the intuitive form editor and full-screen preview on mobile and tablet devices.

### 🔒 100% Client-Side Privacy & Portability
- **Zero Data Harvesting**: No backend servers, no tracking cookies, and no account creation required. All data is persisted locally via `localStorage`.
- **JSON Backup & Restore**: Easily export your entire resume schema to a `.json` backup file and import it anytime across browsers or devices.
- **Curated Sample Profiles**: Load pre-configured sample data with a single click to explore formatting capabilities and jumpstart your application.

### 🎨 Editorial Templates & Styling System
Choose from four beautifully engineered, layout-optimized templates:
1. **Modern Executive** — Balanced, authoritative design ideal for leadership, management, and corporate roles.
2. **Minimalist Tech** — Clean, structured layout with optimized information density for software developers, engineers, and data scientists.
3. **Contemporary Editorial (Creative Glass)** — Sophisticated aesthetic with distinctive typography for designers, product managers, and creative professionals.
4. **ATS Standard Clean** — Streamlined, single-column formatting rigorously structured for Applicant Tracking System (ATS) parsers.

### 🔠 Curated Typography & Palettes
- **Typography Suite**: Powered by Google Fonts, featuring *Inter* (Modern Sans), *Outfit* (Geometric), *Space Grotesk* (Tech), *Playfair Display* (Editorial Serif), and *Roboto* (Classic).
- **Tailored Palettes**: Customize accents with *Minimalist Charcoal*, *Forest Emerald*, *Warm Terracotta*, *Executive Slate*, *Editorial Burgundy*, and *Earth Olive*.
- **Dark & Light Themes**: Enjoy a comfortable editing environment with instant dark and light interface modes.

### 📄 High-Fidelity Vector PDF Export
- **Publication-Ready Output**: Powered by `@react-pdf/renderer`, generating vector-grade PDFs that remain crisp at any zoom level and print flawlessly.
- **Direct System Print**: Trigger native print dialogues or save directly to PDF with optimized page margins.

### 💡 Action Verbs Library
- **Vocabulary Enhancement**: Integrated vocabulary booster categorized by leadership, innovation, execution, analysis, and communication to help you write high-impact achievement bullet points.

---

## 🛠️ Technology Stack

| Category | Technology | Description |
| :--- | :--- | :--- |
| **Core Framework** | [React 18](https://react.dev/) | Modern UI library with hooks and functional component architecture |
| **Build & Dev Server** | [Vite](https://vitejs.dev/) | Ultra-fast frontend tooling and Hot Module Replacement (HMR) |
| **PDF Generation** | [@react-pdf/renderer](https://react-pdf.org/) | Vector PDF generation directly from React component trees |
| **Icons Suite** | [Lucide React](https://lucide.dev/) | Consistent, clean, and modern SVG icon iconography |
| **Styling** | Vanilla CSS & Custom Variables | Lightweight, zero-runtime CSS with dynamic CSS custom properties |
| **Code Quality** | [ESLint](https://eslint.org/) | Strict linting rules for React and JSX best practices |

---

## 📦 Installation & Getting Started

### Prerequisites
- **Node.js**: Version 16.x or higher
- **Package Manager**: `npm`, `pnpm`, or `yarn`

### 1. Clone the Repository
```bash
git clone https://github.com/hamilto8/cv-app.git
cd cv-app
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start the Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173` to start designing your resume!

---

## 📜 Available Scripts

In the project directory, you can run:

- `npm run dev` — Starts the Vite development server with instant HMR.
- `npm run build` — Compiles and bundles the application for production into the `/dist` directory.
- `npm run preview` — Spawns a local web server to preview your production build locally.
- `npm run lint` — Runs ESLint across all `.js` and `.jsx` files to report syntax or style errors.

---

## 📂 Project Structure

```text
cv-app/
├── public/                 # Static assets
├── src/
│   ├── components/
│   │   ├── Editor/         # Section form editors (Personal, Work, Education, etc.)
│   │   ├── Preview/        # Live preview container & editorial templates
│   │   ├── SmartAssistant/ # Action verb suggestions & vocabulary modal
│   │   ├── Header.jsx      # Top navigation, theme/template controls, & export tools
│   │   └── Footer.jsx      # Application footer
│   ├── data/
│   │   ├── sampleData.js   # Curated sample resumes & default state schemas
│   │   └── actionVerbs.js  # Categorized power verbs for resume achievements
│   ├── styles/
│   │   ├── App.css         # Main application layout & theme variables
│   │   └── index.css       # Global resets & typography import definitions
│   ├── App.jsx             # Core state management & layout orchestration
│   ├── ResumePDF.jsx       # @react-pdf/renderer document engine
│   └── main.jsx            # Application entry point
├── index.html              # HTML shell & Google Fonts preconnects
├── package.json            # Project metadata and dependency definitions
└── vite.config.js          # Vite configuration
```

---

## 🧭 Usage Guide

1. **Choose Your Template & Styling**: Click the palette icon in the header to select from 4 editorial templates, 6 color themes, and 5 typography suites.
2. **Fill in Your Career Data**: Use the left sidebar navigation to transition between **Personal Info**, **Work Experience**, **Education**, **Skills**, **Projects**, **Certifications**, **Languages**, and **Custom Sections**.
3. **Power Up Your Bullets**: When writing work experience or project descriptions, open the **Action Verbs** library to discover strong verbs that highlight your achievements.
4. **Backup Your Work**: Click **Export JSON** in the header dropdown to save a local backup of your data. Use **Import JSON** anytime to restore it.
5. **Download & Share**: When you're satisfied with the preview, click **Download PDF** for a publication-ready document or use **Print** for direct system printing.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! 

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is open-source and available under the **MIT License**.

---

<p align="center">
  Built with ❤️ for privacy, design excellence, and professional growth.
</p>
