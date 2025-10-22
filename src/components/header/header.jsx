import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [date, setDate] = useState(new Date());
  const navigate = useNavigate();
  const location = useLocation();

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      const pstDate = new Date().toLocaleString('en-US', { timeZone: 'America/Vancouver' });
      setDate(new Date(pstDate));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Header background on scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to section (works from any page)
  const handleScrollTo = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/', { replace: false });
      setTimeout(() => {
        scroller.scrollTo(sectionId, { smooth: true, duration: 500, offset: -80 });
      }, 100);
    } else {
      scroller.scrollTo(sectionId, { smooth: true, duration: 500, offset: -80 });
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/90 backdrop-blur-md border-b border-gray-800' : 'bg-transparent'
      }`}
    >
      <nav className="px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">

          {/* Left side: Location + Date/Time */}
          <div className="text-gray-300 text-sm">
            <span className="font-grotesk tracking-wide uppercase text-gray-400 text-xs">
              Based in Vancouver, BC
            </span>
            <div className="font-grotesk-light tracking-wider text-gray-200 text-sm">
              <p>{date.toLocaleTimeString()}</p>
              <p>{date.toLocaleDateString()}</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">

              <li>
                <button
                  onClick={() => handleScrollTo('home')}
                  className="cursor-pointer block py-2 pr-4 pl-3 text-gray-300 hover:text-orange-400 font-grotesk duration-200"
                >
                  Home
                </button>
              </li>

              <li>
                <button
                  onClick={() => handleScrollTo('myStory')}
                  className="cursor-pointer block py-2 pr-4 pl-3 text-gray-300 hover:text-orange-400 font-grotesk duration-200"
                >
                  About Me
                </button>
              </li>

              <li>
                <button
                  onClick={() => handleScrollTo('projects')}
                  className="cursor-pointer block py-2 pr-4 pl-3 text-gray-300 hover:text-orange-400 font-grotesk duration-200"
                >
                  Projects
                </button>
              </li>

              <li>
                <button
                  onClick={() => handleScrollTo('footer')}
                  className="cursor-pointer block py-2 pr-4 pl-3 text-gray-300 hover:text-orange-400 font-grotesk duration-200"
                >
                  Contact
                </button>
              </li>

            </ul>
          </div>

        </div>
      </nav>
    </header>
  );
}
