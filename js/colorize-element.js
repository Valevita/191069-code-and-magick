'use strict';

/* window.colorizeElement = function (element, colors, property) {
  var currentColor = null;
  var setCurrentColor = function () {
    currentColor = window.utils.getRandomElementExcept(colors, currentColor);
    element.style[property] = currentColor;
  };
  element.addEventListener('click', setCurrentColor);
  element.addEventListener('keydown', function (event) {
    if (window.utils.isEventActivated(event)) {
      setCurrentColor();
    }
  });
};*/

/* window.colorizeElement = (function () {
  return function (element, colors, property) {
    var currentColor = null;
    var setCurrentColor = function () {
      currentColor = window.utils.getRandomElementExcept(colors, currentColor);
      element.style[property] = currentColor;
    };
    element.addEventListener('click', setCurrentColor);
    element.addEventListener('keydown', function (event) {
      if (window.utils.isEventActivated(event)) {
        setCurrentColor();
      }
    });
  };
})();*/

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


