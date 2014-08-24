var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/mydb');

var Schema = {
	URL : require('./schema/URL')
}

var Models = {
	URL : mongoose.model('URL', Schema.URL)
};

console.log("Here I am", mongoose.models.URL.db);

module.exports = {
	Models : Models,
	Schema : Schema
};