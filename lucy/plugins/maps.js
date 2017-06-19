var request=require("request");


/* it return names of all or 20(if more than 20 places are there) from the api about some specific places*/
exports.searchPlaces=function(location,cb){
	location=location.replace(' ', '+');

	request({
		url :"https://maps.googleapis.com/maps/api/place/textsearch/json?query="+location+"&key=AIzaSyC43ZseGDyhzJtEgUjVzCKsTOgv3Kly-pY",

	    method: "GET",
	}, function (error, response){

	if(error){
		return cb(null,"there seems to be some issue with connectivity");	
	}

	try{

		var data=JSON.parse(response.body) ;
		var output="\n";

		var y=data;
		var limit = Math.min(20,y.results.length);
		for(x=0 ; x<limit ; x++)
		{
			output+="name: "+y.results[x].name+"\n";
			output+="rating: "+y.results[x].rating+"\n";
			output+="address: "+y.results[x].formatted_address+"\n\n";
		}
		var htmlText = output;
		var noHTML = /(<([^>]+)>)/ig; // regex for removing HTML tags
		var clean = htmlText.replace(noHTML, ''); // remove all html tags
		//console.log(clean); // will return "Get these tags away from me!"
		cb(null,"\n"+clean);
	}
	catch(err) {
	    cb(null,"network issues or wrong input");
	}
	
});}


/* it will return the steps to be taken to reach from source to destination */
exports.getdir=function(origin,dest,cb){
	origin=origin.replace(' ','+') ;
	dest=dest.replace(' ','+') ;
	request({
		url :"https://maps.googleapis.com/maps/api/directions/json?origin="+origin+"&destination="+dest+"&key=AIzaSyAn7Tyf3-rzZ1_nLfParmSWAiZEqYSBqGg",
	    method: "GET"
	}, function (error, response){

	if(error){
		return cb(null,"there seems to be some issue with connectivity");	
	}
	try {
		var data=JSON.parse(response.body) ;
		var output=" ";
		//console.log(data.routes[0].legs[0].steps[1].html_instructions);
		var y=data.routes[0].legs[0];
		for(x=0 ; x<y.steps.length ; x++)
		output+=(x+1)+". "+y.steps[x].html_instructions+"\n";
		//console.log(JSON.stringify(output)+"sds");
		var htmlText = output;
		var noHTML = /(<([^>]+)>)/ig; // regex for removing HTML tags
		var clean = htmlText.replace(noHTML, ''); // remove all html tags
		cb(null,clean);

	}
	catch(err) {
	    cb(null,"network issues or wrong input");
	}

});}

