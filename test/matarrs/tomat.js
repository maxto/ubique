var assert = require('assert');
var ubique = require('../../index.js');

suite('matarrs',function () {
console.log('Testing matarrs/tomat ...');
test('tomat', function (done) {



assert.deepEqual(ubique.tomat(5),[[5]]);
assert.deepEqual(ubique.tomat([5,6,3]),[[5],[6],[3]]);
assert.deepEqual(ubique.tomat(true),[[true]]);


done();
});
});


// <--- Auto-generated file based on comments inside the same filename in the LIB folder --->