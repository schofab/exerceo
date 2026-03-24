import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/tableau-de-bord/",
          "/session/",
          "/enfant/",
          "/succes/",
          "/collection/",
          "/inscription",
          "/connexion",
        ],
      },
    ],
    sitemap: "https://mixarto.com/sitemap.xml",
  }
}
