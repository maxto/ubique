var assert = require('assert');
var ubique = require('../../index.js');

suite('matarrs',function () {
console.log('Testing matarrs/colon ...');
test('colon', function (done) {



assert.deepEqual(ubique.colon(1,10,1),[1,2,3,4,5,6,7,8,9,10]);
assert.deepEqual(ubique.colon(10,1,1),[]);
assert.deepEqual(ubique.colon(-5,5,2),[-5,-3,-1,1,3,5]);
assert.deepEqual(ubique.colon(-7,14,2),[-7,-5,-3,-1,1,3,5,7,9,11,13]);


done();
});
});


// <--- Auto-generated file based on comments inside the same filename in the LIB folder --->