var assert = require('assert');
var ubique = require('../../index.js');

suite('elmath',function () {
console.log('Testing elmath/erfc ...');
test('erfc', function (done) {



assert.deepEqual(ubique.erfc(0.5),0.47950009227675744);


done();
});
});


// <--- Auto-generated file based on comments inside the same filename in the LIB folder --->