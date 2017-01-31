'use strict';

var getColumnColor = function(name) {
  if (name === 'Вы') {
    return 'rgba(255, 0, 0, 1)';
  }
  var alphaChannel = (0.1 + 0.9 * Math.random()).toFixed(1);
  return ['rgba(0, 0, 255,', alphaChannel, ')'].join('');
};

window.renderStatistics = function (ctx, names, times) {
  var drawRect = function (color, x, y, width, height) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
  };

  drawRect('rgba(0, 0, 0, 0.7)', 110, 20, 420, 270);
  drawRect('white', 100, 10, 420, 270);

  ctx.font = '16px PT Mono';
  ctx.fillStyle = 'black';
  ctx.fillText('Ура вы победили!', 170, 40);
  ctx.fillText('Список результатов', 170, 60);
  console.log(names);
  console.log(times);

  var columnHeightMax = 150;
  var columnWidth = 40;
  var columnDistance = 50;
  var timeMax = -1;


  for (var i = 0; i < names.length; i++) {
    if (times[i] > timeMax) {
      timeMax = times[i];
    }
  }

  var rate;
  if (timeMax > 0) {
    rate = columnHeightMax / timeMax;
  } else {
    rate = 0;
  }

  for (var i = 0; i < names.length; i++) {
    var columnLeft = 130 + (columnDistance + columnWidth)*i;
    var columnHeight = times[i] * rate;
    drawRect(getColumnColor(names[i]), columnLeft, 250, columnWidth, -columnHeight);

    ctx.font = '16px PT Mono';
    ctx.fillStyle = 'black';
    ctx.fillText(times[i].toFixed(0), columnLeft, 250 - columnHeight - 10);
    ctx.fillText(names[i], columnLeft, 270);
  }
};



