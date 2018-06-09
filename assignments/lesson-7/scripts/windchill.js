var m = parseFloat(document.getElementById("max").innerHTML);    
var h = parseInt(document.getElementById("high").innerHTML);   
var l = parseInt(document.getElementById("low").innerHTML);   


var w = (h + l) / 2;
var s = Math.pow(m, 0.16); 
var f = 35.74 + (0.6215 * w - 35.75 * s) + (0.4275 * w * s);

document.getElementById("wind").innerHTML = Math.round(f * 10) / 10 + '°F';