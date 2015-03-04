var assert = require('assert');
var ubique = require('../../index.js');

suite('datatype',function () {
console.log('Testing datatype/mrdivide ...');
test('mrdivide', function (done) {

var a = [[5,6,5],[7,8,-1]];
var c = [5,6,3];
var l = [[1,1,-1],[1,-2,3],[2,3,1]];
var e = [[9, 5], [6, 1]];
var f = [[3, 2], [5, 2]];
var l = [[1,1,-1],[1,-2,3],[2,3,1]];

assert.deepEqual(ubique.mrdivide(5,6),0.8333333333333334);
assert.deepEqual(ubique.mrdivide(c,6),[0.8333333333333334,1,0.5]);
assert.deepEqual(ubique.mrdivide(e,5),[[1.8,1],[1.2,0.2]]);
assert.deepEqual(ubique.mrdivide(e,f),[[1.75,0.7500000000000004],[-1.75,2.25]]);
assert.deepEqual(ubique.mrdivide(a,l),[[-0.7692307692307696,0.5384615384615385,2.615384615384615],[3.384615384615384,0.230769230769231,1.6923076923076918]]);


done();
});
});


// <--- Auto-generated file based on comments inside the same filename in the LIB folder --->