import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Web Development",
    description:
      "Custom Laravel & React builds engineered for performance, scalability, and long-term maintainability.",
  },
  {
    title: "SEO",
    description:
      "Technical and content-led search optimization for long-term visibility and organic growth.",
  },
  {
    title: "SEM",
    description:
      "Paid search campaigns structured to convert, not just click — maximizing every ad spend naira.",
  },
];

export default function ThothTechSection() {
  const sectionRef = useRef(null);
  const brandRef = useRef(null);
  const servicesRef = useRef(null);
  const nicheRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Brand name scale animation
      gsap.fromTo(
        brandRef.current,
        { scale: 0.85, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: brandRef.current,
            start: "top 80%",
          },
        },
      );

      // Services slide in from left
      const serviceItems =
        servicesRef.current?.querySelectorAll(".service-item");
      if (serviceItems) {
        gsap.fromTo(
          serviceItems,
          { x: -40, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: servicesRef.current,
              start: "top 80%",
            },
          },
        );
      }

      // Niche callout
      gsap.fromTo(
        nicheRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: nicheRef.current,
            start: "top 85%",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="thothtech"
      className="relative w-full bg-editorial-green py-24 md:py-32 lg:py-40 px-6 md:px-10 lg:px-16 overflow-hidden"
    >
      <div className="relative z-10 w-full max-w-[1400px] mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-12 md:mb-16">
          <span className="font-mono text-sm text-editorial-amber tracking-wider">
            02 —
          </span>
          <span className="h-[1px] w-16 bg-editorial-amber/40" />
          <span className="font-mono text-xs text-editorial-text/40 tracking-wider uppercase">
            ThothTech
          </span>
        </div>

        {/* Brand header */}
        <div ref={brandRef} className="mb-16 md:mb-24">
          <h2
            className="font-display text-editorial-text leading-[0.9] tracking-wide"
            style={{ fontSize: "clamp(2.5rem, 8vw, 6.5rem)" }}
          >
            THOTHTECH
          </h2>
          <div className="mt-4 flex items-center gap-4">
            <span className="h-[3px] w-24 bg-editorial-amber" />
            <p className="font-body text-xl md:text-2xl text-editorial-text/80 italic">
              We Build. We Rank. We Convert.
            </p>
          </div>
        </div>

        {/* Services */}
        <div
          ref={servicesRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-20 md:mb-32"
        >
          {services.map((service, index) => (
            <div key={index} className="service-item">
              <div className="border-t-2 border-editorial-amber pt-6">
                <h3 className="font-display text-3xl md:text-4xl text-editorial-text mb-4">
                  {service.title}
                </h3>
                <p className="font-body text-lg text-editorial-text/70 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Niche callout */}
        <div ref={nicheRef} className="text-center">
          <p className="font-mono text-xs text-editorial-text/40 tracking-widest uppercase mb-4">
            Our Niche
          </p>
          <h3
            className="font-display text-editorial-amber leading-none tracking-wide"
            style={{ fontSize: "clamp(2rem, 6vw, 5rem)" }}
          >
            NGOs · CONSTRUCTION
          </h3>
        </div>
      </div>
    </section>
  );
}
