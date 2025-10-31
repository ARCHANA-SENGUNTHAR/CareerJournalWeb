import "./Home.css";
import { useTranslation } from "react-i18next";
import { FaBookOpen, FaUser, FaLightbulb, FaBullseye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { t } = useTranslation();
  const navigate = useNavigate(); // ✅ Initialize navigate here

  // ✅ Define the function to handle button click
  const handleStartJourney = () => {
    navigate("/register");
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section">
        <h2 className="home-title">{t("welcome")}</h2>
        <p className="home-subtitle">{t("subtitle")}</p>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="features">
          <div className="feature-card">
            <FaBookOpen className="feature-icon" />
            <h3>{t("journals")}</h3>
            <p>{t("journalsDesc")}</p>
          </div>
          <div className="feature-card">
            <FaUser className="feature-icon" />
            <h3>{t("profile")}</h3>
            <p>{t("profileDesc")}</p>
          </div>
          <div className="feature-card">
            <FaLightbulb className="feature-icon" />
            <h3>{t("insights")}</h3>
            <p>{t("insightsDesc")}</p>
          </div>
          <div className="feature-card">
            <FaBullseye className="feature-icon" />
            <h3>{t("goals")}</h3>
            <p>{t("goalsDesc")}</p>
          </div>
        </div>
      </section>

      {/* NEW Empower Section */}
      <section className="empower-section">
        <div className="empower-content">
          <div className="empower-text">
            <h2>Empowering Careers, One Journal at a Time ✨</h2>
            <p>
              CareerMate helps you take charge of your professional journey by
              combining reflection, planning, and growth tracking — all in one
              powerful journaling platform. Whether you’re a student, a
              professional, or an explorer, your story deserves a space to
              evolve with you.
            </p>
            <p>
              🌟 Join thousands who are transforming their careers through
              mindful journaling, data-backed insights, and a supportive
              community that celebrates every step.
            </p>
            {/* ✅ Added onClick event */}
            <button className="learn-btn" onClick={handleStartJourney}>
              Start Your Journey →
            </button>
          </div>

          <div className="empower-image">
            <img
              src="https://cdn-icons-png.flaticon.com/512/6195/6195699.png"
              alt="Career Growth Illustration"
            />
          </div>
        </div>
      </section>

      {/* Ticker Banner */}
      <section className="ticker-section">
        <div className="ticker-wrapper">
          <div className="ticker">
            <div className="ticker-content">
              <span>✨ Stay consistent with your career journaling goals!</span>
              <span>🚀 Track your daily progress and achieve milestones!</span>
              <span>🌱 Reflect, grow, and keep learning every day!</span>
              <span>💡 Unlock insights from your personal growth journey!</span>
              <span>🔥 Keep your journaling streak alive — one entry at a time!</span>
              <span>🌍 Share and inspire others with your success stories!</span>
              <span>🧠 Write. Reflect. Evolve. Your journey matters!</span>
              <span>💫 Small steps daily lead to big achievements tomorrow!</span>
            </div>

            {/* Duplicate content for seamless looping */}
            <div className="ticker-content">
              <span>✨ Stay consistent with your career journaling goals!</span>
              <span>🚀 Track your daily progress and achieve milestones!</span>
              <span>🌱 Reflect, grow, and keep learning every day!</span>
              <span>💡 Unlock insights from your personal growth journey!</span>
              <span>🔥 Keep your journaling streak alive — one entry at a time!</span>
              <span>🌍 Share and inspire others with your success stories!</span>
              <span>🧠 Write. Reflect. Evolve. Your journey matters!</span>
              <span>💫 Small steps daily lead to big achievements tomorrow!</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
