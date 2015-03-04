var assert = require('assert');
var ubique = require('../../index.js');

suite('datatype',function () {
console.log('Testing datatype/power ...');
test('power', function (done) {

var a = [[5,6,5],[7,8,-1]];
var b = [[-1,3,-1],[4,5,9]];
var c = [5,6,3];
var d = [0.5,-3,2.3];

assert.deepEqual(ubique.power(5,4),625);
assert.deepEqual(ubique.power(c,5),[3125,7776,243]);
assert.deepEqual(ubique.power(5,c),[3125,15625,125]);
assert.deepEqual(ubique.power(a,5),[[3125,7776,3125],[16807,32768,-1]]);
assert.deepEqual(ubique.power(5,a),[[3125,15625,3125],[78125,390625,0.2]]);
assert.deepEqual(ubique.power(c,d),[2.23606797749979,0.004629629629629629,12.513502532843182]);
assert.deepEqual(ubique.power(a,b),[[0.2,216,0.2],[2401,32768,-1]]);


done();
});
});


// <--- Auto-generated file based on comments inside the same filename in the LIB folder --->