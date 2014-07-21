var path = require('path')
,	rootPath = path.dirname(require.main.filename);

module.exports = {
	views : {
		path : path.join(rootPath, '/views'),
		engines : {
			html : require('handlebars')
		}
	}	
};