var assert = require('assert');
var ubique = require('../../index.js');

suite('matarrs',function () {
console.log('Testing matarrs/logspace ...');
test('logspace', function (done) {



assert.deepEqual(ubique.logspace(0,1,5),[1,1.7782794100389228,3.1622776601683795,5.623413251903491,10]);


done();
});
});


// <--- Auto-generated file based on comments inside the same filename in the LIB folder --->