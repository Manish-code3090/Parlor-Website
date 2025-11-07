import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function StoreMap() {
  return (
    <MapContainer
      center={[25.611, 85.144]} // your lat/lng
      zoom={15}
      style={{ height: "400px", width: "100%", borderRadius: "12px" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[25.611, 85.144]}>
        <Popup>Your Store Location</Popup>
      </Marker>
    </MapContainer>
  );
}
