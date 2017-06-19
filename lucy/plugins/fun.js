/* This file is all about functionalities added to entertain the client*/


var fact=require('wikifakt') ;
var request = require("request");
var Dictionary = require("oxford-dictionary-api");
const lib = require('thoughts');

/* This will fetch a random joke from rajnikanth-jokes */
exports.getJokes=function(cb)
{
	var rajnijokes = require('rajnikanth-jokes');

	var joke = rajnijokes.getRajniJoke();
	cb(null,joke) ;
}

/* This will return an interesting fact */
exports.getFacts=function(cb)
{
	fact.getRandomFact().then(function (response) {
	var res=response ;
	   cb(null,res) ;
	});
}

/* It will fetch all the meanings possible for the word from the Dictionary api*/
exports.getMeaning = function(word,cb){
	var app_id = "677429bb"; var app_key = "325d47c4527cd7cf92e3c3d9ca4d332d";

	var dict = new Dictionary(app_id,app_key);
	
	dict.find(word,function(error,data){
		if(error) 
			return cb(null,"oh! even i don't know that");
	
	try {
		var x=data.results[0].lexicalEntries[0].entries[0].senses ;
		var output="";
		for(y=0 ; y<x.length ; y++)
		{
			var z=x[y];
			output+=(y+1)+":"+z.definitions+"\n";
		}
		cb(null,output);
	}
	catch(err) {
		cb(null,"network issues or wrong inputs");
	}  
	
 });
}

/* returns thought from a specific category */
exports.getThoughts = function(cb){
	var random = lib.random();    // gives random object from any category 
	var anotherRandom = lib.random("anonymous");  //gives random object from specified category 
	var particular = lib.particular("anonymous",2);   //gives particular object from specified category 
 
	
	cb(null,random.thought);
}


