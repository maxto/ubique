var assert = require('assert');
var ubique = require('../../index.js');

suite('matarrs',function () {
console.log('Testing matarrs/squeeze ...');
test('squeeze', function (done) {



assert.deepEqual(ubique.squeeze([[[[[8]]]]]),[[8]]);
assert.deepEqual(ubique.squeeze([[[[3,4,5]]]]),[[3,4,5]]);
assert.deepEqual(ubique.squeeze([[[[[['31-12-2014','31-01-2015'],['15-02-2015','01-03-2015']]]]]]),[["31-12-2014","31-01-2015"],["15-02-2015","01-03-2015"]]);


done();
});
});


// <--- Auto-generated file based on comments inside the same filename in the LIB folder --->