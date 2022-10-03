// Получение случайного целого числа в заданном интервале, включительно

function getRandomIntInclusive(min, max) {
  if (min < 0 || max <= min) {
    return NaN;
  }

  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; // Максимум и минимум включаются
}

getRandomIntInclusive(0, 10);

// Получение случайного числа в заданном интервале, включительно

function getRandomFloatInt(min, max, amountOfDecimal) {
  if (min < 0 || max <= min) {
    return NaN;
  }

  return (Math.random() * (max - min) + min).toFixed(amountOfDecimal);
}

getRandomFloatInt(0, 10, 3);

// Функция проверки максимальной длины строки

function checkMaximumLength(checkedString, maximalLenght) {
  if (checkedString.length <= maximalLenght) {
    return true;
  }

  return false;
}

checkMaximumLength('text of some string', 140);
