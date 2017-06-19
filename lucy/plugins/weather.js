var wikipedia = require("wikipedia-js");
var weather=require("weather-js");
var fact=require('wikifakt') ;
var request = require("request");

//gives current weather 
exports.getWeather = function(city, cb) {
	weather.find({search: city, degreeType: 'C'}, function(err, result) {
	if(err) {
		//console.log(err);
		return cb(null,"network issues");
	} 
	
	try{
		var htmlText = JSON.stringify(result[0].current.skytext);
		console.log(htmlText) ;

		var clean = htmlText.replace('"', '').replace('"','');
		city=JSON.stringify(result[0].location.name).replace('"', '').replace('"','');
		cb(null,"It is "+clean+" in "+city) ;

	}
	catch(err) {
	    cb(null,"network issues or wrong input");
	}

});
}

//gives current temperature
exports.getTemperature = function(city, cb) {
	weather.find({search: city, degreeType: 'C'}, function(err, result) {
	if(err) {
		//console.log(err);
		return cb(null,"network issues");
	}  

	try{
		var htmlText = JSON.stringify(result[0].current.temperature);
		console.log(htmlText) ;

		var clean = htmlText.replace('"', '').replace('"','');
		city=JSON.stringify(result[0].location.name).replace('"', '').replace('"','');
		cb(null,"Current temperature is "+clean+" degree Celcius"+" in "+city) ;
		
	}
	catch(err) {
	    cb(null,"network issues or wrong input");
	}
}
);
}


