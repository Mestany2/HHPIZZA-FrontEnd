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

// fix it
const DeleteItems = () => new Promise((resolve, reject) => {
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

export {
  getAllItems,
  DeleteItems,
};
