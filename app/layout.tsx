import type { Metadata, Viewport } from "next";
import { MobileNav } from "@/components/mobile-nav";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Javaholics, Fairview",
    template: "%s · Javaholics",
  },
  description:
    "A coffee shop for the people across the road. Good beans, house music, sun across the park. Fairview, Dublin.",
  metadataBase: new URL("https://javaholics.ie"),
  openGraph: {
    title: "Javaholics, Fairview",
    description:
      "Good beans, house music, sun across the park. A coffee shop for the people across the road.",
    type: "website",
    locale: "en_IE",
  },
};

export const viewport: Viewport = {
  themeColor: "#0A1220",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <MobileNav />
      </body>
    </html>
  );
}
