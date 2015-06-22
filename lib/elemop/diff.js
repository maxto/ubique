/**
 * Arithmetic Operations
 */
 module.exports = function($u) {
/**
 * @method diff
 * @summary Differences between adjacent elements in array 
 * @description Differences between adjacent elements in array or matrix 
 * 
 * @param  {array|matrix} x array of values
 * @param  {number} dim dimension selected, 1: column 0: row (def: 1)
 * @return {array|matrix}   
 *
 * @example
 * ubique.diff([5,6,3]);
 * // [1, -3]
 * 
 * ubique.diff([[5,6,5],[7,8,-1]]);
 * // [ [ 2, 2, -6 ] ]
 * 
 * ubique.diff([[5,6,5],[7,8,-1]],0);
 * // [ [ 1, -1 ], [ 1, -9 ] ]
 */
 $u.diff = function(x,dim) {
 	if (arguments.length === 0) {
 		throw new Error('not enough input arguments');
 	}
   dim = dim == null ? 1 : dim;
   var _diff =  function(a) {
    var v = [];
     for (var i = 1;i < a.length;i++) {
      v[i - 1] = a[i] - a[i - 1];
    }
    return v;
  }
  return $u.vectorfun(dim,x,_diff);
}

}