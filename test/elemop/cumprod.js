var assert = require('assert');
var ubique = require('../../index.js');

suite('elemop',function () {
console.log('Testing elemop/cumprod ...');
test('cumprod', function (done) {



assert.deepEqual(ubique.cumprod([5,6,3]),[5,30,90]);
assert.deepEqual(ubique.cumprod([[5,6,5],[7,8,-1]]),[[5,6,5],[35,48,-5]]);
assert.deepEqual(ubique.cumprod([[5,6,5],[7,8,-1]],0),[[5,30,150],[7,56,-56]]);


done();
});
});


// <--- Auto-generated file based on comments inside the same filename in the LIB folder --->