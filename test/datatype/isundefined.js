var assert = require('assert');
var ubique = require('../../index.js');

suite('datatype',function () {
console.log('Testing datatype/isundefined ...');
test('isundefined', function (done) {



assert.deepEqual(ubique.isundefined(undefined),true);


done();
});
});


// <--- Auto-generated file based on comments inside the same filename in the LIB folder --->