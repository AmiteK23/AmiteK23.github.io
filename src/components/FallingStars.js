import React, { useEffect, useState } from "react";

const FallingStars = () => {
  const [stars, setStars] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const generateStars = () => {
      const starElements = [];
      for (let i = 0; i < 50; i++) {
        const left = Math.random() * window.innerWidth;
        const top = Math.random() * window.innerHeight;
        const size = Math.random() * 2 + 1; // Varying size
        const delay = Math.random() * 5; // Random delay
        const duration = Math.random() * 3 + 2; // Random speed

        starElements.push(
          <div
            key={i}
            className="falling-star"
            style={{
              left: `${left}px`,
              top: `${top}px`,
              width: `${size}px`,
              height: `${size * 50}px`,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
            }}
          ></div>
        );
      }
      setStars(starElements);
    };

    generateStars();

    // Track mouse movement
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="falling-stars"
      style={{
        transform: `translate(${mousePosition.x * 20}px, ${
          mousePosition.y * 20
        }px)`, // Apply parallax effect
      }}
    >
      {stars}
    </div>
  );
};

export default FallingStars;
