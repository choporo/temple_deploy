"use client";
import Image from "next/image";
import FooterAds from "../ads/FooterAds";
import Container from "../global/Container";
import play from "@/public/image/play.png";
import Link from "next/link";
import { GoogleTagManager, sendGTMEvent } from "@next/third-parties/google";

function Footer() {
  return (
    <Container>
      <header>
        {process.env.NEXT_PUBLIC_GOOGLE_TAG ? (
          <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GOOGLE_TAG} />
        ) : null}
      </header>
      <footer>
        <div className="hidden xl:flex">
          <FooterAds />
        </div>

        <div
          className="w-full h-16 xl:hidden"
          onClick={() =>
            sendGTMEvent({ event: "googlePlayClicked", value: `GooglePlay` })
          }
        >
          <Link
            href="https://play.google.com/store/apps/details?id=com.choporo.temple"
            passHref
            aria-label="google_play"
          >
            <Image
              src={play}
              alt="google_play"
              priority
              unoptimized
              sizes="100vw"
              className="w-28 h-10 mx-auto"
            />
          </Link>
        </div>
      </footer>
    </Container>
  );
}

export default Footer;
