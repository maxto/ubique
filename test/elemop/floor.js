var assert = require('assert');
var ubique = require('../../index.js');

suite('elemop',function () {
console.log('Testing elemop/floor ...');
test('floor', function (done) {



assert.deepEqual(ubique.floor(Math.PI,12),3.141592653589);
assert.deepEqual(ubique.floor(3.78),3);
assert.deepEqual(ubique.floor([4.51,-1.4]),[4,-2]);
assert.deepEqual(ubique.floor([[4.5134,-1.4345],[3.7809,0.0134]],2),[[4.51,-1.44],[3.78,0.01]]);


done();
});
});


// <--- Auto-generated file based on comments inside the same filename in the LIB folder --->