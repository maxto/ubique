var assert = require('assert');
var ubique = require('../../index.js');

suite('datatype',function () {
console.log('Testing datatype/islogical ...');
test('islogical', function (done) {



assert.deepEqual(ubique.islogical(true),true);


done();
});
});


// <--- Auto-generated file based on comments inside the same filename in the LIB folder --->