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
    return <div className="w-full bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 text-sm" style={{ aspectRatio: "16/9" }}>Loading map...</div>;
  }
  const { MapContainer, TileLayer, Marker, Popup } = MapComponents;
  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-700">{label}</label>
      <div className="relative w-full rounded-lg overflow-hidden border" style={{ aspectRatio: "16/9" }}>
        <div className="absolute inset-0">
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