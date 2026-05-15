import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { testimonials } from "../../../mocks/testimonials";

gsap.registerPlugin(ScrollTrigger);

export default function TestimonialsSection() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const quotesRef = useRef(null);

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

      // Quote blocks slide in alternating
      const quotes = quotesRef.current?.querySelectorAll(".quote-block");
      if (quotes) {
        quotes.forEach((quote, i) => {
          const fromX = i % 2 === 0 ? -60 : 60;
          gsap.fromTo(
            quote,
            { x: fromX, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: quote,
                start: "top 80%",
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
      id="testimonials"
      className="relative w-full py-24 md:py-32 lg:py-40 px-6 md:px-10 lg:px-16 overflow-hidden"
    >
      <div className="relative z-10 w-full max-w-[1400px] mx-auto">
        {/* Heading */}
        <div ref={headingRef} className="mb-16 md:mb-24">
          <div className="flex items-center gap-4 mb-8">
            <span className="font-mono text-sm text-editorial-amber tracking-wider">
              07 —
            </span>
            <span className="h-[1px] w-16 bg-editorial-amber/40" />
            <span className="font-mono text-xs text-editorial-text/40 tracking-wider uppercase">
              Testimonials
            </span>
          </div>
          <h2
            className="font-display text-editorial-text leading-none tracking-wide mb-4"
            style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
          >
            WHAT CLIENTS SAY
          </h2>
          <p className="font-mono text-sm text-editorial-text/40 tracking-wider">
            Results speak. So do the people behind them.
          </p>
        </div>

        {/* Quote blocks */}
        <div ref={quotesRef} className="space-y-16 md:space-y-24">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`quote-block flex flex-col ${
                index % 2 === 0 ? "md:items-start" : "md:items-end"
              }`}
            >
              <div
                className={`max-w-[900px] ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}
              >
                {/* Decorative quote mark */}
                <span className="font-display text-6xl md:text-8xl text-editorial-amber leading-none block mb-4">
                  "
                </span>

                {/* Quote text */}
                <p className="font-body text-xl md:text-2xl lg:text-3xl text-editorial-text/90 leading-relaxed italic mb-8">
                  {testimonial.quote}
                </p>

                {/* Attribution */}
                <div className="flex items-center gap-4">
                  <span className="h-[1px] w-8 bg-editorial-amber" />
                  <p className="font-mono text-sm text-editorial-text/60 tracking-wider">
                    <span className="text-editorial-text">
                      {testimonial.name}
                    </span>
                    , {testimonial.organization}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
