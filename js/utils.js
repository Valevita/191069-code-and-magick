'use strict';

window.utils = {};

window.utils.getRandomElement = function (array) {
  var randomNumber = function (x) {
    return Math.floor(Math.random() * x);
  };
  return array[randomNumber(array.length)];
};

window.utils.getRandomElementExcept = function (array, color) {
  var newColor;
  do {
    newColor = window.utils.getRandomElement(array);
  } while (!newColor || color === newColor);
  return newColor;
};

