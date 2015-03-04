var assert = require('assert');
var ubique = require('../../index.js');

suite('datatype',function () {
console.log('Testing datatype/plus ...');
test('plus', function (done) {

var a = [[5,6,5],[7,8,-1]];
var b = [[-1,3,-1],[4,5,9]];

assert.deepEqual(ubique.plus(5,6),11);
assert.deepEqual(ubique.plus([5,6,4],[3,-1,0]),[8,5,4]);
assert.deepEqual(ubique.plus([5,6,4],10),[15,16,14]);
assert.deepEqual(ubique.plus(NaN,[5,6,4]),[null,null,null]);
assert.deepEqual(ubique.plus(a,b),[[4,9,4],[11,13,8]]);


done();
});
});


// <--- Auto-generated file based on comments inside the same filename in the LIB folder --->