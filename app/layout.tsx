import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import localFont from "next/font/local";
import Providers from "./providers";
import Footer from "@/components/footer/Footer";
import Container from "@/components/global/Container";
import { ClerkProvider } from "@clerk/nextjs";
import Script from "next/script";
import { GoogleAdSense } from "@/components/home/GoogleAdSence";
import GoogleAnalytics from "@/lib/GoogleAnaytics";

export const metadata: Metadata = {
  title: "절로 가 - 위로가 되는 여행",
  description:
    "모든 것을 내려놓고 잠시 쉬고 싶을 때 방문하기 좋은 전통사찰 안내",
  icons: {
    icon: "/favicon.png",
  },
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
    url: "",
    images: {
      url: "/bell.png",
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

const NEXT_PUBLIC_GOOGLE_ANALYTICS = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={laundry.className}>
          {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
            <GoogleAnalytics id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
          ) : null}
          <Script src="https://cdn.iamport.kr/v1/iamport.js" />
          <Providers>
            <Navbar />
            <Container>
              <main className="container py-5">{children}</main>
            </Container>
            <Footer />
          </Providers>
        </body>
        <GoogleAdSense />
      </html>
    </ClerkProvider>
  );
}
