EQUATION DISPLAY
===
* Can calculate the value of pi by using the Monte Carlo technique: http://www.eveandersson.com/pi/monte-carlo-circle <br />
* Can change which equation to display on the grid (steps indicated further down this doc)<br />
* Implemented Integral by Summation to deteremine the area of a specified range through the canvas<br />
* Slider to change speed of animations<br /><br/>
* HTML & Javascript<br /><br/>
To switch modes
* On line 23 and 30 in index.html change circle to any of the following: xpow2, line, sqrtX along with changing the boolean to false<br />
```
<button onclick="start(circle,true)">Start</button>
<button onclick="start(line,false)">Start</button>
<button onclick="start(sqrtX,false)">Start</button>
<button onclick="start(xpow2,false)">Start</button>
<button onclick="integrateBySummation(line)">Integrate</button>
<button onclick="integrateBySummation(sqrtX)">Integrate</button>
<button onclick="integrateBySummation(xpow2)">Integrate</button>
```
Disclaimer: At the moment can't integrate circle as it only works for single input single output functions
