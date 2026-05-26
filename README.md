# High-Tech Agritech Portfolio // Single Page Application (SPA)

<!-- [![Netlify Status](https://api.netlify.com/api/v1/badges/https://www.linkedin.com/in/nova-bamahry-2b043527/)](https://portfolio-novab.netlify.app) -->
[![React](https://img.shields.io/badge/Frontend-React-61DAFB?style=flat&logo=react&logoColor=black)](https://react.dev/)
[![Bootstrap](https://img.shields.io/badge/UI--Framework-Bootstrap-7952B3?style=flat&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)

An industrial-grade, single-page professional portfolio engineered specifically for the intersection of **Agricultural Research** and **Modern Software Engineering**. This application showcases production-ready utilities designed to solve real-world agricultural data limits through computational efficiency and high-glare field visibility.

🌐 **Live Demo:** [portfolio-novab.netlify.app](https://portfolio-novab.netlify.app)

---

## ⚡ Core Architecture & Engineering Highlights

* **Single Page Architecture (SPA):** Built with React and optimized for fluid, friction-free performance, eliminating browser reloads during section transitions via smooth anchor-link navigation.
* **High-Contrast Outdoor UI (Cyber Lime):** Implements a bespoke dark-theme interface with neon accent elements tailored for field agronomists working under direct, harsh sunlight glare.
* **Dynamic Favicon Integration:** Features an isolated utility layer (`src/utils/getFavIcon.js`) leveraging the Google S2 API to dynamically fetch 64x64 high-resolution network icons with fail-safe fallbacks.
* **Responsive Mobile Layouts:** Fully responsive mobile mockups tailored to demonstrate mobile-first agritech utilities (`AgriPOP` & `MarkedIT Agri`) directly inside the viewport.

---

## 🛠️ Tech Stack & Utilities

* **Core Frontend:** React (Functional Components, Hooks architecture)
* **Styling & Layout:** Bootstrap 5, Custom SCSS for modular neon effects and seamless component spacing
* **Package Management:** npm
* **Deployment Pipeline:** Netlify Continuous Deployment (CD) synced via GitHub main branch

---

## 📂 Project Structure Overview

```text
src/
├── components/
│   ├── C1_Navbar.jsx          # Smooth anchor link navigation layer
│   ├── C2_HeroSection.jsx     # Technical identity overview & T-Shape mapping
│   ├── C4_ProjectSection.jsx  # High-fidelity mobile mockups for Agri-Apps
│   └── C5_ContactSection.jsx  # Professional gateway integrated with dynamic API
├── utils/
│   └── getFavIcon.js          # Dynamic API domain utility with fallback handling
└── assets/                    # High-resolution optimized transparent assets

## JS
```javascript
export const getFavIcon = (url) => {
  try {
    const domain = new URL(url).hostname;
    return `https://www.google.com/s2/favicons?sz=64&domain=${domain}`;
  } catch {
    return '[https://www.google.com/s2/favicons?sz=64&domain=github.com](https://www.google.com/s2/favicons?sz=64&domain=github.com)';
  }
};
```

🌾 About the Architect
Engineered by a T-Shape Agronomist & Developer with over 10 years of extensive field experience in hybrid seed engineering and rice production management. This portfolio serves as a concrete bridge connecting advanced agronomic field logic with lightweight, production-ready frontend architectures.

Developed with focus on field validation, performance, and industrial precision.
