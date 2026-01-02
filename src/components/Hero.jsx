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
    "Brand Identity",
    "Digital Growth",
  ];

  const [index, setIndex] = useState(0);

  // Entrance animations + typewriter
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

      // Typewriter
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.8 });
      typeWords.forEach((word) => {
        tl.to(typeRef.current, {
          text: word,
          duration: 1.2,
          ease: "none",
        })
          .to({}, { duration: 1 })
          .to(typeRef.current, {
            text: "",
            duration: 0.6,
            ease: "none",
          });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // 🔁 Image + content fade slider
  useEffect(() => {
    gsap.fromTo(
      sliderRef.current,
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 0.8, ease: "power3.out" }
    );

    const interval = setInterval(() => {
      gsap.to(sliderRef.current, {
        opacity: 0,
        scale: 0.95,
        duration: 0.5,
        onComplete: () => {
          setIndex((prev) => (prev + 1) % slides.length);
          gsap.to(sliderRef.current, {
            opacity: 1,
            scale: 1,
            duration: 0.8,
          });
        },
      });
    }, 3500);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0B0B0B] text-white"
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
          <h1
            ref={titleRef}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight"
          >
            Turning Ideas Into <span className="text-[#C6A75E]">Premium</span>
            <br /> Digital Experiences
          </h1>

          <p className="mt-4 text-lg md:text-xl font-semibold text-[#C6A75E]">
            <span ref={typeRef}></span>
            <span className="animate-pulse">|</span>
          </p>

          <p
            ref={subtitleRef}
            className="mt-6 text-lg md:text-xl text-gray-400 max-w-xl"
          >
            We help brands grow with strategy-first design, modern development,
            and digital solutions built to perform.
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

        {/* RIGHT – IMAGE + CONTENT SLIDER */}
        <div
          ref={sliderRef}
          className="rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl"
        >
          <img
            src={slides[index].img}
            alt={slides[index].title}
            className="w-full h-56 object-cover"
          />

          <div className="p-8">
            <h3 className="text-3xl font-bold text-[#C6A75E]">
              {slides[index].title}
            </h3>
            <p className="mt-3 text-gray-300 text-lg">{slides[index].desc}</p>
            <div className="mt-6 h-[2px] w-20 bg-[#C6A75E]" />
          </div>
        </div>
      </div>
    </section>
  );
}
