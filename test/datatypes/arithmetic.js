var assert = require('assert');
var ubique = require('../../index.js');

suite('datatypes', function () {
	console.log('\nTesting datatypes/arrayfun ...');
	test('arrayfun', function (done) {
		assert.deepEqual(ubique.arrayfun([1.4, 2.3, 3], Math.log), [0.3364722366212129,0.8329091229351039,1.0986122886681098]);
		done();
	});
});






