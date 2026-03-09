import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Iván Chocrón",
  description: "Speaker & Healing Coach — Bridging the gap between science and spirit",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <head />
      <body className="min-h-screen flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}
