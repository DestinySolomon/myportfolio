import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stackItems = ["Laravel", "React.js", "JavaScript", "HTML", "CSS"];

export default function TechStackSection() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const itemsRef = useRef(null);
  const noteRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading fade
      gsap.fromTo(
        headingRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
          },
        },
      );

      // Stack items wipe in
      const items = itemsRef.current?.querySelectorAll(".stack-badge");
      if (items) {
        items.forEach((item, i) => {
          gsap.fromTo(
            item,
            { clipPath: "inset(0 100% 0 0)" },
            {
              clipPath: "inset(0 0% 0 0)",
              duration: 0.7,
              ease: "power3.out",
              delay: i * 0.15,
              scrollTrigger: {
                trigger: itemsRef.current,
                start: "top 80%",
              },
            },
          );
        });
      }

      // Note fade
      gsap.fromTo(
        noteRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.6,
          delay: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: noteRef.current,
            start: "top 90%",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="stack"
      className="relative w-full py-24 md:py-32 lg:py-40 px-6 md:px-10 lg:px-16 overflow-hidden"
    >
      <div className="relative z-10 w-full max-w-[1400px] mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-12 md:mb-16">
          <span className="font-mono text-sm text-editorial-amber tracking-wider">
            03 —
          </span>
          <span className="h-[1px] w-16 bg-editorial-amber/40" />
          <span className="font-mono text-xs text-editorial-text/40 tracking-wider uppercase">
            Tech Stack
          </span>
        </div>

        {/* Heading */}
        <div ref={headingRef} className="mb-12 md:mb-16">
          <h2
            className="font-display text-editorial-text leading-none tracking-wide"
            style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
          >
            TOOLS OF THE TRADE
          </h2>
        </div>

        {/* Stack badges */}
        <div ref={itemsRef} className="flex flex-wrap gap-4 md:gap-6">
          {stackItems.map((item, index) => (
            <div
              key={index}
              className="stack-badge border-2 border-editorial-amber bg-editorial-chrome px-6 md:px-8 py-3 md:py-4"
            >
              <span className="font-mono text-sm md:text-base text-editorial-text tracking-wider">
                {item}
              </span>
            </div>
          ))}
        </div>

        {/* Note */}
        <p
          ref={noteRef}
          className="font-mono text-xs text-editorial-text/40 mt-12 md:mt-16 tracking-wider"
        >
          Always learning. Always shipping.
        </p>
      </div>
    </section>
  );
}
