"use client";
import { Coordinates } from "@/utils/types";
import Script from "next/script";
import { useEffect, useRef, useState } from "react";
import React from "react";

function NaverMap({ loc }: { loc: Coordinates }) {
  const mapElement = useRef(null);

  const [naverMapsLoaded, setNaverMapsLoaded] = useState(false);
  useEffect(() => {
    if (window.naver && window.naver.maps) {
      setNaverMapsLoaded(true);
    } else {
      const intervalId = setInterval(() => {
        if (window.naver && window.naver.maps) {
          setNaverMapsLoaded(true);
          clearInterval(intervalId);
        }
      }, 100);

      return () => clearInterval(intervalId);
    }
  }, []);

  useEffect(() => {
    if (mapElement.current && naverMapsLoaded) {
      const { naver } = window;
      const location = new naver.maps.LatLng(loc);
      const mapOptions = {
        center: location,
        zoom: 15,
        zoomControl: false,
      };
      const map = new naver.maps.Map(mapElement.current, mapOptions);
      new naver.maps.Marker({
        position: location,
        map: map,
      });
    }
  }, [naverMapsLoaded]);

  return (
    <>
      <Script
        type="text/javascript"
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID}`}
      />

      <div ref={mapElement} className="w-full sm:h-[600px] h-96 rounded-lg" />
    </>
  );
}

export default NaverMap;
