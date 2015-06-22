/**
 * Array Creation and Concatenation
 */
 module.exports = function($u) {
/**
 * @method array
 * @summary Create an array with custom elements
 * @description Create an array with custom elements
 * 
 * @param  {number} n number of elements
 * @param  {number|string|boolean} val values of the array 
 * @return {array}       
 *
 * @example
 * ubique.array(3);
 * // [ null, null, null ]
 * 
 * ubique.array(3,-1);
 * // [-1, -1, -1]
 * 
 * ubique.array(3,'y');
 * // [ 'y', 'y', 'y' ]
 * 
 * ubique.array(4,true);
 * // [ true, true, true, true ]
 */
 $u.array = function(n,val) {
  if (arguments.length === 0) {
    throw new Error('not enough input arguments');
  }
  if (!$u.isnumber(n)) {
    throw new Error('number of elements must be a positive integer');
  }
  val = val == null ? null : val;
  var arr = [];
  for (var i = 0; i < n; i++) {
    arr[i] = val;
  }
  return arr;
}
}