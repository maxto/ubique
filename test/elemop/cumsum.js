var assert = require('assert');
var ubique = require('../../index.js');

suite('datatype',function () {
console.log('Testing datatype/cumsum ...');
test('cumsum', function (done) {



assert.deepEqual(ubique.cumsum([5,6,3]),[5,11,14]);
assert.deepEqual(ubique.cumsum([[5,6,5],[7,8,-1]]),[[5,6,5],[12,14,4]]);
assert.deepEqual(ubique.cumsum([[5,6,5],[7,8,-1]],0),[[5,11,16],[7,15,14]]);


done();
});
});


// <--- Auto-generated file based on comments inside the same filename in the LIB folder --->