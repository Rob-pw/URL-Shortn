var Hapi = require('hapi')
,	config = require('./settings/root.js')
,	server = new Hapi.Server('0.0.0.0', config.api.port, config.server)
,	routes = require('./routes/')
,	mongoose = require('mongoose')
,	db = mongoose.connection;

server.route(routes);

if(!module.parent) {
	db.on('error', console.error.bind(console, 'connection error'));
	
	db.once('open', function() {                     
		server.start(function() {
			console.log('Server started at: ' + server.info.uri);
		});
		
	});

	mongoose.connect('mongodb://127.0.0.1/mydb');
}

module.exports = server;