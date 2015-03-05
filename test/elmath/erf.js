var assert = require('assert');
var ubique = require('../../index.js');

suite('elmath',function () {
console.log('Testing elmath/erf ...');
test('erf', function (done) {



assert.deepEqual(ubique.erf(0.5),0.5204999077232426);


done();
});
});


// <--- Auto-generated file based on comments inside the same filename in the LIB folder --->