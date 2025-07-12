// pages/Profile.jsx
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { UserContext } from "../context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);
  const [journals, setJournals] = useState([]);

  useEffect(() => {
    const fetchJournals = async () => {
      const res = await axios.get(`http://localhost:5000/api/journals/user/${user._id}`);
      setJournals(res.data);
    };
    fetchJournals();
  }, [user]);

  return (
    <div className="profile-page">
      <h2>{user.name}'s Profile</h2>
      <p>Email: {user.email}</p>
      <p>Total Journals: {journals.length}</p>

      <h3>📒 My Journals</h3>
      <ul>
        {journals.map((j) => (
          <li key={j._id}>
            <h4>{j.title}</h4>
            <p>{j.content}</p>
            {j.media && <a href={`http://localhost:5000/uploads/${j.media}`} target="_blank">View Attachment</a>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Profile;
