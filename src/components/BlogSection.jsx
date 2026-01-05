import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const blogs = [
  {
    title: "Modern Website Design That Converts Visitors into Customers",
    desc: "How conversion-focused web design, UX psychology, and performance optimization turn visitors into leads and customers.",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200",
    tag: "Web Design",
    slug: "modern-website-design-conversion",
  },
  {
    title: "SEO & Website Performance Strategies for Higher Google Rankings",
    desc: "A practical guide to Core Web Vitals, technical SEO, and website performance optimization.",
    img: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200",
    tag: "SEO",
    slug: "seo-and-performance-strategies-2025",
  },
  {
    title: "Digital Marketing Systems That Build Strong Brands",
    desc: "How content strategy, brand positioning, and digital marketing systems drive long-term growth.",
    img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1200",
    tag: "Digital Marketing",
    slug: "digital-marketing-brand-growth",
  },
  {
    title: "Website Design Cost in India (2026): Complete Pricing Guide",
    desc: "Learn the real website design cost in India. Compare freelancer vs agency pricing, features, and what actually converts visitors into customers.",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200",
    tag: "Web Design",
    slug: "website-design-cost-in-india",
  },
  {
    title: "SEO vs Paid Ads: What Drives Better Business Growth in 2026?",
    desc: "SEO or paid ads? Discover which digital marketing strategy delivers long-term traffic, higher ROI, and sustainable growth for businesses.",
    img: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200",
    tag: "SEO",
    slug: "seo-vs-paid-ads",
  },
  {
    title: "How Digital Marketing Helps Small Businesses Scale Faster",
    desc: "A practical breakdown of digital marketing systems that help small businesses generate leads, build authority, and grow consistently.",
    img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1200",
    tag: "Digital Marketing",
    slug: "digital-marketing-for-small-business",
  },
];

// duplicate for infinite loop
const slides = [...blogs, ...blogs];

export default function BlogSection() {
  const trackRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current;
      const cards = track.children;
      const cardWidth = cards[0].offsetWidth + 32;

      gsap.set(track, { x: 0 });

      gsap.to(track, {
        x: `-=${cardWidth * blogs.length}`,
        duration: 30,
        ease: "none",
        repeat: -1,
        modifiers: {
          x: (x) => {
            const value = parseFloat(x);
            return `${value % (cardWidth * blogs.length)}px`;
          },
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* ✅ SEO SAFE (HOMEPAGE ONLY) */}
      <Helmet>
        <meta
          name="description"
          content="Explore expert insights on SEO, web design, digital marketing, and performance optimization from CreativeSpark."
        />
      </Helmet>

      <section className="py-36 bg-[#0B0B0B] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-20">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.4em] text-[#C6A75E] font-semibold">
              Insights & Resources
            </p>

            <h2 className="mt-6 text-4xl md:text-6xl font-extrabold text-white leading-tight">
              SEO, web design & digital growth
              <br />
              <span className="text-[#C6A75E]">insights from our studio</span>
            </h2>

            <p className="mt-6 text-lg text-gray-400 max-w-2xl">
              Explore expert insights on web design, SEO, digital marketing, and
              performance optimization to help businesses grow, scale, and
              compete online.
            </p>
          </div>
        </div>

        {/* SLIDER */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              ref={trackRef}
              className="flex gap-8 will-change-transform px-6"
            >
              {slides.map((blog, i) => (
                <article
                  key={i}
                  className="min-w-[320px] md:min-w-[420px] xl:min-w-[480px] bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden group hover:border-[#C6A75E]/40 transition"
                >
                  <Link to={`/blog/${blog.slug}`} className="block h-full">
                    <div className="relative h-60 overflow-hidden">
                      <img
                        src={blog.img}
                        alt={blog.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                      <span className="absolute top-5 left-5 px-4 py-1 rounded-full bg-black/70 backdrop-blur text-xs tracking-wide text-[#C6A75E]">
                        {blog.tag}
                      </span>
                    </div>

                    <div className="p-8">
                      <h3 className="text-2xl font-semibold text-white leading-snug group-hover:text-[#C6A75E] transition">
                        {blog.title}
                      </h3>

                      <p className="mt-4 text-gray-400 leading-relaxed">
                        {blog.desc}
                      </p>

                      <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-[#C6A75E]">
                        Read Article <ArrowUpRight size={16} />
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-24 text-center">
          <Link
            to="/blog"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-[#C6A75E] text-black font-semibold text-lg shadow-xl hover:scale-105 transition"
          >
            Explore All Articles <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
