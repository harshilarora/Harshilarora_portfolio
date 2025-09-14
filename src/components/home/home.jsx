"use client";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect.jsx";
import { ShootingStars } from "../ui/shooting-stars";
import { StarsBackground } from "../ui/stars-background";
import React from "react";
import { motion } from "framer-motion";
import vmfImage from "../../assets/Images/vmf.png";
import design1 from "../../assets/Images/design1.png";
import design2 from "../../assets/Images/design1.png";
import prototypeImage from "../../assets/Images/prototype.jpg";
import { Link, NavLink } from "react-router-dom";
import { BackgroundGradient } from "../ui/background-gradient";
import { IconAppWindow } from "@tabler/icons-react";
import ScrollToTop from "../ui/ScrollToTop.jsx";
import Final1 from '../../assets/Images/Final1.jpg';
import RhinoIcon from "../ui/RhinoIcon";

import BackToTopButton from "../ui/BackToTopButton";


// icons
import { TiHtml5 } from "react-icons/ti";
import { PiFileCssLight } from "react-icons/pi";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si"; 
import { TbBrandReactNative } from "react-icons/tb"; 
import { IoLogoFirebase } from "react-icons/io5"; 
import ProtopieIcon from "../ui/ProtopieIcon";


export default function Home() {
  const words = [
    {
      text: "Delivering ",
      className: 'text-white mr-1 font-Bold '
    },
    {
      text: "the ",
      className: 'text-white mr-1 '
      

    },
    {
      text: "best ",
      className: 'text-white mr-1 '
      

    },
    {
      text: "in ",
      className: 'text-white mr-1 '
      

    },
    {
      text: "Design and Code.",
      className: "bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent",
    },
  ];
  const projects = [
    {
      title: "VMF Micro-site",
      description:
        "VMF Micro-site is a collaborative HTML/CSS project that highlights the Vancouver Mural Festival’s offerings, featured artists, and community events. Designed to be visually engaging and informative, it brings the festival experience online with a strong focus on accessibility and creative expression.",
      image: vmfImage,
      technologies: [<TiHtml5 key="html" />, <PiFileCssLight key="css" />],
      caseStudyLink: "pages/VMF", 
    },
    {
      title: "PetMe mobile App",
      description:
        "PetMe is a React Native app designed to simplify pet care through intuitive features like pet profiles, walk tracking, health stats, vet locator, and medication reminders. Built with Firebase for security and data handling, RESTful API's and local device integrations (geolocation, notifications), it helps pet owners stay organized and proactive.",
      image: prototypeImage,
      technologies: [<TbBrandReactNative key="react-native" />, <IoLogoFirebase key="firebase" />],
      caseStudyLink: "pages/PetMe",
    },
    {
      title: "SenioWell app UX/UI",
      description: "SenioWell was developed as a high-fidelity prototype in Protopie, with a primary focus on UI design. The interface was guided by Nielsen Norman Group’s usability heuristics, ensuring clarity, simplicity, and accessibility for senior users navigating exercise recommendations.",
      image: design2, 
      technologies: [<ProtopieIcon key="protopie" />],
      caseStudyLink: "pages/seniowell", 
    },
    {
      title: "Rhino 3d: Suclpture Pavilion model",
      description: "A flower-inspired sculpture gallery designed for Holland Park, Surrey, featuring two walkable levels that house three sculptures. The pavilion combines concrete, wood, and glass in an organic form that serves as both exhibition space and architectural landmark. Developed using Rhino 3D and Grasshopper, the design creates an immersive cultural experience while maintaining harmony with the surrounding parkland.",
      image: Final1, 
      technologies: [<RhinoIcon key="Rhino" />],
      caseStudyLink: "pages/model_Pavillion", 
    },

    
  ];

  return (
    <>
      {/* === INTRODUCTION SECTION === */}
      <section className="h-screen bg-gray-950 text-white flex items-center justify-center">
        <div className=" w-full max-w-6xl px-8">
          
          <TypewriterEffectSmooth words={words} className="text-md" />
          <ShootingStars />
          <StarsBackground />

          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="w-full md:w-2/3 justify-center "
          >
            
            <p className=" text-xl text-gray-400">
            Front-end web designer with a knack for blending functionality and aesthetics.
            I specialize in building seamless websites and applications, while bringing concepts to life through 
            3D modeling and interactive design.
            </p>
          </motion.div>
         

        </div>
      </section>


    
      {/* --- */}

      <section className="h-screen bg-gray-950 text-white flex justify-center">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 w-full max-w-6xl px-8">
          <div>
          
          <div>
          <h1 className="text-4xl md:text-5xl font-medium my-8">My Story.</h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="w-full  flex flex-col justify-center md:text-left"
          >
            
            <p className="text-xl font-montserrat leading-8 text-gray-400 w-3/4">
            My academic journey at Simon Fraser University began in Computer Science, providing me with technical skills and coding proficiency. Seeking a more creative and user-centric approach, I transitioned to the School of Interactive Arts + Technology (SIAT), graduating with Bsc in December 2025. I focus on crafting intuitive digital experiences by translating user needs into functional web interfaces and interactive UX designs.
            <br/>
            <br/>
            My expertise spans front-end web development, UX/UI design principles, and 3Ddesign within the interactive media discourse community. I work with HTML, CSS,JavaScript, Tailwind, React, and React Native, complemented by Adobe Illustrator and3D modeling software including Maya and Rhino 3D. My process encompasses user research, wireframing, prototyping, and iterative testing to ensure user-backed decisions. My development approach emphasizes responsive, high-performance solutions through scalable, component-based design systems. This multidisciplinary foundation enables me to deliver digital products that are both visually engaging andfunctionally robust.
            </p>
          </motion.div>
          </div>
          {/* <div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-2/5 flex flex-col items-center justify-center p-6" // Center content within this div
          >
            <h2 className="text-4xl font-semibold mb-6 text-green-400 text-center md:text-left">My Visuals.</h2>
            <img
              src="https://placehold.co/600x400/333333/FFFFFF?text=My+Skills+Image"
              alt="Placeholder for My Skills or Projects"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
              // Fallback for image loading errors
              onError={(e) => {
                e.target.onerror = null; // Prevents infinite loop if fallback also fails
                e.target.src = "https://placehold.co/600x400/FF0000/FFFFFF?text=Image+Load+Error";
              }}
            />
          </motion.div>
          </div> */}

        </div>
      </section>
      
      

      

      {/* --- */}

      {/* === PROJECTS SECTION === */}
      <section id="projects" className="bg-gray-950 text-white pb-16 pt-2">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-left mb-10"
        >
          <h1 className="text-4xl md:text-5xl font-medium my-12 ml-56">My Projects</h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="grid grid-cols-1 gap-12 max-w-6xl w-full mx-auto px-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index} 
              className="relative grid grid-cols-1 md:grid-cols-2  rounded-lg bg-slate-800 backdrop-blur-md overflow-hidden shadow-lg"
              
              whileHover={{
                boxShadow: "0 15px 25px rgba(0, 0, 0, 0.6)",
                borderColor: "#fb923c",
              }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
             
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-15"
                style={{
                  backgroundColor: "rgb(130, 201, 94)", 
                  filter: "blur(100px)", 
                  zIndex: -1, 
                }}
              ></div>

              {/* Project Details  */}
              <div className="flex flex-col p-6 order-2 md:order-1 relative z-10">
                <h3 className="text-3xl font-semibold mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-md mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Technologies Used */}
                <div className="flex flex-wrap gap-4 mt-6">
                  <span className="text-gray-300 text-lg font-semibold">Technologies:</span>
                  {project.technologies && project.technologies.map((IconComponent, i) => (
                    <span key={IconComponent.key || i} className="text-4xl text-gray-300 hover:text-purple-400 transition duration-300">
                      {IconComponent}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Image and Button*/}
              <div className="order-1 md:order-2 p-4 flex flex-col items-center justify-center relative z-10">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-72 object-cover rounded-lg shadow-md mb-4"
                />
                {/* View Case Study Button - now placed under the image */}
                {project.caseStudyLink && (
                  <NavLink to={`/${project.caseStudyLink}`}
                   className="self-center border border-white rounded-full hover:bg-slate-700 text-white font-grotesk font-normal py-2 px-6 transition duration-300 ease-in-out"
                  >
                    View Case Study
                  </NavLink>
                  
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
        <BackToTopButton />
          <ScrollToTop />
        
      </section>
    </>
  );
}

      {/* <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl w-full"
      >
        {[1, 2, 3, 4, 5, 6].map((index) => (
          <div
            key={index}
            className="rounded-2xl overflow-hidden bg-gray-900 shadow-lg hover:scale-105 transform transition duration-300"
          >
            <img
              src={`https://via.placeholder.com/400x300?text=Project+${index}`}
              alt={`Project ${index}`}
              className="w-full h-60 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">Project Title {index}</h3>
              <p className="text-gray-400 text-sm mt-2">
                Brief description of the project. Showcase your creativity and design expertise.
              </p>
            </div>
          </div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="mt-12 text-center"
      >
        <button className="text-lg px-8 py-4 bg-white text-black rounded-2xl shadow-md hover:bg-gray-200 transition">
  Contact Me
</button>
      </motion.div> */}
    

