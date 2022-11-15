import { resetSlider } from './slider.js';
import { resetMainPinMarker, renderMarkers } from './map.js';
import { getData } from './server.js';

const ALERT_SHOW_TIME = 5000;

const mapForm = document.querySelector('.map__filters');
const adForm = document.querySelector('.ad-form');
const submitButton = adForm.querySelector('[type="submit"]');
const resetButton = adForm.querySelector('[type="reset"]');

const successTemplate = document.querySelector('#success').content.querySelector('.success');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const errorButton = document.querySelector('#error').content.querySelector('.error__button');

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
  const success = successTemplate.cloneNode(true);
  document.body.append(success);

  success.addEventListener('click', () => {
    success.remove();
  }, { once: true }
  );

  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      success.remove();
    }
  }, { once: true }
  );
};

const showErrorMessage = () => {
  const error = errorTemplate.cloneNode(true);
  document.body.append(error);

  error.addEventListener('click', () => {
    error.remove();
  }, { once: true }
  );

  errorButton.addEventListener('click', () => {
    error.remove();
  }, { once: true }
  );

  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      error.remove();
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

const activateResetButton = () => {
  resetButton.click();
};

resetButton.addEventListener('click', () => {
  resetSlider();
  resetMainPinMarker();
  getData(renderMarkers, showAlert);
});

export {activateMapForm, activateAdForm, blockSubmitButton, unblockSubmitButton, activateResetButton, showSuccessMessage, showErrorMessage, showAlert};
