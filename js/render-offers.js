const housingTypesNames = {
  palace: 'Дворец',
  flat: 'Квартира',
  house: 'Дом',
  bungalow: 'Бунгало',
  hotel: 'Отель',
};

const cardContainer = document.querySelector('#map-canvas');
const cardTemplate = document.querySelector('#card').content.querySelector('.popup');

function renderOffers(offers) {
  const cardContainerFragment = document.createDocumentFragment();

  offers.forEach(({ author, offer }) => {
    const card = cardTemplate.cloneNode(true);

    card.querySelector('.popup__avatar').src = author.avatar;
    card.querySelector('.popup__title').textContent = offer.title;
    card.querySelector('.popup__text--address').textContent = offer.address;
    card.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
    card.querySelector('.popup__type').textContent = housingTypesNames[offer.type];
    card.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
    card.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin} выезд до ${offer.checkout}`;

    const featureContainer = card.querySelector('.popup__features');
    const featureList = featureContainer.querySelectorAll('.popup__feature');
    const modifiers = offer.features.map((feature) => `popup__feature--${feature}`);

    featureList.forEach((featureItem) => {
      const modifier = featureItem.classList[1];

      if (!modifiers.includes(modifier)) {
        featureItem.remove();
      }
    });

    card.querySelector('.popup__description').textContent = offer.description;
    card.querySelector('.popup__photo').src = offer.photos;

    cardContainerFragment.append(card);
  });

  cardContainer.append(cardContainerFragment);
}

export { renderOffers };

