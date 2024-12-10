import React from "react";
import { Canvas } from "@react-three/fiber";

function Box() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="blue" />
    </mesh>
  );
}

function Home() {
  return (
    <div className="home">
      <Canvas style={{ height: "400px" }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Box />
      </Canvas>
    </div>
  );
}

export default Home;
