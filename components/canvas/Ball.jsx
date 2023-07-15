import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Preload,
} from "@react-three/drei";

import CanvasLoader from "../Loader";
import TechBall from '../TechBall';

const Ball = ({ icon }) => {
  return (
    <Canvas
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <TechBall icon={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default Ball;
