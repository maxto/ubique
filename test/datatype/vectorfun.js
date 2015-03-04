var assert = require('assert');
var ubique = require('../../index.js');

suite('datatype',function () {
console.log('Testing datatype/vectorfun ...');
test('vectorfun', function (done) {

var d = [[5,6,5],[7,8,-1]];

assert.deepEqual(ubique.vectorfun(d,function(val){return ubique.mean(val)},0),[5.333333333333333,4.666666666666667]);
assert.deepEqual(ubique.vectorfun(d,function(val){return ubique.mean(val)},1),[[6,7,2]]);


done();
});
});


// <--- Auto-generated file based on comments inside the same filename in the LIB folder --->