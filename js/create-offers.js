const housingTypesNames = {
  palace: 'Дворец',
  flat: 'Квартира',
  house: 'Дом',
  bungalow: 'Бунгало',
  hotel: 'Отель',
};

const cardTemplate = document.querySelector('#card').content.querySelector('.popup');

const createOfferElement = ({ author, offer }) => {
  const card = cardTemplate.cloneNode(true);

  card.querySelector('.popup__avatar').src = author.avatar;
  card.querySelector('.popup__title').textContent = offer.title;
  card.querySelector('.popup__text--address').textContent = offer.address;

  const price = card.querySelector('.popup__text--price');
  const priceSpan = price.querySelector('span');
  price.textContent = `${offer.price} `;
  price.append(priceSpan);

  card.querySelector('.popup__type').textContent = housingTypesNames[offer.type];

  const capasity = card.querySelector('.popup__text--capacity');

  if (offer.rooms === 1 && offer.guests === 1) {
    capasity.textContent = `${offer.rooms} комната для ${offer.guests} гостя`;
  } else if (offer.rooms > 1 && offer.guests === 1) {
    capasity.textContent = `${offer.rooms} комнаты для ${offer.guests} гостя`;
  } else if (offer.rooms > 1 && offer.guests > 1) {
    capasity.textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  } else if (offer.rooms > 1 && offer.guests === 0) {
    capasity.textContent = `${offer.rooms} комнат (не для гостей)`;
  }

  card.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin} выезд до ${offer.checkout}`;

  const featureList = card.querySelectorAll('.popup__feature');
  if (offer.features) {
    featureList.forEach((featureItem) => {
      const isFeature = offer.features.some((element) => featureItem.classList.contains(`popup__feature--${element}`));

      if (!isFeature) {
        featureItem.remove();
      }
    });
  } else {
    card.querySelector('.popup__features').style.display = 'none';
  }

  if (offer.description) {
    card.querySelector('.popup__description').textContent = offer.description;
  } else {
    card.querySelector('.popup__description').style.display = 'none';
  }

  const photoContainer = card.querySelector('.popup__photos');
  const photoElement = card.querySelector('.popup__photo');
  if (offer.photos) {
    photoContainer.innerHTML = '';
    offer.photos.forEach((photoSrc) => {
      const photo = photoElement.cloneNode(true);
      photo.src = photoSrc;
      photoContainer.append(photo);
    });
  } else {
    photoContainer.style.display = 'none';
  }

  return card;
};

export { createOfferElement };
