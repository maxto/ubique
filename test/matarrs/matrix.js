var assert = require('assert');
var ubique = require('../../ubique');

suite('matarrs', function () {
	console.log('\nTesting matarrs/matrix ...');
	test('matrix', function (done) {

		assert.deepEqual(ubique.matrix(0), []);
		assert.deepEqual(ubique.matrix(2), [[null, null], [null, null]]);
		assert.deepEqual(ubique.matrix(2, 3), [[null, null, null], [null, null, null]]);
		assert.deepEqual(ubique.matrix([2, 3], 0), [[0, 0, 0], [0, 0, 0]]);

		done();
	});
});





