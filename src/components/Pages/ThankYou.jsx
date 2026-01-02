import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import { gsap } from "gsap";

export default function ThankYou() {
  const navigate = useNavigate();
  const location = useLocation();
  const name = location.state?.name || "there";

  useEffect(() => {
    gsap.from(".thank-card", {
      y: 50,
      // opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    const timer = setTimeout(() => {
      navigate("/");
    }, 6000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#0B0B0B] px-6">
      <div className="thank-card relative bg-white rounded-3xl shadow-2xl p-12 text-center max-w-md w-full">
        {/* ICON */}
        <div className="mx-auto mb-8 w-16 h-16 flex items-center justify-center rounded-full bg-[#C6A75E]/20">
          <CheckCircle className="w-10 h-10 text-[#C6A75E]" />
        </div>

        {/* TITLE */}
        <h1 className="text-3xl font-extrabold text-gray-900 mb-4">
          Thank you, {name}
        </h1>

        {/* MESSAGE */}
        <p className="text-gray-600 text-lg leading-relaxed">
          Your message has been received successfully.
          <br />
          We’ll review your request and get back to you within{" "}
          <span className="font-semibold text-gray-900">24 hours</span>.
        </p>

        {/* TRUST LINE */}
        <p className="mt-6 text-sm text-gray-500">
          You’re in good hands — we only take on projects we can truly elevate.
        </p>

        {/* DIVIDER */}
        <div className="my-8 h-px w-full bg-gray-200" />

        {/* REDIRECT INFO */}
        <p className="text-sm text-gray-500">
          Redirecting you to the homepage…
        </p>
      </div>
    </section>
  );
}
