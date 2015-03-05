var assert = require('assert');
var ubique = require('../../index.js');

suite('matarrs',function () {
console.log('Testing matarrs/diag ...');
test('diag', function (done) {



assert.deepEqual(ubique.diag([5,6,-3]),[[5,0,0],[0,6,0],[0,0,-3]]);
assert.deepEqual(ubique.diag([5,6,-3,1]),[[5,0,0,0],[0,6,0,0],[0,0,-3,0],[0,0,0,1]]);
assert.deepEqual(ubique.diag([5,6,-3,-1]),[[5,0,0,0],[0,6,0,0],[0,0,-3,0],[0,0,0,-1]]);
assert.deepEqual(ubique.diag([[5, 0, 0], [0, 6, 0], [0, 0, -3]]),[5,6,-3]);
assert.deepEqual(ubique.diag([[0, 5, 0, 0], [0, 0, 6, 0], [0, 0, 0, -3], [0, 0, 0, 0]],1),[5,6,-3]);
assert.deepEqual(ubique.diag([[0, 0, 0, 0], [5, 0, 0, 0], [0, 6, 0, 0], [0, 0, -3, 0]],-1),[5,6,-3]);
assert.deepEqual(ubique.diag([[5, 0, 0], [0, 6, 0], [0, 0, -3]],2),[0]);


done();
});
});


// <--- Auto-generated file based on comments inside the same filename in the LIB folder --->