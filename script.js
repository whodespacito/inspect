let x = 0;
let y = 0;
document.addEventListener("mousemove", (event) => {
  x = event.movementX;
  y = event.movementY;
})
document.addEventListener("click", (event) => {
  var element = document.elementFromPoint(x, y);
  alert(`element details: \n 
  id: ${element.id} \n 
  class: ${element.className} \n
  innerHTML: ${element.InnerHTML}
    `)
})
