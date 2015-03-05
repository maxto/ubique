var assert = require('assert');
var ubique = require('../../index.js');

suite('elmath',function () {
console.log('Testing elmath/abs ...');
test('abs', function (done) {



assert.deepEqual(ubique.abs(-0.5),0.5);
assert.deepEqual(ubique.abs([0.1,-0.5]),[0.1,0.5]);
assert.deepEqual(ubique.abs([[5,-2],[-3,4]]),[[5,2],[3,4]]);


done();
});
});


// <--- Auto-generated file based on comments inside the same filename in the LIB folder --->