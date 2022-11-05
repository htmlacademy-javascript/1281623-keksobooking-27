const adForm = document.querySelector('.ad-form');

const pristine = new Pristine(adForm, {
  classTo: 'ad-form__element',
  errorClass: 'ad-form__element--invalid',
  errorTextParent: 'ad-form__element',
  errorTextTag: 'div',
  errorTextClass: 'text-help',
});

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

pristine.addValidator(roomNumber, validateRoomNumber, getRoomNumberErrorMessage);
pristine.addValidator(capacity, validateRoomNumber, getRoomNumberErrorMessage);


adForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});
