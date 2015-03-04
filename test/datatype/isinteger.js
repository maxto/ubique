var assert = require('assert');
var ubique = require('../../index.js');

suite('datatype',function () {
console.log('Testing datatype/isinteger ...');
test('isinteger', function (done) {



assert.deepEqual(ubique.isinteger(5),true);


done();
});
});


// <--- Auto-generated file based on comments inside the same filename in the LIB folder --->