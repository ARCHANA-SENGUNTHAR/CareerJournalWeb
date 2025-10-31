// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  EN: {
    translation: {
      welcome: "Welcome to CareerMate",
      subtitle: "Your personal career journal starts here.",
      journals: "Journals",
      journalsDesc: "Write and reflect on your daily career journey.",
      profile: "Profile",
      profileDesc: "Track your progress and manage your personal details.",
      insights: "Insights",
      insightsDesc: "Visualize growth and achievements over time.",
      goals: "Goals",
      goalsDesc: "Set career goals and stay focused on achieving them.",
    },
  },
  TA: {
    translation: {
      welcome: "கேரியர் மேட்-க்கு வரவேற்கிறோம்",
      subtitle: "உங்கள் தனிப்பட்ட தொழில் குறிப்பேடு இங்கே தொடங்குகிறது.",
      journals: "ஜர்னல்கள்",
      journalsDesc: "உங்கள் தொழில்நுட்ப பயணத்தை தினமும் பதிவு செய்து சிந்தியுங்கள்.",
      profile: "சுயவிவரம்",
      profileDesc: "உங்கள் முன்னேற்றத்தை கண்காணித்து விவரங்களை நிர்வகிக்கவும்.",
      insights: "உள்ளடக்கங்கள்",
      insightsDesc: "உங்கள் வளர்ச்சியையும் சாதனைகளையும் காட்சிப்படுத்துங்கள்.",
      goals: "இலக்குகள்",
      goalsDesc: "உங்கள் தொழில் இலக்குகளை அமைத்து, அவற்றில் கவனம் செலுத்துங்கள்.",
    },
  },
  HI: {
    translation: {
      welcome: "CareerMate में आपका स्वागत है",
      subtitle: "आपकी व्यक्तिगत करियर यात्रा यहीं से शुरू होती है।",
      journals: "जर्नल्स",
      journalsDesc: "अपनी दैनिक करियर यात्रा लिखें और उस पर विचार करें।",
      profile: "प्रोफाइल",
      profileDesc: "अपनी प्रगति को ट्रैक करें और व्यक्तिगत विवरण प्रबंधित करें।",
      insights: "जानकारियाँ",
      insightsDesc: "समय के साथ अपनी वृद्धि और उपलब्धियाँ देखें।",
      goals: "लक्ष्य",
      goalsDesc: "करियर लक्ष्य निर्धारित करें और उन्हें हासिल करने पर ध्यान दें।",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "EN",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
