// Hub locations with coordinates
const hubLocations = [
  // Africa
  {
    city: "Cape Town",
    country: "South Africa",
    lat: -33.9249,
    lng: 18.4241,
    contact: "Dr Catherine Namayega",
    address: "University of Cape Town",
  },
  {
    city: "Cairo",
    country: "Egypt",
    lat: 30.0444,
    lng: 31.2357,
    contact: "Prof. Aya Yassin",
    address: "Ain Shams University",
  },
  {
    city: "Lagos",
    country: "Nigeria",
    lat: 6.5244,
    lng: 3.3792,
    contact: "Charity Umoren",
    address:
      "Medical Artificial Intelligence (MAI) Lab, 120/124 Ikorodu Road Igbobi, Lagos, Nigeria",
  },

  // Americas
  {
    city: "Lima",
    country: "Peru",
    lat: -12.0464,
    lng: -77.0428,
    contact: "Pedro Shiguihara",
    address: "Universidad San Ignacio de Loyola",
  },
  {
    city: "Guatemala City",
    country: "Guatemala",
    lat: 14.6349,
    lng: -90.5069,
    contact: "Andrea",
    address: "Universidad Galileo",
  },

  // Asia
  {
    city: "Lahore",
    country: "Pakistan",
    lat: 31.5497,
    lng: 74.3436,
    contact: "Waqas Sultani, Arif Mahmood and Mohsen Ali",
    address: "Information Technology",
  },
  {
    city: "Khyber Pakhtunkhwa",
    country: "Pakistan",
    lat: 34.0151,
    lng: 71.5249,
    contact: "Khurram Jadoon",
    address:
      "Ghulam Ishaq Khan Institute of Engineering Sciences and Technology",
  },
  {
    city: "Al-Seeb",
    country: "Oman",
    lat: 23.674,
    lng: 58.1829,
    contact: "Fatma Al Raisi",
    address: "Sultan Qaboos University",
  },
  {
    city: "Hanoi",
    country: "Vietnam",
    lat: 21.0278,
    lng: 105.8342,
    contact: "Dr. Hieu Pham",
    address: "VinUniversity",
  },

  // Middle East
  {
    city: "Damascus",
    country: "Syria",
    lat: 33.5138,
    lng: 36.2765,
    contact: "Oumayma Dakkak, Nada Ghneim, Riad Sonbol",
    address:
      "HIAST, Arab International University, Syrian Private University, & Damascus University",
  },
  {
    city: "Amman",
    country: "Jordan",
    lat: 31.9539,
    lng: 35.9106,
    contact: "Omar Alkadi",
    address: "University of Jordan",
  },
  {
    city: "Beirut",
    country: "Lebanon",
    lat: 33.8938,
    lng: 35.5018,
    contact: "Razane Tajeddine and Ali Chehab",
    address: "American University of Beirut",
  },
];

let markers = [];
let currentTooltipIndex = 0;
let animationInterval;

// Initialize map when page loads
document.addEventListener("DOMContentLoaded", function () {
  // Check if Leaflet is loaded and hub-map element exists
  if (typeof L !== "undefined" && document.getElementById("hub-map")) {
    initializeHubMap();
  }
});

function initializeHubMap() {
  // Create map centered on the world with restricted bounds
  const map = L.map("hub-map", {
    center: [20, 0],
    zoom: 2,
    maxBounds: [
      [-90, -180],
      [90, 180],
    ],
    maxBoundsViscosity: 1.0,
    minZoom: 2,
    maxZoom: 10,
  });

  // Add OpenStreetMap tiles
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    noWrap: true,
  }).addTo(map);

  // Custom marker icon
  const markerIcon = L.icon({
    iconUrl:
      "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png",
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  // Add markers for each hub location
  hubLocations.forEach((location) => {
    // Build tooltip content
    let tooltipContent = `<strong>${location.city}, ${location.country}</strong>`;

    const marker = L.marker([location.lat, location.lng], { icon: markerIcon })
      .addTo(map)
      .bindTooltip(tooltipContent, {
        permanent: false,
        direction: "top",
        offset: [0, -40],
        className: "hub-tooltip",
      });

    markers.push(marker);
  });

  // Fit map to show all markers
  const bounds = L.latLngBounds(hubLocations.map((loc) => [loc.lat, loc.lng]));
  map.fitBounds(bounds, { padding: [50, 50] });

  // Start the tooltip animation
  startTooltipAnimation();
}

function startTooltipAnimation() {
  // Show tooltips in sequence
  animationInterval = setInterval(() => {
    // Close all tooltips
    markers.forEach((marker) => marker.closeTooltip());

    // Open current tooltip
    markers[currentTooltipIndex].openTooltip();

    // Move to next marker
    currentTooltipIndex = (currentTooltipIndex + 1) % markers.length;
  }, 2000); // Change tooltip every 2 seconds

  // Stop animation on map interaction
  const mapElement = document.getElementById("hub-map");
  if (mapElement) {
    mapElement.addEventListener("mouseenter", () => {
      clearInterval(animationInterval);
      markers.forEach((marker) => marker.closeTooltip());
    });

    mapElement.addEventListener("mouseleave", () => {
      startTooltipAnimation();
    });
  }
}
