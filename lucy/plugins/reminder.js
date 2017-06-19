var request = require("request");
var moment = require('moment');

/* sets a reminder by calling an api which will send mail to user on given time */
exports.setReminder = function(msg,time,emailid,cb){

	var dateprb = false;
	var errorcondition = false;
	var success ;	

	try{	
		var part=time.split('-');

		var ymd=part[0].split('/');
		if(ymd[0].length != 4) throw "wrong year";//year should have 4 digits
		if(ymd[1].length < 2) ymd[1]='0'+ymd[1]; // add 0 to make month 2 digit if required
		if(ymd[2].length < 2) ymd[2]='0'+ymd[2];// add 0 to make date 2 digit if required
		part[0]=ymd.join('/');	

		var hms=part[1].split(':');
		if(hms[0].length < 2 ) hms[0]='0'+hms[0];// make 2 digit hour format 
		if(hms[1].length < 2 ) hms[1]='0'+hms[1];// make 2 digit min format
		if(hms[2].length < 2 ) hms[2]='0'+hms[2];// make 2 digit seconds format
		part[1]=hms.join(':');
		time=part.join('-');
		
		var t=time;
		t=t.split('-').join(' ');
		t=t.split('/').join('-');
		var newDate = moment(t);// making string to date
		var currentDate = moment();//getting current date 
	}
	catch(err){
		dateprb=true;
	}
	
	if(!dateprb){

		if(newDate < currentDate){
			dateprb = true;
		}
		else{

			try{	
				emailid=emailid.split(' ').join('.');
				var myJSONObject = {"emailid":emailid,"msg":msg,"time":time};
				console.log(myJSONObject);	
				request({
				    url: "http://localhost:8080/mail/webapi/mail",
				    method: "POST",
				    json: true,   // <--Very important!!!
				    body: myJSONObject
				}, function (error, response, body){
					console.log("calling service");			
					if(error){
				 		errorcondition=true;
					}			
					if(!error){
						if(response.statusCode==204)
							success=true;				
						else
							success=false;
						console.log("no errors");		        
						console.log(response.statusCode);
					}
			
				});
			}
			catch(err){
				errorcondition=true;
			}
		
		}
	}

	setTimeout(function(){
			if(dateprb) cb(null,"Time specified by you has already passed. Too bad i don't have a time machine.");	//date problem 
			else if(errorcondition) cb(null,"check your connectivity or maybe some problem with our email service (Probably our pigeons are tired)");// on error condition
			else if(success) cb(null,"ok done. I will remind you to "+msg+" at "+time+" buddy :).");// on success
			else if(!success) cb(null,"Some problem with our email service. Probably our pigeons are tired.");// service problem
			else cb(null,"Somebody is messing with my memory please try again later.");
	}, 2000);

}


