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
import { Helmet } from "react-helmet-async";

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
        {/* ================= HOME PAGE ================= */}
        <Route
          path="/"
          element={
            <>
              <Helmet>
                {/* ===== BASIC SEO ===== */}
                <title>
                  Creative Spark – Web Design, SEO & Branding Agency for Growing
                  Businesses
                </title>

                <meta
                  name="description"
                  content="Creative Spark is a web design, SEO, and branding agency helping businesses build high-converting websites, improve search visibility, and scale digitally."
                />

                <meta name="robots" content="index, follow" />
                <meta name="googlebot" content="index, follow" />

                <meta
                  name="google-site-verification"
                  content="oVo_cqmzL9j9lq-TNDOCVezfi9GbgXPO3cwB4RsEB6s"
                />

                <link rel="canonical" href="www.creativespark.in/" />

                {/* ===== FAQ SCHEMA (HOME PAGE) ===== */}
                <script type="application/ld+json">
                  {`
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Will AI replace web developers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AI will not replace skilled web developers, but it will change how they work. AI can automate repetitive tasks, while developers focus on strategy, architecture, performance, and business logic."
      }
    },
    {
      "@type": "Question",
      "name": "Will AI replace human jobs in web development?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AI may replace low-skill, repetitive tasks, but it cannot replace human creativity, problem-solving, and strategic thinking required for scalable and high-performing websites."
      }
    },
    {
      "@type": "Question",
      "name": "Can AI build a complete website without a developer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AI can generate basic websites, but professional websites still require human developers for customization, security, performance optimization, SEO, and business alignment."
      }
    },
    {
      "@type": "Question",
      "name": "Is AI better than human web developers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AI is a powerful assistant, not a replacement. The best results come from combining AI efficiency with human expertise, experience, and strategic decision-making."
      }
    },
    {
      "@type": "Question",
      "name": "How will AI change the future of web development?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AI will accelerate development workflows, improve personalization, enhance SEO analysis, and automate testing, while human developers guide strategy and innovation."
      }
    }
  ]
}
`}
                </script>
              </Helmet>

              <Hero />
              <AboutUs />
              <Services />
              <CTASection />
              <BlogSection />
              <AIFAQSection />
              <HomeFAQ />
            </>
          }
        />

        {/* ================= OTHER PAGES ================= */}
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/thank-you" element={<ThankYou />} />

        {/* ================= SERVICES ================= */}
        <Route path="/services/website-design" element={<WebsiteDesign />} />
        <Route path="/services/advanced-seo" element={<AdvancedSEO />} />
        <Route path="/services/logo-design" element={<LogoDesign />} />
        <Route path="/services/post-design" element={<PostDesign />} />
      </Routes>

      <Footer />
      <WhatsAppButton />
    </Router>
  );
}

export default App;
