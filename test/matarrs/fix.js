var assert = require('assert');
var ubique = require('../../index.js');

suite('matarrs',function () {
console.log('Testing matarrs/fix ...');
test('fix', function (done) {



assert.deepEqual(ubique.fix(3.78),3);
assert.deepEqual(ubique.fix([4.51,-1.4]),[4,-1]);
assert.deepEqual(ubique.fix([[4.51,-1.4],[3.78,0.01]]),[[4,-1],[3,0]]);


done();
});
});


// <--- Auto-generated file based on comments inside the same filename in the LIB folder --->