import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { SwRegister } from "@/components/security/sw-register";
import { SITE } from "@/lib/site-config";

const display = Barlow_Condensed({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const siteUrl = "https://centinelaseguridad.com"; // ⚠️ MARCADOR: dominio real cuando el cliente lo defina

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s · ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "seguridad privada Ecuador",
    "empresa de seguridad Quito",
    "guardias de seguridad",
    "monitoreo de alarmas 24/7",
    "cámaras de seguridad CCTV",
    "control de acceso biométrico",
    "vigilancia industrial",
    "escoltas seguridad eventos",
  ],
  authors: [{ name: SITE.name }],
  creator: SITE.designerCredit.name,
  publisher: SITE.designerCredit.name,
  formatDetection: { telephone: true },
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/icons/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "es_EC",
    url: siteUrl,
    siteName: SITE.name,
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    images: [
      {
        url: "/images-security/hero.jpg",
        width: 1440,
        height: 823,
        alt: "Central de monitoreo de seguridad 24/7",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    images: ["/images-security/hero.jpg"],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: SITE.shortName,
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0F14",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

/** Datos estructurados LocalBusiness (handoff §9) */
const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE.name,
  description: SITE.description,
  image: `${siteUrl}/images-security/hero.jpg`,
  logo: `${siteUrl}/images-security/logo.jpg`,
  url: siteUrl,
  telephone: `+${SITE.whatsapp}`,
  email: SITE.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address,
    addressLocality: SITE.city,
    addressCountry: "EC",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:30",
      closes: "17:30",
    },
  ],
  sameAs: [SITE.social.facebook, SITE.social.linkedin].filter((s) => s !== "#"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-EC" suppressHydrationWarning>
      <body
        className={`${display.variable} ${body.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
        <SwRegister />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </body>
    </html>
  );
}
