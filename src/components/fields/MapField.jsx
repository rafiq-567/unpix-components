import { useEffect, useState } from "react";
import PropTypes from "prop-types";
export default function MapField({ label = "Map", lat = 23.8103, lng = 90.4125, zoom = 13 }) {
  const [mounted, setMounted] = useState(false);
  const [MapComponents, setMapComponents] = useState(null);
  useEffect(() => {
    Promise.all([import("react-leaflet"), import("leaflet")]).then(([reactLeaflet, L]) => {
      delete L.default.Icon.Default.prototype._getIconUrl;
      L.default.Icon.Default.mergeOptions({
        iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
      });
      setMapComponents(reactLeaflet);
      setMounted(true);
    });
  }, []);

  if (!mounted || !MapComponents) {
    return (
      <div style={{ aspectRatio: "16/9", width: "100%", backgroundColor: "var(--color-bg-muted)", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, color: "var(--color-text-muted)" }}>
        Loading map...
      </div>
    );
  }

  const { MapContainer, TileLayer, Marker, Popup } = MapComponents;
  return (
    <div>
      <label style={{ display: "block", marginBottom: 8, fontSize: 16, fontWeight: 900, color: "var(--color-text-secondary)" }}>{label}</label>
      <div style={{ position: "relative", width: "100%", borderRadius: 12, overflow: "hidden", border: "1px solid var(--color-border)", aspectRatio: "16/9" }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <MapContainer center={[lat, lng]} zoom={zoom} style={{ height: "100%", width: "100%" }} scrollWheelZoom={false}>
            <TileLayer attribution='&copy; OpenStreetMap' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[lat, lng]}><Popup>{label}</Popup></Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
}
MapField.propTypes = { label: PropTypes.string, lat: PropTypes.number, lng: PropTypes.number, zoom: PropTypes.number };
MapField.defaultProps = { label: "Map", lat: 23.8103, lng: 90.4125, zoom: 13 };