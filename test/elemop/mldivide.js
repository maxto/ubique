var assert = require('assert');
var ubique = require('../../index.js');

suite('datatype',function () {
console.log('Testing datatype/mldivide ...');
test('mldivide', function (done) {

var a = [[5,6,5],[7,8,-1]];
var e = [[9, 5], [6, 1]];
var f = [[3, 2], [5, 2]];

assert.deepEqual(ubique.mldivide(5,6),1.2);
assert.deepEqual(ubique.mldivide(e,f),[[1.0476190476190477,0.380952380952381],[-1.285714285714286,-0.2857142857142857]]);
assert.deepEqual(ubique.mldivide(5,e),[[1.8,1],[1.2,0.2]]);
assert.deepEqual(ubique.mldivide(e,a),[[1.4285714285714288,1.6190476190476193,-0.4761904761904764],[-1.5714285714285712,-1.7142857142857144,1.8571428571428574]]);


done();
});
});


// <--- Auto-generated file based on comments inside the same filename in the LIB folder --->