var assert = require('assert');
var ubique = require('../../index.js');

suite('datatype',function () {
console.log('Testing datatype/prod ...');
test('prod', function (done) {



assert.deepEqual(ubique.prod([5,6,3]),90);
assert.deepEqual(ubique.prod([[5,6,5],[7,8,-1]],0),[150,-56]);
assert.deepEqual(ubique.prod([[5,6,5],[7,8,-1]],1),[[35,48,-5]]);


done();
});
});


// <--- Auto-generated file based on comments inside the same filename in the LIB folder --->