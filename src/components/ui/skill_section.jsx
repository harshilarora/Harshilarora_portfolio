import { useEffect, useRef } from "react";
import bgImage from "../../assets/Images/bg-img.jpeg";

export default function SkillsSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const scrollPosition = window.pageYOffset;
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (
        scrollPosition + window.innerHeight > sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        const yPos = -(scrollPosition - sectionTop) * 0.5;
        section.style.backgroundPosition = `center ${yPos}px`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-28 bg-cover bg-center bg-fixed text-white"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/75"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-8 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[0.8fr_1fr_1.2fr] gap-10 md:gap-16 items-start">
          
          {/* Column 1 */}
          <div className="text-left font-bold">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[2px] leading-tight text-nowrap">
              THE <br/>
              KNOW-HOWS
            </h2>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-xl font-bold tracking-wide mb-6">
              PROGRAMS
            </h3>
            <div className="grid grid-cols-2 gap-8">
              <ul className="space-y-2 text-gray-300 font-light text-[0.95rem]">
                <li>React</li>
                <li>HTML</li>
                <li>Tailwind</li>
                <li>CSS</li>
                <li>JavaScript</li>
              </ul>
              <ul className="space-y-2 text-gray-300 font-light text-[0.95rem]">
                <li>Figma</li>
                <li>RESTful API</li>
                <li>Maya</li>
                <li>Rhino 3D</li>
                <li>Protopie</li>
              </ul>
            </div>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-xl font-bold tracking-wide mb-6">
              DESIGN
            </h3>
            <div className="grid grid-cols-2 gap-8">
              <ul className="space-y-2 text-gray-300 font-light text-[0.95rem]">
                <li>Brand Identity</li>
                <li>Typography</li>
                <li>Packaging</li>
                <li>Illustrator</li>
                <li>Interface design</li>
                <li>Prototyping</li>
                <li>Photography</li>
              </ul>
              <ul className="space-y-2 text-gray-300 font-light text-[0.95rem]">
                <li>Concept Development</li>
                <li>Data Visualization</li>
                <li>User Research</li>
                <li>Video Editing</li>
                <li>Motion Graphics</li>
                <li>UI/UX</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
