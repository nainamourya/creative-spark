import { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async"; // ✅ REQUIRED
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Layout,
  Smartphone,
  Code2,
  Rocket,
  Layers,
  ArrowUpRight,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function WebsiteDesign() {
  const sectionRef = useRef(null);
  const revealRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(revealRefs.current, {
        y: 60,
        opacity: 0,
        stagger: 0.15,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={sectionRef} className="bg-[#0B0B0B] text-white overflow-hidden">
      {/* ✅ SEO META (CORRECT PLACE) */}
      <Helmet>
        <title>Website Design Company | Conversion-Focused Websites</title>
        <meta
          name="description"
          content="We design fast, SEO-ready websites that convert visitors into customers. Premium website design services."
        />
        <link
          rel="canonical"
          href="https://creativespark.in/services/website-design"
        />
      </Helmet>

      {/* ================= HERO ================= */}
      <section className="relative py-36 px-6">
        {/* GOLD GLOW */}
        <div className="absolute -top-48 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-[#C6A75E]/15 blur-[220px]" />

        <div
          ref={(el) => (revealRefs.current[0] = el)}
          className="relative max-w-5xl mx-auto text-center"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-[#C6A75E] font-semibold">
            Website Design Services
          </p>

          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight">
            Website design that helps
            <br />
            <span className="text-[#C6A75E]">businesses convert & scale</span>
          </h1>

          <p className="mt-8 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            We design and develop conversion-focused websites that look premium,
            load fast, rank well on Google, and guide users toward action.
          </p>
        </div>
      </section>

      {/* rest of your file stays EXACTLY the same */}
    </main>
  );
}
