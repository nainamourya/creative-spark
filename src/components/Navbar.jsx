import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/creative-spark-nav.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const services = [
    { name: "Website Design", path: "/services/website-design" },
    { name: "Advanced SEO", path: "/services/advanced-seo" },
    { name: "Logo Design", path: "/services/logo-design" },
    { name: "Post Design", path: "/services/post-design" },
  ];

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* LOGO */}
          {/* LOGO */}
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="CreativeSpark Logo"
              className="h-8 md:h-10 w-auto object-contain hover:scale-105 transition-transform"
            />
          </Link>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex items-center gap-10 text-gray-300 font-medium">
            {navItems.map((item) => (
              <li key={item.name} className="relative group">
                <Link
                  to={item.path}
                  className="group-hover:text-[#C6A75E] transition"
                >
                  {item.name}
                </Link>
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#C6A75E] transition-all duration-300 group-hover:w-full" />
              </li>
            ))}

            {/* SERVICES DROPDOWN */}
            <li className="relative group flex items-center gap-1 cursor-pointer">
              <span className="group-hover:text-[#C6A75E] transition">
                Services
              </span>
              <ChevronDown
                size={16}
                className="transition-transform duration-300 group-hover:rotate-180"
              />

              <div className="absolute left-0 top-full mt-4 w-64 rounded-2xl bg-black/90 backdrop-blur-xl shadow-2xl border border-white/10 p-5 grid gap-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                {services.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="flex items-center justify-between text-gray-300 hover:text-[#C6A75E] transition font-medium"
                  >
                    {item.name}
                    <span className="text-xs opacity-50">→</span>
                  </Link>
                ))}
              </div>
            </li>
          </ul>

          {/* CTA BUTTON */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="relative px-6 py-2.5 rounded-full bg-[#C6A75E] text-black font-semibold shadow-lg hover:bg-[#d8ba6a] transition"
            >
              Get Started
              <span className="absolute inset-0 rounded-full blur-lg bg-[#C6A75E]/40 -z-10"></span>
            </Link>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-gray-200"
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl md:hidden">
          <div className="p-6 flex justify-between items-center border-b border-white/10">
            <Link to="/" onClick={() => setOpen(false)}>
              <img src={logo} alt="Creativespark Logo" className="h-8 w-auto" />
            </Link>
            <button onClick={() => setOpen(false)} className="text-gray-200">
              <X size={28} />
            </button>
          </div>

          <ul className="flex flex-col p-8 gap-6 text-lg text-gray-300 font-medium">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className="hover:text-[#C6A75E] transition"
                >
                  {item.name}
                </Link>
              </li>
            ))}

            {/* Mobile Services */}
            <li className="mt-2">
              <span className="font-semibold text-white">Services</span>
              <div className="mt-3 ml-3 flex flex-col gap-3 text-gray-400">
                {services.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className="hover:text-[#C6A75E] transition"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </li>

            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-10 px-6 py-3 rounded-full bg-[#C6A75E] text-black font-semibold shadow-lg text-center"
            >
              Get Started
            </Link>
          </ul>
        </div>
      )}
    </>
  );
}
