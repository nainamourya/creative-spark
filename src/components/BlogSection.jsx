import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const blogs = [
  {
    title: "Modern Website Design That Converts Visitors into Customers",
    desc: "Learn how modern UI/UX design, responsive layouts, and conversion-focused website design help businesses increase leads and sales.",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200",
    tag: "Web Design",
    slug: "modern-website-design-conversion",
  },
  {
    title: "SEO & Website Performance Strategies for Higher Google Rankings",
    desc: "Discover practical SEO strategies, Core Web Vitals optimization, and website performance techniques to rank higher on Google in 2025.",
    img: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200",
    tag: "SEO Optimization",
    slug: "seo-and-performance-strategies-2025",
  },
  {
    title: "Digital Marketing Strategies to Build Strong Online Brands",
    desc: "Explore proven digital marketing strategies including content marketing, social media growth, and brand positioning for long-term success.",
    img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1200",
    tag: "Digital Marketing",
    slug: "digital-marketing-brand-growth",
  },
];

export default function BlogSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".blog-card");

      gsap.fromTo(
        cards,
        { y: 80, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-b from-indigo-50 via-white to-indigo-100 overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-indigo-100 text-indigo-600 text-sm font-medium mb-4">
            <Sparkles size={16} /> Blog & Insights
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Web Design, SEO & Digital Marketing Insights
          </h2>
          <p className="mt-4 text-gray-600">
            Read expert insights on modern website design, SEO optimization,
            React development, and digital marketing strategies that help
            businesses grow online.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, i) => (
            <article
              key={i}
              className="blog-card group flex flex-col h-full rounded-3xl overflow-hidden bg-white/70 backdrop-blur-xl border border-white/40 shadow-lg hover:shadow-2xl transition-all"
            >
              <Link
                to={`/blog/${blog.slug}`}
                className="flex flex-col h-full"
                aria-label={blog.title}
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={blog.img}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 text-xs font-semibold text-indigo-600">
                    {blog.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-indigo-600 transition line-clamp-2">
                    {blog.title}
                  </h3>

                  <p className="mt-3 text-gray-600 text-sm line-clamp-3">
                    {blog.desc}
                  </p>

                  {/* CTA pinned to bottom */}
                  <div className="mt-auto pt-6 flex items-center justify-between">
                    <span className="text-sm font-medium text-indigo-600">
                      Read Full Article
                    </span>
                    <ArrowUpRight className="w-5 h-5 text-indigo-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-indigo-600 text-white font-semibold shadow-lg hover:bg-indigo-700 hover:shadow-xl transition"
          >
            Explore All Blog Articles <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
