import { showErrorMapMessage } from '../error/map-error.js';
import { showErrorFormMessage } from '../error/form-post-error.js';
import { resetForm } from '../utils/reset-form.js';

const getAdsDataServer = (onSuccess, layer) => {
  fetch('https://27.javascript.pages.academy/keksobooking/data')
    .then((response) => {
      if (response.ok) {
        return response.json()
          .then((ads) => ads.forEach((ad) => onSuccess(ad, layer)));

      } else {
        showErrorMapMessage();
      }
    })
    .catch(() => showErrorMapMessage());
};

const sendFormData = (onSuccess, body) => {
  fetch(
    'https://27.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body
    }
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
        resetForm();
      } else {
        showErrorFormMessage();
      }
    })
    .catch(() => showErrorFormMessage());
};

export { getAdsDataServer as getDataServer, sendFormData };
