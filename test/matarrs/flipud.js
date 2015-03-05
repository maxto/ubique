var assert = require('assert');
var ubique = require('../../index.js');

suite('matarrs',function () {
console.log('Testing matarrs/flipud ...');
test('flipud', function (done) {



assert.deepEqual(ubique.fliplr([[1,4],[2,5],[3,6]]),[[1,4],[2,5],[3,6]]);


done();
});
});


// <--- Auto-generated file based on comments inside the same filename in the LIB folder --->