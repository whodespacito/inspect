window.main = function() {
   window.x = 0;
  window.y = 0;
  document.addEventListener("mousemove", (event) => {
    window.x = event.pageX;
    window.y = event.pageY;
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
   window.x = 0;
  window.y = 0;
  document.addEventListener("mousemove", (event) => {
    window.x = event.pageX;
    window.y = event.pageY;
  })
  document.addEventListener("keydown", (event) => {
    if (event.key == "\\" && event.altKey) {
      var element = document.elementFromPoint(x, y);
      window.open(`https://elementdetails.com/id/${element.id}/class/${element.className}/tag/${element.tagName}/innerHTML/${element.innerHTML}`)
    }
  })
}
