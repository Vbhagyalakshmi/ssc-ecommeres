import "./globals.css";
import { Cormorant_Garamond, Inter } from "next/font/google";

const serif = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-serif" });
const sans = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata = {
  title: "Sac Luxe — Luxury Fashion, Jewelry & Lifestyle",
  description: "Shop curated luxury fashion, bags, watches, jewelry and fragrances at Sac Luxe.",
  openGraph: {
    title: "Sac Luxe — Luxury Fashion & Lifestyle",
    description: "Curated luxury fashion, bags, watches, jewelry and fragrances.",
    type: "website",
    images: ["https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/lovp_2r3dzn1h6z8tmsrervs0s1nx03/b54d3f5b98a299be7272d9940d709c68_1791553662945.png"],
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
