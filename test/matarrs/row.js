var assert = require('assert');
var ubique = require('../../index.js');

suite('matarrs',function () {
console.log('Testing matarrs/row ...');
test('row', function (done) {



assert.deepEqual(ubique.row([[5,6,5],[7,8,-1]],0),[5,6,5]);
assert.deepEqual(ubique.row([5,6,5]),5);


done();
});
});


// <--- Auto-generated file based on comments inside the same filename in the LIB folder --->