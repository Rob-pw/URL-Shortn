var mongoose = require('mongoose')
,	Schema = mongoose.Schema
,	validateURL = require('valid-url');

function isValidURL(url) {
	if(!url) {
		throw new Error('No URL Supplied.');
	}

	if(!validateURL.isWebUri(url)) {
		throw new Error("Invalid URL Supplied");
	} else {
		return url;
	}
}

var visitSchema = Schema({
	when : {
		type : Date,
		require : true
	},
	ip : String,
	origin : String
});

module.exports = Schema({
	decimalValue : {
		type : Number,
		index : {
			unique : true
		},
		require : true
	},

	longURL : {
		type: String,
		require: true,
		set : isValidURL,
		get : function(url) {
			return this.locked ? false : url;
		}
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

	visits : [visitSchema]
});