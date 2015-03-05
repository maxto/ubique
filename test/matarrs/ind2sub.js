var assert = require('assert');
var ubique = require('../../index.js');

suite('matarrs',function () {
console.log('Testing matarrs/ind2sub ...');
test('ind2sub', function (done) {

var a = [[5,6,5],[7,8,-1]];

assert.deepEqual(ubique.ind2sub(ubique.size(a),5),[1,2]);
assert.deepEqual(ubique.ind2sub(ubique.size(a),[0,1,2]),[[0,0],[1,0],[0,1]]);
assert.deepEqual(ubique.ind2sub(ubique.size([5,6,3]),2),[2,0]);


done();
});
});


// <--- Auto-generated file based on comments inside the same filename in the LIB folder --->