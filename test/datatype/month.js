var assert = require('assert');
var ubique = require('../../index.js');

suite('datatype',function () {
console.log('Testing datatype/month ...');
test('month', function (done) {



assert.deepEqual(ubique.month(1424708525),1);
assert.deepEqual(ubique.month([1414886399,1414972799]),[10,10]);
assert.deepEqual(ubique.month([[1414886399,1414972799],[1415059199,1415145599]]),[[10,10],[10,10]]);


done();
});
});


// <--- Auto-generated file based on comments inside the same filename in the LIB folder --->