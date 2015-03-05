var assert = require('assert');
var ubique = require('../../index.js');

suite('matarrs',function () {
console.log('Testing matarrs/rows ...');
test('rows', function (done) {



assert.deepEqual(ubique.nrows([5,6,7]),3);
assert.deepEqual(ubique.nrows([[3,2,7],[4,5,6]]),2);


done();
});
});


// <--- Auto-generated file based on comments inside the same filename in the LIB folder --->