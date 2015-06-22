/**
 * Sorting and Reshaping Arrays
 */
 module.exports = function($u) {
/**
 * @method flipdim
 * @summary Flip order of elements in array or matrix
 * @description Flip order of elements in array or matrix
 * 
 * @param  {array|matrix} x array or matrix of elements
 * @param  {number} dim dimension to apply reverse ordering 0: rows, 1: column (def: 1)
 * @return {array|matrix}     
 * 
 * @example
 * ubique.flipdim([5,6,3],1);
 * // [3, 6, 5]
 * 
 * ubique.flipdim([5,6,3],0);
 * // [5, 6, 3]
 * 
 * ubique.flipdim([[5,6,5],[7,8,-1]]);
 * // [ [ 5, 6, 5 ], [ -1, 8, 7 ] ]
 * 
 * ubique.flipdim([[5,6,5],[7,8,-1]],0);
 * // [ [ 7, 8, -1 ], [ 5, 6, 5 ] ]
 */
 $u.flipdim = function(x,dim) {
  if (arguments.length === 0) {
    throw new Error('not enough input arguments');
  }
  dim = dim == null ? 1 : dim;
  var _flipdim = function(a) {
    return $u.clone(a.reverse());
  }
  if ($u.isnumber(x)) {
    return x;
  } else 
  if ($u.isarray(x)) {
    if (dim === 1) {
      return _flipdim(x);
    } else {
      return x;
    }
  } else 
  if ($u.ismatrix(x)) {
    return $u.vectorfun(1-dim,x,_flipdim)
  } else {
    throw new Error('unknown input arguments');
  }

}
}