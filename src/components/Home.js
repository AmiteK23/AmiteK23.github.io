import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere, Box } from "@react-three/drei";
import profileImage from "../assets/profile_pic.jpg";
import "./Home.css";

function AnimatedSphere() {
  const sphereRef = useRef();

  // Add rotation and dynamic motion based on the frame count
  useFrame(({ clock, mouse }) => {
    const time = clock.getElapsedTime();
    if (sphereRef.current) {
      sphereRef.current.rotation.x = mouse.y * Math.PI;
      sphereRef.current.rotation.y = mouse.x * Math.PI;
      sphereRef.current.rotation.z = time * 0.5;
    }
  });

  return (
    <Sphere ref={sphereRef} visible args={[1.5, 100, 200]} scale={1.5}>
      <MeshDistortMaterial
        color="#4facfe"
        attach="material"
        distort={0.6}
        speed={3}
      />
    </Sphere>
  );
}

function AnimatedBox() {
  const boxRef = useRef();

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    if (boxRef.current) {
      boxRef.current.rotation.x = time * 0.3;
      boxRef.current.rotation.y = time * 0.6;
    }
  });

  return (
    <Box ref={boxRef} visible args={[1, 1, 1]} scale={[1.5, 1.5, 1.5]}>
      <meshStandardMaterial attach="material" color="#ffcc00" />
    </Box>
  );
}

function Home() {
  return (
    <div className="home" id="home">
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[3, 5, 2]} />
        <AnimatedSphere />
        <AnimatedBox />
      </Canvas>
      <img src={profileImage} alt="Profile" className="profile-image" />

      <h2>Welcome to My Portfolio</h2>
      <p>Exploring the intersections of math, science, and creativity!</p>
    </div>
  );
}

export default Home;
