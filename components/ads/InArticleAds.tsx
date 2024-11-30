"use client";
import { useEffect } from "react";

declare global {
  interface Window {
    adsbygoogle: any;
  }
}

const InArticleAds = () => {
  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <div className="googleAd-container w-full h-56">
      <ins
        className="adsbygoogle"
        style={{ display: "block text-align:center" }}
        data-ad-layout="in-article"
        data-ad-format="fluid"
        data-ad-client="ca-pub-2999632223537453"
        data-ad-slot="5542091044"
        data-full-width-responsive="true"
      />
    </div>
  );
};

export default InArticleAds;
