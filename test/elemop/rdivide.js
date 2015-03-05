var assert = require('assert');
var ubique = require('../../index.js');

suite('elemop',function () {
console.log('Testing elemop/rdivide ...');
test('rdivide', function (done) {

var a = [[5,6,5],[7,8,-1]];
var b = [-1,-2,-3];
var e = [[9, 5], [6, 1]];
var f = [[3, 2], [5, 2]];

assert.deepEqual(ubique.rdivide(5,6),0.8333333333333334);
assert.deepEqual(ubique.rdivide(a,3),[[1.6666666666666667,2,1.6666666666666667],[2.3333333333333335,2.6666666666666665,-0.3333333333333333]]);
assert.deepEqual(ubique.rdivide(3,[-1,-2,-3]),[-3,-1.5,-1]);
assert.deepEqual(ubique.rdivide([5,6,7],[-1,-2,-3]),[-5,-3,-2.3333333333333335]);
assert.deepEqual(ubique.rdivide(e,f),[[3,2.5],[1.2,0.5]]);
assert.deepEqual(ubique.rdivide(e,3),[[3,1.6666666666666667],[2,0.3333333333333333]]);


done();
});
});


// <--- Auto-generated file based on comments inside the same filename in the LIB folder --->