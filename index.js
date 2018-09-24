var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
context.strokeStyle = "black";
context.lineWidth = 1;
var BOARDLEN = 600;
var PIECELEN = 60;
for (i = 0; i <= BOARDLEN; i = i + 60) {
  context.moveTo(i, 0);
  context.lineTo(i, BOARDLEN);
  context.stroke();
}
for (j = 0; j <= BOARDLEN; j = j + 60) {
  context.moveTo(0, j);
  context.lineTo(BOARDLEN, j);
  context.stroke();
}
//drawLine(circle, true);
drawLine(line, false);
randomPoints();
//drawLine(xpow2, false);
//drawLine(sqrtX, false);

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
function randomPoints() {
  context.fillStyle = "#A9A9A9";
  var x, y, i;
  for (i = 0; i < 10; i++) {
    setTimeout(function() {
      x = getRandomInt(10);
      y = getRandomInt(10);
      context.fillRect(x * PIECELEN, BOARDLEN - (1 + y) * PIECELEN, 60, 60);
    }, 2000 * i);
  }
}

function drawLine(equation, bSquareRoot) {
  context.fillStyle = "#FF0000";
  var y, y2;
  for (var x = 0; x < 10; x++) {
    y = equation(x);
    if (bSquareRoot) {
      y2 = equation(x, true);
    }
    if (y < 10) {
      context.fillRect(x * PIECELEN, BOARDLEN - (1 + y) * PIECELEN, 60, 60);
      if (bSquareRoot) {
        context.fillRect(x * PIECELEN, BOARDLEN - (1 + y2) * PIECELEN, 60, 60);
      }
    }
  }
}

function line(x) {
  return x;
}
function xpow2(x) {
  return Math.pow(x, 2);
}
function sqrtX(x) {
  return Math.floor(Math.pow(x, 0.5));
}
function circle(x, bSquareRoot = false) {
  var y;
  var radius = 2;
  var xDis = 5;
  var yDis = 5;
  var eqPart = Math.floor(
    Math.pow(Math.pow(radius, 2) - Math.pow(x - xDis, 2), 0.5)
  );
  if (bSquareRoot) {
    y = -eqPart + yDis;
  } else {
    y = eqPart + yDis;
  }
  return y;
}
