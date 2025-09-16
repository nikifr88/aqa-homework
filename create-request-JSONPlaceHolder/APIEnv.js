const axios = require("axios");

const placeHolderAPI = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

//add interceptors for axios
placeHolderAPI.interceptors.request.use(function (config) {
  console.log(config.data)
  return config
})

placeHolderAPI.interceptors.response.use(function onFulfilled(response) {
  console.log(response.data);
  return response;
}, function onRejected(error) {
  return Promise.reject(error);
});

module.exports = {
  placeHolderAPI
};