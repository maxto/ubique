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
 * ubique.array(); // []
 * ubique.array(3): // [NaN, NaN, NaN]
 * ubique.array(3,-1); // [-1, -1, -1]
 * ubique.array(3,'y'); // [ 'y', 'y', 'y' ]
 * ubique.array(3,true); // [ true, true, true ]
 */
 $u.array = function(n,val) {
  if (arguments.length === 0) {
   return [];
 }
 if (arguments.length === 1) {
  val = NaN;
 }
 var arr = new Array(n);
 for (var i = 0; i < arr.length; i++) {
  arr[i] = val;
 }
 return arr;
 }
}