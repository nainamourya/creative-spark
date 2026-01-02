import { useEffect, useRef } from "react";
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
      {/* ================= HERO ================= */}
      <section className="relative py-36 px-6">
        {/* GOLD GLOW */}
        <div className="absolute -top-48 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-[#C6A75E]/15 blur-[220px]" />

        <div
          ref={(el) => (revealRefs.current[0] = el)}
          className="relative max-w-5xl mx-auto text-center"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-[#C6A75E] font-semibold">
            Website Design
          </p>

          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight">
            Websites designed to
            <br />
            <span className="text-[#C6A75E]">convert & scale</span>
          </h1>

          <p className="mt-8 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            We design and build modern websites that feel premium, load fast,
            and guide users toward action — without noise or clutter.
          </p>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-14">
          {[
            {
              icon: <Layout />,
              title: "Interface Design",
              desc: "Clean, timeless layouts designed to build trust and guide users intuitively.",
            },
            {
              icon: <Smartphone />,
              title: "Responsive Experience",
              desc: "Mobile-first systems that adapt beautifully across all devices.",
            },
            {
              icon: <Code2 />,
              title: "Modern Development",
              desc: "Scalable, maintainable code built with modern web technologies.",
            },
          ].map((item, i) => (
            <div
              key={i}
              ref={(el) => (revealRefs.current[i + 1] = el)}
              className="p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl"
            >
              <div className="w-14 h-14 mb-6 flex items-center justify-center rounded-xl bg-[#C6A75E]/15 text-[#C6A75E]">
                {item.icon}
              </div>

              <h3 className="text-2xl font-semibold">{item.title}</h3>
              <p className="mt-4 text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= STORY ================= */}
      <section className="py-32 px-6 bg-black">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div ref={(el) => (revealRefs.current[4] = el)}>
            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
              Design that feels
              <br />
              <span className="text-[#C6A75E]">intentional</span>
            </h2>

            <p className="mt-8 text-lg text-gray-400 leading-relaxed max-w-xl">
              We don’t design for trends. We design for clarity, usability, and
              long-term impact — ensuring every screen serves a purpose.
            </p>

            <ul className="mt-10 space-y-4 text-gray-400">
              <li>• Conversion-focused layouts</li>
              <li>• Clear visual hierarchy</li>
              <li>• Performance-first mindset</li>
              <li>• Brand-aligned aesthetics</li>
            </ul>
          </div>

          <div
            ref={(el) => (revealRefs.current[5] = el)}
            className="p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl"
          >
            <Layers className="w-16 h-16 text-[#C6A75E] mb-6" />
            <p className="text-lg text-gray-300 leading-relaxed">
              Every project is approached as a system — not just a set of pages.
              We design experiences that scale as your business grows.
            </p>
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2
            ref={(el) => (revealRefs.current[6] = el)}
            className="text-4xl md:text-5xl font-extrabold mb-20"
          >
            Our design process
          </h2>

          <div className="grid md:grid-cols-4 gap-12">
            {[
              {
                step: "01",
                title: "Discover",
                desc: "Understand goals & users",
              },
              { step: "02", title: "Design", desc: "Create structure & UI" },
              { step: "03", title: "Build", desc: "Develop with precision" },
              { step: "04", title: "Launch", desc: "Test, refine & scale" },
            ].map((item, i) => (
              <div
                key={i}
                ref={(el) => (revealRefs.current[i + 7] = el)}
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
      <section className="py-36 px-6 text-center bg-black">
        <div
          ref={(el) => (revealRefs.current[11] = el)}
          className="max-w-4xl mx-auto p-16 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold">
            Let’s build a website
            <br />
            <span className="text-[#C6A75E]">your brand deserves</span>
          </h2>

          <p className="mt-8 text-lg text-gray-400">
            Ready to elevate your online presence with a premium website?
          </p>

          <a
            href="/contact"
            className="inline-flex mt-10 items-center gap-3 px-10 py-4 rounded-full bg-[#C6A75E] text-black font-semibold hover:scale-105 transition"
          >
            Start Your Project <ArrowUpRight />
          </a>
        </div>
      </section>
    </main>
  );
}
