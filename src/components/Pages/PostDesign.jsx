import { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
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
    <main ref={sectionRef} className="bg-[#0B0B0B] text-white overflow-hidden">
      {/* ================= SEO META ================= */}
      <Helmet>
        <title>Content & Social Media Design Services | Creative Spark</title>
        <meta
          name="description"
          content="Professional content and social media post design services to build authority, engagement, and brand consistency."
        />
        <link
          rel="canonical"
          href="https://creativespark.in/services/post-design"
        />
      </Helmet>

      {/* ================= HERO ================= */}
      <section className="relative py-36 px-6 text-center overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#C6A75E]/15 blur-[220px]" />

        <div
          ref={(el) => (revealRefs.current[0] = el)}
          className="relative max-w-5xl mx-auto"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-[#C6A75E] font-semibold">
            Content & Social Media Design
          </p>

          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight">
            Content design that
            <br />
            <span className="text-[#C6A75E]">
              builds authority & engagement
            </span>
          </h1>

          <p className="mt-8 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            We provide content and social media post design services that align
            with your brand, communicate value clearly, and drive consistent
            audience engagement.
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
              <span className="text-[#C6A75E]">It’s brand positioning.</span>
            </h2>

            <p className="mt-8 text-lg text-gray-400 leading-relaxed max-w-xl">
              Every piece of content you publish shapes how your brand is
              perceived online. We design social media content that delivers
              clarity, consistency, and confidence.
            </p>

            <p className="mt-6 text-lg text-gray-400 leading-relaxed max-w-xl">
              No random visuals. No trend-chasing. Just strategic content design
              aligned with your business goals.
            </p>
          </div>

          <div
            ref={(el) => (revealRefs.current[2] = el)}
            className="p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl"
          >
            <Layers className="w-16 h-16 text-[#C6A75E] mb-6" />
            <p className="text-lg text-gray-300 leading-relaxed">
              We treat content as a system — visual consistency, messaging
              clarity, and brand recall across every digital platform.
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
              title: "Social Media Post Design",
              desc: "On-brand social media creatives for consistent posting.",
            },
            {
              icon: <Share2 />,
              title: "Campaign & Ad Creatives",
              desc: "Promotional, launch, and announcement designs.",
            },
            {
              icon: <TrendingUp />,
              title: "Growth-Focused Content",
              desc: "Content designed to attract, educate, and convert audiences.",
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
            Our content design workflow
          </h2>

          <div className="grid md:grid-cols-4 gap-12">
            {[
              {
                step: "01",
                title: "Research",
                desc: "Audience insights & brand tone",
              },
              {
                step: "02",
                title: "Structure",
                desc: "Layouts, formats & hierarchy",
              },
              {
                step: "03",
                title: "Design",
                desc: "Visual consistency & clarity",
              },
              {
                step: "04",
                title: "Deliver",
                desc: "Platform-ready content assets",
              },
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

      {/* ================= SEO CONTENT (MATCHED) ================= */}
      <section className="relative py-32 bg-black overflow-hidden">
        {/* gold ambient background */}
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <div className="w-[900px] h-[900px] bg-[#C6A75E]/15 blur-[260px]" />
        </div>

        <div className="relative max-w-5xl mx-auto px-6 space-y-14 text-gray-300">
          <h2 className="text-4xl font-extrabold text-[#C6A75E]">
            Social Media Post Design Services That Build Brand Visibility
          </h2>

          <p>
            Creative Spark provides professional post design services for brands
            that want to stand out across social media platforms. Our social
            media designs are created to capture attention, communicate value,
            and maintain visual consistency across every post.
          </p>

          <p>
            In today’s digital landscape, visual content plays a critical role
            in how brands are perceived. We design social media posts that align
            with your brand identity while supporting marketing goals such as
            engagement, reach, and conversions.
          </p>

          <h3 className="text-2xl font-semibold text-[#C6A75E]">
            Strategic Social Media Design, Not Just Graphics
          </h3>

          <p>
            Effective post design is not about random visuals — it is about
            clear messaging and brand consistency. Our post design process
            combines visual hierarchy, typography, and layout systems to ensure
            every design feels intentional and professional.
          </p>

          <ul className="list-disc pl-6 space-y-3">
            <li>Custom-designed social media posts</li>
            <li>
              Platform-optimized designs for Instagram, Facebook, LinkedIn, and
              more
            </li>
            <li>Consistent brand colors, typography, and visual style</li>
            <li>
              Designs aligned with marketing campaigns and content strategy
            </li>
            <li>Engaging layouts that improve visibility and interaction</li>
          </ul>

          <h3 className="text-2xl font-semibold text-[#C6A75E]">
            Post Design for Businesses, Creators & Brands
          </h3>

          <p>
            Whether you are a startup, growing business, or established brand,
            our post design services are tailored to your audience and
            objectives. We help brands maintain a professional and recognizable
            presence across social platforms.
          </p>

          <p>
            Our designs are flexible and scalable — allowing your brand to grow
            while maintaining visual consistency across daily posts, campaigns,
            and promotions.
          </p>

          <h3 className="text-2xl font-semibold text-[#C6A75E]">
            Why Choose Creative Spark for Post Design?
          </h3>

          <ul className="list-disc pl-6 space-y-3">
            <li>Brand-consistent social media design systems</li>
            <li>Custom visuals designed for engagement</li>
            <li>Platform-specific design expertise</li>
            <li>Clean, modern, and professional layouts</li>
            <li>Reliable turnaround and design support</li>
          </ul>

          <h3 className="text-2xl font-semibold text-white">
            Frequently Asked Questions
          </h3>

          <div className="space-y-6">
            {[
              {
                q: "Which platforms do you design posts for?",
                a: "We design posts for all major platforms including Instagram, Facebook, LinkedIn, Twitter (X), and other digital channels based on your requirements.",
              },
              {
                q: "Can you match my existing brand style?",
                a: "Yes. All post designs follow your brand guidelines, including colors, fonts, and visual tone, to ensure consistency across platforms.",
              },
              {
                q: "Do you offer ongoing post design support?",
                a: "Absolutely. We offer recurring post design services for brands that need consistent, high-quality social media visuals.",
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
          ref={(el) => (revealRefs.current[11] = el)}
          className="max-w-4xl mx-auto p-16 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold">
            Let’s design content
            <br />
            <span className="text-[#C6A75E]">your audience trusts</span>
          </h2>

          <p className="mt-8 text-lg text-gray-400">
            Strategic visuals, clear messaging, and consistent brand presence
            across platforms.
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
