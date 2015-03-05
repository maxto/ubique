var assert = require('assert');
var ubique = require('../../index.js');

suite('matarrs',function () {
console.log('Testing matarrs/array ...');
test('array', function (done) {



assert.deepEqual(ubique.array(),[]);
assert.deepEqual(ubique.array(3,-1),[-1,-1,-1]);
assert.deepEqual(ubique.array(3,'y'),["y","y","y"]);
assert.deepEqual(ubique.array(3,true),[true,true,true]);


done();
});
});


// <--- Auto-generated file based on comments inside the same filename in the LIB folder --->