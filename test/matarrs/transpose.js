var assert = require('assert');
var ubique = require('../../index.js');

suite('matarrs',function () {
console.log('Testing matarrs/transpose ...');
test('transpose', function (done) {

var a = [[5,6,5],[7,8,-1]];
var c = [5,6,3];

assert.deepEqual(ubique.transpose(a),[[5,7],[6,8],[5,-1]]);
assert.deepEqual(ubique.transpose(c),[[5,6,3]]);


done();
});
});


// <--- Auto-generated file based on comments inside the same filename in the LIB folder --->