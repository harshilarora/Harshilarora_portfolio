"use client";
import React from "react";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; 
import { ContainerScroll } from "../../ui/ContainerScroll.jsx";
import vmfImage from "../../../assets/Images/vmf.png";
import LocationImage from '../../../assets/Images/Location.png';
import ContactImage from '../../../assets/Images/Contact.png';
import schdulingImage from '../../../assets/Images/schduling.png';
import mobileViewImage from '../../../assets/Images/mobile_view.jpeg';
import userflowImage from '../../../assets/Images/Userflow.png';
import schduling2Image from '../../../assets/Images/schduling2.png';
import parallaxImage from '../../../assets/Images/parallax.png';
import BackToTopButton from "../../ui/BackToTopButton";
import ScrollToTop from "../../ui/ScrollToTop.jsx";




const CaseStudyHero = ({ title, description, image, imageAlt }) => {
  return (
  <section className="bg-gray-950 text-white pt-24 pb-16 px-4 md:px-8 mb-8 ">

    <div className="flex flex-col overflow-hidden">
       <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl md:text-6xl font-normal tracking-tight bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              VMF Micro-site:<br />
                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Capturing the Spirit of Art </span>
              </h1>
            </>
          }
        >
        <img
          src={vmfImage}
          alt="hero"
          height={750}
          width={1602}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
  />

      </ContainerScroll>
      </div>


      <div className="max-w-5xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          {description}
        </motion.p>
        {image && (
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            src={image}
            alt={imageAlt}
            className="w-full rounded-lg shadow-2xl mb-12 max-h-[600px] object-contain mx-auto"
          />
        )}
      </div>
    </section>
  );
};

// TextBlock Component (internal)
const TextBlock = ({ heading, content, type = 'paragraph' }) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      className="max-w-4xl mx-auto mb-16 px-4 md:px-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {heading && (
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          {heading}
        </h2>
      )}
      {type === 'paragraph' && (
        <p className="text-lg text-gray-400  leading-relaxed">
          {content}
        </p>
      )}
      {type === 'list' && (
        <ul className=" list-inside text-lg text-gray-400 leading-relaxed space-y-6 list-none">
          {content.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </motion.section>
  );
};

// ImageSection Component (internal)

const ImageSection = ({ images, altTextPrefix, layout = 'full-width' }) => {
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
  };
  // const captions = ["Figure 1 : Scheduling Page mockup", "Figure 2 : Information Page mockup", "Figure 3 : Reservation Page mockup"];


  return (
    <motion.div
      className={`mb-16 px-4 md:px-8 ${layout === 'grid' ? 'justify-items-center grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto' : 'flex flex-col items-center max-w-5xl mx-auto mt-4 gap-8'}`}
      initial="hidden"
      whileInView="visible"f
      viewport={{ once: true, amount: 0.3 }}
    >
      {images.map((imageSrc, index) => (

<figure key={index} className="text-center">
        <motion.img
          key={index}
          src={imageSrc}
          alt={`${altTextPrefix} ${index + 1}`}
          className="w-auto h-[350px] object-cover rounded-lg shadow-xl"
          variants={imageVariants}
        />

        
        </figure>

        
      ))}
    </motion.div>
  );
};

// BackToHomeButton Component (internal)
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

// --- End of self-contained components ---

// Main VMFCaseStudy Page Component
export default function VMFCaseStudy() {
  return (
    <div className="bg-gray-950 antialiased text-white min-h-screen">
      {/* Hero Section */}
      <CaseStudyHero
        title="Process Analysis"
        description="A collaborative HTML/CSS project showcasing the vibrant Vancouver Mural Festival, designed for visual engagement and community connection. This case study details the process of translating a dynamic event into an accessible digital experience."
      />

      {/* Overview Section */}
      <TextBlock
         heading="Overview"
        content={[
         "VMF was a collaborative web design project created for IAT 235, where our team of three was tasked with developing a micro-site for the Vancouver Mural Festival. The objective was to design a functional and visually engaging website using HTML, CSS, and JavaScript, while applying a human-centered design process throughout.",

         "My team began the project by empathizing with the company's target users, which includes festival-goers, art enthusiasts, and first-time visitors. This allowed us to focus on their goals, such as easily discovering murals, artists, and event details. In our initial meetings, my partners and I collaborated on establishing the visual identity of the site, aligning on color schemes and typography that reflected the vibrant and inclusive spirit of the Vancouver Mural Festival. I then moved on to creating early mockups for wireframes, a few of which are shown in Figures 4, 5, and 6, emphasizing clarity and accessibility.",
         ]}
         type="list"
      />


      <ImageSection className="flex flex-wrap justify-center gap-4 px-4 py-6 h-5"
        images={[LocationImage, 
          ContactImage,
          schdulingImage,
        ]}
        altTextPrefix="VMF Wireframe"
        layout="grid"
        
        
      />


      {/* Role & Technologies */}
      <TextBlock
       content= "In addition to visual design, I was responsible for mapping out the user flow (Figure 7), ensuring that navigation felt intuitive and aligned Jakob Nielsen's usability heuristics, particularly “visibility of system status” and “match between system and the real world” (Nielsen Norman Group, 1994, revised 2024, Jan 30). This helped us design a structure that minimized cognitive load and guided users through the site with ease, reinforcing the importance of functionally-driven interface design grounded in real user needs." 
        type="paragraph"
      />

      {/* Full-width Image */}
      <ImageSection
          images={[userflowImage]}
          altTextPrefix="Initial draft for UserFlow"
          layout="full-width"
      />

      {/* Problem & Solution */}
      <TextBlock
        heading="The Challenge & Our Solution"
        content={[ "After empathizing with user needs, our team moved into prototyping individual sections. I was responsible for designing and building the Introduction and Scheduling pages. As shown in Figure 9, the scheduling section presents mural tour reservation options in a clear, visually engaging layout with simple navigation and a prominent call to action.",
                    "One of the main challenges I faced was making the layout fully responsive across various devices using only HTML and CSS. Fine-tuning the grid structure and spacing required multiple iterations to ensure both usability and visual balance as seen in figure 8. This process improved my ability to create accessible, flexible designs that work seamlessly across screen sizes."
        ]}
       type="list"
      />

      {/* Grid of Images (like "Components" or "Wireframes") */}
      <ImageSection className="flex flex-wrap justify-center gap-4 px-4 py-6 h-5 "
        images={[
          mobileViewImage,
          schduling2Image,
        ]}
        altTextPrefix="mobileView, Schduling Webpage"
      />

      <TextBlock
      content= "However, implementing the parallax functionality came with challenges. Coordinating multiple image layers with varying scale values and orientations, each assigned to different classes, required careful setup in both HTML structure and JavaScript. The layout had to be manually adjusted to maintain alignment between image and text content, especially within the Bootstrap grid system. Through several iterations, the final effect added a dynamic, polished feel that made the landing page more immersive."
                   
       type="paragraph"
      />

      {/* Grid of Images (like "Components" or "Wireframes") */}
      <ImageSection className="flex flex-wrap justify-center gap-4 px-4 py-6 h-5 "
        images={[
          parallaxImage,
        ]}
        altTextPrefix="introduction page"
      />


      {/* Detailed Section (e.g., "Typography" or "Color Palette")
      <TextBlock
        heading="Typography and Color Palette"
        content="To maintain consistency with the festival's vibrant visual identity, we carefully selected a typography pairing that balanced readability with artistic flair. A bold, modern sans-serif was used for headlines to command attention, while a clean, accessible sans-serif was chosen for body text. The color palette drew directly from the VMF brand guidelines, utilizing bright, energetic hues complemented by muted tones for background elements, ensuring high contrast and visual appeal."
      />

      {/* Another Full-width Image Example (e.g., "Final Mockup" or "Interactive Element Demo") */}
      {/* <ImageSection
        images={['https://via.placeholder.com/1400x700?text=VMF+Final+Mockup']}
        altTextPrefix="VMF Final Mockup"
        layout="w-full"
      /> */}

      {/* Conclusion */}
      {/* <TextBlock
        heading="Conclusion & Learnings"
        content="This project provided valuable experience in collaborative front-end development and translating a real-world event into a digital format. We learned the importance of strict adherence to brand guidelines while maintaining design flexibility. The VMF Micro-site successfully delivered an engaging and informative online presence for the festival, enhancing the user experience for attendees and art enthusiasts alike."
      /> */} 

      {/* Back to Home Button */}
      <BackToTopButton/>
      <BackToHomeButton  />
      <ScrollToTop />
      
    </div>
  );
}

 
