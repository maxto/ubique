var assert = require('assert');
var ubique = require('../../index.js');

suite('quants',function () {
console.log('Testing quants/tomonthly ...');
test('tomonthly', function (done) {



assert.deepEqual(ubique.tomonthly(ubique.datenum(['15-01-18','15-02-28','15-03-05','15-03-24','15-03-27'],'YY-MM-DD'),[100,99,102,103,98]),[ [ 1421539200, 1425081600, 1427414400 ], [ 100, 99, 98 ] ]);


done();
});
});

