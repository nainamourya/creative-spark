import { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
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
      {/* ================= SEO META ================= */}
      <Helmet>
        <title>
          Website Design Company | High-Conversion Websites – Creative Spark
        </title>
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

      {/* ================= CONTENT ================= */}
      <section className="relative py-32 bg-black overflow-hidden">
        {/* 🔶 SECTION BACKGROUND GLOW */}
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <div className="w-[900px] h-[900px] bg-[#C6A75E]/20 blur-[260px]" />
        </div>

        {/* 🔹 CONTENT LAYER */}
        <div className="relative max-w-5xl mx-auto px-6 space-y-20 text-gray-300">
          {/* Intro */}
          <div ref={(el) => (revealRefs.current[1] = el)} className="space-y-6">
            <h2 className="text-4xl font-extrabold text-[#C6A75E]">
              Website Design Services That Convert Visitors Into Customers
            </h2>

            <p>
              Creative Spark is a website design company focused on building
              high-performance websites that do more than look good. Our
              websites are designed to convert visitors into leads, customers,
              and long-term brand advocates.
            </p>

            <p>
              We combine modern UI/UX design, clean development, and SEO-ready
              architecture to create websites that load fast, rank well on
              search engines, and deliver measurable business results.
            </p>
          </div>

          {/* Process */}
          <div ref={(el) => (revealRefs.current[2] = el)} className="space-y-6">
            <h3 className="text-2xl font-semibold text-[#C6A75E]">
              Our Website Design Process
            </h3>

            <p>
              Every website we design follows a structured process focused on
              clarity, performance, and user intent. We design with both users
              and search engines in mind — ensuring your website supports
              long-term growth.
            </p>

            <ul className="grid sm:grid-cols-2 gap-4 list-disc pl-6">
              <li>User research and conversion-focused layout planning</li>
              <li>Responsive UI/UX design for mobile, tablet, and desktop</li>
              <li>Clean, scalable development using modern technologies</li>
              <li>SEO-ready structure with fast loading performance</li>
              <li>Clear calls-to-action that guide users toward conversion</li>
            </ul>
          </div>

          {/* Businesses */}
          <div ref={(el) => (revealRefs.current[3] = el)} className="space-y-6">
            <h3 className="text-2xl font-semibold text-[#C6A75E]">
              Website Design for Businesses & Startups
            </h3>

            <p>
              Whether you are launching a new brand or upgrading an existing
              website, our website design services are tailored to your goals.
              We work with startups, small businesses, and growing brands to
              create digital experiences that build trust and credibility.
            </p>

            <p>
              Our websites are built to scale — allowing you to add new pages,
              services, and content without compromising performance or user
              experience.
            </p>
          </div>

          {/* Why Choose */}
          <div ref={(el) => (revealRefs.current[4] = el)} className="space-y-6">
            <h3 className="text-2xl font-semibold text-[#C6A75E]">
              Why Choose Creative Spark for Website Design?
            </h3>

            <ul className="grid sm:grid-cols-2 gap-4 list-disc pl-6">
              <li>Conversion-focused design backed by UX principles</li>
              <li>SEO-friendly website architecture from day one</li>
              <li>Fast-loading, performance-optimized builds</li>
              <li>Modern design that reflects brand credibility</li>
              <li>Transparent process and long-term support</li>
            </ul>
          </div>

          {/* FAQ */}
          <div
            ref={(el) => (revealRefs.current[5] = el)}
            className="space-y-10"
          >
            <h3 className="text-2xl font-semibold text-[#C6A75E]">
              Frequently Asked Questions
            </h3>

            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <p className="font-semibold text-[#C6A75E]">
                  How much does website design cost?
                </p>
                <p className="mt-2">
                  Website design cost depends on features, complexity, and
                  scope. We offer custom website design solutions tailored to
                  business needs and growth goals.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <p className="font-semibold text-[#C6A75E]">
                  Will my website be SEO-friendly?
                </p>
                <p className="mt-2">
                  Yes. Every website we design follows SEO best practices,
                  including clean structure, fast performance, mobile
                  responsiveness, and optimized content hierarchy.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <p className="font-semibold text-[#C6A75E]">
                  Do you redesign existing websites?
                </p>
                <p className="mt-2">
                  Absolutely. We redesign outdated websites to improve
                  usability, performance, and conversion rates while preserving
                  valuable SEO equity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
