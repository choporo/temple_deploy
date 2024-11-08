import { useEffect } from "react";

declare global {
  interface Window {
    adsbygoogle: any;
  }
}

const InFeedAds = () => {
  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <div className="googleAd-container">
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-format="fluid"
        data-ad-layout-key="+24+qk+1y+u+4"
        data-ad-client="ca-pub-2999632223537453"
        data-ad-slot="3182686865"
      />
    </div>
  );
};

export default InFeedAds;
