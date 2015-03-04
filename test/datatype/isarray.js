var assert = require('assert');
var ubique = require('../../index.js');

suite('datatype',function () {
console.log('Testing datatype/isarray ...');
test('isarray', function (done) {



assert.deepEqual(ubique.isarray([1.4,2.3,3]),true);


done();
});
});


// <--- Auto-generated file based on comments inside the same filename in the LIB folder --->