var elements = document.getElementsByClassName("column");
var image = document.getElementsByClassName("sary");
var i;
function one() {
    for (i = 0; i < elements.length; i++) {
    elements[i].style.msFlex = "100%";  // IE10
    elements[i].style.flex = "100%";
  }
}
function one() {
    for (i = 0; i < image.length; i++) {
    image[i].style.width = "800px";
  }
}
function two() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.msFlex = "50%";  // IE10
    elements[i].style.flex = "50%";
  }
}
function two() {
    for (i = 0; i < image.length; i++) {
    image[i].style.width = "400px";
  }
}
function four() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.msFlex = "25%";  // IE10
    elements[i].style.flex = "25%";
  }
}
function four() {
    for (i = 0; i < image.length; i++) {
    image[i].style.width = "200px";
  }
}
// Add active class to the current button (highlight it)
var header = document.getElementById("myHeader");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}