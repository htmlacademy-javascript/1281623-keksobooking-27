const slider = document.querySelector('.ad-form__slider');
const priceInput = document.querySelector('#price');

noUiSlider.create(slider, {
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

slider.noUiSlider.on('update', () => {
  priceInput.value = slider.noUiSlider.get();
});

priceInput.addEventListener('input', () => {
  if (priceInput.value === '') {
    slider.noUiSlider.set(0);
    priceInput.value = '';
  } else if (priceInput.value === '0') {
    slider.noUiSlider.set(0);
  } else if (priceInput.value >= 1) {
    slider.noUiSlider.set(priceInput.value);
  }
});
