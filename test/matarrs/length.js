var assert = require('assert');
var ubique = require('../../index.js');

suite('matarrs',function () {
console.log('Testing matarrs/length ...');
test('length', function (done) {



assert.deepEqual(ubique.length([3,5,6]),3);
assert.deepEqual(ubique.length(5),1);
assert.deepEqual(ubique.length([[5,4],[-1,2]]),2);


done();
});
});


// <--- Auto-generated file based on comments inside the same filename in the LIB folder --->