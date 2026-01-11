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
        <link
          rel="canonical"
          href="www.creativespark.in/services/advanced-seo"
        />
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
      {/*  */}

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
      {/*  */}
      {/* ================= SEO CONTENT ================= */}
      <section className="py-32 bg-black text-gray-300">
        <div className="max-w-5xl mx-auto px-6 space-y-12">
          <h2 className="text-4xl font-extrabold text-white">
            Advanced SEO Services That Drive Sustainable Growth
          </h2>

          <p>
            At Creative Spark, we offer advanced SEO services designed to help
            growing businesses improve search visibility, attract qualified
            traffic, and convert visitors into customers. Our SEO strategies are
            built for long-term performance — not short-term ranking tricks.
          </p>

          <p>
            Unlike generic SEO agencies, we focus on search intent, technical
            excellence, and content relevance. Every SEO campaign we run is
            aligned with real business goals such as lead generation, revenue
            growth, and brand authority.
          </p>

          <h3 className="text-2xl font-semibold text-white">
            Our SEO Strategy Is Built Around Results
          </h3>

          <p>
            Successful SEO today requires more than keywords and backlinks. Our
            SEO process combines technical optimization, on-page SEO, content
            strategy, and performance analysis to build sustainable rankings
            across competitive search landscapes.
          </p>

          <ul className="list-disc pl-6 space-y-3">
            <li>In-depth keyword research focused on buyer intent</li>
            <li>Technical SEO audits to fix performance and crawl issues</li>
            <li>On-page optimization for content, structure, and UX</li>
            <li>Content strategy designed to rank and convert</li>
            <li>Continuous performance tracking and refinement</li>
          </ul>

          <h3 className="text-2xl font-semibold text-white">
            SEO Services for Startups, Businesses & Brands
          </h3>

          <p>
            Whether you are a startup looking for early traction or an
            established business aiming to scale, our SEO services are tailored
            to your growth stage. We work with brands across industries to
            improve rankings, visibility, and organic lead flow.
          </p>

          <p>
            Our approach ensures your website is not only optimized for search
            engines, but also for users — delivering fast performance, clear
            messaging, and measurable results.
          </p>

          <h3 className="text-2xl font-semibold text-white">
            Why Choose Creative Spark as Your SEO Agency?
          </h3>

          <ul className="list-disc pl-6 space-y-3">
            <li>Strategy-first SEO aligned with business goals</li>
            <li>Transparent reporting and performance metrics</li>
            <li>Ethical, long-term SEO practices</li>
            <li>Expertise in technical, on-page, and content SEO</li>
            <li>Proven frameworks for sustainable growth</li>
          </ul>

          <h3 className="text-2xl font-semibold text-white">
            Frequently Asked Questions
          </h3>

          <div className="space-y-6">
            <div>
              <p className="font-semibold text-white">
                How long does SEO take to show results?
              </p>
              <p>
                SEO is a long-term strategy. Most websites start seeing
                measurable improvements within 3 to 6 months, depending on
                competition, website history, and content quality.
              </p>
            </div>

            <div>
              <p className="font-semibold text-white">
                Do you offer SEO services for small businesses?
              </p>
              <p>
                Yes. We work with startups and small businesses to build strong
                SEO foundations that support long-term growth and lead
                generation.
              </p>
            </div>

            <div>
              <p className="font-semibold text-white">
                Is SEO better than paid advertising?
              </p>
              <p>
                SEO and paid ads serve different purposes. SEO builds long-term,
                compounding traffic, while paid ads provide immediate
                visibility. Many businesses benefit from combining both
                strategies.
              </p>
            </div>
          </div>
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
