import { useState } from "react";
import axios from "axios";
import "./Login.css";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:5000/api/auth/login", form);
    alert(`Welcome ${res.data.user.name}`);
  };

  return (
    <div className="login-container">
      <h2>Welcome Back to CareerMate</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" required onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <input type="password" placeholder="Password" required onChange={(e) => setForm({ ...form, password: e.target.value })} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
