

var x = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }

}
function showPosition(position) {
 // x.innerHTML = "Latitude: " + position.coords.latitude + 
  //"<br>Longitude: " + position.coords.longitude; 
 var position = position;

 console.log(position);
 $( document ).ready(function() {

  var lon=position.coords.longitude;
  var lat=position.coords.latitude;
  
   
  var weatherApiUrl="https://fcc-weather-api.glitch.me/api/current?lat=" + lat + "&lon=" + lon;
  
  $.getJSON(weatherApiUrl, function(data){
	   
    temp = Math.floor(data.main.temp);
    tempf = Math.floor((temp*1.8)+32);
    $('#temp').html(temp + "&deg;C");
    $('#weather-icon').attr('src', data.weather[0].icon);
    $('#condition').html(data.weather[0].description);
    $('#location').html(data.name);
	  console.log(data);
	
})

})
}


