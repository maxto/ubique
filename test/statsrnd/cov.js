var assert = require('assert');
var ubique = require('../../ubique');

suite('matarrs', function () {
	console.log('\nTesting matarrs/matrix ...');
	test('matrix', function (done) {

		var c = [5, 6, 3];
		var d = [0.5, -3, 2.3];
		var e = [[9, 5], [6, 1]];
		var f = [[3, 2], [5, 2]];
		var l = [[1, 1, -1], [1, -2, 3], [2, 3, 1]];

		assert.equal(ubique.cov(c), 2.333333333333333);
		assert.deepEqual(ubique.cov(c, d)[[2.33333, -3.83333], [-3.83333, 7.26333]]);
		assert.deepEqual(ubique.cov(c, d, 0), [[1.5555555555555554, -2.5555555555555554], [-2.5555555555555554, 4.8422222222222215]]);
		assert.deepEqual(ubique.cov(e, f), [[10.916666666666666, 2], [2, 2]]);
		assert.deepEqual(ubique.cov(l), [[0.3333333333333333, 1.1666666666666665, 0], [1.1666666666666665, 6.333333333333334, -3], [0, -3, 4]]);

		done();
	});
});






