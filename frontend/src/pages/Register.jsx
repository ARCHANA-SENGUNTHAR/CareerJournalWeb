import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Register.css";

const Register = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", form);
      alert(res.data.message); // shows "Account created successfully"
      if (res.data.success) {
        navigate("/login"); // redirect after registration
      }
    } catch (err) {
      if (err.response && err.response.data) {
        alert(err.response.data.message); // email already exists
      } else {
        alert("Something went wrong. Try again.");
      }
    }
  };

  return (
    <div className="register-card">
      {/* Left side – video */}
      <div className="register-video-container">
        <video
          autoPlay
          loop
          muted
          controls={false}
          disablePictureInPicture
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        >
          <source src="/video/registerani.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Right side – form */}
      <div className="register-form-container">
        <h1>REGISTER</h1>
        <p>Create your account!</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            required
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email"
            required
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            required
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
          <button type="submit">Register Now</button>
        </form>
        <p style={{ cursor: "pointer", marginTop: "1rem" }}>
          Already have an account?{" "}
          <Link to="/login" style={{ color: "#edeef3", textDecoration: "none" }}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
