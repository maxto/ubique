var assert = require('assert');
var ubique = require('../../index.js');

suite('datatype',function () {
console.log('Testing datatype/isfunction ...');
test('isfunction', function (done) {



assert.deepEqual(ubique.isfunction(function(a){return console.log(a)}),true);
assert.deepEqual(ubique.isfunction(Math.log),true);


done();
});
});


// <--- Auto-generated file based on comments inside the same filename in the LIB folder --->