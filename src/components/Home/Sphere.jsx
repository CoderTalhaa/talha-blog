import {
  ContactShadows,
  MeshDistortMaterial,
  useTexture,
} from "@react-three/drei";
import React, { useEffect, useRef, useState } from "react";
import { useSpring } from "@react-spring/core";
import { a } from "@react-spring/three";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { easing } from "maath";

const AnimatedMaterial = a(MeshDistortMaterial);

function Sphere() {
  const sphere = useRef();
  const light = useRef();
  const [mode, setMode] = useState(false);
  const [down, setDown] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    document.body.style.cursor = hovered ? "none" : "auto";
  }, [hovered]);

  useFrame((state, delta) => {
    light.current.position.x = state.mouse.x * 20;
    light.current.position.y = state.mouse.y * 20;
    easing.dampC(
      state.scene.background,
      mode ? "#202020" : "#f0f0f0",
      0.25,
      delta
    );

    if (sphere.current) {
      sphere.current.position.x = THREE.MathUtils.lerp(
        sphere.current.position.x,
        hovered ? state.mouse.x / 2 : 0,
        0.2
      );
      sphere.current.position.y = THREE.MathUtils.lerp(
        sphere.current.position.y,
        Math.sin(state.clock.elapsedTime / 1.5) / 6 +
          (hovered ? state.mouse.y / 2 : 0),
        0.2
      );
    }
  });

  const [{ wobble, coat, color, ambient, env }] = useSpring(
    {
      wobble: down ? 1.2 : hovered ? 1.05 : 1,
      coat: mode && !hovered ? 0.04 : 1,
      ambient: mode && !hovered ? 1.5 : 0.5,
      env: mode && !hovered ? 0.4 : 1,
      color: hovered ? "#E8B059" : mode ? "#202020" : "white",
      config: (n) =>
        n === "wobble" && hovered && { mass: 2, tension: 1000, friction: 10 },
    },
    [mode, hovered, down]
  );
  const talhaElement = document.querySelector('.talha');
  function setBg(){
    talhaElement.style.background = mode ? "#f0f0f0" : "#212121"
    talhaElement.style.color = mode ? "#212121" : "#f0f0f0"
  }

  return (
    <>
      <a.ambientLight intensity={ambient} />
      <a.pointLight
        ref={light}
        position-z={-15}
        intensity={env}
        color="#F8C069"
      />
      <a.mesh
        castShadow
        receiveShadow
        ref={sphere}
        scale={wobble}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onPointerDown={() => setDown(true)}
        onPointerUp={() => {
          setDown(false);
          // Toggle mode between dark and bright
          setMode(!mode);
          setBg()
         
        }}
      >
        <sphereGeometry args={[1, 64, 64]} />
        <AnimatedMaterial
          color={color}
          envMapIntensity={env}
          clearcoat={coat}
          clearcoatRoughness={0}
          metalness={0.1}
        />
      </a.mesh>

      <ContactShadows
        position={[0, -1.6, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        opacity={mode ? 0.8 : 0.4}
        scale={10}
        blur={2.5}
        far={2}
        resolution={256}
      />
    </>
  );
}

export default Sphere;
