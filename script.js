let x = 0;
let y = 0;
document.addEventListener("mousemove", (event) => {
  x = event.pageX;
  y = event.pageY;
})
document.addEventListener("keydown", (event) => {
  if (event.key == "\\" && event.altKey) {
    var element = document.elementFromPoint(x, y);
    alert(
    `element details:
     id: ${element.id}
     class: ${element.className}
     innerHTML: ${element.innerHTML}
     tag: ${element.tagName}     
    `
    )
  }
})
