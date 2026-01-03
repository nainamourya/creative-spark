import { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
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
      const words = [
        "search visibility",
        "qualified traffic",
        "long-term growth",
      ];

      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 0.6,
      });

      words.forEach((word) => {
        tl.to(typeRef.current, {
          text: { value: word, delimiter: "" },
          duration: word.length * 0.08,
          ease: "none",
        })
          .to({}, { duration: 1.2 })
          .to(typeRef.current, {
            text: "",
            duration: word.length * 0.04,
            ease: "power1.inOut",
          })
          .to({}, { duration: 0.3 });
      });

      gsap.from(cardsRef.current, {
        y: 50,
        stagger: 0.15,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 70%",
        },
      });

      gsap.from(stepsRef.current, {
        y: 40,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: stepsRef.current[0],
          start: "top 80%",
        },
      });

      gsap.from(statsRef.current, {
        y: 30,
        stagger: 0.15,
        duration: 0.8,
        scrollTrigger: {
          trigger: statsRef.current[0],
          start: "top 85%",
        },
      });

      gsap.from(ctaRef.current, {
        scale: 0.95,
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
      {/* ✅ SEO META */}
      <Helmet>
        <title>
          SEO Services Agency | Grow Traffic & Rankings – Creative Spark
        </title>
        <meta
          name="description"
          content="Professional SEO services focused on rankings, traffic growth, and long-term visibility. Get a free SEO audit today."
        />
        <link rel="canonical" href="https://creativespark.in/services/seo" />
      </Helmet>

      {/* ================= HERO ================= */}
      <section
        ref={heroRef}
        className="relative py-36 bg-[#0B0B0B] text-white overflow-hidden"
      >
        <div className="absolute -top-48 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#C6A75E]/15 blur-[220px]" />

        <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-[#C6A75E] font-semibold">
              SEO Services
            </p>

            <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight">
              Advanced SEO services for
              <br />
              <span className="text-[#C6A75E] relative">
                <span ref={typeRef}></span>
                <span className="ml-1 animate-pulse">|</span>
              </span>
            </h1>

            <p className="mt-8 text-lg text-gray-400 max-w-xl">
              We provide advanced SEO services that improve search visibility,
              attract qualified traffic, and convert visitors into measurable
              business growth.
            </p>

            <div className="mt-14 grid sm:grid-cols-2 gap-8">
              {[
                {
                  icon: <Search />,
                  title: "Keyword Research & Intent",
                  desc: "Target high-intent keywords that attract customers, not just traffic.",
                },
                {
                  icon: <TrendingUp />,
                  title: "SEO Ranking Growth",
                  desc: "Data-driven SEO strategies focused on sustainable results.",
                },
                {
                  icon: <Globe />,
                  title: "Local & Global SEO",
                  desc: "Search engine optimization for regions, languages, and scale.",
                },
                {
                  icon: <BarChart3 />,
                  title: "SEO Reporting & Analytics",
                  desc: "Transparent SEO reporting with clear metrics and insights.",
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

          <div className="relative p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur">
            <div className="space-y-6">
              {[
                { icon: <FileSearch />, title: "SEO Audit" },
                { icon: <Settings />, title: "Technical Optimization" },
                { icon: <PenTool />, title: "Content & On-Page SEO" },
                { icon: <Rocket />, title: "Scale Rankings" },
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
            { value: "300%", label: "Organic Traffic Growth" },
            { value: "120+", label: "Top-3 Google Rankings" },
            { value: "5×", label: "SEO ROI Increase" },
            { value: "90%", label: "Lead Conversion Rate" },
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
            Let’s build a search engine optimization strategy designed for
            sustainable, measurable business growth.
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
