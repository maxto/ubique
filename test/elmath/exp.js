var assert = require('assert');
var ubique = require('../../index.js');

suite('elmath',function () {
console.log('Testing elmath/exp ...');
test('exp', function (done) {

var a = [[5,6,5],[7,8,-1]];
var c = [5,6,3];

assert.deepEqual(ubique.exp(6),403.4287934927351);
assert.deepEqual(ubique.exp(c),[148.4131591025766,403.4287934927351,20.085536923187668]);


done();
});
});


// <--- Auto-generated file based on comments inside the same filename in the LIB folder --->