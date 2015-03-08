var assert = require('assert');
var ubique = require('../../index.js');

suite('quants',function () {
console.log('Testing quants/montecarlovar ...');
test('montecarlovar', function (done) {


assert.deepEqual(ubique.montecarlovar(),[]);

done();
});
});

