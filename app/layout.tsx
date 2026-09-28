import type { Metadata } from "next";
import SiteHeader from "@/components/layout/SiteHeader";
import Footer from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://skcne.com"),

  title: {
    default: "Shri Krishna College of Nursing Education | Baghpat",
    template: "%s | Shri Krishna College of Nursing Education",
  },

  description:
    "Shri Krishna College of Nursing Education, Baghpat, Uttar Pradesh. Explore the 2-year ANM – Auxiliary Nurse & Midwife programme, eligibility, facilities and admissions.",

  keywords: [
    "Shri Krishna College of Nursing Education",
    "SKCNE",
    "ANM College Baghpat",
    "ANM course Baghpat",
    "ANM admission Baghpat",
    "Auxiliary Nurse Midwife",
    "Nursing Education Baghpat",
    "ANM college Uttar Pradesh",
    "ANM course Uttar Pradesh",
  ],

  authors: [
    {
      name: "Shri Krishna College of Nursing Education",
    },
  ],

  creator: "Shri Krishna College of Nursing Education",

  openGraph: {
    title: "Shri Krishna College of Nursing Education",
    description:
      "Quality nursing education and ANM programme in Baghpat, Uttar Pradesh.",
    url: "https://skcne.com",
    siteName: "Shri Krishna College of Nursing Education",
    locale: "en_IN",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />

        {children}

        <Footer />
      </body>
    </html>
  );
}