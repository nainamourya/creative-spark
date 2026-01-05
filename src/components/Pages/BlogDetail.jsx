import { useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { gsap } from "gsap";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

/* 🔹 ADD THIS (SEO DATA MAP) */
const BLOG_DATA = {
  /* EXISTING SEO BLOGS */
  "website-design-cost-in-india": {
    title: "Website Design Cost in India (2026): Complete Pricing Guide",
    description:
      "Discover the real website design cost in India. Compare freelancer vs agency pricing and learn what actually converts visitors into customers.",
    tag: "Web Design",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600",
  },

  "seo-vs-paid-ads": {
    title: "SEO vs Paid Ads: What Drives Better Business Growth in 2026?",
    description:
      "SEO or paid ads? Learn which strategy delivers higher ROI, long-term traffic, and sustainable business growth.",
    tag: "SEO",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1600",
  },

  "digital-marketing-for-small-business": {
    title: "How Digital Marketing Helps Small Businesses Scale Faster",
    description:
      "Explore proven digital marketing strategies that help small businesses generate leads and scale consistently.",
    tag: "Digital Marketing",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1600",
  },

  /* 🔹 YOUR BLOGS (JUST ADDED) */
  "modern-website-design-conversion": {
    title: "Modern Website Design That Converts Visitors into Customers",
    description:
      "Learn how conversion-focused web design, UX psychology, and performance optimization turn visitors into leads and paying customers.",
    tag: "Web Design",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600",
  },

  "seo-and-performance-strategies-2025": {
    title: "SEO & Website Performance Strategies for Higher Google Rankings",
    description:
      "A practical guide to Core Web Vitals, technical SEO, and website performance optimization for higher Google rankings.",
    tag: "SEO",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1600",
  },

  "digital-marketing-brand-growth": {
    title: "Digital Marketing Systems That Build Strong Brands",
    description:
      "Discover how content strategy, brand positioning, and digital marketing systems drive long-term brand growth.",
    tag: "Digital Marketing",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1600",
  },
};

export default function BlogDetail() {
  const { slug } = useParams();
  const pageRef = useRef(null);

  /* 🔹 ADD THIS (SAFE FALLBACK) */
  const blog = BLOG_DATA[slug];
  const title = blog?.title || slug.replace(/-/g, " ");

  useEffect(() => {
    gsap.from(pageRef.current, {
      y: 60,
      duration: 0.9,
      ease: "power3.out",
    });
  }, []);

  /* 🔹 ADD THIS (404 SAFETY) */
  if (!blog) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#0B0B0B] text-white">
        <h1 className="text-xl">Blog not found</h1>
      </main>
    );
  }

  return (
    <main
      ref={pageRef}
      className="min-h-screen bg-[#0B0B0B] text-white pt-28 pb-32"
    >
      {/* ✅ SEO META (UPDATED, SAME PLACE) */}
      <Helmet>
        <title>{blog.title} | CreativeSpark Blog</title>
        <meta name="description" content={blog.description} />
        <link rel="canonical" href={`https://creativespark.in/blog/${slug}`} />

        {/* 🔹 OPTIONAL BUT STRONG: ARTICLE SCHEMA */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: blog.title,
            description: blog.description,
            author: {
              "@type": "Organization",
              name: "CreativeSpark",
            },
            publisher: {
              "@type": "Organization",
              name: "CreativeSpark",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://creativespark.in/blog/${slug}`,
            },
          })}
        </script>
      </Helmet>

      <article className="max-w-4xl mx-auto px-6">
        {/* BACK */}
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm text-[#C6A75E] font-semibold tracking-wide mb-10"
        >
          <ArrowLeft size={16} />
          Back to Blog & Insights
        </Link>

        {/* META */}
        <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
          <span className="uppercase tracking-widest text-[#C6A75E]">
            {blog.tag}
          </span>
          <span>•</span>
          <span>{blog.readTime}</span>
        </div>

        {/* H1 */}
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          {blog.title}
        </h1>

        {/* SUBTITLE */}
        <p className="mt-6 text-lg text-gray-400 leading-relaxed">
          {blog.description}
        </p>

        {/* IMAGE */}
        <div className="mt-12 mb-16 rounded-3xl overflow-hidden border border-white/10">
          <img
            src={blog.image}
            alt={`${blog.title} – CreativeSpark Blog`}
            className="w-full h-[420px] object-cover"
            loading="lazy"
          />
        </div>

        {/* CONTENT */}
        {/* (rest of your content stays SAME) */}
      </article>
    </main>
  );
}
