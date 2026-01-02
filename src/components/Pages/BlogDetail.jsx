import { useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { gsap } from "gsap";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export default function BlogDetail() {
  const { slug } = useParams();
  const pageRef = useRef(null);

  useEffect(() => {
    gsap.from(pageRef.current, {
      y: 60,
      // opacity: 0,
      duration: 0.9,
      ease: "power3.out",
    });
  }, []);

  const title = slug.replace(/-/g, " ");

  return (
    <main
      ref={pageRef}
      className="min-h-screen bg-[#0B0B0B] text-white pt-28 pb-32"
    >
      <article className="max-w-4xl mx-auto px-6">
        {/* BACK */}
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm text-[#C6A75E] font-semibold tracking-wide mb-10"
        >
          <ArrowLeft size={16} />
          Back to Insights
        </Link>

        {/* META */}
        <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
          <span className="uppercase tracking-widest text-[#C6A75E]">
            Strategy
          </span>
          <span>•</span>
          <span>8 min read</span>
        </div>

        {/* TITLE */}
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight capitalize">
          {title}
        </h1>

        {/* SUBTITLE */}
        <p className="mt-6 text-lg text-gray-400 leading-relaxed">
          A practical breakdown of modern strategies, design thinking, and
          execution frameworks used by high-performing digital brands.
        </p>

        {/* HERO IMAGE */}
        <div className="mt-12 mb-16 rounded-3xl overflow-hidden border border-white/10">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600"
            alt={title}
            className="w-full h-[420px] object-cover"
          />
        </div>

        {/* CONTENT */}
        <div className="space-y-10 text-gray-300 leading-relaxed text-lg">
          <p>
            In today’s competitive digital landscape, having a website or online
            presence is no longer enough. What separates average brands from
            high-performing ones is clarity — clarity in messaging, design, and
            strategy.
          </p>

          <p>
            Modern digital experiences must be intentional. Every layout
            decision, every word, and every interaction should guide users
            toward understanding your value and taking action.
          </p>

          <h2 className="text-2xl font-bold text-white mt-14">
            Design with purpose, not trends
          </h2>

          <p>
            Chasing trends leads to short-term results. Brands that scale focus
            on timeless design principles — hierarchy, spacing, readability, and
            consistency.
          </p>

          {/* QUOTE */}
          <blockquote className="border-l-4 border-[#C6A75E] pl-6 py-4 text-xl text-white font-medium bg-white/5 rounded-xl">
            “Design is not how it looks. Design is how it works.”
          </blockquote>

          <p>
            When design and strategy align, digital platforms stop being
            brochures and start becoming growth systems.
          </p>

          <h2 className="text-2xl font-bold text-white mt-14">
            Turning content into conversion
          </h2>

          <p>
            Content must educate, build trust, and reduce friction. The most
            effective brands don’t shout — they guide.
          </p>

          <p>
            Whether it’s SEO, landing pages, or blog content, success comes from
            understanding intent and delivering value consistently.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-24 p-12 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl text-center">
          <h3 className="text-3xl font-extrabold">
            Want strategy like this for your brand?
          </h3>

          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            We help businesses design digital systems that attract the right
            audience and convert consistently.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-3 mt-8 px-10 py-4 rounded-full bg-[#C6A75E] text-black font-semibold hover:scale-105 transition"
          >
            Start a Project <ArrowUpRight />
          </Link>
        </div>
      </article>
    </main>
  );
}
