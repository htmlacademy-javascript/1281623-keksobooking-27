import { initMap, renderMarkers } from './map.js';
import { getData } from './server.js';
import { activateAdForm, showAlert } from './form-utils.js';
import { initSlider } from './slider.js';
import { validateTypesAndPrices, validateRoomsAndCapasity, synchronizeTimeInAndTimeOut, setAdFormSubmit } from './form-validation.js';
import { uploadAvatar, uploadPhotos } from './form-images.js';

initMap(() => {
  getData(renderMarkers, showAlert);
  activateAdForm();
  initSlider();
});

validateTypesAndPrices();
validateRoomsAndCapasity();
synchronizeTimeInAndTimeOut();
setAdFormSubmit();
uploadAvatar();
uploadPhotos();
