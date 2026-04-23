import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Javaholics, Fairview",
  description:
    "A coffee shop for the people across the road. Good beans, house music, sun across the park. Fairview, Dublin.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
