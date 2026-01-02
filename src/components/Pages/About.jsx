import { Sparkles, Target, Users, Rocket } from "lucide-react";

export default function About() {
  return (
    <main className="pt-32 pb-28 bg-[#0B0B0B] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* HERO */}
        <section className="max-w-4xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-[#C6A75E] font-semibold">
            About Us
          </p>

          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight">
            Building digital experiences
            <br />
            <span className="text-[#C6A75E]">designed to perform</span>
          </h1>

          <p className="mt-8 text-lg md:text-xl text-gray-400 leading-relaxed">
            We are a digital studio focused on creating premium websites, strong
            brand identities, and growth-driven digital systems that help
            businesses stand out and scale confidently.
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
              We help brands move beyond average. Our work blends strategy,
              design, and technology to build digital experiences that feel
              premium, convert visitors, and scale with growth.
            </p>

            <p className="mt-6 text-lg text-gray-400 leading-relaxed">
              We don’t chase trends. We focus on clarity, performance, and long-
              term value — delivering work that makes brands look confident,
              credible, and trustworthy.
            </p>
          </div>

          {/* RIGHT – VALUES */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              {
                icon: <Target />,
                title: "Our Mission",
                desc: "Help businesses grow with clarity-driven digital solutions.",
              },
              {
                icon: <Rocket />,
                title: "Our Vision",
                desc: "To become a trusted digital partner for premium brands.",
              },
              {
                icon: <Users />,
                title: "Our Team",
                desc: "Designers & developers focused on quality and detail.",
              },
              {
                icon: <Sparkles />,
                title: "Our Values",
                desc: "Craft, trust, consistency, and long-term thinking.",
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

        {/* CTA */}
        <section className="mt-36 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Let’s build something
            <span className="text-[#C6A75E]"> remarkable</span>
          </h2>

          <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
            Ready to elevate your brand with a premium website and a strong
            digital presence? Let’s work together.
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
