import { useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { gsap } from "gsap";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ContactPage() {
  const form = useRef();
  const pageRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    gsap.from(pageRef.current, {
      y: 60,
      // opacity: 0,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    const userName = form.current.name.value;

    emailjs
      .sendForm(
        "service_hfcky1d",
        "template_vdai7cl",
        form.current,
        "DE2wkyJVM6bC5p1AH"
      )
      .then(
        () => {
          navigate("/thank-you", { state: { name: userName } });
          form.current.reset();
        },
        () => alert("Something went wrong. Please try again.")
      );
  };

  return (
    <section
      ref={pageRef}
      className="min-h-screen bg-[#0B0B0B] text-white pt-32 pb-32"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
        {/* LEFT – COPY */}
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-[#C6A75E] font-semibold">
            Contact
          </p>

          <h1 className="mt-6 text-4xl md:text-5xl font-extrabold leading-tight">
            Let’s build something
            <br />
            <span className="text-[#C6A75E]">that actually works</span>
          </h1>

          <p className="mt-8 text-lg text-gray-400 max-w-xl leading-relaxed">
            Whether you’re launching a new brand or improving an existing one,
            we help businesses design digital experiences that convert, scale,
            and last.
          </p>

          <div className="mt-12 space-y-6 text-gray-300">
            <div className="flex items-center gap-4">
              <Mail className="text-[#C6A75E]" />
              <span>nainam6025@gmail.com</span>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="text-[#C6A75E]" />
              <span>+91 7977342732</span>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="text-[#C6A75E]" />
              <span>India · Working with global clients</span>
            </div>
          </div>
        </div>

        {/* RIGHT – FORM */}
        <div className="bg-white rounded-3xl p-10 shadow-2xl text-black">
          <h2 className="text-3xl font-extrabold mb-2">Start a conversation</h2>
          <p className="text-gray-600 mb-8">
            Tell us about your project. We usually respond within 24 hours.
          </p>

          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:outline-none focus:border-[#C6A75E]"
            />

            <input
              type="email"
              name="email"
              placeholder="Email address"
              required
              className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:outline-none focus:border-[#C6A75E]"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone number"
              required
              className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:outline-none focus:border-[#C6A75E]"
            />

            <textarea
              name="message"
              rows="4"
              placeholder="Tell us about your idea, goals, or challenges"
              required
              className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:outline-none focus:border-[#C6A75E] resize-none"
            />

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#C6A75E] text-black font-semibold hover:scale-105 transition"
            >
              Send Message <ArrowUpRight />
            </button>
          </form>

          <p className="mt-6 text-sm text-gray-500 text-center">
            No spam. No pressure. Just clarity.
          </p>
        </div>
      </div>
    </section>
  );
}
