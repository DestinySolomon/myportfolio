import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { certifications } from "../../../mocks/certifications";
import certificateImage from "../../../assets/certificate.png";

gsap.registerPlugin(ScrollTrigger);

export default function CertificationsSection() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const listRef = useRef(null);

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

      // Stamp effect on rows
      const rows = listRef.current?.querySelectorAll(".cert-row");
      if (rows) {
        rows.forEach((row, i) => {
          gsap.fromTo(
            row,
            { scale: 0.8, opacity: 0, rotation: -2 },
            {
              scale: 1,
              opacity: 1,
              rotation: 0,
              duration: 0.7,
              delay: i * 0.1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: row,
                start: "top 85%",
              },
            },
          );
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="certifications"
      className="relative w-full py-24 md:py-32 lg:py-40 px-6 md:px-10 lg:px-16 overflow-hidden"
    >
      <div className="relative z-10 w-full max-w-[1400px] mx-auto">
        {/* Section label & heading */}
        <div ref={headingRef} className="mb-12 md:mb-16">
          <div className="flex items-center gap-4 mb-8">
            <span className="font-mono text-sm text-editorial-amber tracking-wider">
              05 —
            </span>
            <span className="h-[1px] w-16 bg-editorial-amber/40" />
            <span className="font-mono text-xs text-editorial-text/40 tracking-wider uppercase">
              Credentials
            </span>
          </div>
          <h2
            className="font-display text-editorial-text leading-none tracking-wide mb-4"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            CREDENTIALS
          </h2>
          <p className="font-mono text-sm text-editorial-text/40 tracking-wider">
            Earned, not assumed.
          </p>
        </div>

        {/* Certifications list */}
        <div ref={listRef} className="border-t border-editorial-amber/30">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="cert-row border-b border-editorial-amber/30 py-6 md:py-8 flex flex-col md:flex-row md:items-center gap-6"
            >
              {/* Thumbnail */}
              <div className="w-full md:w-[260px] flex-shrink-0">
                <div className="relative overflow-hidden rounded-[2rem] border border-editorial-amber/20 bg-editorial-chrome h-48 md:h-40">
                  <img
                    src={cert.image || certificateImage}
                    alt={`${cert.name} certificate`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Certificate details */}
              <div className="flex-1 md:px-4">
                <h3 className="font-display text-2xl md:text-3xl lg:text-4xl text-editorial-text mb-3">
                  {cert.name}
                </h3>
                <p className="font-body text-lg md:text-xl text-editorial-text/60 italic mb-4">
                  {cert.institution}
                </p>
                <span className="font-mono text-sm text-editorial-amber tracking-wider">
                  {cert.year}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
