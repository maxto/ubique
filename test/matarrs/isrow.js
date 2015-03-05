var assert = require('assert');
var ubique = require('../../index.js');

suite('matarrs',function () {
console.log('Testing matarrs/isrow ...');
test('isrow', function (done) {



assert.deepEqual(ubique.isrow([[2,2]]),true);


done();
});
});


// <--- Auto-generated file based on comments inside the same filename in the LIB folder --->