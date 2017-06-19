
var moment = require('moment-timezone');
var COEFF = 1000 * 60 * 5;

// gives current season
var getSeason = function() {

	var now = moment();
	now.dayOfYear()
	var doy = now.dayOfYear();

	if (doy > 80 && doy < 172) {
		return "spring";
	} else if (doy > 172 && doy < 266) {
		return "summer"
	} else if (doy > 266 && doy < 357) {
		return "fall"
	} else if ( doy < 80 || doy > 357) {
		return "winter";
	}
}

// gives day of the week
exports.getDOW = function(cb) {
	cb(null, moment().format("dddd"));
}

// give current date 
exports.getDate = function(cb) {
	cb(null, moment().format("ddd, MMMM Do"));
}

// give tomorrow's date
exports.getDateTomorrow = function(cb) {
	var date = moment().add(1,'d').format("ddd, MMMM Do");
	cb(null, date);
}

//give current season
exports.getSeason = function(cb) {
	var date = moment().add(1,'d').format("ddd, MMMM Do");
	cb(null, getSeason());
}

// get current time
exports.getTime = function(cb) {
	var date = new Date();
	var rounded = new Date(Math.round(date.getTime() / COEFF) * COEFF);
	var time = moment(rounded).format("h:mm");
	// TODO, dont say this every time.
	cb(null, "I'm in Vancouver, so time is " + time + " here.");
}

// gives time of the day i.e morning evening or noon
exports.getTimeOfDay = function(cb) {
	var date = new Date(); 
	var rounded = new Date(Math.round(date.getTime() / COEFF) * COEFF);
	var time = moment(rounded).format("H")
	var tod
	if (time < 12) {
		tod = "morning"
	} else if (time < 17) {
		tod =  "afternoon"
	} else {
		tod =  "evening"
	}

	cb(null, tod);
}

//gives day of week in full name
exports.getDayOfWeek = function(cb) {
	cb(null, moment().format("dddd"));
}

/* gives current month */
exports.getMonth = function(cb) {
	var reply = "";
	if (this.message.words.indexOf("next") != -1) {
		reply = moment().add(1,'M').format("MMMM");
	} else if (this.message.words.indexOf("previous") != -1) {
		reply = moment().subtract(1,'M').format("MMMM");
	} else if (this.message.words.indexOf("first") != -1) {
		reply = "January";
	} else if (this.message.words.indexOf("last") != -1) {
		reply = "December";
	} else {
		var reply = moment().format("MMMM");
	}
	cb(null, reply);
}

/* give day of week in asia/kolkata time zone */
exports.getDOW = function(cb) {
  cb(null, moment().tz("Asia/Kolkata").format("dddd"));
};

/* get current date in asia/kolkata time zone */
exports.getDate = function(cb) {
  cb(null, moment().tz("Asia/Kolkata").format("ddd, MMMM Do"));
};

/* gate tomorrow's date in asia/kolkata time zone */
exports.getDateTomorrow = function(cb) {
  var date = moment().tz("Asia/Kolkata").add('d', 1).format("ddd, MMMM Do");
  cb(null, date);
};

/* get season from asia/kolkata time zone */
exports.getSeason = function(cb) {
  var date = moment().tz("Asia/Kolkata").add('d', 1).format("ddd, MMMM Do");
  cb(null, getSeason());
};

/*get current time in h:mm format */
exports.getTime = function(cb) {
  var date = new Date();
  var rounded = new Date(Math.round(date.getTime() / COEFF) * COEFF);
  var time = moment(rounded).format("h:mm");
  cb(null, "The time is " + time);
};

/*get time of day from 24 hour format */
exports.getTimeOfDay = function(cb) {
  var date = new Date();
  var rounded = new Date(Math.round(date.getTime() / COEFF) * COEFF);
  var time = moment(rounded).format("H");
  var tod;
  if (time < 12) {
    tod = "morning";
  } else if (time < 17) {
    tod =  "afternoon";
  } else {
    tod =  "night";
  }

  cb(null, tod);
};

/* get day of week in asia/kolkata time zone */
exports.getDayOfWeek = function(cb) {
  cb(null, moment().tz("Asia/Kolkata").format("dddd"));
};

/* get next , first , last and previous month of the year*/
exports.getMonth = function(cb) {
  var reply = "";
  if (this.message.words.indexOf("next") != -1) {
    reply = moment().tz("Asia/Kolkata").add('M', 1).format("MMMM");
  } else if (this.message.words.indexOf("previous") != -1) {
    reply = moment().tz("Asia/Kolkata").subtract('M', 1).format("MMMM");
  } else if (this.message.words.indexOf("first") != -1) {
    reply = "January";
  } else if (this.message.words.indexOf("last") != -1) {
    reply = "December";
  } else {
    reply = moment().tz("Asia/Kolkata").format("MMMM");
  }
  cb(null, reply);
};
