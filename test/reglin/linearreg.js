var assert = require('assert');
var ubique = require('../../index.js');

suite('reglin',function () {
console.log('Testing reglin/linearreg ...');
test('linearreg', function (done) {

var x = [ 0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];

assert.deepEqual(ubique.linearreg(x,y).beta,0.02308942571228251);
assert.deepEqual(ubique.linearreg([100,101,99,102,105],[1,2,3,4,5]).alpha,98.1);
assert.deepEqual(ubique.linearreg([100,101,99,102,105],[1,2,3,4,5]).fun(6),104.69999999999999);


done();
});
});
