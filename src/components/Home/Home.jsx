import Stairs from "../Transitions/Stairs";
import Webgl from "./Webgl";
import Overlay from "./Overlay";

function Home() {
  return (
    <div className="w-full h-screen flex justify-between items-center flex-col lg:flex-row-reverse ">
        <Webgl />
        <Overlay />
      </div>
    //     <Stairs>
    // </Stairs>
  );
}

export default Home;
