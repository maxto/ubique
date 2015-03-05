var assert = require('assert');
var ubique = require('../../index.js');

suite('matarrs',function () {
console.log('Testing matarrs/sub2ind ...');
test('sub2ind', function (done) {

var a = [[5,6,5],[7,8,-1]];

assert.deepEqual(ubique.sub2ind(ubique.size(a),[1, 2]),5);
assert.deepEqual(ubique.sub2ind(ubique.size(a),[[0, 0], [1, 0], [0, 1]]),[0,1,2]);
assert.deepEqual(ubique.sub2ind(ubique.size([5,6,3]),[2, 0]),2);


done();
});
});


// <--- Auto-generated file based on comments inside the same filename in the LIB folder --->