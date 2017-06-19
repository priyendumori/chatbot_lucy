/* This will return the help details */

exports.getHelp = function(cb){
	var details="Hmmmm. Not sure if I understand what you mean.\nHere's a list of stuff I can help you with :\n#wiki : Search Wikipedia for anything you want.\n#jokes : To get some jokes which will make you laugh\n#fact : Awesome facts,served steaminng hot, whenever you want it!\n#dictionary : To find the meaning of any word you want to know about.\n#news : To get upto date about anything going on in the world\n#thoughts : We'll send you an awesome quote whenever you want\n#movie : We will give you all the details of any movie you want.\n#places : We'll find all the places in the location you want.\n#reminder : This is to remind you of anything you want me to remind.\n#weather : This is to know about the current weather of any place\n#temperature :  We'll make you know about how hot or cold the place is.\n#directions : Step by step directions from any source to destination";		
	cb(null,details);
	
}
	
