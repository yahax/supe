import type { MetadataRoute } from "next";

const locales = ["fr", "ar"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://winbox.ma";
  const routes = ["", "/services", "/realisations", "/a-propos", "/contact"];

  return locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${baseUrl}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.8
    }))
  );
}
