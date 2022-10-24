const adForm = document.querySelector('.ad-form');
const mapForm = document.querySelector('.map__filters');

const inputsInAdForm = adForm.querySelectorAll('input');
const selectsInAdForm = adForm.querySelectorAll('select');
const inputsInMapForm = mapForm.querySelectorAll('input');
const selectsInMapForm = mapForm.querySelectorAll('select');

function disableElements(elements) {
  elements.forEach((element) => {
    element.disabled = true;
  });
}

function activateElements(elements) {
  elements.forEach((element) => {
    element.disabled = false;
  });
}

function disableForm() {
  adForm.classList.add('ad-form--disabled');
  mapForm.classList.add('map__filters--disabled');

  disableElements(inputsInAdForm);
  disableElements(selectsInAdForm);
  disableElements(inputsInMapForm);
  disableElements(selectsInMapForm);
}

function activateForm() {
  adForm.classList.remove('ad-form--disabled');
  mapForm.classList.remove('map__filters--disabled');

  activateElements(inputsInAdForm);
  activateElements(selectsInAdForm);
  activateElements(inputsInMapForm);
  activateElements(selectsInMapForm);
}

export { disableForm, activateForm };

