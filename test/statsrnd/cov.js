var assert = require('assert');
var ubique = require('../../index.js');
var arrayTestUtils = {};
require('../util/arrayTestUtils')(arrayTestUtils);

suite('matarrs', function () {
	console.log('\nTesting matarrs/matrix ...');
	test('matrix', function (done) {

		var c = [5, 6, 3];
		var d = [0.5, -3, 2.3];
		var e = [[9, 5], [6, 1]];
		var f = [[3, 2], [5, 2]];
		var l = [[1, 1, -1], [1, -2, 3], [2, 3, 1]];

		assert.equal(ubique.cov(c).toFixed(6), 2.333333);
		assert.deepEqual(arrayTestUtils.arrayDim2ToFixed6(ubique.cov(c, d)), [[2.333333, -3.833333], [-3.833333, 7.263333]]);
		assert.deepEqual(arrayTestUtils.arrayDim2ToFixed6(ubique.cov(c, d, 0)), [[1.555556, -2.555556], [-2.555556, 4.842222]]);
		assert.deepEqual(arrayTestUtils.arrayDim2ToFixed6(ubique.cov(e, f)), [[10.916667, 2], [2, 2]]);
		assert.deepEqual(arrayTestUtils.arrayDim2ToFixed6(ubique.cov(l)), [[0.333333, 1.166667, 0], [1.166667, 6.333333, -3], [0, -3, 4]]);

		done();
	});
});






