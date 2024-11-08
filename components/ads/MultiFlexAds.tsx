"use client";
import { useEffect } from "react";

declare global {
  interface Window {
    adsbygoogle: any;
  }
}

const MultiFlexAds = () => {
  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <div className="googleAd-container w-full">
      <ins
        className="adsbygoogle"
        style={{ display: "block " }}
        data-ad-format="autorelaxed"
        data-ad-client="ca-pub-2999632223537453"
        data-ad-slot="6663601026"
      />
    </div>
  );
};

export default MultiFlexAds;
