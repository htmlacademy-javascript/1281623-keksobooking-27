import { initMap, renderMarkers } from './map.js';
import { getData } from './server.js';
import { activateAdForm, showAlert } from './form-utils.js';
import { initSlider } from './slider.js';
import { initValidation, setAdFormSubmit } from './form-validation.js';
import { setUploadAvatar, setUploadPhotos } from './form-images.js';
import './filter.js';

initMap(() => {
  getData(renderMarkers, showAlert);
  activateAdForm();
  initSlider();
});

initValidation();
setAdFormSubmit();
setUploadAvatar();
setUploadPhotos();
