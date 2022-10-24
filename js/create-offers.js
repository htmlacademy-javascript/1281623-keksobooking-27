import { getRandomInteger, getRandomFloat, getRandomArrayElement, shuffleArray } from './utils.js';

const titles = [
  'Квартира 1',
  'Квартира 2',
  'Квартира 3',
  'Квартира 4',
  'Квартира 5',
  'Квартира 6',
  'Квартира 7',
  'Квартира 8',
  'Квартира 9',
  'Квартира 10',
];

const tokyoCoordinates = {
  latMin: 35.65,
  latMax: 35.7,
  lngMin: 139.7,
  lngMax: 139.8,
};

const prices = {
  min: 1500,
  max: 3000,
};

const amountOfRooms = {
  min: 1,
  max: 3,
};

const amountOfGuests = {
  min: 1,
  max: 6,
};

const housingTypes = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const checkinsCheckouts = [
  '12:00',
  '13:00',
  '14:00',
];

const features = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const descriptions = [
  'Описание 1',
  'Описание 2',
  'Описание 3',
  'Описание 4',
  'Описание 5',
  'Описание 6',
  'Описание 7',
  'Описание 8',
  'Описание 9',
  'Описание 10',
];

const photos = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

function createOffer(_, index) {
  const location = {
    lat: getRandomFloat(tokyoCoordinates.latMin, tokyoCoordinates.latMax, 5),
    lng: getRandomFloat(tokyoCoordinates.lngMin, tokyoCoordinates.lngMax, 5),
  };

  return {
    author: { avatar: `img/avatars/user${(index + 1).toString().padStart(2, '0')}.png` },
    offer: {
      title: getRandomArrayElement(titles),
      address: `${location.lat}, ${location.lng}`,
      price: Math.round(getRandomInteger(prices.min, prices.max) / 100) * 100,
      type: getRandomArrayElement(housingTypes),
      rooms: getRandomInteger(amountOfRooms.min, amountOfRooms.max),
      guests: getRandomInteger(amountOfGuests.min, amountOfGuests.max),
      checkin: getRandomArrayElement(checkinsCheckouts),
      checkout: getRandomArrayElement(checkinsCheckouts),
      features: shuffleArray(features),
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
