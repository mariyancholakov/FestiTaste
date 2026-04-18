import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "FestiTaste Events",
    template: "%s | FestiTaste Events",
  },
  description:
    "Открий кулинарни фестивали, гурме уикенди и специални оферти за вкусни събития в България.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bg" className="h-full antialiased">
      <body className="min-h-full bg-bg text-dark-green">
        <div className="flex min-h-full flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
