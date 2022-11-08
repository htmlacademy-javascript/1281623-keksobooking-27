const adForm = document.querySelector('.ad-form');

const pristine = new Pristine(adForm, {
  classTo: 'ad-form__element',
  errorClass: 'ad-form__element--invalid',
  errorTextParent: 'ad-form__element',
  errorTextTag: 'div',
  errorTextClass: 'text-help',
});

// Валидация на соответствие количества комнат и количества гостей

const roomNumber = adForm.querySelector('[name="rooms"]');
const capacity = adForm.querySelector('[name="capacity"]');
const roomNumberOption = {
  '1 комната': ['для 1 гостя'],
  '2 комнаты': ['для 1 гостя', 'для 2 гостей'],
  '3 комнаты': ['для 1 гостя', 'для 2 гостей', 'для 3 гостей'],
  '100 комнат': ['не для гостей'],
};

function validateRoomNumber () {
  return roomNumberOption[roomNumber.value].includes(capacity.value);
}

function getRoomNumberErrorMessage () {
  return `
    ${roomNumber.value}
    ${capacity.value}
    ${roomNumber.value === '1 комната' ? 'недоступна' : 'недоступны'}
  `;
}

function onCapacityChange() {
  pristine.validate(roomNumber);
}

capacity.addEventListener('change', onCapacityChange);

pristine.addValidator(roomNumber, validateRoomNumber, getRoomNumberErrorMessage);
pristine.addValidator(capacity, validateRoomNumber);

// Валидация на соответствие типа жилья и минимальной цены за ночь

const housingType = adForm.querySelector('[name="type"]');
const priceField = adForm.querySelector('[name="price"]');
const minPrice = {
  'bungalow': 0,
  'flat': 1000,
  'hotel': 3000,
  'house': 5000,
  'palace': 10000,
};

function validatePrice (value) {
  return value.length && parseInt(value, 10) >= minPrice[housingType.value];
}

function getPriceErrorMessage () {
  return `Минимальная цена ${minPrice[housingType.value]}`;
}

function onHousingTypeChange() {
  priceField.placeholder = minPrice[this.value];
  pristine.validate(priceField.placeholder);
}

const housingTypes = adForm.querySelectorAll('[name="type"]');

housingTypes.forEach((item) => {
  item.addEventListener('change', onHousingTypeChange);
});

pristine.addValidator(priceField, validatePrice, getPriceErrorMessage);

// Синхронизация времени заезда и выезда

const adFormTime = adForm.querySelector('.ad-form__element--time');
const timeIn = adForm.querySelector('[name="timein"]');
const timeOut = adForm.querySelector('[name="timeout"]');

adFormTime.addEventListener('change', (evt) => {
  timeIn.value = evt.target.value;
  timeOut.value = evt.target.value;
});

// Запуск валидации при отправке формы

adForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});
