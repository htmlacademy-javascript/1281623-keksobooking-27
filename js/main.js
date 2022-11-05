import { createOffers } from './create-offers.js';
import { renderOffers } from './render-offers.js';
import { disableForm, activateForm } from './form-state.js';
import './form-validation.js';

const offers = createOffers(2);
renderOffers(offers);

disableForm();
activateForm();
