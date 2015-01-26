var assert = require('assert');
var ubique = require('../../index.js');

suite('matarrs', function () {
	console.log('\nTesting matarrs/matrix ...');
	test('matrix', function (done) {

		assert.deepEqual(ubique.matrix(0), []);
		assert.deepEqual(ubique.matrix([2, 3], 0), [ [ 0, 0, 0 ], [ 0, 0, 0 ] ]);

		done();
	});
});






