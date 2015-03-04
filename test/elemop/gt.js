var assert = require('assert');
var ubique = require('../../index.js');

suite('datatype',function () {
console.log('Testing datatype/gt ...');
test('gt', function (done) {



assert.deepEqual(ubique.gt(5,5),false);
assert.deepEqual(ubique.gt(5,[5,6,3]),[false,false,true]);
assert.deepEqual(ubique.gt(5,[[5,6],[3,5]]),[[false,false],[true,false]]);
assert.deepEqual(ubique.gt([5,6,3],5),[false,true,false]);
assert.deepEqual(ubique.gt([[5,6],[3,5]],5),[[false,true],[false,false]]);
assert.deepEqual(ubique.gt([5,6,3],[2,6,0]),[true,false,true]);
assert.deepEqual(ubique.gt([[5,6],[-1,2]],[[5,6],[3,5]]),[[false,false],[false,false]]);


done();
});
});


// <--- Auto-generated file based on comments inside the same filename in the LIB folder --->