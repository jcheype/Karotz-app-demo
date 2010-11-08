include("util.js");

// SET a random led color
var randColor = function(){
  var color = ""+Math.floor(Math.random()*16777215).toString(16);
	log("light: " +  color);
  karotz.led.light(color);
  return true;
}

//Callback function
var onKarotzConnect = function(data){
  
  // Add a button event listener and call "randColor" on simple click
  karotz.addButtonListener(function(event){
  	log("button: " + event);
  	if(event == "SIMPLE")
  	  randColor()
  	return true;
  });
}

//Connect to Karotz and call "onKarotzConnect" callback
karotz.connectAndStart("192.168.1.123", 9123, onKarotzConnect, {});
