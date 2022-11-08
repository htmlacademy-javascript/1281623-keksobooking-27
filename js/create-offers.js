import { getRandomInteger, getRandomFloat, getRandomArrayElement, shuffleArray } from './utils.js';

const titles = [
  'Милая и уютная квартира в самом центре Токио',
  'Дворец супер-пупер экстра высого уровня',
  'Простенькая, но чистая и хорошая квартира',
  'Замечательный отель с бассейном',
  'Самое популярное место во всём Токио',
  'У нас дёшево, но зато никто не жалуется',
  'Квартира в самом тихом и спокойном районе',
  'Уникальные аппартаменты. Такого вы ещё точно не видели',
  'Отель в котором вы обретёте гармонию и спокойствие',
  'Жильё, которое по настоящему погрузит вас в жизнь города',
];

const TokyoCoordinates = {
  LAT_MIN: 35.65,
  LAT_MAX: 35.7,
  LNG_MIN: 139.7,
  LNG_MAX: 139.8,
};

const Prices = {
  MIN: 1500,
  MAX: 3000,
};

const AmountOfRooms = {
  MIN: 1,
  MAX: 3,
};

const AmountOfGuests = {
  MIN: 1,
  MAX: 6,
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
  'Квартира в которой по кайфу! Не верите? Приезжайте и убедитесь в этом сами.',
  'Хотите пожить как царь?! Тогда вам обязательно надо остановиться в нашем роскошном дворце.',
  'Может у нас и не самая лучшая квартира. Но хотя бы нет тараканов.',
  'Если любите, чтобы было "Всё включено", то это точно не в нашем отеле. Но зато у нас есть бассейн.',
  'У нас очень любят останавливаться султаны, шейхи, звёзды и прочие знаменитости.',
  'Вы вряд ли найдёте жильё лучше. По крайней мере за те небольшие деньги, что мы просим',
  'Вас будет ждать квартира в очень уединённом месте, где вы сможете наслаждаться тишиной и спокойствием',
  'Наши апартаменты смогут удивить, даже самого утончённого путешественника.',
  'В нашем отеле вы найдёте покой, умиротворение и вот эту гармонию, от слияния с бесконечным вечным',
  'Если хотите ощутить впечатлений от жизни в гетто, то приезжайте к нам. Предоставим жильё вообще за бесплатно',
];

const photos = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const createOffer = (_, index) => {
  const location = {
    lat: getRandomFloat(TokyoCoordinates.LAT_MIN, TokyoCoordinates.LAT_MAX, 5),
    lng: getRandomFloat(TokyoCoordinates.LNG_MIN, TokyoCoordinates.LNG_MAX, 5),
  };

  return {
    author: { avatar: `img/avatars/user${(index + 1).toString().padStart(2, '0')}.png` },
    offer: {
      title: getRandomArrayElement(titles),
      address: `${location.lat}, ${location.lng}`,
      price: Math.round(getRandomInteger(Prices.MIN, Prices.MAX) / 100) * 100,
      type: getRandomArrayElement(housingTypes),
      rooms: getRandomInteger(AmountOfRooms.MIN, AmountOfRooms.MAX),
      guests: getRandomInteger(AmountOfGuests.MIN, AmountOfGuests.MAX),
      checkin: getRandomArrayElement(checkinsCheckouts),
      checkout: getRandomArrayElement(checkinsCheckouts),
      features: shuffleArray(features),
      description: getRandomArrayElement(descriptions),
      photos: getRandomArrayElement(photos),
    },
    location: location,
  };
};

const createOffers = (amount) => Array.from({ length: amount }, createOffer);

export { createOffers };
