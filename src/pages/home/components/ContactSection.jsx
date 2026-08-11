import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const emailRef = useRef(null);
  const subtextRef = useRef(null);
  const ctaRef = useRef(null);
  const socialsRef = useRef(null);
  const [emailTyped, setEmailTyped] = useState("");
  const [showBackToTop, setShowBackToTop] = useState(false);

  const email = "destiny@thothtech.com";

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading scale animation
      gsap.fromTo(
        headingRef.current,
        { scale: 0.6, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
          },
        },
      );

      // Subtext fade
      gsap.fromTo(
        subtextRef.current,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: subtextRef.current,
            start: "top 85%",
          },
        },
      );

      // CTA fade
      gsap.fromTo(
        ctaRef.current,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 90%",
          },
        },
      );

      // Socials fade
      gsap.fromTo(
        socialsRef.current,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: socialsRef.current,
            start: "top 90%",
          },
        },
      );

      // Email typewriter effect
      ScrollTrigger.create({
        trigger: emailRef.current,
        start: "top 80%",
        once: true,
        onEnter: () => {
          let i = 0;
          const interval = setInterval(() => {
            if (i <= email.length) {
              setEmailTyped(email.slice(0, i));
              i++;
            } else {
              clearInterval(interval);
            }
          }, 80);
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative w-full min-h-screen flex flex-col justify-center py-24 md:py-32 lg:py-40 px-6 md:px-10 lg:px-16 overflow-hidden"
    >
      <div className="relative z-10 w-full max-w-[1400px] mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-12 md:mb-16">
          <span className="font-mono text-sm text-editorial-amber tracking-wider">
            09 —
          </span>
          <span className="h-[1px] w-16 bg-editorial-amber/40" />
          <span className="font-mono text-xs text-editorial-text/40 tracking-wider uppercase">
            Contact
          </span>
        </div>

        {/* Giant heading */}
        <h2
          ref={headingRef}
          className="font-display text-editorial-text leading-[0.9] tracking-wide mb-8"
          style={{ fontSize: "clamp(2.5rem, 6vw, 6rem)" }}
        >
          LET'S BUILD
          <br />
          SOMETHING REAL
        </h2>

        {/* Email with typewriter */}
        <div className="mb-6">
          <span
            ref={emailRef}
            className="font-mono text-lg md:text-xl lg:text-2xl text-editorial-amber tracking-wider"
          >
            {emailTyped}
            <span className="inline-block w-[2px] h-[1.2em] bg-editorial-amber ml-1 animate-pulse" />
          </span>
        </div>

        {/* Phone number */}
        <div className="mb-6 flex items-center gap-3">
          <div className="w-8 h-8 flex items-center justify-center border border-editorial-amber/30">
            <i className="ri-phone-line text-editorial-amber text-sm" />
          </div>
          <a
            href="tel:+2347087766823"
            className="font-mono text-lg md:text-xl text-editorial-text/80 tracking-wider transition-colors duration-300 hover:text-editorial-amber cursor-pointer whitespace-nowrap"
          >
            +234 708 776 6823
          </a>
        </div>

        {/* WhatsApp CTA */}
        <div className="mb-8">
          <a
            href="https://wa.me/2347087766823?text=Hi%20Destiny%2C%20I%20saw%20your%20portfolio%20and%20I%27d%20like%20to%20connect."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border border-emerald-400 px-6 py-3 transition-all duration-300 hover:bg-emerald-400/10 cursor-pointer whitespace-nowrap"
          >
            <div className="w-5 h-5 flex items-center justify-center">
              <i className="ri-whatsapp-line text-emerald-400 text-base" />
            </div>
            <span className="font-mono text-sm text-emerald-400 tracking-wider">
              Chat on WhatsApp
            </span>
          </a>
        </div>

        {/* Subtext */}
        <p
          ref={subtextRef}
          className="font-body text-xl md:text-2xl text-editorial-text/60 italic mb-12 max-w-[700px]"
        >
          Available for fullstack projects, SEO audits & brand partnerships
        </p>

        {/* CTA Button */}
        <div ref={ctaRef} className="mb-16">
          <a
            href="mailto:destiny@thothtech.com"
            className="inline-flex items-center gap-3 bg-editorial-amber text-editorial-bg font-mono text-sm md:text-base tracking-wider px-8 py-4 transition-all duration-300 hover:bg-editorial-yellow cursor-pointer whitespace-nowrap"
          >
            <span>Send a Message</span>
            <span>→</span>
          </a>
        </div>

        {/* Social links */}
        <div
          ref={socialsRef}
          className="flex flex-wrap gap-6 md:gap-8 mb-24 md:mb-32"
        >
          {[
            { label: "GitHub", href: "https://github.com/DestinySolomon" },
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/in/destiny-okagbuo/",
            },
            { label: "Twitter/X", href: "https://x.com/Destiny_Okagbuo" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm text-editorial-text/50 tracking-wider transition-colors duration-300 hover:text-editorial-amber cursor-pointer whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-8 right-8 w-12 h-12 flex items-center justify-center bg-editorial-amber text-editorial-bg rounded-full transition-all duration-300 z-40 ${
          showBackToTop
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        aria-label="Back to top"
      >
        <i className="ri-arrow-up-line text-lg" />
      </button>

      {/* Footer */}
      <footer className="absolute bottom-0 left-0 w-full px-6 md:px-10 lg:px-16 py-6 border-t border-editorial-amber/10">
        <div className="w-full max-w-[1400px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-mono text-xs text-editorial-text/30 tracking-wider order-1 sm:order-2">
            CEO: Destiny Solomon Okagbuo
          </span>
          <span className="font-mono text-xs text-editorial-text/30 tracking-wider order-2 sm:order-3">
            Port Harcourt, Nigeria
          </span>
          <span className="font-mono text-xs text-editorial-text/30 tracking-wider order-3 sm:order-1">
            © 2026 ThothTech
          </span>
        </div>
      </footer>
    </section>
  );
}
