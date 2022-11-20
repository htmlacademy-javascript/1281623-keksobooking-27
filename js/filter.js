import { getData } from './server.js';
import { renderMarkers } from './map.js';
import { showAlert } from './form-utils.js';
import { debounce } from './debounce.js';

const mapFilters = document.querySelector('.map__filters');
const housingTypeSelect = document.querySelector('#housing-type');
const housingPriceSelect = document.querySelector('#housing-price');
const housingRoomsSelect = document.querySelector('#housing-rooms');
const housingGuestsSelect = document.querySelector('#housing-guests');
const housingFeaturesInputs = document.querySelectorAll('#housing-features input');

const priceOptions = {
  low: {
    MIN: 0,
    MAX: 9999,
  },
  middle: {
    MIN: 10000,
    MAX: 49999,
  },
  high: {
    MIN: 50000,
    MAX: 100000,
  }
};

const filterByType = ({ offer }) =>
  housingTypeSelect.value === 'any' || offer.type === housingTypeSelect.value;

const filterByPrice = ({ offer }) =>
  housingPriceSelect.value === 'any' ||
  (offer.price >= priceOptions[housingPriceSelect.value].MIN &&
    offer.price <= priceOptions[housingPriceSelect.value].MAX);

const filterByRooms = ({ offer }) =>
  housingRoomsSelect.value === 'any' ||
  offer.rooms === parseInt(housingRoomsSelect.value, 10);

const filterByGuests = ({ offer }) =>
  housingGuestsSelect.value === 'any' ||
  offer.guests === parseInt(housingGuestsSelect.value, 10);

const filterByFeatures = ({ offer }) =>
  Array.from(housingFeaturesInputs).every((feature) => {
    if (!feature.checked) {
      return true;
    } else if (!offer.features) {
      return false;
    }
    return offer.features.includes(feature.value);
  });

mapFilters.addEventListener('change', debounce(() => {
  getData(renderMarkers, showAlert);
}, 500));

export { filterByType, filterByPrice, filterByRooms, filterByGuests, filterByFeatures };
