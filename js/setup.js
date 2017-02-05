'use strict';

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');
var setupSubmit = document.querySelector('.setup-submit');

var ENTER_KEY_CODE = 13;
var ESC_KEY_CODE = 27;

var isEventActivated = function (event) {
  return event.keyCode && event.keyCode === ENTER_KEY_CODE;
};

var showSetupWindow = function () {
  setup.classList.remove('invisible');
  document.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ESC_KEY_CODE) {
      setup.classList.add('invisible');
    }
  });
};

var closeSetupWindow = function () {
  setup.classList.add('invisible');
};


setupOpen.addEventListener('click', function () {
  showSetupWindow();
});

setupOpen.addEventListener('keydown', function (event) {
  if (isEventActivated(event)) {
    showSetupWindow();
  }
});

setupClose.addEventListener('click', function () {
  closeSetupWindow();
});

setupClose.addEventListener('keydown', function (event) {
  if (isEventActivated(event)) {
    closeSetupWindow();
  }
});

setupSubmit.addEventListener('click', function () {
  closeSetupWindow();
});

setupSubmit.addEventListener('keydown', function (event) {
  if (isEventActivated(event)) {
    closeSetupWindow();
  }
});

var wizard = document.querySelector('#wizard');
var wizardCoat = wizard.querySelector('#wizard-coat');
var randomNum = function (x, y) {
  return Math.floor(x + Math.random() * y);
};
var wizardCoatColors = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

wizardCoat.addEventListener('click', function () {
  wizardCoat.style.fill = wizardCoatColors[randomNum(0, 6)];
});

var wizardEyes = wizard.querySelector('#wizard-eyes');
var wizardEyesColors = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

wizardEyes.addEventListener('click', function () {
  wizardEyes.style.fill = wizardEyesColors[randomNum(0, 5)];
});

var setupFireball = document.querySelector('.setup-fireball-wrap');
var fireballColors = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];

setupFireball.addEventListener('click', function () {
  setupFireball.style.background = fireballColors[randomNum(0, 5)];
});

var userName = document.querySelector('.setup-user-name');

userName.setAttribute('required', 'true');
userName.setAttribute('maxlength', '50');
