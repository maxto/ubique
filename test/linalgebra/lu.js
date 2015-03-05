var assert = require('assert');
var ubique = require('../../index.js');

suite('linalgebra',function () {
console.log('Testing linalgebra/lu ...');
test('lu', function (done) {

var a = [[5,6,5],[7,8,-1]];
var e = [[0, 5], [6, 0]];

assert.deepEqual(ubique.lu(a),{"LU":[[7,8,-1],[0.7142857142857143,0.2857142857142856,5.714285714285714]],"L":[[1,0],[0.7142857142857143,1]],"U":[[7,8,-1],[0,0.2857142857142856,5.714285714285714]],"P":[1,0],"S":-1});
assert.deepEqual(ubique.lu(e),{"LU":[[6,0],[0,5]],"L":[[1,0],[0,1]],"U":[[6,0],[0,5]],"P":[1,0],"S":-1});


done();
});
});


// <--- Auto-generated file based on comments inside the same filename in the LIB folder --->