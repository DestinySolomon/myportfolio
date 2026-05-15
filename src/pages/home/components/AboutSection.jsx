import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const aboutPhotoUrl =
  "https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20a%20confident%20young%20African%20male%20developer%20in%20a%20modern%20minimalist%20studio%20setting%2C%20wearing%20a%20dark%20navy%20blazer%20over%20a%20black%20shirt%2C%20warm%20amber%20lighting%20from%20the%20left%20side%2C%20subtle%20editorial%20photography%20style%2C%20dark%20charcoal%20background%2C%20sharp%20focus%20on%20face%2C%20professional%20headshot%20composition&width=280&height=370&seq=about-portrait-1&orientation=portrait";

export default function AboutSection() {
  const sectionRef = useRef(null);
  const bigNumRef = useRef(null);
  const photoRef = useRef(null);
  const textRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Big number parallax
      gsap.to(bigNumRef.current, {
        y: -80,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Photo clip-path reveal
      gsap.fromTo(
        photoRef.current,
        { clipPath: "inset(100% 0 0 0)" },
        {
          clipPath: "inset(0% 0 0 0)",
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: photoRef.current,
            start: "top 80%",
          },
        },
      );

      // Text paragraphs stagger
      const paragraphs = textRef.current?.querySelectorAll(".about-text");
      if (paragraphs) {
        gsap.fromTo(
          paragraphs,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: textRef.current,
              start: "top 80%",
            },
          },
        );
      }

      // Stats stagger
      const statItems = statsRef.current?.querySelectorAll(".stat-item");
      if (statItems) {
        gsap.fromTo(
          statItems,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: statsRef.current,
              start: "top 85%",
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
      id="about"
      className="relative w-full py-24 md:py-32 lg:py-40 px-6 md:px-10 lg:px-16 overflow-hidden"
    >
      {/* Big background number */}
      <div
        ref={bigNumRef}
        className="absolute top-1/2 left-0 -translate-y-1/2 font-display text-editorial-text/[0.03] select-none pointer-events-none leading-none"
        style={{ fontSize: "clamp(10rem, 25vw, 30rem)" }}
      >
        01
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-12 md:mb-16">
          <span className="font-mono text-sm text-editorial-amber tracking-wider">
            01 —
          </span>
          <span className="h-[1px] w-16 bg-editorial-amber/40" />
          <span className="font-mono text-xs text-editorial-text/40 tracking-wider uppercase">
            About
          </span>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left — Photo */}
          <div className="flex-shrink-0">
            <div
              ref={photoRef}
              className="relative w-[200px] h-[265px] md:w-[240px] md:h-[318px] lg:w-[280px] lg:h-[370px]"
            >
              {/* Green accent offset border */}
              <div className="absolute -top-2 -left-2 w-full h-full border-[3px] border-editorial-green/50" />
              <div className="relative w-full h-full border-[3px] border-editorial-green overflow-hidden">
                <img
                  src={aboutPhotoUrl}
                  alt="Destiny Solomon Okagbuo"
                  className="w-full h-full object-cover object-top"
                  style={{ filter: "grayscale(20%) contrast(1.1)" }}
                />
              </div>
            </div>
          </div>

          {/* Right — Text */}
          <div ref={textRef} className="flex-1">
            <p className="about-text font-body text-lg md:text-xl lg:text-2xl text-editorial-text/90 leading-relaxed mb-6">
              Destiny Solomon Okagbuo is a fullstack web developer with a
              builder's mindset and a strategist's eye. He engineers digital
              infrastructure — not just websites — for organizations that demand
              measurable results.
            </p>
            <p className="about-text font-body text-lg md:text-xl lg:text-2xl text-editorial-text/90 leading-relaxed mb-6">
              As the founder and CEO of ThothTech, he leads a team dedicated to
              transforming how NGOs and construction brands establish, grow, and
              convert their digital presence across Nigeria and beyond.
            </p>
            <p className="about-text font-body text-lg md:text-xl lg:text-2xl text-editorial-text/60 leading-relaxed italic">
              "We don't just build websites — we engineer digital presence."
            </p>
          </div>
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className="flex flex-col sm:flex-row gap-8 sm:gap-16 mt-16 md:mt-24 lg:mt-32"
        >
          <div className="stat-item">
            <span className="font-display text-5xl md:text-6xl lg:text-7xl text-editorial-amber leading-none">
              24+
            </span>
            <p className="font-mono text-xs text-editorial-text/50 mt-2 tracking-wider uppercase">
              Projects Delivered
            </p>
          </div>
          <div className="h-px w-full sm:w-px sm:h-20 bg-editorial-amber/20" />
          <div className="stat-item">
            <span className="font-display text-5xl md:text-6xl lg:text-7xl text-editorial-amber leading-none">
              5+
            </span>
            <p className="font-mono text-xs text-editorial-text/50 mt-2 tracking-wider uppercase">
              Years of Experience
            </p>
          </div>
          <div className="h-px w-full sm:w-px sm:h-20 bg-editorial-amber/20" />
          <div className="stat-item">
            <span className="font-display text-5xl md:text-6xl lg:text-7xl text-editorial-amber leading-none">
              15+
            </span>
            <p className="font-mono text-xs text-editorial-text/50 mt-2 tracking-wider uppercase">
              Happy Clients
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
