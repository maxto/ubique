var assert = require('assert');
var ubique = require('../../index.js');

suite('elemop',function () {
console.log('Testing elemop/dot ...');
test('dot', function (done) {

var c = [5,6,3];
var d = [0.5,-3,2.3];

assert.deepEqual(ubique.dot(c,d),-8.600000000000001);


done();
});
});


// <--- Auto-generated file based on comments inside the same filename in the LIB folder --->