'use strict';

/* window.utils = {};

var randomNumber = function (maxValue) {
  return Math.floor(Math.random() * maxValue);
};

window.utils.isEventActivated = (function () {
  var ENTER_KEY_CODE = 13;
  return function (event) {
    return event.keyCode && event.keyCode === ENTER_KEY_CODE;
  };
})();


window.utils.getRandomElement = function (array) {
  return array[randomNumber(array.length)];
};

window.utils.getRandomElementExcept = function (array, color) {
  var newColor;
  do {
    newColor = window.utils.getRandomElement(array);
  } while (!newColor || color === newColor);
  return newColor;
};*/

window.utils = (function () {
  var ENTER_KEY_CODE = 13;

  var randomNumber = function (maxValue) {
    return Math.floor(Math.random() * maxValue);
  };

  var getRandomElement = function (array) {
    return array[randomNumber(array.length)];
  };

  return {
    isEventActivated: function (event) {
      return event.keyCode && event.keyCode === ENTER_KEY_CODE;
    },

    getRandomElementExcept: function (array, color) {
      var newColor;
      do {
        newColor = getRandomElement(array);
      } while (!newColor || color === newColor);
      return newColor;
    }
  };
})();

