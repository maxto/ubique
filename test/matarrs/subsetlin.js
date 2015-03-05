var assert = require('assert');
var ubique = require('../../index.js');

suite('matarrs',function () {
console.log('Testing matarrs/substelin ...');
test('substelin', function (done) {

var a = [[5,6,5],[7,8,-1]];
var c = [5,6,3];

assert.deepEqual(ubique.subsetlin(a,1),[7]);
assert.deepEqual(ubique.subsetlin(a,[0,1,2,3]),[5,7,6,8]);
assert.deepEqual(ubique.subsetlin(a,[[0,1,2],[2,3,4]]),[[5,7,6],[6,8,5]]);
assert.deepEqual(ubique.subsetlin(c,[0,1]),[5,6]);
assert.deepEqual(ubique.subsetlin(c,[[0,1],[1,2]]),[[5,6],[6,3]]);


done();
});
});


// <--- Auto-generated file based on comments inside the same filename in the LIB folder --->