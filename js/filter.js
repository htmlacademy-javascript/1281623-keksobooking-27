import { getData } from './server.js';
import { renderMarkers } from './map.js';
import { showAlert } from './form-utils.js';
import { debounce } from './debounce.js';

const mapFilters = document.querySelector('.map__filters');
const housingTypeSelect = document.querySelector('#housing-type');
const housingPriceSelect = document.querySelector('#housing-price');
const housingRoomsSelect = document.querySelector('#housing-rooms');
const housingGuestsSelect = document.querySelector('#housing-guests');
const housingFeaturesFieldset = document.querySelector('#housing-features');
const checkedInputs = housingFeaturesFieldset.querySelectorAll('input:checked');

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


const filterByFeatures = ({ offer }) => {
  if (offer.features) {
    return Array.from(checkedInputs).every((feature) =>
      offer.features.includes(feature.value));
  }
};

mapFilters.addEventListener('change', debounce(() => {
  getData(renderMarkers, showAlert);
}, 500));

export { filterByType, filterByPrice, filterByRooms, filterByGuests, filterByFeatures };
