var assert = require('assert');
var ubique = require('../../index.js');

suite('matarrs',function () {
console.log('Testing matarrs/ndims ...');
test('ndims', function (done) {



assert.deepEqual(ubique.ndims([3,5,6]),2);
assert.deepEqual(ubique.ndims([[3,2,7],[4,5,6]]),2);


done();
});
});


// <--- Auto-generated file based on comments inside the same filename in the LIB folder --->