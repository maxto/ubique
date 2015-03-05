var assert = require('assert');
var ubique = require('../../index.js');

suite('matarrs',function () {
console.log('Testing matarrs/reshape ...');
test('reshape', function (done) {

var b = [[-1,3,-1],[4,5,9]];

assert.deepEqual(ubique.reshape([5,6,3],1,3),[[5,6,3]]);
assert.deepEqual(ubique.reshape(b,3,2),[[-1,5],[4,-1],[3,9]]);
assert.deepEqual(ubique.reshape(b,6,1),[[-1],[4],[3],[5],[-1],[9]]);


done();
});
});


// <--- Auto-generated file based on comments inside the same filename in the LIB folder --->