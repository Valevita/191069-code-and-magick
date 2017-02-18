'use strict';

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
    },

    setElementFocus: function (element) {
      element.focus();
    }
  };
})();

