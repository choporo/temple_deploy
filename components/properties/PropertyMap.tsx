"use client";
import { MapContainer, TileLayer, Marker, ZoomControl } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { icon } from "leaflet";
const iconUrl =
  "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png";
const markerIcon = icon({
  iconUrl: iconUrl,
  iconSize: [20, 30],
});

function PropertyMap({ lat, lon }: { lat: string; lon: string }) {
  const defaultLocation = [51.505, -0.09] as [number, number];
  const location = [Number(lat), Number(lon)] as [number, number];

  return (
    <div className="mt-8">
      <MapContainer
        scrollWheelZoom={false}
        zoomControl={false}
        className="h-[10vh] rounded-lg relative z-0"
        center={location || defaultLocation}
        zoom={15}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ZoomControl position="bottomright" />
        <Marker
          position={location || defaultLocation}
          icon={markerIcon}
        ></Marker>
      </MapContainer>
    </div>
  );
}
export default PropertyMap;
