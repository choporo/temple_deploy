"use client";
import React, { useEffect, useMemo, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";

export function TempleMap({ lat, lon }: { lat: string; lon: string }) {
  const mapRef = React.useRef<HTMLDivElement>(null);
  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS!,
        version: "weekly",
      });

      const { Map } = await loader.importLibrary("maps");
      const position = {
        lat: Number(lat),
        lng: Number(lon),
      };

      const mapOptions: google.maps.MapOptions = {
        center: position,
        zoom: 15,
        mapId: "MY_NEXTJS_MAPID",
      };

      const map = new Map(mapRef.current as HTMLDivElement, mapOptions);

      const marker = new google.maps.Marker({
        map: map,
        position: position,
      });
    };
    initMap();
  }, []);
  return <div style={{ height: "600px" }} ref={mapRef} />;
}

export default TempleMap;
