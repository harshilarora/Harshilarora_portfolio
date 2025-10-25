import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Scroll to section (works from any page)
  const handleScrollTo = (sectionId) => {
    setIsMobileMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/', { replace: false });
      setTimeout(() => {
        scroller.scrollTo(sectionId, { smooth: true, duration: 500, offset: -80 });
      }, 100);
    } else {
      scroller.scrollTo(sectionId, { smooth: true, duration: 500, offset: -80 });
    }
  };

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About Me', id: 'myStory' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'footer' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-gray-900/90 backdrop-blur-md border-b border-gray-800' : 'bg-transparent'
        }`}
      >
        <nav className="px-4 lg:px-6 py-3 lg:py-4">
          <div className="flex justify-between items-center mx-auto max-w-screen-xl">

            {/* Left side: Location + Date/Time */}
            <div className="text-gray-300 text-sm">
              <span className="font-grotesk tracking-wide uppercase text-gray-400 text-xs block mb-1">
                Based in Vancouver, BC
              </span>
              <div className="font-grotesk-light tracking-wider text-gray-200 text-xs lg:text-sm">
                <p className="leading-tight">{date.toLocaleTimeString()}</p>
                <p className="leading-tight">{date.toLocaleDateString()}</p>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center">
              <ul className="flex flex-row space-x-8">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => handleScrollTo(item.id)}
                      className="cursor-pointer py-2 px-3 text-gray-300 hover:text-orange-400 font-grotesk duration-200 transition-colors"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-300 hover:text-orange-400 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-gray-900/95 backdrop-blur-lg z-40 lg:hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full">
          <ul className="flex flex-col items-center space-y-8">
            {navItems.map((item, index) => (
              <li
                key={item.id}
                className={`transform transition-all duration-300 delay-${index * 100} ${
                  isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
              >
                <button
                  onClick={() => handleScrollTo(item.id)}
                  className="text-2xl font-grotesk text-gray-300 hover:text-orange-400 transition-colors duration-200 py-3 px-6"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}