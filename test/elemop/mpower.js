var assert = require('assert');
var ubique = require('../../index.js');

suite('datatype',function () {
console.log('Testing datatype/mpower ...');
test('mpower', function (done) {

var l = [[1,1,-1],[1,-2,3],[2,3,1]];

assert.deepEqual(ubique.mpower(l,3),[[-2,11,-11],[11,-35,33],[22,33,-2]]);


done();
});
});


// <--- Auto-generated file based on comments inside the same filename in the LIB folder --->