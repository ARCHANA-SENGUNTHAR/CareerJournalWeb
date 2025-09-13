// pages/Home.jsx
import "./Home.css";

const Home = () => {
  return (
   <div className="home">
  <h2 className="home-title">Welcome to CareerMate </h2>
  <p className="home-subtitle">Your personal career journal starts here.</p>

  <div className="features">
    <div className="feature-card">
      <h3>Journals</h3>
      <p>Write and reflect on your daily career journey.</p>
    </div>
    <div className="feature-card">
      <h3>Profile</h3>
      <p>Track your progress and manage your personal details.</p>
    </div>
    <div className="feature-card">
      <h3>Insights</h3>
      <p>Visualize growth and achievements over time.</p>
    </div>
    <div className="feature-card">
      <h3>Goals</h3>
      <p>Set career goals and stay focused on achieving them.</p>
    </div>
  </div>
</div>

  );
};

export default Home;
