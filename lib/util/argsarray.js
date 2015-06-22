/**
 * Utility
 */
 module.exports = function ($u) {
/**
 * @method argsarray
 * @summary Converting arguments to an array
 * @description Converting arguments to an array.  test case http://jsperf.com/converting-arguments-to-an-array/18
 * 
 * @param  {number|string|boolean|...} args variable input arguments
 * @return {array}
 *  
 * @example
 * ubique.argsarray(99,true,'test',null);
 * // [ 99, true,'test', null ]
 */
 $u.argsarray = function() {
  var arr = [];
  for (var i = 0,len = arguments.length; i < len; i++) {
     arr[i] = arguments[i];
  }
  return arr;
}
}