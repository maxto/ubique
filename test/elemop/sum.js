var assert = require('assert');
var ubique = require('../../index.js');

suite('elemop',function () {
console.log('Testing elemop/sum ...');
test('sum', function (done) {



assert.deepEqual(ubique.sum([5,6,3]),14);
assert.deepEqual(ubique.sum([[5,6,5],[7,8,-1]],0),[16,14]);
assert.deepEqual(ubique.sum([[5,6,5],[7,8,-1]],1),[[12,14,4]]);


done();
});
});


// <--- Auto-generated file based on comments inside the same filename in the LIB folder --->