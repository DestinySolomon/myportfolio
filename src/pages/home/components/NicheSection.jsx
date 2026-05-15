import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function NicheSection() {
  const sectionRef = useRef(null);
  const leftPanelRef = useRef(null);
  const rightPanelRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
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

      // Left panel parallax upward
      gsap.fromTo(
        leftPanelRef.current,
        { y: 60 },
        {
          y: -60,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        },
      );

      // Right panel parallax downward
      gsap.fromTo(
        rightPanelRef.current,
        { y: -60 },
        {
          y: 60,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        },
      );

      // Panel content reveal
      const panels = [leftPanelRef.current, rightPanelRef.current];
      panels.forEach((panel, i) => {
        if (!panel) return;
        const content = panel.querySelector(".panel-content");
        if (!content) return;
        gsap.fromTo(
          content,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: i * 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: panel,
              start: "top 75%",
            },
          },
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="niche"
      className="relative w-full overflow-hidden"
    >
      {/* Heading */}
      <div ref={headingRef} className="py-16 md:py-24 px-6 md:px-10 lg:px-16">
        <div className="w-full max-w-[1400px] mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <span className="font-mono text-sm text-editorial-amber tracking-wider">
              06 —
            </span>
            <span className="h-[1px] w-16 bg-editorial-amber/40" />
            <span className="font-mono text-xs text-editorial-text/40 tracking-wider uppercase">
              Niche
            </span>
          </div>
          <h2
            className="font-display text-editorial-text leading-none tracking-wide"
            style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
          >
            WHO WE BUILD FOR
          </h2>
        </div>
      </div>

      {/* Split panels */}
      <div className="flex flex-col lg:flex-row min-h-[80vh]">
        {/* Left — NGO */}
        <div
          ref={leftPanelRef}
          className="flex-1 bg-editorial-green px-6 md:px-10 lg:px-16 py-20 md:py-28 lg:py-36 flex items-center"
        >
          <div className="panel-content max-w-[600px]">
            <h3
              className="font-display text-editorial-text leading-[0.95] tracking-wide mb-8"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
            >
              NON-PROFITS
              <br />& NGOS
            </h3>
            <p className="font-body text-lg md:text-xl text-editorial-text/80 leading-relaxed">
              Destiny and ThothTech understand that NGOs don't just need
              websites — they need platforms that communicate mission, build
              donor trust, and drive community action. Clean architecture. Zero
              bloat. Maximum impact.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <span className="h-[2px] w-12 bg-editorial-amber" />
              <span className="font-mono text-xs text-editorial-amber tracking-wider">
                Mission-Driven Design
              </span>
            </div>
          </div>
        </div>

        {/* Right — Construction */}
        <div
          ref={rightPanelRef}
          className="flex-1 bg-editorial-bg px-6 md:px-10 lg:px-16 py-20 md:py-28 lg:py-36 flex items-center border-l-0 lg:border-l border-t lg:border-t-0 border-editorial-amber/20"
        >
          <div className="panel-content max-w-[600px]">
            <h3
              className="font-display text-editorial-text leading-[0.95] tracking-wide mb-8"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
            >
              CONSTRUCTION
              <br />& INFRASTRUCTURE
            </h3>
            <p className="font-body text-lg md:text-xl text-editorial-text/80 leading-relaxed">
              In an industry built on reputation and visibility, ThothTech
              builds digital presences as solid as the structures their clients
              erect. Project portfolios, contract lead generation, and SEO that
              puts builders on the map — literally.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <span className="h-[2px] w-12 bg-editorial-amber" />
              <span className="font-mono text-xs text-editorial-amber tracking-wider">
                Reputation Engineering
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
