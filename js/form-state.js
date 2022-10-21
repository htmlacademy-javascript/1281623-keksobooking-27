const adForm = document.querySelector('.ad-form');
const mapForm = document.querySelector('.map__filters');

const inputsInAdForm = adForm.querySelectorAll('input');
const selectsInAdForm = adForm.querySelectorAll('select');

const inputsInMapForm = mapForm.querySelectorAll('input');
const selectsInMapForm = mapForm.querySelectorAll('select');

function addClass(element) {
  element.classList.add(`${element.classList}--disabled`);
}

function addAttribute(elements) {
  elements.forEach((element) => {
    element.disabled = true;
  });
}

function getInactiveState(parameter) {
  if (parameter !== true) {
    addClass(adForm);
    addClass(mapForm);

    addAttribute(inputsInAdForm);
    addAttribute(selectsInAdForm);

    addAttribute(inputsInMapForm);
    addAttribute(selectsInMapForm);
  }
}

export { getInactiveState };

