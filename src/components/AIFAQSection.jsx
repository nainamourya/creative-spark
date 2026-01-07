import { useState } from "react";
import { ChevronDown, Sparkles } from "lucide-react";

const aiFaqs = [
  {
    q: "Can AI replace web developers?",
    a: "AI can automate parts of web development, such as code generation, layout suggestions, and optimization. However, AI cannot fully replace web developers. Strategic thinking, problem-solving, architecture decisions, and understanding business goals still require human expertise. AI works best as a tool that enhances developers, not replaces them.",
  },
  {
    q: "Will AI replace people who don’t know how to use it?",
    a: "AI will not replace people directly. However, people who understand how to use AI will outperform and eventually replace those who refuse to adapt — similar to how computers changed the workforce. AI is a tool, and the advantage belongs to those who learn how to use it effectively.",
  },
  {
    q: "Is it still worth learning web development in the age of AI?",
    a: "Yes. Web development skills are more valuable than ever when combined with AI. Developers who understand fundamentals and use AI tools effectively can build faster, smarter, and more scalable systems. AI changes how development is done, not whether it is needed.",
  },
  {
    q: "Can AI-built websites rank on Google?",
    a: "AI-built websites can rank on Google if they follow SEO best practices. Ranking depends on content quality, performance, user experience, and authority — not whether AI was used. Poor-quality AI-generated websites without strategy or optimization usually fail to rank.",
  },
  {
    q: "How does AI actually help businesses grow online?",
    a: "AI helps businesses by analyzing user behavior, improving SEO research, optimizing content, automating workflows, personalizing user experiences, and identifying growth opportunities. When used correctly, AI improves efficiency and decision-making rather than replacing human strategy.",
  },
  {
    q: "What is AI automation for small businesses?",
    a: "AI automation helps small businesses reduce manual work by automating tasks like lead qualification, content planning, analytics, customer insights, and reporting. This allows small teams to operate with the efficiency of much larger organizations.",
  },
  {
    q: "Is AI-generated content bad for SEO?",
    a: "AI-generated content is not inherently bad for SEO. Google evaluates content based on usefulness, originality, and value to users. AI content that is edited, improved, and guided by human expertise can perform well, while low-quality, mass-generated content usually does not.",
  },
  {
    q: "How does Creative Spark use AI in real client projects?",
    a: "Creative Spark uses AI to enhance SEO research, content systems, performance analysis, automation workflows, and strategic planning. AI supports our process, but all decisions are guided by human expertise, business goals, and long-term growth strategy.",
  },
];

export default function AIFAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-36 bg-black text-white overflow-hidden">
      {/* GOLD AMBIENT BACKGROUND */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div className="w-[900px] h-[900px] bg-[#C6A75E]/15 blur-[260px]" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-4 text-[#C6A75E]">
            <Sparkles className="w-5 h-5" />
            <span className="text-sm uppercase tracking-[0.3em] font-semibold">
              AI & Future Tech
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold">
            AI, Automation & the Future of Digital Growth
          </h2>

          {/* <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
            Answers to the most important questions about AI, automation, and
            how modern businesses use intelligent systems to grow faster and
            smarter.
          </p> */}
          <h2 className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
            AI won’t replace people — people who know how to use AI will replace
            those who don’t, just like in the computer era.
          </h2>
        </div>

        {/* FAQ List */}
        <div className="space-y-6">
          {aiFaqs.map((item, i) => (
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
      </div>
    </section>
  );
}
