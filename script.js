let x, y
document.addEventListener("mousemove", (event) => {
  x = event.pageX
  y = event.pageY
})
document.addEventListener("keydown", (event) => {
  if (event.key == "\\") {
    console.log(document.elementFromPoint(x, y))
  }
})
