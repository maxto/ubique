var assert = require('assert');
var ubique = require('../../index.js');

suite('matarrs',function () {
console.log('Testing matarrs/subset ...');
test('subset', function (done) {

var a = [[5,6,5],[7,8,-1]];
var c = [5,6,3];

assert.deepEqual(ubique.subset(c,1),6);
assert.deepEqual(ubique.subset(c,[1,2]),[6,3]);
assert.deepEqual(ubique.subset(c,ubique.end(c)),3);
assert.deepEqual(ubique.subset(a,0,1),[[6]]);
assert.deepEqual(ubique.subset(a,[0,1],[1,2]),[[6,5],[8,-1]]);
assert.deepEqual(ubique.subset(a,0,':'),[[5,6,5]]);
assert.deepEqual(ubique.subset(a,':',0),[[5],[7]]);


done();
});
});


// <--- Auto-generated file based on comments inside the same filename in the LIB folder --->