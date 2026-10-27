import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://centinelaseguridad.com/sitemap.xml", // ⚠️ MARCADOR: dominio real del cliente
  };
}
