var assert = require('assert');
var ubique = require('../../index.js');

suite('datatype',function () {
console.log('Testing datatype/ge ...');
test('ge', function (done) {



assert.deepEqual(ubique.ge(5,5),true);
assert.deepEqual(ubique.ge(5,[5,6,3]),[true,false,true]);
assert.deepEqual(ubique.ge(5,[[5,6],[3,5]]),[[true,false],[true,true]]);
assert.deepEqual(ubique.ge([5,6,3],5),[true,true,false]);
assert.deepEqual(ubique.ge([[5,6],[3,5]],5),[[true,true],[false,true]]);
assert.deepEqual(ubique.ge([5,6,3],[2,6,0]),[true,true,true]);
assert.deepEqual(ubique.ge([[5,6],[-1,2]],[[5,6],[3,5]]),[[true,true],[false,false]]);


done();
});
});


// <--- Auto-generated file based on comments inside the same filename in the LIB folder --->