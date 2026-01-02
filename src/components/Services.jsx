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
    desc: "High-performance websites engineered for speed, clarity, and conversion — built to scale with your business.",
  },
  {
    icon: Search,
    title: "SEO & Performance",
    desc: "Search-first optimization focused on visibility, Core Web Vitals, and long-term organic growth.",
  },
  {
    icon: Palette,
    title: "Brand Identity",
    desc: "Distinctive brand systems designed to feel premium, consistent, and instantly recognizable.",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    desc: "Strategic content and campaigns crafted to build authority and meaningful engagement.",
  },
];

export default function Services() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const bgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section glow slow drift
      gsap.to(bgRef.current, {
        y: -60,
        duration: 14,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Cards reveal
      gsap.from(cardsRef.current, {
        y: 60,
        // opacity: 0,
        stagger: 0.18,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%",
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
      {/* MOVING BACKGROUND GLOW */}
      <div
        ref={bgRef}
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#08f0a5]/15 rounded-full blur-[200px]"
      />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#C6A75E]/10 rounded-full blur-[200px]" />

      {/* FLOATING SPARK ICON */}
      <Sparkles className="absolute top-24 left-24 w-14 h-14 text-[#08f0a5]/25" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="max-w-4xl mb-24">
          <p className="text-xs uppercase tracking-[0.4em] text-[#08f0a5] font-semibold">
            What We Do
          </p>

          <h2 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight">
            Crafting digital systems
            <br />
            that <span className="text-[#C6A75E]">elevate brands</span>
          </h2>

          <p className="mt-8 text-lg text-gray-400 max-w-2xl">
            We don’t deliver features. We design experiences, build platforms,
            and create strategies that move brands forward.
          </p>
        </div>

        {/* SERVICES – CREATIVE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={i}
                ref={(el) => (cardsRef.current[i] = el)}
                className="group relative p-10 rounded-3xl bg-gradient-to-br from-white/10 to-white/0 border border-white/10 backdrop-blur-xl hover:border-[#08f0a5]/50 transition-all duration-500"
              >
                {/* BIG ICON */}
                <div className="absolute top-6 right-6 text-[#08f0a5]/20 group-hover:text-[#08f0a5]/40 transition">
                  <Icon size={56} />
                </div>

                {/* SMALL ICON */}
                <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-[#08f0a5]/15 text-[#08f0a5] mb-8">
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
