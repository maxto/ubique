var assert = require('assert');
var ubique = require('../../index.js');

suite('datatype',function () {
console.log('Testing datatype/datenum ...');
test('datenum', function (done) {



assert.deepEqual(ubique.datenum('31-12-2014','DD-MM-YYYY'),1419980400);
assert.deepEqual(ubique.datenum(['31-12-2014','31-01-2015'],'DD-MM-YYYY'),[1419980400,1422658800]);
assert.deepEqual(ubique.datenum([['31-12-2014','31-01-2015'],['15-02-2015','01-03-2015']],'DD-MM-YYYY'),[[1419980400,1422658800],[1423954800,1425164400]]);


done();
});
});


// <--- Auto-generated file based on comments inside the same filename in the LIB folder --->