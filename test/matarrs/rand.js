var assert = require('assert');
var ubique = require('../../index.js');

suite('matarrs',function () {
console.log('Testing matarrs/rand ...');
test('rand', function (done) {


assert.deepEqual(ubique.rand(0),[]);

done();
});
});

