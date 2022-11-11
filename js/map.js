// import { activateForm } from './form-state.js';
import { renderOffer } from './render-offers.js';
import { pristine } from './form-validation.js';

const addressInput = document.querySelector('#address');
const coordinatesOfTokyo = {
  lat: 35.675,
  lng: 139.75,
};

const map = L.map('map-canvas');

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

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

const mainPinMarker = L.marker(
  coordinatesOfTokyo,
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

addressInput.addEventListener('click', () => {
  mainPinMarker.addTo(map);
  addressInput.placeholder = `${(coordinatesOfTokyo.lat).toFixed(5)}, ${(coordinatesOfTokyo.lng).toFixed(5)}`;
});

mainPinMarker.on('move', (evt) => {
  const coordinates = evt.target.getLatLng();
  addressInput.value = `${(coordinates.lat).toFixed(5)}, ${(coordinates.lng).toFixed(5)}`;
  pristine.validate(addressInput);
});

const renderOffers = (offers) => {
  offers.forEach(({ author, offer, location }) => {
    const marker = L.marker(
      {
        lat: location.lat,
        lng: location.lng,
      },
      {
        offerPinIcon,
      },
    );

    marker
      .addTo(markerGroup)
      .bindPopup(renderOffer({ author, offer, location }));
  });
};

export { map, coordinatesOfTokyo, renderOffers };
