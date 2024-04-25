import Stairs from "../Transitions/Stairs";
import Lottie from "lottie-react";
import animation from "/src/assets/animation.json";
import picture from "/src/assets/talha.jpg";


function About() {
  return (
    <Stairs>
      <div className="w-full h-full flex flex-col mt-24 items-center justify-center">
        <div className="avatar">
          <div className="w-40 rounded">
            <img src={picture} />
          </div>
        </div>
        <h1 className="mt-6 text-3xl uppercase tracking-tighter font-philos">
          unfortunately no about 💀{" "}
        </h1>
        <Lottie animationData={animation} className="lg:h-[500px]" />
      </div>
    </Stairs>
  );
}

export default About;
