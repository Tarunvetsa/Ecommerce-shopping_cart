import React, { useEffect, useState } from "react";
import "./Welcome.css"; // Include the CSS for the animation

const Welcome = () => {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    // Hide the welcome text after 5 seconds
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const welcomeText = "Welcome";

  return (
    <div className={`welcome-container ${showWelcome ? "active" : ""}`}>
      {showWelcome && (
        <div className="welcome-text">
          {welcomeText.split("").map((letter, index) => (
            <span key={index} className={`letter-${index}`}>
              {letter}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default Welcome;
