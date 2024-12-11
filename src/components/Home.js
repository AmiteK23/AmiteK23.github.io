import React from "react";
import { Canvas } from "@react-three/fiber";
import profileImage from "C:/Users/Amit2/Desktop/Coding/Projects/my-website/src/assets/profile_pic.jpg";

function Home() {
  return (
    <div className="home">
      <img src={profileImage} alt="Profile" className="profile-image" />
      {/* Remove unnecessary margins */}
      <Canvas style={{ height: "300px", margin: "0 auto" }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
      </Canvas>
    </div>
  );
}

export default Home;
