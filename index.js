"use strict";

const axios = require("axios");

const baseUrl = "http://api.icndb.com/";

function _callAxios(url) {
  axios.get(url).then((response) => {
    return response.data;
  });
}

function getRandomJoke() {
  const url = baseUrl+"jokes/random/";

  return _callAxios(url);
}

function getRandomJokes(number) {
  const url = baseUrl+"jokes/random/"+number

  return _callAxios(url);
}

function getJoke(id) {
  const url = baseUrl+"jokes/"+id

  return _callAxios(url);
}

function getNumberOfJokes() {
  const url = baseUrl+"jokes/count/";

  return _callAxios(url);
}

function getCategories() {
  const url = baseUrl+"categories";

  return _callAxios(url);
}

// export the module
module.exports = {
    getRandomJoke: getRandomJoke(),
    getRandomJokes: getRandomJokes(),
    getNumberOfJokes: getNumberOfJokes(),
    getCategories: getCategories()
};
