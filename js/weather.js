$(document).ready(function () {
  var lat, lon, api_url;
  
  if ("geolocation" in navigator) {
    
    $('#showTemp').on('click', function () {
       navigator.geolocation.getCurrentPosition(gotLocation);

      function gotLocation(position) {
        lat = position.coords.latitude;
        lon = position.coords.longitude;
        
        api_url = 'http://api.openweathermap.org/data/2.5/weather?lat=' +
                  lat + '&lon=' + 
                  lon + '&units=metric&appid=b231606340553d9174136f7f083904b3';
       // http://api.openweathermap.org/data/2.5/weather?q=London,uk&callback=test&appid=b1b15e88fa79722
        
        $.ajax({
          url : api_url,
          method : 'GET',
          success : function (data) {
            


            var tempr = data.main.temp;
            var location = data.name;
            var desc = data.weather.description;
            

            $('#result').text(tempr + '°' + location);

          }
        });
     }
    });
    
  } else {
    alert('Your browser doesnt support geolocation. Sorry.');
  }
  
});