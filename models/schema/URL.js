var mongoose = require('mongoose')
,	Schema = mongoose.Schema;

function isValidURL(url) {
	if(!url) {
		throw new Error('No URL Supplied.');
	}

	var urlRegexp = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/;

	if(url.match(urlRegexp)) {
		return url;
	}

	throw new Error('Invalid URL Supplied');
}

var VisitSchema = Schema({
	when : {
		type : Date,
		require : true
	},
	ip : String,
	origin : String
});

var URLSchema = Schema({
	decimalValue : {
		type : Number,
		index : {
			unique : true
		},
		require : true
	},

	longURL : {
		set : isValidURL,
		get : function(url) {
			return this.locked ? false : url;
		},
		type : String,
		require : true
	},

	shortURL : {
		type : String,
		require : true
	},

	key : String,

	locked : {
		type : Boolean,
		require : false,
		default : false
	},

	visits : [VisitSchema]
});

module.exports = URLSchema;