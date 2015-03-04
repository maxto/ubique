var assert = require('assert');
var ubique = require('../../index.js');

suite('datatype',function () {
console.log('Testing datatype/times ...');
test('times', function (done) {

var a = [[5,6,5],[7,8,-1]];
var b = [[-1,3,-1],[4,5,9]];

assert.deepEqual(ubique.times(5,6),30);
assert.deepEqual(ubique.times([5,6,4],[3,-1,0]),[15,-6,0]);
assert.deepEqual(ubique.times([5,6,4],10),[50,60,40]);
assert.deepEqual(ubique.times(NaN,[5,6,4]),[null,null,null]);
assert.deepEqual(ubique.times(a,b),[[-5,18,-5],[28,40,-9]]);


done();
});
});


// <--- Auto-generated file based on comments inside the same filename in the LIB folder --->