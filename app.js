var Hapi = require('hapi')
,	config = require('./settings/root.js')
,	server = new Hapi.Server('0.0.0.0', config.api.port, config.server)
,	routes = require('./routes/main.js');

server.route(routes);

server.start(function() {
	console.log('Server started at: ' + server.info.uri);
});