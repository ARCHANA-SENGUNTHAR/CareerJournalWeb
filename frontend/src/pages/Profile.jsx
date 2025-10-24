// frontend/src/pages/Profile.jsx
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { UserContext } from "../context/UserContext";
import "./Profile.css";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { user } = useContext(UserContext);
  const [journals, setJournals] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJournals = async () => {
      if (!user || !user._id) return;
      try {
        const res = await axios.get(
          `http://localhost:5000/api/journals/user/${user._id}`
        );
        setJournals(res.data);
      } catch (err) {
        console.error("Error fetching journals:", err);
      }
    };
    fetchJournals();
  }, [user]);

  // convert HTML content to plain text preview
  const getPreview = (html, n = 180) => {
    const plain = html.replace(/<[^>]+>/g, ""); // strip tags
    return plain.length > n ? plain.slice(0, n).trim() + "..." : plain;
  };

  return (
    <div className="profile-page">
      <div className="profile-header">
        <div className="profile-left">
          <div className="avatar-placeholder">{user?.name?.charAt(0) || "U"}</div>
          <div>
            <h2>{user?.name}</h2>
            <p className="muted">Email: {user?.email}</p>
            <p className="muted">Total Journals: {journals.length}</p>
          </div>
        </div>
      </div>

      <section className="journals-section">
        <h3>📒 My Journals</h3>

        {journals.length === 0 && <p className="muted">No journals yet — start writing!</p>}

        <div className="journals-grid">
          {journals.map((j) => (
            <article key={j._id} className="journal-card">
              <div className="journal-card-top">
                <h4 className="journal-title">{j.title}</h4>
                {/* ai badge if available */}
                {j.aiProbability !== undefined && (
                  <span className={`ai-badge ${
                    j.aiProbability > 80 ? "badge-green" : j.aiProbability >= 50 ? "badge-yellow" : "badge-red"
                  }`}>
                    {Math.round(100 - j.aiProbability)}% Human
                  </span>
                )}
              </div>

              {/* preview (plain text) */}
              <div
                className="journal-preview"
                dangerouslySetInnerHTML={{ __html: getPreview(j.content) }}
              />

              <div className="journal-actions">
                <button
                  className="view-more-btn"
                  onClick={() => navigate(`/journal/${j._id}`)}
                >
                  View More →
                </button>
                <small className="timestamp">{new Date(j.createdAt).toLocaleString()}</small>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Profile;
