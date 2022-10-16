import {getRandomInteger, getRandomFloat, getRandomArrayElement, getRandomArray} from './util.js';

const TITLES = [
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

const MIN_PRICE = 1500;

const MAX_PRICE = 3000;

const TYPES_OF_ROOMS = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const CHECKINS = [
  '12:00',
  '13:00',
  '14:00',
];

const CHECKOUTS = [
  '12:00',
  '13:00',
  '14:00',
];

const FEATURES_OF_ROOMS = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const DESCRIPTIONS = [
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

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/// keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/// brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/// claire-rendall-b6kAwr1i0Iw.jpg',
];

const OFFERS_COUNT = 10;

function createOffer(_, index) {
  const location = {
    lat: getRandomFloat(35.65, 35.7, 5),
    lng: getRandomFloat(139.7, 139.8, 5),
  };

  const avatarId = `${index + 1}`.padStart(2, '0');

  return {
    author: { avatar: `img/avatars/user${avatarId}.png` },
    offer: {
      title: getRandomArrayElement(TITLES),
      address: `${location.lat}, ${location.lng}`,
      price: Math.round(getRandomInteger(MIN_PRICE, MAX_PRICE) / 100) * 100,
      type: getRandomArrayElement(TYPES_OF_ROOMS),
      rooms: getRandomInteger(1, 3),
      guests: getRandomInteger(1, 6),
      checkin: getRandomArrayElement(CHECKINS),
      checkout: getRandomArrayElement(CHECKOUTS),
      features: getRandomArray(FEATURES_OF_ROOMS),
      description: getRandomArrayElement(DESCRIPTIONS),
      photos: getRandomArrayElement(PHOTOS),
    },
    location
  };
}

const offers = Array.from({ length: OFFERS_COUNT }, createOffer);

export {offers};
