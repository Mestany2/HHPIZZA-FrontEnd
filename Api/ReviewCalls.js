import { clientCredentials } from '../utils/client';

const addReview = (id, payload) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/api/addReview/${id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then(async (res) => {
      let data;
      if (res.ok) {
        data = await res.json();
        resolve(data);
      }
    })
    .catch(reject);
});

const getOrderReview = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/api/getReview/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve((data)))
    .catch(reject);
});

export {
  addReview,
  getOrderReview,
};
