import { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import "./FlipCard.css"; // Add flip-card specific CSS here

const FlipCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = () => setIsFlipped(!isFlipped);

  return (
    <div className="flip-card-container">
      <div className={`flip-card-inner ${isFlipped ? "flipped" : ""}`}>
        {/* Front - Login */}
        <div className="flip-card-front">
          <Login onToggleForm={toggleFlip} />
        </div>

        {/* Back - Register */}
        <div className="flip-card-back">
          <Register onToggleForm={toggleFlip} />
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
