"use client";

import { MapContainer, TileLayer, Circle, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Shirley, MA coordinates
const SHIRLEY: [number, number] = [42.5367, -71.6498];
const RADIUS_METERS = 24_140; // ~15 miles

// Amber color matching the site palette
const AMBER = "#C8912E";

// Fix default marker icon (Leaflet's default icon paths break in bundlers)
const markerIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

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
          fillOpacity: 0.12,
        }}
      />
      <Marker position={SHIRLEY} icon={markerIcon}>
        <Popup>
          <strong>Zagwyn Firewood</strong>
          <br />
          Great Road, Shirley, MA
        </Popup>
      </Marker>
    </MapContainer>
  );
}
