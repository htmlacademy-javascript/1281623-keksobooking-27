import { disableForm, activateForm } from './form-state.js';
import { createOffers } from './create-offers.js';
import { map, coordinatesOfTokyo, renderOffers } from './map.js';
import './form-validation.js';


disableForm();

const offers = createOffers(10);
renderOffers(offers);


map.on('load', () => {
  activateForm();
})
  .setView(coordinatesOfTokyo, 13);
