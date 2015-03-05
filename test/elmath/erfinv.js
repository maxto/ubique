var assert = require('assert');
var ubique = require('../../index.js');

suite('elmath',function () {
console.log('Testing elmath/erfinv ...');
test('erfinv', function (done) {



assert.deepEqual(ubique.erfinv(0.5),0.47693623612155117);


done();
});
});


// <--- Auto-generated file based on comments inside the same filename in the LIB folder --->