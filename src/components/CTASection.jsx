import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowUpRight, Sparkles } from "lucide-react";

export default function CTASection() {
  const sectionRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current, {
        y: 80,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.to(glowRef.current, {
        y: -40,
        repeat: -1,
        yoyo: true,
        duration: 12,
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-36 bg-[#0B0B0B] overflow-hidden"
    >
      {/* AMBIENT GOLD GLOW */}
      <div
        ref={glowRef}
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#C6A75E]/20 rounded-full blur-[240px]"
      />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#C6A75E]/10 rounded-full blur-[220px]" />

      {/* CONTENT */}
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-2xl px-12 py-20 text-center">
          {/* ICON */}
          <div className="mx-auto mb-10 w-20 h-20 rounded-full flex items-center justify-center bg-[#C6A75E]/15 text-[#C6A75E]">
            <Sparkles size={36} />
          </div>

          {/* HEADLINE */}
          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight text-white">
            Let’s build something
            <br />
            <span className="text-[#C6A75E]">remarkable together</span>
          </h2>

          {/* SUBTEXT */}
          <p className="mt-8 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Whether you’re launching a new brand or scaling an existing one, we
            design and develop digital experiences that feel premium, perform
            flawlessly, and grow with your business.
          </p>

          {/* CTA BUTTONS */}
          <div className="mt-14 flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="/contact"
              className="group inline-flex items-center gap-3 px-10 py-4 rounded-full bg-[#C6A75E] text-black font-semibold text-lg hover:scale-105 transition-transform shadow-xl"
            >
              Start Your Project
              <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
            </a>

            <a
              href="/services/website-design"
              className="inline-flex items-center justify-center px-10 py-4 rounded-full border border-white/20 text-white font-semibold text-lg hover:border-[#C6A75E] hover:text-[#C6A75E] transition"
            >
              View Services
            </a>
          </div>

          {/* TRUST LINE */}
          <p className="mt-12 text-sm text-gray-500 tracking-wide">
            Trusted by startups, creators, and growing brands worldwide
          </p>
        </div>
      </div>
    </section>
  );
}
