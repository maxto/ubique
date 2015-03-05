var assert = require('assert');
var ubique = require('../../index.js');

suite('matarrs',function () {
console.log('Testing matarrs/horzcat ...');
test('horzcat', function (done) {

var a = [[5,6,5],[7,8,-1]];
var b = [[-1,3,-1],[4,5,9]];
var c = [5,6,3];
var d = [0.5,-3,2.3];
var f = [[3, 2], [5, 2]];

assert.deepEqual(ubique.horzcat(a,b),[[5,6,5,-1,3,-1],[7,8,-1,4,5,9]]);
assert.deepEqual(ubique.horzcat(a,b,f),[[5,6,5,-1,3,-1,3,2],[7,8,-1,4,5,9,5,2]]);
assert.deepEqual(ubique.horzcat(a,[2,3]),[[5,6,5,2],[7,8,-1,3]]);
assert.deepEqual(ubique.horzcat(5,6,7),[[5,6,7]]);
assert.deepEqual(ubique.horzcat(ubique.transpose(c)),[[5,6,3]]);


done();
});
});


// <--- Auto-generated file based on comments inside the same filename in the LIB folder --->