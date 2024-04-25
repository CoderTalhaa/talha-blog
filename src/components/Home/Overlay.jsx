import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { TypeAnimation } from "react-type-animation";

function Overlay() {
  const handleDownloadClick = () => {
    // URL to your CV file
    const cvUrl = "/talha-cv.pdf";

    // Create a temporary link element
    const link = document.createElement("a");
    link.href = cvUrl;
    link.setAttribute("download", "talha-CV.pdf"); // Set the filename for the download

    // Append the link to the body
    document.body.appendChild(link);

    // Trigger the click event on the link
    link.click();

    // Remove the link from the body after the download
    document.body.removeChild(link);
  };

  useGSAP(() => {
    gsap.from(".anim", {
      x: 200,
      ease: "power4.out",
      duration: 1,
      stagger: {
        amount: 0.3,
      },
    });
    gsap.from(".above", {
      y: -500,
      ease: "power4.out",
      duration: 3,
      stagger: {
        amount: 0.4,
        from: "end",
      },
    });
  });

  return (
    <div className="talha select-none w-full h-3/4 flex justify-center items-center lg:w-3/5 lg:h-full lg:justify-end lg:overflow-hidden ">
      <div className=" w-full h-full p-6 font-Angkor lg:p-10 lg:mt-60  ">
        <h1 className="anim text-3xl lg:text-5xl">
          <p className="anim mb-1 lg:mb-3">HI,</p>
          <p className="anim lg:pl-6 mb-1 lg:mb-3 flex justify-center items-center gap-1 lg:gap-4">
            My name is{" "}
            <span
              style={{ color: "#F4C32C" }}
              className="font-philos font-bold text-4xl lg:text-6xl flex items-center justify-center"
            >
              <p className="above">T</p>
              <p className="above">A</p>
              <p className="above">L</p>
              <p className="above">H</p>
              <p className="above">A</p>
            </span>
          </p>
          <p className="anim">I am a </p>
        </h1>
        <h3
          style={{ color: "#F4C32C" }}
          className="font-Anto text-2xl mt-5 flex justify-center items-center lg:text-4xl"
        >
          <TypeAnimation
            sequence={[
              "FrontEnd Developer",
              1000,
              "Web Designer",
              1000,
              "3D Artists",
              1000,
              "3D Modeler",
              1000,
              "AR,VR Developer",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h3>
        <h2 className="w-full font-Ubanta text-xl mt-8 lg:mt-20">
          <p>
            As a developer, I specialize in creating immersive web experiences
            using Three.js, AR, and VR technologies. I'm deeply passionate about
            crafting 3D websites. Whether it's building interactive AR
            applications or designing captivating VR environments, I'm dedicated
            to blending creativity with cutting-edge technology to create
            unforgettable online experiences.
          </p>
        </h2>
        <div className="lg:mt-3">
          <button className="btn" onClick={handleDownloadClick}>
            Download-CV
          </button>
        </div>
      </div>
    </div>
  );
}

export default Overlay;
