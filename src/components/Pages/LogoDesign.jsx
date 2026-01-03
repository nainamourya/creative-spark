import { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { gsap } from "gsap";
import { PenTool, Layers, Sparkles, Shapes, ArrowUpRight } from "lucide-react";

export default function LogoDesign() {
  const sectionRef = useRef(null);
  const revealRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(revealRefs.current, {
        y: 50,
        stagger: 0.14,
        duration: 0.9,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={sectionRef} className="bg-[#0B0B0B] text-white overflow-hidden">
      {/* ✅ SEO META */}
      <Helmet>
        <title>Logo Design & Brand Identity Services</title>
        <meta
          name="description"
          content="Timeless logo and brand identity design services crafted for clarity, trust, and recognition."
        />
        <link
          rel="canonical"
          href="https://creativespark.in/services/logo-design"
        />
      </Helmet>

      {/* ================= HERO ================= */}
      <section className="relative py-36 px-6 text-center">
        {/* Gold ambient glow */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#C6A75E]/15 blur-[220px]" />

        <div
          ref={(el) => (revealRefs.current[0] = el)}
          className="relative max-w-5xl mx-auto"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-[#C6A75E] font-semibold">
            Logo Design & Brand Identity
          </p>

          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight">
            Professional logo design
            <br />
            <span className="text-[#C6A75E]">
              crafted with meaning & precision
            </span>
          </h1>

          <p className="mt-8 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            We provide professional logo design and brand identity services that
            communicate trust, clarity, and credibility — built to scale with
            your business.
          </p>

          <a
            href="/contact"
            className="inline-flex mt-10 items-center gap-3 px-10 py-4 rounded-full bg-[#C6A75E] text-black font-semibold hover:scale-105 transition"
          >
            Start Your Brand Identity <ArrowUpRight />
          </a>
        </div>
      </section>

      {/* ================= PHILOSOPHY ================= */}
      <section className="py-32 px-6 bg-black">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div ref={(el) => (revealRefs.current[1] = el)}>
            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
              Branding is not decoration.
              <br />
              <span className="text-[#C6A75E]">
                It’s strategic communication.
              </span>
            </h2>

            <p className="mt-8 text-lg text-gray-400 leading-relaxed max-w-xl">
              A logo is the foundation of your brand identity system. It must
              work across platforms, screens, cultures, and time — without
              relying on trends.
            </p>

            <p className="mt-6 text-lg text-gray-400 leading-relaxed max-w-xl">
              Our logo design process focuses on form, meaning, and usability to
              create brand marks that feel confident, premium, and instantly
              recognizable.
            </p>
          </div>

          <div
            ref={(el) => (revealRefs.current[2] = el)}
            className="p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl"
          >
            <Layers className="w-16 h-16 text-[#C6A75E] mb-6" />
            <p className="text-lg text-gray-300 leading-relaxed">
              Every logo we design is built as a scalable brand system —
              adaptable, flexible, and aligned with your long-term business
              vision.
            </p>
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          {[
            {
              icon: <PenTool />,
              title: "Concept-driven logo design",
              desc: "Every logo starts with strategy, not decoration.",
            },
            {
              icon: <Shapes />,
              title: "Custom logo creation",
              desc: "Designed from scratch — no templates, ever.",
            },
            {
              icon: <Sparkles />,
              title: "Timeless brand aesthetics",
              desc: "Minimal logo systems that age gracefully.",
            },
            {
              icon: <Layers />,
              title: "Scalable brand systems",
              desc: "Logos designed to work across all brand touchpoints.",
            },
          ].map((item, i) => (
            <div
              key={i}
              ref={(el) => (revealRefs.current[i + 3] = el)}
              className="p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl"
            >
              <div className="w-14 h-14 mb-6 flex items-center justify-center rounded-xl bg-[#C6A75E]/15 text-[#C6A75E]">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-4 text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="py-32 px-6 bg-black">
        <div className="max-w-7xl mx-auto text-center">
          <h2
            ref={(el) => (revealRefs.current[7] = el)}
            className="text-4xl md:text-5xl font-extrabold mb-20"
          >
            Our logo design process
          </h2>

          <div className="grid md:grid-cols-4 gap-12">
            {[
              {
                step: "01",
                title: "Research",
                desc: "Brand discovery & market clarity",
              },
              {
                step: "02",
                title: "Concept",
                desc: "Visual direction & brand meaning",
              },
              {
                step: "03",
                title: "Refine",
                desc: "Precision, balance & consistency",
              },
              {
                step: "04",
                title: "Deliver",
                desc: "Brand-ready logo assets",
              },
            ].map((item, i) => (
              <div
                key={i}
                ref={(el) => (revealRefs.current[i + 8] = el)}
                className="p-8 rounded-3xl bg-white/5 border border-white/10"
              >
                <p className="text-5xl font-extrabold text-[#C6A75E] mb-4">
                  {item.step}
                </p>
                <h4 className="text-xl font-semibold">{item.title}</h4>
                <p className="mt-2 text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-36 px-6 text-center">
        <div
          ref={(el) => (revealRefs.current[12] = el)}
          className="max-w-4xl mx-auto p-16 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold">
            Let’s create a logo
            <br />
            <span className="text-[#C6A75E]">your brand can truly own</span>
          </h2>

          <p className="mt-8 text-lg text-gray-400">
            A strong brand identity starts with a logo that feels intentional,
            distinctive, and unforgettable.
          </p>

          <a
            href="/contact"
            className="inline-flex mt-10 items-center gap-3 px-10 py-4 rounded-full bg-[#C6A75E] text-black font-semibold hover:scale-105 transition"
          >
            Begin Your Brand Identity <ArrowUpRight />
          </a>
        </div>
      </section>
    </main>
  );
}
