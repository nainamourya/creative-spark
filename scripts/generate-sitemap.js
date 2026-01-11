import { SitemapStream, streamToPromise } from "sitemap";
import fs from "fs";

const hostname = "www.creativespark.in";
const today = new Date().toISOString().split("T")[0];

const links = [
  {
    url: "/",
    priority: 1.0,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    url: "/about",
    priority: 0.8,
    changefreq: "monthly",
    lastmod: today,
  },
  {
    url: "/services/website-design",
    priority: 0.9,
    changefreq: "monthly",
    lastmod: today,
  },
  {
    url: "/services/advanced-seo",
    priority: 0.9,
    changefreq: "monthly",
    lastmod: today,
  },
  {
    url: "/services/logo-design",
    priority: 0.9,
    changefreq: "monthly",
    lastmod: today,
  },
  {
    url: "/services/post-design",
    priority: 0.9,
    changefreq: "monthly",
    lastmod: today,
  },
  {
    url: "/blog",
    priority: 0.8,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    url: "/contact",
    priority: 0.7,
    changefreq: "monthly",
    lastmod: today,
  },
];

async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname });

  links.forEach((link) => sitemap.write(link));
  sitemap.end();

  const sitemapData = await streamToPromise(sitemap);

  fs.writeFileSync("./public/sitemap.xml", sitemapData.toString());

  console.log("✅ Sitemap generated successfully at /public/sitemap.xml");
}

generateSitemap();
