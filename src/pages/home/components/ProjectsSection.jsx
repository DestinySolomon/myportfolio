import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "../../../mocks/projects";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsSection() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const progressRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Heading animation - animate TO final state
    if (headingRef.current) {
      gsap.to(headingRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
        },
      });
    }

    // Stagger project panels
    const panels = section.querySelectorAll(".project-panel");
    panels.forEach((panel, i) => {
      gsap.to(panel, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: i * 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: panel,
          start: "top 85%",
        },
      });
    });

    // Progress bar
    if (progressRef.current) {
      gsap.to(progressRef.current, {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top center",
          end: "bottom center",
          scrub: 1,
        },
      });
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative w-full overflow-hidden"
    >
      {/* Heading outside pinned area */}
      <div
        ref={headingRef}
        className="py-16 md:py-24 px-6 md:px-10 lg:px-16"
        style={{ opacity: 0, transform: "translateY(30px)" }}
      >
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

      {/* Projects grid */}
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`project-panel ${project.bgClass} p-8 md:p-12 border border-editorial-amber/10`}
              style={{ opacity: 0, transform: "translateY(60px)" }}
            >
              <span className="font-mono text-xs text-editorial-amber tracking-wider mb-4 block">
                PROJECT 0{index + 1}
              </span>
              <h3
                className="font-display text-editorial-text leading-[0.95] tracking-wide mb-4"
                style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
              >
                {project.name}
              </h3>
              <p className="font-mono text-sm text-editorial-amber mb-6 tracking-wider">
                {project.role}
              </p>
              <p className="font-body text-lg text-editorial-text/70 leading-relaxed mb-8">
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
                <p className="font-body text-lg text-editorial-text italic">
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
          ))}
        </div>
      </div>
    </section>
  );
}
