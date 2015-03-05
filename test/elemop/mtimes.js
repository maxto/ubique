var assert = require('assert');
var ubique = require('../../index.js');

suite('elemop',function () {
console.log('Testing elemop/mtimes ...');
test('mtimes', function (done) {

var a = [[5,6,5],[7,8,-1]];
var b = [[-1,3,-1],[4,5,9]];
var c = [5,6,3];

assert.deepEqual(ubique.mtimes(5,6),30);
assert.deepEqual(ubique.mtimes(c,3),[15,18,9]);
assert.deepEqual(ubique.mtimes(a,3),[[15,18,15],[21,24,-3]]);
assert.deepEqual(ubique.mtimes(c,[[3,4,5]]),[[15,20,25],[18,24,30],[9,12,15]]);
assert.deepEqual(ubique.mtimes(a,c),[[76],[80]]);


done();
});
});


// <--- Auto-generated file based on comments inside the same filename in the LIB folder --->