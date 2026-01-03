import { useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { gsap } from "gsap";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export default function BlogDetail() {
  const { slug } = useParams();
  const pageRef = useRef(null);

  const title = slug.replace(/-/g, " ");

  useEffect(() => {
    gsap.from(pageRef.current, {
      y: 60,
      duration: 0.9,
      ease: "power3.out",
    });
  }, []);

  return (
    <main
      ref={pageRef}
      className="min-h-screen bg-[#0B0B0B] text-white pt-28 pb-32"
    >
      {/* ✅ SEO META (CORRECT PLACE) */}
      <Helmet>
        <title>{title} | Creative Spark Blog</title>
        <meta
          name="description"
          content={`Learn ${title} with practical SEO, web design, and digital strategy insights from Creative Spark.`}
        />
        <link rel="canonical" href={`https://creativespark.in/blog/${slug}`} />
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
            Digital Strategy
          </span>
          <span>•</span>
          <span>8 min read</span>
        </div>

        {/* H1 */}
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight capitalize">
          {title}
        </h1>

        {/* SUBTITLE */}
        <p className="mt-6 text-lg text-gray-400 leading-relaxed">
          A practical breakdown of modern SEO, web design principles, and
          digital strategies used by high-performing brands to grow online.
        </p>

        {/* IMAGE */}
        <div className="mt-12 mb-16 rounded-3xl overflow-hidden border border-white/10">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600"
            alt={`${title} – SEO and web design insights`}
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
