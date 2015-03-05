var assert = require('assert');
var ubique = require('../../index.js');

suite('matarrs',function () {
console.log('Testing matarrs/matrix ...');
test('matrix', function (done) {



assert.deepEqual(ubique.matrix(0),[]);
assert.deepEqual(ubique.matrix(2),[[0,0],[0,0]]);
assert.deepEqual(ubique.matrix([2,3]),[[0,0,0],[0,0,0]]);
assert.deepEqual(ubique.matrix(2,3),[[0,0,0],[0,0,0]]);
assert.deepEqual(ubique.matrix([2,3],5),[[5,5,5],[5,5,5]]);
assert.deepEqual(ubique.matrix(2,3),[[0,0,0],[0,0,0]]);


done();
});
});


// <--- Auto-generated file based on comments inside the same filename in the LIB folder --->