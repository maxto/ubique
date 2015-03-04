var assert = require('assert');
var ubique = require('../../index.js');

suite('datatype',function () {
console.log('Testing datatype/uplus ...');
test('uplus', function (done) {



assert.deepEqual(ubique.uplus(-5),-5);
assert.deepEqual(ubique.uplus([5,6]),[5,6]);
assert.deepEqual(ubique.uplus([[5,6],[-1,-3]]),[[5,6],[-1,-3]]);


done();
});
});


// <--- Auto-generated file based on comments inside the same filename in the LIB folder --->