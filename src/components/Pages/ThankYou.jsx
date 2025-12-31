import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import { gsap } from "gsap";

export default function ThankYou() {
  const navigate = useNavigate();
  const location = useLocation();
  const name = location.state?.name || "there";

  useEffect(() => {
    gsap.from(".thank-box", {
      y: 40,
      //   opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    const timer = setTimeout(() => {
      navigate("/");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 px-6">
      <div className="thank-box bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl p-10 text-center max-w-md w-full">
        <CheckCircle className="mx-auto w-16 h-16 text-green-500 mb-6" />

        <h1 className="text-3xl font-extrabold text-gray-900 mb-4">
          Thank You, {name} 🙌
        </h1>

        <p className="text-gray-600 text-lg leading-relaxed">
          Your message has been sent successfully. I’ll get back to you within
          24 hours.
        </p>

        <p className="mt-6 text-sm text-gray-500">
          Redirecting to home page...
        </p>
      </div>
    </section>
  );
}
