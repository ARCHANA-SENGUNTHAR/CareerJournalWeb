// components/ProfileCard.jsx
import "./ProfileCard.css";

const ProfileCard = ({ user, totalJournals, aiDetectedCount }) => {
  if (!user) {
    return <div className="profile-card loading">Fetching profile...</div>;
  }

  return (
    <div className="profile-card">
      <h2>{user?.name || "User"}</h2>
      <p>{user?.email || "No Email Available"}</p>
      <p>Total Journals: <strong>{totalJournals}</strong></p>

      {/* ✅ AI Badge Section */}
      <div className="ai-badge-container">
        <span className="ai-badge">
          🤖 AI-Free Contributor
        </span>
        <p className="ai-score-text">
          AI-Manipulated Entries Detected: <strong>{aiDetectedCount}</strong>
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
