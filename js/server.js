import { activateMapForm } from './form-utils.js';

const Url = {
  DATA: 'https://27.javascript.pages.academy/keksobooking/data',
  SERVER: 'https://27.javascript.pages.academy/keksobooking',
};

const getData = (onSuccess, OnError) => {
  fetch(Url.DATA)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Ошибка загрузки данных с сервера');
    })
    .then((data) => {
      onSuccess(data);
      activateMapForm();
    })
    .catch(() => OnError('Ошибка загрузки данных с сервера'));
};

const sendData = (onSuccess, OnError, body) => {
  fetch(
    Url.SERVER,
    {
      method: 'POST',
      body: body,
    }
  )
    .then((response) => {
      if (response.ok) {
        return onSuccess();
      }
      throw new Error();
    })
    .catch(() => OnError());
};

export { getData, sendData };
