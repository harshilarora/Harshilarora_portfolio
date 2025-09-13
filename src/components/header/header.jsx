import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  var [date,setDate] = useState(new Date());

  
    
  useEffect(() => {
    const timer = setInterval(() => {
      const pstDate = new Date().toLocaleString('en-US', {
        timeZone: 'America/Vancouver'
      });
      setDate(new Date(pstDate));
    }, 1000);
    return () => clearInterval(timer);
  }, [])


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-gray-900/90 backdrop-blur-md border-gray-800'
          : 'bg-transparent'
      }`}
    >
      
      <nav className="px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        <div className="text-gray-300 text-sm">
              <span className="font-grotesk tracking-wide uppercase text-gray-400 text-xs">Based in Vancouver, BC</span>
              <p className="font-grotesk-light tracking-wider text-gray-200 text-sm">
                {date.toLocaleTimeString()}  
              <p>{date.toLocaleDateString()}</p>  
              </p>
            </div>
        

          <div className="flex items-center lg:order-2">
            <Link
              to="#"
              className="text-gray-300 hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 mr-2"
            >
              Log in
            </Link>
            <Link
              to="#"
              className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2"
            >
              Get started
            </Link>
          </div>

          <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">

              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? 'text-orange-500' : 'text-gray-300'
                    } hover:text-orange-400`
                  }
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/aboutMe"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? 'text-orange-500' : 'text-gray-300'
                    } hover:text-orange-400`
                  }
                >
                  About Me
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/myProjects"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? 'text-orange-500' : 'text-gray-300'
                    } hover:text-orange-400`
                  }
                >
                  Projects
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/SenioWell-P1"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? 'text-orange-500' : 'text-gray-300'
                    } hover:text-orange-400`
                  }
                >
                  Contact
                </NavLink>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
