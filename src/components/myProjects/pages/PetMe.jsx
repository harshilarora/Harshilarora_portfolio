"use client";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; 
import ScrollToTop from "../../ui/ScrollToTop.jsx";
import group1 from '../../../assets/Images/Group1.png';
import group2 from '../../../assets/Images/Group2.png';
import group3 from '../../../assets/Images/Group3.png';
import group4 from '../../../assets/Images/Group4.png';
import group5 from '../../../assets/Images/Group5.png';
import group6 from '../../../assets/Images/Group6.png';
import group7 from '../../../assets/Images/Group7.png';
import group8 from '../../../assets/Images/Group8.png';
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
          PetMe Mobile App
          </h2>
          <div className="w-full h-px bg-gradient-to-r from-purple-400 to-pink-600 mb-8"></div>

          
          
          {/* Title Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-400">
              Process Analysis
            </h3>
            
            <div className="flex gap-3">
              <span className="px-4 py-2 bg-purple-600/20 text-purple-300 rounded-full text-sm font-medium border border-purple-500/30">
                ReactNative
              </span>
              <span className="px-4 py-2 bg-pink-600/20 text-pink-300 rounded-full text-sm font-medium border border-pink-500/30">
                API Integration
              </span>
              <span className="px-4 py-2 bg-pink-600/20 text-purple-300 rounded-full text-sm font-medium border border-purple-500/30">
                Firebase database
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
            For our IAT 359 course, my teammate and I developed PetMe, a mobile application built with 
            React Native that demonstrates the integration of front-end, back-end, and native mobile functionalities. 
            The primary goal of the project was to curate a fully functioning app that combines usability with technical depth.
            </p>
            
            <p className="text-lg text-gray-400 leading-relaxed">
            The app leverages Google Firebase 
            Authentication to handle secure user sign-up and sign-in, while Firebase’s cloud database supports 
            persistent storage of user data. In addition, we implemented local data storage to allow offline access and improve 
            responsiveness. API tools were integrated to extend the app’s functionality, and we made use of native device features such as camera, notifications, location to enhance the user experience.
            </p>

            <p className="text-lg text-gray-400 leading-relaxed">
            Through PetMe, I focused not only on building a technically sound application but also on 
            applying design and development practices to create an interactive, user-friendly experience. 
            This project highlights my ability to work collaboratively, problem-solve with industry tools, and 
            deliver a polished mobile product from concept to execution.
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
                <img 
                  src={group1}
                  title="Login Page"
                  
                />
              </div>
            </motion.div>
            <figcaption className="text-sm text-gray-400 mt-3">Figure 1: Login Page</figcaption>
          </figure>

          {/* Recommendations Video */}
          <figure className="text-center">
            <motion.div 
              className="w-64 h-auto flex items-center justify-center rounded-lg"
              variants={imageVariants}
            >
              <div className="w-full h-full">
                <img 
                  src={group2}
                  title="SignUp Page"
                  
                />
              </div>
            </motion.div>
            <figcaption className="text-sm text-gray-400 mt-3">Figure 2: SignUp Page</figcaption>
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
          Our design process for PetMe began with a structured approach to ideation, grounded in research and documentation. 
          The first step was creating a detailed proposal document that allowed us to clearly define the problem, identify 
          our target audience, and refine the scope of the app. This document served as both a planning tool and a foundation 
          for design decisions, ensuring that every stage aligned with the user's real needs. 
            <br/>
            <br/>
            During ideation, we concentrated on understanding the challenges faced by pet owners, sitters, and pet stores. 
            The problem statement highlighted issues around maintaining consistent care routines, tracking medical schedules,
            and managing multiple pet records. From this, we brainstormed potential features and prioritized solutions that would 
            deliver practical value while remaining user-friendly. For my contribution to the design and development of PetMe, I worked 
            primarily on the user authentication flow, the home page, and the pet management features. My process combined both 
            ideation and technical implementation to ensure usability, security, and a smooth user experience.
           
          </p>

          <motion.div
          className="mt-10 mb-16 px-4 md:px-8 justify-items-center grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
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
                <img 
                  src={group3}
                  title="Home Page"
                  
                />
              </div>
            </motion.div>
            <figcaption className="text-sm text-gray-400 mt-3">Figure 3: Home Page</figcaption>
          </figure>

          
          <figure className="text-center">
            <motion.div 
              className="w-64 h-auto flex items-center justify-center rounded-lg"
              variants={imageVariants}
            >
              <div className="w-full h-full">
                <img 
                  src={group4}
                  title="Breed Infor page"
                  
                />
              </div>
            </motion.div>
            <figcaption className="text-sm text-gray-400 mt-3">Figure 4: Breed Information Page</figcaption>
          </figure>
        </motion.div>

        
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
        Authentication and Security
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed mb-6">
          I designed and implemented the login and sign-up pages (figure 1 & figure 2), integrating them with Firebase Authentication. 
          This allowed both new and existing users to securely access their accounts or create a new account. To improve security, I included 
          restrictions to prevent individuals from using multiple accounts improperly from the same email.

            <br/>
            <br/>
          The sign-up page was designed to be intuitive while capturing key user details such as email, 
          name, username, and date of birth. These inputs are stored in the database to build unique user
          profiles and personalize their app experience. Moreover, The information is stored in App settings, helping users to
          edit details and more if needed in future.

           
          </p>

        </motion.section>

        
        <motion.div
          className="mt-10 mb-16 px-4 md:px-8 justify-items-center grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          
          <figure className="text-center">
            <motion.div 
              className="w-64 h-auto flex items-center justify-center rounded-lg"
              variants={imageVariants}
            >
              <div className="w-full h-full">
                <img 
                  src={group5}
                  title="Add Pet Page"
                  
                />
              </div>
            </motion.div>
            <figcaption className="text-sm text-gray-400 mt-3">Figure 5: Add Pet Page</figcaption>
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
          Home Page and Pet Filtering 
          </h2>
          
          <p className="text-lg text-gray-400 leading-relaxed">
          I also developed the home page (figure 3), which provides users with quick access to their saved pets.
          This included designing a filter system to browse pets more efficiently. Users can add, edit or 
          delete existing pet records, and filter through their pets based on type, using clearly designed filter buttons.  
          The add pet (figure 5) functionality allows users to create new pet profiles. This includes capturing important information such as pet name, 
          type, age, allergies, and other details, which are securely stored in the database. To make the 
          app more engaging, I integrated camera access, enabling users to upload a photo of their pet as part of the profile.

          <br/>
          <br/>
          Understanding that pet owners and enthusiasts need quick access to breed information, I implemented an 
          intelligent search solution on the home page which leads to breed information page (figure 4). The Gemini API integration enables users to explore any breed 
          instantly, from temperament and care needs to compatibility factors, all without interrupting their browsing experience.
          This creates a more immersive and self-sufficient platform that anticipates and fulfills user information needs in real-time.
          </p>

          
            
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
          The most significant challenge encountered was adding a pet profile and then displaying it on another screen.
          After a pet was added, the data wasn’t immediately reflected on the list of pets on the other page. 
          This was primarily due to AsyncStorage not triggering a re-render in the component where the pet list was displayed, 
          causing the app to not display the updated data without a page refresh.

          <br/>
          <br/>
          To resolve this, we implemented a state refresh by using React’s useState and useEffect hooks 
          to retrieve and update the list of pets each time a pet is added. After the new pet is saved in AsyncStorage, 
          we force a re-render of the pet list screen by updating the state and fetching the updated data from AsyncStorage.
          </p>
          </motion.section>
          
          

        {/* Mockups Grid - Keep existing images */}
        <motion.div
          className="mb-16 md:px-8 justify-items-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {[
            { src: group6, title: "nearby veterinary Locations" },
            { src: group7, title: "Medication remainders" },
            { src: group8, title: "Pet Walk Tracker" }
          ].map((item, index) => (
            <figure key={index} className="text-center">
              <motion.div 
                className="rounded-lg flex items-center justify-center h-5/6 w-full "
                variants={imageVariants}
              >
                <img 
                  src={item.src}
                  alt={item.title}
                  className="w-auto h-full object-contain"
                />
              </motion.div>
              <figcaption className="mt-4 text-sm text-gray-400 ">
                Figure {index + 6}: {item.title} Screen
              </figcaption>
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