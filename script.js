let x = 0;
let y = 0;
document.addEventListener("mousemove", (event) => {
  x = event.pageX;
  y = event.pageY;
})
document.addEventListener("click", (event) => {
  var element = document.elementFromPoint(x, y);
  alert(element)
})
