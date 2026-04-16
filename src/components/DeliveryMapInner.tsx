"use client";

import { MapContainer, TileLayer, Circle } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Shirley, MA coordinates
const SHIRLEY: [number, number] = [42.5367, -71.6498];
const RADIUS_METERS = 24_140; // ~15 miles

// Amber color matching the site palette
const AMBER = "#C8912E";

export default function DeliveryMapInner() {
  return (
    <MapContainer
      center={SHIRLEY}
      zoom={10}
      scrollWheelZoom={false}
      className="h-full w-full z-0"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Circle
        center={SHIRLEY}
        radius={RADIUS_METERS}
        pathOptions={{
          color: AMBER,
          weight: 2,
          fillColor: AMBER,
          fillOpacity: 0.25,
        }}
      />
    </MapContainer>
  );
}
