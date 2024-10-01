import type { APIRoute } from "astro";

const getRobotsTxt = (sitemapURL: URL) => `
User-agent: *
Allow: /

Sitemap: ${sitemapURL.href}
`;

export const GET: APIRoute = async ({ site }) => {
  const sitemapURL = new URL("sitemap.xml", site);
  try {
    return new Response(getRobotsTxt(sitemapURL));
  } catch (error) {
    console.error(error);
    return new Response("Error generating robots.txt", { status: 500 });
  }
};