import { useState, useContext } from "react";
import axios from "axios";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { Link } from "react-router-dom";
const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:5000/api/auth/login", form);
    alert(`Welcome ${res.data.user.name}`);
    setUser(res.data.user);
    navigate("/dashboard");
  };

  return (
    <div className="login-card">
      {/* Left side – the form */}
      <div className="login-left">
        <h1>LOGIN</h1>
        <p>Welcome back! Please sign in.</p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            required
            onChange={(e) => setForm({ ...form, email: e.target.value })} />
          <input
            type="password"
            placeholder="Password"
            required
            onChange={(e) => setForm({ ...form, password: e.target.value })} />
          <button type="submit">Login Now</button>
        </form>
        <p style={{ cursor: "pointer", marginTop: "1rem" }}>
          Don't have an account? {" "}
          <Link to="/register" style={{color:"#edeef3", textDecoration:"none"}}>Register</Link>
        </p>
      </div>

      {/* Right side – mp4 animation */}
      <div className="login-right">
        <video
          autoPlay
          loop
          muted
          controls={false}
          disablePictureInPicture
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        >
          <source src="/video/loginani.mp4" type="video/mp4" />
        </video>




      </div>
    </div>
  );
}

export default Login;
