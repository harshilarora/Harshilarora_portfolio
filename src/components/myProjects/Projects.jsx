import React from "react";
import { motion } from "framer-motion";
import vmfImage from "../../assets/Images/vmf.png";
import prototypeImage from "../../assets/Images/prototype.jpg";
import { NavLink } from "react-router-dom";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
  IconArrowWaveRightUp,
  IconBoxAlignTopLeft,
  IconBoxAlignRightFilled,
} from "@tabler/icons-react";

export default function Projects() {
  const projects = [
    {
      title: "VMF Micro-site",
      description: "A responsive microsite for Vancouver Mural Festival.",
      image: vmfImage,
      path: "/vmf",
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio built with HtMl, CSS and Javascript.",
      image: prototypeImage,
      path: "/portfolio",
    },
    {
      title: "E-commerce Platform",
      description: "A MERN-stack based shopping platform with cart features.",
      image: "/images/ecommerce.jpg",
      path: "/ecommerce",
    },
    {
      title: "Blog Platform",
      description: "Minimalist blog with markdown support and CMS integration.",
      image: "/images/blog.jpg",
      path: "/blog",
    },
  ];

  // Helper to map project image into BentoGrid card
  const getHeaderImage = (imgPath) => (
    <img src={imgPath} className="w-full h-60 object-cover rounded-lg" alt="project visual" />
  );

  const icons = [
    <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    <IconSignature className="h-4 w-4 text-neutral-500" />,
    <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
    <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
    <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  ];

  const items = projects.map((project, i) => ({
    title: project.title,
    description: project.description,
    header: getHeaderImage(project.image),
    icon: icons[i % icons.length],
  }));

  return (
    <>
      <div className="relative min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: -250 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0 }}
          className="text-center mb-10"
        >
          <h1 className="text-5xl font-bold mb-4 mt-8">My Projects</h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl w-full"
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="border border-white overflow-hidden shadow-lg hover:scale-105 hover:border-gray-500 transform transition duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-gray-400 text-sm mt-2">
                  {project.description}
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
        </motion.div>
      </div>

      {/* Bento Grid Section */}
      <section className="bg-gray-950 py-16">
        <BentoGrid className="max-w-4xl mx-auto">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
              className={i === 1 || i === 3 ? "md:col-span-2" : ""}
            />
          ))}
        </BentoGrid>
      </section>
    </>
  );
}
