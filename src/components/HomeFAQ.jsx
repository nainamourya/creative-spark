import { useState } from "react";
import { ChevronDown, Star } from "lucide-react";

const faqs = [
  {
    q: "What services does Creative Spark offer?",
    a: "Creative Spark offers website design, advanced SEO services, brand identity and logo design, and social media post design. We help businesses build a strong digital presence focused on performance, visibility, and long-term growth.",
  },
  {
    q: "How much does a website design cost?",
    a: "Website design cost depends on scope, features, and complexity. We offer custom website solutions designed around business goals, scalability, and conversion performance rather than fixed templates.",
  },
  {
    q: "How long does SEO take to show results?",
    a: "SEO is a long-term strategy. Most businesses start seeing measurable improvements within 3 to 6 months, depending on competition, website quality, and consistency of optimization efforts.",
  },
  {
    q: "Do you work with startups and small businesses?",
    a: "Yes. We work with startups, small businesses, and growing brands that want to build a strong digital foundation and scale sustainably over time.",
  },
  {
    q: "Will my website be SEO-friendly from day one?",
    a: "Absolutely. Every website we design follows SEO best practices, including clean structure, fast performance, mobile responsiveness, and optimized content hierarchy.",
  },
  {
    q: "Why choose Creative Spark over other agencies?",
    a: "We focus on strategy, clarity, and long-term value. Our work blends design, SEO, and performance to create digital systems that help businesses grow — not just look good.",
  },
  {
    q: "How do I get started with Creative Spark?",
    a: "You can get started by contacting us through our website. We’ll discuss your goals, understand your business needs, and recommend the right digital strategy for growth.",
  },
];

const testimonials = [
  {
    name: "Rahul Mehta",
    role: "Founder, StartupX",
    img: "https://i.pravatar.cc/150?img=12",
    rating: 5,
    text: "Creative Spark completely transformed our website. Clean design, strong conversions, and clear strategy.",
  },
  {
    name: "Anita Sharma",
    role: "Marketing Lead, FinCore",
    img: "https://i.pravatar.cc/150?img=32",
    rating: 5,
    text: "Their SEO and design thinking is on another level. We saw quality leads within months.",
  },
  {
    name: "Vikram Patel",
    role: "CEO, BuildPro",
    img: "https://i.pravatar.cc/150?img=45",
    rating: 4,
    text: "Professional, structured, and focused on long-term growth. Highly recommended.",
  },
];

export default function HomeFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-36 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center">
          Frequently Asked Questions
        </h2>

        <p className="mt-6 text-lg text-gray-400 text-center">
          Common questions about web design, SEO, and digital growth.
        </p>

        <div className="mt-20 grid lg:grid-cols-2 gap-20 items-start">
          {/* ================= LEFT: FAQ ================= */}
          <div className="space-y-6">
            {faqs.map((item, i) => (
              <div
                key={i}
                className="border border-white/10 rounded-2xl bg-white/5 backdrop-blur-xl"
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between gap-4 px-8 py-6 text-left"
                >
                  <span className="text-lg font-semibold">{item.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${
                      openIndex === i ? "rotate-180 text-[#C6A75E]" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    openIndex === i
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden px-8 pb-6 text-gray-400 leading-relaxed">
                    {item.a}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ================= RIGHT: TESTIMONIALS ================= */}
          <div className="relative h-[520px] overflow-hidden">
            <div className="absolute inset-0 space-y-6 animate-testimonial">
              {[...testimonials, ...testimonials].map((t, i) => (
                <div
                  key={i}
                  className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={t.img}
                      alt={t.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold">{t.name}</p>
                      <p className="text-sm text-gray-400">{t.role}</p>
                    </div>
                  </div>

                  <p className="text-gray-300 leading-relaxed mb-4">{t.text}</p>

                  <div className="flex gap-1">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star
                        key={j}
                        className="w-4 h-4 fill-[#C6A75E] text-[#C6A75E]"
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 🔁 Infinite scroll animation */}
      <style jsx>{`
        @keyframes testimonialScroll {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }
        .animate-testimonial {
          animation: testimonialScroll 18s linear infinite;
        }
      `}</style>
    </section>
  );
}
