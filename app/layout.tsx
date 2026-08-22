import type { Metadata } from "next";
import "./globals.css";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://broken-plate-jamaica.barryu-teams-9179.chatgpt.site";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const title = "Broken Plate | Taste Life Outside the Lines";
const description = "Bold Jamaican flavour, global curiosity and rooftop energy in Kingston. Explore the menu and reserve your table at Broken Plate.";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title,
  description,
  icons: {
    icon: `${basePath}/images/broken-plate-logo.png`,
    apple: `${basePath}/images/broken-plate-logo.png`,
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

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
