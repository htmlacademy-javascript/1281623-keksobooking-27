import { activateForm } from './form-state.js';
import { createOffers } from './create-offers.js';
import { renderOffer } from './render-offers.js';
import { pristine } from './form-validation.js';

const offers = createOffers(10);

const address = document.querySelector('#address');

const map = L.map('map-canvas')
  .on('load', () => {
    activateForm();
  })
  .setView({
    lat: 35.675,
    lng: 139.75,
  }, 13);

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
  {
    lat: 35.675,
    lng: 139.75,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

address.addEventListener('click', () => {
  mainPinMarker.addTo(map);
  address.placeholder = '35.67500, 139.75000';
});

mainPinMarker.on('move', (evt) => {
  const coordinates = evt.target.getLatLng();
  address.value = `${Number((coordinates.lat).toFixed(5))}, ${Number((coordinates.lng).toFixed(5))}`;
  pristine.validate();
});

offers.forEach(({author, offer, location}) => {
  const {lat, lng} = location; // ? Немного непонятно, что делает эта строка
  const marker = L.marker(
    {
      lat,
      lng,
    },
    {
      offerPinIcon,
    },
  );

  marker
    .addTo(markerGroup)
    .bindPopup(renderOffer({author, offer, location}));
});

