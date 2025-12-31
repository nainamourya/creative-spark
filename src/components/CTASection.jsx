import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function CTASection() {
  const sectionRef = useRef(null);
  const iconRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.to(iconRef.current, {
        y: -14,
        repeat: -1,
        yoyo: true,
        duration: 2,
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="cta-heading"
      className="relative py-32 px-6 overflow-hidden bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-600"
    >
      {/* Glow effects */}
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-white/20 blur-3xl rounded-full" />
      <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-white/20 blur-3xl rounded-full" />

      <div className="relative max-w-5xl mx-auto text-center bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[2.5rem] p-14 shadow-2xl">
        {/* Animated Icon */}
        <div
          ref={iconRef}
          className="mx-auto mb-8 w-24 h-24 rounded-full flex items-center justify-center bg-white/15 ring-1 ring-white/30"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            className="w-12 h-12 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 12l9-9 9 9M4.5 10.5V21a1.5 1.5 0 001.5 1.5h3a1.5 1.5 0 001.5-1.5v-3h3v3a1.5 1.5 0 001.5 1.5h3A1.5 1.5 0 0019.5 21V10.5"
            />
          </svg>
        </div>

        {/* SEO Heading */}
        <h2
          id="cta-heading"
          className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight"
        >
          Professional Web Design & React Development Services
        </h2>

        {/* SEO Paragraph */}
        <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
          Looking for a modern, fast, and SEO-optimized website? We build{" "}
          <strong>custom React websites</strong> that help businesses grow,
          convert visitors into customers, and rank higher on Google. From
          startups to established brands, our web development solutions are
          designed for performance, scalability, and long-term success.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          <a
            href="/contact"
            className="px-10 py-4 rounded-full bg-white text-indigo-700 font-semibold text-lg shadow-xl hover:scale-105 transition-transform"
          >
            Get a Free Website Consultation
          </a>

          <a
            href="/services/website-design"
            className="px-10 py-4 rounded-full border border-white/40 text-white font-semibold text-lg hover:bg-white/10 transition"
          >
            View Our Web Design Services
          </a>
        </div>

        {/* Micro SEO text */}
        <p className="mt-10 text-sm text-white/70">
          Trusted web designers & React developers in India delivering modern,
          conversion-focused websites.
        </p>
      </div>
    </section>
  );
}
