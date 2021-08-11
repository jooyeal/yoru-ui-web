import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Earth from "./Earth";
import { OrbitControls, Stars } from "@react-three/drei";
import styled from "styled-components";

const CanvasContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  opacity: 0.9;
`;

export default function ThreeEarth() {
  return (
    <Suspense fallback={<div>loading</div>}>
      <CanvasContainer>
        <Canvas camera={{ position: [3, 3, 2] }}>
          <mesh>
            <pointLight color="#f6f3ea" position={[0, 0, 0]} intensity={1.2} />
            <Stars
              radius={300}
              depth={60}
              count={20000}
              factor={7}
              saturation={0}
              fade={true}
            />
            <Earth></Earth>
          </mesh>
          <OrbitControls
            enableZoom={true}
            enablePan={true}
            enableRotate={true}
            zoomSpeed={0.6}
            panSpeed={0.5}
            rotateSpeed={0.4}
          />
        </Canvas>
      </CanvasContainer>
    </Suspense>
  );
}
