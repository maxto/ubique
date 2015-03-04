var assert = require('assert');
var ubique = require('../../index.js');

suite('datatype',function () {
console.log('Testing datatype/diff ...');
test('diff', function (done) {



assert.deepEqual(ubique.diff([5,6,3]),[1,-3]);
assert.deepEqual(ubique.diff([[5,6,5],[7,8,-1]]),[[2,2,-6]]);
assert.deepEqual(ubique.diff([[5,6,5],[7,8,-1]],0),[[1,-1],[1,-9]]);


done();
});
});


// <--- Auto-generated file based on comments inside the same filename in the LIB folder --->