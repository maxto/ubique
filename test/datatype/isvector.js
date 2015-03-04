var assert = require('assert');
var ubique = require('../../index.js');

suite('datatype',function () {
console.log('Testing datatype/isvector ...');
test('isvector', function (done) {



assert.deepEqual(ubique.isvector([[5,6,7]]),true);
assert.deepEqual(ubique.isvector([[5],[6],[7]]),true);


done();
});
});


// <--- Auto-generated file based on comments inside the same filename in the LIB folder --->