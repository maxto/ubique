var assert = require('assert');
var ubique = require('../../index.js');

suite('elmath',function () {
console.log('Testing elmath/erfinv ...');
test('erfinv', function (done) {



assert.deepEqual(ubique.format(ubique.erfinv(0.1)),0.088856);


done();
});
});


