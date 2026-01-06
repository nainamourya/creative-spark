import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".footer-item", {
        y: 30,
        stagger: 0.12,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 85%",
        },
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative bg-[#0B0B0B] text-gray-400 pt-28 overflow-hidden"
    >
      {/* SOFT GOLD AMBIENT GLOW */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#C6A75E]/10 rounded-full blur-[220px]" />

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-14">
        {/* BRAND */}
        <div className="footer-item space-y-6">
          <img
            src="/img/creative-spark.png"
            alt="Creativespark Logo"
            className="h-10 w-auto object-contain"
          />
          <p className="text-sm leading-relaxed max-w-sm">
            We design and develop premium digital experiences that help brands
            grow, convert, and stand out in the modern web.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-item">
          <h4 className="text-white font-semibold mb-6">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/" className="hover:text-[#C6A75E] transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-[#C6A75E] transition">
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-[#C6A75E] transition">
                Services
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-[#C6A75E] transition">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-[#C6A75E] transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* LEGAL */}
        <div className="footer-item">
          <h4 className="text-white font-semibold mb-6">Legal</h4>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-[#C6A75E] transition cursor-pointer">
              Privacy Policy
            </li>
            <li className="hover:text-[#C6A75E] transition cursor-pointer">
              Terms of Service
            </li>
            <li className="hover:text-[#C6A75E] transition cursor-pointer">
              Cookies Policy
            </li>

            {/* ✅ AI DISCOVERY LINK */}
            <li>
              <a href="/llm.txt" className="hover:text-[#C6A75E] transition">
                I am AI
              </a>
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-item space-y-4">
          <h4 className="text-white font-semibold mb-6">Contact</h4>

          <div className="flex items-center gap-3 text-sm">
            <Mail className="w-4 h-4 text-[#C6A75E]" />
            nainam6025@gmail.com
          </div>

          <div className="flex items-center gap-3 text-sm">
            <Phone className="w-4 h-4 text-[#C6A75E]" />
            +91 9867204919
          </div>

          <div className="flex items-center gap-3 text-sm">
            <MapPin className="w-4 h-4 text-[#C6A75E]" />
            India
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="relative mt-20 border-t border-white/10 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Creativespark. All rights reserved.
      </div>
    </footer>
  );
}
