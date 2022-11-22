import { resetSlider } from './slider.js';
import { resetMap, renderMarkers } from './map.js';
import { resetAvatarAndPhoto } from './form-images.js';
import { resetMapForm } from './filter.js';
import { getData } from './server.js';

const ALERT_SHOW_TIME = 5000;

const mapForm = document.querySelector('.map__filters');
const adForm = document.querySelector('.ad-form');
const submitButton = adForm.querySelector('[type="submit"]');
const resetButton = adForm.querySelector('[type="reset"]');

const successMessageTemplate = document.querySelector('#success').content.querySelector('.success');
const errorMessageTemplate = document.querySelector('#error').content.querySelector('.error');
const errorButton = document.querySelector('#error').content.querySelector('.error__button');

const isEscapeKey = (evt) => evt.key === 'Escape';

const activateMapForm = () => {
  mapForm.classList.remove('map__filters--disabled');
};

const activateAdForm = () => {
  adForm.classList.remove('ad-form--disabled');
};

const blockSubmitButton = () => {
  submitButton.disabled = true;
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
};

const showSuccessMessage = () => {
  const successMessage = successMessageTemplate.cloneNode(true);
  document.body.append(successMessage);

  successMessage.addEventListener('click', () => {
    successMessage.remove();
  }, { once: true }
  );

  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      successMessage.remove();
    }
  }, { once: true }
  );
};

const showErrorMessage = () => {
  const errorMessage = errorMessageTemplate.cloneNode(true);
  document.body.append(errorMessage);

  errorMessage.addEventListener('click', () => {
    errorMessage.remove();
  }, { once: true }
  );

  errorButton.addEventListener('click', () => {
    errorMessage.remove();
  }, { once: true }
  );

  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      errorMessage.remove();
    }
  }, { once: true }
  );
};

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '1000';
  alertContainer.style.position = 'fixed';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

const resetAdForm = () => {
  resetButton.click();
};

resetButton.addEventListener('click', () => {
  resetSlider();
  resetMap();
  resetAvatarAndPhoto();
  resetMapForm();
  getData(renderMarkers, showAlert);
});

export {activateMapForm, activateAdForm, blockSubmitButton, unblockSubmitButton, showSuccessMessage, showErrorMessage, showAlert, resetAdForm};
