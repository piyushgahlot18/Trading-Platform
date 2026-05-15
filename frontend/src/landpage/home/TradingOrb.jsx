import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";

function TradingSurface() {
  const mesh = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    const position = mesh.current.geometry.attributes.position;

    for (let i = 0; i < position.count; i++) {
      const x = position.getX(i);
      const y = position.getY(i);

      // base wave
      let z = Math.sin(x * 2 + time) * 0.15;

      // when hovered → sharper "chart" movement
      if (hovered) {
        z += Math.sin(x * 8 + time * 3) * 0.25;
      }

      position.setZ(i, z);
    }

    position.needsUpdate = true;
  });

  return (
    <mesh
      ref={mesh}
      rotation={[-Math.PI / 2.5, 0, 0]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* Wide surface */}
      <planeGeometry args={[12, 3, 200, 50]} />

      <meshStandardMaterial
        color="#6d28d9"
        emissive="#7c3aed"
        emissiveIntensity={1.5}
        metalness={0.8}
        roughness={0.2}
        wireframe={hovered} // chart look on hover
      />
    </mesh>
  );
}

export default function TradingSurfaceScene() {
  return (
    <div style={{ width: "100%", height: "500px" }}>
      <Canvas camera={{ position: [0, 2, 4] }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} />

        <TradingSurface />
      </Canvas>
    </div>
  );
}