var assert = require('assert');
var ubique = require('../../index.js');

suite('datatype',function () {
console.log('Testing datatype/randchar ...');
test('randchar', function (done) {



assert.deepEqual(ubique.randchar(),'');


done();
});
});
