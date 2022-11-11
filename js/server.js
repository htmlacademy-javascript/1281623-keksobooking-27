const getData = (onSuccess, OnError) => {
  fetch('https://27.javascript.pages.academy/keksobooking/data')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Ошибка загрузки информации с сервера');
    })
    .then((data) => onSuccess(data))
    .catch((error) => OnError(error.message));
};

const sendData = (onSuccess, OnError, body) => {
  fetch(
    'https://27.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body
    }
  )
    .then((response) => {
      if (response.ok) {
        return onSuccess();
      }
      throw new Error('Ошибка размещения объявления');
    })
    .catch((error) => OnError(error.message));
};

export { getData, sendData };
