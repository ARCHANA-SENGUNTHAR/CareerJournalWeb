import { useState } from "react";
import axios from "axios";
import "./Register.css";

const Register = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:5000/api/auth/register", form);
    alert(res.data.msg);
  };

  return (
    <div className="register-container">
      <h2>Join CareerMate</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Full Name" required onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <input type="email" placeholder="Email" required onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <input type="password" placeholder="Password" required onChange={(e) => setForm({ ...form, password: e.target.value })} />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;