"use client";
import React, { useState, useEffect } from "react";
import { IoArrowUp } from "react-icons/io5";

const BackToTopButton = ({
  scrollThreshold = 300, // px before button shows
  size = 24,             // icon size
  className = "",        // allow extra styles
}) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > scrollThreshold);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollThreshold]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!show) return null;

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 p-3 rounded-full bg-purple-600 hover:bg-purple-700 text-white shadow-lg transition ${className}`}
    >
      <IoArrowUp size={size} />
    </button>
  );
};

export default BackToTopButton;
