import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Layers, Image, TrendingUp, Share2, ArrowUpRight } from "lucide-react";

export default function PostDesign() {
  const sectionRef = useRef(null);
  const revealRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(revealRefs.current, {
        y: 50,
        opacity: 0,
        stagger: 0.12,
        duration: 0.9,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={sectionRef} className="bg-[#0B0B0B] text-white">
      {/* ================= HERO ================= */}
      <section className="relative py-36 px-6 text-center overflow-hidden">
        {/* Gold ambient glow */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#C6A75E]/15 blur-[220px]" />

        <div
          ref={(el) => (revealRefs.current[0] = el)}
          className="relative max-w-5xl mx-auto"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-[#C6A75E] font-semibold">
            Content & Post Design
          </p>

          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight">
            Content designed to
            <br />
            <span className="text-[#C6A75E]">build authority</span>
          </h1>

          <p className="mt-8 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            We design high-quality social and digital content that aligns with
            your brand, communicates value, and drives consistent engagement.
          </p>

          <a
            href="/contact"
            className="inline-flex mt-10 items-center gap-3 px-10 py-4 rounded-full bg-[#C6A75E] text-black font-semibold hover:scale-105 transition"
          >
            Design My Content <ArrowUpRight />
          </a>
        </div>
      </section>

      {/* ================= PHILOSOPHY ================= */}
      <section className="py-32 px-6 bg-black">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div ref={(el) => (revealRefs.current[1] = el)}>
            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
              Social content is not noise.
              <br />
              <span className="text-[#C6A75E]">It’s positioning.</span>
            </h2>

            <p className="mt-8 text-lg text-gray-400 leading-relaxed max-w-xl">
              Every post you publish shapes how your brand is perceived. We
              design content that communicates clarity, consistency, and
              confidence.
            </p>

            <p className="mt-6 text-lg text-gray-400 leading-relaxed max-w-xl">
              No random visuals. No trend-chasing. Just purposeful design that
              aligns with your business goals.
            </p>
          </div>

          <div
            ref={(el) => (revealRefs.current[2] = el)}
            className="p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl"
          >
            <Layers className="w-16 h-16 text-[#C6A75E] mb-6" />
            <p className="text-lg text-gray-300 leading-relaxed">
              We treat content as a system — visual consistency, messaging
              clarity, and brand recall across every platform.
            </p>
          </div>
        </div>
      </section>

      {/* ================= WHAT WE DESIGN ================= */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          {[
            {
              icon: <Image />,
              title: "Social Media Posts",
              desc: "Clean, on-brand visuals for consistent posting.",
            },
            {
              icon: <Share2 />,
              title: "Campaign Creatives",
              desc: "Launch, offer, and announcement designs.",
            },
            {
              icon: <TrendingUp />,
              title: "Growth Content",
              desc: "Content built to attract, educate, and convert.",
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
            ref={(el) => (revealRefs.current[6] = el)}
            className="text-4xl md:text-5xl font-extrabold mb-20"
          >
            Our content workflow
          </h2>

          <div className="grid md:grid-cols-4 gap-12">
            {[
              { step: "01", title: "Research", desc: "Audience & brand tone" },
              { step: "02", title: "Structure", desc: "Layouts & hierarchy" },
              { step: "03", title: "Design", desc: "Visual consistency" },
              { step: "04", title: "Deliver", desc: "Platform-ready assets" },
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
      <section className="py-36 px-6 text-center">
        <div
          ref={(el) => (revealRefs.current[11] = el)}
          className="max-w-4xl mx-auto p-16 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold">
            Let’s design content
            <br />
            <span className="text-[#C6A75E]">your audience trusts</span>
          </h2>

          <p className="mt-8 text-lg text-gray-400">
            Strategic visuals. Clear messaging. Consistent brand presence.
          </p>

          <a
            href="/contact"
            className="inline-flex mt-10 items-center gap-3 px-10 py-4 rounded-full bg-[#C6A75E] text-black font-semibold hover:scale-105 transition"
          >
            Start Content Design <ArrowUpRight />
          </a>
        </div>
      </section>
    </main>
  );
}
