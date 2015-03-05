var assert = require('assert');
var ubique = require('../../index.js');

suite('matarrs',function () {
console.log('Testing matarrs/trues ...');
test('trues', function (done) {



assert.deepEqual(ubique.trues(),true);
assert.deepEqual(ubique.trues(0),[]);
assert.deepEqual(ubique.trues(1),[[true]]);
assert.deepEqual(ubique.trues(2),[[true,true],[true,true]]);
assert.deepEqual(ubique.trues([2,1]),[[true],[true]]);
assert.deepEqual(ubique.trues(1,2),[[true,true]]);
assert.deepEqual(ubique.trues(2,3),[[true,true,true],[true,true,true]]);


done();
});
});


// <--- Auto-generated file based on comments inside the same filename in the LIB folder --->