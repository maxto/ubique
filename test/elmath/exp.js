var assert = require('assert');
var ubique = require('../../index.js');

suite('elmath',function () {
console.log('Testing elmath/exp ...');
test('exp', function (done) {

var a = [[5,6,5],[7,8,-1]];
var c = [5,6,3];

assert.deepEqual(ubique.format(ubique.exp(6)),403.428793);
assert.deepEqual(ubique.format(ubique.exp(c)),[ 148.413159, 403.428793, 20.085537 ]);


done();
});
});


