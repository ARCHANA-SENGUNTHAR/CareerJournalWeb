// ✅ REPLACE your current Dashboard.jsx with THIS

import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import axios from "axios";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import "./Dashboard.css";

const Dashboard = () => {
  const { user } = useContext(UserContext);
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const editor = useEditor({
    extensions: [StarterKit, Link, Image],
    content: "",
  });

  const handlePost = async (e) => {
    e.preventDefault();
    if (!editor) return;

    const content = editor.getHTML();
    const data = new FormData();
    data.append("title", title);
    data.append("content", content);
    data.append("userId", user._id);
    if (file) data.append("file", file);

    try {
      setLoading(true);
      const res = await axios.post("http://localhost:5000/api/journals/create", data);
      alert("✅ Journal posted successfully!");

      setTitle("");
      editor.commands.setContent("");
      setFile(null);
    } catch (err) {
      if (err.response?.status === 400) {
        alert(`⚠️ ${err.response.data.error}`);
      } else {
        alert("❌ Error posting journal.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="journal-form">
      <h2>Create Journal</h2>
      <form onSubmit={handlePost}>
        <input placeholder="Journal Title" value={title} onChange={(e) => setTitle(e.target.value)} />

        <div className="editor-toolbar">
          <button type="button" onClick={() => editor.chain().focus().toggleBold().run()}>Bold</button>
          <button type="button" onClick={() => editor.chain().focus().toggleItalic().run()}>Italic</button>
          <button type="button" onClick={() => editor.chain().focus().toggleStrike().run()}>Strike</button>
          <button type="button" onClick={() => editor.chain().focus().toggleBulletList().run()}>• List</button>
          <button type="button" onClick={() => editor.chain().focus().toggleOrderedList().run()}>1. List</button>
        </div>

        <EditorContent editor={editor} className="tiptap-editor" />
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />

        <button type="submit" disabled={loading}>
          {loading ? "Checking AI & Posting..." : "Post Journal"}
        </button>
      </form>
    </div>
  );
};

export default Dashboard;
