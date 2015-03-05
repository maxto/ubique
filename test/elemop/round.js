var assert = require('assert');
var ubique = require('../../index.js');

suite('elemop',function () {
console.log('Testing elemop/round ...');
test('round', function (done) {



assert.deepEqual(ubique.round(Math.PI,12),3.14159265359);
assert.deepEqual(ubique.round([-1.4543,4.5234],2),[-1.45,4.52]);
assert.deepEqual(ubique.round([-1.9,-0.2,3.4,5.6,7.0]),[-2,0,3,6,7]);
assert.deepEqual(ubique.round([[1.45,-2.3],[1.1,-4.3]]),[[1,-2],[1,-4]]);


done();
});
});


// <--- Auto-generated file based on comments inside the same filename in the LIB folder --->