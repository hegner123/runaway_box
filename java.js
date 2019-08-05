function showCoords(event) {
  var x = event.clientX;
  var y = Math.random() * 10;
  var coords = "X: " + x + ", Y: " + y;
  document.getElementById("demo").innerHTML = coords;
}

document.getElementById("box").addEventListener("click", moveBox);

function moveBox(event) {
  var x = Math.random() * 1000;
  var y = Math.random() * 1000;
  document.getElementById("box").style.left = x + "px";
  document.getElementById("box").style.top = x + "px";
}