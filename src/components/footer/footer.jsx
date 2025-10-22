import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer  id="footer" className=" bg-black text-white relative overflow-hidden">
      
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute bottom-0 left-1/4 w-[600px] h-[600px] rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, rgba(236, 72, 153, 0.2) 30%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        ></div>
        <div 
          className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, rgba(139, 92, 246, 0.2) 40%, transparent 70%)',
            filter: 'blur(100px)',
          }}
        ></div>
      </div>
      
      <div className="mx-auto w-full max-w-7xl px-8 md:px-16 py-16 lg:py-20 relative z-10 border-t border-gray-800">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          
          {/* Left Column: CTA Section */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-normal leading-tight text-white">
              Let's build something<br />
              amazing together.
            </h2>
            
            <p className="text-gray-400 text-base max-w-md">
              Have a project in mind or just want to connect? I'm always open to discussing new opportunities and creative collaborations.
            </p>
            
            <Link 
              to="/contact"
              className="inline-block border-2 border-white rounded-md px-8 py-3 text-white hover:bg-white hover:text-black transition-all duration-300 font-medium"
            >
              Get In Touch
            </Link>

            {/* Contact Details */}
            <div className="space-y-3 pt-4">
              <div className="flex items-center gap-3 text-gray-400">
                <FaEnvelope className="w-4 h-4" />
                <a href="mailto:Harshilarora0@gmail.com" className="hover:text-white transition-colors duration-300 text-sm">
                  Harshilarora0@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <FaPhone className="w-4 h-4" />
                <a href="tel:+1234567890" className="hover:text-white transition-colors duration-300 text-sm">
                  +1 (236) 881-9855
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <FaMapMarkerAlt className="w-4 h-4" />
                <span className="text-sm">Surrey, BC, Canada</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Links Grid */}
          <motion.div 
            className="grid grid-cols-2 gap-12"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            
            {/* Navigation Column */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">
                Navigation
              </h3>
              <ul className="space-y-4">
                <li>
                  <NavLink to="/" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/aboutMe" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                    About Me
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/myProjects" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                    Projects
                  </NavLink>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Connect Column */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">
                Connect
              </h3>
              <ul className="space-y-4">
                <li>
                  <a 
                    href="https://github.com/harshilarora" 
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm flex items-center gap-2"
                  >
                    <FaGithub className="w-4 h-4" />
                    GitHub
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.linkedin.com/in/harshil-arora-0a5175190" 
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm flex items-center gap-2"
                  >
                    <FaLinkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a 
                    href="https://instagram.com/harshilarora0" 
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm flex items-center gap-2"
                  >
                    <FaInstagram className="w-4 h-4" />
                    Instagram
                  </a>
                </li>
                {/* <li>
                  <a 
                    href="mailto:your.email@example.com"
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm flex items-center gap-2"
                  >
                    <FaEnvelope className="w-4 h-4" />
                    Email
                  </a>
                </li> */}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section: Copyright & Social Icons */}
        <motion.div 
          className="pt-8 border-t border-gray-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-gray-500 text-sm">
               Copyright   <span className="text-amber-400" > © </span>{new Date().getFullYear()}  Harshil Arora. All rights reserved.
              </p>
              <p className="text-gray-600 text-xs mt-1">
                Designed & Built with passion
              </p>
            </div>
            
            {/* <div className="flex items-center gap-6">
              <span className="text-gray-400 text-sm">Follow me:</span>
              <div className="flex space-x-5">
                <a 
                  href="https://github.com/harshilarora" 
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                >
                  <FaGithub className="w-5 h-5" />
                  <span className="sr-only">GitHub</span>
                </a>
                <a 
                  href="https://linkedin.com/in/yourusername" 
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                >
                  <FaLinkedin className="w-5 h-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a 
                  href="https://behance.net/yourusername" 
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                >
                  <FaBehance className="w-5 h-5" />
                  <span className="sr-only">Behance</span>
                </a>
              </div>
            </div> */}


          </div>
        </motion.div>
      </div>
    </footer>
  );
}