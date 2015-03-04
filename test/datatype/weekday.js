var assert = require('assert');
var ubique = require('../../index.js');

suite('datatype',function () {
console.log('Testing datatype/weekday ...');
test('weekday', function (done) {



assert.deepEqual(ubique.weekday(1424708525),1);
assert.deepEqual(ubique.weekday([1414886399,1414972799]),[7,1]);
assert.deepEqual(ubique.weekday([[1414886399,1414972799],[1415059199,1415145599]]),[[7,1],[2,3]]);


done();
});
});


// <--- Auto-generated file based on comments inside the same filename in the LIB folder --->