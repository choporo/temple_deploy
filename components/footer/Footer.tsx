import Image from "next/image";
import FooterAds from "../ads/FooterAds";
import Container from "../global/Container";
import play from "@/public/image/play.png";
import Link from "next/link";
import { sendGTMEvent } from "@next/third-parties/google";

function Footer() {
  return (
    <Container>
      <footer>
        {/* <FooterAds /> */}
        <div
          className="w-full h-16"
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
