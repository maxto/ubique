var assert = require('assert');
var ubique = require('../../index.js');

suite('matarrs',function () {
console.log('Testing matarrs/cat ...');
test('cat', function (done) {

var a = [[5,6,5],[7,8,-1]];
var b = [[-1,3,-1],[4,5,9]];
var c = [5,6,3];
var d = [0.5,-3,2.3];
var f = [[3, 2], [5, 2]];

assert.deepEqual(ubique.cat(0,a,b),[[5,6,5],[7,8,-1],[-1,3,-1],[4,5,9]]);
assert.deepEqual(ubique.cat(0,a,b,b),[[5,6,5],[7,8,-1],[-1,3,-1],[4,5,9],[-1,3,-1],[4,5,9]]);
assert.deepEqual(ubique.cat(0,c,d),[5,6,3,0.5,-3,2.3]);
assert.deepEqual(ubique.cat(0,[1],[2]),[1,2]);
assert.deepEqual(ubique.cat(0,5,7,9,8),[5,7,9,8]);
assert.deepEqual(ubique.cat(0,5,7,c),[5,7,5,6,3]);
assert.deepEqual(ubique.cat(1,a,b),[[5,6,5,-1,3,-1],[7,8,-1,4,5,9]]);
assert.deepEqual(ubique.cat(1,a,b,f),[[5,6,5,-1,3,-1,3,2],[7,8,-1,4,5,9,5,2]]);
assert.deepEqual(ubique.cat(1,a,[2,3]),[[5,6,5,2],[7,8,-1,3]]);
assert.deepEqual(ubique.cat(1,5,6,7),[[5,6,7]]);


done();
});
});


// <--- Auto-generated file based on comments inside the same filename in the LIB folder --->