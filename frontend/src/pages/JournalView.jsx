// frontend/src/pages/JournalView.jsx
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./JournalView.css";

const JournalView = () => {
  const { id } = useParams();
  const [journal, setJournal] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJournal = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/journals/${id}`);
        setJournal(res.data);
      } catch (err) {
        console.error("Error fetching journal:", err);
      }
    };
    if (id) fetchJournal();
  }, [id]);

  if (!journal) return <div className="journal-view-loading">Loading...</div>;

  return (
    <div className="journal-view-page">
      <div className="view-header">
        <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>
        <small className="view-date">Posted: {new Date(journal.createdAt).toLocaleString()}</small>
      </div>

      <h1 className="view-title">{journal.title}</h1>

      <div className="view-content" dangerouslySetInnerHTML={{ __html: journal.content }} />

      {journal.media && (
        <div className="view-media">
          {journal.media.match(/\.(jpg|jpeg|png|gif)$/i) ? (
            <img src={`http://localhost:5000/uploads/${journal.media}`} alt="attachment" />
          ) : journal.media.match(/\.(mp4|mov)$/i) ? (
            <video controls>
              <source src={`http://localhost:5000/uploads/${journal.media}`} />
            </video>
          ) : (
            <a href={`http://localhost:5000/uploads/${journal.media}`} target="_blank" rel="noreferrer">Open Attachment</a>
          )}
        </div>
      )}
    </div>
  );
};

export default JournalView;
