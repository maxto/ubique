var assert = require('assert');
var ubique = require('../../index.js');

suite('matarrs',function () {
console.log('Testing matarrs/horzcat ...');
test('horzcat', function (done) {



assert.deepEqual(ubique.horzcat([[5,6,5],[7,8,-1]],[[-1,3,-1],[4,5,9]]),[[5,6,5,-1,3,-1],[7,8,-1,4,5,9]]);
assert.deepEqual(ubique.horzcat(5,6,7),[[5,6,7]]);


done();
});
});


// <--- This file has been auto-generated. PLEASE DO NOT EDIT THIS FILE, changes will be overwritten the next time the script is run --->