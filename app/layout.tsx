import type { Metadata } from "next";
import "./globals.css";
import { CustomCursor } from "@/components/CustomCursor";
import { StructuredData } from "@/components/StructuredData";
import { getBaseUrl } from "@/lib/site";

const siteUrl = getBaseUrl();
const title = "Prestige Event Collective";
const description =
  "Sydney's Premium Event Production Specialists. Unforgettable entertainment, effortless booking.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "/",
    siteName: title,
    title,
    description,
    images: [
      {
        url: "/images/services.jpeg",
        width: 1200,
        height: 630,
        alt: "Prestige Event Collective – DJ and event entertainment in Sydney",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/services.jpeg"],
  },
  icons: {
    icon: [
      { url: "/favicon-dark.png", media: "(prefers-color-scheme: dark)" },
      { url: "/favicon-light.png", media: "(prefers-color-scheme: light)" },
      { url: "/favicon.png", sizes: "any" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteUrl}/#localbusiness`,
  name: title,
  description,
  url: siteUrl,
  areaServed: { "@type": "Place", name: "Sydney, NSW, Australia" },
  serviceType: [
    "DJ",
    "Event planning",
    "Wedding entertainment",
    "Corporate events",
    "Private events",
  ],
  image: `${siteUrl}/images/services.jpeg`,
  sameAs: [
    "https://www.instagram.com/prestigeeventcollective_/",
    "https://www.tiktok.com/@prestigeeventcollective_",
    "https://linktr.ee/prestigeeventcollective",
  ],
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: title,
  url: siteUrl,
  description,
  logo: `${siteUrl}/favicon.png`,
  sameAs: [
    "https://www.instagram.com/prestigeeventcollective_/",
    "https://www.tiktok.com/@prestigeeventcollective_",
    "https://linktr.ee/prestigeeventcollective",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <StructuredData data={[localBusinessJsonLd, organizationJsonLd]} />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
