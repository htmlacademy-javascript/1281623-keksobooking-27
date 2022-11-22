import { sendData } from './server.js';
import { blockSubmitButton, unblockSubmitButton, showSuccessMessage, showErrorMessage, resetAdForm } from './form-utils.js';

const minPrices = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000,
};

const roomNumberOptions = {
  '1': ['1'],
  '2': ['1', '2'],
  '3': ['1', '2', '3'],
  '100': ['0'],
};

const adForm = document.querySelector('.ad-form');
const housingTypeSelect = adForm.querySelector('[name="type"]');
const housingTypeOptions = adForm.querySelectorAll('[name="type"]');
const priceInput = adForm.querySelector('[name="price"]');

const roomNumberSelect = adForm.querySelector('[name="rooms"]');
const capacitySelect = adForm.querySelector('[name="capacity"]');

const adFormTime = adForm.querySelector('.ad-form__element--time');
const timeInSelect = adForm.querySelector('[name="timein"]');
const timeOutSelect = adForm.querySelector('[name="timeout"]');

const pristine = new Pristine(adForm, {
  classTo: 'ad-form__element',
  errorClass: 'ad-form__element--invalid',
  errorTextParent: 'ad-form__element',
  errorTextClass: 'text-help',
});

const initValidation = () => {
  const validateTypesAndPrices = () => {
    const validatePriceInput = (value) => value.length && parseInt(value, 10) >= minPrices[housingTypeSelect.value];

    const getPriceErrorMessage = () => `Минимальная цена ${minPrices[housingTypeSelect.value]}`;

    housingTypeOptions.forEach((option) => {
      option.addEventListener('change', function () {
        priceInput.placeholder = minPrices[this.value];
        pristine.validate(priceInput.placeholder);
      });
    });

    pristine.addValidator(priceInput, validatePriceInput, getPriceErrorMessage);
  };

  const validateRoomsAndCapasity = () => {
    const validateRoomNumberSelect = () => roomNumberOptions[roomNumberSelect.value].includes(capacitySelect.value);

    const getRoomNumberErrorMessage = () => `
        ${roomNumberSelect.options[roomNumberSelect.selectedIndex].textContent}
        ${capacitySelect.options[capacitySelect.selectedIndex].textContent}
        ${roomNumberSelect.options[roomNumberSelect.selectedIndex].textContent === '1 комната' ? 'недоступна' : 'недоступны'}
      `;

    capacitySelect.addEventListener('change', () => {
      pristine.validate(roomNumberSelect);
    });

    pristine.addValidator(roomNumberSelect, validateRoomNumberSelect, getRoomNumberErrorMessage);
    pristine.addValidator(capacitySelect, validateRoomNumberSelect);
  };

  const synchronizeTimeInAndTimeOut = () => {
    adFormTime.addEventListener('change', (evt) => {
      timeInSelect.value = evt.target.value;
      timeOutSelect.value = evt.target.value;
    });
  };

  validateTypesAndPrices();
  validateRoomsAndCapasity();
  synchronizeTimeInAndTimeOut();
};

const setAdFormSubmit = () => {
  adForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();
    if (isValid) {
      blockSubmitButton();
      sendData(
        () => {
          showSuccessMessage();
          unblockSubmitButton();
          resetAdForm();
        },
        () => {
          showErrorMessage();
          unblockSubmitButton();
        },
        new FormData(evt.target),
      );
    }
  });
};

export { pristine, initValidation, setAdFormSubmit };
