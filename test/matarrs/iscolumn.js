var assert = require('assert');
var ubique = require('../../index.js');

suite('matarrs',function () {
console.log('Testing matarrs/iscolumn ...');
test('iscolumn', function (done) {



assert.deepEqual(ubique.iscolumn([[2],[2]]),true);


done();
});
});


// <--- Auto-generated file based on comments inside the same filename in the LIB folder --->