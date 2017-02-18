'use strict';

window.colorizeElement = (function () {
  var currentColor = null;
  var setCurrentColor = function (element, colors) {
    currentColor = window.utils.getRandomElementExcept(colors, currentColor);
    return currentColor;
  };
  return function (element, colors, callback) {
    element.addEventListener('click', function () {
      if (typeof callback === 'function') {
        callback(element, setCurrentColor(element, colors));
      }
    });
    element.addEventListener('keydown', function (event) {
      if (window.utils.isEventActivated(event)) {
        if (typeof callback === 'function') {
          callback(element, setCurrentColor(element, colors));
        }
      }
    });
  };
})();


