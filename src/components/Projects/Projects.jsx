import Stairs from '../Transitions/Stairs'
import Card from './Card'
import {laptop, game , ar , hub, talhaPort, Aframe, meteor,pirate, witch} from "/src/assets/images/inde.js"

function Projects() {
  const projects = [
    {
      image: talhaPort,
      title: "Personal Portfolio",
      skill: ["THREEJS", " R3F"],
      des: "Personal portfolio to showcase my skills",
      link: "https://talha-portfolio-three.vercel.app/",
    },
    {
      image: meteor,
      title: "Meteor Shaders",
      skill: ["THREEJS", " R3F", "GLSL"],
      des: "Diving into the world of shaders with the help of NodeToy",
      link: "https://rtf-meteor.vercel.app/",
    },
    {
      image: witch,
      title: "Witch-Hut annotations",
      skill: ["THREEJS", " R3F", ],
      des: "Experience the 3D world with some camera and animation",
      link: "https://r3f-witch-hut.vercel.app/",
    },
    {
      image: pirate,
      title: "NFT Pirates",
      skill: ["THREEJS", " R3F", "Config"],
      des: "Customise pirates NFT's showplace",
      link: "https://r3f-pirate.vercel.app/",
    },
    {
      image: laptop,
      title: "3D LAPTOP",
      skill: ["THREEJS", " R3F"],
      des: "A 3D laptop from the course of burno-simon",
      link: "https://r3f-laptop-pi.vercel.app/",
    },
    {
      image: Aframe,
      title: "Aframe",
      skill: ["Aframe"],
      des: "An vr vitual experience for users to meet",
      link: "https://aframe-art-gallery-production.up.railway.app/",
    },
    {
      image: ar,
      title: "AR GALLARY",
      skill: ["THREEJS", " AR", "AFRAME"],
      des: "An Ar gallary where you can place items in your virtual reality",
      link: "https://ar-hub.netlify.app/",
    },
    {
      image: game,
      title: "3D GAME",
      skill: ["THREEJS", " R3F"],
      des: "A web game on the browser, A small demo to demonstrate threejs",
      link: "https://talha-hub.netlify.app/",
    },
    {
      image: hub,
      title: "PORTFOLIO",
      skill: ["THREEJS", " R3F"],
      des: "My first portfolio build with threejs and blender, with some gsap animations",
      link: "https://talha-hub.netlify.app/",
    },
   
  
  ]
  return (
    <Stairs>
      <div className=' w-full h-full mt-3 '>
        <ul className='w-full flex items-center justify-center flex-wrap lg:gap-6'>
          {
            projects.map((item,i)=> {
              return(
                <Card item={item} key={i} />
              )
            })
          }
          </ul>
      </div>
    </Stairs>
  )
}

export default Projects
