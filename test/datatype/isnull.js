var assert = require('assert');
var ubique = require('../../index.js');

suite('datatype',function () {
console.log('Testing datatype/isnull ...');
test('isnull', function (done) {



assert.deepEqual(ubique.isnull(null),true);


done();
});
});


// <--- Auto-generated file based on comments inside the same filename in the LIB folder --->