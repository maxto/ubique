var assert = require('assert');
var ubique = require('../../index.js');

suite('statsrnd', function () {
	console.log('\nTesting statrnd/mean ...');
	test('mean', function (done) {

		var c = [5, 6, 3];
		var d = [0.5, -3, 2.3];
		var e = [[9, 5], [6, 1]];
		var f = [[3, 2], [5, 2]];
		var l = [[1, 1, -1], [1, -2, 3], [2, 3, 1]];

		assert.equal(ubique.format(ubique.mean(c)), 4.6667);

		done();
	});
});






