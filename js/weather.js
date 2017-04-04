/*$(document).ready(function(){
	var currentCondition;
  var city = "boise,id";
  var searchtext = "select item.condition from weather.forecast where woeid in (select woeid from geo.places(1) where text='" + city + "')";
  //change city variable dynamically as required
  $.getJSON("https://query.yahooapis.com/v1/public/yql?q=" + searchtext + "&format=json").success(function(data){
   console.log(data);
	  currentCondition = data.query.results.channel.item.condition.code;
   $('#temp').html("Condition in " + city + " is " + currentCondition);
	 // alert(currentCondition);
	  if (currentCondition === 27||28||29||30||44){
		alert("Cloudy" + currentCondition);
	}else if(currentCondition === 37||38||39||45||47||3||4){
		alert("Thunderstorms"+currentCondition);
	}
	  else if(currentCondition === 5||6||8||9||10||11||12||17||18||35||40){
		alert("Rain"+currentCondition);
	}
	  else if(currentCondition === 7||13||14||15||16||41||42||43||46){
		alert("Snow"+currentCondition);
	}else{
		alert("Sunny"+currentCondition);
	}
  });
	
});