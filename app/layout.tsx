import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Advait Awasthi — Computer Science & Cybersecurity",
  description:
    "Personal portfolio of Advait Awasthi. Computer Science student exploring cybersecurity, intelligent systems, and technology that solves real problems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="relative min-h-screen overflow-x-hidden text-[#191B1F]">
        {/* Fixed Ambient Background Gradient Canvas */}
        <div
          className="pointer-events-none fixed inset-0 -z-10 h-full w-full"
          style={{
            backgroundColor: "#FAF8F5",
            backgroundImage: `
              radial-gradient(ellipse 90% 85% at 92% 10%, rgba(197, 221, 244, 0.95) 0%, rgba(220, 234, 248, 0.85) 35%, rgba(220, 234, 248, 0.45) 60%, transparent 82%),
              radial-gradient(ellipse 90% 85% at 6% 90%, rgba(240, 208, 180, 0.90) 0%, rgba(245, 223, 202, 0.80) 35%, rgba(245, 223, 202, 0.40) 60%, transparent 82%)
            `,
          }}
          aria-hidden="true"
        />

        {children}
      </body>
    </html>
  );
}
