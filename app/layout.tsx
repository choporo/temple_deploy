import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import localFont from "next/font/local";
import Providers from "./providers";
import Footer from "@/components/footer/Footer";
import Container from "@/components/global/Container";
import { ClerkProvider } from "@clerk/nextjs";
import { GoogleAdSense } from "@/components/home/GoogleAdSence";
import GoogleAnalytics from "@/lib/GoogleAnaytics";
import { Inter } from "next/font/google";
import PageTransition from "@/components/animation/PageTransition";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "절로 가 - 위로가 되는 여행",
    template: "%s - 절로 가",
  },
  description:
    "모든 것을 내려놓고 잠시 쉬고 싶을 때 방문하기 좋은 전통사찰 안내",
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: "/favicon.png",
  },
  keywords: [
    "사찰",
    "절",
    "사찰여행",
    "전통사찰",
    "휴식",
    "여행",
    "국내여행",
    "힐링",
    "부처",
    "불교",
  ],
  verification: {
    google: "ARkjwElBauBW0crq23en89CYLrwzi29cKJV2n-s3Njs",
    other: {
      "naver-site-verification": "0e7b90a54f0d1a0048f8e31deb620f6983559289",
    },
  },
  openGraph: {
    title: "절로 가 - 위로가 되는 여행",
    description:
      "모든 것을 내려놓고 잠시 쉬고 싶을 때 방문하기 좋은 전통사찰 안내",
    siteName: "절로 가",
    locale: "ko_KR",
    type: "website",
    url: "www.templeroad.kr",
    images: {
      url: "/roofBell.jpg",
    },
  },
  robots: {
    follow: true,
    index: true,
    googleBot: {
      index: true,
    },
  },
};

const laundry = localFont({
  src: "../public/fonts/laundry.woff",
  display: "swap",
  weight: "45 920",
  variable: "--font-laundry",
});

const jalnan = localFont({
  src: "../public/fonts/Jalnan.otf",
  display: "swap",
  weight: "45 920",
  variable: "--font-jalnan",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <head>
          <GoogleAdSense />
        </head>
        <body className={inter.className}>
          {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
            <GoogleAnalytics id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
          ) : null}

          <Providers>
            <Navbar />
            <Container>
              <PageTransition>
                <main className="container py-5">{children}</main>
              </PageTransition>
            </Container>
            <Footer />
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
