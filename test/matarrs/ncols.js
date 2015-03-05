var assert = require('assert');
var ubique = require('../../index.js');

suite('matarrs',function () {
console.log('Testing matarrs/ncols ...');
test('ncols', function (done) {



assert.deepEqual(ubique.ncols([5,6,7]),1);
assert.deepEqual(ubique.ncols([[3,2,7],[4,5,6]]),3);


done();
});
});


// <--- Auto-generated file based on comments inside the same filename in the LIB folder --->