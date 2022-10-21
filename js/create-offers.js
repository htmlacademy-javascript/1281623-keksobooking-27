import { getRandomInteger, getRandomFloat, getRandomArrayElement, getRandomArray } from './util.js';
import { titles, coordinates, prices, amountOfRooms, amountOfGuests, typesOfHousings, checkinsCheckouts, features, descriptions, photos } from './data.js';

function createOffer(_, index) {
  const location = {
    lat: getRandomFloat(coordinates.latMin, coordinates.latMax, 5),
    lng: getRandomFloat(coordinates.lngMin, coordinates.lngMax, 5),
  };

  const avatarId = `${index + 1}`.padStart(2, '0');

  return {
    author: { avatar: `img/avatars/user${avatarId}.png` },
    offer: {
      title: getRandomArrayElement(titles),
      address: `${location.lat}, ${location.lng}`,
      price: Math.round(getRandomInteger(prices.min, prices.max) / 100) * 100,
      type: getRandomArrayElement(typesOfHousings),
      rooms: getRandomInteger(amountOfRooms.min, amountOfRooms.max),
      guests: getRandomInteger(amountOfGuests.min, amountOfGuests.max),
      checkin: getRandomArrayElement(checkinsCheckouts),
      checkout: getRandomArrayElement(checkinsCheckouts),
      features: getRandomArray(features),
      description: getRandomArrayElement(descriptions),
      photos: getRandomArrayElement(photos),
    },
    location
  };
}

function createOffers(amount) {
  return Array.from({ length: amount }, createOffer);
}

export { createOffers };
