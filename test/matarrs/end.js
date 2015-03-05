var assert = require('assert');
var ubique = require('../../index.js');

suite('matarrs',function () {
console.log('Testing matarrs/end ...');
test('end', function (done) {



assert.deepEqual(ubique.end([5,6,3]),2);
assert.deepEqual(ubique.end([[4,5,0],[-1,2,-3]]),[1,2]);
assert.deepEqual(ubique.end([[4,5,0],[-1,2,-3]],0),1);


done();
});
});


// <--- Auto-generated file based on comments inside the same filename in the LIB folder --->