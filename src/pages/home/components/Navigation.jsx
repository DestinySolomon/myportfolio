import { useEffect, useRef, useState } from "react";
import thothLogo from "../../../assets/thothtech_logo.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const navLinks = [
  { label: "About", target: "#about" },
  { label: "ThothTech", target: "#thothtech" },
  { label: "Stack", target: "#stack" },
  { label: "Work", target: "#projects" },
  { label: "Contact", target: "#contact" },
];

export default function Navigation() {
  const navRef = useRef(null);
  const [activeSection, setActiveSection] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight * 0.8;
      setIsVisible(scrollY > heroHeight);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = ["about", "thothtech", "stack", "projects", "contact"];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      ScrollTrigger.create({
        trigger: el,
        start: "top center",
        end: "bottom center",
        onEnter: () => setActiveSection(id),
        onEnterBack: () => setActiveSection(id),
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);
  const handleClick = (e, target) => {
    e.preventDefault();
    const el = document.querySelector(target);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      ref={navRef}
      style={{ zIndex: 9999 }}
      className={`fixed top-0 left-0 w-full transition-all duration-500 bg-editorial-bg/80 backdrop-blur-sm border-b ${
        isVisible
          ? "border-editorial-amber/20 opacity-100"
          : "border-editorial-amber/10 opacity-90"
      }`}
    >
      <div className="w-full px-6 md:px-10 py-4 flex items-center justify-between">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="pointer-events-auto cursor-pointer inline-flex items-center"
        >
          <img src={thothLogo} alt="ThothTech" className="h-6 logo" />
        </a>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.target}
              onClick={(e) => handleClick(e, link.target)}
              className={`font-mono text-xs tracking-wider transition-colors duration-300 cursor-pointer pointer-events-auto whitespace-nowrap ${
                activeSection === link.target.replace("#", "")
                  ? "text-editorial-amber"
                  : "text-editorial-text/60 hover:text-editorial-text"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          onClick={(e) => handleClick(e, "#contact")}
          className="font-mono text-xs tracking-wider text-editorial-amber border border-editorial-amber/40 px-4 py-2 transition-all duration-300 hover:bg-editorial-amber hover:text-editorial-bg pointer-events-auto cursor-pointer whitespace-nowrap"
        >
          Hire Me
        </a>
      </div>
    </nav>
  );
}
