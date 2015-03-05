var assert = require('assert');
var ubique = require('../../index.js');

suite('matarrs',function () {
console.log('Testing matarrs/ones ...');
test('ones', function (done) {



assert.deepEqual(ubique.ones(),1);
assert.deepEqual(ubique.ones(0),[]);
assert.deepEqual(ubique.ones(1),[[1]]);
assert.deepEqual(ubique.ones(2),[[1,1],[1,1]]);
assert.deepEqual(ubique.ones([2,1]),[[1],[1]]);
assert.deepEqual(ubique.ones(1,2),[[1,1]]);
assert.deepEqual(ubique.ones(2,3),[[1,1,1],[1,1,1]]);


done();
});
});


// <--- Auto-generated file based on comments inside the same filename in the LIB folder --->