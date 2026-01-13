// Default coordinates (used for old listings)
const DEFAULT_LAT = 20.5937;   // India center
const DEFAULT_LNG = 78.9629;
const DEFAULT_ZOOM = 4;

let lat = DEFAULT_LAT;
let lng = DEFAULT_LNG;
let zoom = DEFAULT_ZOOM;

// If listing has coordinates → override defaults
if (coordinates && coordinates.length === 2) {
  lat = coordinates[1]; // lat
  lng = coordinates[0]; // lng
  zoom = 10;
}

// Create map (always)
const map = L.map("map").setView([lat, lng], zoom);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap contributors"
}).addTo(map);

// Marker only if exact location exists
if (coordinates && coordinates.length === 2) {
  L.marker([lat, lng])
    .addTo(map)
    .bindPopup("Exact location shown after booking")
    .openPopup();
}
