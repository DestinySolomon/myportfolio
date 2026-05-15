import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { processSteps } from "../../../mocks/process";

gsap.registerPlugin(ScrollTrigger);

export default function ProcessSection() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const stepsRef = useRef(null);
  const lineRef = useRef(null);

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

      // Steps reveal with stagger
      const steps = stepsRef.current?.querySelectorAll(".process-step");
      if (steps) {
        steps.forEach((step, i) => {
          gsap.fromTo(
            step,
            { y: 40, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              delay: i * 0.15,
              ease: "power3.out",
              scrollTrigger: {
                trigger: step,
                start: "top 85%",
              },
            },
          );
        });
      }

      // Connecting line draw animation
      const line = lineRef.current;
      if (line) {
        gsap.fromTo(
          line,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1.5,
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: stepsRef.current,
              start: "top 75%",
              end: "bottom 50%",
              scrub: 1,
            },
          },
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="process"
      className="relative w-full py-24 md:py-32 lg:py-40 px-6 md:px-10 lg:px-16 overflow-hidden"
    >
      <div className="relative z-10 w-full max-w-[1400px] mx-auto">
        {/* Heading */}
        <div ref={headingRef} className="mb-16 md:mb-24">
          <div className="flex items-center gap-4 mb-8">
            <span className="font-mono text-sm text-editorial-amber tracking-wider">
              08 —
            </span>
            <span className="h-[1px] w-16 bg-editorial-amber/40" />
            <span className="font-mono text-xs text-editorial-text/40 tracking-wider uppercase">
              Process
            </span>
          </div>
          <h2
            className="font-display text-editorial-text leading-none tracking-wide mb-4"
            style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
          >
            HOW I WORK
          </h2>
          <p className="font-body text-xl md:text-2xl text-editorial-text/60 italic">
            From brief to browser — a disciplined process.
          </p>
        </div>

        {/* Timeline — horizontal on desktop, vertical on mobile */}
        <div ref={stepsRef} className="relative">
          {/* Connecting line (desktop only) */}
          <div
            ref={lineRef}
            className="hidden lg:block absolute top-[40px] left-[60px] right-[60px] h-[2px] bg-editorial-amber/30 origin-left"
            style={{ transform: "scaleX(0)" }}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 lg:gap-8">
            {processSteps.map((step) => (
              <div key={step.id} className="process-step relative">
                {/* Number marker */}
                <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center border-2 border-editorial-amber mb-6">
                  <span className="font-display text-2xl md:text-3xl text-editorial-amber">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <h3 className="font-display text-2xl md:text-3xl text-editorial-text mb-4">
                  {step.title}
                </h3>
                <p className="font-body text-lg text-editorial-text/60 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
