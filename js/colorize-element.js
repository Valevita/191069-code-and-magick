'use strict';

window.colorizeElement = (function () {
  var currentColor = null;
  var setCurrentColor = function (element, colors, property) {
    currentColor = window.utils.getRandomElementExcept(colors, currentColor);
    element.style[property] = currentColor;
  };
  return function (element, colors, property) {
    element.addEventListener('click', function () {
      setCurrentColor(element, colors, property);
    });
    element.addEventListener('keydown', function (event) {
      if (window.utils.isEventActivated(event)) {
        setCurrentColor(element, colors, property);
      }
    });
  };
})();


