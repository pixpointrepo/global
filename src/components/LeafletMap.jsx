
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";


const center = [27.7010415,85.3414706]; // Latitude and Longitude


// 27.7010415,85.3414706
function MyLeafletMap() {
  return (
        
        <MapContainer center={center} zoom={13} style={{ height: "80%", width: "100%", marginBottom:"12px", zIndex:1 }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={center}>
                <Popup>Kathmandu</Popup>
            </Marker>
        </MapContainer>
    
  );
}

export default MyLeafletMap;
