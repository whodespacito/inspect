window.main = function() {
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
       tag: ${element.tagName}     
       innerHTML: ${element.innerHTML}
      `
      )
    }
  })
}
//cause blooket broke alert()
window.alt = function() {
  let x = 0;
  let y = 0;
  document.addEventListener("mousemove", (event) => {
    x = event.pageX;
    y = event.pageY;
  })
  document.addEventListener("keydown", (event) => {
    if (event.key == "\\" && event.altKey) {
      var element = document.elementFromPoint(x, y);
      window.open(`https://elementdetails.com/id/${element.id}/class/${element.className}/tag/${element.tagName}/innerHTML/${element.innerHTML}`)
    }
  })
}
  
