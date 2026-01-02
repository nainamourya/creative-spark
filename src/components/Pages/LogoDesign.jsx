import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { PenTool, Layers, Sparkles, Shapes, ArrowUpRight } from "lucide-react";

export default function LogoDesign() {
  const sectionRef = useRef(null);
  const revealRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(revealRefs.current, {
        y: 50,
        // opacity: 0,
        stagger: 0.14,
        duration: 0.9,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={sectionRef} className="bg-[#0B0B0B] text-white overflow-hidden">
      {/* ================= HERO ================= */}
      <section className="relative py-36 px-6 text-center">
        {/* Gold ambient glow */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#C6A75E]/15 blur-[220px]" />

        <div
          ref={(el) => (revealRefs.current[0] = el)}
          className="relative max-w-5xl mx-auto"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-[#C6A75E] font-semibold">
            Logo & Brand Identity
          </p>

          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight">
            Logos crafted with
            <br />
            <span className="text-[#C6A75E]">meaning & precision</span>
          </h1>

          <p className="mt-8 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            We design timeless logos and brand marks that communicate trust,
            clarity, and credibility — built to scale with your brand.
          </p>

          <a
            href="/contact"
            className="inline-flex mt-10 items-center gap-3 px-10 py-4 rounded-full bg-[#C6A75E] text-black font-semibold hover:scale-105 transition"
          >
            Start Your Brand <ArrowUpRight />
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
              <span className="text-[#C6A75E]">It’s communication.</span>
            </h2>

            <p className="mt-8 text-lg text-gray-400 leading-relaxed max-w-xl">
              A logo is the foundation of your brand system. It must work across
              screens, cultures, and time — without relying on trends.
            </p>

            <p className="mt-6 text-lg text-gray-400 leading-relaxed max-w-xl">
              We focus on form, meaning, and usability to create logos that feel
              confident, premium, and instantly recognizable.
            </p>
          </div>

          <div
            ref={(el) => (revealRefs.current[2] = el)}
            className="p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl"
          >
            <Layers className="w-16 h-16 text-[#C6A75E] mb-6" />
            <p className="text-lg text-gray-300 leading-relaxed">
              Every logo we design is built as a system — adaptable, scalable,
              and aligned with your brand’s long-term vision.
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
              title: "Concept-driven",
              desc: "Each logo starts with strategy, not sketches.",
            },
            {
              icon: <Shapes />,
              title: "Custom crafted",
              desc: "Designed from scratch — no templates, ever.",
            },
            {
              icon: <Sparkles />,
              title: "Timeless aesthetic",
              desc: "Minimal forms that age gracefully.",
            },
            {
              icon: <Layers />,
              title: "Scalable systems",
              desc: "Built to work across all touchpoints.",
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
            Our branding process
          </h2>

          <div className="grid md:grid-cols-4 gap-12">
            {[
              { step: "01", title: "Research", desc: "Brand & market clarity" },
              {
                step: "02",
                title: "Concept",
                desc: "Visual direction & meaning",
              },
              { step: "03", title: "Refine", desc: "Precision & balance" },
              { step: "04", title: "Deliver", desc: "Brand-ready assets" },
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
            <span className="text-[#C6A75E]">your brand can own</span>
          </h2>

          <p className="mt-8 text-lg text-gray-400">
            A strong brand starts with a mark that feels intentional and
            unforgettable.
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
