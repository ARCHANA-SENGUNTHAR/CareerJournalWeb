import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import axios from "axios";
import "./Dashboard.css";

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
        />
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />

        {/* AI Checker block inside form */}
        <div className="ai-check">
          <h4>AI Content Checker</h4>
          <div className="ai-embed">
            <gradio-app src="https://archanagurusamy14-ai-text-detection.hf.space"></gradio-app>
          </div>
          <p>⚠️ Please check your content using the embedded AI detector before posting.</p>
        </div>

        <button type="submit">Post</button>
      </form>
    </div>
  );
};

export default Dashboard;
