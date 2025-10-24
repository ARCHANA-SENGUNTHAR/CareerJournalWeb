// pages/AllJournals.jsx
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./AllJournals.css";

const AllJournals = ({ userId }) => {
  const [journals, setJournals] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/journals/user/${userId}`)
      .then((res) => setJournals(res.data))
      .catch((err) => console.error("Error fetching journals:", err));
  }, [userId]);

  // Determine badge color based on AI score
  const getBadgeClass = (score) => {
    if (score > 80) return "badge-green";
    if (score >= 50) return "badge-yellow";
    return "badge-red";
  };

  // Function to shorten content preview
  const getContentPreview = (htmlContent) => {
    const plainText = htmlContent.replace(/<[^>]+>/g, ""); // strip HTML tags
    return plainText.length > 150
      ? plainText.substring(0, 150) + "..."
      : plainText;
  };

  return (
    <div className="journal-container">
      <h2>Your Career Logs</h2>

      {journals.length === 0 && <p>No journals found yet. Start writing!</p>}

      {journals.map((j) => (
        <div key={j._id} className="journal-card">
          <div className="journal-header">
            <h3>{j.title}</h3>
            {j.aiProbability !== undefined && (
              <span className={`ai-badge ${getBadgeClass(j.aiProbability)}`}>
                {Math.round(100 - j.aiProbability)}% Human ✅
              </span>
            )}
          </div>

          <p className="journal-preview">{getContentPreview(j.content)}</p>

          <button
            className="view-more-btn"
            onClick={() => navigate(`/journal/${j._id}`)}
          >
            View Full Journal →
          </button>

          <small className="timestamp">
            {new Date(j.createdAt).toLocaleString()}
          </small>
        </div>
      ))}
    </div>
  );
};

export default AllJournals;
