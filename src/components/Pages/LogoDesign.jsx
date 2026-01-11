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
      {/* ================= SEO META ================= */}
      <Helmet>
        <title>Logo Design & Brand Identity Services</title>
        <meta
          name="description"
          content="Timeless logo and brand identity design services crafted for clarity, trust, and recognition."
        />
        <link
          rel="canonical"
          href="www.creativespark.in/services/logo-design"
        />
      </Helmet>

      {/* ================= HERO ================= */}
      <section className="relative py-36 px-6 text-center">
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
              { step: "04", title: "Deliver", desc: "Brand-ready logo assets" },
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

      {/* ================= SEO CONTENT (MATCHED) ================= */}
      <section className="relative py-32 bg-black overflow-hidden">
        {/* gold ambient background */}
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <div className="w-[900px] h-[900px] bg-[#C6A75E]/15 blur-[260px]" />
        </div>

        <div className="relative max-w-5xl mx-auto px-6 space-y-14 text-gray-300">
          <h2 className="text-4xl font-extrabold text-[#C6A75E]">
            Logo Design & Brand Identity Services Built for Recognition
          </h2>

          <p>
            Creative Spark provides professional logo design and brand identity
            services for businesses that want to build trust, recognition, and
            long-term brand value. A logo is not just a visual mark — it is the
            core symbol of how your brand is perceived across platforms and
            touchpoints.
          </p>

          <p>
            Our logo design process focuses on clarity, meaning, and
            scalability. Every logo we design is crafted to work seamlessly
            across digital, print, and marketing channels while remaining
            timeless and adaptable.
          </p>

          <h3 className="text-2xl font-semibold text-[#C6A75E]">
            Strategic Logo Design, Not Decoration
          </h3>

          <p>
            Effective logo design begins with understanding your business,
            audience, and positioning. We design logos that communicate purpose
            and personality — not trends. Our approach ensures your brand
            identity remains relevant as your business grows.
          </p>

          <ul className="list-disc pl-6 space-y-3">
            <li>Brand discovery and positioning analysis</li>
            <li>Concept-driven logo ideation</li>
            <li>Typography, color, and form exploration</li>
            <li>Scalable logo systems for digital and print</li>
            <li>Consistent brand identity guidelines</li>
          </ul>

          <h3 className="text-2xl font-semibold text-[#C6A75E]">
            Logo Design for Startups, Businesses & Brands
          </h3>

          <p>
            Whether you are launching a startup, rebranding an existing
            business, or refining your visual identity, our logo design services
            are tailored to your goals. We help brands stand out with visual
            systems that feel confident, premium, and memorable.
          </p>

          <p>
            Our logos are designed to scale with your brand — ensuring
            consistency across websites, social media, packaging, and marketing
            campaigns.
          </p>

          <h3 className="text-2xl font-semibold text-[#C6A75E]">
            Why Choose Creative Spark for Logo Design?
          </h3>

          <ul className="list-disc pl-6 space-y-3">
            <li>Strategy-first logo design approach</li>
            <li>Custom, original logo concepts</li>
            <li>Minimal, timeless brand aesthetics</li>
            <li>Scalable brand identity systems</li>
            <li>Clear communication and collaborative process</li>
          </ul>

          <h3 className="text-2xl font-semibold text-[#C6A75E]">
            Frequently Asked Questions
          </h3>

          <div className="space-y-6">
            {[
              {
                q: "How long does logo design take?",
                a: "Logo design timelines vary depending on research depth and revisions. Most logo projects are completed within 2 to 4 weeks.",
              },
              {
                q: "Will I receive full brand-ready files?",
                a: "Yes. We deliver complete logo assets suitable for web, print, and marketing use, ensuring consistency across all platforms.",
              },
              {
                q: "Can you redesign an existing logo?",
                a: "Absolutely. We redesign logos to improve clarity, scalability, and modern relevance while respecting existing brand equity.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white/5 border border-white/10"
              >
                <p className="font-semibold text-white">{item.q}</p>
                <p className="mt-2">{item.a}</p>
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
