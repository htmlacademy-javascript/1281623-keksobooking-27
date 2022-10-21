import './util.js';
import './data.js';
import { createOffers } from './create-offers.js';
import { renderOffers } from './render-offers.js';
import { getInactiveState } from './form-state.js';
import './form-validation.js';
import './map.js';
import './filter.js';

const offers = createOffers(1);
renderOffers(offers);

getInactiveState(false);
