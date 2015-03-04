var assert = require('assert');
var ubique = require('../../index.js');

suite('datatype',function () {
console.log('Testing datatype/isscalar ...');
test('isscalar', function (done) {



assert.deepEqual(ubique.isscalar(2),true);
assert.deepEqual(ubique.isscalar([2]),true);
assert.deepEqual(ubique.isscalar([[2]]),true);


done();
});
});


// <--- Auto-generated file based on comments inside the same filename in the LIB folder --->