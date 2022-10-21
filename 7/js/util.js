function getRandomInteger(a, b) {
  if (a < 0 || b < 0) {
    return NaN;
  }

  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

function getRandomFloat(a, b, amountOfDecimal = 1) {
  if (a < 0 || b < 0 || amountOfDecimal < 0) {
    return NaN;
  }

  const lower = Math.min(a, b);
  const upper = Math.max(a, b);
  const result = Math.random() * (upper - lower) + lower;

  return Number(result.toFixed(amountOfDecimal));
}

function getRandomArrayElement(array) {
  return array[getRandomInteger(0, array.length - 1)];
}

function getRandomArray(features) {
  const lengthOfArray = getRandomInteger(1, features.length);
  const array = [];

  while (array.length < lengthOfArray) {
    const indexOfArray = getRandomInteger(0, features.length - 1);
    const element = features[indexOfArray];

    if (!array.includes(element)) {
      array.push(element);
    }
  }
  return array;
}

export { getRandomInteger, getRandomFloat, getRandomArrayElement, getRandomArray };
