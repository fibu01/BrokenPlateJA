import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const incomingHeaders = await headers();
  const host = incomingHeaders.get("host") ?? "brokenplatejamaica.com";
  const protocol = incomingHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const baseUrl = `${protocol}://${host}`;
  const title = "Broken Plate | Taste Life Outside the Lines";
  const description = "Bold Jamaican flavour, global curiosity and rooftop energy in Kingston. Explore the menu and reserve your table at Broken Plate.";

  return {
    metadataBase: new URL(baseUrl),
    title,
    description,
    icons: {
      icon: "/images/broken-plate-logo.png",
      apple: "/images/broken-plate-logo.png",
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: baseUrl,
      siteName: "Broken Plate Jamaica",
      images: [{ url: `${baseUrl}/og.png`, width: 1800, height: 942, alt: "Broken Plate — Taste life outside the lines" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${baseUrl}/og.png`],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
