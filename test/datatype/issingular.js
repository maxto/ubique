var assert = require('assert');
var ubique = require('../../index.js');

suite('datatype',function () {
console.log('Testing datatype/issingular ...');
test('issingular', function (done) {



assert.deepEqual(ubique.issingular([[2,6],[1,3]]),false);


done();
});
});


// <--- Auto-generated file based on comments inside the same filename in the LIB folder --->