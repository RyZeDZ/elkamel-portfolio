import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules:
      process.env.NODE_ENV === "production"
        ? { userAgent: "*", allow: "/" }
        : { userAgent: "*", disallow: "/" },
    sitemap: "https://elkamel.dev/sitemap.xml",
  };
}
