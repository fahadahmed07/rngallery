import axios from 'axios';

const simpleApiGetWithoutToken = (url) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${url}`, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export {simpleApiGetWithoutToken};
