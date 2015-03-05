var assert = require('assert');
var ubique = require('../../index.js');

suite('matarrs',function () {
console.log('Testing matarrs/flipdim ...');
test('flipdim', function (done) {

var a = [[5,6,5],[7,8,-1]];
var c = [5,6,3];

assert.deepEqual(ubique.flipdim(c),[5,6,3]);
assert.deepEqual(ubique.flipdim(c,1),[5,6,3]);
assert.deepEqual(ubique.flipdim(a),[[5,6,5],[7,8,-1]]);
assert.deepEqual(ubique.flipdim(a,1),[[5,6,5],[7,8,-1]]);


done();
});
});


// <--- Auto-generated file based on comments inside the same filename in the LIB folder --->