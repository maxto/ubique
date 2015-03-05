var assert = require('assert');
var ubique = require('../../index.js');

suite('matarrs',function () {
console.log('Testing matarrs/issquare ...');
test('issquare', function (done) {



assert.deepEqual(ubique.issquare([[9, 5], [6, 1]]),true);


done();
});
});


// <--- Auto-generated file based on comments inside the same filename in the LIB folder --->