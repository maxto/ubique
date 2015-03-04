var assert = require('assert');
var ubique = require('../../index.js');

suite('datatype',function () {
console.log('Testing datatype/isstring ...');
test('isstring', function (done) {



assert.deepEqual(ubique.isstring('test'),true);


done();
});
});


// <--- Auto-generated file based on comments inside the same filename in the LIB folder --->