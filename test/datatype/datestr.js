var assert = require('assert');
var ubique = require('../../index.js');

suite('datatype',function () {
console.log('Testing datatype/datestr ...');
test('datestr', function (done) {



assert.deepEqual(ubique.datestr(1419980400),"2014-12-31");
assert.deepEqual(ubique.datestr([1419984000,1422662400],'DD-MMM-YY'),["31-Dec-14","31-Jan-15"]);
assert.deepEqual(ubique.datestr([[1419980400,1422658800],[1423954800,1425164400]],'YY-MM-DD hh:mm:ss'),[["14-12-31 12:00:00","15-01-31 12:00:00"],["15-02-15 12:00:00","15-03-01 12:00:00"]]);


done();
});
});


// <--- Auto-generated file based on comments inside the same filename in the LIB folder --->