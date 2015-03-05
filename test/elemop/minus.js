var assert = require('assert');
var ubique = require('../../index.js');

suite('elemop',function () {
console.log('Testing elemop/minus ...');
test('minus', function (done) {

var a = [[5,6,5],[7,8,-1]];
var b = [[-1,3,-1],[4,5,9]];

assert.deepEqual(ubique.minus(5,6),-1);
assert.deepEqual(ubique.minus([5,6,4],[3,-1,0]),[2,7,4]);
assert.deepEqual(ubique.minus([5,6,4],10),[-5,-4,-6]);
assert.deepEqual(ubique.minus(a,b),[[6,3,6],[3,3,-10]]);


done();
});
});


// <--- Auto-generated file based on comments inside the same filename in the LIB folder --->