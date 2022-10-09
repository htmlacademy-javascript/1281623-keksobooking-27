/* eslint-disable no-inner-declarations */
// Получение случайного целого числа в заданном интервале, включительно

function getRandomInteger(a, b) {
  if (a < 0 || b < 0) {
    return NaN;
  }

  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

getRandomInteger(0, 10);

// Получение случайного нецелого числа в заданном интервале, включительно

function getRandomFloat(a, b, amountOfDecimal = 1) {
  if (a < 0 || b < 0 || amountOfDecimal < 0) {
    return NaN;
  }

  const lower = Math.min(a, b);
  const upper = Math.max(a, b);
  const result = Math.random() * (upper - lower) + lower;

  return Number(result.toFixed(amountOfDecimal));
}

getRandomFloat(0, 10, 3);

// Получение числа от 01 до 10

// function getNumber(number) {
//   if (number < 1 || number > 10) {
//     return NaN;
//   }

//   if (number >= 1 && number <= 9) {
//     return `0${number}`;
//   }

//   return number;
// }

const AMOUNT_OF_OBJECTS = 10;

function createIdGenerator () {
  let lastGeneratedId = 0;

  return function () {
    lastGeneratedId += 1;
    if (lastGeneratedId >= 1 && lastGeneratedId <= 9) {
      return `0${lastGeneratedId}`;
    }

    return lastGeneratedId;
  };
}

const xx = createIdGenerator();

// const author = {
//   avatar: `img/avatars/user${xx}.png`,
// };

{
  const location = {
    lat: getRandomFloat(35.65, 35.7, 5),
    lng: getRandomFloat(139.7, 139.8, 5),
  };

  const offer = {
    title: 'Квартира с самым красивым видом из окна',
    address: `${location.lat}, ${location.lng}`,
    price: 3000,
    type: ['palace', 'flat', 'house', 'bungalow', 'hotel'],
    rooms: 2,
    guests: 3,
    checkin: ['12:00', '13:00', '14:00'],
    checkout: ['12:00', '13:00', '14:00'],
    features: ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'],
    description: 'Квартира расположена в самом центре города с видом на парк. Квартира оснащена кондиционером, письменным столом, сейфом, телевизором с плоским экраном. Парам особенно нравится расположение — они оценили проживание в этом районе для поездки вдвоем',
    photos: [
      'https://assets.htmlacademy.ru/content/intensive/javascript-1/// keksobooking/duonguyen-8LrGtIxxa4w.jpg',
      'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/// brandon-hoogenboom-SNxQGWxZQi0.jpg',
      'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/// claire-rendall-b6kAwr1i0Iw.jpg',
    ],
  };

  // Создание объекта с описанием объявления

  function createPublication() {
    return {
      author: { avatar: `img/avatars/user${xx()}.png` },
      offer,
    };
  }

  // Создание объектов на основе созданного объявления

  Array.from({ length: AMOUNT_OF_OBJECTS }, createPublication);
}
