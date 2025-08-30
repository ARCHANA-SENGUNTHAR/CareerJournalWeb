import { useEffect, useState } from "react";
import axios from "axios";

const AllJournals = ({ userId }) => {
  const [journals, setJournals] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/journals/${userId}`).then((res) => setJournals(res.data));
  }, [userId]);

  return (
    <div>
      <h2>Your Career Logs</h2>
      {journals.map((j) => (
        <div key={j._id} className="journal">
          <h3>{j.title}</h3>
          <p>{j.content}</p>
          <small>{new Date(j.createdAt).toLocaleString()}</small>
        </div>
      ))}
    </div>
  );
};

export default AllJournals;
