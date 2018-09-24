var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
context.strokeStyle = "black";
context.lineWidth = 1;
var BOARDLEN = 540;
var PIECELEN = 60;
var GRIDSIZE = BOARDLEN / PIECELEN;
createBoard();

//start(circle, true);
//start(line, false);
//drawLine(xpow2, false);
//drawLine(sqrtX, false);
function start(equation, bSquareRoot) {
  createBoard();
  drawLine(equation, bSquareRoot);
  randomPoints(equation, bSquareRoot);
}
function createBoard() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  for (i = 0; i <= BOARDLEN; i = i + PIECELEN) {
    context.moveTo(i, 0);
    context.lineTo(i, BOARDLEN);
    context.stroke();
  }
  for (j = 0; j <= BOARDLEN; j = j + PIECELEN) {
    context.moveTo(0, j);
    context.lineTo(BOARDLEN, j);
    context.stroke();
  }
}
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
function randomPoints(equation, bSquareRoot) {
  context.fillStyle = "#A9A9A9";
  var x, y, i, yEq, yEq2;
  var count = 0,
    countTotal = 0;
  for (i = 0; i < 10; i++) {
    setTimeout(function() {
      x = getRandomInt(GRIDSIZE);
      y = getRandomInt(GRIDSIZE);
      yEq = equation(x);
      if (bSquareRoot) {
        yEq2 = equation(x, bSquareRoot);
      }

      if (y <= yEq) {
        if (bSquareRoot) {
          if (y >= yEq2) {
            count++;
          }
        } else {
          count++;
        }
      }
      countTotal++;
      console.log(x, y, yEq, yEq2, count);
      document.getElementById("totalPoints").innerHTML = countTotal;
      document.getElementById("circlePoints").innerHTML = count;
      context.fillRect(x * PIECELEN, BOARDLEN - (1 + y) * PIECELEN, 60, 60);
    }, 10 * i * document.getElementById("slider").value);
    //
  }
}

function drawLine(equation, bSquareRoot) {
  context.fillStyle = "#FF0000";
  var y, y2;
  for (var x = 0; x < GRIDSIZE; x++) {
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
  var radius = 4;
  var xDis = 4;
  var yDis = 4;
  var eqPart = Math.floor(
    Math.pow(Math.pow(radius, 2) - Math.pow(x - xDis, 2), 0.5)
  );
  if (bSquareRoot) {
    y = -eqPart + yDis;
  } else {
    y = eqPart + yDis;
  }
  if (isNaN(y)) {
    y = 11;
  }
  return y;
}
