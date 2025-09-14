"use client";
import React from "react";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; 
import { ContainerScroll } from "../../ui/ContainerScroll.jsx";
import Sculpture1 from "../../../assets/Images/sculpture1.png";
import Sculpture2 from '../../../assets/Images/sculpture2.png';
import Sculpture3 from '../../../assets/Images/sculpture3.png';
import Final1 from '../../../assets/Images/final1.jpg';
import Front from '../../../assets/Images/front.png';
import Top from '../../../assets/Images/top.png';
import left from '../../../assets/Images/left.png';
import BackToTopButton from "../../ui/BackToTopButton.jsx";
import ScrollToTop from "../../ui/ScrollToTop.jsx";






const CaseStudyHero = ({ title, description, image, imageAlt }) => {

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
  };


  return (
  <section className="bg-gray-950 text-white pt-24 pb-16 px-4 md:px-8 ">

    <div className="flex flex-col overflow-hidden">
       <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl md:text-6xl font-normal tracking-tight bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Rhino 3D model:<br />
                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Sculpture Pavilion
               </span>
              </h1>
            </>
          }
        >
        <img
  src={Sculpture1}
  alt="hero"
  height={720}
  width={1440}
  className="mx-auto rounded-2xl object-cover h-full object-left-top"
  draggable={false}
  />

      </ContainerScroll>
      </div>
      <motion.section 
                className="mb-16 bg-gray-950 antialiased text-white max-w-6xl mx-auto px-4 md:px-8 "
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <h2 className="pb-4 text-4xl md:text-6xl font-extrabold mb-6 tracking-tight bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                 Sculpture pavillion for Holland Park, Surrey
                </h2>
                <div className="w-full h-px bg-gradient-to-r from-purple-400 to-pink-600 mb-8"></div>
      
                

                {/* Title Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-400">
                  Process Analysis
                  </h3>
                  
                  <div className="flex gap-3">
                    <span className="px-4 py-2 bg-purple-600/20 text-purple-300 rounded-full text-sm font-medium border border-purple-500/30">
                      Rhino 3d
                    </span>
                    <span className="px-4 py-2 bg-pink-600/20 text-pink-300 rounded-full text-sm font-medium border border-pink-500/30">
                      Grasshopper
                    </span>
                  
                    
                  </div>
                </div>
              </motion.section>

      

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
        description=""
      />

      {/* Overview Section */}
      <TextBlock
         heading="Overview"
        content={[
         
          "This project from IAT 233: Spatial Design, involved designing a functional and aesthetically pleasing sculpture pavilion for Holland Park in Surrey, Canada. The primary goal was to create a gathering space that could house three sculptures of varying sizes and serve as a venue for art performances and social gatherings. My design utilizes a 'panel architecture' to create spaces for sculptures, forming a seamless blend with the park's natural environment and provide protection from the elements.",

         "My contribution to this project was comprehensive, starting with the initial conceptualization and culminating in the final 3D rendering. I was responsible for the full design process in Rhino 3D, from generating the initial ideation sketches to developing the detailed architectural model based on the provided design grammar.",

         "My process began with Ideation, where I focused on creating a structure that was both a shelter and an artwork in itself. The pavilion's form, inspired by a flower head, was chosen to complement the park's lush vegetation. This concept guided the selection of materials—primarily wood and glass—to provide a harmonious balance of natural elements and structural integrity.",
         ]}
         type="list"
      />


      <ImageSection className="flex flex-wrap justify-center gap-4 px-4 py-6 h-5"
        images={[ 
          Final1,
        ]}
        altTextPrefix="Final pavilion design"
        
      />


      {/* Role & Technologies */}
      <TextBlock
       content= "Following ideation, I translated the design into a digital model in Rhino 3D. I meticulously modeled the pavilion's two floors, the canopy space, and the accessible entrance ramp on a 960×960 cm base platform. I adhered to the 'panel architecture' grammar, using 10 cm wide panels to create the structure while integrating the viewing spaces for the three sculptures, two of which fit a 60×60×60 cm bounding box and one a 60×120×360 cm bounding box. The final step was the Rendering, where I applied materials and lighting to create a realistic visual of the pavilion within the Holland Park setting. figure 2,3 and 4 below show isometric views from front, left and top respectively." 
        type="paragraph"
      />

      {/* Full-width Image */}
      {/* <ImageSection
  images={[]}
  altTextPrefix="Initial draft for UserFlow"
  layout="full-width"
/> */}

{/* Grid of Images (like "Components" or "Wireframes") */}
<ImageSection className="flex flex-wrap items-center justify-center gap-4 px-4 py-6 h-5 w-full "
        images={[
          Front,
          left,
          Top,
        ]}
        altTextPrefix="Front View, Left View, Top View"
        layout='grid'
      />

      {/* Problem & Solution */}
      <TextBlock
        heading="The Challenge & Our Solution"
        content={[ "A significant hurdle was accurately modeling the complex, intersecting curves of the wooden frame that form the flower pattern. Ensuring that each panel met at the correct angle to form a cohesive, stable structure was technically demanding, especially while maintaining the integrity of the 'panel architecture' rules. I addressed this by utilizing Grasshopper, a visual programming tool for Rhino. Using Grasshopper, I was able to achieve the desired curved wood panel design by generating a repeated pattern. This method gave me full parametric control over the design, allowing me to specify the number of panels, control the diameters of the base and top, and define the curved path each panel follows. This approach not only allowed me to efficiently create the intricate structure but also provided the flexibility to create infinite variations of the pattern from the same foundational script.",
        ]}
       type="list"
      />

      <ImageSection className="flex flex-wrap justify-center gap-4 px-4 py-6 h-5"
        images={[ 
          Sculpture2,
        ]}
        altTextPrefix="pavilion design"
        
      />
    
    

      <BackToTopButton/>
      <BackToHomeButton  />
        <ScrollToTop />
      
    </div>
  );
}

 
