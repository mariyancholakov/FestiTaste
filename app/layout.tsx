import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "./globals.css";

const siteUrl = (() => {
  const explicitUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicitUrl) {
    return explicitUrl;
  }

  const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercelUrl) {
    return `https://${vercelUrl}`;
  }

  return "http://localhost:3000";
})();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "FestiTaste Events",
    template: "%s | FestiTaste Events",
  },
  description:
    "Открий кулинарни фестивали, гурме уикенди и специални оферти за вкусни събития в България.",
  keywords: [
    "кулинарни фестивали",
    "фестивали България",
    "гурме събития",
    "винени фестивали",
    "food festivals Bulgaria",
    "FestiTaste Events",
  ],
  applicationName: "FestiTaste Events",
  authors: [{ name: "FestiTaste Events" }],
  creator: "FestiTaste Events",
  publisher: "FestiTaste Events",
  category: "food events",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "bg_BG",
    url: siteUrl,
    siteName: "FestiTaste Events",
    title: "FestiTaste Events | Кулинарни фестивали и гурме събития в България",
    description:
      "Открий подбрани кулинарни фестивали, гурме уикенди и специални оферти за вкусни събития в България.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "FestiTaste Events",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FestiTaste Events",
    description:
      "Подбрани кулинарни фестивали, гурме събития и оферти в България.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: "faVntJPdm59C9XHbDq4S0KluB9P7RY2R9c6kzyOIMbU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "FestiTaste Events",
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    email: "hello@festitaste.bg",
    telephone: "+359 888 123 456",
    address: {
      "@type": "PostalAddress",
      streetAddress: "бул. Витоша 25",
      addressLocality: "София",
      addressCountry: "BG",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "FestiTaste Events",
    url: siteUrl,
    inLanguage: "bg",
  };

  return (
    <html lang="bg" className="h-full antialiased">
      <body className="min-h-full bg-parchment text-text-base">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <div className="flex min-h-full flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
