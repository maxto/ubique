var assert = require('assert');
var ubique = require('../../index.js');

suite('elemop',function () {
console.log('Testing elemop/unique ...');
test('unique', function (done) {



assert.deepEqual(ubique.unique([5,5,6,6,7]),[5,6,7]);
assert.deepEqual(ubique.unique([[5,4],[5,3],[6,3]]),[[5,3],[6,4]]);


done();
});
});


// <--- Auto-generated file based on comments inside the same filename in the LIB folder --->