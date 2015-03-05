var assert = require('assert');
var ubique = require('../../index.js');

suite('elemop',function () {
console.log('Testing elemop/lt ...');
test('lt', function (done) {



assert.deepEqual(ubique.lt(5,5),false);
assert.deepEqual(ubique.lt(5,[5,6,3]),[false,true,false]);
assert.deepEqual(ubique.lt(5,[[5,6],[3,5]]),[[false,true],[false,false]]);
assert.deepEqual(ubique.lt([5,6,3],5),[false,false,true]);
assert.deepEqual(ubique.lt([[5,6],[3,5]],5),[[false,false],[true,false]]);
assert.deepEqual(ubique.lt([5,6,3],[2,6,0]),[false,false,false]);
assert.deepEqual(ubique.lt([[5,6],[-1,2]],[[5,6],[3,5]]),[[false,false],[true,true]]);


done();
});
});


// <--- Auto-generated file based on comments inside the same filename in the LIB folder --->