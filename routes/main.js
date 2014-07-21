var handlers = {
	url : {
		list : function (request, reply) {
			reply({"one":1, "two": 2});
		},
		add : function (request, reply) {

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
		method: 'GET',
		path: '/url/{short_url}',
		config : {
			handler: handlers.url.detail
		}
	}
];

module.exports = routes;