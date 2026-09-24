import type { Metadata } from "next";
import localFont from "next/font/local";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "../globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const manrope = localFont({
  src: "../../public/fonts/manrope/Manrope-Variable.ttf",
  variable: "--font-manrope",
  display: "swap",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "JOVIA Foundation - Every Child. Every Ability. Every Opportunity.",
  description:
    "JOVIA Foundation (Joseph's Opportunities, Values, Inclusion & Ability) works to improve opportunities and quality of life for children and youth with disabilities and their families through education, health support, and inclusion programs globally.",
  keywords:
    "disability, children with disabilities, inclusion, accessibility, education, healthcare, family support, Canada, Cameroon, global, nonprofit, charity, JOVIA",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang={locale} className={`${manrope.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <NextIntlClientProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
