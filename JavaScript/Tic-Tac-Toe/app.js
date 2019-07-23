// in HTML
// create 3X3 grid

// in JS
// onclick insert "o" or "x" depending on previous click
// var player1, var player2, var previousClick
console.log ('hey')
var box = document.querySelector('.box')
var allboxes = document.querySelectorAll ('.box')
document.addEventListener ? 'addEventListener' : 'attachEvent'


  var gameMarker = "X"
function changeGameMarkerToX () {}
function changeGameMarkerToO () {}

function setXO(element) {
  console.log('hey element', element)
  element.style.fontSize=100 + 'px'
  element.style.paddingTop=20 + 'px'
  
  if (gameMarker === "X") {
    element.innerText ='O'
    gameMarker = "O"
  } else {
    element.innerText ="X"
    gameMarker ="X"
  }
} 
#announce-game-won {
  font-size: 50px;
  text-align: center;
}

