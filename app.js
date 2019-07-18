// in HTML
// create 3X3 grid

// in JS
// onclick insert "o" or "x" depending on previous click
// var player1, var player2, var previousClick
console.log ('hey')
var box = document.querySelector('.box')
var allboxes = document.querySelectorAll ('.box')
document.addEventListener ? 'addEventListener' : 'attachEvent'

  function setXO(element) {
    console.log('hey element', element)
    element.style.fontSize=60 + 'px'
    element.innerText ='X'
  } 

  var gamemarker = "X"
function changeGameMarkerToX () {}
function changeGameMarkerToO () {}
