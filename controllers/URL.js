"use strict";

var 	Joi  = require('joi')
,	dataModels = require('../models/')
,	URL = dataModels.Models.URL
,	urlSchema = dataModels.Schema.URL
,	base_n = require('nebase')({
	base: 71
});

var handlers = {
	url : {
		list : function (request, reply) {
			reply("Sorry");
		},
		add : function (request, reply) {
			console.log(request.orig.payload, request.payload);
			
			var url = new URL(request.payload);
			url.shortURL = base_n.inc();

			console.log("About to try and save.", url);
			url.save(function(err, url) {
				console.log("here we go.", err, url);
				if(err) {
					reply(err);
				} else {
					reply(url.shortURL);
				}
			});
		},
		remove : function (request, reply) {

		},
		detail : function (request, reply) {
			/*reply.view('foo', {
				bar : {
					foo : request.params.short_url
				}
			});*/
		}
	}
};

var validators = {
	url : function(value, options, next) {
		try {
			var url = new URL(value);
			next(null, url);
		} catch (ex) {
			console.log(ex);
			next(ex, null);
		}

	}
}

module.exports = {
	add : {
		handler: handlers.url.add,
		validate : {
			payload : validators.url
		}
	},
	list : {
		handler: handlers.url.list
	}
}