function getRandomInteger(a, b) {
  if (a < 0 || b < 0) {
    return NaN;
  }

  const min = Math.ceil(Math.min(a, b));
  const max = Math.floor(Math.max(a, b));
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomFloat(a, b, amountOfDecimal = 1) {
  if (a < 0 || b < 0 || amountOfDecimal < 0) {
    return NaN;
  }

  const min = Math.min(a, b);
  const max = Math.max(a, b);
  return Number((Math.random() * (max - min) + min).toFixed(amountOfDecimal));
}

function getRandomArrayElement(arr) {
  return arr[getRandomInteger(0, arr.length - 1)];
}

function shuffleArray(sourse) {
  const lengthOfArray = getRandomInteger(1, sourse.length);
  const result = [];

  while (result.length < lengthOfArray) {
    const indexOfArray = getRandomInteger(0, sourse.length - 1);
    const element = sourse[indexOfArray];

    if (!result.includes(element)) {
      result.push(element);
    }
  }
  return result;
}

export { getRandomInteger, getRandomFloat, getRandomArrayElement, shuffleArray };
