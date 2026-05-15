import { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const profileImageUrl =
  "https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20a%20confident%20young%20African%20male%20developer%20in%20a%20modern%20minimalist%20studio%20setting%2C%20wearing%20a%20dark%20navy%20blazer%20over%20a%20black%20shirt%2C%20warm%20amber%20lighting%20from%20the%20left%20side%2C%20subtle%20editorial%20photography%20style%2C%20dark%20charcoal%20background%2C%20sharp%20focus%20on%20face%2C%20professional%20headshot%20composition&width=420&height=560&seq=hero-portrait-1&orientation=portrait";

const FULL_NAME = "DESTINY SOLOMON OKAGBUO";

export default function HeroSection() {
  const sectionRef = useRef(null);
  const nameRef = useRef(null);
  const subtitleRef = useRef(null);
  const locationRef = useRef(null);
  const lineRef = useRef(null);
  const photoRef = useRef(null);
  const photoLabelRef = useRef(null);

  const [typedChars, setTypedChars] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [typingDone, setTypingDone] = useState(false);

  const runTypewriter = useCallback(() => {
    let current = 0;
    const total = FULL_NAME.length;
    const speed = 90;

    const interval = setInterval(() => {
      current += 1;
      setTypedChars(current);
      if (current >= total) {
        clearInterval(interval);
        setTypingDone(true);
        setTimeout(() => setShowCursor(false), 800);
      }
    }, speed);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const cleanup = runTypewriter();
    return cleanup;
  }, [runTypewriter]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });

      tl.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
        "-=0.1",
      );

      tl.fromTo(
        lineRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 1.2, ease: "power3.out" },
        "-=0.4",
      );

      tl.fromTo(
        photoRef.current,
        { x: 40, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=1",
      );

      tl.fromTo(
        photoLabelRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" },
        "-=0.3",
      );

      tl.fromTo(
        locationRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.6, ease: "power3.out" },
        "-=0.5",
      );

      ScrollTrigger.create({
        trigger: photoRef.current,
        start: "top 85%",
        onEnter: () => {
          gsap.fromTo(
            photoRef.current,
            { clipPath: "inset(100% 0 0 0)" },
            { clipPath: "inset(0% 0 0 0)", duration: 1, ease: "power3.out" },
          );
        },
        once: true,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const renderTypedName = () => {
    let charIndex = 0;
    const words = ["DESTINY", "SOLOMON", "OKAGBUO"];

    return words.map((word, wordIdx) => {
      const wordStart = charIndex;
      charIndex += word.length;
      if (wordIdx < words.length - 1) {
        charIndex += 1;
      }
      const visibleLen = Math.max(0, typedChars - wordStart);
      const displayText = word.slice(0, visibleLen);

      return (
        <div key={word} className="relative inline-block">
          <span className="inline-block">{displayText}</span>
          {wordIdx < words.length - 1 &&
            typedChars > wordStart + word.length && (
              <span className="inline-block">&nbsp;</span>
            )}
          {wordIdx === words.length - 1 &&
            showCursor &&
            typingDone === false &&
            visibleLen === word.length && (
              <span className="inline-block w-[3px] h-[0.75em] bg-editorial-amber ml-1 animate-pulse align-middle" />
            )}
          {wordIdx === words.length - 1 && showCursor && typingDone && (
            <span className="inline-block w-[3px] h-[0.75em] bg-editorial-amber ml-1 animate-pulse align-middle" />
          )}
        </div>
      );
    });
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen w-full flex items-center overflow-hidden px-6 md:px-10 lg:px-16 py-20"
    >
      <div className="w-full max-w-[1600px] mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 lg:gap-16">
        {/* Left Column — Name & Text */}
        <div className="flex-1 z-10">
          <div
            ref={nameRef}
            className="font-display text-editorial-text leading-[0.9] tracking-wide"
            style={{ fontSize: "clamp(3.5rem, 14vw, 12rem)" }}
          >
            {renderTypedName()}
            {typedChars < FULL_NAME.length && (
              <span className="inline-block w-[3px] h-[0.75em] bg-editorial-amber ml-1 animate-pulse align-middle" />
            )}
          </div>

          <p
            ref={subtitleRef}
            className="font-body text-xl md:text-2xl lg:text-3xl text-editorial-text/80 mt-6 md:mt-8 italic"
            style={{ opacity: 0 }}
          >
            Fullstack Developer · CEO & Founder, ThothTech
          </p>

          {/* Amber line */}
          <div className="mt-8 md:mt-10 overflow-hidden">
            <div
              ref={lineRef}
              className="h-[2px] bg-editorial-amber origin-left"
              style={{ transform: "scaleX(0)" }}
            />
          </div>

          <p
            ref={locationRef}
            className="font-mono text-xs md:text-sm text-editorial-text/50 mt-6 md:mt-8 tracking-wider"
            style={{ opacity: 0 }}
          >
            Port Harcourt, Nigeria · Available for Projects
          </p>
        </div>

        {/* Right Column — Photo */}
        <div className="flex-shrink-0 z-10">
          <div ref={photoRef} className="relative" style={{ opacity: 0 }}>
            {/* Offset dark border */}
            <div
              className="absolute -top-2 -left-2 w-[280px] h-[373px] md:w-[360px] md:h-[480px] lg:w-[420px] lg:h-[560px] border-[3px] border-editorial-chrome"
              style={{ zIndex: 1 }}
            />
            {/* Photo container with amber border */}
            <div
              className="relative w-[280px] h-[373px] md:w-[360px] md:h-[480px] lg:w-[420px] lg:h-[560px] border-[3px] border-editorial-amber overflow-hidden"
              style={{ zIndex: 2 }}
            >
              <img
                src={profileImageUrl}
                alt="Destiny Solomon Okagbuo — Fullstack Developer"
                className="w-full h-full object-cover object-top transition-all duration-500"
                style={{ filter: "grayscale(20%) contrast(1.1)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.filter = "grayscale(0%) contrast(1.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.filter = "grayscale(20%) contrast(1.1)";
                }}
              />
            </div>
          </div>
          <p
            ref={photoLabelRef}
            className="font-mono text-xs text-editorial-text/40 mt-4 tracking-wider"
            style={{ opacity: 0 }}
          >
            CEO & Founder · ThothTech
          </p>
        </div>
      </div>
    </section>
  );
}
