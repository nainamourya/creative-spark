import { Sparkles, Target, Users, Rocket } from "lucide-react";
import { Helmet } from "react-helmet-async";

export default function About() {
  return (
    <main className="pt-32 pb-28 bg-[#0B0B0B] text-white overflow-hidden">
      {/* ✅ SEO META */}
      <Helmet>
        <title>About Creative Spark | Web Design & SEO Agency</title>
        <meta
          name="description"
          content="Learn about Creative Spark, a web design and SEO agency focused on building premium websites, strong brands, and growth-driven digital systems."
        />
        <link rel="canonical" href="https://creativespark.in/about" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-6">
        {/* HERO */}
        <section className="max-w-4xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-[#C6A75E] font-semibold">
            About Creative Spark
          </p>

          {/* ✅ SEO-STRONG H1 */}
          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight">
            A web design & SEO agency
            <br />
            <span className="text-[#C6A75E]">
              building digital experiences that perform
            </span>
          </h1>

          <p className="mt-8 text-lg md:text-xl text-gray-400 leading-relaxed">
            Creative Spark is a web design and SEO agency focused on creating
            premium websites, strong brand identities, and growth-driven digital
            systems that help businesses stand out, rank higher, and scale
            confidently.
          </p>
        </section>

        {/* STATS */}
        <section className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {[
            { value: "100+", label: "Projects Delivered" },
            { value: "50+", label: "Happy Clients" },
            { value: "5+", label: "Years Experience" },
            { value: "24/7", label: "Client Support" },
          ].map((item, i) => (
            <div
              key={i}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl"
            >
              <p className="text-4xl font-extrabold text-[#C6A75E]">
                {item.value}
              </p>
              <p className="mt-3 text-sm tracking-wide text-gray-400">
                {item.label}
              </p>
            </div>
          ))}
        </section>

        {/* STORY + VALUES */}
        <section className="mt-32 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* LEFT – STORY */}
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
              Who we are
            </h2>

            <p className="mt-8 text-lg text-gray-400 leading-relaxed">
              We help businesses move beyond average. Our work blends strategy,
              web design, SEO, and modern development to build digital
              experiences that feel premium, convert visitors, and scale with
              growth.
            </p>

            <p className="mt-6 text-lg text-gray-400 leading-relaxed">
              We don’t chase trends. We focus on clarity, performance, and
              long-term value — delivering websites and digital systems that
              make brands look confident, credible, and trustworthy.
            </p>
          </div>

          {/* RIGHT – VALUES */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              {
                icon: <Target />,
                title: "Our Mission",
                desc: "To help businesses grow with clarity-driven web design, SEO, and digital solutions.",
              },
              {
                icon: <Rocket />,
                title: "Our Vision",
                desc: "To become a trusted digital partner for growing and premium brands worldwide.",
              },
              {
                icon: <Users />,
                title: "Our Team",
                desc: "Designers and developers focused on quality, performance, and detail.",
              },
              {
                icon: <Sparkles />,
                title: "Our Values",
                desc: "Craft, trust, consistency, transparency, and long-term thinking.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl hover:border-[#C6A75E]/40 transition"
              >
                <div className="w-12 h-12 mb-6 rounded-xl flex items-center justify-center bg-[#C6A75E]/15 text-[#C6A75E]">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
        {/* ================= ABOUT SEO CONTENT ================= */}
        <section className="mt-36 bg-black text-gray-300">
          <div className="max-w-5xl mx-auto px-6 space-y-12">
            <h2 className="text-4xl font-extrabold text-[#C6A75E]">
              A Digital Agency Built on Strategy, Performance & Trust
            </h2>

            <p>
              Creative Spark was founded with a simple belief — digital
              experiences should do more than look good. They should perform,
              convert, and support long-term business growth. As a web design
              and SEO agency, we help brands build clarity in how they present
              themselves online.
            </p>

            <p>
              Our work sits at the intersection of design, technology, and
              strategy. Every website, brand identity, and digital system we
              create is designed with intent — aligning business goals with user
              experience and search visibility.
            </p>

            <h3 className="text-2xl font-semibold text-[#C6A75E]">
              Our Approach to Web Design & SEO
            </h3>

            <p>
              We don’t believe in one-size-fits-all solutions. Every project
              starts with understanding the business, the audience, and the
              competitive landscape. This allows us to design digital
              experiences that feel purposeful and scalable.
            </p>

            <ul className="list-disc pl-6 space-y-3">
              <li>Strategy-first planning before design or development</li>
              <li>User-focused web design with clear conversion paths</li>
              <li>SEO-ready structure built for long-term visibility</li>
              <li>Clean, performance-optimized development</li>
              <li>Consistent brand systems across digital touchpoints</li>
            </ul>

            <h3 className="text-2xl font-semibold text-[#C6A75E]">
              Who We Work With
            </h3>

            <p>
              We work with startups, growing businesses, and established brands
              that value clarity, quality, and sustainable growth. Our clients
              come to us when they want more than just a website — they want a
              digital foundation that supports their business vision.
            </p>

            <p>
              Whether it’s launching a new brand, redesigning an existing
              website, or improving search visibility, we collaborate closely
              with clients to deliver results that feel intentional and
              measurable.
            </p>

            <h3 className="text-2xl font-semibold text-[#C6A75E]">
              Why Clients Choose Creative Spark
            </h3>

            <ul className="list-disc pl-6 space-y-3">
              <li>Clear communication and transparent process</li>
              <li>Focus on long-term value, not short-term trends</li>
              <li>Attention to detail in design and execution</li>
              <li>SEO and performance built into every project</li>
              <li>Partnership mindset, not vendor relationship</li>
            </ul>

            <h3 className="text-2xl font-semibold text-[#C6A75E]">
              Our Commitment
            </h3>

            <p>
              We are committed to building digital experiences that our clients
              can trust and grow with. Every project is approached with care,
              consistency, and respect for the brand we are representing.
            </p>

            <p>
              At Creative Spark, success is measured not just by visuals or
              rankings, but by the confidence our clients feel in their digital
              presence.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-36 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Let’s build something
            <span className="text-[#C6A75E]"> remarkable</span>
          </h2>

          <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
            Ready to grow your business with a premium website and SEO-focused
            digital strategy? Let’s work together.
          </p>

          <a
            href="/contact"
            className="inline-flex mt-10 px-10 py-4 rounded-full bg-[#C6A75E] text-black font-semibold text-lg shadow-xl hover:scale-105 transition"
          >
            Start Your Project
          </a>
        </section>
      </div>
    </main>
  );
}
