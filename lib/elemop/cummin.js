/**
 * Arithmetic Operations
 */
 module.exports = function($u) {
 /**
 * @method cummin
 * @summary Cumulative min of array elements
 * @description Cumulative min of array elements
 * 
 * @param  {array|matrix} x array or matrix of values
 * @param  {number} dim dimension selected, 1: column 0: row (def: 1)
 * @return {array|matrix}   
 *
 * @example
 * ubique.cummin([5,6,3]);
 * // [5, 5, 3]
 * ubique.cummin([[5,6,5],[7,8,-1]]);
 * // [[5, 6, 5], [5, 6, -1]]
 * ubique.cummin([[5,6,5],[7,8,-1]],0);
 * // [[5, 5, 5], [7, 7, -1]]
 */
 $u.cummin = function(x,dim) {
  if (arguments.length === 0) {
    throw new Error('not enough input arguments');
  }
  if (arguments.length === 1) {
    dim = 1;
  }
  var _cummin =  function(a) {
    var v = new Array(a.length);
    v[0] = a[0];
    for (var i = 1;i < a.length;i++) {
      if (a[i] < v[i - 1]) {
        v[i] = a[i];
      } else { 
        v[i] = v[i - 1];
      }
    }
    return v;
  }
  if ($u.isarray(x)) {
    return _cummin(x);
  }
  return $u.vectorfun(x,function(val){return _cummin(val);},dim);
}

}