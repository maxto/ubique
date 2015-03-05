var assert = require('assert');
var ubique = require('../../index.js');

suite('elemop',function () {
console.log('Testing elemop/le ...');
test('le', function (done) {



assert.deepEqual(ubique.le(5,5),true);
assert.deepEqual(ubique.le(5,[5,6,3]),[true,true,false]);
assert.deepEqual(ubique.le(5,[[5,6],[3,5]]),[[true,true],[false,true]]);
assert.deepEqual(ubique.le([5,6,3],5),[true,false,true]);
assert.deepEqual(ubique.le([[5,6],[3,5]],5),[[true,false],[true,true]]);
assert.deepEqual(ubique.le([5,6,3],[2,6,0]),[false,true,false]);
assert.deepEqual(ubique.le([[5,6],[-1,2]],[[5,6],[3,5]]),[[true,true],[true,true]]);


done();
});
});


// <--- This file has been auto-generated. PLEASE DO NOT EDIT THIS FILE, changes will be overwritten the next time the script is run --->