import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "../../../mocks/projects";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsSection() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const trackRef = useRef(null);
  const progressRef = useRef(null);
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

      // Horizontal scroll (only on desktop)
      const mm = gsap.matchMedia();

      mm.add("(min-width: 769px)", () => {
        const track = trackRef.current;
        if (!track) return;

        const panels = track.querySelectorAll(".project-panel");
        const totalWidth = track.scrollWidth - window.innerWidth;

        const scrollTween = gsap.to(track, {
          x: -totalWidth,
          ease: "none",
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top",
            end: () => `+=${totalWidth}`,
            pin: true,
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              if (progressRef.current) {
                gsap.set(progressRef.current, { scaleX: self.progress });
              }
            },
          },
        });

        // Panel entrance animations
        panels.forEach((panel) => {
          gsap.fromTo(
            panel,
            { opacity: 0.6, scale: 0.95 },
            {
              opacity: 1,
              scale: 1,
              duration: 0.5,
              ease: "power2.out",
              scrollTrigger: {
                trigger: panel,
                containerAnimation: scrollTween,
                start: "left 90%",
                end: "left 50%",
                scrub: true,
              },
            },
          );
        });

        return () => {
          mm.revert();
        };
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative w-full overflow-hidden"
    >
      {/* Heading outside pinned area */}
      <div ref={headingRef} className="py-16 md:py-24 px-6 md:px-10 lg:px-16">
        <div className="w-full max-w-[1400px] mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <span className="font-mono text-sm text-editorial-amber tracking-wider">
              04 —
            </span>
            <span className="h-[1px] w-16 bg-editorial-amber/40" />
            <span className="font-mono text-xs text-editorial-text/40 tracking-wider uppercase">
              Selected Work
            </span>
          </div>
          <h2
            className="font-display text-editorial-text leading-none tracking-wide"
            style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
          >
            SELECTED WORK
          </h2>
        </div>
      </div>

      {/* Progress bar */}
      <div className="w-full h-[2px] bg-editorial-chrome">
        <div
          ref={progressRef}
          className="h-full bg-editorial-amber origin-left"
          style={{ transform: "scaleX(0)" }}
        />
      </div>

      {/* Pinned horizontal scroll container */}
      <div ref={triggerRef} className="relative overflow-hidden">
        <div ref={trackRef} className="flex w-max">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`project-panel w-screen min-w-[100vw] md:min-w-[80vw] lg:min-w-[70vw] min-h-[80vh] flex items-center ${project.bgClass} px-6 md:px-12 lg:px-20 py-16 md:py-24`}
            >
              <div className="w-full max-w-[900px]">
                <span className="font-mono text-xs text-editorial-amber tracking-wider mb-4 block">
                  PROJECT 0{index + 1}
                </span>
                <h3
                  className="font-display text-editorial-text leading-[0.95] tracking-wide mb-4"
                  style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
                >
                  {project.name}
                </h3>
                <p className="font-mono text-sm text-editorial-amber mb-6 tracking-wider">
                  {project.role}
                </p>
                <p className="font-body text-lg md:text-xl text-editorial-text/70 leading-relaxed mb-8 max-w-[600px]">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.stack.map((tech, i) => (
                    <span
                      key={i}
                      className="font-mono text-xs text-editorial-text/50 border border-editorial-text/20 px-3 py-1"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Outcome */}
                <div className="border-l-2 border-editorial-amber pl-4 mb-8">
                  <p className="font-body text-lg md:text-xl text-editorial-text italic">
                    {project.outcome}
                  </p>
                </div>

                {/* CTA */}
                <a
                  href="#"
                  className="inline-flex items-center gap-2 font-mono text-sm text-editorial-amber tracking-wider group cursor-pointer"
                  onClick={(e) => e.preventDefault()}
                >
                  <span>View Project</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-2">
                    →
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
