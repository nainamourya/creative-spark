import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { ArrowRight, Sparkles } from "lucide-react";

gsap.registerPlugin(TextPlugin);

export default function Hero() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const typeRef = useRef(null);
  const btnsRef = useRef(null);
  const iconRef = useRef(null);
  const sliderRef = useRef(null);

  const slides = [
    {
      title: "Design",
      desc: "Clean, modern UI built for conversion",
      img: "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Development",
      desc: "Fast, scalable, performance-driven websites",
      img: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Growth",
      desc: "SEO & digital strategies that scale brands",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  const typeWords = [
    "Web Design",
    "Advanced SEO",
    "React Development",
    "Digital Growth",
  ];

  const [index, setIndex] = useState(0);

  /* Animations */
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, { y: 80, duration: 1, ease: "power4.out" });
      gsap.from(subtitleRef.current, {
        y: 40,
        duration: 0.8,
        delay: 0.4,
      });
      gsap.from(btnsRef.current.children, {
        y: 30,
        stagger: 0.15,
        duration: 0.6,
        delay: 0.6,
      });

      gsap.to(iconRef.current, {
        y: -12,
        repeat: -1,
        yoyo: true,
        duration: 2,
        ease: "sine.inOut",
      });

      const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
      typeWords.forEach((word) => {
        tl.to(typeRef.current, { text: word, duration: 1 })
          .to({}, { duration: 1 })
          .to(typeRef.current, { text: "", duration: 0.5 });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  /* Slider */
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center bg-[#0B0B0B] text-white overflow-hidden"
    >
      {/* Glow background */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#C6A75E]/20 rounded-full blur-[160px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#0F3D2E]/30 rounded-full blur-[160px]" />
      </div>

      {/* Floating icon */}
      <div
        ref={iconRef}
        className="absolute top-28 left-1/2 -translate-x-1/2 text-[#C6A75E]/70"
      >
        <Sparkles size={42} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* LEFT */}
        <div>
          {/* ✅ SEO-OPTIMIZED H1 */}
          <h1
            ref={titleRef}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight"
          >
            Web Design & SEO Agency for{" "}
            <span className="text-[#C6A75E]">Growing Businesses</span>
          </h1>

          {/* Animated keywords (visual) */}
          <p className="mt-4 text-lg md:text-xl font-semibold text-[#C6A75E]">
            <span ref={typeRef}></span>
            <span className="animate-pulse">|</span>
          </p>

          {/* ✅ Static SEO reinforcement (Google reads this) */}
          <p className="sr-only">
            We provide web design, advanced SEO, React development, and digital
            growth services for startups and businesses.
          </p>

          <p
            ref={subtitleRef}
            className="mt-6 text-lg md:text-xl text-gray-400 max-w-xl"
          >
            We help brands grow with strategy-first design, modern development,
            and performance-driven SEO solutions.
          </p>

          <div ref={btnsRef} className="mt-10 flex gap-4">
            <button className="px-8 py-3 rounded-full bg-[#C6A75E] text-black font-semibold flex items-center gap-2 hover:bg-[#d8ba6a] transition shadow-lg">
              Get Started <ArrowRight size={18} />
            </button>
            <button className="px-8 py-3 rounded-full border border-white/20 hover:border-[#C6A75E] hover:text-[#C6A75E] transition font-semibold">
              View Work
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div
          ref={sliderRef}
          className="rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl"
        >
          <img
            src={slides[index].img}
            alt={`${slides[index].title} service example`}
            loading="lazy"
            className="w-full h-56 object-cover"
          />

          <div className="p-8">
            <h2 className="text-3xl font-bold text-[#C6A75E]">
              {slides[index].title}
            </h2>
            <p className="mt-3 text-gray-300 text-lg">{slides[index].desc}</p>
            <div className="mt-6 h-[2px] w-20 bg-[#C6A75E]" />
          </div>
        </div>
      </div>
    </section>
  );
}
