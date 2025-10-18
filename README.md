# Twinenergy
TwinEnergy helps users track and reduce their carbon footprint with interactive dashboards, AI-powered insights, CO₂ analytics, a sustainability calculator, and green zone maps. 
Built with React, Chart.js, and Framer Motion to promote eco-friendly, data-driven living.

# 🌍 TwinEnergy — Smart Sustainability Dashboard

![TwinEnergy Banner](https://github.com/shoaibahmed2755/Twinenergy/blob/main/Dashboard.png)

[![React](https://img.shields.io/badge/React-18.2-blue?logo=react)](https://react.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.0-38B2AC?logo=tailwindcss)](https://tailwindcss.com/)
[![Chart.js](https://img.shields.io/badge/Chart.js-4.4-F5788D?logo=chartdotjs)](https://www.chartjs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

---

## 🌐 Live Demo  
👉 [Try TwinEnergy Now](https://github.com/shoaibahmed2755/Twinenergy)

---

## 🧠 About the Project

**TwinEnergy** is an AI-powered sustainability platform that helps individuals and communities monitor, analyze, and reduce their carbon footprint.  
It provides **interactive dashboards**, **real-time analytics**, **AI insights**, and **eco-friendly recommendations** — all in a smooth, futuristic UI.

---

## 🚀 Features

- 📊 **Advanced Dashboard:** Upload CSV files to visualize and analyze CO₂ emissions.
- 🤖 **AI Insights:** Get sustainability suggestions powered by the Gemini API.
- ⚙️ **Carbon Calculator:** Estimate your footprint using custom inputs.
- 🌱 **Interactive Map:** Explore green zones & eco-friendly places near you.
- 👥 **Community:** Connect with fellow eco-conscious users.
- 🧭 **Coach Mode:** Personalized sustainability guidance.
- 💡 **Life Tips & Alternatives:** Discover daily eco-friendly habits.
- 📈 **Trends Visualization:** Track your emission progress over time.

---

## 📁 Example CSV Format

| Date       | Category   | Activity       | Amount | CO2_Emission |
|-------------|-------------|----------------|---------|---------------|
| 2025-01-01  | Travel      | Car Ride       | 12      | 3.2           |
| 2025-01-02  | Consumption | Electricity    | 8       | 4.1           |
| 2025-01-03  | Digital     | Internet Usage | 5       | 1.5           |

📌 *Tip:* Upload a similar CSV file in the dashboard to generate graphs and AI insights.

---

## 🖼️ Screenshots

| Advanced Dashboard | AI Insights (Coach) | Life Tips |
|------------|-------------|-----|
| ![Dashboard](https://github.com/shoaibahmed2755/Twinenergy/blob/main/AdvanceDashboard.png) | ![AI Insights](https://github.com/shoaibahmed2755/Twinenergy/blob/main/AI%20Coach.png) | ![Life Tips](https://github.com/shoaibahmed2755/Twinenergy/blob/main/Life%20Tips.png) |

---

## 🧩 Project Structure

```
src/
│
├── components/
│   ├── FileUploadZone.jsx
│   ├── EnergyChart.jsx
│   ├── MetricsGrid.jsx
│   ├── Footer.jsx
│   └── Header.jsx
│
├── screens/
│   ├── Dashboard.jsx
│   ├── AdvancedDashboard.jsx
│   ├── Calculator.jsx
│   ├── MapScreen.jsx
│   ├── Community.jsx
│   └── Coach.jsx
│
├── utils/
│   ├── storage.js
│   └── gemini.js
│
├── App.jsx
└── index.css
```

---

## ⚙️ Installation

```bash
git clone https://github.com/<your-username>/twinenergy.git
cd twinenergy
npm install
npm run dev
```

Then open in your browser:
```
http://localhost:5173
```

---

## 🔑 Environment Variables

Create a `.env` file in your project root and add:

```
VITE_GEMINI_API_KEY=your_google_gemini_api_key
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
```

Get your keys from:
- [Google AI Studio (Gemini)](https://makersuite.google.com/app/apikey)
- [Google Cloud Console (Maps)](https://console.cloud.google.com/)

---

## 🧠 How to Use

1. Upload your CSV file in the **Advanced Dashboard**.
2. Instantly see CO₂ breakdown charts and daily trends.
3. Click **Ask Gemini** to generate AI-powered eco tips.
4. Explore the **Calculator**, **Map**, and **Community** sections for more tools.

---

## 🛠️ Built With

- ⚛️ **React.js** — Core framework  
- 🎨 **Tailwind CSS** — Responsive, modern styling  
- 📊 **Chart.js & Recharts** — Data visualization  
- 💫 **Framer Motion** — Animations and transitions  
- 🧮 **PapaParse** — CSV file parsing  
- 🤖 **Google Gemini API** — AI insights  
- 🗺️ **Google Maps API** — Green zone visualization  

---

## 🎨 UI Highlights

- Soft eco-friendly color palette 🌿  
- Animated transitions & hover effects ✨  
- Fully responsive for desktop and mobile 💻📱  
- Clean dashboard experience with modern typography  

---

## 📦 Deployment

```bash
npm run build
```

Deploy easily on:
- **Vercel**
- **Netlify**
- **Firebase Hosting**

---

## 👨‍💻 Contributors

| Name | Role |
|------|------|
| Your Name | Developer / Designer |
| Your Team | UI / AI Integration |

---

## 🤝 Contributing

```bash
git fork https://github.com/<your-username>/twinenergy.git
git checkout -b feature-name
git commit -m "Add new feature"
git push origin feature-name
```

Then open a **Pull Request** on GitHub.

---

## 📜 License

This project is licensed under the **MIT License**.  
You’re free to use, modify, and share it responsibly.

---

## 🌟 Acknowledgments

- Google Gemini API for AI insights  
- Chart.js & Recharts for beautiful data visualization  
- Tailwind CSS for stunning and quick design  
- The open-source community for constant inspiration  

---

### 💚 TwinEnergy — Empowering a Sustainable Future  
> *“Small steps, big impact — let’s build a cleaner tomorrow together.”*

# Commit & Push in CMD
git add README.md
git commit -m "Added enhanced README with visuals, CSV example, and live demo link"
git push origin main

