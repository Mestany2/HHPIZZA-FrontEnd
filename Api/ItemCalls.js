import { clientCredentials } from '../utils/client';

const getAllItems = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/api/allItems`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve((data)))
    .catch(reject);
});

const deleteItem = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/api/item/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((data) => resolve(data))
    .catch(reject);
});

const getOrderItems = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/api/OrderDetails/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve((data)))
    .catch(reject);
});

const createItem = (id, payload) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/api/items/${id}`, {
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

const updateItem = (id, payload) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/api/items/${id}`, {
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
  getAllItems,
  deleteItem,
  getOrderItems,
  createItem,
  updateItem,
};
