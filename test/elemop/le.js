var assert = require('assert');
var ubique = require('../../index.js');

suite('datatype',function () {
console.log('Testing datatype/le ...');
test('le', function (done) {



assert.deepEqual(ubique.le(5,5),true);
assert.deepEqual(ubique.le(5,[5,6,3]),[true,true,false]);
assert.deepEqual(ubique.le(5,[[5,6],[3,5]]),[[true,true],[false,true]]);
assert.deepEqual(ubique.le([5,6,3],5),[true,false,true]);
assert.deepEqual(ubique.le([[5,6],[3,5]],5),[[true,false],[true,true]]);
assert.deepEqual(ubique.le([5,6,3],[2,6,0]),[false,true,false]);
assert.deepEqual(ubique.le([[5,6],[-1,2]],[[5,6],[3,5]]),[[true,true],[true,true]]);


done();
});
});


// <--- Auto-generated file based on comments inside the same filename in the LIB folder --->