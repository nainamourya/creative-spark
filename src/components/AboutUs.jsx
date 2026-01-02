import { useEffect, useRef } from "react";
import { Sparkles, Target, Layers, Code2 } from "lucide-react";
import { gsap } from "gsap";

export default function AboutUs() {
  const sectionRef = useRef(null);
  const itemRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(itemRefs.current, {
        y: 40,
        stagger: 0.15,
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

  return (
    <>
      {/* ABOUT SECTION */}
      <section
        ref={sectionRef}
        className="relative py-32 bg-[#0B0B0B] text-white overflow-hidden"
      >
        {/* Soft luxury gold glows */}
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#C6A75E]/20 rounded-full blur-[180px]" />
        <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-[#C6A75E]/10 rounded-full blur-[180px]" />

        <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* LEFT – STORY */}
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[#C6A75E] font-semibold">
              About Us
            </p>

            <h2 className="mt-6 text-4xl md:text-5xl font-extrabold leading-tight">
              We craft digital experiences
              <br />
              that <span className="text-[#C6A75E]">feel premium</span> and
              perform.
            </h2>

            <p className="mt-8 text-lg text-gray-400 max-w-xl leading-relaxed">
              Creativespark is a digital studio focused on building brands that
              stand out. We combine strategy, design, and modern technology to
              create websites that don’t just look good — they convert, scale,
              and last.
            </p>

            <p className="mt-6 text-lg text-gray-400 max-w-xl leading-relaxed">
              Every project starts with clarity and ends with measurable impact.
              No shortcuts. No templates. Just thoughtful execution.
            </p>
          </div>

          {/* RIGHT – VALUE BLOCKS */}
          <div className="grid gap-10">
            <ValueCard
              refEl={(el) => (itemRefs.current[0] = el)}
              icon={<Sparkles size={26} />}
              title="Design with intention"
              text="Minimal, timeless interfaces crafted to build trust and guide users toward action."
            />

            <ValueCard
              refEl={(el) => (itemRefs.current[1] = el)}
              icon={<Target size={26} />}
              title="Strategy-led thinking"
              text="Every design decision is aligned with business goals, not trends."
            />

            <ValueCard
              refEl={(el) => (itemRefs.current[2] = el)}
              icon={<Code2 size={26} />}
              title="Modern development"
              text="Fast, scalable, and future-ready builds using modern web technologies."
            />

            <ValueCard
              refEl={(el) => (itemRefs.current[3] = el)}
              icon={<Layers size={26} />}
              title="Built to scale"
              text="Systems, layouts, and code that grow seamlessly with your brand."
            />
          </div>
        </div>
      </section>

      {/* IMPACT STRIP */}
      <section className="bg-black py-28 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.35em] text-[#C6A75E] mb-12 font-semibold">
            Selected Impact
          </p>

          <div className="grid md:grid-cols-3 gap-16">
            {[
              {
                title: "Luxury Restaurant Brand",
                result: "68% increase in online orders",
              },
              {
                title: "SaaS Startup Platform",
                result: "3× higher conversion rate",
              },
              {
                title: "E-commerce Brand",
                result: "42% revenue growth in 90 days",
              },
            ].map((item, i) => (
              <div key={i}>
                <div className="h-[2px] w-12 bg-[#C6A75E] mb-6" />
                <h3 className="text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-gray-400">{item.result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

/* VALUE CARD */
const ValueCard = ({ icon, title, text, refEl }) => (
  <div
    ref={refEl}
    className="flex items-start gap-5 p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-[#C6A75E]/40 transition"
  >
    <div className="p-3 rounded-xl bg-[#C6A75E]/15 text-[#C6A75E]">{icon}</div>
    <div>
      <h4 className="text-lg font-semibold text-white">{title}</h4>
      <p className="mt-2 text-gray-400 leading-relaxed">{text}</p>
    </div>
  </div>
);
