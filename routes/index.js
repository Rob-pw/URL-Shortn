var URLs = require('../controllers/URL');
console.log("Were you ever created?");

var routes = [
	{
		method: 'POST',
		path: '/url',
		config: URLs.add
	},
	{
		method: 'GET',
		path: '/url',
		config: URLs.list
	}/*,
	{
		method: 'GET',
		path: '/url/{short_url}',
		config: URLs.detail
	},
	{
		method: 'PUT',
		path: '/url/{short_url}',
		config: URLs.update
	},
	{
		method: 'DELETE',
		path: '/url/{short_url}',
		config: URLs.remove
	}*/
];

module.exports = routes;