var assert = require('assert');
var ubique = require('../../index.js');

suite('elemop',function () {
console.log('Testing elemop/uminus ...');
test('uminus', function (done) {



assert.deepEqual(ubique.uminus(-5),5);
assert.deepEqual(ubique.uminus([5,6]),[-5,-6]);
assert.deepEqual(ubique.uminus([[5,6],[-1,-3]]),[[-5,-6],[1,3]]);


done();
});
});


// <--- Auto-generated file based on comments inside the same filename in the LIB folder --->