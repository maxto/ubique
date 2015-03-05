var assert = require('assert');
var ubique = require('../../index.js');

suite('linalgebra',function () {
console.log('Testing linalgebra/det ...');
test('det', function (done) {



assert.deepEqual(ubique.det([[1,5],[6,2]]),-28);
assert.deepEqual(ubique.det([[2,2],[2,3]]),2);


done();
});
});


// <--- Auto-generated file based on comments inside the same filename in the LIB folder --->