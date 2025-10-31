import { Link, useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import "./Navbar.css";
import logo from "../assets/logo.png";
import { FaMoon, FaSun, FaGlobe } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { user, setUser } = useContext(UserContext);
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();
  const { i18n } = useTranslation();

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  const handleLogout = () => {
    setUser(null);
    navigate("/");
  };

  const handleLanguageChange = (e) => {
    const lang = e.target.value;
    i18n.changeLanguage(lang);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="CareerMate Logo" className="logo-img" />
        <span>CareerMate</span>
      </div>

      <div className="nav-center">
        <div className="language-selector">
          <FaGlobe />
          <select onChange={handleLanguageChange} defaultValue="EN">
            <option value="EN">EN</option>
            <option value="TA">TA</option>
            <option value="HI">HI</option>
          </select>
        </div>

        <button className="theme-btn" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>

      <div className="nav-links">
  <Link to="/" className="btn home">Home</Link>
  {user ? (
    <>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/profile">Profile</Link>
      <button onClick={handleLogout} className="logout-btn">
        Logout
      </button>
    </>
  ) : (
    <>
      <Link to="/login" className="btn login">Login</Link>
      <Link to="/register" className="btn register">Register</Link>
    </>
  )}
</div>

    </nav>
  );
};

export default Navbar;
