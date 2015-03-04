var assert = require('assert');
var ubique = require('../../index.js');

suite('datatype',function () {
console.log('Testing datatype/ismatrix ...');
test('ismatrix', function (done) {



assert.deepEqual(ubique.ismatrix([[1,3,4]]),true);
assert.deepEqual(ubique.ismatrix([[1],[3],[4]]),true);


done();
});
});


// <--- Auto-generated file based on comments inside the same filename in the LIB folder --->