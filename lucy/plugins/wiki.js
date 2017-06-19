var wikipedia = require("wikipedia-js");
var request = require("request");

//give wikipedia summary from wikipedia 
exports.getWiki = function(query,cb){
  var options = {query: query, format: "html", summaryOnly: true};
  wikipedia.searchArticle(options, function(err, htmlWikiText){
    if(err){
      console.log("An error occurred[query=%s, error=%s]", query, err);
      return cb(null,"there's some problem");
    }

	if(htmlWikiText=="" || htmlWikiText==null){
		cb(null,"I don't have that information right now buddy. Sorry.");	
	}
	else{
		try{
			var htmlText = htmlWikiText;
			//console.log(htmlWikiText);
			var noHTML = /(<([^>]+)>)/ig; // regex for removing HTML tags
			var clean = htmlText.replace(noHTML, ''); // remove all html tags
			cb(null,clean);
		}
		catch(err) {
	    		cb(null,"network issues or wrong input");
		}
	
	}
}
  );
}

