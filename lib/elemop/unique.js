/**
 * Set Operations
 */
 module.exports = function($u) {
/**
 * @method unique
 * @summary Unique values in array or matrix
 * @description Unique values in array or matrix
 *
 * @param  {array|matrix} x array or matrix of values
 * @param  {number} dim dimension 0: row, 1: column (def: 1)
 * @return {array|matrix}
 *
 * @example
 * ubique.unique([5,5,6,6,7]);
 * // [ 5, 6, 7 ]
 * ubique.unique([[5,4],[5,3],[6,3]]);
 * // [ [ 5, 3 ], [ 6, 4 ] ]
 */
 $u.unique = function(x,dim) {
  if (arguments.length === 0) {
    throw new Error('not enough input arguments');
  }
  if (arguments.length === 1) {
    dim = 1;
  }
  var _unique = function(a) {
    var o = {},
    r = [];
    for (var i = 0; i < a.length; i++) {
      o[a[i]] = a[i];
    }
    for(i in o) {
      r.push(o[i]);
    }
    return r;
  }

  if ($u.isnumber(x)) {
    return x;
  }
  if ($u.isarray(x)) {
    return  _unique(x);
  }
  return $u.vectorfun(x,function(val){return _unique(val);},dim);
}
}
