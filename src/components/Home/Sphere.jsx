/* eslint-disable react/no-unknown-property */
import { ContactShadows, MeshDistortMaterial } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
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

  const [{ wobble, coat, color, ambient, env, color1 }] = useSpring(
    {
      wobble: down ? 1.2 : hovered ? 1.05 : 1,
      coat: mode && !hovered ? 0.04 : 1,
      ambient: mode && !hovered ? 1.5 : 0.5,
      env: mode && !hovered ? 0.4 : 1,
      color: hovered ? "#E8B059" : mode ? "#202020" : "white",
      color1: hovered ? "#8B0000" : mode ? "#202020" : "white",
      config: (n) =>
        n === "wobble" && hovered && { mass: 2, tension: 1000, friction: 10 },
    },
    [mode, hovered, down]
  );
  const talhaElement = document.querySelector(".talha");
  function setBg() {
    talhaElement.style.background = mode ? "#f0f0f0" : "#212121";
    talhaElement.style.color = mode ? "#212121" : "#f0f0f0";
  }

  const heartShape = new THREE.Shape();

  heartShape.moveTo(25, 25);
  heartShape.bezierCurveTo(25, 25, 20, 0, 0, 0);
  heartShape.bezierCurveTo(-30, 0, -30, 35, -30, 35);
  heartShape.bezierCurveTo(-30, 55, -10, 77, 25, 95);
  heartShape.bezierCurveTo(60, 77, 80, 55, 80, 35);
  heartShape.bezierCurveTo(80, 35, 80, 0, 50, 0);
  heartShape.bezierCurveTo(35, 0, 25, 25, 25, 25);

  const extrudeSettings = {
    depth: 8,
    bevelEnabled: true,
    bevelSegments: 2,
    steps: 2,
    bevelSize: 1,
    bevelThickness: 1,
  };

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
          setBg();
        }}
      >
        <torusGeometry args={[1, 0.37, 12, 48]} />

        <AnimatedMaterial
          color={color}
          envMapIntensity={env}
          clearcoat={coat}
          clearcoatRoughness={0}
          metalness={0.1}
        />
      </a.mesh>
      {mode ? (
        <>
          <mesh scale={0.05} position={[0.3, 0.3, 0]}>
            <sphereGeometry args={[1, 64, 64]} />
            <meshStandardMaterial />
          </mesh>
          <mesh scale={0.05} position={[-0.3, 0.3, 0]}>
            <sphereGeometry args={[1, 64, 64]} />
            <meshStandardMaterial />
          </mesh>
          <mesh scale={0.1} position={[0, 0.08, 0]}>
            <sphereGeometry args={[1, 64, 64]} />
            <AnimatedMaterial
              color={color1}
              envMapIntensity={env}
              clearcoat={coat}
              clearcoatRoughness={0}
              metalness={0.1}
              roughness={0}
            />
          </mesh>
          <a.mesh
            castShadow
            receiveShadow
            scale={0.01}
            rotation={[0, 0, -3.5]}
            position={[1.4, 1.6, 0]}
          >
            <extrudeGeometry args={[heartShape, extrudeSettings]} />

            <AnimatedMaterial
              color={"#000000"}
              envMapIntensity={env}
              clearcoat={coat}
              clearcoatRoughness={0}
              metalness={0.1}
              roughness={0}
              // wireframe
            />
          </a.mesh>
          <a.mesh
            castShadow
            receiveShadow
            scale={0.01}
            rotation={[0, 0, 3.6]}
            position={[-1, 1.8, 0]}
          >
            <extrudeGeometry args={[heartShape, extrudeSettings]} />

            <AnimatedMaterial
              color={"#000000"}
              envMapIntensity={env}
              clearcoat={coat}
              clearcoatRoughness={0}
              metalness={0.1}
              roughness={0}
              // wireframe
            />
          </a.mesh>
        </>
      ) : (
        ""
      )}

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
