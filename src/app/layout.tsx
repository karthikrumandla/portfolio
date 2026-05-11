import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/layouts/Navigation";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Karthik - Senior Full Stack Engineer | MERN Stack Expert",
  description: "9+ years of experience building scalable MERN applications, cloud-native systems, enterprise CRM platforms, and omni-channel communication solutions.",
  keywords: ["Full Stack Engineer", "MERN Stack", "React", "Node.js", "AWS", "TypeScript", "Portfolio"],
  authors: [{ name: "Karthik" }],
  openGraph: {
    title: "Karthik - Senior Full Stack Engineer",
    description: "Senior Full Stack Engineer specializing in scalable MERN applications and cloud-native systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <Navigation />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}