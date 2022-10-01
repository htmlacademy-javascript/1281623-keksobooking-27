// Получение случайного целого числа в заданном интервале, включительно

function getRandomIntInclusive(min, max) {
  if (min < 0 || max <= min) {
    return 0 / 0;
  }

  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; // Максимум и минимум включаются
}

getRandomIntInclusive(0, 10);

// Получение случайного числа в заданном интервале, включительно

function getRandomFloatInt(min, max, amountOfDecimal) {
  if (min < 0 || max <= min) {
    return 0 / 0;
  }

  return (Math.random() * (max - min) + min).toFixed(amountOfDecimal);
}

getRandomFloatInt(0, 10, 3);
