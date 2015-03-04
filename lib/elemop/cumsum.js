/**
 * Arithmetic Operations
 */
 module.exports = function($u) {
/**
 * @method cumsum
 * @summary Cumulative sum of array elements
 * @description Cumulative sum of array elements
 * 
 * @param  {array|matrix} x array or matrix of values
 * @param  {number} dim dimension selected, 1: column 0: row (def: 1)
 * @return {array|matrix}   
 *
 * @example
 * ubique.cumsum([5,6,3]);
 * // [5, 11, 14]
 * ubique.cumsum([[5,6,5],[7,8,-1]]);
 * // [[5, 6, 5], [12, 14, 4]]
 * ubique.cumsum([[5,6,5],[7,8,-1]],0);
 * // [[5, 11, 16], [7, 15, 14]]
 */
 $u.cumsum = function(x,dim) {
  if (arguments.length === 0) {
    throw new Error('not enough input arguments');
  }
  if (arguments.length === 1) {
    dim = 1;
  }
  var _cumsum =  function(a) {
    var v = new Array(a.length);
    v[0] = a[0];
    for (var i = 1;i < a.length;i++) {
      v[i] = v[i - 1] + a[i];
    }
    return v;
  }
  if ($u.isarray(x)) {
    return _cumsum(x);
  }
  return $u.vectorfun(x,function(val){return _cumsum(val);},dim);
}

}