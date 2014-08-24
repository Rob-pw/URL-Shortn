var mongoose = require('mongoose')
,	URLSchema = require('../models/schema/URL.js')
,	URL = mongoose.model('URL', URLSchema)

var URLs = require('../controllers/')


var handlers = {
	url : {
		list : function (request, reply) {
			reply("Sorry");
		},
		add : function (request, reply) {
			console.log(request.body);
		},
		remove : function (request, reply) {

		},
		detail : function (request, reply) {
			reply.view('foo', {
				bar : {
					foo : request.params.short_url
				}
			});
		}
	}
};

var routes = [
	{
		method: 'GET',
		path: '/url/',
		config : {
			handler: handlers.url.list
		}
	},
	{
		method: 'PUT',
		path: '/url/',
		config : {
			handler: handlers.url.add,
			validate : {
				query : {
					url : 
				}
			}
		}
	},
	{
		method: 'GET',
		path: '/url/{short_url}',
		config : {
			handler: handlers.url.detail
		}
	}
];

module.exports = routes;