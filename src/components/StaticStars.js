import React, { useEffect, useState } from "react";

const StaticStars = ({ disabled }) => {
  const [dots, setDots] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const generateDots = () => {
      const dotElements = [];
      for (let i = 0; i < 200; i++) {
        const left = Math.random() * window.innerWidth;
        const top = Math.random() * window.innerHeight;
        dotElements.push(
          <div
            key={i}
            className="star"
            style={{
              left: `${left}px`,
              top: `${top}px`,
            }}
          ></div>
        );
      }
      setDots(dotElements);
    };

    generateDots();

    const handleMouseMove = (e) => {
      if (!disabled) {
        setMousePosition({
          x: (e.clientX / window.innerWidth) * 2 - 1, // Normalize to [-1, 1]
          y: (e.clientY / window.innerHeight) * 2 - 1,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [disabled]);

  return (
    <div
      className="static-stars"
      style={{
        transform: `translate(${mousePosition.x * 30}px, ${
          mousePosition.y * 30
        }px)`, // Amplify movement by increasing multiplier
      }}
    >
      {dots}
    </div>
  );
};

export default StaticStars;
