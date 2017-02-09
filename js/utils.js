'use strict';

window.utils = {};

window.ENTER_KEY_CODE = 13;

var randomNumber = function (maxValue) {
  return Math.floor(Math.random() * maxValue);
};

window.utils.isEventActivated = function (event) {
  return event.keyCode && event.keyCode === window.ENTER_KEY_CODE;
};

window.utils.getRandomElement = function (array) {
  return array[randomNumber(array.length)];
};

window.utils.getRandomElementExcept = function (array, color) {
  var newColor;
  do {
    newColor = window.utils.getRandomElement(array);
  } while (!newColor || color === newColor);
  return newColor;
};

