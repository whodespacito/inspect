let x = 0;
let y = 0;
document.addEventListener("mousemove", (event) => {
  x = event.pageX;
  y = event.pageY;
})
document.addEventListener("keydown", (event) => {
  if (event.key == "\\" && event.altKey) {
    var element = document.elementFromPoint(x, y);
    var string = "element details:"
    for (const [key, value] of Object.entries(element)) {
      string = string + "\n" + key + ": " + value
    }
    alert(string)
  }
})
