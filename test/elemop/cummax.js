var assert = require('assert');
var ubique = require('../../index.js');

suite('datatype',function () {
console.log('Testing datatype/cummax ...');
test('cummax', function (done) {



assert.deepEqual(ubique.cummax([5,6,3]),[5,6,6]);
assert.deepEqual(ubique.cummax([[5,6,5],[7,8,-1]]),[[5,6,5],[7,8,5]]);
assert.deepEqual(ubique.cummax([[5,6,5],[7,8,-1]],0),[[5,6,6],[7,8,8]]);


done();
});
});


// <--- Auto-generated file based on comments inside the same filename in the LIB folder --->