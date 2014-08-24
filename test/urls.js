var Lab = require('lab')
,	lab = exports.lab = Lab.script()
,	should = require('should')
,	server = require('../');

lab.experiment("URLs", function() {
	lab.test("Simple test to see if testing works", function(done) {
		var options = {
			method: "GET",
			url: "/url"
		};

		server.inject(options, function(response) {
			var result = response.result;

			Lab.expect(response.statusCode).to.equal(200);
			Lab.expect(result).to.equal("Sorry");

			done();
		});
	});

	lab.test("Adding a valid URL", function(done) {
		var options = {
			method: 'POST',
			url: '/url',
			payload : {
				longURL: 'http://google.com',
				locked: true
			}
		};

		server.inject(options, function(response) {
			var result = response.result;

			Lab.expect(response.statusCode).to.equal(200);
			(5).should.be.exactly(5);

			done();
		});
	});

});