// Home.jsx
import { Link } from "react-router-dom";
import "./Home.css"; // optional, for styling

export default function Home() {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to CareerMate</h1>
        <p>Your journey to the perfect career starts here!</p>

      </header>

      <section className="home-features">
        <h2>Why CareerMate?</h2>
        <ul>
          <li>Track your career goals</li>
          <li>Get personalized guidance</li>
          <li>Connect with mentors</li>
          <li>Build your skillset efficiently</li>
        </ul>
      </section>
    </div>
  );
}
