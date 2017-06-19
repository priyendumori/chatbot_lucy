let NewsAPI = require('newsapi');
 
let newsapi = new NewsAPI('b41ecc7ca858412493250d269458f33f');
 
/*return the latest news of all countries fetched from the articel */
exports.getnews=function(cb){ 
newsapi.articles({
  source: 'associated-press', // required 
  sortBy: 'top', // optional 
//country:'in'
}).then(articlesResponse => {
  
  
   	try{
		var ans=articlesResponse.articles ;
		var output="" ;
		for(x=0 ; x<ans.length ; x++)
		{
			output+="Title:\n"+ans[x].title+"\nDescription:\n"+ans[x].description+"\nUrl:\n"+ans[x].url+"\n\n\n\n" ;
			//gives title, description and url to further read the news
		}
		
		
		cb(null,output);
	}
	catch(err) {
	    cb(null,"network issues or wrong input");
	}

});
}
