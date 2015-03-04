var assert = require('assert');
var ubique = require('../../index.js');

suite('datatype',function () {
console.log('Testing datatype/ldivide ...');
test('ldivide', function (done) {

var a = [5,6,7];
var b = [-1,-2,-3];
var c = [5,6,3];
var d = [0.5,-3,2.3];
var e = [[9, 5], [6, 1]];
var f = [[3, 2], [5, 2]];

assert.deepEqual(ubique.ldivide(5,6),1.2);
assert.deepEqual(ubique.ldivide([5,6,7],3),[0.6,0.5,0.42857142857142855]);
assert.deepEqual(ubique.ldivide(3,[-1,-2,-3]),[-0.3333333333333333,-0.6666666666666666,-1]);
assert.deepEqual(ubique.ldivide(c,d),[0.1,-0.5,0.7666666666666666]);
assert.deepEqual(ubique.ldivide(e,f),[[0.3333333333333333,0.4],[0.8333333333333334,2]]);
assert.deepEqual(ubique.ldivide(e,3),[[0.3333333333333333,0.6],[0.5,3]]);


done();
});
});


// <--- Auto-generated file based on comments inside the same filename in the LIB folder --->