import FooterAds from "../ads/FooterAds";
import Container from "../global/Container";

function Footer() {
  const flexBetween = "flex justify-between items-center";
  const flexCenter = "flex justify-center items-center";

  return (
    <Container>
      <footer className={`${flexCenter} mb-1`}>
        <div className="flex w-full flex-col gap-5">
          <FooterAds />
        </div>
      </footer>
    </Container>
  );
}

export default Footer;
