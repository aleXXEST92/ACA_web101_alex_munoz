const apiUrl = "https://picsum.photos/v2/list"

window.onload = function() {
  $.getJSON( "ajax/test.json", function( data ) {}
  console.log('data', data)

}
var myLocation = document.getElementById("my-coordinates")

function getLocation() {
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(displayPosition)
  } else {
   myLocation.innerHTML = "Not available"
  }
}

function displayPosition(position) {
  myLocation.innerHTML = "Longitude: " + position.coords.longitude + " Latitude: " + position.coords.latitude
}