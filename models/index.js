var mongoose = require('mongoose');

var Schema = {
	URL : require('./schema/URL')
}

var Models = {
	URL : mongoose.model('URL', Schema.URL)
};

module.exports = Models;