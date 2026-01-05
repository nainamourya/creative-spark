import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async"; // ✅ ADD THIS
import {
  PenTool,
  TrendingUp,
  Layout,
  Search,
  Sparkles,
  ArrowUpRight,
  BarChart3,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function BlogPage() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const navigate = useNavigate();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // HERO
      gsap.from(".blog-hero", {
        y: 60,
        duration: 1,
        ease: "power3.out",
      });

      // BLOG CARDS
      gsap.from(cardsRef.current, {
        y: 50,
        stagger: 0.12,
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

  const blogs = [
    {
      title: "High-Converting Website Design Principles",
      desc: "Design psychology, layout systems, and UX patterns used by premium brands to turn visitors into customers.",
      slug: "high-converting-website-design",
      icon: <Layout />,
    },
    {
      title: "Advanced SEO Strategies for Sustainable Growth",
      desc: "A modern SEO framework focused on intent, authority, and long-term organic performance.",
      slug: "advanced-seo-strategies",
      icon: <Search />,
    },
    {
      title: "Building Digital Brands That Scale",
      desc: "Positioning, identity systems, and consistency frameworks used by growing digital brands.",
      slug: "building-scalable-digital-brands",
      icon: <PenTool />,
    },
    {
      title: "Turning Traffic Into Qualified Leads",
      desc: "Conversion strategy, CRO techniques, and analytics-driven decision making.",
      slug: "traffic-to-qualified-leads",
      icon: <TrendingUp />,
    },
    {
      title: "Data-Driven Marketing Decisions",
      desc: "Using analytics, performance metrics, and insights to guide smarter growth strategies.",
      slug: "data-driven-marketing",
      icon: <BarChart3 />,
    },
    {
      title: "Website Design Cost in India (2026)",
      desc: "Learn the real website design cost in India and how to choose the right agency for high-converting websites.",
      slug: "website-design-cost-in-india",
      icon: <Layout />,
    },
    {
      title: "SEO vs Paid Ads: What Works Better in 2026?",
      desc: "A practical comparison of SEO and paid ads to help businesses choose the right growth strategy.",
      slug: "seo-vs-paid-ads",
      icon: <Search />,
    },
    {
      title: "Digital Marketing for Small Businesses",
      desc: "How small businesses can use digital marketing systems to generate leads and scale sustainably.",
      slug: "digital-marketing-for-small-business",
      icon: <PenTool />,
    },
  ];

  const handleRedirect = (slug) => {
    gsap.to(sectionRef.current, {
      opacity: 0,
      y: -30,
      duration: 0.45,
      ease: "power2.inOut",
      onComplete: () => navigate(`/blog/${slug}`),
    });
  };

  return (
    <>
      {/* ✅ BLOG PAGE SEO (VERY IMPORTANT) */}
      <Helmet>
        <title>Blog | Creative Spark – SEO, Web Design & Digital Growth</title>
        <meta
          name="description"
          content="Expert insights on SEO, web design, and digital marketing to help businesses grow, convert, and scale online."
        />
        <link rel="canonical" href="https://creativespark.in/blog/" />
      </Helmet>

      <section
        ref={sectionRef}
        className="relative py-36 bg-[#0B0B0B] text-white overflow-hidden"
      >
        {/* SOFT GOLD GLOW */}
        <div className="absolute -top-48 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#C6A75E]/15 blur-[220px]" />

        {/* DECOR ICON */}
        <Sparkles className="absolute top-24 left-20 w-12 h-12 text-[#C6A75E]/20" />

        <div className="relative max-w-7xl mx-auto px-6">
          {/* HERO */}
          <header className="blog-hero text-center max-w-4xl mx-auto mb-28">
            <p className="text-xs uppercase tracking-[0.4em] text-[#C6A75E] font-semibold mb-6">
              Insights
            </p>

            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Ideas, strategy & insights
              <br />
              <span className="text-[#C6A75E]">for digital growth</span>
            </h1>

            <p className="mt-8 text-lg text-gray-400 max-w-2xl mx-auto">
              Thoughtful perspectives on web design, SEO, and digital strategy —
              written for founders, teams, and serious brands.
            </p>
          </header>

          {/* BLOG GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
            {blogs.map((blog, i) => (
              <article
                key={blog.slug}
                ref={(el) => (cardsRef.current[i] = el)}
                className="group relative p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl hover:border-[#C6A75E]/40 transition-all duration-500"
              >
                <div className="w-14 h-14 mb-8 flex items-center justify-center rounded-2xl bg-[#C6A75E]/15 text-[#C6A75E] group-hover:scale-110 transition">
                  {blog.icon}
                </div>

                <h2 className="text-xl font-semibold leading-snug">
                  {blog.title}
                </h2>

                <p className="mt-4 text-gray-400 leading-relaxed">
                  {blog.desc}
                </p>

                <button
                  onClick={() => handleRedirect(blog.slug)}
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#C6A75E] tracking-wide"
                  aria-label={`Read ${blog.title}`}
                >
                  Read Article <ArrowUpRight size={16} />
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
