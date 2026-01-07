import { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import CTASection from "./components/CTASection";
import BlogSection from "./components/BlogSection";
import About from "./components/Pages/About";
import WhatsAppButton from "./components/WhatsAppButton";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet-async"; // ✅ FIX ADDED

import WebsiteDesign from "./components/Pages/WebsiteDesign";
import AdvancedSEO from "./components/Pages/AdvancedSEO";
import LogoDesign from "./components/Pages/LogoDesign";
import PostDesign from "./components/Pages/PostDesign";
import BlogPage from "./components/Pages/BlogPage";
import BlogDetail from "./components/Pages/BlogDetail";
import ContactPage from "./components/Pages/ContactPage";
import ThankYou from "./components/Pages/ThankYou";
import HomeFAQ from "./components/HomeFAQ";
import AIFAQSection from "./components/AIFAQSection";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Navbar />

      <Routes>
        {/* ✅ HOME PAGE */}
        <Route
          path="/"
          element={
            <>
              {/* ✅ HOME SEO */}
              <Helmet>
                <title>
                  Creative Spark – Web Design, SEO & Branding Agency
                </title>
                <meta
                  name="description"
                  content="Creative Spark is a premium web design and SEO agency helping brands grow with high-performance websites and digital strategy."
                />
                <link rel="canonical" href="https://creativespark.in/" />
              </Helmet>

              <Hero />
              <AboutUs />
              <Services />
              <CTASection />
              <BlogSection />
            </>
          }
        />

        {/* ✅ PAGES */}
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/thank-you" element={<ThankYou />} />

        {/* ✅ SERVICES */}
        <Route path="/services/website-design" element={<WebsiteDesign />} />
        <Route path="/services/advanced-seo" element={<AdvancedSEO />} />
        <Route path="/services/logo-design" element={<LogoDesign />} />
        <Route path="/services/post-design" element={<PostDesign />} />
      </Routes>
      <AIFAQSection />
      <HomeFAQ />
      <Footer />

      {/* ✅ GLOBAL WHATSAPP BUTTON */}
      <WhatsAppButton />
    </Router>
  );
}

export default App;
