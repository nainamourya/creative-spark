import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import {
  Search,
  TrendingUp,
  BarChart3,
  Globe,
  FileSearch,
  Settings,
  PenTool,
  Rocket,
  ArrowRight,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

export default function AdvancedSEO() {
  const heroRef = useRef(null);
  const typeRef = useRef(null);
  const cardsRef = useRef([]);
  const stepsRef = useRef([]);
  const statsRef = useRef([]);
  const ctaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* ================= TYPEWRITER (SMOOTH & PREMIUM) ================= */
      const words = [
        "Search visibility",
        "Qualified traffic",
        "Long-term growth",
      ];

      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 0.6,
      });

      words.forEach((word) => {
        tl.to(typeRef.current, {
          text: {
            value: word,
            delimiter: "",
          },
          duration: word.length * 0.08, // smooth typing speed
          ease: "none",
        })
          .to({}, { duration: 1.2 }) // calm pause
          .to(typeRef.current, {
            text: "",
            duration: word.length * 0.04, // soft erase
            ease: "power1.inOut",
          })
          .to({}, { duration: 0.3 });
      });

      /* ================= FEATURE CARDS ================= */
      gsap.from(cardsRef.current, {
        y: 50,
        // opacity: 0,
        stagger: 0.15,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 70%",
        },
      });

      /* ================= PROCESS STEPS ================= */
      gsap.from(stepsRef.current, {
        y: 40,
        // opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: stepsRef.current[0],
          start: "top 80%",
        },
      });

      /* ================= STATS ================= */
      gsap.from(statsRef.current, {
        y: 30,
        // opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        scrollTrigger: {
          trigger: statsRef.current[0],
          start: "top 85%",
        },
      });

      /* ================= CTA ================= */
      gsap.from(ctaRef.current, {
        scale: 0.95,
        // opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 85%",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* ================= HERO ================= */}
      <section
        ref={heroRef}
        className="relative py-36 bg-[#0B0B0B] text-white overflow-hidden"
      >
        {/* Gold glow */}
        <div className="absolute -top-48 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#C6A75E]/15 blur-[220px]" />

        <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT */}
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-[#C6A75E] font-semibold">
              Advanced SEO
            </p>

            <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight">
              SEO built for
              <br />
              <span className="text-[#C6A75E] relative">
                <span ref={typeRef}></span>
                <span className="ml-1 animate-pulse">|</span>
              </span>
            </h1>

            <p className="mt-8 text-lg text-gray-400 max-w-xl">
              We design SEO systems that improve visibility, attract the right
              audience, and convert traffic into measurable business growth.
            </p>

            {/* FEATURES */}
            <div className="mt-14 grid sm:grid-cols-2 gap-8">
              {[
                {
                  icon: <Search />,
                  title: "Keyword Intelligence",
                  desc: "Target high-intent searches that actually convert.",
                },
                {
                  icon: <TrendingUp />,
                  title: "Ranking Growth",
                  desc: "Data-driven strategies focused on long-term results.",
                },
                {
                  icon: <Globe />,
                  title: "Global SEO",
                  desc: "Optimized for regions, languages, and scale.",
                },
                {
                  icon: <BarChart3 />,
                  title: "Transparent Reporting",
                  desc: "Clear insights, real metrics, no guesswork.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  ref={(el) => (cardsRef.current[i] = el)}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur"
                >
                  <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-xl bg-[#C6A75E]/15 text-[#C6A75E]">
                    {item.icon}
                  </div>
                  <h4 className="font-semibold">{item.title}</h4>
                  <p className="mt-2 text-sm text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur">
            <div className="space-y-6">
              {[
                { icon: <FileSearch />, title: "Audit" },
                { icon: <Settings />, title: "Optimize" },
                { icon: <PenTool />, title: "Content" },
                { icon: <Rocket />, title: "Scale" },
              ].map((step, i) => (
                <div
                  key={i}
                  ref={(el) => (stepsRef.current[i] = el)}
                  className="flex items-center gap-4"
                >
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#C6A75E]/15 text-[#C6A75E]">
                    {step.icon}
                  </div>
                  <p className="font-medium">{step.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="py-28 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {[
            { value: "300%", label: "Traffic Growth" },
            { value: "120+", label: "Top-3 Rankings" },
            { value: "5×", label: "ROI Increase" },
            { value: "90%", label: "Lead Conversion" },
          ].map((s, i) => (
            <div
              key={i}
              ref={(el) => (statsRef.current[i] = el)}
              className="p-8 rounded-3xl bg-white/5 border border-white/10"
            >
              <p className="text-4xl font-extrabold text-[#C6A75E]">
                {s.value}
              </p>
              <p className="mt-2 text-sm text-gray-400">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-32 bg-[#0B0B0B] text-white text-center">
        <div
          ref={ctaRef}
          className="max-w-4xl mx-auto px-10 py-20 rounded-3xl bg-white/5 border border-white/10 backdrop-blur"
        >
          <h3 className="text-4xl font-extrabold">
            Ready to grow with
            <span className="text-[#C6A75E]"> SEO that works</span>?
          </h3>

          <p className="mt-6 text-lg text-gray-400">
            Let’s build a search strategy designed for sustainable, measurable
            growth.
          </p>

          <a
            href="/contact"
            className="inline-flex mt-10 items-center gap-3 px-10 py-4 rounded-full bg-[#C6A75E] text-black font-semibold hover:scale-105 transition"
          >
            Get Free SEO Audit <ArrowRight />
          </a>
        </div>
      </section>
    </>
  );
}
