import './util.js';
import './data.js';
import { renderOffers } from './render-offers.js';
import { createOffers } from './create-offers.js';
import './validation.js';
import './map.js';
import './filter.js';

const offers = createOffers(1);
renderOffers(offers);
