import React from "react";
import { Canvas } from "@react-three/fiber";
import profileImage from "C:/Users/Amit2/Desktop/Coding/Projects/my-website/src/assets/profile_pic.jpg";

function Home() {
  return (
    <div className="home">
      <img src={profileImage} alt="Profile" className="profile-image" />
      <Canvas style={{ height: "300px", marginTop: "-10px" }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        {/* Remove the Box component */}
      </Canvas>
    </div>
  );
}

export default Home;
