"use client";
import React from "react";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; 
import { StickyScroll  } from "../../ui/sticky-scroll-reveal.jsx";
import ScrollToTop from "../../ui/ScrollToTop.jsx";


import { ContainerScroll } from "../../ui/ContainerScroll.jsx";
import vmfImage from "../../../assets/Images/vmf.png";
import Proto1 from '../../../assets/Images/proto1.png';
import Proto2 from '../../../assets/Images/proto2.png';
import Proto3 from '../../../assets/Images/proto3.png';
import Proto4 from '../../../assets/Images/proto4.png';
import userflowImage from '../../../assets/Images/User_flow.png';
import Mockup1 from '../../../assets/Images/mockup1.png';
import parallaxImage from '../../../assets/Images/parallax.png';
import BackToTopButton from "../../ui/BackToTopButton";


import { useState, useEffect } from "react";
import { IoArrowUp } from "react-icons/io5"; 


// Import your videos - add these to your assets folder
import overviewVideo from "../../../assets/Images/overview.mov";
import recommendationsVideo from "../../../assets/Images/reccomendations.mov";

// // Add more video imports as needed
// import featureDemo1 from "../../../assets/videos/feature-demo-1.mp4";
import featureDemo1 from "../../../assets/Images/favs.mov";

// import featureDemo2 from "../../../assets/videos/feature-demo-2.mp4";



const SenioWellPortfolio = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
  };

  const VideoPlayer = ({ src, title, className = "" }) => (
    <video 
      className={`w-full h-full object-cover rounded-lg ${className}`}
      controls
      loop
      muted
      playsInline
      poster="" // Add poster image if you have thumbnails
      autoPlay
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );

  const BackToHomeButton = () => {
    return (
      <div className=" bg-gray-950 text-center mb-20 h-28">
        <Link
          to="/"
          className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full transition duration-300"
        >
          Back to Portfolio
        </Link>
      </div>
    );
  };

  
  

  return (
    <div className="bg-gray-950 antialiased text-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 ">
        
        {/* Process Analysis Section */}
        <motion.section 
          className="mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="mt-16 pb-4 text-4xl md:text-6xl font-extrabold mb-6 tracking-tight bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
          SenioWell <span className=" bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent font-normal text-2xl md:text-3xl">(Healthcare app for Senior Citizens)</span>
          </h2>
          <div className="w-full h-px bg-gradient-to-r from-purple-400 to-pink-600 mb-8"></div>
          
          {/* Title Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-400">
              Process Analysis
            </h3>
            <div className="flex gap-3">
              <span className="px-4 py-2 bg-purple-600/20 text-purple-300 rounded-full text-sm font-medium border border-purple-500/30">
                Protopie
              </span>
              <span className="px-4 py-2 bg-pink-600/20 text-pink-300 rounded-full text-sm font-medium border border-pink-500/30">
                UX/UI design
              </span>
            </div>
          </div>
        </motion.section>

        {/* Overview Section */}
        <motion.section
          className="max-w-4xl mx-auto mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Overview
          </h2>
          
          <div className="space-y-6">
            <p className="text-lg text-gray-400 leading-relaxed">
              SenioWell is not just an app; it's a catalyst for positive lifestyle changes among the elderly. By
              providing a user-friendly and engaging platform, this Protopie project aims to bridge the gap
              between technology and well-being, fostering a sense of independence and vitality among its users.
            </p>
            
            <p className="text-lg text-gray-400 leading-relaxed">
              This project emerged from IAT 334: Interface Design, where we learned to integrate Nielsen Norman Group 
              principles with proven usability heuristics. Serving as both visual illustrator and UI/UX designer, to approach this
              effectively, I focused on addressing the challenges identified through our research and interview
              processes. The goal was to design an application that not only meets the client's needs but also
              provides users with an optimal experience tailored to their requirements.
            </p>
          </div>
        </motion.section>

        {/* Main Demo Videos Grid */}
        <motion.div
          className="mb-16 px-4 md:px-8 justify-items-center grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Overview Video */}
          <figure className="text-center">
            <motion.div 
              className="w-64 h-auto flex items-center justify-center rounded-lg"
              variants={imageVariants}
            >
              <div className="w-full h-full">
                <VideoPlayer 
                  src={overviewVideo}
                  title="Overview Demo"
                  
                />
              </div>
            </motion.div>
            <figcaption className="text-sm text-gray-400 mt-3">Figure 1: App Overview Demo</figcaption>
          </figure>

          {/* Recommendations Video */}
          <figure className="text-center">
            <motion.div 
              className="w-64 h-auto flex items-center justify-center rounded-lg"
              variants={imageVariants}
            >
              <div className="w-full h-full">
                <VideoPlayer 
                  src={recommendationsVideo}
                  title="Recommendations Demo"
                  
                />
              </div>
            </motion.div>
            <figcaption className="text-sm text-gray-400 mt-3">Figure 2: Recommendations Feature</figcaption>
          </figure>
        </motion.div>

        {/* Project Details */}
        <motion.section
          className="max-w-4xl mx-auto mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >

          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Design Process 
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed mb-6">
            This project was completed over six weeks with the goal of designing a functional application
            tailored to senior citizens' healthcare needs. My focus was on creating a solution that encourages
            incorporating various exercises into daily routines while maintaining comfort and ease of use. The
            initial stages of this project included brainstorming and iterating on functionality, usability,
            and layout to ensure the application effectively addressed the identified challenges. 
            <br/>
            <br/>
            In the ideation phase, I focused on translating insights gained throgh interviews and secondary research
            into potential design directions. I brainstormed how seniors might prefer to select exercises, input their 
            ailments, and track favourites. Guided by principles from Nielsen Norman Group and Dieter Rams, 
            I prioritized clarity, simplicity, and function-driven design.
           
          </p>

          <motion.div
          className="mb-16 flex flex-col items-center max-w-5xl mx-auto mt-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <figure className="text-center">
            <motion.div 
              className="bg-white rounded-lg p-6 w-full shadow-xl border border-gray-700"
              variants={imageVariants}
            >
              <img 
                src={Mockup1} 
                alt="Ideation stage Mockups"
                className="w-full h-auto rounded-lg"
              />
            </motion.div>
            <figcaption className="text-sm text-gray-400 mt-2">Figure 3: Inital Mockups</figcaption>
          </figure>
        </motion.div>

        
          <p className="text-lg text-gray-400 leading-relaxed">
            I developed this project with the aim of creating a solution to help older users access appropriate
            exercises that can seamlessly fit into their everyday routines.  My design process began with
            crafting low-fidelity wireframes ( figure 3) to experiment with layouts and interaction patterns. 
            At this stage, the emphasis was on information hierarchy and ensuring 
            that the interface did not overwhelm users. A key part of this process was mapping out the user flow ( figure 4), how a 
            senior would move from identifying an ailment, to receiving exercise recommendations, to saving a favourite. 
            This exercise ensured the app structure supported intuitive, step-by-step engagement.
          </p>
        </motion.section>

        {/* User Flow Image */}
        <motion.div
          className="mb-16 flex flex-col items-center max-w-5xl mx-auto mt-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <figure className="text-center">
            <motion.div 
              className="bg-white rounded-lg p-6 w-full shadow-xl border border-gray-700"
              variants={imageVariants}
            >
              <img 
                src={userflowImage} 
                alt="User Flow Diagram"
                className="h-96 w-auto rounded-lg"
              />
            </motion.div>
            <figcaption className="text-sm text-gray-400 mt-2">Figure 4: User-Flow Diagram</figcaption>
          </figure>
        </motion.div>

        {/* Design Process Section */}
        <motion.section
          className="max-w-4xl mx-auto mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          High-Fidelity Prototyping & Iteration  
          </h2>
          
          <p className="text-lg text-gray-400 leading-relaxed">
          Over several weeks, I iterated on both the wireframes and user flows based on feedback and usability heuristics. 
          Each cycle of refinement helped simplify complex interactions and align the interface more closely with senior's needs. 
          For instance, text-heavy options were replaced with icon-supported categories, and touch targets were enlarged to 
          accommodate accessibility requirements.

          <br/>
          <br/>
          Once the foundations were in place, I moved into high-fidelity prototyping using Protopie. 
          I began by designing a seamless sign-up and sign-in process that enabled users to enter their 
          personal details and receive tailored exercise recommendations based on their health conditions. 
          From there, I focused on the main landing page, bringing the app to life with interactive flows, 
          realistic transitions, and functional prototypes. These showcased the core features—ailment-based 
          recommendations, category browsing, and the ability to save favourites. The real challenge was not simply 
          replicating static screens, but creating an experience that demonstrated how the app would truly feel for 
          an elderly user navigating it.
          </p>

          <figure className="text-center justify-items-center mt-12">
              <motion.div 
                className="w-64 h-auto flex items-center justify-center rounded-lg"
                variants={imageVariants}
              >
                <div className="w-full h-full ">
                  <VideoPlayer 
                    src={featureDemo1}
                    title="Exercise Feature Demo"   
                  />
                </div>
              </motion.div>
              <figcaption className="text-sm text-gray-400 mt-3 text-start">Figure 5: Exercise Tracking Feature</figcaption>
            </figure>
            
        </motion.section>

        {/* Additional Feature Videos Section */}
        
        <motion.section
          className="max-w-4xl mx-auto mb-16 "
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">
          Challenges and Solution
          </h2>

          <p className="text-lg text-gray-400 leading-relaxed">
          One of the primary challenges was ensuring that the interface is involved developing a
          way for seniors to easily input their ailments and receive tailored exercise recommendations. 
          Since typing or navigating complex forms can be difficult for older users, I had to experiment 
          with different interaction methods, such as dropdown menus, toggles, and guided steps, to keep the 
          process intuitive and manageable within Protopie’s prototyping constraints.

          <br/>
          <br/>
          Organizing exercises into categories like Yoga, Pilates, and Cardio presented its own challenges. 
          The navigation had to feel seamless and familiar while still allowing users to explore options without 
          becoming overwhelmed. Achieving clarity in categorization while avoiding clutter required several iterations of 
          the layout and flow. Senior users need motivation to keep exercising, but incorporating too many engaging features, like 
          notifications or gamification, risked overwhelming them thus requiring straightforward interface  which would encourage continued use.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* <figure className="text-center">
              <motion.div 
                className="bg-gray-800 rounded-lg p-4 aspect-[9/16] flex items-center justify-center shadow-xl border border-gray-700 hover:border-pink-500/50 transition-colors duration-300"
                variants={imageVariants}
              >
                <div className="w-full h-full">
                  <VideoPlayer 
                    src={featureDemo2}
                    title="Scheduling Feature Demo"
                    className="border border-gray-600"
                  />
                </div>
              </motion.div>
              <figcaption className="text-sm text-gray-400 mt-3">Figure 5: Appointment Scheduling</figcaption>
            </figure> */}
          </div>
        </motion.section>

        {/* Mockups Grid - Keep existing images */}
        <motion.div
          className="mb-16 md:px-8 justify-items-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {[
            { src: Proto1, title: "Signup/SignIn" },
            { src: Proto2, title: "Setting" },
            { src: Proto3, title: "Workout Menu" },
            { src: Proto4, title: "Cardio" }
          ].map((item, index) => (
            <figure key={index} className="text-center">
              <motion.div 
                className=" rounded-lg flex justify-center"
                variants={imageVariants}
              >
                <img 
                  src={item.src}
                  alt={item.title}
                  className="w-auto h-full object-contain "
                />
              </motion.div>
              {/* <figcaption className="text-sm text-gray-400 ">
                Figure {index + 6}: {item.title} Screen
              </figcaption> */}
            </figure>
          ))}
        </motion.div>

        

      </div>

  <BackToTopButton />
  <BackToHomeButton />
    <ScrollToTop />
  
    </div>
  );
};



export default SenioWellPortfolio;