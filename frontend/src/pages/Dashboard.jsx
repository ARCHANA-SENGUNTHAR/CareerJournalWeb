import { useState, useContext } from "react";
import axios from "axios";
import { UserContext } from "../context/UserContext";

const Dashboard = () => {
  const { user } = useContext(UserContext);
  const [form, setForm] = useState({ title: "", content: "" });
  const [file, setFile] = useState(null);

  const handlePost = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("title", form.title);
    data.append("content", form.content);
    data.append("userId", user._id);
    if (file) data.append("file", file);

    try {
      await axios.post("http://localhost:5000/api/journals/create", data);
      alert("Journal Posted!");
      setForm({ title: "", content: "" });
      setFile(null);
    } catch (err) {
      console.error("Error posting journal:", err);
    }
  };

return (
    <div className="journal-form">
      <h2>Create Journal</h2>
      <form onSubmit={handlePost} encType="multipart/form-data">
        <input
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
        <textarea
          placeholder="Write your update..."
          value={form.content}
          onChange={(e) => setForm({ ...form, content: e.target.value })}
        ></textarea>
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        <button type="submit">Post</button>
      </form>
    </div>
  );
};

export default Dashboard;
