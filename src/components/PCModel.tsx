import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, RoundedBox, Text } from "@react-three/drei";

const PCModel = () => {
  return (
    <Canvas style={{ height: 300 }}>
      <ambientLight intensity={0.4} />
      <directionalLight position={[2, 3, 4]} intensity={1} />
      <RoundedBox args={[3, 2, 0.2]} radius={0.1} smoothness={4}>
        <meshStandardMaterial color="#1e1e1e" />
      </RoundedBox>
      <Text position={[0, 0, 0.15]} fontSize={0.2} color="white">
        Akil.dev
      </Text>
      <OrbitControls enableZoom={false} autoRotate />
    </Canvas>
  );
};

export default PCModel;
