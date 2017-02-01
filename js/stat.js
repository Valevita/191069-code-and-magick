'use strict';

var getColumnColor = function (name) {
  if (name === 'Вы') {
    return 'rgba(255, 0, 0, 1)';
  }
  var alphaChannel = (0.1 + 0.9 * Math.random()).toFixed(1);
  return 'rgba(0, 0, 255,' + alphaChannel + ')';
};


window.renderStatistics = function (ctx, names, times) {

  var drawRect = function (color, x, y, width, height) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
  };

  drawRect('rgba(0, 0, 0, 0.7)', 110, 20, 420, 270);
  drawRect('white', 100, 10, 420, 270);

  var drawText = function (font, color, text, x, y) {
    ctx.font = font;
    ctx.fillStyle = color;
    ctx.fillText(text, x, y);
  };

  drawText('16px PT Mono', 'black', 'Ура вы победили!', 170, 40);
  drawText('16px PT Mono', 'black', 'Список результатов', 170, 60);

  var columnHeightMax = 150;
  var columnWidth = 40;
  var columnDistance = 50;
  var timeMax = 0;

  var getTimeMax = function (times) {
    for (var i = 0; i < times.length; i++) {
      if (times[i] > timeMax) {
        timeMax = times[i];
      }
    }
    return timeMax;
  };

  var maxTime = getTimeMax(times);
  var rate = maxTime > 0 ? columnHeightMax / maxTime : 0;

  for (var i = 0; i < names.length; i++) {
    var columnLeft = 130 + (columnDistance + columnWidth)*i;
    var columnHeight = times[i] * rate;
    drawRect(getColumnColor(names[i]), columnLeft, 250, columnWidth, -columnHeight);

    drawText('16px PT Mono', 'black', times[i].toFixed(0), columnLeft, 250 - columnHeight - 10);
    drawText('16px PT Mono', 'black', names[i], columnLeft, 270);
  }
};
