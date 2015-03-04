var assert = require('assert');
var ubique = require('../../index.js');

suite('datatype',function () {
console.log('Testing datatype/nan ...');
test('nan', function (done) {



assert.deepEqual(isNaN(ubique.nan()),isNaN(NaN));
assert.deepEqual(ubique.nan(0),[]);
assert.deepEqual(isNaN(ubique.nan(1)),isNaN([[NaN]]));
assert.deepEqual(isNaN(ubique.nan(2)),isNaN([[NaN,NaN],[NaN,NaN]]));
assert.deepEqual(isNaN(ubique.nan([2,1])),isNaN([[NaN],[NaN]]));
assert.deepEqual(isNaN(ubique.nan(1,2)),isNaN([[NaN,NaN]]));
assert.deepEqual(isNaN(ubique.nan(2,3)),isNaN([[NaN,NaN,NaN],[NaN,NaN,NaN]]));


done();
});
});
