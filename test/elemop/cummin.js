var assert = require('assert');
var ubique = require('../../index.js');

suite('elemop',function () {
console.log('Testing elemop/cummin ...');
test('cummin', function (done) {



assert.deepEqual(ubique.cummin([5,6,3]),[5,5,3]);
assert.deepEqual(ubique.cummin([[5,6,5],[7,8,-1]]),[[5,6,5],[5,6,-1]]);
assert.deepEqual(ubique.cummin([[5,6,5],[7,8,-1]],0),[[5,5,5],[7,7,-1]]);


done();
});
});


// <--- Auto-generated file based on comments inside the same filename in the LIB folder --->