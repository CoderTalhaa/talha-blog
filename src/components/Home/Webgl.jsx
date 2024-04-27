/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import { Environment, OrbitControls } from "@react-three/drei";

function Webgl() {
  return (
    <>
    <div className="w-full h-2/5 relative z-10 lg:w-2/5 lg:h-full select-none">
      <Canvas shadows camera={{ position: [0, 0, 8], fov: 35 }} dpr={[1, 2]}>
        <color attach="background" args={["#313131"]} />
        {/* <OrbitControls /> */}
        <Environment preset="warehouse" />
        <Experience />
        {/* <axesHelper scale={3} /> */}
      </Canvas>
    </div>
    </>
  );
}

export default Webgl;
