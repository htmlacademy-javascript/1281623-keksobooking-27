import './slider.js';

const adForm = document.querySelector('.ad-form');

const pristine = new Pristine(adForm, {
  classTo: 'ad-form__element',
  errorClass: 'ad-form__element--invalid',
  errorTextParent: 'ad-form__element',
  errorTextClass: 'text-help',
});

const housingTypeSelect = adForm.querySelector('[name="type"]');
const housingTypeOptions = adForm.querySelectorAll('[name="type"]'); // ? каким образом тут создаётся массив
const priceInput = adForm.querySelector('[name="price"]');
const minPrices = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000,
};

const adFormTime = adForm.querySelector('.ad-form__element--time');
const timeInSelect = adForm.querySelector('[name="timein"]');
const timeOutSelect = adForm.querySelector('[name="timeout"]');

const roomNumberSelect = adForm.querySelector('[name="rooms"]');
const capacitySelect = adForm.querySelector('[name="capacity"]');
const roomNumberOptions = {
  '1 комната': ['для 1 гостя'],
  '2 комнаты': ['для 1 гостя', 'для 2 гостей'],
  '3 комнаты': ['для 1 гостя', 'для 2 гостей', 'для 3 гостей'],
  '100 комнат': ['не для гостей'],
};

// Валидация на соответствие типа жилья и минимальной цены за ночь
const validatePriceInput = (value) => value.length && parseInt(value, 10) >= minPrices[housingTypeSelect.value];

const getPriceErrorMessage = () => `Минимальная цена ${minPrices[housingTypeSelect.value]}`;

const onHousingTypeSelectChange = function () {
  priceInput.placeholder = minPrices[this.value];
  pristine.validate(priceInput.placeholder);
};

housingTypeOptions.forEach((option) => {
  option.addEventListener('change', onHousingTypeSelectChange);
});

pristine.addValidator(priceInput, validatePriceInput, getPriceErrorMessage);

// Синхронизация времени заезда и выезда
adFormTime.addEventListener('change', (evt) => {
  timeInSelect.value = evt.target.value;
  timeOutSelect.value = evt.target.value;
});

// Валидация на соответствие количества комнат и количества гостей
const validateRoomNumberSelect = () => roomNumberOptions[roomNumberSelect.value].includes(capacitySelect.value);

const getRoomNumberErrorMessage = () => `
    ${roomNumberSelect.value}
    ${capacitySelect.value}
    ${roomNumberSelect.value === '1 комната' ? 'недоступна' : 'недоступны'}
  `;

const onCapacitySelectChange = () => {
  pristine.validate(roomNumberSelect);
};

capacitySelect.addEventListener('change', onCapacitySelectChange);

pristine.addValidator(roomNumberSelect, validateRoomNumberSelect, getRoomNumberErrorMessage);
pristine.addValidator(capacitySelect, validateRoomNumberSelect);

// Запуск валидации при отправке формы
adForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});

export { pristine };
