var assert = require('assert');
var ubique = require('../../index.js');

suite('matarrs',function () {
console.log('Testing matarrs/falses ...');
test('falses', function (done) {



assert.deepEqual(ubique.falses(),false);
assert.deepEqual(ubique.falses(0),[]);
assert.deepEqual(ubique.falses(1),[[false]]);
assert.deepEqual(ubique.falses(2),[[false,false],[false,false]]);
assert.deepEqual(ubique.falses([2,1]),[[false],[false]]);
assert.deepEqual(ubique.falses(1,2),[[false,false]]);
assert.deepEqual(ubique.falses(2,3),[[false,false,false],[false,false,false]]);


done();
});
});


// <--- Auto-generated file based on comments inside the same filename in the LIB folder --->