import { baseurl } from "../Data/Api";
import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch(`${baseurl}/blogs/get-all-blogs`);
  const blogs = await res.json();

  const baseUrl = "https://rightintake.com";

  const staticUrls = [
    {
      loc: `${baseUrl}/`,
      priority: "1.00",
      changefreq: "weekly",
    },
    {
        loc: `${baseUrl}/blog`,
        priority: "0.50",
        changefreq: "weekly",
      },
  ];

  const staticUrlXml = staticUrls
    .map(
      (url) => `<url>
  <loc>${url.loc}</loc>
  <priority>${url.priority}</priority>
  <changefreq>${url.changefreq}</changefreq>
</url>`
    )
    .join("\n");

  const blogUrls = blogs
    .map((blog: any) => {
      return `<url>
  <loc>${baseUrl}/blog/${blog.slug}</loc>
  <priority>0.70</priority>
  <changefreq>daily</changefreq>
  <lastmod>${new Date(blog.date).toISOString()}</lastmod>
</url>`;
    })
    .join("\n");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset 
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
  xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 
  http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${staticUrlXml}
${blogUrls}
</urlset>`;

  return new NextResponse(sitemap, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
