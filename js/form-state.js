const adForm = document.querySelector('.ad-form');
const mapForm = document.querySelector('.map__filters');

const fieldsetsInAdForm = adForm.querySelectorAll('fieldset');
const fieldsetsInMapForm = mapForm.querySelectorAll('fieldset');
const selectsInMapForm = mapForm.querySelectorAll('select');

const disableElements = (elements) => {
  elements.forEach((element) => {
    element.disabled = true;
  });
};

const activateElements = (elements) => {
  elements.forEach((element) => {
    element.disabled = false;
  });
};

const disableForm = () => {
  adForm.classList.add('ad-form--disabled');
  mapForm.classList.add('map__filters--disabled');

  disableElements(fieldsetsInAdForm);
  disableElements(fieldsetsInMapForm);
  disableElements(selectsInMapForm);
};

const activateForm = () => {
  adForm.classList.remove('ad-form--disabled');
  mapForm.classList.remove('map__filters--disabled');

  activateElements(fieldsetsInAdForm);
  activateElements(fieldsetsInMapForm);
  activateElements(selectsInMapForm);
};

disableForm();

export { activateForm };


