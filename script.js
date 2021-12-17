let x = 0;
let y = 0;
document.addEventListener("mousemove", (event) => {
  x = event.movementX;
  y = event.movementY;
})
document.addEventListener("keydown", (event) => {
  if (event.key == "\\") {
    var element = document.elementFromPoint(x, y);
    alert(`element details: \n 
    id: ${element.id} \n 
    class: ${element.className} \n
    innerHTML: ${element.InnerHTML}
    `)
  }
})
