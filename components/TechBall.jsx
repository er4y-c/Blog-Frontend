import React from "react";
import {
  Decal,
  Float,
  useTexture,
} from "@react-three/drei";

const TechBall = ({ icon }) => {
    const [decal] = useTexture([icon]);
  
    return (
      <Float speed={1.75} rotationIntensity={1.25} floatIntensity={2}>
        <ambientLight intensity={0.25} />
        <directionalLight position={[0, 0, 0.05]} />
        <mesh castShadow receiveShadow scale={2.75}>
          <sphereGeometry args={[1, 32]} />
          <meshStandardMaterial
            color='#fff8eb'
            polygonOffset
            polygonOffsetFactor={-5}
          />
          <Decal
            position={[0, 0, 1]}
            rotation={[2 * Math.PI, 0, 6.25]}
            scale={1}
            map={decal}
          />
          <Decal
            position={[0, 0, -1]}
            rotation={[2 * Math.PI, 0, 6.25]}
            scale={1}
            map={decal}
          />
        </mesh>
      </Float>
    );
  };

export default TechBall;
