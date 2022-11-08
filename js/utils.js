const getRandomInteger = (a, b) => {
  if (a < 0 || b < 0) {
    return NaN;
  }

  const min = Math.ceil(Math.min(a, b));
  const max = Math.floor(Math.max(a, b));
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const getRandomFloat = (a, b, amountOfDecimal = 1) => {
  if (a < 0 || b < 0 || amountOfDecimal < 0) {
    return NaN;
  }

  const min = Math.min(a, b);
  const max = Math.max(a, b);
  return Number((Math.random() * (max - min) + min).toFixed(amountOfDecimal));
};

const getRandomArrayElement = (arr) => arr[getRandomInteger(0, arr.length - 1)];

const shuffleArray = (arr) => {
  const length = getRandomInteger(1, arr.length);
  const resultArray = [];

  while (resultArray.length < length) {
    const index = getRandomInteger(0, arr.length - 1);
    const element = arr[index];

    if (!resultArray.includes(element)) {
      resultArray.push(element);
    }
  }
  return resultArray;
};

export { getRandomInteger, getRandomFloat, getRandomArrayElement, shuffleArray };
