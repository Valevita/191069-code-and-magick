'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupOpenIcon = document.querySelector('.setup-open-icon');
  var setupClose = document.querySelector('.setup-close');
  var setupSubmit = document.querySelector('.setup-submit');

  var ESC_KEY_CODE = 27;
  var isKeydownOpen = false;

  var showSetupWindow = function () {
    setup.classList.remove('invisible');
    document.addEventListener('keydown', function (evt) {
      if (evt.keyCode === ESC_KEY_CODE) {
        setup.classList.add('invisible');
      }
    });
  };

  var closeSetupWindow = function (callback) {
    setup.classList.add('invisible');
    if (isKeydownOpen) {
      if (typeof callback === 'function') {
        callback();
        isKeydownOpen = false;
      }
    }
  };

  setupOpen.addEventListener('click', function () {
    showSetupWindow();
  });

  setupOpen.addEventListener('keydown', function (event) {
    if (window.utils.isEventActivated(event)) {
      showSetupWindow();
      isKeydownOpen = true;
    }
  });

  setupOpenIcon.addEventListener('mousedown', function () {
    setupOpenIcon.ariaPressed = 'true';
  });

  setupOpenIcon.addEventListener('mouseup', function () {
    setupOpenIcon.ariaPressed = 'false';
  });

  setupClose.addEventListener('click', function () {
    closeSetupWindow();
  });

  setupClose.addEventListener('keydown', function (event) {
    if (window.utils.isEventActivated(event)) {
      closeSetupWindow(function () {
        window.utils.setElementFocus(setupOpenIcon);
      });
    }
  });

  setupClose.addEventListener('mousedown', function () {
    setupClose.ariaPressed = 'true';
  });

  setupClose.addEventListener('mouseup', function () {
    setupClose.ariaPressed = 'false';
  });

  setupSubmit.addEventListener('click', function () {
    closeSetupWindow();
  });

  setupSubmit.addEventListener('keydown', function (event) {
    if (window.utils.isEventActivated(event)) {
      closeSetupWindow(function () {
        window.utils.setElementFocus(setupOpenIcon);
      });
    }
  });
})();


(function () {
  var userName = document.querySelector('.setup-user-name');
  userName.setAttribute('required', 'true');
  userName.setAttribute('maxlength', '50');
})();


(function () {
  var wizard = document.querySelector('#wizard');
  var wizardCoat = wizard.querySelector('#wizard-coat');
  var wizardEyes = wizard.querySelector('#wizard-eyes');
  var setupFireball = document.querySelector('.setup-fireball-wrap');

  var wizardCoatColors = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];

  var wizardEyesColors = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ];

  var fireballColors = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ];

  var fillElement = function (element, color) {
    element.style.fill = color;
  };

  var setElementBackground = function (element, color) {
    element.style.background = color;
  };

  window.colorizeElement(wizardCoat, wizardCoatColors, fillElement);
  window.colorizeElement(wizardEyes, wizardEyesColors, fillElement);
  window.colorizeElement(setupFireball, fireballColors, setElementBackground);

})();
