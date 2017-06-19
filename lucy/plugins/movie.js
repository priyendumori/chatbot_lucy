var request = require("request");

/* simply get all the details of a specific movie and return it to console */
exports.getMovie = function(movie,cb){
	var details="";
	request({
    		url: "http://www.omdbapi.com/?t="+movie,
    		method: "GET"
	}, function (error, response, body){
		if(error){
			return cb(null,"oops..! i think something's fishy. Please try later");		
		}
		try{

			var data=JSON.parse(response.body) ;
			for (var key in data) {
	  			if (data.hasOwnProperty(key)) {
	    				console.log(key + " -> " + data[key]);
					 details+=key+":"+data[key]+"\n"; 	
				}
			}
			cb(null,details);
		}
		catch(err) {
	    		cb(null,"network issues or wrong input");
		}	
	});
}

/* it will return the keys on which user can further search for */
exports.getMovieKeys = function(cb){
	var movie="dangal";
	var details="";
	var index=1;
	request({
    		url: "http://www.omdbapi.com/?t="+movie,
    		method: "GET"
	}, function (error, response, body){
		if(error){
			return cb(null,"oops..! i think something's fishy. Please try later");		
		}
		try{

			var data=JSON.parse(response.body) ;
			for (var key in data) {
	  			if (data.hasOwnProperty(key)) {
	    				//console.log(key + " -> " + data[key]);
					 details+=index+". "+key+"\n"; 	
				}
				index++;
			}
			details+="eg movie dangal index 10";
			cb(null,details);
		}
		catch(err) {
	    		cb(null,"network issues or wrong input");
		}	
	});
}

/* it will give a specific detail of a movie based on the key chosen */
exports.getMovieAttribute = function(movie,incomingIndex,cb){
	var index=0,details="sorry I am not able to get the data right now or maybe you typed something wrong";
	request({
    url: "http://www.omdbapi.com/?t="+movie,
    method: "GET"
}, function (error, response, body){
	if(error){
		return cb(null,details);		
	}

	try{
		var data=JSON.parse(response.body) ;
		for (var key in data) {
			index++;
	  		if (data.hasOwnProperty(key)) {
	    			console.log(key + " -> " + data[key]);
				 if(incomingIndex==index)
				 {
					details=key+":"+data[key]+"\n"; 	
					break;
				 }
			}
		}	
	
		cb(null,details);	
	}
	catch(err) {
	    cb(null,"network issues or wrong input");
	}
});

}

