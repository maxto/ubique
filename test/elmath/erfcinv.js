var assert = require('assert');
var ubique = require('../../index.js');

suite('elmath',function () {
console.log('Testing elmath/erfcinv ...');
test('erfcinv', function (done) {



assert.deepEqual(ubique.erfcinv(1.5),-0.476936236121904);


done();
});
});


// <--- Auto-generated file based on comments inside the same filename in the LIB folder --->