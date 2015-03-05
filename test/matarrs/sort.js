var assert = require('assert');
var ubique = require('../../index.js');

suite('matarrs',function () {
console.log('Testing matarrs/sort ...');
test('sort', function (done) {



assert.deepEqual(ubique.sort([0,5,-1,3,-4,9,0],'ascend'),[-4,-1,0,0,3,5,9]);
assert.deepEqual(ubique.sort([0,5,-1,3,-4,9,0],'descend'),[9,5,3,0,0,-1,-4]);
assert.deepEqual(ubique.sort([[-1,3,-1],[4,5,9]],'ascend'),[[-1,3,-1],[4,5,9]]);
assert.deepEqual(ubique.sort([[-1,3,-1],[4,5,9]],'descend'),[[4,5,9],[-1,3,-1]]);
assert.deepEqual(ubique.sort([[-1,3,-1],[4,5,9]],'descend',0),[[3,-1,-1],[9,5,4]]);


done();
});
});


// <--- Auto-generated file based on comments inside the same filename in the LIB folder --->