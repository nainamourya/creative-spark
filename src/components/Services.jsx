import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import {
  Code2,
  Search,
  Palette,
  Megaphone,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Web Design & Development",
    desc: "High-performance website design and development focused on speed, clarity, SEO readiness, and conversion — built to scale with your business.",
  },
  {
    icon: Search,
    title: "SEO & Performance Optimization",
    desc: "Search engine optimization focused on visibility, Core Web Vitals, technical SEO, and long-term organic growth.",
  },
  {
    icon: Palette,
    title: "Brand Identity & Visual Design",
    desc: "Distinctive brand identity systems designed to feel premium, consistent, and instantly recognizable across digital platforms.",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing & Growth",
    desc: "Strategic digital marketing, content, and campaigns crafted to build authority, traffic, and meaningful engagement.",
  },
];

export default function Services() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const glowRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Subtle ambient glow movement
      gsap.to(glowRef.current, {
        y: -40,
        duration: 16,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Cards reveal
      gsap.from(cardsRef.current, {
        y: 50,
        stagger: 0.16,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-36 bg-[#0B0B0B] text-white overflow-hidden"
    >
      {/* SOFT GOLD AMBIENT GLOW */}
      <div
        ref={glowRef}
        className="absolute -top-48 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-[#C6A75E]/15 rounded-full blur-[220px]"
      />

      {/* DECORATIVE ICON */}
      <Sparkles className="absolute top-24 left-24 w-12 h-12 text-[#C6A75E]/20" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="max-w-4xl mb-24">
          <p className="text-xs uppercase tracking-[0.4em] text-[#C6A75E] font-semibold">
            Our Services
          </p>

          <h2 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight">
            Digital services that help
            <br />
            <span className="text-[#C6A75E]">businesses grow online</span>
          </h2>

          <p className="mt-8 text-lg text-gray-400 max-w-2xl">
            We provide web design, SEO, branding, and digital marketing services
            that combine strategy, performance, and premium execution to help
            businesses scale confidently.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={i}
                ref={(el) => (cardsRef.current[i] = el)}
                className="group relative p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl hover:border-[#C6A75E]/40 transition-all duration-500"
              >
                {/* ICON */}
                <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-[#C6A75E]/15 text-[#C6A75E] mb-8">
                  <Icon size={26} />
                </div>

                <h3 className="text-2xl font-semibold leading-snug">
                  {service.title}
                </h3>

                <p className="mt-4 text-gray-400 leading-relaxed max-w-md">
                  {service.desc}
                </p>

                <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#C6A75E] tracking-wide">
                  Explore Service <ArrowUpRight size={16} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
