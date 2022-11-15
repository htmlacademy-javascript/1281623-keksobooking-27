import { createOfferElement } from './create-offers.js';
import { pristine } from './form-validation.js';

const addressInput = document.querySelector('#address');
const map = L.map('map-canvas');
const markerGroup = L.layerGroup().addTo(map);

const ZOOM_LEVEL = 13;

const coordinatesOfTokyo = {
  lat: 35.675,
  lng: 139.75,
};

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

const mainPinMarker = L.marker(
  coordinatesOfTokyo,
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

const initMap = (onMapLoad) => {
  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);

  map.on('load', onMapLoad).setView(coordinatesOfTokyo, ZOOM_LEVEL);

  addressInput.addEventListener('click', () => {
    mainPinMarker.addTo(map);
    addressInput.placeholder = `${(coordinatesOfTokyo.lat).toFixed(5)}, ${(coordinatesOfTokyo.lng).toFixed(5)}`;
  });

  mainPinMarker.on('move', () => {
    const coordinates = mainPinMarker.getLatLng();
    addressInput.value = `${(coordinates.lat).toFixed(5)}, ${(coordinates.lng).toFixed(5)}`;
    pristine.validate(addressInput);
  });
};

const renderMarkers = (arr) => {
  markerGroup.clearLayers();

  arr.forEach((data) => {
    const marker = L.marker(
      {
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

const resetMainPinMarker = () => {
  mainPinMarker.remove();
  mainPinMarker.setLatLng(coordinatesOfTokyo);
  addressInput.placeholder = '';
};

export { initMap, renderMarkers, resetMainPinMarker };
