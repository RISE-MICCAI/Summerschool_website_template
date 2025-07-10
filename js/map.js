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
    region: "Africa"
  },
  {
    city: "Cairo",
    country: "Egypt",
    lat: 30.0444,
    lng: 31.2357,
    contact: "Prof. Aya Yassin",
    address: "Ain Shams University",
    region: "MENA"
  },
  {
    city: "Lagos",
    country: "Nigeria",
    lat: 6.5244,
    lng: 3.3792,
    contact: "Charity Umoren",
    address:
      "Medical Artificial Intelligence (MAI) Lab, 120/124 Ikorodu Road Igbobi, Lagos, Nigeria",
    region: "Africa"
  },

  // Americas
  {
    city: "Lima",
    country: "Peru",
    lat: -12.0464,
    lng: -77.0428,
    contact: "Pedro Shiguihara",
    address: "Universidad San Ignacio de Loyola",
    region: "Americas"
  },
  {
    city: "Guatemala City",
    country: "Guatemala",
    lat: 14.6349,
    lng: -90.5069,
    contact: "Andrea",
    address: "Universidad Galileo",
    region: "Americas"
  },

  // Asia
  {
    city: "Lahore",
    country: "Pakistan",
    lat: 31.5497,
    lng: 74.3436,
    contact: "Waqas Sultani, Arif Mahmood and Mohsen Ali",
    address: "Information Technology University",
    region: "MENA"
  },
  {
    city: "Khyber Pakhtunkhwa",
    country: "Pakistan",
    lat: 34.0151,
    lng: 71.5249,
    contact: "Khurram Jadoon",
    address:
      "Ghulam Ishaq Khan Institute of Engineering Sciences and Technology",
    region: "MENA"
  },
  {
    city: "Al-Seeb",
    country: "Oman",
    lat: 23.674,
    lng: 58.1829,
    contact: "Fatma Al Raisi",
    address: "Sultan Qaboos University",
    region: "MENA"
  },
  {
    city: "Hanoi",
    country: "Vietnam",
    lat: 21.0278,
    lng: 105.8342,
    contact: "Dr. Hieu Pham",
    address: "VinUniversity",
    region: "Asia"
  },

  // Middle East (MENA)
  {
    city: "Damascus",
    country: "Syria",
    lat: 33.5138,
    lng: 36.2765,
    contact: "Oumayma Dakkak",
    address: "HIAST (Higher Institute for Applied Sciences and Technology)",
    region: "MENA"
  },
  {
    city: "Damascus",
    country: "Syria",
    lat: 33.5138,
    lng: 36.2765,
    contact: "Nada Ghneim",
    address: "Arab International University",
    region: "MENA"
  },
  {
    city: "Damascus",
    country: "Syria",
    lat: 33.5138,
    lng: 36.2765,
    contact: "Riad Sonbol",
    address: "Syrian Private University",
    region: "MENA"
  },
  {
    city: "Damascus",
    country: "Syria",
    lat: 33.5138,
    lng: 36.2765,
    contact: "Nada Ghneim",
    address: "Damascus University",
    region: "MENA"
  },
  {
    city: "Amman",
    country: "Jordan",
    lat: 31.9539,
    lng: 35.9106,
    contact: "Omar Alkadi",
    address: "University of Jordan",
    region: "MENA"
  },
  {
    city: "Beirut",
    country: "Lebanon",
    lat: 33.8938,
    lng: 35.5018,
    contact: "Razane Tajeddine and Ali Chehab",
    address: "American University of Beirut",
    region: "MENA"
  },
  // Additional Syria hubs
  {
    city: "Idlib",
    country: "Syria",
    lat: 35.9306,
    lng: 36.6339,
    contact: "Mohammad AlObaid",
    address: "Idlib University",
    region: "MENA"
  },
  {
    city: "Azaz",
    country: "Syria",
    lat: 36.5861,
    lng: 37.0444,
    contact: "Mahmoud Musaa",
    address: "Free Aleppo University",
    region: "MENA"
  },
  {
    city: "Syria",
    country: "Syria",
    lat: 33.5138,
    lng: 36.2765,
    contact: "Hanadi Omaish",
    address: "Sham University",
    region: "MENA"
  }
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

  // Custom marker icons for different regions
  const blueIcon = L.icon({
    iconUrl:
      "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png",
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  const redIcon = L.icon({
    iconUrl:
      "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  // Add markers for each hub location
  hubLocations.forEach((location) => {
    // Choose icon based on region
    const icon = location.region === "MENA" ? redIcon : blueIcon;

    // Build tooltip content
    let tooltipContent = `<strong>${location.city}, ${location.country}</strong><br>${location.address}`;

    const marker = L.marker([location.lat, location.lng], { icon: icon })
      .addTo(map)
      .bindTooltip(tooltipContent, {
        permanent: false,
        direction: "top",
        offset: [0, -40],
        className: "hub-tooltip",
      });

    markers.push(marker);
  });

  // Add legend to the map
  const legend = L.control({ position: 'topright' });
  legend.onAdd = function(map) {
    const div = L.DomUtil.create('div', 'map-legend');
    div.innerHTML = `
      <h4>Hub Regions</h4>
      <div class="legend-item">
        <div class="legend-color mena" style="width: 20px; height: 20px; background-color: #dc3545; border-radius: 3px; flex-shrink: 0;"></div>
        <div class="legend-text">MENA</div>
      </div>
      <div class="legend-item">
        <div class="legend-color other" style="width: 20px; height: 20px; background-color: #007bff; border-radius: 3px; flex-shrink: 0;"></div>
        <div class="legend-text">Other Regions</div>
      </div>
    `;
    return div;
  };
  legend.addTo(map);

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
