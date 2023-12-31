import { clientCredentials } from '../utils/client';

const getUserOrders = (userId) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/api/getUserOrders/${userId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve((data)))
    .catch(reject);
});

const createOrder = (payload) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/api/CreateOrder`, {
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

const deleteOrder = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/api/order/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((data) => resolve(data))
    .catch(reject);
});

const getOrders = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/api/allOrders`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve((data)))
    .catch(reject);
});

const updateOrder = (id, payload) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/api/Order/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then(resolve)
    .catch(reject);
});

export {
  getUserOrders,
  deleteOrder,
  createOrder,
  getOrders,
  updateOrder,
};
