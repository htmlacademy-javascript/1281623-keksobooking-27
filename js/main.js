function getRandomInteger(a, b) {
  if (a < 0 || b < 0) {
    return NaN;
  }

  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

function getRandomFloat(a, b, amountOfDecimal = 1) {
  if (a < 0 || b < 0 || amountOfDecimal < 0) {
    return NaN;
  }

  const lower = Math.min(a, b);
  const upper = Math.max(a, b);
  const result = Math.random() * (upper - lower) + lower;

  return Number(result.toFixed(amountOfDecimal));
}

function getRandomArrayElement(array) {
  return array[getRandomInteger(0, array.length - 1)];
}

function getRandomArray(features) {
  const maxLength = features.length;
  const lengthOfArray = getRandomInteger(1, maxLength);
  const array = [];

  while (array.length < lengthOfArray) {
    const indexOfEl = getRandomInteger(0, maxLength - 1);
    const el = features[indexOfEl];

    if (!array.includes(el)) {
      array.push(el);
    }
  }
  return array;
}

// function createIdGenerator () {
//   let lastGeneratedId = 0;

//   return function () {
//     lastGeneratedId += 1;
//     if (lastGeneratedId >= 1 && lastGeneratedId <= 9) {
//       return `0${lastGeneratedId}`;
//     }

//     return lastGeneratedId;
//   };
// }

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
      title: getRandomArrayElement([
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
      ]),
      address: `${location.lat}, ${location.lng}`,
      price: Math.round(getRandomInteger(1500, 3000) / 100) * 100,
      type: getRandomArrayElement(['palace', 'flat', 'house', 'bungalow', 'hotel']),
      rooms: getRandomInteger(1, 3),
      guests: getRandomInteger(1, 6),
      checkin: getRandomArrayElement(['12:00', '13:00', '14:00']),
      checkout: getRandomArrayElement(['11:00', '12:00', '13:00']),
      features: getRandomArray(['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner']),
      description: getRandomArrayElement([
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
      ]),
      photos: getRandomArrayElement([
        'https://assets.htmlacademy.ru/content/intensive/javascript-1/// keksobooking/duonguyen-8LrGtIxxa4w.jpg',
        'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/// brandon-hoogenboom-SNxQGWxZQi0.jpg',
        'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/// claire-rendall-b6kAwr1i0Iw.jpg',
      ]),
    },
    location
  };
}

const offers = Array.from({ length: OFFERS_COUNT }, createOffer);

// eslint-disable-next-line no-console
console.log(offers);
