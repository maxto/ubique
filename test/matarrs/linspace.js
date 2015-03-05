var assert = require('assert');
var ubique = require('../../index.js');

suite('matarrs',function () {
console.log('Testing matarrs/linspace ...');
test('linspace', function (done) {



assert.deepEqual(ubique.linspace(1,10,5),[1,3.25,5.5,7.75,10]);


done();
});
});


// <--- Auto-generated file based on comments inside the same filename in the LIB folder --->