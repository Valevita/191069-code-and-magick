'use strict';

window.colorizeElement = function (element, colors, property) {
  var currentColor = null;
  var ENTER_KEY_CODE = 13;
  var setCurrentColor = function () {
    currentColor = window.utils.getRandomElementExcept(colors, currentColor);
    element.style[property] = currentColor;
  };
  element.addEventListener('click', setCurrentColor);
  element.addEventListener('keydown', function (event) {
    if (event.keyCode === ENTER_KEY_CODE) {
      setCurrentColor();
    }
  });
};
