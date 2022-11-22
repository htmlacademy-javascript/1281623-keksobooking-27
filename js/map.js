import { createOfferElement } from './create-offers.js';
import { pristine } from './form-validation.js';
import { initFilters } from './filter.js';

const ZOOM_LEVEL = 13;
const OFFERS_COUNT = 10;
const TOKYO_LAT = 35.675;
const TOKYO_LNG = 139.75;

const addressInput = document.querySelector('#address');
const map = L.map('map-canvas');
const markerGroup = L.layerGroup().addTo(map);

const mainPinIcon = L.icon({
  iconUrl: '/img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const offerPinIcon = L.icon({
  iconUrl: '/img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const mainPinMarker = L.marker({
  lat: TOKYO_LAT,
  lng: TOKYO_LNG,
},
{
  draggable: true,
  icon: mainPinIcon,
});

const initMap = (onMapLoad) => {
  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);

  map
    .on('load', onMapLoad)
    .setView({
      lat: TOKYO_LAT,
      lng: TOKYO_LNG,
    }, ZOOM_LEVEL);
};

const initMainPinMarker = () => {
  mainPinMarker
    .addTo(map)
    .on('move', () => {
      const coordinates = mainPinMarker.getLatLng();
      addressInput.value = `${(coordinates.lat).toFixed(5)}, ${(coordinates.lng).toFixed(5)}`;
      pristine.validate(addressInput);
    });
};

const renderMarkers = (arr) => {
  markerGroup.clearLayers();

  const newArray = arr
    .filter(initFilters)
    .slice(0, OFFERS_COUNT);

  newArray.forEach((data) => {
    const marker = L.marker({
      lat: data.location.lat,
      lng: data.location.lng,
    },
    {
      offerPinIcon,
    },
    );

    marker
      .addTo(markerGroup)
      .bindPopup(createOfferElement(data));
  });
};

const resetMap = () => {
  mainPinMarker.setLatLng({
    lat: TOKYO_LAT,
    lng: TOKYO_LNG,
  });
  map.setView({
    lat: TOKYO_LAT,
    lng: TOKYO_LNG,
  }, ZOOM_LEVEL);
};

export { initMap, initMainPinMarker, renderMarkers, resetMap };
