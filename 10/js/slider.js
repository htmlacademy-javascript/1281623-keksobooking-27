const sliderElement = document.querySelector('.ad-form__slider');
const priceInput = document.querySelector('#price');

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100000,
  },
  start: priceInput.placeholder,
  step: 1,
  connect: 'upper',
  format: {
    to: function (value) {
      return value.toFixed(0);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

sliderElement.noUiSlider.on('update', () => {
  priceInput.value = sliderElement.noUiSlider.get();
});

priceInput.addEventListener('input', () => {
  if (priceInput.value === '') {
    sliderElement.noUiSlider.set(0);
    priceInput.value = '';
  } else if (priceInput.value === '0') {
    sliderElement.noUiSlider.set(0);
  } else if (priceInput.value >= 1) {
    sliderElement.noUiSlider.set(priceInput.value);
  }
});
