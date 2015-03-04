var assert = require('assert');
var ubique = require('../../index.js');

suite('datatype',function () {
console.log('Testing datatype/mod ...');
test('mod', function (done) {

var a = [[5,6,5],[7,8,-1]];
var b = [[-1,3,-1],[4,5,9]];

assert.deepEqual(ubique.mod([13,-7],2.2),[2,1.8000000000000007]);
assert.deepEqual(ubique.mod([13,-7],[5,6]),[3,5]);
assert.deepEqual(ubique.mod(a,b),[[0,0,0],[3,3,8]]);


done();
});
});


// <--- Auto-generated file based on comments inside the same filename in the LIB folder --->