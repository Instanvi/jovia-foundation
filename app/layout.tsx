import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const manrope = localFont({
  src: "../public/fonts/manrope/Manrope-Variable.ttf",
  variable: "--font-manrope",
  display: "swap",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "JOVIA Foundation - Every Child. Every Ability. Every Opportunity.",
  description: "JOVIA Foundation (Joseph's Opportunities, Values, Inclusion & Ability) works to improve opportunities and quality of life for children and youth with disabilities and their families through education, health support, and inclusion programs in Canada and Cameroon.",
  keywords: "disability, children with disabilities, inclusion, accessibility, education, healthcare, family support, Canada, Cameroon, nonprofit, charity, JOVIA",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${manrope.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
